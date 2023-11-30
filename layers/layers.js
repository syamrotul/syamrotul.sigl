var wms_layers = [];

var format_administrasisurabaya_0 = new ol.format.GeoJSON();
var features_administrasisurabaya_0 = format_administrasisurabaya_0.readFeatures(json_administrasisurabaya_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_administrasisurabaya_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_administrasisurabaya_0.addFeatures(features_administrasisurabaya_0);
var lyr_administrasisurabaya_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_administrasisurabaya_0, 
                style: style_administrasisurabaya_0,
                interactive: true,
                title: '<img src="styles/legend/administrasisurabaya_0.png" /> administrasi surabaya'
            });
var format_SURABAYA_1 = new ol.format.GeoJSON();
var features_SURABAYA_1 = format_SURABAYA_1.readFeatures(json_SURABAYA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SURABAYA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SURABAYA_1.addFeatures(features_SURABAYA_1);
var lyr_SURABAYA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SURABAYA_1, 
                style: style_SURABAYA_1,
                interactive: true,
    title: 'SURABAYA<br />\
    <img src="styles/legend/SURABAYA_1_0.png" /> ASEMROWO<br />\
    <img src="styles/legend/SURABAYA_1_1.png" /> BENOWO<br />\
    <img src="styles/legend/SURABAYA_1_2.png" /> BUBUTAN<br />\
    <img src="styles/legend/SURABAYA_1_3.png" /> CERME<br />\
    <img src="styles/legend/SURABAYA_1_4.png" /> DRIYOREJO<br />\
    <img src="styles/legend/SURABAYA_1_5.png" /> DUKUHPAKIS<br />\
    <img src="styles/legend/SURABAYA_1_6.png" /> GAYUNGAN<br />\
    <img src="styles/legend/SURABAYA_1_7.png" /> GENTENG<br />\
    <img src="styles/legend/SURABAYA_1_8.png" /> GUBENG<br />\
    <img src="styles/legend/SURABAYA_1_9.png" /> GUNUNGANYAR<br />\
    <img src="styles/legend/SURABAYA_1_10.png" /> JAMBANGAN<br />\
    <img src="styles/legend/SURABAYA_1_11.png" /> KARANGPILANG<br />\
    <img src="styles/legend/SURABAYA_1_12.png" /> KEBOMAS<br />\
    <img src="styles/legend/SURABAYA_1_13.png" /> KENJERAN<br />\
    <img src="styles/legend/SURABAYA_1_14.png" /> KREMBANGAN<br />\
    <img src="styles/legend/SURABAYA_1_15.png" /> LAKARSANTRI<br />\
    <img src="styles/legend/SURABAYA_1_16.png" /> MENGANTI<br />\
    <img src="styles/legend/SURABAYA_1_17.png" /> MULYOREJO<br />\
    <img src="styles/legend/SURABAYA_1_18.png" /> PABEANCANTIKAN<br />\
    <img src="styles/legend/SURABAYA_1_19.png" /> RUNGKUT<br />\
    <img src="styles/legend/SURABAYA_1_20.png" /> SAWAHAN<br />\
    <img src="styles/legend/SURABAYA_1_21.png" /> SEMAMPIR<br />\
    <img src="styles/legend/SURABAYA_1_22.png" /> SIMOKERTO<br />\
    <img src="styles/legend/SURABAYA_1_23.png" /> SUKOLILO<br />\
    <img src="styles/legend/SURABAYA_1_24.png" /> SUKOMANUNGGAL<br />\
    <img src="styles/legend/SURABAYA_1_25.png" /> TAMAN<br />\
    <img src="styles/legend/SURABAYA_1_26.png" /> TAMBAKSARI<br />\
    <img src="styles/legend/SURABAYA_1_27.png" /> TANDES<br />\
    <img src="styles/legend/SURABAYA_1_28.png" /> TEGALSARI<br />\
    <img src="styles/legend/SURABAYA_1_29.png" /> TENGGILISMEJOYO<br />\
    <img src="styles/legend/SURABAYA_1_30.png" /> WARU<br />\
    <img src="styles/legend/SURABAYA_1_31.png" /> WIYUNG<br />\
    <img src="styles/legend/SURABAYA_1_32.png" /> WONOCOLO<br />\
    <img src="styles/legend/SURABAYA_1_33.png" /> WONOKROMO<br />'
        });

lyr_administrasisurabaya_0.setVisible(true);lyr_SURABAYA_1.setVisible(true);
var layersList = [lyr_administrasisurabaya_0,lyr_SURABAYA_1];
lyr_administrasisurabaya_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SURABAYA_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_administrasisurabaya_0.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_SURABAYA_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_administrasisurabaya_0.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'inline label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SURABAYA_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SURABAYA_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});