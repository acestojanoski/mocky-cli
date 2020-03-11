#!/usr/bin/env node

const {default: acejax} = require('acejax');
const argsFalgify = require('args-flagify');

const {flags} = argsFalgify(
	`
    Usage:
      $ mocky

    Options:
      --statusCode, The status code for the response (the default is 200)
      --body, The body for the response (the default is empty string)
      --location, The redirect location (it works if the status code is redirection status code)
    
    Examples:
      $ mocky --statusCode 201 --body "{\"message\": \"CREATED\"}"
      $ mocky --statusCode 302 --location https://github.com/acestojanoski
`,
	{
		statusCode: 'number',
		body: 'string',
		location: 'string',
	}
);

(async (statusCode, body, location) => {
	try {
		const form = {
			body: body || '',
			statuscode: statusCode || 200,
			contenttype: 'application/json',
			charset: 'UTF-8',
		};

		if (statusCode >= 300 && statusCode <= 308) {
			form.location = location || '/';
		}

		const result = await acejax.post('http://www.mocky.io', {
			form,
			json: true,
		});

		console.log(result.body.url);
	} catch (error) {
		console.log(error);
	}
})(flags.statusCode, flags.body, flags.location);
