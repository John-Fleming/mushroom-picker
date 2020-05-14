import React from 'react';
import PropTypes from 'prop-types';
import Mushroom from '../Mushroom/Mushroom';
import mushroomShape from '../../helpers/propz/mushroomShape';

class Basket extends React.Component {
  static propTypes = {
    mushrooms: PropTypes.arrayOf(mushroomShape.mushroomShape),
  }

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
