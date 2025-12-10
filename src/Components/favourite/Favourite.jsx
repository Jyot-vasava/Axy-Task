import { CardGIF } from '../Cards/CardGIF';

function Favourite() {
  const loggedIn = true;

  //check user logged in and addedFavurite state
  if (loggedIn) {
    if (addedFavourite) {
      return <CardGIF gifId />;
    } else {
      return <p>No Favourite is added!!!</p>;
    }
  } else {
    return <p>Login Required!!!</p>;
  }
}

export default Favourite;
