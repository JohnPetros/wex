import ProductCard from '@/components/react/ProductCard'

import catracaModel400kg from '../../../assets/products/sider/catraca-model-400kg.jpg'
import cintaAmarracaoDeCarga from '../../../assets/products/sider/cinta-amarracao-de-carga.jpg'
import cintaDeSeguranca from '../../../assets/products/sider/cinta-de-seguranca.png'
import dispositivoLed from '../../../assets/products/sider/dispositivo-led.jpg'
import engateRapido from '../../../assets/products/sider/engate-rapido.jpg'
import escadaDeGaveta from '../../../assets/products/sider/escada-de-gaveta.jpg'
import lampadaTorpedo from '../../../assets/products/sider/lampada-torpedo.jpg'
import lanternaEsfihaVermelha from '../../../assets/products/sider/lanterna-esfiha-vermelha.jpg'
import molaDeDoisGumos from '../../../assets/products/sider/mola-de-dois-gumos.jpg'

export const products = [
  {
    image: lanternaEsfihaVermelha,
    title: "Lanterna Delimitadora 'Esfiha' Vermelha",
    category: 'Elétrica & Iluminação',
    code: 'ELE-055',
    brand: 'Compatível Scania',
    description:
      'Lanterna delimitadora traseira com lente vermelha. Aplicação comum em linha pesada Scania e carretas.',
    inStock: true,
  },
  {
    image: dispositivoLed,
    title: 'Dispositivo LED com Chicote',
    category: 'Elétrica & Iluminação',
    code: 'ELE-202',
    brand: 'Compatível Volvo',
    description:
      'Módulo LED auxiliar com conector estanque, ideal para reposição na linha FH/FM.',
    inStock: true,
  },
  {
    image: lampadaTorpedo,
    title: 'Lâmpada LED Torpedo',
    category: 'Elétrica & Iluminação',
    code: 'ELE-008',
    brand: 'Compatível Mercedes-Benz',
    description:
      'Lâmpada de iluminação de placa e cabine. Compatível com tensão 24v da linha Axor/Actros.',
    inStock: true,
  },
  {
    image: engateRapido,
    title: 'Engate Rápido Hidráulico 1"',
    category: 'Peças para Basculantes',
    code: 'HID-150',
    brand: 'Compatível Iveco',
    description:
      'Conexão de alta pressão para sistemas hidráulicos de caçambas em Stralis e Tector.',
    inStock: true,
  },
  {
    image: molaDeDoisGumos,
    title: 'Mola Pneumática (Fole) 2 Gomos',
    category: 'Suspensão & Cabine',
    code: 'SUS-200',
    brand: 'Compatível Volkswagen',
    description:
      'Bolsa de ar para suspensão de cabine. Aplicação linha Constellation e Meteor.',
    inStock: true,
  },
  {
    image: escadaDeGaveta,
    title: 'Escada de Gaveta Retrátil',
    category: 'Carroceria Aberta',
    code: 'ACE-101',
    brand: 'Compatível Ford',
    description: 'Escada lateral retrátil, muito utilizada em caminhões Cargo e F-Maxx.',
    inStock: true,
  },
  {
    image: catracaModel400kg,
    title: 'Catraca Móvel 400kg com Rabicho',
    category: 'Linha Sider & Asa Delta',
    code: 'SID-400',
    brand: 'WEX Cargo',
    description: 'Conjunto de catraca móvel leve para fixação interna de cargas.',
    inStock: true,
  },
  {
    image: cintaAmarracaoDeCarga,
    title: 'Conjunto Cinta de Amarração 5T',
    category: 'Linha Sider & Asa Delta',
    code: 'CAR-500',
    brand: 'WEX Standard',
    description:
      'Kit cinta e catraca 5 toneladas. Uso universal para todas as montadoras.',
    inStock: true,
  },
  {
    image: cintaDeSeguranca,
    title: 'Cinta Segurança Asa Delta (Bebidas)',
    category: 'Linha Sider & Asa Delta',
    code: 'BEB-900',
    brand: 'WEX Safety',
    description:
      'Cinta específica para transporte de bebidas. Atende normas de segurança.',
    inStock: false,
  },
]

export default function SiderProducts() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {products.map((product) => (
        <div key={product.code}>
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
