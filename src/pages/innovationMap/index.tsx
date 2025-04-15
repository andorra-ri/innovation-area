import Map from './components/map';
import {Filters} from './components/filters'
import { Divider } from 'antd';
import { Page } from 'components/layout';

function InnovationMap() {
  return (
    <Page>
      <Map />

      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          zIndex: 10,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "16px",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          width: "30vw", // ← esto es lo importante
          height: "95vh",
          minWidth: "250px", // ← opcional: asegura legibilidad en pantallas pequeñas
          maxHeight: "90vh", // ← opcional: evita que crezca demasiado en pantallas pequeñas
          overflowY: "auto", // ← opcional: scroll interno si el contenido crece
        }}
      >
        <Filters/>
      </div>

      {/* Llegenda */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          zIndex: 10,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "16px",
          borderRadius: "8px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          maxWidth: "300px"
        }}
      >
        {/* Título de la leyenda */}
        <h4 style={{ margin: 0, fontSize: "16px" }}>Llegenda</h4>
        <Divider style={{ marginTop: '0px', marginBottom: '0px' }} />
        {/* Contenedor de los ítems en grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px 16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "16px", height: "16px", backgroundColor: "#0074D9", borderRadius: "3px" }} />
            <span style={{ fontSize: "14px" }}>Corporate</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "16px", height: "16px", backgroundColor: "#2ECC40", borderRadius: "3px" }} />
            <span style={{ fontSize: "14px" }}>Emprenedor/a</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "16px", height: "16px", backgroundColor: "#FF4136", borderRadius: "3px" }} />
            <span style={{ fontSize: "14px" }}>Empresa petita</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "16px", height: "16px", backgroundColor: "#FF851B", borderRadius: "3px" }} />
            <span style={{ fontSize: "14px" }}>Start Up</span>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default InnovationMap;
