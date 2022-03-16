/* eslint-disable indent */
import { html } from 'https://unpkg.com/lit-element/lit-element.js?module';

const focusModal = () => {
  $(document).on('shown.bs.modal', '#exampleModal', function () {
    $(email).focus();
  });
};

export default function modalTemplate(
  authenticate,
  onSubmit,
  customId,
  requiresFullName = false,
) {
  return html`
    <button
      type="button"
      class="btn btn-primary d-flex justify-content-center"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      ${authenticate}
    </button>
    <form id=${customId} @submit=${onSubmit}>
      <div
        class="modal"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered " role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                ${authenticate}
              </h5>
              <button
                type="button"
                class="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal__social-button__list">
              <button type="button" class="modal__btn" id="fb-btn">
                <i class="bi bi-facebook"></i>
                Countinue with Facebook
              </button>
              <button type="button" class="modal__btn" id="google-btn">
                <i class="bi bi-google"></i>
                Countinue with Google
              </button>
            </div>
            <div class="modal-body d-flex flex-column">
              ${requiresFullName
                ? html`<input
                    name="full-name"
                    class="modal-input m-2"
                    id="full-name"
                    placeholder="Full name"
                  />`
                : null}
              <input
                type="email"
                class="m-2 modal-input "
                id="email"
                placeholder="Email adress"
                name="email"
              />
              <input
                class="m-2 modal-input "
                id="password"
                type="password"
                placeholder="Password"
                name="password"
              />
            </div>
            <button type="submit" class="btn btn-primary modal__submit-btn">
              ${authenticate}
            </button>
            <p class="modal__text">Forgot Password?</p>
          </div>
        </div>
      </div>
    </form>
    ${focusModal()}
  `;
}
