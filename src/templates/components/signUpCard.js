import { html } from 'https://unpkg.com/lit-element/lit-element.js?module';

export default function signUpCard() {
  return html`
    <div class="card">
      <h1 class="card__header">New to 9GAG?</h1>
      <p class="card__text">Sign up now to see more content!</p>
      <button class="card__button">Sign up</button>
    </div>
  `;
}
