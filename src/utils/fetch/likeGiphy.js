import addGiphyLikeToFirebase from './addGiphyLikeToFirebase.js';
import userData from '../data/userData.js';

export default async function likeGiphy(e) {
  const user = userData.getUserData();
  let isLiked = false;

  if (!user) {
    return alert('Only logged in users can like or dislike posts');
  }

  const currentGiphyId = e.target.parentElement.parentElement.dataset.id;

  await addGiphyLikeToFirebase(user.uid, currentGiphyId);

  const currentLikeBtn = e.target;

  isLiked = true;

  if (isLiked) {
    $(currentLikeBtn)
      .removeClass('bi bi-hand-thumbs-up')
      .addClass('bi bi-hand-thumbs-up-fill');
  }
  // after that I can use the length of the array to show how many likes this giphy has
}
