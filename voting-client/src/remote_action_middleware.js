/**
 * Created by estsauver on 1/31/16.
 */
export default socket => store => next => action => {
    if (action.meta && action.meta.remote) {
        socket.emit('action', action);
    }
    return next(action);
}