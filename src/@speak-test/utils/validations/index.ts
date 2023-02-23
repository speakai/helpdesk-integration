import Joi from 'joi';

export const list = Joi.object().keys({
    pageSize: Joi.number().optional(),
    page: Joi.number().optional(),
});

export const params = Joi.object().keys({
    name: Joi.string(),
});

export const create = Joi.object().keys({
    name: Joi.string(),
});

export const update = Joi.object().keys({
    name: Joi.string(),
});

