// Setting apiURL to the link to the API to get the weather for Bountiful, UT and have weather units in Imperial for Farenheit
const apiURL ="//api.openweathermap.org/data/2.5/forecast?id=5771826&appid=f090dae7af04c23fbb5202a0ea51132e&units=imperial";

//create date and days of the week
const myDate = new Date();
const dayNumber = myDate.getDay();
const myWeekday = new Array(7);
myWeekday[0] = "Sunday";
myWeekday[1] = "Monday";
myWeekday[2] = "Tuesday";
myWeekday[3] = "Wednesday";
myWeekday[4] = "Thursday";
myWeekday[5] = "Friday";
myWeekday[6] = "Saturday";

//Call the API
fetch(apiURL)
//Say what you want to do with the API data
.then((response) => response.json())
.then((weatherInfo) => {

    //Make sure we can see out API data in the console
    console.log(weatherInfo);
    //Display the city name in the h2 at the top of the page

    let mylist = weatherInfo.list;

    let forecastDayNumber = dayNumber;

    for (i=0; i < mylist.length; i++) {
        let time=mylist[i].dt_txt;

        if (time.includes("21:00:00")) {

            console.log("Found an entry with 21:00:00 in the time. It was report" + i + "from the mylist of 40");

            forecastDayNumber += 1;
            if(forecastDayNumber === 7){forecastDayNumber = 0};

            let theDayName = document.createElement('span');
            theDayName.textContent = myWeekday[forecastDayNumber];


            let theTemp = document.createElement('p');
            theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0";

            let iconCode = weatherInfo.list[i].weather[0].icon;
            let iconPath = "//openweathermap.org/img/wn/" + iconCode + "@2x.png"
            let theIcon = document.createElement('img');
            theIcon.src = iconPath;


            let theDay = document.createElement('div');
            theDay.appendChild(theDayName);
            theDay.appendChild(theTemp)
            theDay.appendChild(theIcon);

            document.getElementById('bountifulWeather').appendChild(theDay);
            let bountful = weatherInfo.city.name;
            document.getElementById('city').textContent = bountful;
            
        }
    }

    })



// //api.openweathermap.org/data/2.5/weather?id={5771826}&appid={f090dae7af04c23fbb5202a0ea51132e}&units=imperial
// const icon_path = "//openweathermap.org/img/w/"+iconCode+".png";
// updated weather icons = "//openweathermap.org/img/wn/" + iconCode + "@2x.png"
/* forecastDayNumber += 1;

if (forecastDayNumber === 7) {
    forecastDayNumber = 0;
} */