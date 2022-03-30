/* eslint-disable no-param-reassign */
import { gifsRef } from '../constants.js';
import profileTemplate from '../templates/profileTemplate.js';
import userData from '../utils/data/userData.js';

export default async function profilePage(ctx) {
  const user = userData.getUserData();
  if (!user) {
    return;
  }

  const myUploads = await gifsRef.where('creator', '==', user.uid).get();
  const arrayWithMyUploadsAsDocs = myUploads.docs;

  const totalComments = arrayWithMyUploadsAsDocs.reduce((acc, curr) => {
    const currentUpload = curr.data();
    if (currentUpload.comments) {
      acc += currentUpload.comments.length;
    }
    return acc;
  }, 0);

  const totalLikes = arrayWithMyUploadsAsDocs.reduce((acc, curr) => {
    const currentUpload = curr.data();
    if (currentUpload.likes) {
      acc += currentUpload.likes.length;
    }
    return acc;
  }, 0);

  ctx.render(profileTemplate(totalComments, totalLikes));
}
