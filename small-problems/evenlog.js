let evenLog = (min, max) => {
  for (let count = min; count < max; count ++) {
    if (count % 2 === 1) {
      continue;
    }
    console.log(count);
  }
}

evenLog(1, 100);