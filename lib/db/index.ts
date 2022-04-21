import { DataSource } from "typeorm";
import Cv from "./Entities/Cv.Entity";
import Edication from "./Entities/Education.Entity";
import Experience from "./Entities/Experience.Entity";
import Image from "./Entities/Image.Entity";
import PersonalSkills from "./Entities/PersonalSkills.Entity";
import User from "./Entities/User.Entity";
import UserDetails from "./Entities/UserDetails.Entity";
import WorkExperience from "./Entities/WorkExperience.Entity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "cvapiuser",
    password: "supersafepassword",
    database: "cvapi",
    entities:[User, Cv, Edication, Experience, PersonalSkills, WorkExperience, UserDetails, Image],
    synchronize: true
});

AppDataSource.initialize().then(() => {console.log(`Db init success`)}).catch((e) => console.error(e));