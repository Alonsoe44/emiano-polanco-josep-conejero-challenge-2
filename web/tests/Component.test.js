export default class Component {
  element;
  constructor(parentElement, className, htmlTag) {
    this.element = document.createElement(htmlTag);
    this.element.classList = className;
    parentElement.append(this.element);
  }
}

describe("Given a Component class' constructor", () => {
  describe("When it's invoked with body, '' and p", () => {
    test("Then it returns not null", () => {
      const parentElementConstructor = document.querySelector("body");
      const classNameConstructor = "";
      const htmlTagConstructor = "p";

      const component = new Component(
        parentElementConstructor,
        classNameConstructor,
        htmlTagConstructor
      );

      expect(component).not.toBeNull();
    });
  });
});
