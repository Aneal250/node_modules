import os from "os";

console.log("architecture", os.arch()); //architecture

console.log("platform", os.platform());

// console.log("netwrolInterfaces", os.networkInterfaces()); //networkInterfaces

console.log("cpus", os.cpus()); //system descriptions.

//Free memory
console.log("Free Memory", os.freemem());

//Total Memory
console.log("Total Memory", os.totalmem());

//Home dir
console.log("Home Directory", os.homedir());

//uptime
console.log("OS Directory", os.uptime());
