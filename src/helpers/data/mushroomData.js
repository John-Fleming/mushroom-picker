const mushrooms = [
  {
    id: 'mushroom1',
    name: 'button',
    description: 'Button mushrooms are by far the most common type of mushroom that you\'re almost guaranteed to find in grocery stores.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Button-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom2',
    name: 'cremini',
    description: 'Cremini mushrooms, also called crimini mushrooms, are a brown variation with a slightly deeper flavour.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Cremini-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom3',
    name: 'portobello',
    description: 'Portobellos are the final full-grown stage of the button mushroom\'s life.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Portobello-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom4',
    name: 'oyster',
    description: 'They offer a mild and sweet flavor and make a great transition from portobellos into more adventurous types of mushrooms.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Oyster-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom5',
    name: 'king oyster',
    description: 'King oysters look similar to regular oyster mushrooms that are growing on top of a thick, white stem.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Pleurotus-eryngii.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom6',
    name: 'chanterelle',
    description: 'Chanterelle mushrooms have a distinctive bright yellow color. They\'ve got a sweet and peppery flavor that goes well with eggs.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Chanterelle-Mushrooms2.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom7',
    name: 'porcini',
    description: 'Porcini mushrooms have a distinctive taste that some people compare to sourdough bread, with slightly creamy and nutty flavors.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Porcini-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom8',
    name: 'hedgehog',
    description: 'Hedgehog or sweet tooth mushrooms get their name from the gills underneath their cap.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Hedgehog-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom9',
    name: 'chicken of the woods',
    description: 'This mushroom grows in clusters on the side of trees and is a beautiful orange color.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Chicken-Of-The-Woods-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom10',
    name: 'black trumpet',
    description: 'They aren\'t a very attractive mushroom to look at, but their flavor is quite sought after.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/black-chanterelles.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom11',
    name: 'wood blewit',
    description: 'Wood blewits are considered edible, although they may cause allergic reactions in some people.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Wood-Blewit-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom12',
    name: 'morel',
    description: 'Morels have a nutty, earthy flavor. They have a meaty texture but they\'re still tender.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Morel-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom13',
    name: 'enoki',
    description: 'These mushrooms are most commonly used in Asian cooking. They come in large clusters of tiny mushrooms with very long stems and small caps.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/shutterstock_1013649136.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom14',
    name: 'shimeji',
    description: 'They are also known as white beech mushrooms. They add a rich umami flavor to dishes.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Shimeji-Mushrooms-1.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom15',
    name: 'shitake',
    description: 'Shiitake mushrooms have a meaty texture much like portobellos.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Shiitake-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom16',
    name: 'reishi',
    description: 'The reishi or lingzhi mushroom is often considered the gold standard when it comes to medicinal mushrooms.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Reishi-Mushrooms.jpg',
    isMagic: true,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom17',
    name: 'lion\'s mane',
    description: 'Lion\'s mane grows in shaggy clumps on the side of trees and can look a bit like stalactite formations that hang inside of caves.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Lions-Mane-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom18',
    name: 'giant puffball',
    description: 'Once the flesh of a puffball turns yellow or brown, it has begun to create spores which can cause stomach upset.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Giant-Puffball-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom19',
    name: 'destroying angel',
    description: 'Some of the most poisonous species, like the Amanita bisporigera (aptly named the "destroying angel") look very similar to edible mushrooms.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/shutterstock_271345679.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: true,
  },
  {
    id: 'mushroom20',
    name: 'caterpillar fungus',
    description: 'The caterpillar fungus (cordyceps sinesis) preys on insects, killing them and eventually growing out of their heads!',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Parasitic-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
];

let basket = [];

const getMushrooms = () => mushrooms;

const getBasket = () => basket;

const removeTwoMushrooms = () => {
  console.error('picked poisonous mushroom');
  basket.splice(0, 2);
};

const emptyBasket = () => {
  console.error('picked deadly mushroom');
  basket = [];
};

const addEachMushroom = (selectedMushroom) => {
  console.error('picked magic mushroom');
  mushrooms.forEach((mushroom) => {
    if (mushroom.isDeadly === false && mushroom.isPoisonous === false) {
      basket.push(mushroom);
    }
  });
};

const pickAMushroom = () => {
  const selectedMushroom = mushrooms[Math.floor(Math.random() * mushrooms.length)];
  if (selectedMushroom.isPoisonous) {
    removeTwoMushrooms();
  } else if (selectedMushroom.isDeadly) {
    emptyBasket();
  } else if (selectedMushroom.isMagic) {
    addEachMushroom(selectedMushroom);
  } else {
    basket.push(selectedMushroom);
  }
};

export default { getMushrooms, getBasket, pickAMushroom };
