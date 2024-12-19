import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function Certificates() {
  return (
    <div id='Certificates' className='dark:bg-slate-950 bg-gradient-to-r from-slate-950 to-blue-950 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950'>
      <SectionTitle title="Certificates"/>
      <div className='flex container mx-auto'>
        <div className='flex flex-wrap gap-10 items-center justify-center pb-[10rem]'>
          <img className='max-tablet:w-[10rem]' width='300rem' src='cc.jpg' alt='isc2-cc'></img>
          <img className='max-tablet:w-[10rem]' width='400rem' src='cert1.jpg' alt='udemy'></img>
          <img className='max-tablet:w-[10rem]' width='400rem' src='cert2.jpg' alt='udemy'></img>
          <img className='max-tablet:w-[10rem]' width='400rem' src='cert3.jpg' alt='udemy'></img>
          <img className='max-tablet:w-[10rem]' width='300rem' src='cert4.jpg' alt='bnsp'></img>
          <img className='max-tablet:w-[10rem]' width='300rem' src='cert5.jpg' alt='sololearn'></img>
          <img className='max-tablet:w-[10rem]' width='300rem' src='cert6.jpg' alt='sololearn'></img>
          <img className='max-tablet:w-[10rem]' width='300rem' src='isc2-candidate.png' alt='isc2-candidate'></img>
          <div> 

          </div>
        </div>
      </div>
    </div>
  )
}

export default Certificates