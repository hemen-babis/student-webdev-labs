// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event
// Exercise #1: Copy button
const copyBtn = document.querySelector('#copy');
const input1 = document.querySelector('#userInput1');
const output1 = document.querySelector('.output');

copyBtn.addEventListener('click', () => {
  output1.textContent = input1.value;
});

// Exercise #2: Live input
const input2 = document.querySelector('#userInput2');
const section2 = document.querySelector('#inputEventExample');

const output2 = document.createElement('div');
output2.className = 'output';
section2.appendChild(output2);

input2.addEventListener('input', () => {
  output2.textContent = input2.value;
});