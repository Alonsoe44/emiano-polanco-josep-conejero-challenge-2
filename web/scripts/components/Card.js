import Component from "./Component.js";
import series from "../series.js";

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
                </ul>
                <i class="fas fa-times-circle icon--delete"></i>`;
  }
}
