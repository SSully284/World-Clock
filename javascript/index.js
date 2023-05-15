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

updateTime();
setInterval(updateTime, 1000);
