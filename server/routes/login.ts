import { Router, Request, Response, NextFunction } from "express";
const loginRouter: Router = Router();

var requests = require('request');
var http = require('http');

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


    let myObject = {
        loggedMobile: echoData
    };

    requests({
        url: `https://echoproject-c786f.firebaseio.com/.json`,
        method: "PATCH",
        body: myObject,
        json: true,
    }, function (error, response){
        if(error) {
            console.log("BRRRRUHHHH THERE WAS AN ERROR");
            console.log(error);
        }else{
            console.log("Successfully Changed Data");
        }
    });

    response.end();
});


export { loginRouter }
