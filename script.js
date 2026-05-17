//TIMER
const targetDate = new Date("2026-05-22T10:30:00").getTime();

function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "Միջոցառումը սկսված է:";
        return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    // Формат 00
    document.getElementById("days").innerText = d < 10 ? '0' + d : d;
    document.getElementById("hours").innerText = h < 10 ? '0' + h : h;
    document.getElementById("minutes").innerText = m < 10 ? '0' + m : m;
    document.getElementById("seconds").innerText = s < 10 ? '0' + s : s;
}

setInterval(updateTimer, 1000);
updateTimer();



//AUDIO  
const audio = document.getElementById("music");
let audioStarted = false;


function startAudio() {
    if (!audioStarted) {
        audio.play()
            .then(() => {
                audioStarted = true;
                console.log("Звук успешно запущен");

                ['click', 'touchstart', 'scroll'].forEach(evt =>
                    window.removeEventListener(evt, startAudio)
                );
            })
            .catch(error => {

                console.log("Воспроизведение все еще заблокировано. Ожидание действия пользователя...");
            });
    }
}


window.addEventListener('click', startAudio);
window.addEventListener('touchstart', startAudio);
window.addEventListener('scroll', startAudio);