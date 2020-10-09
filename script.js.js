setInterval(showTime, 1000); 
function showTime() { 
    let time = new Date(); 
    let year = time.getFullYear();
    let month= time.getMonth();
    let date= time.getDate();
    let hour = time.getHours(); 
    let min = time.getMinutes(); 
    let sec = time.getSeconds(); 
    am_pm = "AM";
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
    ]; 
  
    if (hour > 12) { 
        hour -= 12; 
        am_pm = "PM"; 
    } 
    if (hour == 0) { 
        hr = 12; 
        am_pm = "AM"; 
    } 
  
    hour = hour < 10 ? "0" + hour : hour; 
    min = min < 10 ? "0" + min : min; 
    sec = sec < 10 ? "0" + sec : sec; 
    
    let currentDate=year +","+date+" "+monthNames[month].substring(0,3);

    let currentTime = hour + ":" 
            + min + ":" + sec + am_pm;
    document.getElementById("time1") 
            .innerHTML = currentDate; 
    document.getElementById("time2") 
            .innerHTML = currentTime; 
} 
showTime(); 