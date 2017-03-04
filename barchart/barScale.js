var dataText = thisComp.layer("data").text.sourceText.value;
var data = eval(dataText);
var dataIndex = thisLayer.index - thisComp.layer("data").index - 1;
var sum = 0;
for(var i = 0; i < data.length; i++){
	sum = sum + data[i];
}
var h = data[dataIndex]/sum * 100 *.8;
[6, linear(time, 0, 2, 0, h)];
