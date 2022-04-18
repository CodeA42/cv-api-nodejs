export type TokenUser = {
    id: string,
    username: string,
    email: string,
    admin: boolean
}

export type DecodedToken = {
    user: TokenUser,
    iat: number,
    exp: number
}

export type UserDetails = {
    avatar: string | undefined,
    address: string | undefined,
    town: string | undefined,
    country: string | undefined,
    phoneNumber: string | undefined
}

export type UserData = {
    id: string | undefined,
    firstName: string | undefined,
    lastName: string | undefined,
    details: UserDetails | undefined
}

export type ExperienceData = {
    id: string | undefined,
    type: string | undefined,
    name: string | undefined,
    town: string | undefined,
    country: string | undefined,
    startDate: string | undefined,
    stillEngaged: string | undefined,
    endDate: string | undefined,
    information: string | undefined
}

export type EducationData = {
    id: string | undefined,
    experience: ExperienceData | undefined
}

export type WorkExperienceData = {
    id: string | undefined,
    experience: ExperienceData | undefined,
    jobTitle: string | undefined
}

export type personalSkillsData = {
    id: string | undefined,
    name: string | undefined,
    level: string | undefined
}

export type CvData = {
    id: string | undefined,
    color: string | undefined,
    type: string | undefined,
    name: string | undefined,
    email: string | undefined,
    details: UserDetails | undefined,
    education: EducationData[] | undefined,
    workExperience: WorkExperienceData[] | undefined,
    personalSkills: personalSkillsData[] | undefined,

}