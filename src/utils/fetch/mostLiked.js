import request from './fetch.js';
import { giphyAPIkey } from '../../constants.js';

export default async function getMostLiked() {
  try {
    const randomGiphies = await request(
      `https://api.giphy.com/v1/gifs/trending?api_key=${giphyAPIkey}`,
    );
    return randomGiphies.data;
  } catch (err) {
    return err;
  }
}
