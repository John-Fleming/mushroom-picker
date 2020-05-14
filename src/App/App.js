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

  pickMushroomEvent = (e) => {
    mushroomData.pickAMushroom();
    const basket = mushroomData.getBasket();
    this.setState({ basket });
  }

  render() {
    const { mushrooms, basket } = this.state;
    return (
      <div className="App">
        <h2 className="mb-2">Forest</h2>
        <button className="btn btn-dark mb-4" onClick={this.pickMushroomEvent}><i className="fas fa-shopping-basket"></i></button>
        <Forest mushrooms={mushrooms}/>
        <h2 className="my-4">Basket</h2>
        <Basket basket={basket}/>
      </div>
    );
  }
}

export default App;
