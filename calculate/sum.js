// module protected by default.
// you cant access variable and function directly
//require("./abc")
console.log("sum.js is executed");
var k="hello anjali";
function cal(a,b){
    const sum=a+b;
    console.log(sum);
}
//module.exports=cal;// return single function

// calling multiple module
//console.log(module.exports);// empty obj

module.exports={k,cal,};

// wrting module.exports in multiple way
// module.exports.k=k;
// module.exports.cal=cal;



