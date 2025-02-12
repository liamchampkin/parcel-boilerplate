# Parcel js boiler-plate for prototyping

To begin, clone this directory and run `npm install` at the root level

## Running the compiler

`npm run start` This will start a localhost and watch for changes in the `src` directory

## Build the dist directory with minified files

`npm run build`

## How it works

This project uses Parcel.js for bundling and building assets. The build process has been configured to handle images and SCSS files efficiently, ensuring that image paths are correctly resolved and SCSS files are compiled to CSS.

## Image Handling

### Directory Structure

Images are stored in the `src/assets/images` directory. During the build process, these images are copied to the `dist/images` directory with their original filenames.

### SCSS Configuration

SCSS files are located in the `src/styles` directory. The build process compiles these SCSS files into CSS and places them in the `dist/css` directory.

### Using images within SCSS

Always us the path `../assets/images/filename.jpg`

### Custom Namer Plugin

A custom namer plugin is used to ensure that image filenames remain consistent and SCSS files are renamed to CSS in the `dist` directory.

#### Custom Namer Plugin Code

```javascript
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
```

### Running the Build

To build the project, run the following command:

```bash
npm run build
```

This command will compile SCSS files to CSS, resolve image paths, and place the output in the `dist` directory with the correct structure.
