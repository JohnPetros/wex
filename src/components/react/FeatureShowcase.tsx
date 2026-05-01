import { motion } from 'motion/react'
import { Truck, Box, Snowflake, Hammer, Layers, Database } from 'lucide-react'

import SiderCategory from '@assets/categories/sider-category.png'
import TruckCategory from '@assets/categories/truck-category.png'
import RefrigerationCategory from '@assets/categories/refrigeration-category.png'
import TipperCategory from '@assets/categories/tipper-category.png'
import BodyCategory from '@assets/categories/body-category.png'
import SiloCategory from '@assets/categories/silo-category.png'

const features = [
  {
    icon: Truck,
    title: 'Linha Sider & Asa Delta',
    description: 'Lonas, catracas, roldanas e esticadores para Sider padrão e Asa Delta.',
    image: SiderCategory,
  },
  {
    icon: Box,
    title: 'Baú de Alumínio',
    description: 'Perfis, chapas, colunas e revestimentos para furgão duralumínio.',
    image: TruckCategory,
  },
  {
    icon: Snowflake,
    title: 'Linha Frigorífica',
    description:
      'Borracha de porta, isolamento, dobradiças e trincos para câmaras frias.',
    image: RefrigerationCategory,
  },
  {
    icon: Hammer,
    title: 'Peças para Basculantes',
    description: 'Peças para sistema hidráulico, travas de segurança e articulações.',
    image: TipperCategory,
  },
  {
    icon: Layers,
    title: 'Carroceria Aberta',
    description: 'Tampas, ganchos, fueiros e acessórios para grade baixa e graneleiro.',
    image: BodyCategory,
  },
  {
    icon: Database,
    title: 'Silos e Tanques',
    description: 'Válvulas, conexões, vedações e peças para transporte a granel.',
    image: SiloCategory,
  },
]

export default function FeatureShowcase() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className='group cursor-pointer'
        >
          <div className='relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'>
            {/* Image */}
            <div className='relative h-64 overflow-hidden'>
              <motion.img
                src={feature.image.src}
                alt={feature.title}
                className='w-full h-full object-cover'
                loading='lazy'
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <div className='absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60' />

              {/* Icon overlay */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                className='absolute top-4 right-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg'
              >
                <feature.icon className='w-6 h-6 text-blue-600' />
              </motion.div>
            </div>

            {/* Content */}
            <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
              <h3 className='text-xl font-bold mb-2'>{feature.title}</h3>
              <p className='text-sm text-gray-200 opacity-90'>{feature.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
