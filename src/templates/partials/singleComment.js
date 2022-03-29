import { html } from 'https://unpkg.com/lit-element/lit-element.js?module';

export default function singleGiphy({ commentator, comment }) {
  return html`
    <div>
      ${commentator}
      <p>${comment}</p>
    </div>
  `;
}
