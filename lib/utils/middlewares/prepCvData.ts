import { NextFunction, Request, Response } from "express";
import Cv from "../../db/Entities/Cv.Entity";
import UserDetails from "../../db/Entities/UserDetails.Entity";

export default function prepCvData(req: Request, res: Response, next: NextFunction) {
    const cvData: Cv = new Cv();
    cvData.color = req.body.color;
    cvData.type = req.body.type;
    cvData.name = req.body.name;
    cvData.email = req.body.email;
    
    cvData.details = new UserDetails();
    cvData.details.address = req.body.address;
    cvData.details.town = req.body.town;
    cvData.details.country = req.body.country;
    cvData.details.phoneNumber = req.body.phoneNumber;
    
    res.locals.cvData = cvData;
    next();
}