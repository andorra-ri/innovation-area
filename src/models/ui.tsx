export enum MODALS {
    REGISTRATION_CONFIRM = 'registrationConfirm',
    REGISTRATION_ERROR = 'registrationError',
    INVITATIONAL_LETTER = 'invitationalLetter',
    TALENT_PROMOTION_CERTIFICATE = 'talentPromotionCertificate',
    TALENT_PROMOTION_DOCUMENT = 'talentPromotionDocument',
    TALENT_PROMOTION_PERSONAL_INFORMATION = 'talentPromotionPersonalInformation',
    SCHEDULE = 'schedule',
    TRAVELER_INFORMATION = 'travelerInformation',
    PDF_VIWER = 'pdfViwer',
    
    //INNOVATION_AREA
    COMPANY_INFORMATION = 'companyInformation',
    CURRENT_SITUATION = 'currentSituation'
}

export enum FORMAT {
    YYYY_MM_DD = 'YYYY/MM/DD',
    DD_MM_YYYY = 'DD-MM-YYYY',
    D_MMMM_YYYY = 'D [de] MMMM [de] YYYY'
} 

export type ItemsType = {
    label: string,
    value: boolean | string
    image?: string
}
