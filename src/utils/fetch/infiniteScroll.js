import { giphyAPIkey } from '../../constants.js';

$(document).ready(() => {
  let offset = 0;
  // initial value for offset
  let offsetVal = 0;
  // set your limit
  const giphyLimit = 10;

  function getGiphy(i) {
    // if offset is greater than one then fetch further items prior to previous ones
    if (i > 0) {
      // increase the offset with item limit like 25, 50 to get the next items
      offsetVal = giphyLimit * i;
    }
    $.ajax({
      url: 'https://api.giphy.com/v1/gifs/trending?',
      type: 'GET',
      dataType: 'json',
      data: {
        q: 'keyword',
        api_key: giphyAPIkey,
        limit: giphyLimit,
        offset: offsetVal,
      },
      success: (data) => {
        console.log(data.pagination);
        $.each(data.data, (index, giphy) => {
          const imageUrl = giphy.images.downsized_large.url;
          $('#page').append(`
         <div class="card m-2" style="width: 40rem;">
            <div class="card-body">
                <h5 class="card-title">${giphy.title}</h5>
             </div>
           <img class="card-img-top" src=${imageUrl} alt="Giphy image"/>
         </div>`);
        });
        // increase offset to get further items.
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

  $(window).scroll(function () {
    // when scroll reaches to bottom.
    if (
      $(window).scrollTop() >=
      $(document).height() - $(window).height() - 1500
    ) {
      if (paginate) {
        paginate = false;
        console.log('pagination');
        getGiphy(offset);
        setTimeout(paginateToggle, 1000);
      } else {
        console.log('only one pagination allowed per scroll down');
        return;
      }
    }
  });
});
