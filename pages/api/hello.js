// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// const baseUrl = 'https://private-bcb07f-sesame2.apiary-mock.com';
const baseUrl = 'http://localhost:5002';

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
  return fetching(`${baseUrl}/group/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(groupObj),
  });
}
export function postDoor(doorObj) {
  return fetching(`${baseUrl}/door/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(doorObj),
  });
}
export function putUser(aid, userObj) {
  return fetch(`${baseUrl}user/update/:${aid}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userObj),
  });
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
