import likeGiphy from '../../utils/fetch/likeGiphy.js';
import { html } from 'https://unpkg.com/lit-element/lit-element.js?module';

export default function singleGiphy(giphy) {
  const isAtFavorites = window.location.href.endsWith('/favorites');

  return html`
    <div data-id=${giphy.id} class="card m-2" style="width: 40rem;">
      <div class="card-body">
        <h5 class="card-title">${giphy.title}</h5>
      </div>
      <a href="/details/${giphy.id}">
        <img
          id="single-giphy-img"
          class="card-img-top"
          src=${giphy.images.downsized_large.url}
          alt="Card image cap"
        />
      </a>
      <footer class="giphy-footer">
        ${isAtFavorites
    ? html`<i
              class="giphy-footer__icon like bi bi-hand-thumbs-up-fill"
            ></i>`
    : html`<i
              @click=${likeGiphy}
              class="giphy-footer__icon like bi bi-hand-thumbs-up"
            ></i>`}
        <i class="giphy-footer__icon dislike bi bi-hand-thumbs-down"></i>
        <i class="giphy-footer__icon comment bi bi-chat-left-fill"></i>
      </footer>
    </div>
  `;
}
