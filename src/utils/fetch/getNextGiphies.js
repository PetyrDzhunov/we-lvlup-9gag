import request from './fetch.js';
import { giphyAPIkey } from '../../constants.js';

export default async function getTenGiphies() {
  try {
    const tenGiphies = await request(
      `https://api.giphy.com/v1/gifs/trending?api_key=${giphyAPIkey}&limit=10&offset=10`,
    );
    return tenGiphies.data;
  } catch (err) {
    return err;
  }
}
