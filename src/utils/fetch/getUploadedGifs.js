import request from './fetch.js';
import { giphyAPIkey } from '../../constants.js';
import { baseEndpoint } from '../../giphyEndpoints.js';

export default async function getUploadedGifs(currentUserGifs) {
  try {
    const gifs = await request(
      `${baseEndpoint}?ids=${currentUserGifs}&api_key=${giphyAPIkey}`,
    );
    return gifs;
  } catch (err) {
    return err;
  }
}
