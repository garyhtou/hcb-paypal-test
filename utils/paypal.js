const axios = require('axios').default.create({
	auth: {
		username: process.env.PAYPAL_CLIENT_ID,
		password: process.env.PAYPAL_CLIENT_SECRET,
	},
});
const qs = require('qs');

const PAYPAL_API = 'https://api-m.paypal.com/v1';

// const accessToken = await getToken();

async function getToken() {
	return (
		await axios.post(
			PAYPAL_API + '/oauth2/token',
			qs.stringify({
				grant_type: 'client_credentials',
			}),
			{
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			}
		)
	).data;
}

/**
 * List account transactions
 * PayPal only allows for view of the past 31 days of transaction history
 * @param {*} pastDays
 * @returns
 */
async function list(pastDays) {
	var startDate = new Date();
	startDate.setDate(startDate.getDate() - pastDays);

	return (
		await axios.get(PAYPAL_API + '/reporting/transactions', {
			params: {
				start_date: startDate,
				end_date: new Date(),
			},
		})
	).data;
}

module.exports = { auth: { getToken }, transactions: { list } };
