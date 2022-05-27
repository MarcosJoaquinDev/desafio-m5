export function initButtonComponent(){
  customElements.define('button-game',
  	class Button extends HTMLElement {
			constructor(){
				super();
				this.render();
			}	
			render(){ 
				const shadow = this.attachShadow({mode: 'open'});
				const buttonEl = document.createElement('button');
				const styleEl = document.createElement('style');
				buttonEl.setAttribute('class','button');
				buttonEl.innerHTML = `
				<text-game title='h3'>${this.textContent}</text-game>
				`
				styleEl.innerHTML = `
				.button{
					width:100%;
					margin:5px;
					background-color: #006CFC;
					color: #D8FCFC;
					border: solid 10px #001997;
					border-radius: 10px;
					padding: 10px;
					letter-spacing: 3px;
					cursor:pointer;
				}
				`
				shadow.appendChild(styleEl);
				shadow.appendChild(buttonEl);
			}
    }
  );
}