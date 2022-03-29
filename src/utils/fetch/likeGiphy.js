import addGiphyLikeToFirebase from './addGiphyLikeToFirebase.js';
import userData from '../data/userData.js';

export default async function likeGiphy(e) {
  const user = userData.getUserData();
  let isLiked = false;

  if (!user) {
    alert('Only logged in users can like or dislike posts');
    return;
  }
  const currentGiphyId = e.target.parentElement.parentElement.dataset.id;

  isLiked = true;
  const currentLikeBtn = e.target;

  if (isLiked) {
    $(currentLikeBtn)
      .removeClass('bi bi-hand-thumbs-up')
      .addClass('bi bi-hand-thumbs-up-fill');
  }
  await addGiphyLikeToFirebase(user.uid, currentGiphyId);

  // after that I can use the length of the array to show how many likes this giphy has
}
