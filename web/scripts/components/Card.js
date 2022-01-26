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

    /* this.element.appendChild("series-list"); */
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
