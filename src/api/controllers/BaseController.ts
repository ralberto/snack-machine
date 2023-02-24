import {LoggingService} from "../../common/LoggingService";
import {inject, injectable} from "inversify";
import {TYPES} from "../../config/types";
import {Request, Response} from "express";
import {validationResult} from "express-validator";

@injectable()
export class BaseController {
    @inject(TYPES.LoggingService)
    logger: LoggingService


    checkValidationResult(req: Request, res: Response) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    }
}