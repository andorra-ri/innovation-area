import { Divider, Switch, Typography } from "antd"
import { useAppDispatch, useAppSelector } from "config/store/hooks"
import { FunctionComponent, ReactElement, ReactNode } from "react"

import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import { MapAction } from "modules/map/actions"
import { selectMapLayer } from "modules/map/selector"
import { MAP_MODULE } from "models/map"

const {Text, Paragraph} = Typography

type Props = {
  children?: ReactNode
}

export const FormMapFilter: FunctionComponent<Props> = (): ReactElement => {
  const dispatch = useAppDispatch()
  const mapLayer = useAppSelector(selectMapLayer)
  
  const _handleChangeLayer = () => {
    dispatch(MapAction.mapLayer({
      [MAP_MODULE.LAYERS_TYPES.CIRCLE]: !mapLayer.circle,
      [MAP_MODULE.LAYERS_TYPES.HEATMAP]: !mapLayer.heatmap
    }))
  }
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography.Title level={5} style={{marginBottom: '0px', marginTop: '0px'}}> Mapa </Typography.Title>
      </div>
      <Divider style={{ marginTop: '0px' }} />    
      {/* <div style={{ marginTop: '2%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Text><strong>Night mode</strong></Text>
          <Paragraph style={{ color: 'grey' }}>Visualitza el mapa en mode fosc</Paragraph>
        </div>
        <div>
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            defaultValue={false}
            size="small"
            onChange={() => { dispatch(MapAction.changeMapLight(!isDark)) }}
          />
        </div>
      </div> */}
      <Text><strong>Visualitzador de les dades</strong></Text>
      <Paragraph style={{ color: 'grey' }}>Escull el mapa amb el que desitgeu visualitzar la informació</Paragraph>
      <div style={{paddingLeft: '10px'}}>
        <div style={{ marginTop: '2%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <Text><strong>Mapa de punts</strong></Text>
          </div>
          <div>
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              value={mapLayer[MAP_MODULE.LAYERS_TYPES.CIRCLE]}
              size="small"
              onChange={() => _handleChangeLayer()}
            />
          </div>
        </div>
        <div style={{ marginTop: '2%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <Text><strong>Mapa de calor</strong></Text>
          </div>
          <div>
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              value={mapLayer[MAP_MODULE.LAYERS_TYPES.HEATMAP]}
              size="small"
              onChange={() => _handleChangeLayer()}
            />
          </div>
        </div>
      </div>
    </div>
  )
}