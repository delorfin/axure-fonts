/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'semrush-l\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-l-book': '&#xe900;',
		'icon-l-chek': '&#xe901;',
		'icon-l-drop': '&#xe902;',
		'icon-l-dropdoc': '&#xe903;',
		'icon-l-droplogo': '&#xe904;',
		'icon-l-edit': '&#xe905;',
		'icon-l-faq': '&#xe906;',
		'icon-l-sent': '&#xe907;',
		'icon-l-video-placehplder': '&#xe908;',
		'icon-l-video': '&#xe909;',
		'icon-l-documenthappy': '&#xe90a;',
		'icon-l-documentsad': '&#xe90b;',
		'icon-l-add-campaign': '&#xe90c;',
		'icon-l-backlink': '&#xe90d;',
		'icon-l-dropleft': '&#xe90e;',
		'icon-l-dropright': '&#xe90f;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-l-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
