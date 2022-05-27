import {initTextComponent as text} from './components/text/index';
import {initButtonComponent as button} from './components/button/index';
import {initHandComponent as hands} from './components/hands-option/index';
import {initRouter} from './router';
import {state} from './state';
function main(){
    text();
    button();
    hands();
    state.initState();
    const rootEl = document.querySelector('.root');
    initRouter(rootEl);
}
main();