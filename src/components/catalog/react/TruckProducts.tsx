import ProductCard from '@/components/react/ProductCard'

// --- Imports de Imagens (Baú & Vedações) ---
import dobradicaPorta from '../../../assets/products/truck/dobradica-porta-traseira.jpg'
import pinoDobradica from '../../../assets/products/truck/pino-da-dobradica.jpg'
import travaAlavanca from '../../../assets/products/truck/trava-da-alavanca-maior.jpg'
import linguetaTrava from '../../../assets/products/truck/lingueta-trava-do-varao.jpg'
import guiaVarao from '../../../assets/products/truck/guia-do-varao-da-porta.jpg'
import cavaleteReto from '../../../assets/products/truck/cavalete-reto.jpg'
import borrachaAntonini from '../../../assets/products/truck/borracha-antonini.jpg'
import borrachaFacchini from '../../../assets/products/truck/borracha-facchini.jpg'
import borrachaIderol from '../../../assets/products/truck/borracha-iderol.jpg'

export const products = [
  // --- Ferragens para Baú ---
  {
    image: dobradicaPorta,
    title: 'Dobradiça da Porta Traseira',
    category: 'Baú de Alumínio',
    code: 'FER-010',
    brand: 'Padrão Randon',
    description:
      'Dobradiça reforçada para porta traseira de baú de alumínio. Acabamento galvanizado.',
    inStock: true,
  },
  {
    image: pinoDobradica,
    title: 'Pino da Dobradiça (Aço)',
    category: 'Baú de Alumínio',
    code: 'FER-011',
    brand: 'Universal',
    description:
      'Pino de aço 1/2" para manutenção e reparo de dobradiças de portas traseiras.',
    inStock: true,
  },
  {
    image: travaAlavanca,
    title: 'Trava da Alavanca (Modelo Maior)',
    category: 'Baú de Alumínio',
    code: 'FER-025',
    brand: 'Compatível Guerra',
    description:
      'Trava de segurança para o varão da porta. Modelo grande para maior robustez.',
    inStock: true,
  },
  {
    image: linguetaTrava,
    title: 'Lingueta da Trava do Varão',
    category: 'Baú de Alumínio',
    code: 'FER-028',
    brand: 'WEX Hardware',
    description:
      'Lingueta de reposição para o sistema de fechamento do varão (ferrolho).',
    inStock: true,
  },
  {
    image: guiaVarao,
    title: 'Guia do Varão da Porta (Mancal)',
    category: 'Baú de Alumínio',
    code: 'FER-030',
    brand: 'Padrão Facchini',
    description:
      'Guia superior/inferior para alinhamento do varão de fechamento da porta.',
    inStock: true,
  },
  {
    image: cavaleteReto,
    title: 'Cavalete Reto de Fixação',
    category: 'Baú de Alumínio',
    code: 'FER-045',
    brand: 'Universal',
    description: 'Cavalete reto para apoio e travamento das barras de contenção.',
    inStock: true,
  },

  // --- Vedações & Borrachas (Peças de Baú) ---
  {
    image: borrachaAntonini,
    title: 'Borracha de Porta Perfil Antonini',
    category: 'Vedações & Borrachas',
    code: 'VED-100',
    brand: 'Compatível Antonini',
    description:
      'Borracha de vedação esponjosa específica para portas de implementos Antonini.',
    inStock: true,
  },
  {
    image: borrachaFacchini,
    title: 'Borracha de Porta Injetada Facchini',
    category: 'Vedações & Borrachas',
    code: 'VED-102',
    brand: 'Compatível Facchini',
    description:
      'Guarnição injetada de alta durabilidade, perfil original para baús Facchini novos.',
    inStock: false,
  },
  {
    image: borrachaIderol,
    title: 'Borracha de Porta Perfil Iderol',
    category: 'Vedações & Borrachas',
    code: 'VED-105',
    brand: 'Compatível Iderol',
    description:
      'Perfil de vedação para reparo de portas traseiras modelo Iderol antigo.',
    inStock: true,
  },
]

export default function TruckProducts() {
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
