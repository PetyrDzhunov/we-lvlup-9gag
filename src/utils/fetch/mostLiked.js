import request from './fetch.js';
import { giphyAPIkey } from '../../constants.js';
import { giphyApiEndpoints } from '../../giphyEndpoints.js';

export default async function getMostLiked() {
  try {
    const mostLikedGiphies = await request(
      `${giphyApiEndpoints.trending}api_key=${giphyAPIkey}&limit=10`
    );
    return mostLikedGiphies.data;
  } catch (err) {
    return err;
  }
}
