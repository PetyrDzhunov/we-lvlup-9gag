// import request from './fetch.js';
// import { giphyAPIkey } from '../../constants.js';
import getUploadedGifs from './getUploadedGifs.js';
import { gifsRef } from '../../constants.js';

export default async function getCurrentUserUploadedGifs(uid) {
  try {
    const response = await gifsRef.get();
    const gifs = response.docs
      .map((gif) => gif.data())
      .filter((giphy) => giphy.creator === uid)
      .map((currGif) => currGif.gif)
      .join(',');

    const currUserGiphies = await getUploadedGifs(gifs);
    return currUserGiphies.data;
  } catch (err) {
    return err;
  }
}
