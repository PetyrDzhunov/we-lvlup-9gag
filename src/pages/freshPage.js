import freshTemplate from '../templates/freshTemplate.js';
import getMostRecentlyUploadedGifs from '../utils/fetch/getMostRecentlyUploadedGifs.js';

export default async function freshPage(ctx) {
  const freshGifs = await getMostRecentlyUploadedGifs();
  console.log(freshGifs);
  ctx.render(freshTemplate(freshGifs));
}
