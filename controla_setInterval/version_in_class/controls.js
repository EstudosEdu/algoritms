class ControlsTime{
	timer = 200;
	loopTimer;
	cont = 0;

	loop(){
		this.loopTimer = setInterval(() => {
			console.log('Hello People', this.cont);
			this.cont++;
		}, this.timer);
	}
	
	play(){
		this.loop();
	}
	
	pause(){
		clearInterval(this.loopTimer);
	}
}

const controlTime = new ControlsTime();
controlTime.play();
