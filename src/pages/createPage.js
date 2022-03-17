import createMemeTemplate from '../templates/createTemplate.js';
import uploadGiphy from '../utils/fetch/uploadGiphy.js';

export default async function createPage(ctx) {
  async function onUploadSubmit(e) {
    e.preventDefault();
    const file = document.getElementById('inputGroupFile02').files[0];

    const form = new FormData();
    form.append('file', file);
    const currentFormClicked = e.target.id;
    if (currentFormClicked === 'file-upload') {
      const res = await uploadGiphy(form);
      const gifId = res.data.id;
      // attach this gifId to the current user
    }
    // create a post method with source_image_url to giphy
  }
  ctx.render(createMemeTemplate(onUploadSubmit));
}
