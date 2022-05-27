import './index.css'
export function initHomePage({goTo:goTo}):Element{
	const divEl = document.createElement('div');
  divEl.innerHTML = `
	<header class='header'>
    <text-game title='h1'> Piedra Papel o Tijera</text-game>
    <button-game class='btn-beggin'>Empezar</button-game>
	</header>
	<section class='hands'>
		<hand-option hand='tijera' class='hands__option'></hand-option>
		<hand-option hand='papel' class='hands__option'></hand-option>
		<hand-option hand='piedra' class='hands__option'></hand-option>
	</section>
	`
	const buttonEl = divEl.querySelector('.btn-beggin').shadowRoot
	buttonEl.addEventListener('click',()=>{
		goTo('/instructions');
	})
  
	return divEl;
	}