import { mkdirSync, writeFile, readFile } from "node:fs";

const __filename = "/Users/Refsnes/demo_path.js";
const __dirname = "/../test_folder";

//create a Folder
mkdirSync("./../test_folder", { recursive: true }, (err) => {
  if (err) throw err;
});

//if the file name exist and recursive is set to false there will be an error.

// Create and write to file.
writeFile("./../test_folder/hello.txt", "Hello World!", (err) => {
  // You can Append File in this callback function.
  if (err) throw err;
  console.log("File written to ...");
});

//Read the File
readFile("./../test_folder/hello.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("Reading Data ....", data);
});
