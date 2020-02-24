import { createStore } from 'redux'
import AllReducers from './reducer'
import storage from 'redux-persist/lib/storage'
import {persistStore, persistReducer} from "redux-persist";

const config = {
    key:'root',
    storage:storage,
    // blacklist: [] // 不持久化的数据
};
const PersistReducers = persistReducer(config,AllReducers);
const store = createStore(PersistReducers);
export const Persistor = persistStore(store);
export default store
