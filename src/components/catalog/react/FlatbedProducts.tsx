import ProductCard from '@/components/react/ProductCard'

import fominhaCarga from '../../../assets/products/flatbed/caixa-carga-fominha.jpg'
import fixadorLona from '../../../assets/products/flatbed/fixador-lona-graneleira.jpg'
import prisioneiroLona from '../../../assets/products/flatbed/prisioneiros-lona.jpg'

export const products = [
  {
    image: fominhaCarga,
    title: 'Fominha Metálica para Caixa de Carga',
    category: 'Carroceria de Bebidas',
    code: 'BEB-010',
    brand: 'Universal',
    description:
      'Extensão superior (fominha) para aumento da capacidade de carga e contenção de paletes.',
    inStock: true,
  },
  {
    image: fixadorLona,
    title: 'Fixador de Lona (Gancho/Castanha)',
    category: 'Carroceria Aberta',
    code: 'GRA-050',
    brand: 'Universal',
    description:
      'Gancho fixador de alta resistência (polímero ou baquelite) para amarração da corda da lona.',
    inStock: true,
  },
  {
    image: prisioneiroLona,
    title: 'Prisioneiro para Fixador de Lona',
    category: 'Carroceria Aberta',
    code: 'GRA-055',
    brand: 'Universal',
    description:
      'Parafuso/Pino de fixação para os ganchos da lona. Acabamento zincado contra ferrugem.',
    inStock: true,
  },
]

export default function FlatbedProducts() {
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
