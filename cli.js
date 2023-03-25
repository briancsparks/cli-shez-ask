#!/usr/bin/env node

/* vim: set ft=javascript: */


main().finally(() => {
  // console.log('done');
})

async function main() {
  const inquirer = await import('inquirer');
  const prompt = inquirer.createPromptModule();

  // inquirer.prompt([
  //   {
  //     type: 'list',
  //     name: 'pizza',
  //     message: 'What kind of pizza would you like?',
  //     choices: ['pep', 'cheese', 'Hawaiian']
  //   }
  // ])


  prompt([
    {
      type: 'list',
      name: 'pizza',
      message: 'What kind of pizza would you like?',
      choices: ['pep', 'cheese', 'Hawaiian']
    }
  ]).then(answers => {
    console.log(`You ordered a ${answers.pizza} pizza.`);
  });
}
