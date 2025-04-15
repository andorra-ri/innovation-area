export module COMPANIES_MODULE {
  export enum SECTOR {
    PUBLIC = 'public',
    PRIVATE = 'private'
  }
  export enum LOCATION {
    CANILLO = 'AD100',
    ENCAMP = 'AD200',
    ORDINO = 'AD300',
    LA_MASSANA = 'AD400',
    ANDORRA_LA_VELLA = 'AD500',
    SANT_JULIA_DE_LORIA = 'AD600',
    ESCALDES_EMGORDANY = 'AD700'
  }
  export enum TYPE_OLD {
    UNIVERSITY = 'university',
    RESEARCH_AND_INNOVATION = 'researchAndInnovation',
    DEVELOP_AGENCY = 'developAgency',
    VENTURE_CAPITAL = 'ventureCapital',
    CLUSTER = 'cluster',
    COWORKING = 'coworking',
    START_UP = 'startUp',
    DIFITALITZATION = 'digitalitzation'
  }
  export enum TYPE {
    EMPRESA_PETITA = 'smallBusiness',
    CORPORATE = 'corporate',
    START_UP = "startUp",
    EMPRENETEUR = "empreneteur"
  }
  export enum INVESTMENT_TYPE {
    NACIONAL = "Nacional",
    OUT_SIDER = 'Inversió Estrangera'
  }

}