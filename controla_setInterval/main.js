const sla = 'Olá Mundo'
let cont = 0;

let controllerTimes = {
  loopTimer : null, //variável de controle para o setInterval

  loop: function(){
    this.loopTimer = setInterval(function(){
      console.log('Olá', cont);
      cont++;
    },200); 
  },

  play : function(){
    this.loop();
  },
  
  pause : function(){
    clearInterval( this.loopTimer );
  }
}