import logo from './logo.svg';
import gory from './images/gory.jpeg';
import ozero from './images/ozero.jpeg';
import deva from './images/deva.jpeg';
import fox from './images/fox.jpeg';
import cloud from './images/cloud.jpeg';
import nasa from './images/nasa.svg'
import { format, compareAsc } from 'date-fns'

import './App.css';

function App() {
  return (

  <div className="container">
    <header className="header">
      <div className="poisk">
        <img src={nasa} className = "img-responsive" />
        <input id="knopka" className="knopka" type="text"></input>
      </div>
      <div className="datetime">
        <div className="month">{format(new Date(2022, 5, 5), 'MM.dd.yyyy')}</div>
        <div className="time">{format((12,34,30), "hh:mm")}</div>
      
      </div>
    </header>
    <div className='Erdauit'>
      <div className="pic" >
        <img src={gory} />
        <p>HEY</p>
      </div>
      <div className="pic">
        <img src={ozero} />
        <p>LET'S</p>
      </div>    
      <div className="pic">
        <img src={deva} />
        <p>GIVE</p>
      </div>
      <div className="pic">
        <img src={fox} />
        <p>ALL</p>
      </div>
      <div className="pic">
        <img src={cloud} />
        <p>YOU CAN</p>
      </div>
    </div>
  </div>
  );
}

export default App;
