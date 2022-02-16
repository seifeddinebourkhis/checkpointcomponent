import Adress from './Component/Profil/Adress'
import FullName from'./Component/Profil/FullName'
import ProfilePhoto from './Component/Profil/ProfilePhoto'
import './App.css';

function App() {
  return (
    <div className="App">
     <FullName/>
     <Adress/>
     <ProfilePhoto/>
    </div>
  );
}

export default App;
