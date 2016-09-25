import { Router, Request, Response, NextFunction } from "express";
const loginRouter: Router = Router();

var requests = require('request');
var http = require('http');

let patient_profile;
let medical_time;
let allergies;
let medications;
let patient_vitals;
let test_results;




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
        url: `https://secondecho-ad19d.firebaseio.com/.json`,
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

















loginRouter.post("/patient_profile", function (request: Request, response: Response, next: NextFunction) {
    console.log(request.body);
    patient_profile = request.body;


    let myObject = {
        loggedMobile: patient_profile
    };

    requests({
        url: `https://mylistener-d04c4.firebaseio.com/patient_profile.json`,
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



loginRouter.post("/medical_time", function (request: Request, response: Response, next: NextFunction) {
    console.log(request.body);
    echoData = request.body;


    let myObject = {
        loggedMobile: medical_time
    };

    requests({
        url: `https://mylistener-d04c4.firebaseio.com/medical_time.json`,
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



loginRouter.post("/allergies", function (request: Request, response: Response, next: NextFunction) {
    console.log(request.body);
    echoData = request.body;


    let myObject = {
        loggedMobile: allergies
    };

    requests({
        url: `https://mylistener-d04c4.firebaseio.com/allergies.json`,
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




loginRouter.post("/medications", function (request: Request, response: Response, next: NextFunction) {
    console.log(request.body);
    echoData = request.body;


    let myObject = {
        loggedMobile: medications
    };

    requests({
        url: `https://mylistener-d04c4.firebaseio.com/medications.json`,
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




loginRouter.post("/patient_vitals", function (request: Request, response: Response, next: NextFunction) {
    console.log(request.body);
    echoData = request.body;


    let myObject = {
        loggedMobile: patient_vitals
    };

    requests({
        url: `https://mylistener-d04c4.firebaseio.com/patient_vitals.json`,
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




loginRouter.post("/test_results", function (request: Request, response: Response, next: NextFunction) {
    console.log(request.body);
    echoData = request.body;


    let myObject = {
        loggedMobile: test_results
    };

    requests({
        url: `https://mylistener-d04c4.firebaseio.com/test_results.json`,
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
