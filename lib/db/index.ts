import { DataSource } from "typeorm"
import Cv from "./Entities/Cv.Entity"
import Edication from "./Entities/Education.Entity"
import Experience from "./Entities/Experience.Entity"
import PersonalSkills from "./Entities/PersonalSkills.Entity"
import User from "./Entities/User.Entity"
import UserDetails from "./Entities/UserDetails.Entity"
import WorkExperience from "./Entities/WorkExperience.Entity"
import * as connection from "../config/db.connection.json"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: connection.host,
    port: connection.port,
    username: connection.username,
    password: connection.password,
    database: connection.database,
    entities:[User, Cv, Edication, Experience, PersonalSkills, WorkExperience, UserDetails],
    synchronize: true
});

AppDataSource.initialize().then(() => {console.log(`Db init success`)}).catch((e) => console.error(e))