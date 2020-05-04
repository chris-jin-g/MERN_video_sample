import io from 'socket.io-client';

// const socket = io({ path: '/bridge' });
// const socket = io.connect('http://176.9.208.138:5000/');
const socket = io.connect('https://nameless-depths-63913.herokuapp.com');

export default socket;