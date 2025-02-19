const { Transformer } = require('@parcel/plugin');
const { JSDOM } = require('jsdom');

module.exports = new Transformer({
  async transform({ asset }) {
    const code = await asset.getCode();
    const dom = new JSDOM(code);
    const { document } = dom.window;

    document.querySelectorAll('a[data-parcel-ignore]').forEach(link => {
      link.removeAttribute('href');
    });

    asset.setCode(dom.serialize());
    return [asset];
  }
});