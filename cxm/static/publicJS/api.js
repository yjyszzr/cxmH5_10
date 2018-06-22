$(window).resize(function () {
	if (document.activeElement.tagName === 'INPUT') {
		document.activeElement.scrollIntoView({
			behavior: "smooth"
		})
	}
});
var baseUrl = 'https://api.caixiaomi.net/api/'
// var baseUrl = 'http://39.106.18.39:8765/api/'