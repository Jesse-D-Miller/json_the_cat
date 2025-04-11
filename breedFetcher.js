const needle = require('needle');
//https://api.thecatapi.com/v1/breeds/search
//https://api.thecatapi.com/v1/breeds/search?q=sib


const fetchBreedDescription = (breedName, callback) => {
  needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    
    if (error) {
      return callback(error, null);
    }
    
    if (!body[0]) {
      return callback("That is not a cat breed. Please try again", null);
    }

    console.log('statusCode:', response && response.statusCode);
    
    callback(null, body[0].description);
    
  });
};


module.exports = { fetchBreedDescription };