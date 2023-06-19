
# Page Fetcher

pageDownloader is a command-line tool that allows you to download resources from a URL and save them to your local file system.
It is built with Node.js and utilizes the \`request\` and \`fs\` modules.

## Installation

1. Clone the repository:
   \`\`\`
   git clone git@github.com:Aasemaaneh/page-fetcher..git
   \`\`\`
2. Navigate to the project directory:
   \`\`\`
   cd page-fetcher
   \`\`\`
3. Install the dependencies:
   \`\`\`
   npm install
   \`\`\`

## Usage

Run the \`fetcher.js\` script with the following command-line arguments:

\`\`\`
node fetcher.js [URL] [filePath]
\`\`\`

- \`URL\`: The URL of the resource you want to download.
- \`filePath\`: The local file path where you want to save the downloaded resource.

Example usage:

\`\`\`
node fetcher.js http://www.example.com ./index.html
\`\`\`

The downloaded resource will be saved to the specified file path. Upon completion, the script will print out a message showing the file size.
