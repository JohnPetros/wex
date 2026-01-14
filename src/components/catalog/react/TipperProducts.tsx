import ProductCard from '@/components/react/ProductCard'

import kitInstalacao from '../../../assets/products/tipper/instalacao-comando-hidraulico.jpg'
import reservatorioOleo from '../../../assets/products/tipper/reservatorio-oleo.jpg'

export const products = [
  {
    image: kitInstalacao,
    title: 'Kit Instalação Comando Hidráulico',
    category: 'Peças para Basculantes',
    code: 'HID-800',
    brand: 'WEX Hydraulics',
    description:
      'Kit completo de mangueiras, conexões e suportes para instalação do sistema hidráulico de caçambas. Alta resistência à pressão.',
    inStock: true,
  },
  {
    image: reservatorioOleo,
    title: 'Reservatório de Óleo Hidráulico',
    category: 'Peças para Basculantes',
    code: 'HID-850',
    brand: 'Compatível Hyva/Binotto',
    description:
      'Tanque para fluido hidráulico com visor de nível, respiro e sistema de filtragem. Disponível em Aço ou Polímero.',
    inStock: true,
  },
]

export default function TipperProducts() {
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
