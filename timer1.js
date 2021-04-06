const alarmClock = function() {
  let numberOfAlarms = process.argv.slice(2);
  if (numberOfAlarms.length === 0) {
    return;
  }
  numberOfAlarms = numberOfAlarms.map(x => +x);
  const max = numberOfAlarms.reduce(function(a, b) {
    return Math.max(a, b);
  });
  for (let timer = 0; timer <= max * 1000; timer += 1000) {
    setTimeout(() => {
      if (numberOfAlarms.includes(timer / 1000)) {
        process.stdout.write('\x07');
      }
    }, timer);
  }
  return;
};

alarmClock();