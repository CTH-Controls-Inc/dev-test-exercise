//I just like to add pages folder seprately
//so I am making some changes to default structure
// if needed we can do some modifications on a structure as comments

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/login');
  }, []);

  
  return <div>Redirecting...</div>;
};

export default IndexPage;
