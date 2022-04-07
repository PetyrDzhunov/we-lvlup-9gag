import getUploadedGifs from './getUploadedGifs.js';
import { gifsRef } from '../../constants.js';

export default async function getCurrentUserUploadedGifs() {
  try {
    const response = await gifsRef.get();
    const gifs = response.docs
      .map((gif) => gif.data())
      .map((currGif) => currGif.gif)
      .join(',');

    console.log(gifs);
    if (!gifs) {
      return [];
    }
    const currUserGiphies = await getUploadedGifs(gifs);
    return currUserGiphies.data;
  } catch (err) {
    return err;
  }
}
