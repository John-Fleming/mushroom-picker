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

  checkBasket = () => {
    const mushroomsInBasket = mushroomData.getMushroomTypesInBasket();
    const mushroomTypes = mushroomData.getMushroomTypes();
    if (mushroomTypes.every((mushroomType) => mushroomsInBasket.includes(mushroomType))) {
      alert('You got all the mushrooms! You win!');
    }
  }

  pickMushroomEvent = (e) => {
    mushroomData.pickAMushroom();
    const basket = mushroomData.getBasket();
    this.setState({ basket });
    this.checkBasket();
  }

  render() {
    const { mushrooms, basket } = this.state;
    return (
      <div className="App">
        <h1>Pick a Mushroom:</h1>
        <button className="btn btn-dark mb-4" onClick={this.pickMushroomEvent}><i className="fas fa-shopping-basket"></i></button>
        <div className="row">
          <div className="col-6">
            <h2 className="mb-2">Forest</h2>
            <Forest mushrooms={mushrooms}/>
          </div>
          <div className="col-6">
            <h2 className="mb-2">Basket</h2>
            <Basket basket={basket}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
