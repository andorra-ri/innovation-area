import { Button, Divider, Typography } from "antd"
import { useAppDispatch } from "config/store/hooks"
import { FunctionComponent, ReactElement, ReactNode } from "react"
import { FilterOutlined } from '@ant-design/icons'

import { Form } from "components/form"
import { ARIFieldCheckBox } from "components/form/ariFieldCheckBox"
import { COMPANIES_MODULE } from "models/companies"
import { ARIFieldSelect } from "components/form/ariFieldSelect"
import { CompaniesAction } from "modules/companies/actions"

import * as Yup from 'yup';

type Props = {
  children?: ReactNode
}

const validationSchema = Yup.object().shape({}) 


export const FormDataFilter: FunctionComponent<Props> = (): ReactElement => {
  const dispatch = useAppDispatch()

  const _handleSubmit = (values: any) => {
    dispatch(CompaniesAction.filterData({
      location: values.companyLoction && 
        values.companyLoction.length > 0
          ? values.companyLoction
          : undefined,

      type: values.companyType
        && values.companyType.length > 0 
          ? values.companyType
          : undefined
    }))
  }

  return (
    <Form
      handleSubmit={(e) => _handleSubmit(e)}
      validationSchema={validationSchema}
      initialValues={{
        companyLoction: [
          COMPANIES_MODULE.LOCATION.CANILLO,
          COMPANIES_MODULE.LOCATION.ENCAMP,
          COMPANIES_MODULE.LOCATION.ORDINO,
          COMPANIES_MODULE.LOCATION.LA_MASSANA,
          COMPANIES_MODULE.LOCATION.ANDORRA_LA_VELLA,
          COMPANIES_MODULE.LOCATION.SANT_JULIA_DE_LORIA,
          COMPANIES_MODULE.LOCATION.ESCALDES_EMGORDANY
        ],
        companyType: [
          COMPANIES_MODULE.TYPE.EMPRESA_PETITA,
          COMPANIES_MODULE.TYPE.CORPORATE,
          COMPANIES_MODULE.TYPE.START_UP,
          COMPANIES_MODULE.TYPE.EMPRENETEUR
        ]
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography.Title level={5} style={{ marginBottom: '0px', marginTop: '0px' }}> Filtrar </Typography.Title>
        {/* <div style={{ display: 'flex', marginLeft: 'auto', alignSelf: 'flex-end' }}>
          <Button style={{ marginLeft: '5px', backgroundColor: 'white', border: 'none' }} onClick={() => { dispatch(ModalAction.openModal({ name: MODALS.CURRENT_SITUATION })) } }>Resum<AreaChartOutlined /></Button>       
         </div> */}
      </div>
      <Divider style={{ marginTop: '0px' }} />
      <div style={{ marginLeft: '20px' }}>
        <div style={{ marginTop: '20px' }}>
          <ARIFieldSelect
            name="companyLoction"
            label="1. Ubicació"
            description="Seleccioneu les parròquies on voleu visualitzar les dades"
            placeHolder="Parròquies"
            multiple={true}
            items={[
              { label: 'AD100 - Canillo', value: COMPANIES_MODULE.LOCATION.CANILLO },
              { label: 'AD200 - Encamp', value: COMPANIES_MODULE.LOCATION.ENCAMP },
              { label: 'AD300 - Ordino', value: COMPANIES_MODULE.LOCATION.ORDINO },
              { label: 'AD400 - La massana', value: COMPANIES_MODULE.LOCATION.LA_MASSANA },
              { label: 'AD500 - Andorra la Vella', value: COMPANIES_MODULE.LOCATION.ANDORRA_LA_VELLA },
              { label: 'AD600 - Sant Julià de Lória', value: COMPANIES_MODULE.LOCATION.SANT_JULIA_DE_LORIA },
              { label: 'AD700 - Escaldes-Engordany', value: COMPANIES_MODULE.LOCATION.ESCALDES_EMGORDANY }
            ]} />
        </div>
        <div style={{ marginTop: '20px' }}>
          <ARIFieldCheckBox
            name='companyType'
            label="2. Tipología"
            // description="Add some description about the funcionality"
            items={[
              { label: 'Empresa Petita', value: COMPANIES_MODULE.TYPE.EMPRESA_PETITA },
              { label: 'Corporate', value: COMPANIES_MODULE.TYPE.CORPORATE },
              { label: 'Start-Up', value: COMPANIES_MODULE.TYPE.START_UP },
              { label: 'Emprenedor', value: COMPANIES_MODULE.TYPE.EMPRENETEUR },
            ]} />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '10px', gap: '25px' }}>
        <div>
          <Button htmlType="submit">Aplicar filtre</Button>
        </div>
        <div>
          <Button onClick={() => { dispatch(CompaniesAction.clearData()) } }><FilterOutlined /> Netejar</Button>
        </div>
      </div>
    </Form>
  )
}