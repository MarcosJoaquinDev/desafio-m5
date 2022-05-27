import './index.css'
export function initInstructionPage({goTo:goTo}):Element{
	const divEl = document.createElement('div');
    divEl.innerHTML = `
	<header class='header'>
    	<text-game title='h3'>Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</text-game>
    	<button-game class='btn-beggin'>¡Jugar!</button-game>
	</header>
	<section class='hands'>
		<hand-option hand='tijera' class='hands__option'></hand-option>
		<hand-option hand='papel' class='hands__option'></hand-option>
		<hand-option hand='piedra' class='hands__option'></hand-option>
	</section>
				`
		const buttonEl = divEl.querySelector('.btn-beggin').shadowRoot
		buttonEl.addEventListener('click',()=>{
			goTo('/chronometer');
		})
	return divEl;
	}