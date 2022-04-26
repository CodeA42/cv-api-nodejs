import { NextFunction, Request, Response } from "express";
import { UserData } from "../../common/types";
import UserDetails from "../../db/Entities/UserDetails.Entity";

export default function prepUserData(req: Request, res: Response, next: NextFunction) {
    const userData: UserData = req.body;
    userData.id = res.locals.user.id;
    userData.firstName = req.body.firstName;
    userData.lastName = req.body.lastName;

    userData.details = new UserDetails();
    userData.details.image = req.file.filename;
    userData.details.address = req.body.address;
    userData.details.town = req.body.town;
    userData.details.country = req.body.country;
    userData.details.phoneNumber = req.body.phoneNumber;
    
    res.locals.userData = userData;
    next();
}