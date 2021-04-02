import Joi from "joi";

export const timezoneModel = Joi.object({
  date: Joi.string()
    .required()
    .pattern(new RegExp(/(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)/)),
  timezone: Joi.number().required().min(-12).max(14),
}).options({ abortEarly: false });
