import homeTemplate from '../templates/homeTemplate.js';
import getMostLiked from '../utils/fetch/mostLiked.js';
import '../utils/fetch/infiniteScroll.js';

export default async function homePage(ctx) {
  const mostLikedGiphies = await getMostLiked();
  ctx.render(homeTemplate(mostLikedGiphies));
}
