import singleGiphy from './partials/singleGiphy.js';
import { html } from 'https://unpkg.com/lit-element/lit-element.js?module';

export default function freshTemplate(freshGifs) {
  return html` ${freshGifs.map(singleGiphy)} `;
}
