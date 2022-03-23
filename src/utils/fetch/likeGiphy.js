import userData from '../data/userData.js';

export default async function likeGiphy(e) {
  const user = userData.getUserData();
  // let isLiked = false;

  if (!user) {
    return alert('Only logged in users can like or dislike posts');
  }
}
