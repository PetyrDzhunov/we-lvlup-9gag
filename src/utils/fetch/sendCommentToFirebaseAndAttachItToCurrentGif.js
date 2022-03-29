import { gifsRef } from '../../constants.js';

async function sendCommentToFirebaseAndAttachItToCurrentGif(
  userID,
  gifID,
  comment,
) {
  const existingGifs = await gifsRef.get();
  let isAlreadyInDatabase = false;
  let currentGiphy;
  existingGifs.forEach((doc) => {
    const currentGiphyId = doc.data().gif;
    const currentDocId = doc.id;
    if (currentGiphyId === gifID) {
      isAlreadyInDatabase = true;
      currentGiphy = currentDocId;
    }
  });

  if (isAlreadyInDatabase) {
    return gifsRef.doc(currentGiphy).update({
      comments: firebase.firestore.FieldValue.arrayUnion({
        commentator: userID,
        comment,
      }),
    });
  }

  return gifsRef.doc(userID).set({
    gif: gifID,
    likes: [],
    comments: [{ commentator: userID, comment }],
  });
}

export default sendCommentToFirebaseAndAttachItToCurrentGif;
