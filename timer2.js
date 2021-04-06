
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const alarmClock = function(time) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time * 1000);
  return;
};

////////////
// Event Handling for User Input
////////////
stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.stdout.write('Thanks for using me, ciao!\n');
    process.exit();
  } else if (key === 'b') {
    process.stdout.write('\x07');
  } else if (Number(key) > 0 && Number(key) <= 9) {
    process.stdout.write(`Setting timer for ${key} seconds...\n`);
    alarmClock(Number(key));
  }
});