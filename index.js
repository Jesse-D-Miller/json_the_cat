const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv.slice(2);

fetchBreedDescription(breedName, (error, description) => {

  if (error) {
    console.log(`Error fetch details: ${error}`);
    return;
  }

  console.log(description);
  

});

