export function initTextComponent(){
  customElements.define('text-game',
    class Text extends HTMLElement {
      constructor(){
        super();
        this.render();
      }
      render(){ 
        const shadow = this.attachShadow({mode: 'open'});
        const typeTitle = this.getAttribute('title') || 'h4';  
        const titleEl = document.createElement(typeTitle);
        const styleEl = document.createElement('style');
        titleEl.setAttribute('class','text-game');
        titleEl.textContent = this.textContent;
        styleEl.innerHTML = `
        .text-game{
          font-family: 'Odibee Sans', cursive;
          margin:0;
          text-align:center;
        }
        h1.text-game{
          font-size:80px;
          color: #009048;
        }
        h2.text-game{
          font-size:55px;
          font-weight: 400;
        }
        h3.text-game{
          font-size:45px;
          font-weight: 500;
        }
        h4.text-game{
          font-size:40px;
          font-weight: normal;
        }
        h1.text-game.loser{
          color: #894949;
        }
        `
        shadow.appendChild(styleEl);
        shadow.appendChild(titleEl);
      }
    }
  );
}