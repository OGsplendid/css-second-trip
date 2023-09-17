import Collapse from '../components/collapse/Collapse';
import CallbackChat from '../components/callback-chat/CallbackChat';
import Liker from '../components/liker/Liker';

const collapse = new Collapse(document.body);
const callbackChat = new CallbackChat(document.body);
const liker = new Liker(document.body);

collapse.bindToDOM();
callbackChat.bindToDOM();
liker.bindToDOM();
