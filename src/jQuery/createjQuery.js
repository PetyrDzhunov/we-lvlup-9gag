export default function createMemejQueryFunction() {
  $(function jQuery() {
    $('p').text('Changed text').css('color', 'blue');
    $('.toggle').click(function () {
      $('h1').toggle();
    });
  });
}
