// código com class 
const $dias = document.querySelector("#dias");
const $horas = document.querySelector("#horas");
const $minutos = document.querySelector("#minutos");
const $segundos = document.querySelector("#segundos");
const $nextYear = document.querySelector("#next-year");


class Contador {
  
    countdownNewYear() {
        const nextYear = new Date().getFullYear() + 1;
        const nextYearTime = new Date(`${nextYear}-01-01T00:00:00`);

        const checkZeros = value => {
            const format = value < 10 ? "0" + value : value;
            return format
        }
        
        const calculateDistanceYear = () => {
            const currentDate = new Date();
            const calculateInterval = nextYearTime - currentDate;
            const days = Math.floor(calculateInterval / 1000 / 60 / 60 / 24);
            const hours = Math.floor(calculateInterval / 1000 / 60 / 60) % 24;
            const minutes = Math.floor(calculateInterval / 1000 / 60) % 60;
            const seconds = Math.floor(calculateInterval / 1000) % 60;
          
            $dias.textContent = checkZeros(days);
            $horas.textContent = checkZeros(hours);
            $minutos.textContent = checkZeros(minutes);
            $segundos.textContent = checkZeros(seconds);
            $nextYear.textContent = nextYear;
        }
        return calculateDistanceYear()
    }
    startTimer() {
        setInterval(this.countdownNewYear, 1000);
    }
}

const contador = new Contador()

contador.startTimer()


