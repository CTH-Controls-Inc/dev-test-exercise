'use client';

import { CheckCheck } from 'lucide-react';
import Image from 'next/image';
import { desData } from '../data/description';

const RightSide = () => {
  return (
    <div className='max-w-lg bg-white border border-gray-200 rounded-lg shadow  '>
      <div className='p-5'>
        <div className='mb-6'>
          <Image
            src='/logo_CTH.gif'
            alt='Site logo'
            width={60}
            height={70}
            className='rounded-t-lg w-1/2 '
          />
        </div>
        <div className='flex items-center justify-start gap-4'>
          <h5 className=' mb-2 text-2xl font-bold tracking-tight text-gray-900 '>
            Coding Assessment - CTH Controls Inc.
          </h5>
        </div>
        <p className='font-normal text-gray-700'>Auther: Xiaobing Feng</p>
        <p className='mb-3 font-normal text-gray-700'>
          Email: charliefeng2020@gmail.com
        </p>
        <h5 className=' mb-2 text-xl font-bold tracking-tight text-gray-900 '>
          Description:
        </h5>
        <div className='flex flex-col items-start justify-start gap-4 px-4'>
          {desData.map((des) => {
            return (
              <div key={des.id} className='flex items-center gap-2'>
                <CheckCheck className='shrink-0 h-4 w-4' />
                <p className='mb-1 font-xs text-gray-700'>{des.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RightSide;
