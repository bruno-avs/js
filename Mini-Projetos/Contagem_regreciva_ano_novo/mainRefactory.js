// código refatorado usando funções 
const $dias = document.querySelector("#dias");
const $horas = document.querySelector("#horas");
const $minutos = document.querySelector("#minutos");
const $segundos = document.querySelector("#segundos");
const $nextYear = document.querySelector("#next-year");

const contador = () => {

    const nextYear = new Date().getFullYear() + 1;
    const nextYearTime = new Date(`january 01 ${nextYear} 00:00:00`);

    const checkLackZero = dateObject => dateObject < 10 ? "0" + dateObject : dateObject;

    const calculateValueDate = diference => ({ // factory function
        days: Math.floor(diference / 1000 / 60 / 60 / 24),
        hours: Math.floor(diference / 1000 / 60 / 60) % 24,
        minutes: Math.floor(diference / 1000 / 60) % 60,
        seconds: Math.floor(diference / 1000) % 60,
    })
    const countdowNewYear = () => {

        const currentdate = new Date();
        const diference = nextYearTime - currentdate;
        const valueDates = calculateValueDate(diference);

        $dias.textContent = checkLackZero(valueDates.days);
        $horas.textContent = checkLackZero(valueDates.hours);
        $minutos.textContent = checkLackZero(valueDates.minutes);
        $segundos.textContent = checkLackZero(valueDates.seconds);
        $nextYear.textContent = nextYear;

    }
    const starTimer = () => setInterval(countdowNewYear, 1000);
    starTimer()

}

contador()
