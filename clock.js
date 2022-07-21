// First we must get a Name
let userName = prompt("Please Write Name!")
let info = document.querySelector("#myName")
info.innerHTML = `${userName}`

// We need to write each day of a week
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
function showTime() {
    var date = new Date();
    var day = days[date.getDay()];
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    //We are gonna write time to screen now
    let wrtieTime = document.querySelector("#myClock");
    wrtieTime.innerHTML = hour + ":" + minute + ":" + second + " " + day;
}
//Now we need reflesh our watch every second
const time = setInterval(showTime, 1000)
document.querySelector("#myClock").innerHTML = time;