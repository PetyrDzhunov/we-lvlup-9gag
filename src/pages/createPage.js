import createMemeTemplate from '../templates/createTemplate.js';
import uploadGiphy from '../utils/fetch/uploadGiphy.js';
import userData from '../utils/data/userData.js';
import uploadUniqueGiphyWithCurrentUserToDB from '../utils/fetch/uploadUniqueGiphyWithCurrentUserToDB.js';

export default async function createPage(ctx) {
  async function onUploadSubmit(e) {
    e.preventDefault();
    const user = userData.getUserData();
    const file = document.getElementById('inputGroupFile02').files[0];
    const urlInput = document.getElementById('basic-url').value;
    const form = new FormData();
    const currentFormClicked = e.target.id;
    if (currentFormClicked === 'file-upload') {
      form.append('file', file);
      const res = await uploadGiphy(form);
      await uploadUniqueGiphyWithCurrentUserToDB(user.uid, res.data.id);
      page.redirect('/');
    } else {
      form.append('source_image_url', urlInput);
      const res = await uploadGiphy(form);
      await uploadUniqueGiphyWithCurrentUserToDB(user.uid, res.data.id);
      page.redirect('/');
    }
  }
  ctx.render(createMemeTemplate(onUploadSubmit));
}
