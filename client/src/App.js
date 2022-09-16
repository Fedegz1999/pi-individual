import './App.css';
import { Route } from 'react-router-dom';
import landingPage from './components/LandingPage/landingPage';
import Country from './components/countries/countries';
import CountryDetails from './components/countryDetails/CountryDetails';
import Activities from './components/activities/Activities';
import createActivities from './components/createActivities/createActivities.jsx';

function App() {
  return (
    <div className="App">
      <div>
       <Route exact path='/' component={landingPage}/>
       </div>
       
       <Route exact path='/activities/create'  component={createActivities}/>
       <Route exact path='/countries'  component={Country}/>
       <Route exact path='/countries/:id'  component={CountryDetails}/>
       <Route exact path='/activities'  component={Activities}/>
    </div>
  );
}

export default App;
