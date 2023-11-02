import App from "./lib.js";

describe("App works", () => {
  it("Calls the callback with hello world!", () => {
    let called = null;
    const logger = (data: string) => (called = data);
    const app = App(logger);
    app("Hello World!");

    if (called !== "Hello World!") {
      throw new Error("Expected to be called with Hello World!");
    }

    return true;
  });
});
