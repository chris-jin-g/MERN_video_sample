import io from 'socket.io-client';

// const socket = io({ path: '/bridge' });
const socket = io.connect('https://nameless-depths-63913.herokuapp.com/');

export default socket;
