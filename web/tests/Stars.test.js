import Component from "../scripts/components/Component.js";

export default class Stars extends Component {
  stars;
  constructor(parentElement) {
    super(parentElement, "score", "li");
    this.createSons();
    this.queryCreation();
    this.starListener();
  }

  createSons() {
    this.element.innerHTML = `<li class="score__star">
                    <i class="icon-score far fa-star" title="1/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon-score far fa-star" title="2/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon-score far fa-star" title="3/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon-score far fa-star" title="4/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon-score far fa-star" title="5/5"></i>
                  </li>`;
  }

  queryCreation() {
    this.stars = new Array(5);
    this.stars[0] = document.querySelector(`[title="1/5"]`);
    this.stars[1] = document.querySelector(`[title="2/5"]`);
    this.stars[2] = document.querySelector(`[title="3/5"]`);
    this.stars[3] = document.querySelector(`[title="4/5"]`);
    this.stars[4] = document.querySelector(`[title="5/5"]`);
    this.stars.map((element, index) =>
      document.querySelector(`[title="${index + 1}/${index + 2}"]`)
    );
  }

  starListener() {
    for (let i = 0; i < 5; i++) {
      this.stars[i].addEventListener("click", () => {
        console.log(`You clicked star ${i + 1}`);
      });
    }
  }
}

describe("Given a Star class' constructor", () => {
  describe("When it's invoked with 'body'", () => {
    test("Then it returns not null", () => {
      const parentElementConstructor = document.querySelector("body");

      const starValue = new Stars(parentElementConstructor);

      expect(starValue).not.toBeNull();
    });
  });
});
