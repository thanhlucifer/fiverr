import React, { useEffect } from 'react'
import useRouteCostom from './hook/useRoutesCustom'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const NotificationContext = React.createContext();
function App() {
  const routes = useRouteCostom();
  const showNotification = (content, type) => {
    toast[type](content, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    })
  }

  return <>
    <NotificationContext.Provider value={{ showNotification: showNotification }}>
      <ToastContainer />
      {routes}
    </NotificationContext.Provider>
  </>
}

export default App
