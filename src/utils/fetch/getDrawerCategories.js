import request from './fetch.js';
import { giphyAPIkey } from '../../constants.js';
import { baseEndpoint } from '../../giphyEndpoints.js';

export default async function getCategories() {
  try {
    const categories = await request(
      `${baseEndpoint}/categories?api_key=${giphyAPIkey}`
    );
    return categories.data;
  } catch (err) {
    return err;
  }
}
