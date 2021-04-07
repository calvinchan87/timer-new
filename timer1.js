// node timer1.js 10 3 5 15 9

// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

let args = process.argv.slice(2);
let secs = [];

for (let arg of args) {
  if (arg >= 0) {
    secs.push(arg);
  }
};

for (let sec of secs) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, sec * 1000);
};