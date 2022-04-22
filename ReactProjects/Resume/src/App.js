// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState } from 'react';
import api from './api/Users';
import NavBar from './components/NavBar';
import PersonalDetails from './components/PersonalDetails';
import EducationDetails from './components/EducationDetails';
import ProjectsDeveloped from './components/ProjectsDeveloped';
import ExperienceDetails from './components/ExperienceDetails';
import ExtraDetails from './components/ExtraDetails';

function App() {
  const [personData, setpersonData] = useState([])
  let getData = (data) => {
    let copyData = [...personData]
    copyData.push(data)
    setpersonData(copyData)
  }

  // let del= async ()=>{
  //   let res=await api.delete("user/3")
  //     console.log(res.data)
  // }
  let del = async () => {
    let res = await api.post("user/", personData)
    console.log(res.data)
  }


  //  console.log('app',personData);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path={'/'} ><PersonalDetails getData={getData} personData={personData} /></Route>
          <Route path={'/EducationDetails'} ><EducationDetails getData={getData} personData={personData} /></Route>
          <Route path={'/ProjectsDeveloped'}><ProjectsDeveloped getData={getData} personData={personData} /></Route>
          <Route path={'/ExperienceDetails'}><ExperienceDetails getData={getData} personData={personData} /></Route>
          <Route path={'/ExtraDetails'}><ExtraDetails getData={getData} personData={personData} /></Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
