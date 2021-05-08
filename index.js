require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`App listening`);
});

(async function test() {
	const paypal = require('./utils/paypal');

	// await paypal.auth.getToken();

	const txs = JSON.stringify(await paypal.transactions.list(31), null, 2);

	console.log(txs);
})();
