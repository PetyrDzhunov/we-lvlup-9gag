import { giphyAPIkey } from '../../constants.js';
import { baseEndpoint } from '../../giphyEndpoints.js';

export default async function (formData) {
  try {
    const rawRes = await fetch(`${baseEndpoint}?api_key=${giphyAPIkey}`, {
      method: 'POST',
      body: formData,
    });
    const res = await rawRes.json();
    return res;
  } catch (e) {
    return e;
  }
}
