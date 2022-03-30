import { gifsRef } from '../../constants.js';

async function getSingleGiphyFromFirebaseWithId(giphyID) {
  const existingGifs = await gifsRef.get();
  let currentGiphy;
  existingGifs.forEach((doc) => {
    const currentGiphyId = doc.data().gif;
    if (currentGiphyId === giphyID) {
      currentGiphy = doc.data();
    }
  });
  if (currentGiphy) {
    return currentGiphy;
  }

  return null;
}

export default getSingleGiphyFromFirebaseWithId;
