// const express = require('express')
// const app = express()
// const port = 7777

// app.get('/',(req,res) => {
//     res.send('Hello World!')
// })

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
// })
//let a = "abc"+1;
let a = [1,2,3,4,5];
b = a.map( (n) => n*2)
.filter((ele) => ele > 5)
.some((ele) => ele>3)
.map((n) => n*2 );

console.log(b);




//a.filter( (n) => n%2);
//a.forEach(f);
//console.log(a);