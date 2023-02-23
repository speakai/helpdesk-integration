import { RequestHandler } from 'express';
import logger from '@src/@speak-common/config/logger';

/**
* Get test list
* @param req
* @param res
* @returns
*/
export const list: RequestHandler = async (req, res) => {
   logger.info('Start: Get test list');

   // TODO: Write your code here

   logger.info('Finish: Get test list');
   return res.send({status: 'success', data: [] });
};

/**
* Get test list
* @param req
* @param res
* @returns
*/
export const get: RequestHandler = async (req, res) => {
   logger.info('Start: Get test');

   // TODO: Write your code here

   logger.info('Finish: Get test list');
   return res.send({status: 'success', data: [] });
};

/**
* Create test
* @param req
* @param res
* @returns
*/
export const create: RequestHandler = async (req, res) => {
   logger.info('Start: Create test');

   // TODO: Write your code here

   logger.info('Finish: Create test list');
};

/**
* Update test
* @param req
* @param res
* @returns
*/
export const update: RequestHandler = async (req, res) => {
   logger.info('Start: Update test');

   // TODO: Write your code here

   logger.info('Finish: Update test list');
};

/**
* Remove test
* @param req
* @param res
* @returns
*/
export const remove: RequestHandler = async (req, res) => {
   logger.info('Start: Remove test');

   // TODO: Write your code here

   logger.info('Finish: Remove test list');
};

