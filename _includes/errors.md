# Errors

The SpinupWP API uses the following error codes:


Error Code | Meaning
---------- | -------
400 | Bad Request -- Your request is invalid.
401 | Unauthorized -- Your API token is wrong or no longer valid.
402 | Payment Required -- The team does not have a valid subscription.
403 | Forbidden -- You do not have permission to access the endpoint.
404 | Not Found -- The specified resource could not be found.
405 | Method Not Allowed -- You tried to access an endpoint with an invalid method.
422 | Validation Error -- Invalid or missing parameters.
429 | Too Many Requests -- You're hit the rate limit on API requests.
500 | Internal Server Error -- We had a problem with our server. Try again later.
503 | Service Unavailable -- We're temporarily offline for maintenance. Please try again later.
