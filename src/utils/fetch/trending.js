import request from './fetch.js';
import { giphyAPIkey } from '../../constants.js';

export default async function getFiftyGiphies() {
  try {
    const fiftyGiphies = await request(
      `https://api.giphy.com/v1/gifs/trending?api_key=${giphyAPIkey}&limit=10`,
    );
    return fiftyGiphies.data;
  } catch (err) {
    return err;
  }
}
