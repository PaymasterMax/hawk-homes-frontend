<script lang="ts">
	import Map from 'ol/Map';
	import View from 'ol/View';
	import Feature from 'ol/Feature';
	import { Icon, Style } from 'ol/style';
	import Point from 'ol/geom/Point';
	import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
	import VectorSource from 'ol/source/Vector';
	import OSM from 'ol/source/OSM';
	import { useGeographic } from 'ol/proj';
	import { onMount } from 'svelte';
	onMount(() => {
		console.log('object');
		useGeographic();
		var layer1 = new OSM({
			attributions: '',
			opaque: false,
			url: 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
		});

		var layerChangeSrc = new TileLayer({
			source: layer1
		});

		var view = new View({
			center: [36.85059743498609, -1.2850046858604998],
			zoom: 12,
			minZoom: 9,
			maxZoom: 20,
			extent: [36.7, -2.0, 37.0, -1.15]
		});

		var roadMap = new Map({
			layers: [layerChangeSrc],
			view: view
		});
		roadMap.setTarget('map');

		// Add marker
		var iconFeature, vectorSource, vectorLayer: VectorLayer<VectorSource<Point>>;
		var iconStyle = new Style({
			image: new Icon({
				anchor: [0.5, 32],
				anchorXUnits: 'fraction',
				anchorYUnits: 'pixels',
				src: '/images/marker.png'
			})
		});

		iconFeature = new Feature({
			geometry: new Point([36.837389734636425, -1.3132231404153316])
		});

		iconFeature.setStyle(iconStyle);

		vectorSource = new VectorSource({
			features: [iconFeature]
		});

		vectorLayer = new VectorLayer({
			source: vectorSource
		});
		roadMap.removeLayer(vectorLayer);
		roadMap.addLayer(vectorLayer);
		roadMap.getView().setCenter([36.85059743498609, -1.2850046858604998]);

		// roadMap.on('click', function (event) {
		// 	var location = event.coordinate;
		// 	console.log(location);
		// });
	});
</script>

<div id="map" class="absolute inset-0 w-full h-full " />
