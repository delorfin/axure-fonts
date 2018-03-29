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
		el.innerHTML = '<span style="font-family: \'semrush-xxs\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-xxs-close': '&#xe900;',
		'icon-xxs-down': '&#xe901;',
		'icon-xxs-dropdown': '&#xe902;',
		'icon-xxs-dropleft': '&#xe903;',
		'icon-xxs-dropright': '&#xe904;',
		'icon-xxs-dropup': '&#xe905;',
		'icon-xxs-left': '&#xe906;',
		'icon-xxs-minus': '&#xe907;',
		'icon-xxs-plus': '&#xe908;',
		'icon-xxs-right': '&#xe909;',
		'icon-xxs-up': '&#xe90a;',
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
		c = c.match(/icon-xxs-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
