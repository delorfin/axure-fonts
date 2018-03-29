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
		el.innerHTML = '<span style="font-family: \'semrush-xs\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-xs-alert': '&#xe900;',
		'icon-xs-android': '&#xe901;',
		'icon-xs-apple': '&#xe902;',
		'icon-xs-bulb': '&#xe903;',
		'icon-xs-chain': '&#xe904;',
		'icon-xs-chart': '&#xe905;',
		'icon-xs-chat': '&#xe906;',
		'icon-xs-chek': '&#xe907;',
		'icon-xs-close': '&#xe908;',
		'icon-xs-delete': '&#xe909;',
		'icon-xs-density': '&#xe90a;',
		'icon-xs-desktop': '&#xe90b;',
		'icon-xs-diagnosis': '&#xe90c;',
		'icon-xs-document': '&#xe90d;',
		'icon-xs-down': '&#xe90e;',
		'icon-xs-download': '&#xe90f;',
		'icon-xs-dropdown': '&#xe910;',
		'icon-xs-dropleft': '&#xe911;',
		'icon-xs-dropright': '&#xe912;',
		'icon-xs-dropup': '&#xe913;',
		'icon-xs-edit': '&#xe914;',
		'icon-xs-export': '&#xe915;',
		'icon-xs-facebook': '&#xe916;',
		'icon-xs-foursquare': '&#xe917;',
		'icon-xs-gplus': '&#xe918;',
		'icon-xs-health': '&#xe919;',
		'icon-xs-hide': '&#xe91a;',
		'icon-xs-home': '&#xe91b;',
		'icon-xs-import': '&#xe91c;',
		'icon-xs-infinity': '&#xe91d;',
		'icon-xs-info': '&#xe91e;',
		'icon-xs-instagram': '&#xe91f;',
		'icon-xs-label': '&#xe920;',
		'icon-xs-left': '&#xe921;',
		'icon-xs-link': '&#xe922;',
		'icon-xs-linkedin': '&#xe923;',
		'icon-xs-list': '&#xe924;',
		'icon-xs-minus': '&#xe925;',
		'icon-xs-mobile': '&#xe926;',
		'icon-xs-pin': '&#xe927;',
		'icon-xs-pinterest': '&#xe928;',
		'icon-xs-plus': '&#xe929;',
		'icon-xs-question': '&#xe92a;',
		'icon-xs-redo': '&#xe92b;',
		'icon-xs-repeat': '&#xe92c;',
		'icon-xs-right': '&#xe92d;',
		'icon-xs-robot': '&#xe92e;',
		'icon-xs-search': '&#xe92f;',
		'icon-xs-settings': '&#xe930;',
		'icon-xs-setup': '&#xe931;',
		'icon-xs-share': '&#xe932;',
		'icon-xs-show': '&#xe933;',
		'icon-xs-sitemap': '&#xe934;',
		'icon-xs-sortdown': '&#xe935;',
		'icon-xs-sortup': '&#xe936;',
		'icon-xs-star': '&#xe937;',
		'icon-xs-table': '&#xe938;',
		'icon-xs-tile': '&#xe939;',
		'icon-xs-twitter': '&#xe93a;',
		'icon-xs-undo': '&#xe93b;',
		'icon-xs-unpin': '&#xe93c;',
		'icon-xs-up': '&#xe93d;',
		'icon-xs-upload': '&#xe93e;',
		'icon-xs-vk': '&#xe93f;',
		'icon-xs-youtube': '&#xe940;',
		'icon-xs-blocked': '&#xe941;',
		'icon-xs-check2': '&#xe942;',
		'icon-xs-crosshair': '&#xe943;',
		'icon-xs-dislike': '&#xe944;',
		'icon-xs-down2': '&#xe945;',
		'icon-xs-drawer': '&#xe946;',
		'icon-xs-export-doc': '&#xe947;',
		'icon-xs-inner': '&#xe948;',
		'icon-xs-instagram2': '&#xe949;',
		'icon-xs-left2': '&#xe94a;',
		'icon-xs-like': '&#xe94b;',
		'icon-xs-list-add': '&#xe94c;',
		'icon-xs-list-check': '&#xe94d;',
		'icon-xs-magicwand': '&#xe94e;',
		'icon-xs-medkit': '&#xe94f;',
		'icon-xs-pause': '&#xe950;',
		'icon-xs-return': '&#xe951;',
		'icon-xs-right2': '&#xe952;',
		'icon-xs-serp': '&#xe953;',
		'icon-xs-source': '&#xe954;',
		'icon-xs-up2': '&#xe955;',
		'icon-xs-user': '&#xe956;',
		'icon-xs-ad': '&#xe957;',
		'icon-xs-alert-2': '&#xe958;',
		'icon-xs-amp-project': '&#xe959;',
		'icon-xs-barchart-stacked': '&#xe95a;',
		'icon-xs-bubblechart': '&#xe95b;',
		'icon-xs-columnchart': '&#xe95c;',
		'icon-xs-heart': '&#xe95d;',
		'icon-xs-linechart': '&#xe95e;',
		'icon-xs-lock': '&#xe95f;',
		'icon-xs-picture': '&#xe960;',
		'icon-xs-piechart': '&#xe961;',
		'icon-xs-reply': '&#xe962;',
		'icon-xs-retweet': '&#xe963;',
		'icon-xs-rewinddown': '&#xe964;',
		'icon-xs-rewindleft': '&#xe965;',
		'icon-xs-rewindright': '&#xe966;',
		'icon-xs-rewindup': '&#xe967;',
		'icon-xs-tablet': '&#xe968;',
		'icon-xs-text': '&#xe969;',
		'icon-xs-value': '&#xe96a;',
		'icon-xs-calendar': '&#xe96b;',
		'icon-xs-export-doc2': '&#xe96c;',
		'icon-xs-magnet': '&#xe96d;',
		'icon-xs-mail': '&#xe96e;',
		'icon-xs-recurring': '&#xe96f;',
		'icon-xs-up22': '&#xe970;',
		'icon-xs-clock': '&#xe971;',
		'icon-xs-list-add-top': '&#xe972;',
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
		c = c.match(/icon-xs-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
