import Component from "../scripts/components/Component.js";
import Start from "../scripts/components/Stars.js";

describe("Given a Star class' constructor", () => {
  describe("When it's invoked with 'body'", () => {
    test("Then it returns not null", () => {
      const parentElementConstructor = document.querySelector("body");

      const starValue = new Start(parentElementConstructor);

      expect(starValue).not.toBeNull();
    });
  });
});
