const express = require('express');
const app = express();
app.use(express.static('public'));




function sum(a,b) {
	return a + b+10;
}

function prod(a,b) {
	return a * b;
}

module.exports={
	sum: sum,
	prod: prod,
}
