import DisplaySearch from '@/components/DisplaySearch/DisplaySearch'
import FilterBox from '@/components/Filter/FilterBox'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import PageHeader from '@/components/PageHeader/PageHeader'
import PageNavigation from '@/components/PageNavigation/PageNavigation'
import DisplayRelatedDeals from '@/components/RelatedDeals/DisplayRelatedDeals'
import Subscribe from '@/components/Subscribe/Subscribe'
import React from 'react'

const page = () => {
  return (
    <div className=' bg-secondary'>
      <Navbar />
      <div className=' container mx-auto p-5'>
        <PageHeader />
        <FilterBox />
        <PageNavigation />
        <DisplaySearch />
        <DisplayRelatedDeals />
        <Subscribe />
      </div>
      <Footer />
    </div>
  )
}

export default page