import { useRef, useLayoutEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken = import.meta.env.PUBLIC_MAPBOX_API_KEY;

export const MapView = () => {
	const { Map, Marker, Popup, NavigationControl } = mapboxgl;
	const mapContainer = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const map = new Map({
			container: mapContainer.current!,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [-89.964546, 34.618721],
			zoom: 4,
			maxZoom: 18,
		});

		const popupMainOffice = new Popup({
			offset: 25,
		}).setHTML('<b>Main Office.</b>');

		const popupOfficeII = new Popup({
			offset: 25,
		}).setHTML('<b>Office II.</b>');

		const markerOne = new Marker()
			.setLngLat([-83.99153, 35.95246])
			.setPopup(popupMainOffice)
			.addTo(map);

		const markerTwo = new Marker()
			.setLngLat([-97.82751, 29.89743])
			.setPopup(popupOfficeII)
			.addTo(map);

		markerOne.getElement().addEventListener('click', () => {
			map.flyTo({
				center: [-83.99153, 35.95246],
				zoom: 16,
				speed: 2,
			});
		});

		markerTwo.getElement().addEventListener('click', () => {
			map.flyTo({
				center: [-97.82751, 29.89743],
				zoom: 16,
				speed: 2,
			});
		});

		map.addControl(
			new NavigationControl({
				showCompass: false,
			}),
			'top-left'
		);
	});

	return (
		<div
			data-aos='zoom-out'
			ref={mapContainer}
			className='h-[600px] my-[10rem]'
		/>
	);
};
