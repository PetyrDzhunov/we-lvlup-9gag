/* eslint-disable indent */
import singleComment from './partials/singleComment.js';
import likeGiphy from '../utils/fetch/likeGiphy.js';
import userData from '../utils/data/userData.js';
import sendCommentToFirebaseAndAttachItToCurrentGif from '../utils/fetch/sendCommentToFirebaseAndAttachItToCurrentGif.js';
import { html } from 'https://unpkg.com/lit-element/lit-element.js?module';

const cleanComment = () => {
  $('#comment').val('');
};

const addComment = async (e) => {
  e.preventDefault();
  const user = userData.getUserData();
  if (!user) {
    cleanComment();
    alert('Only logged in users can comment!');
    return;
  }
  const formData = new FormData(e.target);
  const comment = formData.get('comment');

  const giphyId = document.querySelector('.card').dataset.id;
  $('#comment').val('');
  await sendCommentToFirebaseAndAttachItToCurrentGif(user, giphyId, comment);

  page.redirect(`/details/${giphyId}`);
};

export default function detailsTemplate(
  giphy,
  comments,
  isLikedByCurrentUser = false
) {
  const hasCreator = giphy.user || null;
  const hasInstagram = giphy.user?.instagram_url || null;
  return html`
    <section id="detailsPage">
      <div data-id=${giphy.id} class="card m-2">
        <div
          class="card-body d-flex justify-content-center flex-column text-center"
        >
          <h5 class="card-title">${giphy.title}</h5>
          ${
            hasCreator
              ? html` <div class="giphy__creator">
                  <img src=${giphy.user.avatar_url} />
                  <p class="giphy__username">${giphy.user.username}</p>
                  <p class="giphy__description">${giphy.user.description}</p>
                  ${hasInstagram
                    ? html` <a
                        class="giphy__instagram"
                        href=${giphy.user.instagram_url}
                        ><i class="bi bi-instagram"></i
                      ></a>`
                    : null}
                </div>`
              : null
          }
        <img
          id="single-giphy-img"
          class="card-img-top"
          src=${giphy.images.downsized_large.url}
          alt="Card image cap"
        />
        <footer class="giphy-footer">
          ${
            isLikedByCurrentUser
              ? html`<i
                  class="giphy-footer__icon like bi bi-hand-thumbs-up-fill"
                ></i>`
              : html`<i
                  @click=${likeGiphy}
                  class="giphy-footer__icon like bi bi-hand-thumbs-up"
                ></i>`
          }
          <i class="giphy-footer__icon dislike bi bi-hand-thumbs-down"></i>
          <i class="giphy-footer__icon comment bi bi-chat-left-fill"></i>
        </footer>
      </div>
      <section>
        <form @submit=${addComment}>
          <article class="form-group">
            <textarea
              placeholder="Comment here..."
              class="form-control"
              id="comment"
              rows="4"
              name="comment"
            ></textarea>
            <div class="d-flex flex-row-reverse">
              <button type="submit" class="btn btn-primary m-2">Post</button>
              <button
                @click=${cleanComment}
                type="button"
                class="btn btn-secondary m-2"
              >
                Cancel
              </button>
            </div>
          </article>
        </form>
      </section>
      <article id="comments">${comments.map(singleComment)}</article>
    </section>
  `;
}
