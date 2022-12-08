import { useAppSelector } from '../hooks/redux';

const Favourites = () => {
  const { favourites } = useAppSelector((state) => state.github);
  if (favourites.length === 0) return <p> No favourites found</p>;
  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul className="list-none">
        {favourites.map((fav) => (
          <li key={fav}>
            <a href={fav} target="_blank" rel="noreferrer">
              {fav}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Favourites;
