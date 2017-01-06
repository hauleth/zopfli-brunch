const fs = require('fs');
const zopfli = require('node-zopfli');

class ZopfliBrunch {
  static init() {
    this.prototype.brunchPlugin = true;
    this.prototype.defaultEnv = 'production';
  }

  constructor(config) {
    this.options = (config.plugins || {}).zopfli || {};
  }

  onCompile(files) {
    files.forEach(this._compress.bind(this));
  }

  _compress({path}) {
    const gzip = zopfli.createGzip(this.options.compress);
    const inputPath = `${path}`;
    const outputPath = `${path}.gz`;
    const input = fs.createReadStream(inputPath);
    const output = fs.createWriteStream(outputPath);

    input.pipe(gzip).pipe(output);
  }
};

ZopfliBrunch.init();

module.exports = ZopfliBrunch;
