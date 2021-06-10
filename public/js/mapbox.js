/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZ3VzdGF2b2ZkcyIsImEiOiJja3BsZnl6Z2oxMml2MnFvZ3dxYXVhYmxzIn0.lYYYN4TbQMNk0X6_zst0VQ';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/gustavofds/ckplg5bz40lnv17ocyk0g1dn5',
    scrollZoom: false,
    // center: [-118.11, 34.11],
    // zoom: 10,
    // interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add Marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
