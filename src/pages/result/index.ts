import './index.css';
import {state, userGame} from'../../state';


export function initResultComponent({goTo:goTo}):Element{
  const headerResult = ()=>{
    let win = true;
    let winner = 'Ganaste';
    const lastPlay = state.data.plays.length - 1;
    const howWin = state.howWin(state.data.plays[lastPlay]);
  
    if(howWin == 'computer' ){
      win = false;
      winner = 'Perdiste';
    }
    if(howWin == 'empate'){
      win = false;
      winner = 'Empate';
    }
    return { title : winner , logo : win }
  };
  const headerLogoResult = (header:Element, logo:boolean)=>{
      if(logo){
        header.setAttribute('class','header winner');    
      }else{
        header.setAttribute('class','header looser');
        const title = header.querySelector('text-game').shadowRoot.querySelector('.text-game');
        title.setAttribute('class','text-game loser');
      }
  }
  
    const container = document.createElement('div');
    let title = headerResult().title;
    let logo = headerResult().logo;
    let score = state.getState(); 
    
    let scoreMe = score.results.me ;
    let scoreComputer = score.results.computer;

    container.innerHTML = `
    <header class='header' >
      <text-game title='h1'>${title}</text-game>
    </header>
    <section class='points'>
      <text-game title='h2' class='points_title'>Score</text-game>
      <text-game title='h3'>Vos: ${scoreMe}</text-game>
      <text-game title='h3'>Máquina: ${scoreComputer}</text-game>
    </section>
    <div class='button-back'>
      <button-game>Volver a jugar</button-game>
    </div>
    `
    const headerEl = container.querySelector('.header');
    headerLogoResult(headerEl,logo);

    container.querySelector('.button-back').addEventListener('click',()=>{
      goTo('/instructions')
    })

    return container;
  }

