import ProductCard from '@/components/react/ProductCard'

import entradaAr from '../../../assets/products/beverage/entrada-ar-carroceria.jpg'
import conjuntoMola from '../../../assets/products/beverage/conjunto-mola-porta.jpg'
import rodiziosPorta from '../../../assets/products/beverage/rodizios-porta-bebida.jpg'
import pistaoTravamento from '../../../assets/products/beverage/pistao-travamento-porta.jpg'
import pecasColuna from '../../../assets/products/beverage/pecas-coluna-fita.jpg'

export const products = [
  {
    image: entradaAr,
    title: 'Entrada de Ar (Respiro) Lateral',
    category: 'Carroceria de Bebidas',
    code: 'BEB-020',
    brand: 'WEX Body',
    description:
      'Grelha de ventilação lateral para circulação de ar interna e conservação da carga.',
    inStock: true,
  },

  // --- Sistema de Portas e Travamento ---
  {
    image: rodiziosPorta,
    title: 'Rodízio de Nylon para Porta (Rolete)',
    category: 'Carroceria de Bebidas',
    code: 'BEB-110',
    brand: 'Compatível Facchini/Randon',
    description:
      'Roldana de alta resistência para o trilho das portas de correr/subir. Baixo atrito.',
    inStock: true,
  },
  {
    image: conjuntoMola,
    title: 'Conjunto de Molas da Porta (Balanço)',
    category: 'Carroceria de Bebidas',
    code: 'BEB-100',
    brand: 'Universal',
    description:
      'Sistema de compensação de peso para facilitar a abertura e fechamento das portas laterais.',
    inStock: true,
  },
  {
    image: pistaoTravamento,
    title: 'Pistão Pneumático de Travamento',
    category: 'Carroceria de Bebidas',
    code: 'BEB-200',
    brand: 'WEX Pneumatics',
    description:
      'Cilindro pneumático para o sistema de travamento central das portas (lock system).',
    inStock: true,
  },
  {
    image: pecasColuna,
    title: 'Kit Reparo Coluna e Fita Guia',
    category: 'Carroceria de Bebidas',
    code: 'BEB-300',
    brand: 'Compatível Randon',
    description:
      'Componentes de desgaste para as colunas móveis e fitas de guia do sistema de abertura.',
    inStock: true,
  },
]

export default function BeverageProducts() {
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
