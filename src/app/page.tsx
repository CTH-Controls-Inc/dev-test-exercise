import Form from '../components/Form';
import RightSide from '../components/RightSide';

export default function Home() {
  return (
    <div className='flex w-full h-screen'>
      <div className='w-full flex items-center justify-center lg:w-1/2'>
        <Form />
      </div>
      <div className='hidden relative bg-gray-200 lg:flex flex-col w-1/2 items-center justify-center '>
        <RightSide />
      </div>
    </div>
  );
}
