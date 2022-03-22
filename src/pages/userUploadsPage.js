import usersUploadTemplate from '../templates/usersUploadTemplate.js';
import getCurrentUserUploadedGifs from '../utils/fetch/getCurrentUserUploadedGifs.js';
import userData from '../utils/data/userData.js';

export default async function usersUploadPage(ctx) {
  const user = userData.getUserData();
  const currentUserUploadedGifs = await getCurrentUserUploadedGifs(user.uid);
  ctx.render(usersUploadTemplate(currentUserUploadedGifs));
}
