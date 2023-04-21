import './App.css';
import Logo from './images/logo.png'
import Header from './components/Header';
import ExpandMore from './images/expand_more.svg';


function App() {

  return (
    <div className="App">

      <div className="banner">
        <p>$7,500 tax credit for Model Y and Model 3. Model 3 RWD credit reducing to $3,750 on April 18. <a className="learnMore" href="">Learn More</a></p>
      </div>


      <div className="content">
        
        <header className="styleHeader">
          <img className="logo" src={Logo} alt="Logo tesla" />

          <div className="optionHeader">
            <Header optionHeader="Model S"/>
            <Header optionHeader="Model 3"/>
            <Header optionHeader="Model X"/>
            <Header optionHeader="Model Y"/>
            <Header optionHeader="Solar Roof"/>
            <Header optionHeader="Solar Panels"/>
            <Header optionHeader="Powerwall"/>
          </div>
          
          <div className="menuFixed">
            <div className="optionHeader">
              <Header optionHeader="Shop"/>
              <Header optionHeader="Account"/>
            </div> 
        
            <a className="buttonMenu">Menu</a>
          </div>
        </header>

        <div>
          <p className="title"> Model Y </p>
          <a className="subTitle" href=""> View Inventory </a>
        </div>

        <div className="buttons">
          <button className="orderNow"> Order now </button>
          <button className="demoDrive"> Demmo drive </button>
        </div>

        <img className="expandMore" src={ExpandMore} alt="Icon" />
      </div> 
    </div>
  );
}

export default App;


