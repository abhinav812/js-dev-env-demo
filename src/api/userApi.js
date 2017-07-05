import 'whatwg-fetch';

import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers() {
  return get('users');
}

export function deleteUser(id) {
  return del(`users/${id}`);
}

// Can't call func delete since reserve word
function del(url) {
  const request = new Request(baseUrl + url , {
    method: 'DELETE'
  });

  return fetch(request).then(onSussess, onError);
}

function get(url) {
  console.log(baseUrl); // eslint-disable-line no-console
  return fetch(baseUrl + url).then(onSussess, onError);
}

function onSussess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
