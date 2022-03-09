export default function detailsJqueryFunction() {
  $(function jQuery() {
    $('h1').text('Changed text').css('color', 'blue');
    $('.toggle').click(function () {
      $('h1').toggle();
    });
  });
}
