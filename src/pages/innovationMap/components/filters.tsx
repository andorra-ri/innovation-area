import { Collapse, Typography, Image } from "antd";
import { FunctionComponent, ReactElement, ReactNode } from "react";
import { FormDataFilter } from "./forms/formDataFilter";
import { FormMapFilter } from "./forms/formMapFilter";

type Props = {
	children?: ReactNode
}

export const Filters: FunctionComponent<Props> = (props): ReactElement => {
	return (
		<>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center", // ← centra verticalmente
        // padding: "12px 24px",
      }}>
        <Typography.Title level={3}> INNOVACIÓ ANDORRA </Typography.Title>
      </div>
			<div>
				<p style={{textAlign: 'center', color: 'grey',marginTop: '0px'}}>Visió detallada de l'innovació al país. Agrupació i visualització de dades provinents de diverses fonts.</p>  
        <Collapse
          defaultActiveKey={['1']}
					size="small"
					items={[
						{key: '1', label: 'Filtre de Dades', children: (<FormDataFilter />)},
						{key: '2', label: 'Visualitzador de les Dades', children: (<FormMapFilter />)}
					]}
				/>
			</div>

      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "right", padding: "12px 24px", gap: '30px', marginTop: '5px' }}>
        <Image width={100} preview={false} src="/images/ARIicon.png"/>
        <Image width={100} preview={false} src="/images/ABicon.png"/>
      </div>
		</>
	)
}
