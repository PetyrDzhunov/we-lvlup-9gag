// eslint-disable-next-line import/no-cycle
import { updateUserNav } from '../../middlewares/decorateContext.js';
import userData from '../data/userData.js';

export default async function logout() {
  userData.clearUserData();
  await auth.signOut();
  console.log('clicked');
  updateUserNav();
  page.redirect('/');
}
