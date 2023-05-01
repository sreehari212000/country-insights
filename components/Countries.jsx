import { ThemeContext } from '@/context/ThemeContext';
import Image from 'next/image'
import Link from 'next/link';
import React, { useContext } from 'react'
import millify from 'millify';

const SingleCountry = ({details}) => {
    const {name, flags, region, capital, population} = details
    const {darkMode} = useContext(ThemeContext)
  return (
    <Link href={`/country/${name.common}`} className='mx-auto rounded-t-md shadow-md'>
      <Image src={flags.svg} className='img rounded-t-md' alt='flag-img' width={20} height={0} />
        <div className={`${darkMode ? 'bg-[#2b3945] text-white' : 'bg-white'} py-4 px-8 rounded-b-md`}>
          <h1 className='text-xl font-bold py-4 '>{name.common.slice(0, 20)}</h1>
          <p className='text-sm font-semibold mb-1'>Population: <span className='text-gray-500'>{millify(population)}</span></p>
          <p className='text-sm font-medium mb-1'>Region: <span className='text-gray-500'>{region}</span></p>
          <p className='text-sm font-semibold mb-4'>Capital: <span className='text-gray-500'>{capital?.join(',')}</span></p>
        </div>
    </Link>
  )
}
export async function getStaticPaths(){
  return {
    paths:[],
    fallback: 'blocking'
  }
}


export default SingleCountry