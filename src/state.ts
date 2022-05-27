type play = 'piedra'|'papel'|'tijera';
type userGame = 'me' |'computer' | 'empate';

class Playing {
  mePlay:play
  computer:play 
  constructor(me:play,computer:play){
    this.mePlay = me;
    this.computer = computer;
  }
}

export const state = {
  data: {
    plays:[],
    results:{
      me:0,
      computer:0,
      empate: false,
    }
  },
  listeners: [], 
  getState() {
    const data = localStorage.getItem('data');    
    let objData = JSON.parse(data);
    if(objData){
      this.data = objData;
      return this.data;
    }
    return this.data;
  },
  setState(play:Playing) {
    let newState = this.getState();
    newState.plays.push(play);
    this.points(play);
     localStorage.setItem('data', JSON.stringify(newState));
  },
  points(play:Playing){
    if(this.howWin(play) == 'me'){
      this.data.results.me++;
    }
    if(this.howWin(play)=='computer'){
      this.data.results.computer++;
    }
    if(this.howWin(play)=='empate'){
      this.data.results.empate = true;
    }
  },
  initState(){
    this.getState();
  },
  howWin(play:Playing):userGame{
    let meWin = (play.mePlay == 'papel' && play.computer == 'piedra') || (play.mePlay == 'piedra' && play.computer == 'tijera') || (play.mePlay == 'tijera' && play.computer == 'papel');
   
    if(play.mePlay == play.computer){
      return 'empate';
    }
    if(meWin){
      return 'me';
    }else{
      return 'computer';
    }  
  }
  
};
export {Playing, play,userGame};


