import favoritesTemplate from '../templates/favoritesTemplate.js';
import userData from '../utils/data/userData.js';
import getFavoriteGifs from '../utils/fetch/getFavoriteGifs.js';

export default async function favoritesPage(ctx) {
  const { uid } = userData.getUserData();
  const favoriteGifs = await getFavoriteGifs(uid);
  ctx.render(favoritesTemplate(favoriteGifs));
}
