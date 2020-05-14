import React from 'react';
import './App.scss';
import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest/Forest';
import Basket from '../components/Basket/Basket';

class App extends React.Component {
  state = {
    mushrooms: [],
    basket: [],
  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    const basket = mushroomData.getBasket();
    this.setState({ mushrooms, basket });
  }

  render() {
    const { mushrooms, basket } = this.state;
    return (
      <div className="App">
        <h2>Forest</h2>
        <Forest mushrooms={mushrooms}/>
        <h2>Basket</h2>
        <Basket basket={basket}/>
      </div>
    );
  }
}

export default App;
