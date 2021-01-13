const timeBeep = (input) => {
  if (input.length <= 2) {
    console.log('Not enough arguments');
  };
  const timeArray = input.slice(2);
  for (timeString of timeArray) {
    // error handling
    let time = Number(timeString);
    if (!time) {
      console.log(`${timeString} is not a number`);
    } else if (time <= 0) {
      console.log(`${timeString} cannot be a negative number`);
    } else {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, time * 1000);
    }
  }
}

timeBeep(process.argv);