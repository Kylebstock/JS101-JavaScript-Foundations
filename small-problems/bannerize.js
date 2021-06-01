//Write a function that will take a short line of text, and write it to the console log within a box.

let logInBox = message => {
  let dash = `+${"-".repeat(message.length + 2)}+`;
  let line = `|${" ".repeat(message.length + 2)}|`;

  console.log(dash);
  console.log(line);
  console.log(`| ${message} |`);
  console.log(line);
  console.log(dash);
}

logInBox('To boldly go where no one has gone before.');