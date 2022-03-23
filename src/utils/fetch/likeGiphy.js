import addGiphyLikeToFirebase from './addGiphyLikeToFirebase.js';
import userData from '../data/userData.js';

export default async function likeGiphy(e) {
  const user = userData.getUserData();
  let isLiked = false;

  if (!user) {
    return alert('Only logged in users can like or dislike posts');
  }

  const currentGiphyId = e.target.parentElement.parentElement.dataset.id;

  // add this giphy into firebase with an ID and attach to it likes as an array and put the current user id in there
  await addGiphyLikeToFirebase(user.uid, currentGiphyId);

  isLiked = true;
  // after that I can use the length of the array to show how many likes this giphy has
}
