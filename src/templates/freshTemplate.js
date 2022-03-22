import singleGiphy from './partials/singleGiphy.js';
import { html } from 'https://unpkg.com/lit-element/lit-element.js?module';

export default function freshMemeTemplate(tenGiphies) {
  return html` ${tenGiphies.map(singleGiphy)} `;
}
