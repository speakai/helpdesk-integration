import { Router } from 'express';
import { RequestValidation } from '@src/@speak-common/middleware';
import * as controller from '@src/@speak-test/controller/index';
import * as validations from '@src/@speak-test/utils/validations';

const router = Router();

router.get('/',  RequestValidation(validations.list, 'query'), controller.list);router.get('/:id',  RequestValidation(validations.params, 'params'), controller.get);

router.post('/',  RequestValidation(validations.create, 'body'), controller.create);

router.put('/:id',  RequestValidation(validations.params, 'params'), RequestValidation(validations.update, 'body'), controller.update);

router.delete('/:id',  RequestValidation(validations.params, 'params'), controller.remove);

export default router;