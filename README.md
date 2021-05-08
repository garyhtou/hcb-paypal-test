# Testing PayPal's API

Testing PayPal's API for [Hack Club Bank](https://github.com/hackclub/bank) development.

I was able to gather transaction history. Here's what it looks like (redacted some info):

```
{
  "transaction_details": [
    {
      "transaction_info": {
        "paypal_account_id": "REDACTED",
        "transaction_id": "REDACTED",
        "transaction_event_code": "T0001",
        "transaction_initiation_date": "2021-04-25T20:26:41+0000",
        "transaction_updated_date": "2021-04-25T20:26:41+0000",
        "transaction_amount": {
          "currency_code": "USD",
          "value": "112.80"
        },
        "transaction_status": "S",
        "transaction_note": "REDACTED",
        "ending_balance": {
          "currency_code": "USD",
          "value": "112.80"
        },
        "available_balance": {
          "currency_code": "USD",
          "value": "112.80"
        },
        "custom_field": "REDACTED",
        "protection_eligibility": "02"
      }
    }
  ],
  "account_number": "REDACTED",
  "start_date": "2021-04-07T22:47:56+0000",
  "end_date": "2021-05-08T19:59:59+0000",
  "last_refreshed_datetime": "2021-05-08T19:59:59+0000",
  "page": 1,
  "total_items": 1,
  "total_pages": 1,
  "links": [
    {
      "href": "https://api.paypal.com/v1/reporting/transactions?end_date=2021-05-08T22%3A47%3A56.783Z&start_date=2021-04-07T22%3A47%3A56.782Z&page_size=100&page=1",
      "rel": "self",
      "method": "GET"
    }
  ]
}
```

[PayPal Transaction Search Docs](https://developer.paypal.com/docs/api/transaction-search/v1/())