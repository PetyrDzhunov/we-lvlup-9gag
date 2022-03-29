import singleGiphy from './partials/singleGiphy.js';
import { html } from 'https://unpkg.com/lit-element/lit-element.js?module';

export default function favoritesTemplate(favoriteGifies) {
  return html`
    ${favoriteGifies.length === 0
      ? html`<p>You don't have any favorite gifies yet!</p>`
      : favoriteGifies.map(singleGiphy)}
  `;
}
