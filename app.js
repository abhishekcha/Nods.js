require("./abc")
//import {k,cal} from "./sum.js";// another ways for importing module

// const{k,cal}=require("./calculate/sum")
// const calmulti=require("./calculate/multiply")

const {cal,calmulti}=require("./calculate/index");// print json data

const data=require("./data");
console.log(JSON.stringify(data));

var name="abhishek Node js developer";
var a=10;
var b=20;
console.log(name);
// console.log(a+b);
//console.log(global);

//console.log(this);//empty object

//console.log(globalThis)

//console.log(globalThis===global);
//console.log(k);
cal(a,b);
calmulti(a,b);

