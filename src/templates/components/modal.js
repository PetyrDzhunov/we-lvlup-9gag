import { html } from 'https://unpkg.com/lit-element/lit-element.js?module';

const focusModal = () => {
  $(document).on('shown.bs.modal', '#exampleModal', function () {
    $(email).focus();
  });
};

export default function modalTemplate(authenticate) {
  return html`
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      ${authenticate}
    </button>

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
            <h5 class="modal-title" id="exampleModalLabel">${authenticate}</h5>
            <button
              type="button"
              class="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <input type="$1" id="email" placeholder="Email adress" />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button btn-authentication" class="btn btn-primary">
              ${authenticate}
            </button>
          </div>
        </div>
      </div>
    </div>
    ${focusModal()}
  `;
}