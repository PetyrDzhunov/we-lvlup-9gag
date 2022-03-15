import freshMemeTemplate from '../templates/freshTemplate.js';
import getFiftyGiphies from '../utils/fetch/trending.js';

export default async function freshPage(ctx) {
  let fiftyGyphies = await getFiftyGiphies();
  ctx.render(freshMemeTemplate(fiftyGyphies));
}
