const needle = require('needle');
//https://api.thecatapi.com/v1/breeds/search
//https://api.thecatapi.com/v1/breeds/search?q=sib
let breedNameInput = process.argv.slice(2);

needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedNameInput}`, (error, response, body) => {
  if (error) { //error handling i honestly dont understand but it works //update, i kind of get it today
    console.error('Error:', error);
    return;
  }
  if (body[0] === undefined) { //i should probably throw a new error here
    console.log("ERROR: That is not a cat breed. Please try again");
    return;
  }
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log(typeof body);
  console.log(`BODY: DESCRIPTION: ${body[0].description}`);
});