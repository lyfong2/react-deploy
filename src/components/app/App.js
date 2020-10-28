import './App.css';
// import profileImage from '../../img/girl.jpg'
import Nav from '../nav/Nav';
import About from '../about/About';
import Shop from '../shop/Shop';
import ItemDetail from '../itemDetail/ItemDetail';
import Button from '../button/button';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail}/>
        </Switch>
        <Button label="click me please"></Button>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)


export default App;
