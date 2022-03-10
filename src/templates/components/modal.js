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
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      ${authenticate}
    </button>
    <form id=${customId} @submit=${onSubmit}>
      <div class="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered " role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                ${authenticate}
              </h5>
              <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <button type="button" class="btn btn-primary" id="google-btn">
              Login with Google
            </button>
            <div class="modal-body d-flex flex-column">
              ${requiresFullName
                ? html`<input name="full-name" class="m-2" id="full-name" type="$1" placeholder="Full name" />`
                : null}
              <input type="email" class="m-2" id="email" placeholder="Email adress" name="email" />
              <input class="m-2" id="password" type="password" placeholder="Password" name="password" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="submit" class="btn btn-primary">
                ${authenticate}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
    ${focusModal()}
  `;
}
