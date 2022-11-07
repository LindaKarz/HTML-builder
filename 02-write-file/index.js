const fs = require('fs');
const path = require('path');
const { exit } = require('process');
const { stdin, stdout } = process;

fs.writeFile(
  path.join(__dirname, 'text.txt'),
  '',
  (err) => {
      if (err) throw err;
  }
);

stdout.write('Please enter your name\n');

stdin.on('data', data => {
  if (data.includes('exit'))
    process.exit();
});

stdin.on('data', data => fs.appendFile(
  path.join(__dirname, 'text.txt'),
  data,
  (err) => {
    if (err) throw err;
  }
));

process.on('exit', () => {
  stdout.write('Thank you!Bye!')});