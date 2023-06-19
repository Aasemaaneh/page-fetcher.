const fs = require('fs');
const request = require('request');


// Function to download the resource from the URL and save it to the local file path
const pageDownloader = (url, filePath, callback) => {
  request.get(url, (error, response, body) => {
    if (error) {
      callback(error);
      return;
    }
    if (response.statusCode !== 200) {
      callback(new Error(`Failed to download resource. Status code: ${response.statusCode}`));
      return;
    }
    fs.writeFile(filePath, body, (err) => {
      if (err) {
        callback(err);
        return;
      }
      //const fileSize2 = Buffer.byteLength(body)
      const fileSize = body.length;   //1 character is equal to 1 byte.
      callback(null, fileSize);
    });
  });
};

// Command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Execute the pageDownloader function
pageDownloader(url, filePath, (error, fileSize) => {
  if (error) {
    console.error(error.message);
  } else {
    console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}`);
  }
});

// Export the pageDownloader function for testing
module.exports = pageDownloader;

