import { Collapse, Typography, Image } from "antd";
import { FunctionComponent, ReactElement, ReactNode } from "react";
import { FormDataFilter } from "./forms/formDataFilter";
import { FormMapFilter } from "./forms/formMapFilter";

type Props = {
	children?: ReactNode
}

export const Filters: FunctionComponent<Props> = (props): ReactElement => {
  const year = new Date().getFullYear();
  
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


      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        fontSize: '0.75rem',
        opacity: 0.6,
        padding: '6px 10px',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        zIndex: 1000
      }}>
        &copy; {year} &middot; Andorra Recerca + Innovació. Tots els drets reservats.
        <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/" style={{ marginLeft: '8px' }}>
          Aquesta obra està sota una llicència 
          <img
            alt="Licència de Creative Commons"
            src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
            style={{ height: '14px', verticalAlign: 'middle', marginLeft: '4px' }}
          />
        </a>
      </div>
		</>
	)
}
