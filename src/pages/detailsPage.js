import detailsTemplate from '../templates/detailsTemplate.js';
import getSingleGiphyById from '../utils/fetch/getSingleGiphyById.js';
import { gifsRef } from '../constants.js';
import userData from '../utils/data/userData.js';

const checkIfCurrentGiphyIsLikedByCurrentUserLoggedIn = async (uid, giphy) => {
  const response = await gifsRef.get();

  const gifs = response.docs
    .map((gif) => gif.data())
    .filter((currGiphy) => currGiphy.likes);

  const myGifs = gifs
    .filter((current) => current.likes.includes(uid))
    .map((currGif) => currGif.gif);

  return myGifs.includes(giphy.id);
};

export default async function detailsPage(ctx) {
  const giphy = await getSingleGiphyById(ctx.params.id);
  const { uid } = userData.getUserData();

  const isLikedByCurrentUser =
    await checkIfCurrentGiphyIsLikedByCurrentUserLoggedIn(uid, giphy);
  ctx.render(detailsTemplate(giphy, isLikedByCurrentUser));
}
