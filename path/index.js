import path from "path";

const __filename = "/Users/Refsnes/demo_path.js";
const __dirname = "/emeka/kitchen";
//Base file name
console.log("Base file name", path.basename(__filename));

//Directory name
console.log("Directory name", path.dirname(__filename));

//Create path object
console.log('Object', path.parse(__filename));

//concatenate paths
console.log(path.join(__dirname, "test", "hello.html"));
