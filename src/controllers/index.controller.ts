import { Request, Response } from "express";
import moment from "moment";

import { timezoneInterface } from "../interface/timezone.interface";
import { timezoneModel } from "../models/timezone.models";

export async function getTimezone(req: Request, res: Response) {
  /*  
    #swagger.tags = ['Timezone']
    #swagger.description = 'Get timezone' 

    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Timezone information.',
      required: true,
      schema: { $ref: "#/definitions/post-timezone" }
    }

    #swagger.responses[200] = { 
      schema: { "$ref": "#/definitions/response-timezone" },
      description: "Time zone was successfully obtained" 
    }
  */
  try {
    const { date, timezone }: timezoneInterface = await timezoneModel.validateAsync(req.body);
    return res.status(200).json({ response: { time: moment(date, "HH:mm:ss").utcOffset(timezone).format("HH:mm:ss"), timezone: "UTC" } });
  } catch (error) {
    return res.status(422).json({ details: error.details });
  }
}
