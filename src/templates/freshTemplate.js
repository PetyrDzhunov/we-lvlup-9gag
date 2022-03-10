import freshjQueryFunction from '../utils/dom/freshjQuery.js';

import { html } from 'https://unpkg.com/lit-element/lit-element.js?module';

const singleGiphy = (giphy) => html`
  ${console.log(giphy)}
  <div class="card m-2" style="width: 40rem;">
    <div class="card-body">
      <h5 class="card-title">${giphy.title}</h5>
    </div>
    <img class="card-img-top" src=${giphy.images.downsized_large.url} alt="Card image cap" />
  </div>
`;

export default function freshMemeTemplate(fiftyGifs) {
  return html`
    <section>${fiftyGifs.map(singleGiphy)}</section>
    ${freshjQueryFunction()}
  `;
}
