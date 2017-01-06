const fs = require('fs');
const zopfli = require('node-zopfli');

const compress = function({path}) {
  const gzip = zopfli.createGzip(this.options.compress);
  const input = fs.createReadStream(`${path}`);
  const output = fs.createWriteStream(`${path}.gz`);

  input.pipe(gzip).pipe(output);
};

class ZopfliBrunch {
  static init() {
    this.prototype.brunchPlugin = true;
    this.prototype.defaultEnv = 'production';
  }

  constructor(config) {
    this.options = (config.plugins || {}).zopfli || {};
  }

  onCompile(files) {
    files.forEach(compress.bind(this));
  }
}

ZopfliBrunch.init();

module.exports = ZopfliBrunch;
