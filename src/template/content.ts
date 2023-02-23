export const routeContent = (name: string) =>
  "import { Router } from 'express'; \n" +
  'const routes = Router(); \n\n' +
  `import ${name}Routes from './v1/${name}';\n` +
  `routes.use('/v1/${name}', ${name}Routes);\n\n` +
  'export default routes;';

export const apiRouteContent = (name: string) =>
  "import { Router } from 'express';\n" +
  "import { RequestValidation } from '@src/@speak-common/middleware';\n" +
  `import * as controller from '@src/@speak-${name}/controller/index';\n` +
  `import * as validations from '@src/@speak-${name}/utils/validations';\n\n` +
  'const router = Router();\n\n' +
  "router.get('/',  RequestValidation(validations.list, 'query'), controller.list);" +
  "router.get('/:id',  RequestValidation(validations.params, 'params'), controller.get);\n\n" +
  "router.post('/',  RequestValidation(validations.create, 'body'), controller.create);\n\n" +
  "router.put('/:id',  RequestValidation(validations.params, 'params'), RequestValidation(validations.update, 'body'), controller.update);\n\n" +
  "router.delete('/:id',  RequestValidation(validations.params, 'params'), controller.remove);\n\n" +
  'export default router;';

export const controllerContent = (name: string) =>
  "import { RequestHandler } from 'express';\n" +
  "import logger from '@src/@speak-common/config/logger';\n\n" +
  '/**\n' +
  `* Get ${name} list\n` +
  '* @param req\n' +
  '* @param res\n' +
  '* @returns\n' +
  '*/\n' +
  'export const list: RequestHandler = async (req, res) => {\n' +
  `   logger.info('Start: Get ${name} list');\n\n` +
  `   // TODO: Write your code here\n\n` +
  `   logger.info('Finish: Get ${name} list');\n` +
  `   return res.send({status: 'success', data: [] });\n` +
  '};\n\n' +
  '/**\n' +
  `* Get ${name} list\n` +
  '* @param req\n' +
  '* @param res\n' +
  '* @returns\n' +
  '*/\n' +
  'export const get: RequestHandler = async (req, res) => {\n' +
  `   logger.info('Start: Get ${name}');\n\n` +
  `   // TODO: Write your code here\n\n` +
  `   logger.info('Finish: Get ${name} list');\n` +
  `   return res.send({status: 'success', data: [] });\n` +
  '};\n\n' +
  '/**\n' +
  `* Create ${name}\n` +
  '* @param req\n' +
  '* @param res\n' +
  '* @returns\n' +
  '*/\n' +
  'export const create: RequestHandler = async (req, res) => {\n' +
  `   logger.info('Start: Create ${name}');\n\n` +
  `   // TODO: Write your code here\n\n` +
  `   logger.info('Finish: Create ${name} list');\n` +
  '};\n\n' +
  '/**\n' +
  `* Update ${name}\n` +
  '* @param req\n' +
  '* @param res\n' +
  '* @returns\n' +
  '*/\n' +
  'export const update: RequestHandler = async (req, res) => {\n' +
  `   logger.info('Start: Update ${name}');\n\n` +
  `   // TODO: Write your code here\n\n` +
  `   logger.info('Finish: Update ${name} list');\n` +
  '};\n\n' +
  '/**\n' +
  `* Remove ${name}\n` +
  '* @param req\n' +
  '* @param res\n' +
  '* @returns\n' +
  '*/\n' +
  'export const remove: RequestHandler = async (req, res) => {\n' +
  `   logger.info('Start: Remove ${name}');\n\n` +
  `   // TODO: Write your code here\n\n` +
  `   logger.info('Finish: Remove ${name} list');\n` +
  '};\n\n';

export const validationContent = (name: string) =>
  "import Joi from 'joi';\n\n" +
  'export const list = Joi.object().keys({\n' +
  '    pageSize: Joi.number().optional(),\n' +
  '    page: Joi.number().optional(),\n' +
  '});\n\n' +
  'export const params = Joi.object().keys({\n' +
  '    name: Joi.string(),\n' +
  '});\n\n' +
  'export const create = Joi.object().keys({\n' +
  '    name: Joi.string(),\n' +
  '});\n\n' +
  'export const update = Joi.object().keys({\n' +
  '    name: Joi.string(),\n' +
  '});\n\n';
