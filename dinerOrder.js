// Create ability for user input
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

// Lists for name of of diner
const adjectives = ['smelly', 'dirty', 'sparkling', 'crusty', 'careless'];
const nouns = ['pickle', 'monkey', 'diner', 'wrench'];

// Choose a random name (adjective and noun) for the diner
let adjective = adjectives[(Math.floor(Math.random() * adjectives.length))]
let noun = nouns[(Math.floor(Math.random() * nouns.length))]

// List of diner phrases
const dinerPhrases = ['wake up the monkey and show him a dollar', 'shave my back and slap my sister', 'two lumpy tits riding side car', 'pretend that I\'m your father', 'two dogs kisses'];

// Create a list of random length with randomly chosen phrases combined together
const listLength = Math.floor(Math.random() * dinerPhrases.length) + 1;
const phraseList = [];
let i = 0;
// Create a copy of the dinerPhrases array as to not edit the dinerPhrases array
let loopPhrases = dinerPhrases;


while (i < listLength) {
    let listItemIndex = Math.floor(Math.random() * loopPhrases.length)
    let phrase = loopPhrases[listItemIndex];
    const capitalizedPhrase = phrase.charAt(0).toUpperCase() + phrase.slice(1)
    loopPhrases.splice(listItemIndex, 1);
    phraseList.push(capitalizedPhrase);
    i++;
}

// Ask for order and save it as variable order
readline.question(`Welcome to the ${adjective} ${noun}, what will it be for you?`, order => {
    console.log('I\'ll put that in right away');
    console.log('* Waiter turns to kitchen *');
    console.log(`${phraseList.join('! ')}! and ${order.toLowerCase()}.`)
    readline.close();
  });