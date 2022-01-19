const fs = require('fs');
const request = require('request');
const args = process.argv;
const relevantArgs = args.slice(2);
const URL = relevantArgs[0];
const localFilePath = relevantArgs[1];

request(URL, (error, response, body) => {

  if (error) {
    console.log(`error: ${error}, statusCode: ${response}, ${response.statusCode}`);
  }
  
  writeToFile(body);
  console.log(`Downloaded and saved ${body.length} bytes to ${localFilePath}`);

});

const writeToFile = (data) => {
  fs.writeFile(`${localFilePath}`, data, err => {
    if (err) {
      console.error(err);
      return;
    }
  });
};