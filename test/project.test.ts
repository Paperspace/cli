import { projects } from "../api/projects.ts";
import { root } from "../commands/mod.ts";
import { env } from "../env.ts";
import { assertLogin, resolvesResponse } from "./api.ts";
import {
  afterEach,
  assertSpyCallArg,
  beforeEach,
  describe,
  it,
  stub,
} from "./deps.ts";

describe("pspace project", () => {
  describe("authenticated", () => {
    beforeEach(() => env.set("PAPERSPACE_API_KEY", "moo-cows-key"));
    afterEach(() => env.delete("PAPERSPACE_API_KEY"));

    describe("create", () => {
      it("should call create with the correct parameters", async () => {
        const methodStub = stub(
          projects,
          "create",
          resolvesResponse<"/projects", "post">({
            dtCreated: new Date(),
            id: "moo-cows-id",
            name: "moo-cows",
          }),
        );

        await root.execute(["project", "create", "moo-cows"]);

        assertSpyCallArg(methodStub, 0, 0, {
          name: "moo-cows",
        });
      });
    });
  });

  describe("unauthenticated", () => {
    it("create should fail", async () => {
      await assertLogin(() => root.execute(["project", "create", "moo-cows"]));
    });

    it("get should fail", async () => {
      await assertLogin(() => root.execute(["project", "get", "moo-cows"]));
    });

    it("list should fail", async () => {
      await assertLogin(() => root.execute(["project", "list"]));
    });

    it("update should fail", async () => {
      await assertLogin(() => root.execute(["project", "update", "moo-cows"]));
    });

    it("link should fail", async () => {
      await assertLogin(() => root.execute(["project", "link"]));
    });

    it("delete should fail", async () => {
      await assertLogin(() => root.execute(["project", "delete", "moo-cows"]));
    });
  });
});
