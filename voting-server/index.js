/**
 * Created by estsauver on 1/23/16.
 */
import makeStore from './src/store';
import startServer from "./src/server"

export const store = makeStore();
startServer(store);


store.dispatch({
    type: 'SET_ENTRIES',
    entries: require('./entities.json')
});
store.dispatch({type: "NEXT"});
