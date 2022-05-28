console.log("hola mundo");

var percentageComplete = 0.9;
var strokeDashOffsetValue = 100 - (percentageComplete * 100);
var progressBar = $(".js-progress-bar");
progressBar.css("stroke-dashoffset", strokeDashOffsetValue);