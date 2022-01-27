import Component from "../scripts/components/Component.js";
/* import series from "../series.js"; */
import Card from "../scripts/components/Card.js";

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

  describe("When it's invoked with body, '' and serie with a name", () => {
    test("Then it returns an alt = The Sopranos poster", () => {
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
