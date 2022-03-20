export default async function (userId, giphyId) {
  console.log(db);
  try {
    return db.collection('gifs').add({
      creator: userId,
      gif: giphyId,
    });
  } catch (error) {
    return error;
  }
}
