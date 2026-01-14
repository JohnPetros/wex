import * as Tabs from '@radix-ui/react-tabs'

import { categories } from '@/constants/categories'

export default function CatalogTabs() {
  return (
    <Tabs.Root defaultValue={categories[0].id} className='w-full'>
      <Tabs.List
        className='
  flex w-full overflow-x-auto flex-nowrap gap-2 
  border-b-2 border-slate-200 mb-12 pb-2
  justify-start md:justify-center md:flex-wrap
  scrollbar-hide
'
      >
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <Tabs.Trigger
              key={category.id}
              value={category.id}
              className='
          shrink-0 whitespace-nowrap
          group px-4 py-3 text-sm md:text-base font-bold text-slate-500 
          border-b-2 border-transparent transition-all duration-300
          hover:text-blue-600 hover:border-blue-300
          data-[state=active]:text-blue-600 data-[state=active]:border-blue-600
          flex items-center gap-2 outline-none
        '
            >
              <Icon className='w-5 h-5 group-data-[state=active]:text-blue-600 transition-colors mb-0.5' />
              {category.title}
            </Tabs.Trigger>
          )
        })}
      </Tabs.List>

      {categories.map((category) => {
        const TabContent = category.tab
        return (
          <Tabs.Content
            key={category.id}
            value={category.id}
            className='animate-fadeIn focus:outline-none'
          >
            <TabContent />
          </Tabs.Content>
        )
      })}
    </Tabs.Root>
  )
}
