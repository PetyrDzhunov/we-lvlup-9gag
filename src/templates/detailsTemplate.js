import likeGiphy from '../utils/fetch/likeGiphy.js';
import { html } from 'https://unpkg.com/lit-element/lit-element.js?module';

export default function detailsTemplate(giphy) {
  const hasCreator = giphy.user || null;

  return html`
    <section id="detailsPage">
      <div data-id=${giphy.id} class="card m-2" style="width: 40rem;">
        <div
          class="card-body d-flex justify-content-center flex-column text-center"
        >
          <h5 class="card-title">${giphy.title}</h5>
          ${hasCreator
            ? html`<img src=${giphy.user.avatar_url} />
                <p>${giphy.user.description}</p>`
            : null}
        </div>
        <img
          id="single-giphy-img"
          class="card-img-top"
          src=${giphy.images.downsized_large.url}
          alt="Card image cap"
        />
        <footer class="giphy-footer">
          <i
            @click=${likeGiphy}
            class="giphy-footer__icon like bi bi-hand-thumbs-up"
          ></i>
          <i class="giphy-footer__icon dislike bi bi-hand-thumbs-down"></i>
          <i class="giphy-footer__icon comment bi bi-chat-left-fill"></i>
        </footer>
      </div>
    </section>
  `;
}
