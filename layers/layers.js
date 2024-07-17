var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_ReddeAguaPotable_2 = new ol.format.GeoJSON();
var features_ReddeAguaPotable_2 = format_ReddeAguaPotable_2.readFeatures(json_ReddeAguaPotable_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReddeAguaPotable_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReddeAguaPotable_2.addFeatures(features_ReddeAguaPotable_2);
var lyr_ReddeAguaPotable_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ReddeAguaPotable_2, 
                style: style_ReddeAguaPotable_2,
                interactive: false,
    title: 'Red de Agua Potable<br />\
    <img src="styles/legend/ReddeAguaPotable_2_0.png" /> CAÑERIA PVC 110 mm C6<br />\
    <img src="styles/legend/ReddeAguaPotable_2_1.png" /> CAÑERIA PVC 90 mm C6<br />\
    <img src="styles/legend/ReddeAguaPotable_2_2.png" /> CAÑERIA PVC 75 mm C6<br />\
    <img src="styles/legend/ReddeAguaPotable_2_3.png" /> CAÑERIA - CE PVC 63 MM<br />\
    <img src="styles/legend/ReddeAguaPotable_2_4.png" /> CAÑERIA - CE PVC DIAM 50MM<br />'
        });
var format_ReddeGasNatural_3 = new ol.format.GeoJSON();
var features_ReddeGasNatural_3 = format_ReddeGasNatural_3.readFeatures(json_ReddeGasNatural_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReddeGasNatural_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReddeGasNatural_3.addFeatures(features_ReddeGasNatural_3);
var lyr_ReddeGasNatural_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ReddeGasNatural_3, 
                style: style_ReddeGasNatural_3,
                interactive: false,
    title: 'Red de Gas Natural<br />\
    <img src="styles/legend/ReddeGasNatural_3_0.png" /> Cañeria de GAS 40 mm<br />\
    <img src="styles/legend/ReddeGasNatural_3_1.png" /> Cañeria de Gas 50 mm<br />\
    <img src="styles/legend/ReddeGasNatural_3_2.png" /> Cañeria de Gas 63 mm<br />\
    <img src="styles/legend/ReddeGasNatural_3_3.png" /> Cañeria de Gas 90 mm<br />'
        });
var format_CuencasUrbanas_4 = new ol.format.GeoJSON();
var features_CuencasUrbanas_4 = format_CuencasUrbanas_4.readFeatures(json_CuencasUrbanas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CuencasUrbanas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CuencasUrbanas_4.addFeatures(features_CuencasUrbanas_4);
var lyr_CuencasUrbanas_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CuencasUrbanas_4, 
                style: style_CuencasUrbanas_4,
                interactive: false,
    title: 'Cuencas Urbanas<br />\
    <img src="styles/legend/CuencasUrbanas_4_0.png" /> Cuenca Suroeste<br />\
    <img src="styles/legend/CuencasUrbanas_4_1.png" /> Cuenca Noroeste<br />\
    <img src="styles/legend/CuencasUrbanas_4_2.png" /> Cuenca Noreste<br />\
    <img src="styles/legend/CuencasUrbanas_4_3.png" /> Cuenca Centro Oeste<br />\
    <img src="styles/legend/CuencasUrbanas_4_4.png" /> Cuenca Sureste<br />'
        });
var format_LimitedeCuencas_5 = new ol.format.GeoJSON();
var features_LimitedeCuencas_5 = format_LimitedeCuencas_5.readFeatures(json_LimitedeCuencas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitedeCuencas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedeCuencas_5.addFeatures(features_LimitedeCuencas_5);
var lyr_LimitedeCuencas_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimitedeCuencas_5, 
                style: style_LimitedeCuencas_5,
                interactive: false,
    title: 'Limite de Cuencas<br />\
    <img src="styles/legend/LimitedeCuencas_5_0.png" /> Limites de Cuencas<br />'
        });
var format_EscurrimientosSuperficiales_6 = new ol.format.GeoJSON();
var features_EscurrimientosSuperficiales_6 = format_EscurrimientosSuperficiales_6.readFeatures(json_EscurrimientosSuperficiales_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EscurrimientosSuperficiales_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EscurrimientosSuperficiales_6.addFeatures(features_EscurrimientosSuperficiales_6);
var lyr_EscurrimientosSuperficiales_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EscurrimientosSuperficiales_6, 
                style: style_EscurrimientosSuperficiales_6,
                interactive: false,
    title: 'Escurrimientos Superficiales<br />\
    <img src="styles/legend/EscurrimientosSuperficiales_6_0.png" /> CC existente<br />\
    <img src="styles/legend/EscurrimientosSuperficiales_6_1.png" /> Direccion Escurrimiento<br />'
        });
var format_Amanzanamiento_7 = new ol.format.GeoJSON();
var features_Amanzanamiento_7 = format_Amanzanamiento_7.readFeatures(json_Amanzanamiento_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Amanzanamiento_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Amanzanamiento_7.addFeatures(features_Amanzanamiento_7);
var lyr_Amanzanamiento_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Amanzanamiento_7, 
                style: style_Amanzanamiento_7,
                interactive: false,
    title: 'Amanzanamiento<br />\
    <img src="styles/legend/Amanzanamiento_7_0.png" /> Manzana<br />'
        });

lyr_GoogleHybrid_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_ReddeAguaPotable_2.setVisible(true);lyr_ReddeGasNatural_3.setVisible(true);lyr_CuencasUrbanas_4.setVisible(true);lyr_LimitedeCuencas_5.setVisible(true);lyr_EscurrimientosSuperficiales_6.setVisible(true);lyr_Amanzanamiento_7.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_GoogleSatellite_1,lyr_ReddeAguaPotable_2,lyr_ReddeGasNatural_3,lyr_CuencasUrbanas_4,lyr_LimitedeCuencas_5,lyr_EscurrimientosSuperficiales_6,lyr_Amanzanamiento_7];
lyr_ReddeAguaPotable_2.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ReddeGasNatural_3.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_CuencasUrbanas_4.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_LimitedeCuencas_5.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_EscurrimientosSuperficiales_6.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Amanzanamiento_7.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ReddeAguaPotable_2.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_ReddeGasNatural_3.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_CuencasUrbanas_4.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_LimitedeCuencas_5.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_EscurrimientosSuperficiales_6.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Amanzanamiento_7.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_ReddeAguaPotable_2.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ReddeGasNatural_3.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_CuencasUrbanas_4.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_LimitedeCuencas_5.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_EscurrimientosSuperficiales_6.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_Amanzanamiento_7.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_Amanzanamiento_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});