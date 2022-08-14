// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    console.log(event.currentTarget.classList);
    const styles = event.currentTarget.classList;

    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else if (styles.contains('reset')) {
      count = 0;
    }

    if (count > 0) {
      value.style.color = 'green';
    } else if (count === 0) {
      value.style.color = 'black';
    } else if (count < 0) {
      value.style.color = 'red';
    }

    value.textContent = count;
  });
});
