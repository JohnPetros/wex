import { Truck, Box, Snowflake, Hammer, Layers, Database } from 'lucide-react'

import SiderCategoryImage from '@assets/categories/sider-category.png'
import TruckCategoryImage from '@assets/categories/truck-category.png'
import RefrigerationCategoryImage from '@assets/categories/refrigeration-category.png'
import TipperCategoryImage from '@assets/categories/tipper-category.png'
import FlatbedCategoryImage from '@assets/categories/flatbed-category.png'
import BeverageCategoryImage from '@assets/categories/beverage-category.png'

import SiderProductsTab from '../components/catalog/react/SiderProducts'
import TruckProductsTab from '../components/catalog/react/TruckProducts'
import RefrigerationProductsTab from '../components/catalog/react/RefrigerationProducts'
import TipperProductsTab from '../components/catalog/react/TipperProducts'
import FlatbedProductsTab from '../components/catalog/react/FlatbedProducts'
import BeverageProductsTab from '../components/catalog/react/BeverageProducts'

export const categories = [
  {
    id: 'sider',
    icon: Truck,
    title: 'Linha Sider & Asa Delta',
    description: 'Lonas, catracas, roldanas e esticadores para Sider padrão e Asa Delta.',
    image: SiderCategoryImage,
    tab: SiderProductsTab,
  },
  {
    id: 'bau',
    icon: Box,
    title: 'Baú de Alumínio',
    description: 'Perfis, chapas, colunas e revestimentos para furgão duralumínio.',
    image: TruckCategoryImage,
    tab: TruckProductsTab,
  },
  {
    id: 'frigorifica',
    icon: Snowflake,
    title: 'Baú Frigorífico',
    description:
      'Borracha de porta, isolamento, dobradiças e trincos para câmaras frias.',
    image: RefrigerationCategoryImage,
    tab: RefrigerationProductsTab,
  },
  {
    id: 'basculante',
    icon: Hammer,
    title: 'Peças para Basculantes',
    description: 'Peças para sistema hidráulico, travas de segurança e articulações.',
    image: TipperCategoryImage,
    tab: TipperProductsTab,
  },
  {
    id: 'aberta',
    icon: Layers,
    title: 'Carroceria Aberta',
    description: 'Tampas, ganchos, fueiros e acessórios para grade baixa e graneleiro.',
    image: FlatbedCategoryImage,
    tab: FlatbedProductsTab,
  },
  {
    id: 'beverage',
    icon: Database,
    title: 'Carroceria de Bebidas',
    description: 'Válvulas, conexões, vedações e peças para transporte a granel.',
    image: BeverageCategoryImage,
    tab: BeverageProductsTab,
  },
]
