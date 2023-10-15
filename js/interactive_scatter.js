const xAxisSelect = document.getElementById("xAxisSelect");

const emojiMapping = {
    'United States': '🇺🇸',
    'Canada': '🇨🇦',
    'United Kingdom': '🇬🇧',
    'Australia': '🇦🇺',
    'France': '🇫🇷',
    'Germany': '🇩🇪',
    'Japan': '🇯🇵',
    'China': '🇨🇳',
    'India': '🇮🇳',
    'Brazil': '🇧🇷',
    'Russia': '🇷🇺',
    'South Africa': '🇿🇦'
  };


const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "Infant Mortality Rate",
    "width": 800,
    "height": 400,
    "data": {"url": "https://raw.githubusercontent.com/akanel15/fit3179-hwtask/main/data/world-data-2023.csv"},

    "layer": [
        {
          "mark": {"type": "point", "filled": true},
          "encoding": {
            "y": {"field": "Infant mortality", "type": "quantitative"},
            "x": {"field": "Physicians per thousand", "type": "quantitative"},
            "tooltip": [
              {"field": "Country", "type": "ordinal", "title": "Country"},
              {"field": "Infant mortality", "type": "quantitative", "title": "Infant mortality"}
            ]
          }
        },
        {
            "mark": {"type": "text", "baseline": "middle"},
            "transform": [
              {
                "filter": "datum.Country == 'United States'",
                "calculate": "{'United States': '🐄'}[datum.Country]",
                "as": "emoji"
              }],
            "encoding": {
            "y": {"field": "Infant mortality", "type": "quantitative"},
            "x": {"field": "Physicians per thousand", "type": "quantitative"}
            },
            "text": {"field": "emoji", "type": "nominal"}
            
        }
      ]
    };

xAxisSelect.addEventListener("change", () => {
const selectedOption = xAxisSelect.value;
spec.layer[0].encoding.x.field = selectedOption; 
spec.layer[0].encoding.x.title = selectedOption;
spec.layer[1].encoding.x.field = selectedOption;  
vegaEmbed("#vis", spec, {mode: "vega-lite"}).then(console.log).catch(console.warn);

});


vegaEmbed("#vis", spec, {mode: "vega-lite"}).then(console.log).catch(console.warn);

// Path: js/interactive_scatter.js