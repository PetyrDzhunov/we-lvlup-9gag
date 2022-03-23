import likeGiphy from './likeGiphy.js';
import { giphyAPIkey } from '../../constants.js';
import { giphyApiEndpoints } from '../../giphyEndpoints.js';

let offset = 0;
let offsetVal = 0;
const giphyLimit = 10;

function getGiphy(i) {
  if (i > 0) {
    offsetVal = giphyLimit * i;
  }
  $.ajax({
    url: giphyApiEndpoints.trending,
    type: 'GET',
    dataType: 'json',
    data: {
      q: 'keyword',
      api_key: giphyAPIkey,
      limit: giphyLimit,
      offset: offsetVal,
    },
    success: (data) => {
      console.log(offset);
      console.log(data.pagination);
      $.each(data.data, (index, giphy) => {
        const imageUrl = giphy.images.downsized_large.url;
        $('#infinite-scroll-content').append(`
         <div data-id=${giphy.id} class="card m-2" style="width: 40rem;">
            <div class="card-body">
                <h5 class="card-title">${giphy.title}</h5>
             </div>
           <img class="card-img-top" src=${imageUrl} alt="Giphy image"/>
<footer class="giphy-footer">
          <i @click=${likeGiphy} class="giphy-footer__icon like bi bi-hand-thumbs-up"></i>
          <i class="giphy-footer__icon dislike bi bi-hand-thumbs-down"></i>
          <i class="giphy-footer__icon comment bi bi-chat-left-fill"></i>
      </footer>
         </div>`);
      });
      offset += 1;
    },
    error: (err) => {
      console.log(err);
    },
  });
}
getGiphy(0);

let paginate = true;

const paginateToggle = function () {
  paginate = true;
};

function windowScrollHandler() {
  if (
    $(window).scrollTop()
    >= $(document).height() - $(window).height() - 1500
  ) {
    if (paginate) {
      paginate = false;
      console.log('pagination');
      getGiphy(offset);
      setTimeout(paginateToggle, 1000);
    } else {
      console.log('only one pagination allowed per scroll down');
    }
  }
}

export function attachInfiniteScrollHandler() {
  $(window).scroll(windowScrollHandler);
}

export function detachInfiniteScrollHandler() {
  $(window).off('scroll', windowScrollHandler);
  $('#infinite-scroll-content').empty();
}
