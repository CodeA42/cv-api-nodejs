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
    image: string | undefined,
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
    name: string | undefined,
    town: string | undefined,
    country: string | undefined,
    startDate: number | undefined,
    stillEngaged: boolean | undefined,
    endDate: number | undefined,
    information: string | undefined
}

export type EducationData = {
    id: string | undefined,
    type: string | undefined,
    experience: ExperienceData | undefined
}

export type WorkExperienceData = {
    id: string | undefined,
    jobTitle: string | undefined,
    type: string | undefined,
    experience: ExperienceData | undefined
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

export type EducationBodyData = {
    id: string | undefined,
    type: string | undefined,
    name: string | undefined,
    town: string | undefined,
    country: string | undefined,
    startDate: number | undefined,
    stillEngaged: boolean | undefined,
    endDate: number | undefined,
    information: string | undefined
}

export type WorkExperienceBodyData = {
    id: string | undefined,
    type: string | undefined,
    jobTitle: string | undefined,
    name: string | undefined,
    town: string | undefined,
    country: string | undefined,
    startDate: number | undefined,
    stillEngaged: boolean | undefined,
    endDate: number | undefined,
    information: string | undefined
}

export type PersonalSkillsBodyData = {
    id: string | undefined,
    name: string | undefined,
    level: number | string | undefined
}