function preload() {
	//ask for api
	mapimg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/' + clon + ',' + clat + ',' + zoom + '/' + ww + 'x' + hh + '?access_token=' + ACCESS_TOKEN);
}