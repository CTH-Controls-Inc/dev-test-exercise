import { useRouter } from 'next/router';
import Link from 'next/link';


const Home =() => {

    const router = useRouter();

    const handleLoginClick =() => {
        router.push('/login');


    };

    return(

        <div>
            <h1> Welcome to Jason's Page </h1>
            <button onClick={handleLoginClick}>LOGIN</button>
            <p>

                Dont have an account ?<Link href="#">Sign up</Link>
            </p>
        </div>
    );
};

export default Home;