import getSingleGiphyFromFirebaseById from './getSingleGiphyFromFirebaseById.js';
import getDocumentIdFromFirebaseByGiphyId from './getDocumentIdFromFirebaseByGiphyId.js';
import { gifsRef } from '../../constants.js';

async function sendCommentToFirebaseAndAttachItToCurrentGif(
  user,
  gifID,
  comment
) {
  const currentGiphy = await getSingleGiphyFromFirebaseById(gifID);
  const currenntGiphyDocumentID = await getDocumentIdFromFirebaseByGiphyId(
    gifID
  );

  if (currentGiphy) {
    return gifsRef.doc(currenntGiphyDocumentID).update({
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
