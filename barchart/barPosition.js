var dataText = thisComp.layer("data").text.sourceText.value;
var dataIndex = thisLayer.index - thisComp.layer("data").index - 1;
var barWidth = width * 0.06;
var gap = width * 0.03;
var p = 100 + (barWidth + gap) * dataIndex;
[p, height];
