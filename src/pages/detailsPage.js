import detailsTemplate from '../templates/detailsTemplate.js';
import getSingleGiphyById from '../utils/fetch/getSingleGiphyById.js';

export default async function detailsPage(ctx) {
  const giphy = await getSingleGiphyById(ctx.params.id);
  ctx.render(detailsTemplate(giphy));
}
