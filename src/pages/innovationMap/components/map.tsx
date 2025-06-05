/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { useAppDispatch, useAppSelector } from 'config/store/hooks';
import { selecFilteredData } from 'modules/companies/selector';
import { COMPANIES_MODULE } from 'models/companies';
import { isMapLoading, selectIsDark, selectMapLayer } from 'modules/map/selector';
import { MapAction } from 'modules/map/actions';
import { Button, notification, Space } from 'antd';
import { MAP_MODULE } from 'models/map';
import { GlobalOutlined, CalendarOutlined, DollarOutlined } from '@ant-design/icons'

//Creo la instancia del MAPA
mapboxgl.accessToken = 'pk.eyJ1IjoiY2FybGVzc2VycmEiLCJhIjoiY20wbWZmZnViMDI3eTJsc2Q4aDcxaTYyNiJ9.EiNooU30YXNnmtwc-UccLg'

const Map = () => {
  const dispatch = useAppDispatch()
  const companiesFilter = useAppSelector(selecFilteredData)
  const isDark = useAppSelector(selectIsDark)
  const mapLayer = useAppSelector(selectMapLayer)
  const isLoading = useAppSelector(isMapLoading)

  const mapContainer = useRef(null);
  const mapInstance = useRef<mapboxgl.Map | null>(null); // Permite null o mapboxgl.Map
  const dataPoints = companiesFilter.map((v: any) => ({
    name: v.name,
    coordinates: [v.address.coordinates.longitude, v.address.coordinates.latitude],
    type: v.type,
    zipCode: v.address.zipCode,
    sector: v.sector,
    image: v.logo,
    info: v.info,
    web: v.contact.url,
    investment: v.investment,
    programs: v.programs,
    startActivity: v.startActivity
  }))

  const [api, contextHolder] = notification.useNotification();

  const openNotification = (message: string, description: string, web: string, investment: string, programs: string, startActivity: string) => {
    api.open({
      message: (<></>), //<RocketOutlined/> <strong>{message}</strong>
      description: (<>
        <div style={{color: 'grey'}}>{description}</div>
        <div style={{paddingLeft: '7%', paddingTop: '5px'}}>
          {startActivity && startActivity !== "" &&
            (<> <CalendarOutlined /> <strong>Inici d'Activitat: </strong> {startActivity} </>)
          }
          <br/>
          {/* <RiseOutlined /> <strong> Participació en programes ARI/AB: </strong> {programs ? 'Sí' : 'No' } */}
          <br/>
          {investment && 
            (<> <DollarOutlined /> <strong>Inversió: </strong> {
              investment === COMPANIES_MODULE.INVESTMENT_TYPE.NACIONAL 
                ? COMPANIES_MODULE.INVESTMENT_TYPE.NACIONAL 
                : COMPANIES_MODULE.INVESTMENT_TYPE.OUT_SIDER 
            }  </>)
          }
        </div>
      </>),
      showProgress: true,
      pauseOnHover: true,
      btn: (    
        <Space>
          <Button type="primary" size="small" onClick={() => window.location.href = web}>
            <GlobalOutlined /> Visitar la Web
          </Button>
        </Space>
      )
    });
  };

  //Cargamos el mapa, solo en la primera carga
  useEffect(() => {
  
    if(mapContainer.current && !mapInstance.current) {
      !isLoading && dispatch(MapAction.setLoadingTrue())
      mapInstance.current  = new mapboxgl.Map({
        container: mapContainer.current,
        style: isDark ? 'mapbox://styles/mapbox/dark-v11' : 'mapbox://styles/mapbox/light-v11' ,
        // style: 'mapbox://styles/mapbox/dark-v11',
        center: [1.5211, 42.5078],
        zoom: 10.5,
        pitch: 0, // Inclina el mapa para una mejor visualización en 3D
        bearing: -17.6, // Orientación del mapa
        antialias: false, // Suaviza los bordes de los objetos 3D
        attributionControl: false // <- Desactiva el control automático
      })
      //CARGAMOS LOS DATOS
      mapInstance.current.on('load', () => {
        if(!mapInstance.current?.getSource('points')) {

          //POSICIONAMOS EL MAPA
          mapInstance.current?.fitBounds([[1.413, 42.428],[1.786, 42.656]], {
            padding: {
              top: 20,
              bottom: 20,
              left: window.innerWidth * 0.30 + 20,
              right: 20
            },
            duration: 1000
          })

          mapInstance.current?.addSource('points', {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: dataPoints.map((point: any) => ({
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: point.coordinates,
                },
                properties: {
                  name: point.name,
                  type: point.type,
                  sector: point.sector,
                  image: point.logo,
                  info: point.info,
                  web: point.web,
                  investment: point.investment,
                  programs: point.programs,
                  startActivity: point.startActivity
                },
              })),
            }
          })
        }
        // MAPA DE CALOR
        mapInstance.current?.addLayer({
          id: 'heatmap-layer',
          type: 'heatmap',
          source: 'points',
          maxzoom: 15,
          paint: {
            // Peso uniforme para que todas las empresas contribuyan por igual al mapa de calor
            'heatmap-weight': 1,
            // Ajuste del radio del heatmap en función del nivel de zoom
            'heatmap-radius': [
              'interpolate',
              ['linear'],
              ['zoom'],
              0, 10, // Radio menor en niveles de zoom bajos
              9, 30 // Radio mayor en niveles de zoom altos
            ],
        
            // Colores del mapa de calor para resaltar zonas con más empresas en rojo
            'heatmap-color': [
              'interpolate',
              ['linear'],
              ['heatmap-density'],
              0, 'rgba(0,0,0,0)', // Transparente para zonas sin empresas
              0.2, 'rgb(255,255,178)', // Amarillo claro para baja densidad
              0.4, 'rgb(254,204,92)', // Amarillo intenso para densidad media
              0.6, 'rgb(253,141,60)', // Naranja para mayor densidad
              0.8, 'rgb(252,78,42)', // Naranja-rojo para densidad alta
              1, 'rgb(177,0,38)' // Rojo oscuro para máxima densidad
            ],
        
            // Opacidad del heatmap para que sea más visible en niveles de zoom más cercanos
            'heatmap-opacity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              7, 1, // Opacidad completa en niveles de zoom medio-alto
              9, 0.6 // Reducción de opacidad en niveles de zoom muy altos
            ],
          },
        });
        // MAPA DE PUNTOS
        mapInstance.current?.addLayer({
          id: 'points',
          type: 'circle',
          source: 'points',
          paint: {
            'circle-radius': 8,
            'circle-color': [
              'match',
              ['get', 'type'],
                COMPANIES_MODULE.TYPE.CORPORATE, '#0074D9',
                COMPANIES_MODULE.TYPE.EMPRENETEUR, '#2ECC40',
                COMPANIES_MODULE.TYPE.EMPRESA_PETITA, '#FF4136',
                COMPANIES_MODULE.TYPE.START_UP, '#FF851B',
                '#ffffff', 
            ],
          },
        })
        

        if(mapLayer[MAP_MODULE.LAYERS_TYPES.CIRCLE]) { 
          mapInstance.current?.getLayer('heatmap-layer') && mapInstance.current?.setLayoutProperty('heatmap-layer', 'visibility', 'none')
          mapInstance.current?.getLayer('points') && mapInstance.current?.setLayoutProperty('points', 'visibility', 'visible')
        }else{
          mapInstance.current?.getLayer('heatmap-layer') && mapInstance.current?.setLayoutProperty('heatmap-layer', 'visibility', 'visible')
          mapInstance.current?.getLayer('points') && mapInstance.current?.setLayoutProperty('points', 'visibility', 'none')
        }


        mapInstance.current?.on('click', 'points', (e) => {
          if(e.features && e.features.length > 0){
            openNotification(
              e.features[0].properties?.name, 
              e.features[0].properties?.info,
              e.features[0].properties?.web,
              e.features[0].properties?.investment,
              e.features[0].properties?.programs,
              e.features[0].properties?.startActivity
            )
          }
          console.log(e.features)
          // openNotification()          
        });
        dispatch(MapAction.setLoadingFalse())
      })
    }
  },[dataPoints])

  useEffect(() => {       
    if(mapInstance.current){
      const source = mapInstance.current.getSource('points');
      if(source){
        (source as mapboxgl.GeoJSONSource).setData({
          type: 'FeatureCollection',
          features: dataPoints.map((point: any) => ({
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: point.coordinates,
            },
            properties: {
              name: point.name,
              type: point.type,
              sector: point.sector,
              image: point.logo,
              info: point.info,
              web: point.web,
              investment: point.investment,
              programs: point.programs,
              startActivity: point.startActivity
            },
          })),
        });
      }
    }
  })

  useEffect(() => {
    if(!isLoading) {
      if(mapContainer.current){
        if(mapLayer[MAP_MODULE.LAYERS_TYPES.CIRCLE]) { 
          mapInstance.current?.getLayer('heatmap-layer') && mapInstance.current?.setLayoutProperty('heatmap-layer', 'visibility', 'none')
          mapInstance.current?.getLayer('points') && mapInstance.current?.setLayoutProperty('points', 'visibility', 'visible')
        }else{
          mapInstance.current?.getLayer('heatmap-layer') && mapInstance.current?.setLayoutProperty('heatmap-layer', 'visibility', 'visible')
          mapInstance.current?.getLayer('points') && mapInstance.current?.setLayoutProperty('points', 'visibility', 'none')
        }
      }
    }
  }, [mapLayer])

  return (
    <>
      {contextHolder}
      <div ref={mapContainer} style={{ width: '100vw', height: '100vh' }} />
    </>
  );
};

export default Map;
