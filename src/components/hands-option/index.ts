import {state,Playing, play}from '../../state';
const images = [
{
  option : 'piedra',
  urlImg: require('url:./piedra.png'),
},
{
  option : 'papel',
  urlImg: require('url:./papel.png'),
},
{
  option : 'tijera',
  urlImg: require('url:./tijera.png'),
}]

export function initHandComponent(){
  customElements.define('hand-option',
  class Hand extends HTMLElement {
    constructor(){
      super();
      this.render();
      this.handListener();
    }
    handListener(){ 
      if(this.getAttribute('listener')){
        const option={
          1 :'tijera',
          2:'piedra',
          3:'papel'
        }
        const hand = this.shadowRoot.querySelector('.imagen');
        hand.addEventListener('click',()=>{
          const optionRandom = Math.floor(Math.random() * (4 - 1) + 1);
          let mePlay:any= this.getAttribute('hand');
          const newPlay = new Playing(mePlay,option[optionRandom]);          
          state.setState(newPlay);
        })
      }
    }
    render(){ 
        const shadow = this.attachShadow({mode: 'open'});
        const divEl = document.createElement('div');
        divEl.setAttribute('class','container');
        const styleEl = document.createElement('style');
        const url = images.find( i => i.option == this.getAttribute('hand') );
        divEl.innerHTML = `
        <img class='imagen ${this.getAttribute('computer')? "img-computer" : ''}
        ' src="${url.urlImg}"  />
        `
        styleEl.innerHTML = `
        .container{
          max-width: 300px;
        }
        .imagen{
          width: 100%;
          height:220px;
        }
        .img-computer{
          transform: rotate(-180deg);
        }
        `
        shadow.appendChild(styleEl);
        shadow.appendChild(divEl);
      }
    }
  );
}