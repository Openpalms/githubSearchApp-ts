import { useEffect, useState } from 'react';
import { useDebounce } from '../hooks/debounce';
import {
  useSearchUsersQuery,
  useLazyGetUserReposQuery,
} from '../store/github/githubAPI';

const HomePage = () => {
  const [search, setSearch] = useState('');
  const [dropdown, setDropdown] = useState(false);
  const debounced = useDebounce(search);
  const [fetchRepos, { isLoading: areRepLoading, data: repos }] =
    useLazyGetUserReposQuery();
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 2,
    refetchOnFocus: true,
  });
  const handleClick = (username: string) => {
    fetchRepos(username);
  };
  useEffect(() => {
    setDropdown(debounced.length > 2 && data?.length! > 0);
  }, [debounced, data]);
  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {isError && <p className="text-center text-red-600">Error</p>}
      <div className="relative w-[560px] ">
        <input
          type="text"
          className="border px-4 py-2 w-[100%] h-[42px] mb-2"
          placeholder="search for github users"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {dropdown && (
          <ul className="list-none absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white p-5 overflow-y-scroll">
            {isLoading && <p className="text-center"> Loading...</p>}
            {data?.map((user) => (
              <li
                className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer "
                key={user.id}
                onClick={() => handleClick(user.login)}
              >
                {user.login}
              </li>
            ))}
          </ul>
        )}
        <div className="container">
          {areRepLoading && <p className="text-center">Repos are loading...</p>}
          {repos?.map((rep) => (
            <p>{rep.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
