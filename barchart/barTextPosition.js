var dataText = thisComp.layer("data").text.sourceText.value;
var data = eval(dataText);
var dataIndex = thisLayer.index - thisComp.layer("endmarker").index - 1;
var barWidth = width * 0.06;
var gap = width * 0.03;
var x = 100 + gap + (barWidth + gap) * dataIndex;
var sum = 0;
for(var i = 0; i < data.length; i++){
	sum = sum + data[i];
}
var y = height -5 - (height * data[dataIndex] / sum * 0.8);
[x, linear(time, 0, 2, height, y)];
