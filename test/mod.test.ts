import { fail } from "https://deno.land/std@0.179.0/testing/asserts.ts";
import { billingAccountStanding } from "../api/billing.ts";
import { SuccessData } from "../api/client.ts";
import { projects } from "../api/projects.ts";
import { publicIps } from "../api/public-ips.ts";
import { root } from "../commands/mod.ts";
import { get as projectGet } from "../commands/project/get/mod.ts";
import { config as appConfig } from "../config.ts";
import { claim as publicIpClaim } from "../commands/public-ip/claim/mod.ts";
import { env } from "../env.ts";
import {
  asserts,
  assertSpyCalls,
  describe,
  it,
  resolvesNext,
  stub,
} from "./deps.ts";
import { credentials } from "../credentials.ts";

describe("pspace", () => {
  it("should print version", async () => {
    const stdoutStub = stub(Deno.stdout, "write");
    await root.execute(["version"]);

    try {
      assertSpyCalls(stdoutStub, 1);
      asserts.assert(
        new TextDecoder().decode(stdoutStub.calls[0].args[0]).startsWith(
          "pspace v",
        ),
      );
    } finally {
      stdoutStub.restore();
    }
  });

  it("meta.requireApiKey should permit calls with api keys", async () => {
    // ensure the method we're stubbing actually has requireApiKey
    asserts.assert(
      projectGet.meta.requireApiKey,
      "requireApiKey is false for `project get`, test is misconfigured.",
    );

    env.set("PAPERSPACE_API_KEY", "moo-cows-key");

    const methodStub = stub(
      projects,
      "get",
      resolvesNext<SuccessData<"/projects/{id}", "get">>([{
        ok: true,
        response: new Response(),
        data: {
          dtCreated: new Date(),
          id: "moo-cows-id",
          name: "moo-cows",
        },
      }]),
    );

    try {
      // this should succeed
      await root.execute(["project", "get", "moo-cows-id"]);
    } catch (e) {
      throw e;
    } finally {
      assertSpyCalls(methodStub, 1);

      env.delete("PAPERSPACE_API_KEY");

      methodStub.restore();
    }
  });

  it("meta.requireApiKey should reject calls without api keys", async () => {
    // ensure the method we're stubbing actually has requireApiKey
    asserts.assert(
      projectGet.meta.requireApiKey,
      "requireApiKey is false for `project get`, test is misconfigured.",
    );

    const methodStub = stub(
      projects,
      "get",
      resolvesNext<SuccessData<"/projects/{id}", "get">>([{
        ok: true,
        response: new Response(),
        data: {
          dtCreated: new Date(),
          id: "moo-cows-id",
          name: "moo-cows",
        },
      }]),
    );

    try {
      // this should fail
      await root.execute(["project", "get", "moo-cows-id"]);

      fail("Expected an error to be thrown.");
    } catch (e) {
      asserts.assertStringIncludes(
        e.message,
        "You must be logged in to run this command.",
      );
    } finally {
      assertSpyCalls(methodStub, 0);

      methodStub.restore();
    }
  });

  it("meta.requireInGoodStanding should permit calls in good standing", async () => {
    // ensure the method we're stubbing actually has requireInGoodStanding
    asserts.assert(
      publicIpClaim.meta.requireInGoodStanding,
      "requireInGoodStanding is false for `public-ip claim`, test is misconfigured.",
    );

    env.set("PAPERSPACE_API_KEY", "moo-cows-key");

    const methodStub = stub(
      publicIps,
      "claim",
      resolvesNext<SuccessData<"/public-ips", "post">>([{
        ok: true,
        response: new Response(),
        data: {
          dtCreated: new Date(),
          ip: "",
          region: "",
        },
      }]),
    );

    const inGoodStandingStub = stub(
      billingAccountStanding,
      "get",
      resolvesNext<SuccessData<"/billing/account-standing", "get">>([{
        ok: true,
        response: new Response(),
        data: {
          isInGoodStanding: true,
          messages: [],
        },
      }]),
    );

    try {
      // this should succeed
      await root.execute(["public-ip", "claim", "-r", "moo-cows-region"]);
    } catch (e) {
      throw e;
    } finally {
      assertSpyCalls(inGoodStandingStub, 1);

      assertSpyCalls(methodStub, 1);

      env.delete("PAPERSPACE_API_KEY");

      inGoodStandingStub.restore();

      methodStub.restore();
    }
  });

  it("meta.requireInGoodStanding should reject calls not in good standing", async () => {
    // ensure the method we're stubbing actually has requireInGoodStanding
    asserts.assert(
      publicIpClaim.meta.requireInGoodStanding,
      "requireInGoodStanding is false for `public-ip claim`, test is misconfigured.",
    );

    env.set("PAPERSPACE_API_KEY", "moo-cows-key");

    const methodStub = stub(
      publicIps,
      "claim",
      resolvesNext<SuccessData<"/public-ips", "post">>([{
        ok: true,
        response: new Response(),
        data: {
          dtCreated: new Date(),
          ip: "",
          region: "",
        },
      }]),
    );

    const inGoodStandingStub = stub(
      billingAccountStanding,
      "get",
      resolvesNext<SuccessData<"/billing/account-standing", "get">>([{
        ok: true,
        response: new Response(),
        data: {
          isInGoodStanding: false,
          messages: ["moo-cows-message"],
        },
      }]),
    );

    const credentialsStub = stub(
      credentials,
      "get",
      resolvesNext([{
        keys: {},
        version: 1 as const,
      }]),
    );

    await appConfig.set("team", "keys");

    try {
      // this should fail
      await root.execute(["public-ip", "claim", "-r", "moo-cows-region"]);

      fail("Expected an error to be thrown.");
    } catch (e) {
      asserts.assertStringIncludes(e.message, "Add a credit card to continue");
    } finally {
      assertSpyCalls(inGoodStandingStub, 1);

      assertSpyCalls(methodStub, 0);

      env.delete("PAPERSPACE_API_KEY");

      await appConfig.delete("team");

      credentialsStub.restore();

      inGoodStandingStub.restore();

      methodStub.restore();
    }
  });
});
