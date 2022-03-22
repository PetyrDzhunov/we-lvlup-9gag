import { html } from 'https://unpkg.com/lit-element/lit-element.js?module';

export default function singleGiphy(giphy) {
  return html`
    <div class="card m-2" style="width: 40rem;">
      <div class="card-body">
        <h5 class="card-title">${giphy.title}</h5>
      </div>
      <img
        class="card-img-top"
        src=${giphy.images.downsized_large.url}
        alt="Card image cap"
      />
      <footer class="giphy-footer">
        <button class="giphy-footer__button">
          <i class="like bi bi-hand-thumbs-up"></i>
        </button>
        <button class="giphy-footer__button">
          <i class="dislike bi bi-hand-thumbs-down"></i>
        </button>
        <button class="giphy-footer__button">
          <i class="comment bi bi-chat-left-fill"></i>
        </button>
      </footer>
    </div>
  `;
}
