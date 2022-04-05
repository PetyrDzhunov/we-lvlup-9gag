import { html } from 'https://unpkg.com/lit-element/lit-element.js?module';

const avatars = [
  'NoHair',
  'Eyepatch',
  'Hat',
  'Hijab',
  'Turban',
  'WinterHat1',
  'LongHairBun',
  'ShortHairShortFlat',
  'LongHairFro',
  'LongHairCurly',
];

const getRandomAvatar = (array) => array[Math.floor(Math.random() * array.length)];

export default function profileTemplate(totalComments, totalLikes) {
  return html`
    <div id="profile-page">
      <img
        src=${`https://avataaars.io/?avatarStyle=Circle&topType=${getRandomAvatar(
    avatars
  )}&accessoriesType=Sunglasses&hairColor=Blonde&facialHairType=BeardMedium&facialHairColor=Black&clotheType=BlazerSweater&eyeType=Cry&eyebrowType=DefaultNatural&mouthType=Twinkle&skinColor=Brown`}
      />
      <p>Your posts have generated ${totalLikes} likes so far.</p>
      <p>Your posts have generated ${totalComments} comments so far</p>
    </div>
  `;
}
