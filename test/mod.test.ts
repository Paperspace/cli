import { describe, it } from "https://deno.land/std/testing/bdd.ts";
import { assertSpyCalls } from "https://deno.land/std/testing/mock.ts";
import { stub } from "https://deno.land/std/testing/mock.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import { root } from "../mod.ts";

describe("pspace", () => {
  it("should print version", async () => {
    const stdoutStub = stub(Deno.stdout, "write");
    await root.execute(["version"]);

    assertSpyCalls(stdoutStub, 1);
    assert(
      new TextDecoder().decode(stdoutStub.calls[0].args[0]).startsWith(
        "pspace v",
      ),
    );

    stdoutStub.restore();
  });
});
