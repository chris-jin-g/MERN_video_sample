import io from 'socket.io-client';

// const socket = io({ path: '/bridge' });
const socket = io.connect('http://176.9.208.138:5000/');

export default socket;