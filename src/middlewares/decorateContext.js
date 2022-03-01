// eslint-disable-next-line import/extensions
import { render } from '../lib.js';

const root = document.getElementById('app');

export default function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, root);
  next();
}
