# zopfli-brunch

Adds zopfli support to [Brunch](http://brunch.io).

The plugin will compress JS files and CSS files.

## Usage

Install the plugin via NPM with:

```
$ npm install --save zopfli-brunch
```

This plugin works only when optimized option is passed.

```
$ brunch build --production
```

## TODO

- Allow compression of other files like fonts.
- Add possibility to compress PNGs using `zopfli.pngcompress`

## CHANGELOG

* 1.0.3 (6 Jan 2017) - Initial release

## License

The MIT License (MIT)

Copyright (c) 2017 Łukasz Niemier
