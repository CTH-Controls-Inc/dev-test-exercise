import Login from "./component/Login"
import Header from "./component/Header"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import "./index.css"

function App() {
    return (
        <div className="wrapper">
            <Header />
            <Login />

            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

        </div>
    )
}

export default App
