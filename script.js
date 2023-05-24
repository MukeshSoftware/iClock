let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date(); 
    date = a.toLocaleDateString(undefined, options);
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('time').innerHTML = time + "<br> on " + date }, 1000);


    function getTimeByContinent(continent) {
        const now = new Date();
        let timeZone;
        switch (continent.toLowerCase()) {
            case 'africa':
              timeZone = 'Africa/Abidjan';
              break;
            case 'asia':
              timeZone = 'Asia/Tokyo';
              break;
            case 'australia':
              timeZone = 'Australia/Sydney';
              break;
            case 'europe':
              timeZone = 'Europe/London';
              break;
            case 'north america':
              timeZone = 'America/New_York';
              break;
            case 'south america':
              timeZone = 'America/Sao_Paulo';
              break;
            default:
              throw new Error('Invalid continent');
          }
  
          return now.toLocaleTimeString('en-US', { timeZone });
        }
  
        const continentSelect = document.getElementById('continent-select');
        const timeDisplay = document.getElementById('time-display');
  
        continentSelect.addEventListener('change', () => {
          const continent = continentSelect.value;
          if (continent) {
            const time = getTimeByContinent(continent);
            timeDisplay.textContent = `The current time in ${continent} is ${time} and Date is ${date}.`;
          } else {
            timeDisplay.textContent = '';
          }
        });
        //   setInterval(()=>{ 
        //   document.getElementById('time-display').innerHTML=`The current Time in ${continent} is ${time} and Date is ${date}.`}, 1000)
        // } 