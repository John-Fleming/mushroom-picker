import React from 'react';
import Mushroom from '../Mushroom/Mushroom';

class Basket extends React.Component {
  render() {
    const { basket } = this.props;
    const buildBasket = basket.map((mushroom) => (
      <Mushroom key={mushroom.id} mushroom={mushroom}/>
    ));
    return (
      <div className="Basket d-flex flex-wrap">
        {buildBasket}
      </div>
    );
  }
}

export default Basket;
