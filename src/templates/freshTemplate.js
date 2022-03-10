import freshjQueryFunction from '../utils/dom/freshjQuery.js';
import getFiftyGiphies from '../utils/fetch/trending.js';


import { html } from 'https://unpkg.com/lit-element/lit-element.js?module';

const singleGiphy = (giphy) => html`
${console.log(giphy)}
<!-- <div class="giphy-box__outt">
  <div class="giphy-box__inner">
    <p class="giphy__name">Name: ${giphy.name}</p>
    <p class="artist">Artist: ${giphy.artist}</p>
    <p class="genre">Genre: ${giphy.genre}</p>
    <p class="price">Price: $${giphy.price}</p>
    <p class="date">Release Date: ${giphy.releaseDate}</p>
  </div>
  <img class="text-center" src=${giphy.images.downsized_large.url}>

</div> -->
<div class="card m-2" style="width: 40rem;">
  <img class="card-img-top" src=${giphy.images.downsized_large.url} alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${giphy.title}</h5>
  </div>
</div>
`;

export default function freshMemeTemplate(fiftyGifs) {

  return html`
    <section>
      ${fiftyGifs.map(singleGiphy)}
    </section>
    ${freshjQueryFunction()}
  `;
}
