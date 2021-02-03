// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const baseUrl = 'https://private-bcb07f-sesame2.apiary-mock.com/api/users';

const getUsers = () => fetchUsers(baseUrl);

function fetchUsers(url, options) {
  return fetch(url, options)
    .then((res) => {
      if (res.status < 400) return res;
      Promise.reject(res);
    })
    .then((res) => {
      console.log(res);
      if (res.status !== 204) return res.json();
      return res;
    })
    .catch((err) => console.log(err));
}
export default getUsers;
