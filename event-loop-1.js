const fs=require("fs");
const a=100;
setImmediate(()=>console.log("setImmediate"));
fs.readFile("./file.txt","utf-8",()=>{
    console.log("file reading success!");
});
setTimeout(()=>console.log("time expired"),0);

function printA(){
    console.log("a=",a);
    
}
printA();
console.log("last line of the file.");

