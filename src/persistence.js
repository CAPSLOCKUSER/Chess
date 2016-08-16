import {createStore} from 'redux';
import {STORAGE_KEY} from './constants';

export function createPersistentStore(reducer) {
  const localData = localStorage.getItem(STORAGE_KEY);
  const persistedState = localData ? JSON.parse(localData) : {};

  const store = createStore(reducer, persistedState);

  store.subscribe(() => {
    const state = store.getState();
    console.log(state);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  });

  return store;
}

window.clearStorage = () => {
  localStorage.removeItem(STORAGE_KEY);
  window.location.reload();
};
