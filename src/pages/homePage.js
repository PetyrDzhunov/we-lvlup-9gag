import homeTemplate from '../templates/homeTemplate.js';
import getMostLiked from '../utils/fetch/mostLiked.js';

export default async function homePage(ctx) {
  const mostLikedGiphies = await getMostLiked();
  ctx.render(homeTemplate(mostLikedGiphies));
}
