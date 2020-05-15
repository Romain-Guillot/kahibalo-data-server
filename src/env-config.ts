import Joi = require("@hapi/joi");

export const configuration = {
    envFilePath: '.development.env',
    validationSchema: Joi.object({
      PORT: Joi.number().required(),
      AUTHOR_NAME: Joi.string().required(),
      AUTHOR_EMAIL: Joi.string().required()
    }),
    validationOptions: {
      abortEarly: true,
    },
  }
  