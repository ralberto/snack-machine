import { NextFunction, Request, Response } from "express"


// eslint-disable-next-line require-jsdoc
export default function errorMiddleware(
    error: TypeError,
    request: Request,
    response: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction
) {
    const status = "status" in error ? error.status || 500 : 500
    const message =
        error.message || "Something went wrong. Please try again later"
    response.status(status as number).send({
        status,
        message
    })
}
