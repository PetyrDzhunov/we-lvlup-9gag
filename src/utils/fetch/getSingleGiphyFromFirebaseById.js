import { gifsRef } from '../../constants.js';
// const query = await gifsRef.where('gif', '==', gifID).get();

async function getSingleGiphyFromFirebaseById(giphyID) {
  const query = await gifsRef.where('gif', '==', giphyID).get();
  if (!query.empty) {
    const snapshot = query.docs[0];
    return snapshot.data();
  }
  return null;
}

export default getSingleGiphyFromFirebaseById;
