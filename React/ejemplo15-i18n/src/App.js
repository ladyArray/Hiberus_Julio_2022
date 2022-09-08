import React from 'react'; 
import './App.css';
import i18n from './i18n';
import { withTranslation } from 'react-i18next';

import aleman from './images/banderas/alemania.png';
import francia from './images/banderas/francia.png';
import ingles from './images/banderas/inglaterra.png';
import spain from './images/banderas/spain.png';
import tanzania from './images/banderas/tanzania.png';


function App({t}) {

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <div className="App">
      <img src={aleman} onClick={() => changeLanguage('de')} />
      <img src={francia}  onClick={() => changeLanguage('fr')} />
      <img src={ingles} onClick={() => changeLanguage('en')} />
      <img src={spain} onClick={() => changeLanguage('es')} />
      <img src={tanzania} style={{width: '150px'}} onClick={() => changeLanguage('tz')} />
      <h1>{t('mensaje')}</h1>
    </div>
   
  )
}

export default withTranslation()(App);
