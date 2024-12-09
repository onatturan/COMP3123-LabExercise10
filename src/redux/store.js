import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // Reducer'larınızı buradan import edeceksiniz

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
