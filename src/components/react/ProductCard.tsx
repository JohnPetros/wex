import { MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react'

import type { ImageMetadata } from 'astro'

type BannerProps = {
  image: ImageMetadata
}

export interface ProductCardProps {
  image: ImageMetadata // Aceita string ou import do Astro
  title: string
  category?: string // Ex: "Linha Sider"
  code?: string // SKU/Código da peça (Muito importante)
  brand?: string // Ex: "Compatível Scania"
  inStock?: boolean // Para mostrar badge de disponibilidade
  description?: string // Descrição curta
}

export default function ProductCard({
  image,
  title,
  category,
  code,
  brand,
  inStock = true,
  description,
}: ProductCardProps) {
  // Monta link do Zap se não for passado um específico
  const finalWhatsappLink = `https://wa.me/551100000000?text=Olá, gostaria de providenciar o item: ${title} (Cód: ${code || 'N/A'})`

  return (
    <div className='group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden'>
      {/* 1. Área da Imagem */}
      <div className='relative h-120 overflow-hidden bg-slate-100'>
        {/* Badge de Categoria (Superior Esquerdo) */}
        {category && (
          <div className='absolute top-3 left-3 z-10'>
            <span className='px-3 py-1 text-xs font-bold text-blue-700 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-blue-100'>
              {category}
            </span>
          </div>
        )}

        {/* Badge de Estoque (Superior Direito) */}
        {inStock && (
          <div className='absolute top-3 right-3 z-10'>
            <span className='flex items-center gap-1 px-2 py-1 text-xs font-semibold text-green-700 bg-green-50/90 backdrop-blur-sm rounded-full border border-green-200'>
              <CheckCircle2 className='w-3 h-3' />
              Em Estoque
            </span>
          </div>
        )}

        <img
          src={image.src}
          alt={title}
          className='w-full h-full object-cover group-hover:scale-80 transition-transform duration-700'
          loading='lazy'
        />

        {/* Overlay no Hover */}
        <div className='absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300' />
      </div>

      {/* 2. Conteúdo do Card */}
      <div className='p-5 flex flex-col grow'>
        {/* Marca / Compatibilidade */}
        {brand && (
          <p className='text-xs font-bold text-slate-400 uppercase tracking-wider mb-1'>
            {brand}
          </p>
        )}

        {/* Título */}
        <h3 className='text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors'>
          {title}
        </h3>

        {/* Código SKU */}
        {code && (
          <div className='flex items-center gap-2 mb-3'>
            <div className='px-2 py-1 bg-slate-100 rounded text-xs font-mono text-slate-500 border border-slate-200'>
              CÓD: {code}
            </div>
          </div>
        )}

        {/* Descrição (Opcional) */}
        {description && (
          <p className='text-sm text-slate-500 line-clamp-2 mb-4'>{description}</p>
        )}

        {/* Espaçador para empurrar o botão para baixo */}
        <div className='mt-auto pt-4 border-t border-slate-100'>
          <a
            href={finalWhatsappLink}
            target='_blank'
            className='flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-blue-50 text-blue-600 font-semibold text-sm hover:bg-blue-600 hover:text-white transition-all duration-300 group/btn'
          >
            <MessageCircle className='w-4 h-4' />
            providenciar Peça
            <ArrowRight className='w-4 h-4 opacity-0 -ml-2 group-hover/btn:opacity-100 group-hover/btn:ml-0 transition-all' />
          </a>
        </div>
      </div>
    </div>
  )
}
