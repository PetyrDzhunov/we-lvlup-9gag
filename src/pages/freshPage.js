import freshMemeTemplate from '../templates/freshTemplate.js';
import getTenGiphies from '../utils/fetch/getNextGiphies.js';
import '../utils/fetch/infiniteScroll.js';

export default async function freshPage(ctx) {
  const tenGiphies = await getTenGiphies();
  ctx.render(freshMemeTemplate(tenGiphies));
}
