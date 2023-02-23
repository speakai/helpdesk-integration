/**
 * - Remove old /dist folder
 * - Move public folder from `src` to `dist`
 * - Build tsc
 */

const fs = require('fs-extra');
const childProcess = require('child_process');

const run = async () => {
  try {
    // Remove current build
    console.log('Removing current build');
    await fs.removeSync('./dist');

    // Copy public folder
    console.log('Copy public folder');
    await fs.copySync('./src/public', './dist/public');

    // Transpile the typescript files
    console.log('Building typescript...');
    childProcess.exec('tsc');
  } catch (err) {
    console.log(err);
  }
};

run();
