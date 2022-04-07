import getUploadedGifs from './getUploadedGifs.js';
import { gifsRef } from '../../constants.js';

export default async function getMostRecentlyUploadedGifs() {
  try {
    const response = await gifsRef.get();
    const gifs = response.docs
      .map((gif) => gif.data())
      .filter((currGif) => currGif.creator)
      .map((currentGif) => currentGif.gif)
      .join(',');

    if (!gifs) {
      return [];
    }
    const mostRecentlyUploadedGifs = await getUploadedGifs(gifs);
    const mostRecentlyUploadedGifsSortedByDate =
      mostRecentlyUploadedGifs.data.sort(
        (a, b) => new Date(b.import_datetime) - new Date(a.import_datetime),
      );
    return mostRecentlyUploadedGifsSortedByDate;
  } catch (err) {
    return err;
  }
}
