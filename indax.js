setInterval(()=>{ 
    var dt = new Date();
    hour = dt.getHours();
    sec = dt.getSeconds();
    min = dt.getMinutes();
    d = dt.getDate()
    m = dt.getMonth()
    y = dt.getFullYear()
    document.getElementById('date-time').innerHTML=`${d}-${m}-${y} and Time ${hour}:${min}:${sec} In India`}, 1000)