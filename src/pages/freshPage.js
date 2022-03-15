import freshMemeTemplate from '../templates/freshTemplate.js';
import getNextGiphies from '../utils/fetch/getNextGiphies.js';
// import getTenGiphies from '../utils/fetch/trending.js';

export default async function freshPage(ctx) {
  const tenGiphies = await getNextGiphies();
  ctx.render(freshMemeTemplate(tenGiphies));
}
