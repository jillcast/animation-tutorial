var dataText = thisComp.layer("data").text.sourceText.value;
var data = eval(dataText);
var dataIndex = thisLayer.index - thisComp.layer("endmarker").index - 1;
Math.floor(linear(time, 0, 2, 0, data[dataIndex]));
