import GalleryImg from "./GalleryImg";

const Gallery = ({ language }) => {
  const proyectos = [
    {
      descripcion: language === 'en' ? ['Ceiling installation'] : ['Instalación de techo'],
      ubicacion: 'Lake Mary, FL',
      antes: ['../../assets/img/mixtas/galeria/ig4_1_antes.avif', '../../assets/img/mixtas/galeria/ig4_2_antes.avif', '../../assets/img/mixtas/galeria/ig4_3_antes.avif', '../../assets/img/mixtas/galeria/ig4_4_antes.avif', '../../assets/img/mixtas/galeria/ig4_5_antes.avif', '../../assets/img/mixtas/galeria/ig4_6_antes.avif'],
      durante: ['../../assets/img/mixtas/galeria/ig4_7_durante.avif', '../../assets/img/mixtas/galeria/ig4_8_durante.avif', '../../assets/img/mixtas/galeria/ig4_9_durante.avif', '../../assets/img/mixtas/galeria/ig4_10_durante.avif', '../../assets/img/mixtas/galeria/ig4_11_durante.avif', '../../assets/img/mixtas/galeria/ig4_12_durante.avif', '../../assets/img/mixtas/galeria/ig4_13_durante.avif', '../../assets/img/mixtas/galeria/ig4_14_durante.avif', '../../assets/img/mixtas/galeria/ig4_15_durante.avif', '../../assets/img/mixtas/galeria/ig4_16_durante.avif'],
      despues: ['../../assets/img/mixtas/galeria/ig4_17_despues.avif', '../../assets/img/mixtas/galeria/ig4_18_despues.avif', '../../assets/img/mixtas/galeria/ig4_19_despues.avif', '../../assets/img/mixtas/galeria/ig4_20_despues.avif', '../../assets/img/mixtas/galeria/ig4_21_despues.avif', '../../assets/img/mixtas/galeria/ig4_22_despues.avif', '../../assets/img/mixtas/galeria/ig4_23_despues.avif']
    },
    {
      descripcion: language === 'en' ? ['Acoustic wall insulation'] : ['Aislamiento acústico de paredes'],
      ubicacion: 'Orlando, FL',
      antes: [],
      durante: ['../../assets/img/mixtas/galeria/ig5_1_durante.avif', '../../assets/img/mixtas/galeria/ig5_2_durante.avif', '../../assets/img/mixtas/galeria/ig5_3_durante.avif', '../../assets/img/mixtas/galeria/ig5_4_durante.avif', '../../assets/img/mixtas/galeria/ig5_5_durante.avif'],
      despues: ['../../assets/img/mixtas/galeria/ig5_1_despues.avif', '../../assets/img/mixtas/galeria/ig5_2_despues.avif', '../../assets/img/mixtas/galeria/ig5_3_despues.avif', '../../assets/img/mixtas/galeria/ig5_4_despues.avif']
    },
    {
      descripcion: language === 'en' ? ['Acoustic ceiling insulation'] : ['Aislamiento acústico de techo'],
      ubicacion: 'Celebration, FL',
      antes: ['../../assets/img/mixtas/galeria/ig6_1_antes.avif', '../../assets/img/mixtas/galeria/ig6_2_antes.avif'],
      durante: ['../../assets/img/mixtas/galeria/ig6_1_durante.avif', '../../assets/img/mixtas/galeria/ig6_2_durante.avif', '../../assets/img/mixtas/galeria/ig6_3_durante.avif', '../../assets/img/mixtas/galeria/ig6_4_durante.avif', '../../assets/img/mixtas/galeria/ig6_5_durante.avif'],
      despues: ['../../assets/img/mixtas/galeria/ig6_1_despues.avif', '../../assets/img/mixtas/galeria/ig6_2_despues.avif']
    },
    {
      descripcion: language === 'en' ? ['Acoustic ceiling insulation'] : ['Aislamiento acústico de techo'],
      ubicacion: 'Lake Mary, FL',
      antes: [],
      durante: ['../../assets/img/mixtas/galeria/ig7_1_durante.avif', '../../assets/img/mixtas/galeria/ig7_2_durante.avif'],
      despues: ['../../assets/img/mixtas/galeria/ig7_1_despues.avif', '../../assets/img/mixtas/galeria/ig7_2_despues.avif', '../../assets/img/mixtas/galeria/ig7_3_despues.avif']
    },
    {
      descripcion: language === 'en' ? ['Acoustic ceiling insulation'] : ['Aislamiento acústico de techo'],
      ubicacion: 'Lake Mary, FL',
      antes: [],
      durante: [],
      despues: ['../../assets/img/mixtas/galeria/ig8_1_despues.avif', '../../assets/img/mixtas/galeria/ig8_2_despues.avif', '../../assets/img/mixtas/galeria/ig8_3_despues.avif']
    },
    {
      descripcion: language === 'en' ? ['Baffle ceiling installation'] : ['Instalación de deflector de techo'],
      ubicacion: 'Lake Mary, FL',
      antes: [],
      durante: ['../../assets/img/mixtas/galeria/ig9_1_durante.avif', '../../assets/img/mixtas/galeria/ig9_2_durante.avif', '../../assets/img/mixtas/galeria/ig9_3_durante.avif', '../../assets/img/mixtas/galeria/ig9_4_durante.avif'],
      despues: ['../../assets/img/mixtas/galeria/ig9_1_despues.avif', '../../assets/img/mixtas/galeria/ig9_2_despues.avif', '../../assets/img/mixtas/galeria/ig9_3_despues.avif', '../../assets/img/mixtas/galeria/ig9_4_despues.avif', '../../assets/img/mixtas/galeria/ig9_5_despues.avif', '../../assets/img/mixtas/galeria/ig9_6_despues.avif']
    },
    {
      descripcion: language === 'en' ? ['Acoustic ceiling insulation'] : ['Aislamiento acústico de techo'],
      ubicacion: 'Orlando, FL',
      antes: [],
      durante: [],
      despues: ['../../assets/img/mixtas/galeria/ig10_1_despues.avif', '../../assets/img/mixtas/galeria/ig10_2_despues.avif', '../../assets/img/mixtas/galeria/ig10_3_despues.avif', '../../assets/img/mixtas/galeria/ig10_4_despues.avif', '../../assets/img/mixtas/galeria/ig10_5_despues.avif', '../../assets/img/mixtas/galeria/ig10_6_despues.avif', '../../assets/img/mixtas/galeria/ig10_7_despues.avif', '../../assets/img/mixtas/galeria/ig10_8_despues.avif', '../../assets/img/mixtas/galeria/ig10_9_despues.avif', '../../assets/img/mixtas/galeria/ig10_10_despues.avif']
    },
    {
      descripcion: language === 'en' ? ['Acoustic wall panels installation'] : ['Instalación de paneles de pared acústicos'],
      ubicacion: 'Jacksonville, FL',
      antes: [],
      durante: ['../../assets/img/mixtas/galeria/ig11_1_durante.avif', '../../assets/img/mixtas/galeria/ig11_2_durante.avif', '../../assets/img/mixtas/galeria/ig11_3_durante.avif'],
      despues: ['../../assets/img/mixtas/galeria/ig11_1_despues.avif', '../../assets/img/mixtas/galeria/ig11_2_despues.avif', '../../assets/img/mixtas/galeria/ig11_3_despues.avif', '../../assets/img/mixtas/galeria/ig11_4_despues.avif', '../../assets/img/mixtas/galeria/ig11_5_despues.avif', '../../assets/img/mixtas/galeria/ig11_6_despues.avif']
    },
    {
      descripcion: language === 'en' ? ['Kitchen remodeling'] : ['Remodelación de cocina'],
      ubicacion: 'North Carolina',
      antes: ['../../assets/img/mixtas/galeria/ig12_1_antes.avif'],
      durante: [],
      despues: ['../../assets/img/mixtas/galeria/ig12_1_despues.avif']
    },
    {
      descripcion: language === 'en' ? ['Kitchen remodeling'] : ['Remodelación de cocina'],
      ubicacion: 'Indianapolis, IN',
      antes: ['../../assets/img/mixtas/galeria/ig13_1_antes.avif', '../../assets/img/mixtas/galeria/ig13_2_antes.avif'],
      durante: [],
      despues: ['../../assets/img/mixtas/galeria/ig13_1_despues.avif', '../../assets/img/mixtas/galeria/ig13_2_despues.avif']
    },
    {
      descripcion: language === 'en' ? ['Acoustic panels installation'] : ['Instalación de paneles acústicos'],
      ubicacion: 'Orlando, FL',
      antes: [],
      durante: ['../../assets/img/mixtas/galeria/ig14_1_durante.avif', '../../assets/img/mixtas/galeria/ig14_2_durante.avif', '../../assets/img/mixtas/galeria/ig14_3_durante.avif', '../../assets/img/mixtas/galeria/ig14_4_durante.avif', '../../assets/img/mixtas/galeria/ig14_5_durante.avif', '../../assets/img/mixtas/galeria/ig14_6_durante.avif', '../../assets/img/mixtas/galeria/ig14_7_durante.avif', '../../assets/img/mixtas/galeria/ig14_8_durante.avif', '../../assets/img/mixtas/galeria/ig14_9_durante.avif', '../../assets/img/mixtas/galeria/ig14_10_durante.avif', '../../assets/img/mixtas/galeria/ig14_11_durante.avif', '../../assets/img/mixtas/galeria/ig14_12_durante.avif', '../../assets/img/mixtas/galeria/ig14_13_durante.avif', '../../assets/img/mixtas/galeria/ig14_14_durante.avif', '../../assets/img/mixtas/galeria/ig14_15_durante.avif', '../../assets/img/mixtas/galeria/ig14_16_durante.avif', '../../assets/img/mixtas/galeria/ig14_17_durante.avif', '../../assets/img/mixtas/galeria/ig14_18_durante.avif', '../../assets/img/mixtas/galeria/ig14_19_durante.avif', '../../assets/img/mixtas/galeria/ig14_20_durante.avif', '../../assets/img/mixtas/galeria/ig14_21_durante.avif'],
      despues: ['../../assets/img/mixtas/galeria/ig14_1_despues.avif', '../../assets/img/mixtas/galeria/ig14_2_despues.avif', '../../assets/img/mixtas/galeria/ig14_3_despues.avif', '../../assets/img/mixtas/galeria/ig14_4_despues.avif', '../../assets/img/mixtas/galeria/ig14_5_despues.avif', '../../assets/img/mixtas/galeria/ig14_6_despues.avif', '../../assets/img/mixtas/galeria/ig14_7_despues.avif', '../../assets/img/mixtas/galeria/ig14_8_despues.avif', '../../assets/img/mixtas/galeria/ig14_9_despues.avif', '../../assets/img/mixtas/galeria/ig14_10_despues.avif', '../../assets/img/mixtas/galeria/ig14_11_despues.avif', '../../assets/img/mixtas/galeria/ig14_12_despues.avif', '../../assets/img/mixtas/galeria/ig14_13_despues.avif', '../../assets/img/mixtas/galeria/ig14_14_despues.avif']
    },
    {
      descripcion: language === 'en' ? ['Acoustic panels installation'] : ['Instalación de paneles acústicos'],
      ubicacion: 'Palatka, FL',
      antes: ['../../assets/img/mixtas/galeria/ig23_1_antes.avif', '../../assets/img/mixtas/galeria/ig23_2_antes.avif'],
      durante: ['../../assets/img/mixtas/galeria/ig23_1_durante.avif'],
      despues: ['../../assets/img/mixtas/galeria/ig23_1_despues.avif', '../../assets/img/mixtas/galeria/ig23_2_despues.avif', '../../assets/img/mixtas/galeria/ig23_3_despues.avif']
    },
    {
      descripcion: language === 'en' ? ['Acoustic panels installation'] : ['Instalación de paneles acústicos'],
      ubicacion: 'Tampa, FL',
      antes: ['../../assets/img/mixtas/galeria/ig15_1_antes.avif', '../../assets/img/mixtas/galeria/ig15_2_antes.avif', '../../assets/img/mixtas/galeria/ig15_3_antes.avif', '../../assets/img/mixtas/galeria/ig15_4_antes.avif', '../../assets/img/mixtas/galeria/ig15_5_antes.avif'],
      durante: ['../../assets/img/mixtas/galeria/ig15_1_durante.avif', '../../assets/img/mixtas/galeria/ig15_2_durante.avif', '../../assets/img/mixtas/galeria/ig15_3_durante.avif', '../../assets/img/mixtas/galeria/ig15_4_durante.avif', '../../assets/img/mixtas/galeria/ig15_5_durante.avif', '../../assets/img/mixtas/galeria/ig15_6_durante.avif', '../../assets/img/mixtas/galeria/ig15_7_durante.avif', '../../assets/img/mixtas/galeria/ig15_8_durante.avif', '../../assets/img/mixtas/galeria/ig15_9_durante.avif', '../../assets/img/mixtas/galeria/ig15_10_durante.avif'],
      despues: ['../../assets/img/mixtas/galeria/ig15_1_despues.avif', '../../assets/img/mixtas/galeria/ig15_2_despues.avif', '../../assets/img/mixtas/galeria/ig15_3_despues.avif', '../../assets/img/mixtas/galeria/ig15_4_despues.avif', '../../assets/img/mixtas/galeria/ig15_5_despues.avif', '../../assets/img/mixtas/galeria/ig15_6_despues.avif', '../../assets/img/mixtas/galeria/ig15_7_despues.avif', '../../assets/img/mixtas/galeria/ig15_8_despues.avif', '../../assets/img/mixtas/galeria/ig15_9_despues.avif']
    },
    {
      descripcion: language === 'en' ? ['Acoustic panels installation'] : ['Instalación de paneles acústicos'],
      ubicacion: 'Tampa, FL',
      antes: ['../../assets/img/mixtas/galeria/ig16_1_antes.avif', '../../assets/img/mixtas/galeria/ig16_2_antes.avif', '../../assets/img/mixtas/galeria/ig16_3_antes.avif'],
      durante: [],
      despues: ['../../assets/img/mixtas/galeria/ig16_1_despues.avif', '../../assets/img/mixtas/galeria/ig16_2_despues.avif', '../../assets/img/mixtas/galeria/ig16_3_despues.avif', '../../assets/img/mixtas/galeria/ig16_4_despues.avif', '../../assets/img/mixtas/galeria/ig16_5_despues.avif', '../../assets/img/mixtas/galeria/ig16_6_despues.avif', '../../assets/img/mixtas/galeria/ig16_7_despues.avif', '../../assets/img/mixtas/galeria/ig16_8_despues.avif', '../../assets/img/mixtas/galeria/ig16_9_despues.avif']
    },
    {
      descripcion: language === 'en' ? ['Acoustic panels installation'] : ['Instalación de paneles acústicos'],
      ubicacion: 'Naples, FL',
      antes: [],
      durante: ['../../assets/img/mixtas/galeria/ig17_1_durante.avif', '../../assets/img/mixtas/galeria/ig17_2_durante.avif', '../../assets/img/mixtas/galeria/ig17_3_durante.avif', '../../assets/img/mixtas/galeria/ig17_4_durante.avif', '../../assets/img/mixtas/galeria/ig17_5_durante.avif', '../../assets/img/mixtas/galeria/ig17_6_durante.avif', '../../assets/img/mixtas/galeria/ig17_7_durante.avif'],
      despues: ['../../assets/img/mixtas/galeria/ig17_1_despues.avif', '../../assets/img/mixtas/galeria/ig17_2_despues.avif', '../../assets/img/mixtas/galeria/ig17_3_despues.avif', '../../assets/img/mixtas/galeria/ig17_4_despues.avif', '../../assets/img/mixtas/galeria/ig17_5_despues.avif', '../../assets/img/mixtas/galeria/ig17_6_despues.avif', '../../assets/img/mixtas/galeria/ig17_7_despues.avif', '../../assets/img/mixtas/galeria/ig17_8_despues.avif']
    },
    {
      descripcion: language === 'en' ? ['Acoustic ceiling insulation'] : ['Aislamiento acústico de techo'],
      ubicacion: 'Winter Haven, FL',
      antes: [],
      durante: ['../../assets/img/mixtas/galeria/ig21_1_durante.avif', '../../assets/img/mixtas/galeria/ig21_2_durante.avif', '../../assets/img/mixtas/galeria/ig21_3_durante.avif', '../../assets/img/mixtas/galeria/ig21_4_durante.avif', '../../assets/img/mixtas/galeria/ig21_5_durante.avif', '../../assets/img/mixtas/galeria/ig21_6_durante.avif', '../../assets/img/mixtas/galeria/ig21_7_durante.avif', '../../assets/img/mixtas/galeria/ig21_8_durante.avif', '../../assets/img/mixtas/galeria/ig21_9_durante.avif', '../../assets/img/mixtas/galeria/ig21_10_durante.avif'],
      despues: ['../../assets/img/mixtas/galeria/ig21_1_despues.avif', '../../assets/img/mixtas/galeria/ig21_2_despues.avif', '../../assets/img/mixtas/galeria/ig21_3_despues.avif', '../../assets/img/mixtas/galeria/ig21_4_despues.avif', '../../assets/img/mixtas/galeria/ig21_5_despues.avif', '../../assets/img/mixtas/galeria/ig21_6_despues.avif', '../../assets/img/mixtas/galeria/ig21_7_despues.avif', '../../assets/img/mixtas/galeria/ig21_8_despues.avif', '../../assets/img/mixtas/galeria/ig21_9_despues.avif', '../../assets/img/mixtas/galeria/ig21_10_despues.avif']
    },
    {
      descripcion: language === 'en' ? ['Acoustic wall panels installation'] : ['Instalación de paneles de pared acústicos'],
      ubicacion: 'Augusta, GA',
      antes: [],
      durante: ['../../assets/img/mixtas/galeria/ig22_1_durante.avif', '../../assets/img/mixtas/galeria/ig22_2_durante.avif', '../../assets/img/mixtas/galeria/ig22_3_durante.avif', '../../assets/img/mixtas/galeria/ig22_4_durante.avif', '../../assets/img/mixtas/galeria/ig22_5_durante.avif', '../../assets/img/mixtas/galeria/ig22_6_durante.avif', '../../assets/img/mixtas/galeria/ig22_7_durante.avif', '../../assets/img/mixtas/galeria/ig22_8_durante.avif', '../../assets/img/mixtas/galeria/ig22_9_durante.avif', '../../assets/img/mixtas/galeria/ig22_10_durante.avif', '../../assets/img/mixtas/galeria/ig22_11_durante.avif'],
      despues: ['../../assets/img/mixtas/galeria/ig22_1_despues.avif', '../../assets/img/mixtas/galeria/ig22_2_despues.avif', '../../assets/img/mixtas/galeria/ig22_3_despues.avif', '../../assets/img/mixtas/galeria/ig22_4_despues.avif', '../../assets/img/mixtas/galeria/ig22_5_despues.avif']
    },
    {
      descripcion: language === 'en' ? ['Acoustic wall panels installation'] : ['Instalación de paneles de pared acústicos'],
      ubicacion: 'Gainesville, FL',
      antes: ['../../assets/img/mixtas/galeria/ig18_1_antes.avif'],
      durante: ['../../assets/img/mixtas/galeria/ig18_1_durante.avif'],
      despues: ['../../assets/img/mixtas/galeria/ig18_1_despues.avif', '../../assets/img/mixtas/galeria/ig18_2_despues.avif']
    },
    {
      descripcion: language === 'en' ? ['Acoustic wall panels installation'] : ['Instalación de paneles de pared acústicos'],
      ubicacion: 'Gainesville, FL',
      antes: [],
      durante: [],
      despues: ['../../assets/img/mixtas/galeria/ig19_1_despues.avif', '../../assets/img/mixtas/galeria/ig19_2_despues.avif', '../../assets/img/mixtas/galeria/ig19_3_despues.avif']
    },
    {
      descripcion: language === 'en' ? ['Acoustic wall panels installation'] : ['Instalación de paneles de pared acústicos'],
      ubicacion: 'Gainesville, FL',
      antes: [],
      durante: ['../../assets/img/mixtas/galeria/ig20_1_durante.avif'],
      despues: ['../../assets/img/mixtas/galeria/ig20_1_despues.avif', '../../assets/img/mixtas/galeria/ig20_2_despues.avif']
    },
    {
      descripcion: language === 'en' ? ['Bathroom doors installation'] : ['Instalación de puertas de baño'],
      ubicacion: 'Orlando, FL',
      antes: ['../../assets/img/mixtas/galeria/ig1_1_antes.avif', '../../assets/img/mixtas/galeria/ig1_2_antes.avif'],
      despues: ['../../assets/img/mixtas/galeria/ig1_3_despues.avif', '../../assets/img/mixtas/galeria/ig1_4_despues.avif']
    },
    {
      descripcion: language === 'en' ? ['3D wall panels and internal wiring installation'] : ['Instalación de paneles 3D y cableado interno'],
      ubicacion: 'Osceola, FL',
      antes: ['../../assets/img/mixtas/galeria/ig3_1_antes.avif'],
      despues: ['../../assets/img/mixtas/galeria/ig3_2_despues.avif', '../../assets/img/mixtas/galeria/ig3_3_despues.avif']
    },
    {
      descripcion: language === 'en' ? ['Lattice installation'] : ['Instalación de celosía decorativa'],
      ubicacion: 'Osceola, FL',
      despues: ['../../assets/img/mixtas/galeria/ig2_1_despues.avif', '../../assets/img/mixtas/galeria/ig2_2_despues.avif', '../../assets/img/mixtas/galeria/ig2_3_despues.avif', '../../assets/img/mixtas/galeria/ig2_4_despues.avif', '../../assets/img/mixtas/galeria/ig2_5_despues.avif'],
    },
    {
      descripcion: language === 'en' ? ['Deep Cleaning'] : ['Limpieza profunda'],
      ubicacion: 'Orlando, FL',
      durante: ['../../assets/img/mixtas/galeria/ig28_1_durante.avif'],
      despues: ['../../assets/img/mixtas/galeria/ig28_1_despues.avif', '../../assets/img/mixtas/galeria/ig28_2_despues.avif']
    },
    {
      descripcion: language === 'en' ? ['Deep Cleaning'] : ['Limpieza profunda'],
      ubicacion: 'Orlando, FL',
      antes: ['../../assets/img/mixtas/galeria/ig30_1_antes.avif'],
      despues: ['../../assets/img/mixtas/galeria/ig30_1_despues.avif', '../../assets/img/mixtas/galeria/ig30_2_despues.avif', '../../assets/img/mixtas/galeria/ig30_3_despues.avif']
    },
    {
      descripcion: language === 'en' ? ['Deep Cleaning'] : ['Limpieza profunda'],
      ubicacion: 'Altamonte Mall, FL',
      durante: ['../../assets/img/mixtas/galeria/ig31_1_durante.avif', '../../assets/img/mixtas/galeria/ig31_2_durante.avif', '../../assets/img/mixtas/galeria/ig31_3_durante.avif'],
      despues: ['../../assets/img/mixtas/galeria/ig31_1_despues.avif', '../../assets/img/mixtas/galeria/ig31_2_despues.avif', '../../assets/img/mixtas/galeria/ig31_3_despues.avif', '../../assets/img/mixtas/galeria/ig31_4_despues.avif', '../../assets/img/mixtas/galeria/ig31_5_despues.avif']
    },
    {
      descripcion: language === 'en' ? ['Deep Cleaning'] : ['Limpieza profunda'],
      ubicacion: 'Orlando, FL',
      durante: ['../../assets/img/mixtas/galeria/ig34_1_durante.avif', '../../assets/img/mixtas/galeria/ig34_2_durante.avif'],
      despues: ['../../assets/img/mixtas/galeria/ig34_1_despues.avif', '../../assets/img/mixtas/galeria/ig34_2_despues.avif', '../../assets/img/mixtas/galeria/ig34_3_despues.avif', '../../assets/img/mixtas/galeria/ig34_4_despues.avif', '../../assets/img/mixtas/galeria/ig34_5_despues.avif', '../../assets/img/mixtas/galeria/ig34_6_despues.avif', '../../assets/img/mixtas/galeria/ig34_7_despues.avif']
    },
    {
      descripcion: language === 'en' ? ['Deep Cleaning'] : ['Limpieza profunda'],
      ubicacion: 'Orlando, FL',
      antes: ['../../assets/img/mixtas/galeria/ig26_1_antes.avif'],
      despues: ['../../assets/img/mixtas/galeria/ig26_1_despues.avif']
    },
    {
      descripcion: language === 'en' ? ['Deep Cleaning'] : ['Limpieza profunda'],
      ubicacion: 'Orlando, FL',
      despues: ['../../assets/img/mixtas/galeria/ig24_1_despues.avif', '../../assets/img/mixtas/galeria/ig24_2_despues.avif', '../../assets/img/mixtas/galeria/ig24_3_despues.avif', '../../assets/img/mixtas/galeria/ig24_4_despues.avif']
    },
    {
      descripcion: language === 'en' ? ['Deep Cleaning'] : ['Limpieza profunda'],
      ubicacion: 'Sanford, FL',
      despues: ['../../assets/img/mixtas/galeria/ig29_1_despues.avif', '../../assets/img/mixtas/galeria/ig29_2_despues.avif', '../../assets/img/mixtas/galeria/ig29_3_despues.avif', '../../assets/img/mixtas/galeria/ig29_4_despues.avif', '../../assets/img/mixtas/galeria/ig29_5_despues.avif']
    },
    {
      descripcion: language === 'en' ? ['Deep Cleaning'] : ['Limpieza profunda'],
      ubicacion: 'Orlando, FL',
      despues: ['../../assets/img/mixtas/galeria/ig32_1_despues.avif', '../../assets/img/mixtas/galeria/ig32_2_despues.avif', '../../assets/img/mixtas/galeria/ig32_3_despues.avif', '../../assets/img/mixtas/galeria/ig32_4_despues.avif', '../../assets/img/mixtas/galeria/ig32_5_despues.avif', '../../assets/img/mixtas/galeria/ig32_6_despues.avif', '../../assets/img/mixtas/galeria/ig32_7_despues.avif', '../../assets/img/mixtas/galeria/ig32_8_despues.avif']
    },
    {
      descripcion: language === 'en' ? ['Deep Cleaning'] : ['Limpieza profunda'],
      ubicacion: 'St. Augustine, FL',
      despues: ['../../assets/img/mixtas/galeria/ig33_1_despues.avif', '../../assets/img/mixtas/galeria/ig33_2_despues.avif', '../../assets/img/mixtas/galeria/ig33_3_despues.avif', '../../assets/img/mixtas/galeria/ig33_4_despues.avif', '../../assets/img/mixtas/galeria/ig33_5_despues.avif']
    },
    {
      descripcion: language === 'en' ? ['Deep Cleaning'] : ['Limpieza profunda'],
      ubicacion: 'Hollywood, FL',
      despues: ['../../assets/img/mixtas/galeria/ig25_1_despues.avif']
    },
    {
      descripcion: language === 'en' ? ['Deep Cleaning'] : ['Limpieza profunda'],
      ubicacion: 'Orlando, FL',
      despues: ['../../assets/img/mixtas/galeria/ig27_1_despues.avif']
    },
  ];

  return (
    <GalleryImg language={language} proyectos={proyectos} />
  );
};

export default Gallery;
