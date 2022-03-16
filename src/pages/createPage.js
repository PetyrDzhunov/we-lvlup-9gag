import createMemeTemplate from '../templates/createTemplate.js';
// import request from '../utils/fetch/fetch.js';
import { giphyAPIkey } from '../constants.js';

export default async function createPage(ctx) {
  function onUploadSubmit(e) {
    e.preventDefault();
    const currentFormClicked = e.target.id;
    const imagePreview = document.getElementById('image-preview');

    if (currentFormClicked === 'file-upload') {
      $.ajax({
        url: 'http://upload.giphy.com/v1/gifs?',
        type: 'POST',
        dataType: '',
        data: {
          q: 'keyword',
          api_key: giphyAPIkey,
          source_image_url: imagePreview.src,
        },
        success: (data) => {
          console.log('success');
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  ctx.render(createMemeTemplate(onUploadSubmit));
}
