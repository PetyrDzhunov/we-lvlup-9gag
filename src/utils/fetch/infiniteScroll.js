import { giphyAPIkey } from '../../constants.js';

$(window).scroll(function () {
  if ($(document).height() - $(this).height() - 100 < $(this).scrollTop()) {
    $.ajax({
      type: 'GET',
      url: `https://api.giphy.com/v1/gifs/trending?api_key=${giphyAPIkey}&offset=10`,
      contentType: 'application/json; charset=utf-8',
      data: '',
      dataType: 'json',
      success: ({ data }) => {
        if (data) {
          data.forEach((giphy) => {
            $('#page').append(`<div class="card m-2" style="width: 40rem;">
<div class="card-body">
      <h5 class="card-title">${giphy.title}</h5>  
</div>
    <img
      class="card-img-top"
     src=${giphy.images.downsized_large.url}
      alt="Card image cap"
    />
  </div>`);
          });
        }
      },
      error: (req, status, error) => {
        alert(status, error);
      },
    });
  }
});
