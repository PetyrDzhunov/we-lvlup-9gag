import request from './fetch.js';
import { giphyAPIkey } from '../../constants.js';
import { baseEndpoint } from '../../giphyEndpoints.js';

export default async function getSingleGiphyById(gifId) {
  try {
    const gif = await request(
      `${baseEndpoint}/${gifId}?api_key=${giphyAPIkey}`
    );
    return gif.data;
  } catch (err) {
    return err;
  }
}
