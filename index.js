

function guessTheNumber(lower,upper) {
  let guess = parseInt(prompt(`Enter a number between ${lower} and ${upper}`));
  const number = Math.round(Math.random() * (upper - lower) + lower);
  if (guess === number) {
    return 'Yee!!, you guessed rigth, 1 point!';
  }
  return 'awww, try again';
}

console.log(guessTheNumber(1,2));