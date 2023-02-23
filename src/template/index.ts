/**
 * Ask for the input - controllerName
 * Create three folder
 * - controller
 *    - index.ts
 * - routes
 *    - v1
 *      - index.ts
 *    - index.ts
 * - helper
 *    - index.ts
 *  - utils
 *    - validations
 *      - index.ts
 */

import fs from 'fs-extra';
import path from 'path';
import { routeContent, apiRouteContent, controllerContent, validationContent } from './content';

export const createComponent = async (folderName: string) => {
  const folderPath = path.join(__dirname, `../../src/@speak-${folderName}`);

  await fs.remove(folderPath);

  if (!fs.existsSync(folderPath)) {
    await fs.mkdirSync(folderPath);
  }
  console.log('1 - Directory created');

  if (!fs.existsSync(`${folderPath}/controller`)) {
    await fs.mkdirSync(`${folderPath}/controller`);
    await fs.writeFileSync(`${folderPath}/controller/index.ts`, controllerContent(folderName));
  }
  console.log('2 - Controller created');

  if (!fs.existsSync(`${folderPath}/routes`)) {
    await fs.createFile(`${folderPath}/routes/index.ts`);
    await fs.writeFileSync(`${folderPath}/routes/index.ts`, routeContent(folderName));
    await fs.mkdirSync(`${folderPath}/routes/v1`);
    await fs.writeFileSync(`${folderPath}/routes/v1/${folderName}.ts`, apiRouteContent(folderName));
  }
  console.log('3 - Routes created');

  if (!fs.existsSync(`${folderPath}/utils`)) {
    await fs.createFile(`${folderPath}/utils/validations/index.ts`);
    await fs.writeFileSync(`${folderPath}/utils/validations/index.ts`, validationContent(folderName));
  }

  console.log('4 - Utils & validations created');

  if (!fs.existsSync(`${folderPath}/utils/types`)) {
    await fs.mkdirSync(`${folderPath}/utils/interfaces`);
    await fs.createFile(`${folderPath}/utils/interfaces/index.ts`);
  }

  console.log('5 - Interfaces created');

  if (!fs.existsSync(`${folderPath}/utils/enum`)) {
    await fs.mkdirSync(`${folderPath}/utils/enum`);
    await fs.createFile(`${folderPath}/utils/enum/index.ts`);
  }

  console.log('6 - Enums created');
};
