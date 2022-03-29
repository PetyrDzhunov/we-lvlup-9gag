import singleGiphy from './partials/singleGiphy.js';
import { html } from 'https://unpkg.com/lit-element/lit-element.js?module';

export default function usersUploadTemplate(uploadedGifs) {
  return html`
    ${uploadedGifs.length === 0
      ? html`<p>You have not uploaded any gifies yet!</p>`
      : uploadedGifs.map(singleGiphy)}
  `;
}
