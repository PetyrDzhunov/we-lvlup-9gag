import { render } from "https://unpkg.com/lit-element/lit-element.js?module";

const root = document.getElementById("app");

export default function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, root);
  next();
}
