// Wait until the DOM is fully loaded
$(document).ready(function () {
  // Part 1 – Click Event
  // Fetch elements using jQuery
  let $userInput1 = $('#userInput1');
  let $copyButton = $('#copy');
  let $output1 = $('#output1');

  // Add event listener
  $copyButton.on('click', function (event) {
    console.log('click event', event);

    // Copy input value to output
    $output1.text($userInput1.val());
  });
  // Part 2 – Input Event
  // Fetch elements using jQuery
  let $userInput2 = $('#userInput2');
  let $output2 = $('#output2');

  // Add event listener
  $userInput2.on('input', function (event) {
    console.log('input event', event);

    // Copy input value to output as user types
    $output2.text($(this).val());
  });

});