async function getDocumentIdFromFirebaseByGiphyId(gifID) {
  const query = await gifsRef.where('gif', '==', gifID).get();

  if (!query.empty) {
    return query.docs[0].id;
  }
  return null;
}

export default getDocumentIdFromFirebaseByGiphyId;
