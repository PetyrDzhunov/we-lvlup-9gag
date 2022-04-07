import trendingTemplate from '../templates/trendingTemplate.js';
import getTenGiphies from '../utils/fetch/getNextGiphies.js';

export default async function trendingPage(ctx) {
  const tenGiphies = await getTenGiphies();
  ctx.render(trendingTemplate(tenGiphies));
}
