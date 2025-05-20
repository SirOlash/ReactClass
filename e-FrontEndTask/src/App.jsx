import { useState } from 'react'
import './App.css'
import router from './router/routes.jsx';
import { RouterProvider } from 'react-router-dom';

function App() {

  return (
     <RouterProvider router={router}></RouterProvider>
  )
}

export default App
