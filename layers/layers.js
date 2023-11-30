var wms_layers = [];


        var lyr_basemapgooglesatelit_0 = new ol.layer.Tile({
            'title': 'basemap google satelit',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_indeks_bahaya_tsunami_1 = new ol.format.GeoJSON();
var features_indeks_bahaya_tsunami_1 = format_indeks_bahaya_tsunami_1.readFeatures(json_indeks_bahaya_tsunami_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_indeks_bahaya_tsunami_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_indeks_bahaya_tsunami_1.addFeatures(features_indeks_bahaya_tsunami_1);
var lyr_indeks_bahaya_tsunami_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_indeks_bahaya_tsunami_1, 
                style: style_indeks_bahaya_tsunami_1,
                interactive: true,
    title: 'indeks_bahaya_tsunami<br />\
    <img src="styles/legend/indeks_bahaya_tsunami_1_0.png" /> Bahaya Rendah<br />\
    <img src="styles/legend/indeks_bahaya_tsunami_1_1.png" /> Bahaya Sedang<br />\
    <img src="styles/legend/indeks_bahaya_tsunami_1_2.png" /> Bahaya Tinggi<br />'
        });
var format_indeks_bahaya_banjir_2 = new ol.format.GeoJSON();
var features_indeks_bahaya_banjir_2 = format_indeks_bahaya_banjir_2.readFeatures(json_indeks_bahaya_banjir_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_indeks_bahaya_banjir_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_indeks_bahaya_banjir_2.addFeatures(features_indeks_bahaya_banjir_2);
var lyr_indeks_bahaya_banjir_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_indeks_bahaya_banjir_2, 
                style: style_indeks_bahaya_banjir_2,
                interactive: true,
    title: 'indeks_bahaya_banjir<br />\
    <img src="styles/legend/indeks_bahaya_banjir_2_0.png" /> Bahaya Rendah<br />\
    <img src="styles/legend/indeks_bahaya_banjir_2_1.png" /> Bahaya Sedang<br />\
    <img src="styles/legend/indeks_bahaya_banjir_2_2.png" /> Bahaya Tinggi<br />'
        });

lyr_basemapgooglesatelit_0.setVisible(true);lyr_indeks_bahaya_tsunami_1.setVisible(false);lyr_indeks_bahaya_banjir_2.setVisible(true);
var layersList = [lyr_basemapgooglesatelit_0,lyr_indeks_bahaya_tsunami_1,lyr_indeks_bahaya_banjir_2];
lyr_indeks_bahaya_tsunami_1.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_indeks_bahaya_banjir_2.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_indeks_bahaya_tsunami_1.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_indeks_bahaya_banjir_2.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_indeks_bahaya_tsunami_1.set('fieldLabels', {'Id': 'inline label', 'gridcode': 'inline label', });
lyr_indeks_bahaya_banjir_2.set('fieldLabels', {'Id': 'inline label', 'gridcode': 'inline label', });
lyr_indeks_bahaya_banjir_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});