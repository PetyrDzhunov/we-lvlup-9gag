import request from './fetch.js';
import getSingleGiphyById from './getSingleGiphyById.js';
import { gifsRef, giphyAPIkey } from '../../constants.js';
import { baseEndpoint } from '../../giphyEndpoints.js';

export default async function getFavoriteGifs(userId) {
  try {
    const response = await gifsRef.get();

    const gifs = response.docs
      .map((gif) => gif.data())
      .filter((currGiphy) => currGiphy.likes);

    const gifsAsString = gifs
      .filter((current) => current.likes.includes(userId))
      .map((currGif) => currGif.gif)
      .join(', ');

    const isMoreThanOne = gifsAsString.includes(',');

    if (isMoreThanOne) {
      const favoriteGifs = await request(
        `${baseEndpoint}?ids=${gifsAsString}&api_key=${giphyAPIkey}`
      );
      return favoriteGifs.data;
    }
    const favoriteGif = await getSingleGiphyById(gifsAsString);
    return [favoriteGif];
  } catch (err) {
    return err;
  }
}

// gifs from firebase with likes array;
