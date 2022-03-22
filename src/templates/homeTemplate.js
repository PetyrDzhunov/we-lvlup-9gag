import singleGiphy from './partials/singleGiphy.js';
import { html } from 'https://unpkg.com/lit-element/lit-element.js?module';

export default function homeTemplate(mostLikedGiphies) {
  return html` ${mostLikedGiphies.map(singleGiphy)}`;
}
