# mocky-cli
[![CircleCI](https://circleci.com/gh/acestojanoski/mocky-cli/tree/master.svg?style=svg)](https://circleci.com/gh/acestojanoski/mocky-cli/tree/master)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![install size](https://packagephobia.now.sh/badge?p=mocky-cli)](https://packagephobia.now.sh/result?p=mocky-cli)
[![Downloads](https://img.shields.io/npm/dm/mocky-cli.svg)](https://npmjs.com/mocky-cli)

> Mock your HTTP responses to test your REST API

It is using the [`www.mocky.io` API](https://www.mocky.io/).

## Install
```
$ npm install -g mocky-cli
```

## Usage
```
Usage:
  $ mocky

Options:
  --statusCode, The status code for the response (the default is 200)
  --body, The body for the response (the default is empty string)
  --location, The redirect location (it works if the status code is redirection status code)

Examples:
  $ mocky --statusCode 201 --body "{\"message\": \"CREATED\"}"
  $ mocky --statusCode 302 --location https://github.com/acestojanoski
```

## License

MIT
