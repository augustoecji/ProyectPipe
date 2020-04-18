const express = require('express');
const app = express();
app.use(express.static('public'));

app.listen(3000, ()=>{
	console.log('Servidor iniciado')
});



function sum(a,b) {
	return a + b;
}

function prod(a,b) {
	return a * b;
}

module.exports={
	sum: sum,
	prod: prod,
}
