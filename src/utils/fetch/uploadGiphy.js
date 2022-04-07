import { giphyAPIkey } from '../../constants.js';

export default async function (formData) {
  try {
    const rawRes = await fetch(
      `http://upload.giphy.com/v1/gifs?api_key=${giphyAPIkey}`,
      {
        method: 'POST',
        body: formData,
      },
    );
    const res = await rawRes.json();
    return res;
  } catch (e) {
    return e;
  }
}
