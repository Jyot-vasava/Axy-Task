import { CiHeart, FaHeart } from 'react-icons/ci';
import { useState } from 'react';

function CardGIF({ addedFavourite, gifID }) {
  const [addedFavourite, useAddedFavourite] = useState(false);
  const loggedIn = true;

  //handle the addFavourite state
  function handleFavourite(gifId) {
    loggedIn && useAddedFavourite(!addedFavourite);
  }

  return (
    <div className='w-md'>
      <img
        src='https://github.com/coil-kt/coil/issues/540'
        alt='animated gif'
      />
      <span onClick={handleFavourite(gifID)}>
        {addedFavourite ? <FaHeart /> : <CiHeart />}
      </span>
    </div>
  );
}
export default CardGIF;
