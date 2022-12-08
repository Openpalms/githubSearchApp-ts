import React, { useState } from 'react';
import { useActions } from '../hooks/actions';
import { useAppSelector } from '../hooks/redux';
import { IRepo } from '../models/models';

const Card = ({ repo }: { repo: IRepo }) => {
  const { addFavourite, removeFavourite } = useActions();
  const favs = useAppSelector((state) => state.github.favourites);

  const [isFavourite, setIsFavourite] = useState(favs.includes(repo.html_url));

  const removeFromFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    removeFavourite(repo.html_url);
    setIsFavourite(false);
  };

  const addToFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addFavourite(repo.html_url);
    setIsFavourite(true);
  };
  return (
    <div className="border py-3 px-5 rounded cursor-cell my-5 hover:shadow-md hover:bg-gray-100 transition-all ">
      <h2 className="text-lg font-bold ">{repo.full_name}</h2>
      <p className="font-bold mr-2">{repo.stargazers_count}</p>
      <p className="font-thin mr-2 text-sm"> {repo?.description}</p>

      {isFavourite ? (
        <button
          className="py-2 px-4 ml-2 bg-red-400 rounded hover: shadow-md transition-all"
          onClick={removeFromFavourite}
        >
          Remove from favourites
        </button>
      ) : (
        <button
          className="py-2 px-4 bg-yellow-400 rounded hover: shadow-md transition-all"
          onClick={addToFavourite}
        >
          Add to favourites
        </button>
      )}
    </div>
  );
};

export default Card;
