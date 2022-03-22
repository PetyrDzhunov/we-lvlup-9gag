import request from './fetch.js';
import { giphyAPIkey } from '../../constants.js';

export default async function getUploadedGifs(currentUserGifs) {
  try {
    const gifs = await request(
      `http://api.giphy.com/v1/gifs?ids=${currentUserGifs}&api_key=${giphyAPIkey}`,
    );
    return gifs;
  } catch (err) {
    return err;
  }
}
