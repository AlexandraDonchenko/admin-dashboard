// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// const baseUrl = 'https://private-bcb07f-sesame2.apiary-mock.com';
const baseUrl = 'http://192.168.1.171:5000';

// export function getUsers() {
//   return fetching(`${baseUrl}/api/users`);
// }
export function getUsers() {
  return fetching(`${baseUrl}/user/list`);
}
export function getDoors() {
  return fetching(`${baseUrl}/door/list`);
}
export function getGroups() {
  return fetching(`${baseUrl}/group/list`);
}
export function getLogs() {
  return fetching(`${baseUrl}/status/logs`);
}
export function postUser(userObj) {
  return fetching(`${baseUrl}/user/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userObj),

  });
}
export function postGroup(groupObj) {
  return fetching(`${baseUrl}/api/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(groupObj),
  });
}
function fetching(url, options) {
  return fetch(url, options)
    .then((res) => {
      console.log(url);
      if (res.status < 400) return res;
      return Promise.reject(res);
    })
    .then((res) => {
      if (res.status !== 204) return res.json();
      return res;
    })
    .catch((err) => console.log(err));
}
