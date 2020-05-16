import React from 'react';
import './App.scss';
import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest/Forest';
import Basket from '../components/Basket/Basket';

class App extends React.Component {
  state = {
    mushrooms: [],
    basket: [],
    dark: false,
  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    const basket = mushroomData.getBasket();
    const dark = mushroomData.deadlyMushroomStatus();
    this.setState({ mushrooms, basket, dark });
  }

  checkBasket = () => {
    const mushroomsInBasket = mushroomData.getMushroomTypesInBasket();
    const mushroomTypes = mushroomData.getMushroomTypes();
    if (mushroomTypes.every((mushroomType) => mushroomsInBasket.includes(mushroomType))) {
      // eslint-disable-next-line no-alert
      alert('You got all the mushrooms! You win!');
    }
  }

  pickMushroomEvent = (e) => {
    mushroomData.pickAMushroom();
    const basket = mushroomData.getBasket();
    const dark = mushroomData.deadlyMushroomStatus();
    this.setState({ basket, dark });
    this.checkBasket();
  }

  render() {
    const { mushrooms, basket, dark } = this.state;
    return (
      <div className={`App ${dark ? 'dark-mode' : ''}`}>
        <h1>Pick a Mushroom:</h1>
        {
          dark ? (
            <button className="btn btn-danger my-2" onClick={this.pickMushroomEvent}><i className="fas fa-shopping-basket"></i></button>
          ) : (
            <button className="btn btn-dark my-2" onClick={this.pickMushroomEvent}><i className="fas fa-shopping-basket"></i></button>
          )
        }
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
