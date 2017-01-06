const fs = require('fs');
const zopfli = require('node-zopfli');

class ZopfliBrunch {
  static init() {
    this.prototype.brunchPlugin = true;
    this.prototype.pattern = /\.(js|css|woff2?|ttf|otf|svg|eot)$/;
    this.prototype.defaultEnv = 'production';
  }

  constructor(config) {
    this.options = (config.plugins || {}).zopfli || {};
  }

  onCompile(files) {
    files.forEach(({path}) => {
      if (this.prototype.pattern.match(path)) this._compress(path);
    });
  }

  _compress(path) {
    const gzip = zopfli.createGzip();
    const inputPath = `${path}`;
    const outputPath = `${path}.gz`;
    const input = fs.createReadStream(inputPath);
    const output = fs.createWriteStream(outputPath);

    input.pipe(gzip).pipe(output);
  }
};

ZopfliBrunch.init();

module.exports = ZopfliBrunch;
