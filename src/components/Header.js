import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';
import { useEffect, useState } from 'react';
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';
import swal from 'sweetalert';

const Header = () => {

  const clientID = '828256694102-lek379gpfluhd4jm0542m4rui2p12uhq.apps.googleusercontent.com';
  const [user, setUser] = useState({});
  const [loggeIn, setLoggetInfo] = useState(false);

  const onSuccess = (response) => {
    setUser(response.profileObj);
    document.getElementsByClassName("btn").hidden = true;
    swal({
    tittle: 'Autenticación',
    text: 'Ha iniciado session correctamente',
    icon: 'success',
    buttons: 'Aceptar',
    

    })
    

    
  }
  const onFailure = (response) => {
    console.log("Something went wrong");
  }
  const handleLogout = () => {
    setUser({});
  }

  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientID,
      })
    }
    gapi.load("client:auth2", start)

  }, [])


  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
          <img src={Logo} alt='' />
        </Link>
        <div className='flex items-center gap-6'>
          <GoogleLogin
            className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'
            clientId={clientID}
            onSuccess={onSuccess}
            onFailure={onFailure}
            buttonText="Ingresa con Google"
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
