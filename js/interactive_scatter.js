const xAxisSelect = document.getElementById("xAxisSelect");


const spec = {
"$schema": "https://vega.github.io/schema/vega-lite/v5.json",
"title": "Infant Mortality Rate",
"width": 800,
"height": 400,
"data": {"url": "https://raw.githubusercontent.com/akanel15/fit3179-hwtask/main/data/world-data-2023.csv"},
"mark": {"type": "point", "filled": true},
"encoding": {
  "y": {"field": "Infant mortality", "type": "quantitative"},
  "x": {"field": c, "type": "quantitative"},
  "tooltip": [
  {"field": "Country", "type": "ordinal", "title": "Country"},
  {"field": "Infant mortality", "type": "quantitative", "title": "Infant mortality"}
  ]
}
}  

xAxisSelect.addEventListener("change", () => {
const selectedOption = xAxisSelect.value;
spec.encoding.x.field = selectedOption;    
vegaEmbed("#vis", spec, embedOptions).then(console.log).catch(console.warn);

});


vegaEmbed("#vis", spec, embedOptions).then(console.log).catch(console.warn);

