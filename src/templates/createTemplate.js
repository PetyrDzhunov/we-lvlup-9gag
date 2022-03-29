import { html } from 'https://unpkg.com/lit-element/lit-element.js?module';

const loadFile = function (e) {
  const imagePreview = document.getElementById('image-preview');
  let file;

  if (e.target.files) {
    [file] = e.target.files;
    imagePreview.src = URL.createObjectURL(file);
  } else {
    file = document.getElementById('basic-url').value;
    imagePreview.src = file;
  }
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
    <form @submit="${onUploadSubmit}" class="input-group flex-nowrap mb-3" id="file-upload">
      <div class="input-group mb-3" id="inputGroup-sizing-default">
        <input type="file" @change="${loadFile}" class="form-control" id="inputGroupFile02" name="file-input" />
        <button class="btn btn-primary" type="submit">Upload</button>
      </div>
    </form>
    
    <form @submit="${onUploadSubmit}" class="input-group flex-nowrap mb-3" id="url-upload">
      <label for="basic-url" class="form-label">Your giphy URL</label>
        <div class="input-group mb-3">
          <label class="input-group-text" id="basic-addon3">https://giphy.com/gifs/</label>
          <input type="text" @change="${loadFile}" name="url-input" class="form-control" id="basic-url" aria-describedby="basic-addon3">
          <button class="btn btn-primary" type="submit">Upload</button>
        </div>
    </form>

    <img id="image-preview"/>
<img id="output"/>
  `;
}
