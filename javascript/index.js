function updateTime() {
  //Georgia
  let chicagoElement = document.querySelector("#chicago");
  let chicagoDateElement = chicagoElement.querySelector(".date");
  let chicagoTimeElement = chicagoElement.querySelector(".time");
  let chicagoTime = moment().tz("America/Chicago");

  chicagoDateElement.innerHTML = chicagoTime.format("MMMM Do YYYY");
  chicagoTimeElement.innerHTML = chicagoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Yukon
  let yukonElement = document.querySelector("#yukon");
  let yukonDateElement = yukonElement.querySelector(".date");
  let yukonTimeElement = yukonElement.querySelector(".time");
  let yukonTime = moment().tz("Canada/Yukon");

  yukonDateElement.innerHTML = yukonTime.format("MMMM Do YYYY");
  yukonTimeElement.innerHTML = yukonTime.format("h:mm:ss [<small>]A[</small>]");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("-", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )} </small>
      </div>
    </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#city");
citiesSelectElement = addEventListener("change", updateCity);
