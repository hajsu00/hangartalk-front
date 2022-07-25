import {
  combineReducers,
  applyMiddleware
} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {UsersReducer} from '../users/reducers';

export default function createStore(history) {
  return configureStore(
    combineReducers({
      router: connectRouter(history),
      users: UsersReducer,
    }),
    applyMiddleware(
      routerMiddleware(history)
    )
  )
}