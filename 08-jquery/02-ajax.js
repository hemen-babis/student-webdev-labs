const url = 'https://anapioficeandfire.com/api/books/';

$(document).ready(function () {

  const $app = $('#books');
  const $loading = $('#loading');

  const addBookToDOM = function (item) {

    const $element = $('<div></div>').css({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '20px'
    });

    const $title = $('<h4></h4>').text(item.name);
    const $author = $('<p></p>').text(`by ${item.authors[0]}`);
    const $published = $('<p></p>').text(item.released.substr(0, 4));
    const $pages = $('<p></p>').text(`${item.numberOfPages} pages`);

    $element.append($title);
    $element.append($author);
    $element.append($published);
    $element.append($pages);

    $app.append($element);
  };

  // AJAX request using jQuery
  $.ajax({
    url: url,
    method: 'GET',
    success: function (data) {
      data.forEach(function (item) {
        addBookToDOM(item);
      });
    },
    error: function () {
      const $error = $('<p></p>').text('An error occurred. Please try again.');
      $app.append($error);
    },
    complete: function () {
      $loading.remove(); // remove spinner
    }
  });

});