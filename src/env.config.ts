import Joi = require("@hapi/joi");

/**
 * AUTHOR_NAME   : firt name and last name of the main contact author
 * AUTHOR_EMAIL  : email of the main contact author
 * PORT          : default port to listen
 * HOST          :
 * JWT_SECRET    :
 */
export const configuration = {
  envFilePath: '.development.env',
    validationSchema: Joi.object({
      AUTHOR_NAME: Joi.string().required(),
      AUTHOR_EMAIL: Joi.string().required(),
      PORT: Joi.number().required(),
      HOST: Joi.string().required(),
      JWT_SECRET: Joi.string().required(),
    }),
    validationOptions: {
      abortEarly: true,
    },
}
  