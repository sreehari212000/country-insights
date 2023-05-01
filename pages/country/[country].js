import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react'
import millify from 'millify';
import { ThemeContext } from '@/context/ThemeContext';

const index = ({country}) => {
  const {darkMode} = useContext(ThemeContext)
  const {flags, name, population,region, subregion, capital, tld, currencies, languages, borders} = country[0]
  return (
    <div className={`w-[80%] mx-auto mt-12 min-w-[350px] lg:mt-24 ${darkMode ? 'text-white':'text-black'}`}>
        <Link href='/' className={`${darkMode ? 'bg-[#2b3945]' : 'bg-white'} px-4 py-2 rounded-md shadow-md`}>Back Home</Link>

        <div className='mt-14 w-fit md:w-full lg:flex lg:justify-between'>
          <Image src={flags.svg} className='lg:w-[500px]' width={320} height={150} alt={`${name.common}`}/>
          <div className='mt-6'>
            <h2 className='text-2xl font-bold'>{name.common}</h2>
            <div className='font-semibold lg:flex lg:gap-10 my-8'>
              <div className=''>
                <p className='mt-2'>Native Name: <span>{name.official}</span></p>
                <p className='mt-2'>Population: <span>{millify(population)}</span></p>
                <p className='mt-2'>Region: <span>{region}</span></p>
                <p className='mt-2'>Sub Region: <span>{subregion}</span></p>
                <p className='mt-2'>Capital: <span>{capital}</span></p>
              </div>
              <div className='mt-8 lg:mt-0'>
                <p className='mt-2'>Top Level Domain: <span>{tld[0]}</span></p>
                <p className='mt-2'>Currencies: <span>{Object.keys(currencies).join(', ')}</span></p>
                <p className='mt-2'>Languages: <span>{Object.values(languages).join(', ')}</span></p>
              </div>
            </div>
            <h3 className='font-semibold'>Border Countries: </h3>
            <div className='flex flex-wrap gap-3 mt-2 mb-6'>
              {borders?.map((item)=> <p className={`px-4 py2 ${darkMode ? 'bg-[#2b3945] text-white' : "bg-white"}  rounded`}>{item}</p>)}
            </div>
          </div>
        </div>
    </div>
  )
}
export async function getServerSideProps(context){
  const {country} = context.query
  let data = []
  try{
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
    data = await res.json()
  }catch(e){
    console.log(e);
  }
  
  return {
    props:{
      country: data
    }
  }
}

export default index