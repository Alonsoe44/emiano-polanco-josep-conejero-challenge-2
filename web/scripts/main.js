import Card from "./components/Card.js";
import series from "./series.js";

const pageElement = document.querySelector(".container");

pageElement.innerHTML = `<header class="main-header">
        <h1 class="main-title">My Series</h1>
      </header>
      <main class="main">
        <section class="series">
          <h2 class="section-title">Series list</h2>
          <section class="series-pending">
            <h3 class="subsection-title">Pending series</h3>
            <p class="info">You have 4 series pending to watch</p>
            <!--<p class="info">Congrats! You've watched all your series</p>-->
            <ul class="series-list">
            </ul>
          </section>
          <section class="series-watched">
            <h3 class="subsection-title">Watched series</h3>
            <p class="info">You have watched 4 series</p>
            <!--<p class="info">You already have not watched any serie</p>-->
            <ul class="series-list series-list--watched">
            </ul>
          </section>
        </section>
      </main>`;

const parentElementSeriesPendientes = document.querySelector(
  ".series-pending ul:first-of-type"
);
const parentElementSeriesVistas = document.querySelector(
  ".series-list.series-list--watched"
);
series.forEach((serie) => {
  new Card(
    serie.watched ? parentElementSeriesVistas : parentElementSeriesPendientes,
    "serie",
    serie
  );
});
