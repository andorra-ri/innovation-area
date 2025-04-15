import { ARIModals } from "components/ui"
import { MODALS } from "models/ui"
import { FunctionComponent, ReactNode } from "react"

import { Col, Row, Image  } from 'antd'
import { useAppSelector } from "config/store/hooks"
import { selectCurrentMetadata } from "modules/ui/selector"
import { COMPANIES_MODULE } from "models/companies"

type Props = {
  children?: ReactNode
}

export const ModalCompanyInformation: FunctionComponent<Props> = ({children}) => {
  const metadata = useAppSelector(selectCurrentMetadata)
  return(
    <ARIModals name={MODALS.COMPANY_INFORMATION} size="60%">
      <Row>
        <Col span={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Image src={metadata.logo} width={'70%'} />
        </Col>
        <Col span={18}>
          <p style={{ marginTop: '2px', lineHeight: '1' }}><strong>{metadata.name}</strong></p>
          <p>{metadata.info}</p>
        </Col>
      </Row>
      {metadata.type === COMPANIES_MODULE.TYPE.START_UP &&  (
        <>
          <p>Activitats i Projectes</p>
          <Row gutter={16}>
            <Col span={12}>
              <p> ACTINN -  Andorra Clúster de la Tecnología i la Innovació </p>
              <p>Clúster d’innovació i noves tecnologies a Andorra. És el primer clúster privat creat a Andorra conformat per més de 90 empreses i professionals. L’objectiu principal es millorar la competitivitat de les empreses associades, crear entorns de cooperació i col·laboració per innovar i impulsar la transformació digital dels negocis, així com la modernització dels sectors tradicionals i la diversificació econòmica del Principat.</p>
            </Col>
            <Col span={12}>
              <p> Andorra Esport Clúster </p>
              <p>Clúster del sector esportiu dedicat a promoure i desenvolupar la competitivitat de les empreses dins el sector esportiu andorrà, amb la missió principal de fomentar un ecosistema que permeti a les atletes, atletes i aficionats col·laborar, innovar i créixer. Actualment el clúster compta amb 70 membres incloent entitats esportives, empreses i professionals.</p>
            </Col>
          </Row>
        </>
      )}
    </ARIModals>
  )
}