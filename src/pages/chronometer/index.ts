import './index.css';
import 'animate.css';
export function initTimerPage({goTo:goTo}):Element{
    const container = document.createElement('div');
    container.innerHTML = `
    <header class='container-timer'> 
        <h1 class='timer-cont'></h1>
    </header>
    <section class='hands'>
		<hand-option hand='tijera' class='hands__option tijera' listener=true></hand-option>
		<hand-option hand='papel' class='hands__option papel' listener=true></hand-option>
		<hand-option hand='piedra' class='hands__option piedra' listener=true></hand-option>
	</section>
    `
    const counter = container.querySelector('.timer-cont');
    const arrayAnimation = [
    'timer animate__animated animate__backOutDown',
    'timer animate__animated animate__backOutLeft',
    'timer animate__animated animate__backOutRight',
    'timer animate__animated animate__backOutUp'];
    let number = 3;
    let flag = true;    
    const changeFlagAndRoute = ()=>{ 
        goTo('/game');
        flag = false;
    } 

    container.querySelector('.tijera').addEventListener('click',()=> changeFlagAndRoute()); 
    container.querySelector('.papel').addEventListener('click',()=> changeFlagAndRoute());
    container.querySelector('.piedra').addEventListener('click',()=> changeFlagAndRoute());
    
    let idInterval =  setInterval(()=>{
        counter.setAttribute('class',arrayAnimation[number]);
        counter.innerHTML = number.toString();
        if(number == 0){
            clearInterval(idInterval);
           if (flag) goTo('/instructions');
        }
        number--;
    },1000)
    
    return container;
}