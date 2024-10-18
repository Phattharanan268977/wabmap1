var wms_layers = [];


        var lyr_GGmaps_0 = new ol.layer.Tile({
            'title': 'GG maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GGRoads_1 = new ol.layer.Tile({
            'title': 'GG Roads',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });
var format_male_cleaned_2 = new ol.format.GeoJSON();
var features_male_cleaned_2 = format_male_cleaned_2.readFeatures(json_male_cleaned_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_male_cleaned_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_male_cleaned_2.addFeatures(features_male_cleaned_2);
var lyr_male_cleaned_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_male_cleaned_2, 
                style: style_male_cleaned_2,
                popuplayertitle: "male_cleaned",
                interactive: true,
                title: '<img src="styles/legend/male_cleaned_2.png" /> male_cleaned'
            });
var format_female_cleaned_3 = new ol.format.GeoJSON();
var features_female_cleaned_3 = format_female_cleaned_3.readFeatures(json_female_cleaned_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_female_cleaned_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_female_cleaned_3.addFeatures(features_female_cleaned_3);
var lyr_female_cleaned_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_female_cleaned_3, 
                style: style_female_cleaned_3,
                popuplayertitle: "female_cleaned",
                interactive: true,
                title: '<img src="styles/legend/female_cleaned_3.png" /> female_cleaned'
            });

lyr_GGmaps_0.setVisible(true);lyr_GGRoads_1.setVisible(true);lyr_male_cleaned_2.setVisible(true);lyr_female_cleaned_3.setVisible(true);
var layersList = [lyr_GGmaps_0,lyr_GGRoads_1,lyr_male_cleaned_2,lyr_female_cleaned_3];
lyr_male_cleaned_2.set('fieldAliases', {'timestamp': 'timestamp', 'service': 'service', 'reg_type': 'reg_type', 'prefix': 'prefix', 'sex': 'sex', 'work': 'work', 'income': 'income', 'education': 'education', 'year': 'year', 'village_no': 'village_no', 'village': 'village', 'road': 'road', 'alley': 'alley', 'district': 'district', 'amphoe': 'amphoe', 'province': 'province', 'zipcode': 'zipcode', 'congenital': 'congenital', 'congenit_1': 'congenit_1', 'disability': 'disability', 'disabili_1': 'disabili_1', 'environmen': 'environmen', 'treatment_': 'treatment_', 'treatmen_1': 'treatmen_1', 'requiremen': 'requiremen', 'requirem_1': 'requirem_1', 'date_start': 'date_start', 'date_end': 'date_end', 'occupation': 'occupation', 'relationsh': 'relationsh', 'ability': 'ability', 'vaccine': 'vaccine', 'num_vaccin': 'num_vaccin', 'vaccine_ty': 'vaccine_ty', 'lat': 'lat', 'long': 'long', 'status': 'status', });
lyr_female_cleaned_3.set('fieldAliases', {'timestamp': 'timestamp', 'service': 'service', 'reg_type': 'reg_type', 'prefix': 'prefix', 'sex': 'sex', 'work': 'work', 'income': 'income', 'education': 'education', 'year': 'year', 'village_no': 'village_no', 'village': 'village', 'road': 'road', 'alley': 'alley', 'district': 'district', 'amphoe': 'amphoe', 'province': 'province', 'zipcode': 'zipcode', 'congenital': 'congenital', 'congenit_1': 'congenit_1', 'disability': 'disability', 'disabili_1': 'disabili_1', 'environmen': 'environmen', 'treatment_': 'treatment_', 'treatmen_1': 'treatmen_1', 'requiremen': 'requiremen', 'requirem_1': 'requirem_1', 'date_start': 'date_start', 'date_end': 'date_end', 'occupation': 'occupation', 'relationsh': 'relationsh', 'ability': 'ability', 'vaccine': 'vaccine', 'num_vaccin': 'num_vaccin', 'lat': 'lat', 'long': 'long', 'status': 'status', });
lyr_male_cleaned_2.set('fieldImages', {'timestamp': '', 'service': '', 'reg_type': '', 'prefix': '', 'sex': '', 'work': '', 'income': '', 'education': '', 'year': '', 'village_no': '', 'village': '', 'road': '', 'alley': '', 'district': '', 'amphoe': '', 'province': '', 'zipcode': '', 'congenital': '', 'congenit_1': '', 'disability': '', 'disabili_1': '', 'environmen': '', 'treatment_': '', 'treatmen_1': '', 'requiremen': '', 'requirem_1': '', 'date_start': '', 'date_end': '', 'occupation': '', 'relationsh': '', 'ability': '', 'vaccine': '', 'num_vaccin': '', 'vaccine_ty': '', 'lat': '', 'long': '', 'status': '', });
lyr_female_cleaned_3.set('fieldImages', {'timestamp': '', 'service': '', 'reg_type': '', 'prefix': '', 'sex': '', 'work': '', 'income': '', 'education': '', 'year': '', 'village_no': '', 'village': '', 'road': '', 'alley': '', 'district': '', 'amphoe': '', 'province': '', 'zipcode': '', 'congenital': '', 'congenit_1': '', 'disability': '', 'disabili_1': '', 'environmen': '', 'treatment_': '', 'treatmen_1': '', 'requiremen': '', 'requirem_1': '', 'date_start': '', 'date_end': '', 'occupation': '', 'relationsh': '', 'ability': '', 'vaccine': '', 'num_vaccin': '', 'lat': '', 'long': '', 'status': '', });
lyr_male_cleaned_2.set('fieldLabels', {'timestamp': 'inline label - always visible', 'service': 'inline label - always visible', 'reg_type': 'inline label - always visible', 'prefix': 'inline label - always visible', 'sex': 'inline label - always visible', 'work': 'inline label - always visible', 'income': 'inline label - always visible', 'education': 'inline label - always visible', 'year': 'inline label - always visible', 'village_no': 'inline label - always visible', 'village': 'inline label - always visible', 'road': 'inline label - always visible', 'alley': 'inline label - always visible', 'district': 'inline label - always visible', 'amphoe': 'inline label - always visible', 'province': 'inline label - always visible', 'zipcode': 'inline label - always visible', 'congenital': 'inline label - always visible', 'congenit_1': 'inline label - always visible', 'disability': 'inline label - always visible', 'disabili_1': 'inline label - always visible', 'environmen': 'inline label - always visible', 'treatment_': 'inline label - always visible', 'treatmen_1': 'inline label - always visible', 'requiremen': 'inline label - always visible', 'requirem_1': 'inline label - always visible', 'date_start': 'inline label - always visible', 'date_end': 'inline label - always visible', 'occupation': 'inline label - always visible', 'relationsh': 'inline label - always visible', 'ability': 'inline label - always visible', 'vaccine': 'inline label - always visible', 'num_vaccin': 'inline label - always visible', 'vaccine_ty': 'inline label - visible with data', 'lat': 'inline label - always visible', 'long': 'inline label - always visible', 'status': 'inline label - always visible', });
lyr_female_cleaned_3.set('fieldLabels', {'timestamp': 'inline label - always visible', 'service': 'inline label - always visible', 'reg_type': 'inline label - visible with data', 'prefix': 'inline label - always visible', 'sex': 'inline label - always visible', 'work': 'inline label - always visible', 'income': 'inline label - always visible', 'education': 'inline label - always visible', 'year': 'inline label - always visible', 'village_no': 'inline label - always visible', 'village': 'inline label - always visible', 'road': 'inline label - always visible', 'alley': 'inline label - always visible', 'district': 'inline label - always visible', 'amphoe': 'inline label - always visible', 'province': 'inline label - always visible', 'zipcode': 'inline label - always visible', 'congenital': 'inline label - always visible', 'congenit_1': 'inline label - always visible', 'disability': 'inline label - always visible', 'disabili_1': 'inline label - always visible', 'environmen': 'inline label - always visible', 'treatment_': 'inline label - always visible', 'treatmen_1': 'inline label - always visible', 'requiremen': 'inline label - always visible', 'requirem_1': 'inline label - always visible', 'date_start': 'inline label - always visible', 'date_end': 'inline label - always visible', 'occupation': 'inline label - always visible', 'relationsh': 'inline label - always visible', 'ability': 'inline label - always visible', 'vaccine': 'inline label - always visible', 'num_vaccin': 'inline label - always visible', 'lat': 'inline label - always visible', 'long': 'inline label - always visible', 'status': 'inline label - always visible', });
lyr_female_cleaned_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});