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
		el.innerHTML = '<span style="font-family: \'semrush-m\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-m-alert': '&#xe900;',
		'icon-m-bell': '&#xe901;',
		'icon-m-calendar': '&#xe902;',
		'icon-m-chek': '&#xe903;',
		'icon-m-close': '&#xe904;',
		'icon-m-close2': '&#xe905;',
		'icon-m-document': '&#xe906;',
		'icon-m-download': '&#xe907;',
		'icon-m-dropdown': '&#xe908;',
		'icon-m-dropleft': '&#xe909;',
		'icon-m-dropright': '&#xe90a;',
		'icon-m-dropup': '&#xe90b;',
		'icon-m-edit': '&#xe90c;',
		'icon-m-export': '&#xe90d;',
		'icon-m-group': '&#xe90e;',
		'icon-m-import': '&#xe90f;',
		'icon-m-label': '&#xe910;',
		'icon-m-landscape': '&#xe911;',
		'icon-m-list': '&#xe912;',
		'icon-m-pin': '&#xe913;',
		'icon-m-pinall': '&#xe914;',
		'icon-m-portrait': '&#xe915;',
		'icon-m-question': '&#xe916;',
		'icon-m-search': '&#xe917;',
		'icon-m-speaker': '&#xe918;',
		'icon-m-unpin': '&#xe919;',
		'icon-m-upload': '&#xe91a;',
		'icon-m-return': '&#xe91b;',
		'icon-m-col': '&#xe91c;',
		'icon-m-col2': '&#xe91d;',
		'icon-m-alignleft': '&#xe91e;',
		'icon-m-backlink': '&#xe91f;',
		'icon-m-facebook': '&#xe920;',
		'icon-m-gplus': '&#xe921;',
		'icon-m-instagram': '&#xe922;',
		'icon-m-pagebreak': '&#xe923;',
		'icon-m-pinterest': '&#xe924;',
		'icon-m-telescope': '&#xe925;',
		'icon-m-text': '&#xe926;',
		'icon-m-twitter': '&#xe927;',
		'icon-m-youtube': '&#xe928;',
		'icon-m-picture': '&#xe929;',
		'icon-m-plus': '&#xe92a;',
		'icon-m-user': '&#xe92b;',
		'icon-m-ad_bottom': '&#xe92c;',
		'icon-m-ad_top': '&#xe92d;',
		'icon-m-amp_project': '&#xe92e;',
		'icon-m-attach': '&#xe92f;',
		'icon-m-carousel': '&#xe930;',
		'icon-m-cart': '&#xe931;',
		'icon-m-chat_question': '&#xe932;',
		'icon-m-crown': '&#xe933;',
		'icon-m-cursor_pointer': '&#xe934;',
		'icon-m-education': '&#xe935;',
		'icon-m-favorite': '&#xe936;',
		'icon-m-link_alt': '&#xe937;',
		'icon-m-medal': '&#xe938;',
		'icon-m-news': '&#xe939;',
		'icon-m-organic': '&#xe93a;',
		'icon-m-pictures': '&#xe93b;',
		'icon-m-pin_usd': '&#xe93c;',
		'icon-m-pinmap': '&#xe93d;',
		'icon-m-star': '&#xe93e;',
		'icon-m-video_alt': '&#xe93f;',
		'icon-m-video': '&#xe940;',
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
		c = c.match(/icon-m-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
