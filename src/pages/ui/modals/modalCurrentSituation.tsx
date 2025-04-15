import { ARIModals } from "components/ui"
import { MODALS } from "models/ui"
import { FunctionComponent, ReactNode } from "react"

import { Card, Col, Collapse, List, Row, Statistic, Tabs, TabsProps, Typography } from 'antd'
import { BookOutlined, EuroCircleOutlined, RocketOutlined, TeamOutlined, ExportOutlined } from '@ant-design/icons'

type Props = {
  children?: ReactNode
}

export const ModalCurrentSituation: FunctionComponent<Props> = ({children}) => {
  return(
    <ARIModals name={MODALS.CURRENT_SITUATION} size="75%">
      <Row gutter={16}>
        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="Corporate"
              value={12}
              prefix={<BookOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false}> 
            <Statistic
              title="Emprenedor/a"
              value={5}
              prefix={<RocketOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="Petita Empresa"
              value={23}
              prefix={<TeamOutlined />}
            
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="Startup"
              value={15}
              prefix={<EuroCircleOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
      <p>[INTRODUIR UNA DESCIRPCIÓ DEL ESTAT ACTUAL D'ANDORRA EN MATERIA]: Actualment, Andorra en materia d'Innovació copmta amb 4 enteitnas del sector educatiu, 3 situades en el sector privat i una d'elles en el sectro públic. Totes elles ubicades en un nucli educatiu a Sant Julià de Lòria. Pel que fe les StartUps, Andorra acull a més de 50 empreses de recent creació</p>
      
      <div style={{marginTop: '30px'}}>
        <Typography.Title level={3}> ENLLAÇOS D'INTERÈS </Typography.Title>
        <div style={{paddingLeft: '30px'}}>
          <Tabs 
            style={{marginTop: '0px'}}
            items={[
              {
                key: '1',
                label: "Polítiques d'Atracció d'Invesrií en Innovació",
                children: (
                  <List 
                    bordered
                    dataSource={[
                      {name:'Llei 42/2022', description: ', de l’1 de desembre, de l’economia digital, l’emprenedoria i innovació', link: 'https://www.leslleis.com/R20230510B'},
                      {name:'Decret 212/2023', description: ', del 10 de maig del 2023', link: 'https://www.leslleis.com/R20230510C'},
                      {name:'Decret 202/2024', description: ', del 15-5-2024, d’aprovació del Reglament d’impuls dels serveis digitals de l’Administració', link: 'https://www.leslleis.com/R20240515A'},
                      {name:'Llei 24/2022', description: ', del 30 de juny, de la representació digital d’actius mitjançant l’ús de la criptografia i de la tecnologia de llibre registre distribuït i blockchain', link: 'https://www.leslleis.com/L2022024_0'},
                      {name:'Llei 3/2023', description: ', del 19 de gener, de recerca i innovació biomèdica',link: 'https://www.leslleis.com/L2023003'},
                      {name:'Llei 8/2021', description: ', del 29 d’abril, d’esports electrònics', link: 'https://www.leslleis.com/L2021008'}
                    ]}
                    renderItem={(item) => (
                      <List.Item actions={[<ExportOutlined onClick={() => {window.open(item.link, "_blank")}}/>]}>
                        <p style={{marginTop: '0px', marginBottom: '0px'}}><strong>{item.name}</strong>{item.description}</p>
                      </List.Item>
                    )}
                  />
                )
              },{
                key: '2',
                label: "Projectes de suport a l'emprenedoria",
                children: (
                  <List 
                    bordered
                    dataSource={[
                      {name: "Taller d’emprenedors", entity: "Govern d’Andorra", link: ""},
                      {name: "Andorra Startup", entity: "Andorra Business i Andorra Recerca + Innovació", link: ""},
                      {name: "Projecte Tàndem", entity: "Andorra Business", link: ""},
                      {name: "Andorra Living Lab", entity: "Andorra Recerca + Innovació", link: ""},
                      {name: "Bootcamp", entity: "Andorra Business", link:""},
                      {name: "Programa d’emprenedoria i transferència tecnològica", entity: "Andorra Recerca + Innovació (Actua Tech: 2025)", link: ""}
                    ]}
                    renderItem={(item) => (
                      <List.Item actions={[<ExportOutlined onClick={() => {window.open(item.link, "_blank")}}/>]}>
                        <p style={{marginTop: '0px', marginBottom: '0px'}}><strong>{item.name}</strong> - {item.entity}</p>
                      </List.Item>
                    )}
                  />

                )
              },{
                key: '3',
                label: "Projectes de digitalització",
                children: (
                  <>
                    <p> Andorra Digital, lligada a efectes legals a Andorra Recerca + Innovació, ha impulsat diferents programes per la digitalització:</p>
                    <List 
                      bordered
                      dataSource={[
                        {name: "Programa de Transformació Digital", description: "Pla d’acció per a la transformació digital del país, que es va donar l’inici l’any 2030 i cada tres anys es revisa i s’actualitza per a garantir que s’assoleixen els objectius de l’estratègia 2030.", link: "https://andorra-digital.com/programa"},
                        {name: "Pla de Digitalització d'Empreses", description: "El pla de digitalització d’empreses d’Andorra segueix tres passos principals: 1-	Avaluació de la maduresa digital del negoci. 2-	Assessorament personalitzat i subvencionat. 3-	Implementació de solucions digitals amb subvencions per al desplegament de solucions digitals", link: "https://andorra-digital.com/pde"},
                      ]}
                      renderItem={(item) => (
                        <List.Item actions={[<ExportOutlined onClick={() => {window.open(item.link, "_blank")}}/>]}>
                          <List.Item.Meta
                            title={ <p style={{marginTop: '0px', marginBottom: '0px'}}><strong>{item.name}</strong></p>}
                            description={item.description}
                          />
                        </List.Item>
                      )}
                    />
                  </>
                )
              },
              {
                key: '4',
                label: "Altres estudis",
                children: (
                  <Collapse
                    size="small"
                    items={[
                      {key: '1', label: '2021', children: (
                        <List 
                          bordered
                          dataSource={[
                            "Estratègia Nacional d’Innovació i Emprenedoria d’Andorra",
                          ]}
                          renderItem={(item) => (
                            <List.Item
                              // actions={
                              //   [<a key="list-loadmore-edit">{`>`} </a>]
                              // }
                            >
                              {item}
                            </List.Item>
                          )}
                        />

                      )},
                      {key: '2', label: '2022', children: (
                        <List 
                          bordered
                          dataSource={[
                            "Adhesió a la IASP ",
                            "Adhesió a l’Estratègia Nacional d’Innovació i Emprenedoria",
                            "Euroconsultats"
                          ]}
                          renderItem={(item) => (
                            <List.Item
                              // actions={
                              //   [<a key="list-loadmore-edit">{`>`} </a>]
                              // }
                            >
                              {item}
                            </List.Item>
                          )}
                        />

                      )},
                      {key: '3', label: '2024', children: (
                        <List 
                          bordered
                          dataSource={[
                            "Model d’àrea d’innovació",
                          ]}
                          renderItem={(item) => (
                            <List.Item
                              // actions={
                              //   [<a key="list-loadmore-edit">{`>`} </a>]
                              // }
                            >
                              {item}
                            </List.Item>
                          )}
                        />

                      )}
                    ]}
                  />
                )
              }
            ] as TabsProps['items']}
          />
        </div>
      </div>

    </ARIModals>
  )
}