import { gifsRef } from '../../constants.js';

export default async function addGiphyLikeToFirebase(userId, gifId) {
  try {
    const existingGifs = await gifsRef.get();
    let isAlreadyInDatabase = false;
    let currentGiphy;
    existingGifs.forEach((doc) => {
      const currentGiphyId = doc.data().gif;
      const currentDocId = doc.id;
      if (currentGiphyId === gifId) {
        isAlreadyInDatabase = true;
        currentGiphy = currentDocId;
      }
    });

    if (isAlreadyInDatabase) {
      return gifsRef.doc(currentGiphy).update({
        likes: firebase.firestore.FieldValue.arrayUnion(userId)
      });
    }

    return gifsRef.doc(userId).set({
      gif: gifId,
      likes: [userId]
    });
  } catch (error) {
    return error;
  }
}
