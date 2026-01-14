import ProductCard from '@/components/react/ProductCard'

import escadaFrigorifico from '../../../assets/products/refrigeration/escada-bau-frigorifico.jpg'
import alavancaPortinhola from '../../../assets/products/refrigeration/alavanca-trava-portinhola.jpg'
import bandejaMacaneta from '../../../assets/products/refrigeration/bandeja-macaneta.jpg'
import cavaleteDobradica from '../../../assets/products/refrigeration/cavalete-dobradica.jpg'
import dobradicaBorboleta from '../../../assets/products/refrigeration/dobradica-borboleta.jpg'
import macanetaPorta from '../../../assets/products/refrigeration/macaneta-porta-frigorifico.jpg'
import travaAntiPanico from '../../../assets/products/refrigeration/trava-anti-panico-inox.jpg'
import trincoSeguranca from '../../../assets/products/refrigeration/trinco-trava-seguranca.jpg'
import puxadorCalca from '../../../assets/products/refrigeration/puxador-calca-seguranca.jpg'

export const products = [
  {
    image: escadaFrigorifico,
    title: 'Escada Escamoteável para Baú Frigorífico',
    category: 'Linha Frigorífica',
    code: 'FRI-100',
    brand: 'WEX Inox',
    description:
      'Escada retrátil de aço galvanizado ou inox, essencial para acesso seguro à câmara fria.',
    inStock: true,
  },
  {
    image: puxadorCalca,
    title: "Puxador de Apoio Tipo 'Calça'",
    category: 'Linha Frigorífica',
    code: 'FRI-105',
    brand: 'Universal',
    description:
      'Alça de apoio fixa (pega-mão) para auxiliar a subida e descida do operador no baú.',
    inStock: true,
  },
  {
    image: travaAntiPanico,
    title: 'Trava Anti-Pânico de Embutir (Inox)',
    category: 'Linha Frigorífica',
    code: 'FRI-500',
    brand: 'WEX Safety',
    description:
      'Sistema de abertura interna de emergência em Aço Inox 304. Item obrigatório de segurança.',
    inStock: true,
  },

  // --- Ferragens de Fechamento ---
  {
    image: macanetaPorta,
    title: 'Maçaneta Externa para Porta Frigorífica',
    category: 'Linha Frigorífica',
    code: 'FRI-300',
    brand: 'Compatível Ibiporã/Recrusul',
    description:
      'Fecho robusto completo para portas traseiras e laterais de caminhões e carretas frigoríficas.',
    inStock: true,
  },
  {
    image: bandejaMacaneta,
    title: 'Bandeja para Maçaneta (Câmara Fria)',
    category: 'Linha Frigorífica',
    code: 'FRI-310',
    brand: 'Universal',
    description:
      'Base estampada (concha) para alojamento e fixação da maçaneta de embutir.',
    inStock: true,
  },
  {
    image: alavancaPortinhola,
    title: 'Alavanca Trava da Portinhola',
    category: 'Linha Frigorífica',
    code: 'FRI-205',
    brand: 'Compatível Facchini',
    description:
      'Alavanca menor específica para travar portinholas de inspeção ou ventilação.',
    inStock: true,
  },
  {
    image: trincoSeguranca,
    title: 'Trinco Trava de Segurança',
    category: 'Linha Frigorífica',
    code: 'FRI-550',
    brand: 'WEX Standard',
    description:
      'Trinco adicional externo para cadeado e lacre, garantindo a integridade da carga.',
    inStock: true,
  },

  // --- Dobradiças e Mancais ---
  {
    image: dobradicaBorboleta,
    title: 'Dobradiça Modelo Borboleta',
    category: 'Linha Frigorífica',
    code: 'FRI-405',
    brand: 'Aço Inox',
    description:
      "Dobradiça reforçada com design 'borboleta', fabricada em inox para alta resistência à corrosão.",
    inStock: true,
  },
  {
    image: cavaleteDobradica,
    title: 'Cavalete da Dobradiça (Mancal)',
    category: 'Linha Frigorífica',
    code: 'FRI-400',
    brand: 'Universal',
    description:
      'Base de fixação (mancal) para articulação das dobradiças de câmaras frias.',
    inStock: true,
  },
]

export default function RefrigerationProducts() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {products.map((product) => (
        <div key={product.code} className='h-full'>
          <ProductCard
            image={product.image}
            title={product.title}
            category={product.category}
            code={product.code}
            brand={product.brand}
            inStock={product.inStock}
            description={product.description}
          />
        </div>
      ))}
    </div>
  )
}
