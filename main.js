//Выделяем все наши кнопки
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

//Создаем родительский класс-конструктор
class Timer {
	constructor(startTime = 0, stopTime = 0, interval = 0){ //Значения по умолчанию
		this.startTime = startTime;
		this.stopTime = stopTime;
		this.interval = interval;
	}
	start(){ // Запускаем таймер
     this.startTime = new Date();
     //console.log(this.startTime)
	} 
	stop(){ // Останавливаем таймер
     this.stopTime = new Date();
     this.interval = this.stopTime - this.startTime;
     //console.log(this.stopTime, this.interval)
	}
	getTime(){ //Выводим результат
    	return console.log(`Interval: ${this.interval} ms`);
	}
	static timeToNY(){ //Метод показывающий сколько дней до Нового Года
		const nowTime = new Date();
		const theEnd = nowTime.getFullYear();
		const finishYear = new Date(theEnd, 11, 31, 23, 59, 59, 999);
		const ms = finishYear.getTime() - nowTime.getTime();
		const howManyDays = parseInt(ms / (1000 * 60 * 60 *24));
    console.log(`To NY: ${howManyDays} left..)`);
	}

}

Timer.timeToNY();

//Обьявляем три экземпляра родительского обьекта-конструктора
const tickerFirst = new Timer(100, 30, 555);
const tickerSecond = new Timer(55, 66, 657);
const stopWatch = new Timer();

//Событие по нажатию Start
start.addEventListener('click', function startTime(){
	stopWatch.start();
});

//Событие по нажатию Stop
stop.addEventListener('click', function stopTime(){
	stopWatch.stop();
	stopWatch.getTime();
});