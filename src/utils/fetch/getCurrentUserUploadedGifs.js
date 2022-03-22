// import request from './fetch.js';
// import { giphyAPIkey } from '../../constants.js';

export default async function getCurrentUserUploadedGifs(uid) {
  console.log(uid);
  try {
    const currentUserGifs = await gifsRef.get();
    if (currentUserGifs.exists) {
      console.log('Document data:', currentUserGifs.data());
      return currentUserGifs.data();
    }
    return 'no such document';
  } catch (err) {
    return err;
  }
}
