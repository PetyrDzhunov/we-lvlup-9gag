/* eslint-disable indent */
import singleComment from './partials/singleComment.js';
import likeGiphy from '../utils/fetch/likeGiphy.js';
import userData from '../utils/data/userData.js';
import sendCommentToFirebaseAndAttachItToCurrentGif from '../utils/fetch/sendCommentToFirebaseAndAttachItToCurrentGif.js';
import { html } from 'https://unpkg.com/lit-element/lit-element.js?module';

const addComment = async (e) => {
  e.preventDefault();
  const { uid } = userData.getUserData();
  const formData = new FormData(e.target);
  const comment = formData.get('comment');
  const giphyId =
    e.target.parentElement.parentElement.querySelector('.card').dataset.id;
  $('#comment').val('');
  await sendCommentToFirebaseAndAttachItToCurrentGif(uid, giphyId, comment);

  page.redirect(`/details/${giphyId}`);
};

export default function detailsTemplate(giphy, isLikedByCurrentUser, comments) {
  const hasCreator = giphy.user || null;

  console.log('re-renered');
  return html`
    <section id="detailsPage">
      <div data-id=${giphy.id} class="card m-2" style="width: 40rem;">
        <div
          class="card-body d-flex justify-content-center flex-column text-center"
        >
          <h5 class="card-title">${giphy.title}</h5>
          ${hasCreator
            ? html`<img src=${giphy.user.avatar_url} />
                <p>${giphy.user.description}</p>`
            : null}
        </div>
        <img
          id="single-giphy-img"
          class="card-img-top"
          src=${giphy.images.downsized_large.url}
          alt="Card image cap"
        />
        <footer class="giphy-footer">
          ${isLikedByCurrentUser
            ? html`<i
                class="giphy-footer__icon like bi bi-hand-thumbs-up-fill"
              ></i>`
            : html`<i
                @click=${likeGiphy}
                class="giphy-footer__icon like bi bi-hand-thumbs-up"
              ></i>`}
          <i class="giphy-footer__icon dislike bi bi-hand-thumbs-down"></i>
          <i class="giphy-footer__icon comment bi bi-chat-left-fill"></i>
        </footer>
      </div>
      <section>
        <form @submit=${addComment}>
          <article class="form-group">
            <label for="comment">Comment:</label>
            <textarea
              class="form-control"
              id="comment"
              rows="4"
              name="comment"
            ></textarea>
            <button type="submit" class="btn btn-primary mt-3">
              Add comment
            </button>
          </article>
        </form>
      </section>
      <article id="comments">${comments.map(singleComment)}</article>
    </section>
  `;
}
