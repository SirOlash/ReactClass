
import './App.css'
import SignUp from './components/auth/signUp/SignUp.jsx'
import Login from './components/auth/login/Login.jsx'
import router from './router/routes.jsx';
import {RouterProvider} from 'react-router';

function App() {


  return (

    <RouterProvider router={router}></RouterProvider>
    
    // <>

    //   <SignUp></SignUp>
    //   <Login></Login>
    // </>
  )
}

export default App
