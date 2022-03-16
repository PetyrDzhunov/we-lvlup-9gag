import createMemeTemplate from '../templates/createTemplate.js';

export default async function createPage(ctx) {

  async function onUploadSubmit()

  ctx.render(createMemeTemplate(onUploadSubmit));
}
