const { Namer } = require('@parcel/plugin');
const path = require('path');

module.exports = new Namer({
  name({ bundle }) {
    if (bundle.type === 'css') {
      let filePath = bundle.getMainEntry().filePath;
      let newFileName = path.basename(filePath, '.scss') + '.css';
      return `css/${newFileName}`;
    }
    if (['png', 'jpg', 'svg', 'webp'].includes(bundle.type)) {
      let filePath = bundle.getMainEntry().filePath;
      return `images/${path.basename(filePath)}`;
    }
    return null; // Allow the next namer to handle this bundle
  }
});