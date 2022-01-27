import Component from "../scripts/components/Component.js";
/* import series from "../series.js"; */

export default class Card extends Component {
  rutaPoster;
  nombreSerie;
  creadorSerie;
  puntuacionSerie;
  tituloAltSerie;

  constructor(parentElement, className, serie) {
    super(parentElement, className, "ul");

    this.rutaPoster = serie.poster;
    this.nombreSerie = serie.name;
    this.creadorSerie = serie.creator + " (" + serie.year + ")";
    this.tituloAltSerie = serie.name + " poster";
    this.element.innerHTML = this.generateHTML();
  }

  generateHTML() {
    return `<img
                  class="serie__poster"
                  src="${this.rutaPoster}"
                  alt="${this.tituloAltSerie}"
                />
                <h4 class="serie__title">${this.nombreSerie}</h4>
                <p class="serie__info">${this.creadorSerie}</p>
                <ul class="score">
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="1/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="2/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="3/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="4/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="5/5"></i>
                  </li>
                </ul>
                <i class="fas fa-times-circle icon--delete"></i>`;
  }
}

describe("Given a Card class' constructor", () => {
  describe("When it's invoked with body, '' and serie", () => {
    test("Then it returns not null", () => {
      const serie = {
        id: 1,
        name: "The Sopranos",
        creator: "David Chase",
        year: 1999,
        poster:
          "https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
        watched: true,
        score: 5,
        emmies: 21,
      };
      const parentElementConstructor = document.querySelector("body");
      const classNameConstructor = "";

      const card = new Card(
        parentElementConstructor,
        classNameConstructor,
        serie
      );

      expect(card).not.toBeNull();
    });
  });

  describe("When it's invoked with body, 'clase' and serie", () => {
    test("Then it returns not null", () => {
      const serie = {
        id: 1,
        name: "The Sopranos",
        creator: "David Chase",
        year: 1999,
        poster:
          "https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
        watched: true,
        score: 5,
        emmies: 21,
      };
      const parentElementConstructor = document.querySelector("body");
      const classNameConstructor = "";
      const expectedValue = "The Sopranos poster";

      const card = new Card(
        parentElementConstructor,
        classNameConstructor,
        serie
      );
      const obtainedValue = document.querySelector(".serie__poster").alt;

      expect(obtainedValue).toBe(expectedValue);
    });
  });
});
