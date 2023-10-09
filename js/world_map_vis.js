const spec2 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "Countries Tax Rate",
    "width": 800,
    "height": 400,

    "projection": { "type": "equirectangular" },
    "layer": [
        {
            "mark": { "type": "geoshape", "fill": "lightgray", "stroke": "white" }
        },
        {
            "data": {
                "url": "https://raw.githubusercontent.com/FIT3179/Vega-Lite/main/7_others/oceans.topojson",
                "format": { "type": "topojson", "feature": "oceans" }
            },
            "mark": { "type": "geoshape", "fill": "skyblue" }
        },
        {
            "data": {
                "url": "https://raw.githubusercontent.com/akanel15/fit3179-hwtask/main/data/world-data-2023.csv",
                "format": { "type": "csv" }
            },
            "mark": {
                "type": "circle",
                "color": "green"
            },
            "encoding": {
                "longitude": { "field": "Longitude", "type": "quantitative" },
                "latitude": { "field": "Latitude", "type": "quantitative" },
                "tooltip": [
                    {"field": "Country", "type": "ordinal", "title": "Country"},
                    { "field": "Birth Rate", "type": "nominal", "title": "Tax revenue (%)"}
                ]
            }
        }
    ],
    "config": {}
};
  vegaEmbed("#map", spec2, {mode: "vega-lite"}).then(console.log).catch(console.warn);
