var dataText = thisComp.layer("data").text.sourceText.value;
var data = eval(dataText);
var dataIndex = thisLayer.index - thisComp.layer("data").index - 1;
var w = 0;
for(var i=0; i<= dataIndex; i++){
	w = w+ data[i];
}

[linear(time, 0,2, 0, w), 100];

