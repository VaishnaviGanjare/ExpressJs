//fs will give access to file and we cannot run it in browser because it cannot have access to file
const fs=require('fs');
fs.writeFileSync("hello.txt","Hello from node.js");