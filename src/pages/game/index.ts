import './index.css';
import {state} from '../../state'
export function initGamePage({goTo:goTo}):Element{
  const lastPlay = state.data.plays.length - 1;
  const optionComputer = state.data.plays[lastPlay].computer;
  const optionMyPlay = state.data.plays[lastPlay].mePlay;
  const container = document.createElement('div');
  container.innerHTML = `
    <div class='hands-container'>
      <hand-option hand='${optionComputer}' class='up' computer='si' ></hand-option>
      <hand-option hand='${optionMyPlay}'class='down' ></hand-option>
    </div>
    `
   setTimeout(()=>{
         goTo('/result')
    },2000);
    return container;
}