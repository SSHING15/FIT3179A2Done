var vg_1 = "MAP.vl.json"; 
vegaEmbed("#map_chart", vg_1,{"actions": false}).then(function(result) 
{ // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);    

var vg_2 = "Linechart.vl.json"; 
vegaEmbed("#line_chart", vg_2,{"actions": false}).then(function(result) 
{ // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);    

var vg_3 = "Bubblechart.vl.json"; 
vegaEmbed("#bubble_chart", vg_3,{"actions": false}).then(function(result) 
{ // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);    

var vg_4 = "AREACHART.vl.json"; 
vegaEmbed("#area_chart", vg_4,{"actions": false}).then(function(result) 
{ // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);   

var vg_5 = "Barhcart.vl.json"; 
vegaEmbed("#bar_chart", vg_5,{"actions": false}).then(function(result) 
{ // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);   