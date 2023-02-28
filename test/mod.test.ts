import { asserts, assertSpyCalls, describe, it, stub } from "./deps.ts";
import { root } from "../commands/mod.ts";

describe("pspace", () => {
  it("should print version", async () => {
    const stdoutStub = stub(Deno.stdout, "write");
    await root.execute(["version"]);

    assertSpyCalls(stdoutStub, 1);
    asserts.assert(
      new TextDecoder().decode(stdoutStub.calls[0].args[0]).startsWith(
        "pspace v",
      ),
    );

    stdoutStub.restore();
  });
});
