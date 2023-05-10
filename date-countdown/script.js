const countTo = "14 Apr 2024";

const formatTime = (t) => (t <10 ? `0${t}`: t) 
const countDown = () => {
  const endDate = new Date(countTo);
  const currentDate = new Date();
  const diff = new Date(endDate - currentDate);

  const days = diff.getDate();
  const hours = diff.getHours();
  const min = diff.getMinutes();
  const sec = diff.getSeconds();

  const res =document.getElementById("countdown");

  res.textContent = `${formatTime(days)} Days ${formatTime(hours)}hrs : ${formatTime(min)}min : ${formatTime(sec)}s `;

  if(diff < 0){
    clearInterval(c);
    res.textContent = 'Happy Tamil New Year!!!'
  }
}

window.addEventListener("load", countDown)

const c = setInterval(() => countDown(),1000)