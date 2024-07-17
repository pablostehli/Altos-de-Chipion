var size = 0;
var placement = 'point';
function categories_ReddeAguaPotable_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'AGUA - CAÃERÃA EXISTENTE PVC Ã 110 mm C6':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(88,11,244,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'AGUA - CAÃERÃA EXISTENTE PVC Ã 90 mm C6':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(1,9,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'AGUA - CAÃERÃA IMPULSIÃN PVC Ã 75 mm C6':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(1,94,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'AGUA - CE PVC 63 MM':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(1,145,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'AGUA - CE PVC DIAM 50MM':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(12,223,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_ReddeAguaPotable_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Layer");
    var labelText = "";
    size = 0;
    var labelFont = "9.1px \'Ubuntu\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("Layer") !== null) {
        labelText = String(feature.get("Layer"));
    }
    
var style = categories_ReddeAguaPotable_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
