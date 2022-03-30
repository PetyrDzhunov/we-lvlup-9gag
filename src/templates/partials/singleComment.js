import { html } from 'https://unpkg.com/lit-element/lit-element.js?module';

export default function singleGiphy({ commentator, comment }) {
  return html`
    <div id="single-comment" class="d-flex flex-column mt-4">
      <p class="commentator">${commentator}</p>
      <p class="comment">${comment}</p>
    </div>
  `;
}
