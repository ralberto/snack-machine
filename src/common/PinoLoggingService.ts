import {LoggingService} from "./LoggingService";
import {injectable} from "inversify";

@injectable()
export class PinoLoggingService implements LoggingService {
    debug(message: string): void {
        console.log(message);
    }

    error(message: string): void {
        console.log(message);
    }

    info(message: string): void {
        console.log(message);
    }

    warn(message: string): void {
        console.log(message);
    }

}