var redLight = 'Red';
var yellowLight = 'Yellow';
var greenLight = 'Green';
var currentLightColor = redLight;

if (currentLightColor === greenLight) {
  console.log("The light is Green");
} else if (currentLightColor === yellowLight) {
  console.log("The light is Yellow");
} else if (currentLightColor === redLight) {
  console.log("The light is Red");
} else {
  console.log("Invalid light color");
}

if (!(currentLightColor === redLight)) {
  console.log("The light is NOT red");
}

if (currentLightColor === redLight || currentLightColor === yellowLight) {
  console.log("Caution! Either stop or slow down.");
}
if (!(currentLightColor === greenLight) && (currentLightColor === yellowLight || currentLightColor === redLight)) {
  console.log("You cannot go!");
}