const fetchApi = async () => {
  const url = 'https://api.github.com/users/JoaoNetoDev-code';
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default fetchApi;

export const fetchReposApi = async () => {
  const url = 'https://api.github.com/users/JoaoNetoDev-code/repos';
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
