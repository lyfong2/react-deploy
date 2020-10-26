import './App.css';
import profileImage from './img/girl.jpg'

function App() {
  return (
    <div className="App">
      <h1>Danny React App</h1>
      <h2>Author: Danny Lin</h2>
      <img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
