const expect = require('chai').expect;
const Plugin = require('../');

describe('Plugin', () => {
  beforeEach(() => {
    this.plugin = new Plugin({paths: {public: 'public'}});
  });

  it('should be an object', () => {
    expect(this.plugin).to.be.ok;
  });

  it('should has #onCompile method', () => {
    expect(this.plugin.onCompile).to.be.an.instanceof(Function);
  });
});
