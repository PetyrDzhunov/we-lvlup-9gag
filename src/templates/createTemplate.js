import createMemejQueryFunction from '../utils/dom/createjQuery.js';

import { html } from 'https://unpkg.com/lit-element/lit-element.js?module';

const loadFile = function (e) {
  const imagePreview = document.getElementById('image-preview');
  imagePreview.src = URL.createObjectURL(e.target.files[0]);
  imagePreview.style.height = '250px';
  imagePreview.style.width = '400px';
  imagePreview.onload = function () {
    URL.revokeObjectURL(imagePreview.src);
  };
};

export default function createMemeTemplate(onUploadSubmit) {
  return html`
    <h1>Create new GIF or Meme</h1>
    <h5 class="mb-5">You can upload from your file system or you can send a URL</h5 class="mb-5">
    <form @submit="${onUploadSubmit}" class="input-group flex-nowrap mb-3">
      <div class="input-group mb-3" id="inputGroup-sizing-default">
        <input type="file" @change="${loadFile}" class="form-control" id="inputGroupFile02" />
        <button class="btn btn-primary" type="submit">Upload</button>
      </div>
    </form>
    
    <form @submit="${onUploadSubmit}" class="input-group flex-nowrap mb-3">
      <label for="basic-url" class="form-label">Your giphy URL</label>
        <div class="input-group mb-3">
          <label class="input-group-text" id="basic-addon3">https://giphy.com/gifs/</label>
          <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
          <button class="btn btn-primary" type="submit">Upload</button>
        </div>
    </form>

    <img id="image-preview"/>
<img id="output"/>

    ${createMemejQueryFunction()}
  `;
}
