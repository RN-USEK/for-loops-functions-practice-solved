// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  // let clientsWithLetterInName = [];
  // let regex = new RegExp(`${letter}`, "i");
  // for (let account of array)
  //   if(regex.test(account.name))
  //     clientsWithLetterInName.push(account.name)
  // return clientsWithLetterInName;

   // Your code goes here...
   let clientsWithLetterInName = [];
   for (let account of array)
    for (let character of account.name)
         if (character.toLowerCase() === letter.toLowerCase()){
             clientsWithLetterInName.push(account.name);
             break;
         }
   return clientsWithLetterInName;
 }
 
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
