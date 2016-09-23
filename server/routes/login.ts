import { Router, Request, Response, NextFunction } from "express";

const loginRouter: Router = Router();

let echoData;

//GET DATA THAT WAS SAVED IN THIS FILE
loginRouter.get("/grabData", function (request: Request, response: Response, next: NextFunction) {
    console.log(echoData);
    response.json(echoData);
});

//ECHO --->>> SERVER(HERE)
//ECHO IS SENDING US DATA AFTER ITS SESSION WAS FINISHED
loginRouter.post("/apidata", function (request: Request, response: Response, next: NextFunction) {
    console.log(request.body);
    echoData = request.body;
    response.end();
});


export { loginRouter }
