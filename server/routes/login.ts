import { Router, Request, Response, NextFunction } from "express";

const loginRouter: Router = Router();


loginRouter.post("/apidata", function (request: Request, response: Response, next: NextFunction) {
    console.log(request.body);
    response.end();
});

// login method
loginRouter.post("/", function (request: Request, response: Response, next: NextFunction) {

});

export { loginRouter }
