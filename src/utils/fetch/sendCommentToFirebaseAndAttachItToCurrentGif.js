import { gifsRef } from '../../constants.js';

async function sendCommentToFirebaseAndAttachItToCurrentGif(
  user,
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
        commentator: user.email,
        comment,
      }),
    });
  }

  return gifsRef.doc(user.uid).set({
    gif: gifID,
    likes: [],
    comments: [{ commentator: user.email, comment }],
  });
}

export default sendCommentToFirebaseAndAttachItToCurrentGif;
