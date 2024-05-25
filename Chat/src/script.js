import $ from 'jquery'
import './style.css'

const socket = new WebSocket('wss://fep-app.herokuapp.com/');
const $sendBtnEl = $('#sendMessageBtn');
const $inputNameEl = $('#userName');
const $inputMessageEl = $('#userMessege');
const messageTemplate = $('#messageTemplate').html();
const $messagesListEl = $('#messages');

$sendBtnEl.on('click', onSendBtnClick);


socket.onopen = () => {
    console.log(socket);
}
socket.onmessage = (e) => {
    console.log('on message', e.data);
    const message = chengeKeys(JSON.parse(e.data));
    renderMessage(message);
}
function sendMessage(data){
    socket.send(JSON.stringify(data))
}
function renderMessage(message){
    $messagesListEl.append(message);
}
function onSendBtnClick(){
    if(socket.readyState !== 1){
        console.log("Соединение не установленно!!")
    }else{
        const data = {
            type: 'message',
        payload: {
            username: $inputNameEl.val(),
            message: $inputMessageEl.val()
        }
        };
        sendMessage(data);
        clearInputs();
    };
}
function clearInputs(){
    $inputNameEl.val('');
     $inputMessageEl.val('');
}
function chengeKeys(data){
    return messageTemplate
    .replace('{{userName}}', data.payload.username)
    .replace('{{message}}', data.payload.message);
}