// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const baseUrl = 'https://private-bcb07f-sesame2.apiary-mock.com';

export function getUsers() {
  return fetching(`${baseUrl}/api/users`);
}
export function getDoors() {
  return fetching(`${baseUrl}/api/door`);
}
export function getGroups() {
  return fetching(`${baseUrl}/api/groups`);
}
export function getLogs() {
  return fetching(`${baseUrl}/api/logs`);
}
function fetching(url, options) {
  return fetch(url, options)
    .then((res) => {
      if (res.status < 400) return res;
      return Promise.reject(res);
    })
    .then((res) => {
      if (res.status !== 204) return res.json();
      return res;
    })
    .catch((err) => console.log(err));
}
