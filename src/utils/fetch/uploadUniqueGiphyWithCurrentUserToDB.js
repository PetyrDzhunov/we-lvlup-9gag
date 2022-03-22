import { gifsRef } from '../../constants.js';

export default async function (userId, giphyId) {
  try {
    return gifsRef.add({
      creator: userId,
      gif: giphyId,
    });
  } catch (error) {
    return error;
  }
}
