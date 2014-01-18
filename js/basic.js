if (typeof $WH == "undefined") {
    var $WH = {}
}
$WH.$E = function (a) {
    if (!a) {
        if (typeof event != "undefined") {
            a = event
        } else {
            return null
        }
    }
    if (a.which) {
        a._button = a.which
    } else {
        a._button = a.button;
        if ($WH.Browser.ie6789 && a._button) {
            if (a._button & 4) {
                a._button = 2
            } else {
                if (a._button & 2) {
                    a._button = 3
                }
            }
        } else {
            a._button = a.button + 1
        }
    }
    a._target = a.target ? a.target : a.srcElement;
    a._wheelDelta = a.wheelDelta ? a.wheelDelta : -a.detail;
    return a
};
$WH.$A = function (c) {
    var e = [];
    for (var d = 0, b = c.length; d < b; ++d) {
        e.push(c[d])
    }
    return e
};
$WH.bindfunc = function () {
    args = $WH.$A(arguments);
    var b = args.shift();
    var a = args.shift();
    return function () {
        return b.apply(a, args.concat($WH.$A(arguments)))
    }
};
$WH.strcmp = function (d, c) {
    if (d == c) {
        return 0
    }
    if (d == null) {
        return -1
    }
    if (c == null) {
        return 1
    }
    var f = parseFloat(d);
    var e = parseFloat(c);
    if (!isNaN(f) && !isNaN(e) && f != e) {
        return f < e ? -1 : 1
    }
    if (typeof d == "string" && typeof c == "string") {
        return d.localeCompare(c)
    }
    return d < c ? -1 : 1
};
$WH.trim = function (a) {
    return a.replace(/(^\s*|\s*$)/g, "")
};
$WH.rtrim = function (c, d) {
    var b = c.length;
    while (--b > 0 && c.charAt(b) == d) {}
    c = c.substring(0, b + 1);
    if (c == d) {
        c = ""
    }
    return c
};
$WH.sprintf = function (b) {
    var a;
    for (a = 1, len = arguments.length; a < len; ++a) {
        b = b.replace("$" + a, arguments[a])
    }
    return b
};
$WH.sprintfa = function (b) {
    var a;
    for (a = 1, len = arguments.length; a < len; ++a) {
        b = b.replace(new RegExp("\\$" + a, "g"), arguments[a])
    }
    return b
};
$WH.sprintfo = function (c) {
    if (typeof c == "object" && c.length) {
        var a = c;
        c = a[0];
        var b;
        for (b = 1; b < a.length; ++b) {
            c = c.replace("$" + b, a[b])
        }
        return c
    }
};
$WH.str_replace = function (e, d, c) {
    while (e.indexOf(d) != -1) {
        e = e.replace(d, c)
    }
    return e
};
$WH.urlencode = function (a) {
    a = encodeURIComponent(a);
    a = $WH.str_replace(a, "+", "%2B");
    return a
};
$WH.urlencode2 = function (a) {
    a = encodeURIComponent(a);
    a = $WH.str_replace(a, "%20", "+");
    a = $WH.str_replace(a, "%3D", "=");
    return a
};
$WH.number_format = function (a) {
    x = ("" + parseFloat(a)).split(".");
    a = x[0];
    x = x.length > 1 ? "." + x[1] : "";
    if (a.length <= 3) {
        return a + x
    }
    return $WH.number_format(a.substr(0, a.length - 3)) + "," + a.substr(a.length - 3) + x
};
$WH.is_array = function (b) {
    return !!(b && b.constructor == Array)
};
$WH.in_array = function (c, g, h, e) {
    if (c == null) {
        return -1
    }
    if (h) {
        return $WH.in_arrayf(c, g, h, e)
    }
    for (var d = e || 0, b = c.length; d < b; ++d) {
        if (c[d] == g) {
            return d
        }
    }
    return -1
};
$WH.in_arrayf = function (c, g, h, e) {
    for (var d = e || 0, b = c.length; d < b; ++d) {
        if (h(c[d]) == g) {
            return d
        }
    }
    return -1
};
$WH.rs = function () {
    var e = $WH.rs.random;
    var b = "";
    for (var a = 0; a < 16; a++) {
        var d = Math.floor(Math.random() * e.length);
        if (a == 0 && d < 11) {
            d += 10
        }
        b += e.substring(d, d + 1)
    }
    return b
};
$WH.rs.random = "0123456789abcdefghiklmnopqrstuvwxyz";
$WH.isset = function (a) {
    return typeof window[a] != "undefined"
};
if (!$WH.isset("console")) {
    console = {
        log: function () {}
    }
}
$WH.array_walk = function (d, h, c) {
    var g;
    for (var e = 0, b = d.length; e < b; ++e) {
        g = h(d[e], c, d, e);
        if (g != null) {
            d[e] = g
        }
    }
};
$WH.array_apply = function (d, h, c) {
    var g;
    for (var e = 0, b = d.length; e < b; ++e) {
        h(d[e], c, d, e)
    }
};
$WH.array_filter = function (c, g) {
    var e = [];
    for (var d = 0, b = c.length; d < b; ++d) {
        if (g(c[d])) {
            e.push(c[d])
        }
    }
    return e
};
$WH.array_index = function (c, e, g, h) {
    if (!$WH.is_array(c)) {
        return false
    }
    if (!c.__R || h) {
        c.__R = {};
        if (!g) {
            g = function (a) {
                return a
            }
        }
        for (var d = 0, b = c.length; d < b; ++d) {
            c.__R[g(c[d])] = d
        }
    }
    return (e == null ? c.__R : !isNaN(c.__R[e]))
};
$WH.array_compare = function (d, c) {
    if (d.length != c.length) {
        return false
    }
    var g = {};
    for (var f = d.length; f >= 0; --f) {
        g[d[f]] = true
    }
    var e = true;
    for (var f = c.length; f >= 0; --f) {
        if (g[c[f]] === undefined) {
            e = false
        }
    }
    return e
};
$WH.array_unique = function (b) {
    var c = [];
    var e = {};
    for (var d = b.length - 1; d >= 0; --d) {
        e[b[d]] = 1
    }
    for (var d in e) {
        c.push(d)
    }
    return c
};
$WH.ge = function (a) {
    if (typeof a != "string") {
        return a
    }
    return document.getElementById(a)
};
$WH.gE = function (a, b) {
    return a.getElementsByTagName(b)
};
$WH.ce = function (d, b, e) {
    var a = document.createElement(d);
    if (b) {
        $WH.cOr(a, b)
    }
    if (e) {
        $WH.ae(a, e)
    }
    return a
};
$WH.de = function (a) {
    if (!a || !a.parentNode) {
        return
    }
    a.parentNode.removeChild(a)
};
$WH.ae = function (a, b) {
    if ($WH.is_array(b)) {
        $WH.array_apply(b, a.appendChild.bind(a));
        return b
    } else {
        return a.appendChild(b)
    }
};
$WH.aef = function (a, b) {
    return a.insertBefore(b, a.firstChild)
};
$WH.ee = function (a, b) {
    if (!b) {
        b = 0
    }
    while (a.childNodes[b]) {
        a.removeChild(a.childNodes[b])
    }
};
$WH.ct = function (a) {
    return document.createTextNode(a)
};
$WH.st = function (a, b) {
    if (a.firstChild && a.firstChild.nodeType == 3) {
        a.firstChild.nodeValue = b
    } else {
        $WH.aef(a, $WH.ct(b))
    }
};
$WH.nw = function (a) {
    a.style.whiteSpace = "nowrap"
};
$WH.rf = function () {
    return false
};
$WH.rf2 = function (a) {
    a = $WH.$E(a);
    if (a.ctrlKey || a.shiftKey || a.altKey || a.metaKey) {
        return
    }
    return false
};
$WH.tb = function () {
    this.blur()
};
$WH.aE = function (b, c, a) {
    if (b.addEventListener) {
        b.addEventListener(c, a, false)
    } else {
        if (b.attachEvent) {
            b.attachEvent("on" + c, a)
        }
    }
};
$WH.dE = function (b, c, a) {
    if (b.removeEventListener) {
        b.removeEventListener(c, a, false)
    } else {
        if (b.detachEvent) {
            b.detachEvent("on" + c, a)
        }
    }
};
$WH.sp = function (a) {
    if (!a) {
        a = event
    }
    if ($WH.Browser.ie6789) {
        a.cancelBubble = true
    } else {
        a.stopPropagation()
    }
};
$WH.sc = function (h, j, d, f, g) {
    var e = new Date();
    var c = h + "=" + escape(d) + "; ";
    e.setDate(e.getDate() + j);
    c += "expires=" + e.toUTCString() + "; ";
    if (f) {
        c += "path=" + f + "; "
    }
    if (g) {
        c += "domain=" + g + "; "
    }
    document.cookie = c;
    $WH.gc(h);
    $WH.gc.C[h] = d
};
$WH.dc = function (a) {
    $WH.sc(a, -1);
    $WH.gc.C[a] = null
};
$WH.gc = function (f) {
    if ($WH.gc.I == null) {
        var e = unescape(document.cookie).split("; ");
        $WH.gc.C = {};
        for (var c = 0, a = e.length; c < a; ++c) {
            var g = e[c].indexOf("="),
                b, d;
            if (g != -1) {
                b = e[c].substr(0, g);
                d = e[c].substr(g + 1)
            } else {
                b = e[c];
                d = ""
            }
            $WH.gc.C[b] = d
        }
        $WH.gc.I = 1
    }
    if (!f) {
        return $WH.gc.C
    } else {
        return $WH.gc.C[f]
    }
};
$WH.eO = function (b) {
    for (var a in b) {
        delete b[a]
    }
};
$WH.dO = function (a) {
    function b() {}
    b.prototype = a;
    return new b
};
$WH.cO = function (c, a) {
    for (var b in a) {
        if (a[b] !== null && typeof a[b] == "object" && a[b].length) {
            c[b] = a[b].slice(0)
        } else {
            c[b] = a[b]
        }
    }
    return c
};
$WH.cOr = function (c, a) {
    for (var b in a) {
        if (typeof a[b] == "object") {
            if (a[b].length) {
                c[b] = a[b].slice(0)
            } else {
                if (!c[b]) {
                    c[b] = {}
                }
                $WH.cOr(c[b], a[b])
            }
        } else {
            c[b] = a[b]
        }
    }
    return c
};
$WH.Browser = {
    ie: !! (window.attachEvent && !window.opera),
    opera: !! window.opera,
    safari: navigator.userAgent.indexOf("Safari") != -1,
    firefox: navigator.userAgent.indexOf("Firefox") != -1,
    chrome: navigator.userAgent.indexOf("Chrome") != -1
};
$WH.Browser.ie9 = $WH.Browser.ie && navigator.userAgent.indexOf("MSIE 9.0") != -1;
$WH.Browser.ie8 = $WH.Browser.ie && navigator.userAgent.indexOf("MSIE 8.0") != -1 && !$WH.Browser.ie9;
$WH.Browser.ie7 = $WH.Browser.ie && navigator.userAgent.indexOf("MSIE 7.0") != -1 && !$WH.Browser.ie8;
$WH.Browser.ie6 = $WH.Browser.ie && navigator.userAgent.indexOf("MSIE 6.0") != -1 && !$WH.Browser.ie7;
$WH.Browser.ie67 = $WH.Browser.ie6 || $WH.Browser.ie7;
$WH.Browser.ie678 = $WH.Browser.ie67 || $WH.Browser.ie8;
$WH.Browser.ie6789 = $WH.Browser.ie678 || $WH.Browser.ie9;
$WH.OS = {
    windows: navigator.appVersion.indexOf("Windows") != -1,
    mac: navigator.appVersion.indexOf("Macintosh") != -1,
    linux: navigator.appVersion.indexOf("Linux") != -1
};
$WH.supportsLocalStorage = function () {
    try {
        return "localStorage" in window && window.localStorage !== null
    } catch (a) {
        return false
    }
};
$WH.g_getWindowSize = function () {
    var a = 0,
        b = 0;
    if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        a = document.documentElement.clientWidth;
        b = document.documentElement.clientHeight
    } else {
        if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
            a = document.body.clientWidth;
            b = document.body.clientHeight
        } else {
            if (typeof window.innerWidth == "number") {
                a = window.innerWidth;
                b = window.innerHeight
            }
        }
    }
    return {
        w: a,
        h: b
    }
};
$WH.g_getScroll = function () {
    var a = 0,
        b = 0;
    if (typeof (window.pageYOffset) == "number") {
        a = window.pageXOffset;
        b = window.pageYOffset
    } else {
        if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
            a = document.body.scrollLeft;
            b = document.body.scrollTop
        } else {
            if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
                a = document.documentElement.scrollLeft;
                b = document.documentElement.scrollTop
            }
        }
    }
    return {
        x: a,
        y: b
    }
};
$WH.g_getCursorPos = function (c) {
    var a, d;
    if (window.innerHeight) {
        a = c.pageX;
        d = c.pageY
    } else {
        var b = $WH.g_getScroll();
        a = c.clientX + b.x;
        d = c.clientY + b.y
    }
    return {
        x: a,
        y: d
    }
};
$WH.g_createReverseLookupJson = function (b) {
    var c = {};
    for (var a in b) {
        c[b[a]] = a
    }
    return c
};
$WH.g_getLocaleFromDomain = function (b) {
    var d = $WH.g_getLocaleFromDomain.L;
    if (b && (typeof b == "string")) {
        var c = b.split(".");
        for (var a = 0; a < c.length; a++) {
            if (c[a] in d) {
                return d[c[a]]
            }
        }
    }
    return 0
};
$WH.g_getLocaleFromDomain.L = {
    fr: 2,
    de: 3,
    es: 6,
    ru: 7,
    pt: 8,
    www: 0
};
$WH.g_getDomainFromLocale = function (d) {
    var g;
    if ($WH.g_getDomainFromLocale.L) {
        g = $WH.g_getDomainFromLocale.L
    } else {
        g = $WH.g_getDomainFromLocale.L = $WH.g_createReverseLookupJson($WH.g_getLocaleFromDomain.L);
        if ((typeof g_dev != "undefined") && g_dev) {
            var f = "",
                b = "",
                e;
            e = document.location.hostname.split(".");
            e.splice(-2, 2);
            for (var a = 0; a < e.length; a++) {
                if (e[a] in $WH.g_getLocaleFromDomain.L) {
                    continue
                }
                if (/staging\d*/.test(e[a])) {
                    f = f + "." + e[a]
                } else {
                    b = b + e[a] + "."
                }
            }
            for (var c in $WH.g_getDomainFromLocale.L) {
                if (c == 0) {
                    $WH.g_getDomainFromLocale.L[c] = (b + f).replace(/\.+/, ".").replace(/^\./, "").replace(/\.$/, "")
                } else {
                    $WH.g_getDomainFromLocale.L[c] = b + $WH.g_getDomainFromLocale.L[c] + f
                }
            }
        }
    }
    return (g[d] ? g[d] : "www")
};
$WH.g_getIdFromTypeName = function (a) {
    var b = $WH.g_getIdFromTypeName.L;
    return (b[a] ? b[a] : -1)
};
$WH.g_getIdFromTypeName.L = {
    npc: 1,
    object: 2,
    item: 3,
    itemset: 4,
    quest: 5,
    spell: 6,
    zone: 7,
    faction: 8,
    pet: 9,
    achievement: 10,
    title: 11,
    statistic: 16,
    "transmog-set": 101,
    petability: 200,
    "hearthstone/card": 220,
    card: 220,
    deck: 104
};
$WH.g_ajaxIshRequest = function (b, d) {
    var c = document.getElementsByTagName("head")[0];
    if (d) {
        $WH.ae(c, $WH.ce("script", {
            type: "text/javascript",
            src: b
        }));
        return
    }
    var a = $WH.g_getGets();
    if (a.refresh != null) {
        if (a.refresh.length) {
            b += ("&refresh=" + a.refresh)
        } else {
            b += "&refresh"
        }
    }
    if (a.locale != null) {
        b += "&locale=" + a.locale
    }
    if (a.ptr != null) {
        b += "&ptr"
    }
    $WH.ae(c, $WH.ce("script", {
        type: "text/javascript",
        src: b,
        charset: "utf8"
    }))
};
$WH.g_getGets = function () {
    if ($WH.g_getGets.C != null) {
        return $WH.g_getGets.C
    }
    var b = $WH.g_getQueryString();
    var a = $WH.g_parseQueryString(b);
    $WH.g_getGets.C = a;
    return a
};
$WH.g_getQueryString = function () {
    var a = "";
    if (location.pathname) {
        a += location.pathname.substr(1)
    }
    if (location.search) {
        if (location.pathname) {
            a += "&"
        }
        a += location.search.substr(1)
    }
    return a
};
$WH.g_parseQueryString = function (e) {
    e = decodeURIComponent(e);
    var d = e.split("&");
    var c = {};
    for (var b = 0, a = d.length; b < a; ++b) {
        $WH.g_splitQueryParam(d[b], c)
    }
    return c
};
$WH.g_splitQueryParam = function (c, d) {
    var e = c.indexOf("=");
    var a;
    var b;
    if (e != -1) {
        a = c.substr(0, e);
        b = c.substr(e + 1)
    } else {
        a = c;
        b = ""
    }
    d[a] = b
};
$WH.g_createRect = function (d, c, a, b) {
    return {
        l: d,
        t: c,
        r: d + a,
        b: c + b
    }
};
$WH.g_intersectRect = function (d, c) {
    return !(d.l >= c.r || c.l >= d.r || d.t >= c.b || c.t >= d.b)
};
$WH.g_isRemote = function () {
    return $WH.g_getSite() == "remote"
};
$WH.g_isWowhead = function () {
    return typeof g_wowhead != "undefined" && g_wowhead
};
$WH.g_isHearthhead = function () {
    return typeof g_hearthhead != "undefined" && g_hearthhead
};
$WH.g_isThottbot = function () {
    return typeof g_thottbot != "undefined" && g_thottbot
};
$WH.g_getSite = function () {
    if ($WH.g_isWowhead()) {
        return "wowhead"
    }
    if ($WH.g_isHearthhead()) {
        return "hearthhead"
    }
    if ($WH.g_isThottbot()) {
        return "thottbot"
    }
    return "remote"
};
$WH.g_convertScalingSpell = function (b, g) {
    var j = {}, f = $WH.g_convertScalingSpell.SV,
        d = $WH.g_convertScalingSpell.SD,
        a, k;
    if (!d[g]) {
        if (g_user.roles & U_GROUP_ADMIN) {
            alert("There are no spell scaling distributions for dist " + g)
        }
        return j
    }
    if (!f[b]) {
        if (g_user.roles & U_GROUP_ADMIN) {
            alert("There are no spell scaling values for level " + b)
        }
        return j
    }
    a = d[g];
    if (!a[3]) {
        if (g_user.roles & U_GROUP_ADMIN) {
            alert("This spell should not scale at all")
        }
        return j
    } else {
        if (a[3] == -1) {
            if (g_user.roles & U_GROUP_ADMIN) {
                alert("This spell should use the generic scaling distribution 12")
            }
            a[3] = 12
        }
    } if (!f[b][a[3] - 1]) {
        if (g_user.roles & U_GROUP_ADMIN) {
            alert("Unknown category for spell scaling " + a[3])
        }
        return j
    }
    if (a[15] > 0 && a[15] < b) {
        b = a[15]
    }
    k = f[b][a[3] - 1];
    if (a[13]) {
        k *= (Math.min(b, a[14]) + (a[13] * Math.max(0, b - a[14]))) / b
    }
    j.cast = Math.min(a[1], a[1] > 0 && b > 1 ? a[0] + (((b - 1) * (a[1] - a[0])) / (a[2] - 1)) : a[0]);
    j.effects = {};
    for (var c = 0; c < 3; ++c) {
        var l = a[4 + c],
            h = a[7 + c],
            e = a[10 + c],
            m = j.effects[c + 1] = {};
        m.avg = l * k * (a[1] > 0 ? j.cast / a[1] : 1);
        m.min = Math.round(m.avg) - Math.floor(m.avg * h / 2);
        m.max = Math.round(m.avg) + Math.floor(m.avg * h / 2);
        m.pts = Math.round(e * k);
        m.avg = Math.max(Math.ceil(l), Math.round(m.avg))
    }
    j.cast = Math.round(j.cast / 10) / 100;
    return j
};
$WH.g_getDataSource = function () {
    if ($WH.isset("g_pageInfo")) {
        switch (g_pageInfo.type) {
        case 3:
            if ($WH.isset("g_items")) {
                return g_items
            }
        case 6:
            if ($WH.isset("g_spells")) {
                return g_spells
            }
        case 200:
            if ($WH.isset("g_petabilities")) {
                return g_petabilities
            }
        case 220:
            if ($WH.isset("g_hearthstone_cards")) {
                return g_hearthstone_cards
            }
        }
    }
    return []
};
$WH.g_setJsonItemLevel = function (s, a, g) {
    if (g && ((g.scalingcategory - 11) > 0)) {
        var m = g.maxlvlscaling ? Math.min(a, g.maxlvlscaling) : a;
        var e = $WH.g_getSpellScalingValue(g.scalingcategory, m);
        for (var p = 1; p < 3; ++p) {
            var l = g["itemenchspell" + p];
            var b = g["itemenchtype" + p];
            var n = $WH.g_statToJson[l];
            if ((b == 5) && s[n]) {
                var c = g["damage" + p];
                if (c) {
                    s[n] = Math.round(e * c)
                }
            }
        }
        if (g.allstats) {
            for (var r in s) {
                s[r] = Math.round(e * g.damage1)
            }
        }
    }
    if (!s.scadist || !s.scaflags) {
        return
    }
    s.bonuses = s.bonuses || {};
    var j = s.scaflags & 255,
        h = (s.scaflags >> 8) & 255,
        o = (s.scaflags & (1 << 16)) != 0,
        d = (s.scaflags & (1 << 17)) != 0,
        u = (s.scaflags & (1 << 18)) != 0,
        t;
    switch (j) {
    case 5:
    case 1:
    case 7:
    case 17:
        t = 7;
        break;
    case 3:
    case 12:
        t = 8;
        break;
    case 16:
    case 11:
    case 14:
        t = 9;
        break;
    case 15:
        t = 10;
        break;
    case 23:
    case 21:
    case 22:
    case 13:
        t = 11;
        break;
    default:
        t = -1
    }
    if (t >= 0) {
        for (var p = 0; p < 10; ++p) {
            var f = $WH.g_convertScalingFactor(a, t, s.scadist, p, 1);
            if (f.n) {
                s[f.n] = f.v
            }
            s.bonuses[f.s] = f.v
        }
    }
    if (u) {
        s.splpwr = s.bonuses[45] = $WH.g_convertScalingFactor(a, 6)
    }
    if (o) {
        switch (j) {
        case 3:
            s.armor = $WH.g_convertScalingFactor(a, 11 + h);
            break;
        case 5:
            s.armor = $WH.g_convertScalingFactor(a, 15 + h);
            break;
        case 1:
            s.armor = $WH.g_convertScalingFactor(a, 19 + h);
            break;
        case 7:
            s.armor = $WH.g_convertScalingFactor(a, 23 + h);
            break;
        case 16:
            s.armor = $WH.g_convertScalingFactor(a, 28);
            break;
        case 14:
            s.armor = $WH.g_convertScalingFactor(a, 29);
            break;
        default:
            s.armor = 0
        }
    }
    if (d) {
        var k = (s.mledps ? "mle" : "rgd"),
            q;
        switch (j) {
        case 23:
        case 21:
        case 22:
        case 13:
            s.dps = s[k + "dps"] = $WH.g_convertScalingFactor(a, u ? 2 : 0);
            q = 0.3;
            break;
        case 17:
            s.dps = s[k + "dps"] = $WH.g_convertScalingFactor(a, u ? 3 : 1);
            q = 0.2;
            break;
        case 15:
            s.dps = s[k + "dps"] = $WH.g_convertScalingFactor(a, h == 19 ? 5 : 4);
            q = 0.3;
            break;
        default:
            s.dps = s[k + "dps"] = 0;
            q = 0
        }
        s.dmgmin = s[k + "dmgmin"] = Math.floor(s.dps * s.speed * (1 - q));
        s.dmgmax = s[k + "dmgmax"] = Math.floor(s.dps * s.speed * (1 + q))
    }
};
$WH.g_setJsonSpellLevel = function (a, b) {
    if (!a.scadist) {
        return
    }
    $WH.cO(a, $WH.g_convertScalingSpell(b, a.scadist))
};
$WH.g_scaleItemEnchantment = function (f, c) {
    var h = f.enchantment;
    if (f.scalinginfo && (f.scalinginfo.scalingcategory - 11) > 0) {
        var e = h.match(/\d+/g);
        if (e) {
            var g = f.scalinginfo.maxlvlscaling ? Math.min(c, f.scalinginfo.maxlvlscaling) : c;
            var b = $WH.g_getSpellScalingValue(f.scalinginfo.scalingcategory, g);
            for (var d = 0; d < e.length; ++d) {
                var a = f.scalinginfo["damage" + (d + 1)];
                if (a) {
                    h = h.replace(e[d], Math.round(b * a))
                }
            }
        }
    }
    return h
};
$WH.g_getItemRandPropPointsType = function (a) {
    switch (a.classs) {
    case 2:
        switch (a.subclass) {
        case 1:
        case 5:
        case 6:
        case 8:
        case 10:
        case 3:
        case 2:
        case 18:
            return 0;
        case 16:
            return 4;
        default:
            return 3
        }
        break;
    case 4:
        switch (a.slot) {
        case 1:
        case 5:
        case 7:
            return 0;
        case 3:
        case 6:
        case 8:
        case 10:
        case 12:
            return 1;
        case 2:
        case 22:
        case 23:
        case 11:
        case 16:
        case 9:
        case 14:
            return 2;
        default:
            return -1
        }
        break;
    default:
        return -1
    }
};
$WH.g_applyStatModifications = function (d, u, m, l, v) {
    var r = $WH.dO(d);
    if (r.subitems && r.subitems[u]) {
        for (var G in r.subitems[u].jsonequip) {
            if (!r.hasOwnProperty(G)) {
                r[G] = 0
            }
            r[G] += r.subitems[u].jsonequip[G]
        }
    }
    if ($WH.g_applyStatModifications.ScalingData.hasOwnProperty("AL") && ((l && d.upgrades && d.upgrades[l - 1]) || v)) {
        var g = $WH.g_applyStatModifications.ScalingData.AV,
            E = $WH.g_applyStatModifications.ScalingData.SV,
            e = $WH.g_applyStatModifications.ScalingData.AL;
        r.level = v ? $WH.g_applyStatModifications.ITEM_CHALLENGEMODE_LEVEL : (d.level + d.upgrades[l - 1]);
        var t = r.level - d.level;
        var s = Math.pow(1.15, t / 15);
        var F = $WH.g_getItemRandPropPointsType(r);
        var I = E[r.level];
        var c = 0;
        if (F != -1 && r.quality > 1 && r.quality < 6) {
            var j = (r.quality == 5) ? 4 : r.quality;
            var D = (j % 2) * 5 + F;
            c = I[D] ? I[D] : 0
        }
        var f = I[15];
        for (var y in $WH.g_statToJson) {
            var p = $WH.g_statToJson[y];
            if (r[p]) {
                if (p != "armor") {
                    var A = 0;
                    var h = 0;
                    if (r.statsInfo.hasOwnProperty(y)) {
                        A = parseFloat(r.statsInfo[y].socketMult);
                        h = parseInt(r.statsInfo[y].alloc)
                    }
                    var k = A * f;
                    if (h && c > 0) {
                        r[p] = Math.round((h / 10000) * c - k)
                    } else {
                        r[p] = Math.floor(((r[p] + k) * s) - k)
                    }
                }
                if (p == "armor" && g[r.level]) {
                    var o = (r.subclass == -6) ? 1 : r.subclass;
                    if ($WH.in_array([1, 2, 3, 4], o) != -1) {
                        var b = g[r.level][11 + r.quality];
                        var a = g[r.level][o - 1];
                        var w = e[r.slot][o];
                        r[p] = Math.floor(a * b * w + 0.5)
                    }
                    if (r.subclass == 6) {
                        r[p] = g[r.level][4 + r.quality]
                    }
                }
            }
        }
        if (r.dps) {
            var q = ["dps", "mledps", "rgddps"];
            var z = ["dmgmin1", "mledmgmin", "rgddmgmin", "dmgmax1", "mledmgmax", "rgddmgmax"];
            var H = r.dps * s;
            var n = Math.floor(H * r.speed * (1 - r.damagerange / 2));
            var C = Math.round(H * r.speed * (1 + r.damagerange / 2)) + 1;
            for (var y in q) {
                if (r[q[y]]) {
                    r[q[y]] = parseFloat(H.toFixed(1))
                }
            }
            for (var y in z) {
                if (r[z[y]]) {
                    if (z[y].indexOf("max") != -1) {
                        r[z[y]] = C
                    } else {
                        r[z[y]] = n
                    }
                }
            }
        }
    }
    if (m) {
        var B = $WH.g_getJsonReforge(r, m);
        if (B.amount) {
            r[B.s1] -= B.amount;
            r[B.s2] = B.amount
        }
    }
    return r
};
$WH.g_applyStatModifications.ITEM_CHALLENGEMODE_LEVEL = 463;
$WH.g_getJsonReforge = function (b, c) {
    if (!c) {
        if (!$WH.g_reforgeStats) {
            return []
        }
        b.__reforge = {};
        b.__reforge.all = [];
        for (var c in $WH.g_reforgeStats) {
            var d = $WH.g_getJsonReforge(b, c);
            if (d.amount) {
                b.__reforge.all.push(d)
            }
        }
        return b.__reforge.all
    }
    if (!$WH.g_reforgeStats || !$WH.g_reforgeStats[c]) {
        return {}
    }
    b.__statidx = {};
    for (var a in b) {
        if ($WH.g_individualToGlobalStat[$WH.g_jsonToStat[a]]) {
            b.__statidx[$WH.g_individualToGlobalStat[$WH.g_jsonToStat[a]]] = b[a]
        } else {
            b.__statidx[$WH.g_jsonToStat[a]] = b[a]
        }
    }
    if (!b.__reforge) {
        b.__reforge = {}
    }
    var d = b.__reforge[c] = $WH.dO($WH.g_reforgeStats[c]);
    b.__reforge[c].amount = Math.floor(d.v * (b.__statidx[d.i1] && !b.__statidx[d.i2] ? b.__statidx[d.i1] : 0));
    return b.__reforge[c]
};
$WH.g_getJsonItemEnchantMask = function (a) {
    if (a.classs == 2 && a.subclass == 19) {
        return 1 << (21 - 1)
    }
    return 1 << (a.slot - 1)
};
$WH.g_getSpellScalingValue = function (b, c) {
    var a = $WH.g_convertScalingSpell ? $WH.g_convertScalingSpell.SV : null;
    if (!a) {
        return 0
    }
    return a[c][b - 1]
};
$WH.g_battlePetAbilityLevels = [1, 2, 4, 10, 15, 20];
$WH.Tooltip = {
    create: function (j, l) {
        var g = $WH.ce("div"),
            n = $WH.ce("table"),
            b = $WH.ce("tbody"),
            f = $WH.ce("tr"),
            c = $WH.ce("tr"),
            a = $WH.ce("td"),
            m = $WH.ce("th"),
            k = $WH.ce("th"),
            h = $WH.ce("th");
        g.className = "wowhead-tooltip";
        m.style.backgroundPosition = "top right";
        k.style.backgroundPosition = "bottom left";
        h.style.backgroundPosition = "bottom right";
        $WH.ae(f, a);
        $WH.ae(f, m);
        $WH.ae(b, f);
        $WH.ae(c, k);
        $WH.ae(c, h);
        $WH.ae(b, c);
        $WH.ae(n, b);
        if (!l) {
            $WH.Tooltip.icon = $WH.ce("p");
            $WH.Tooltip.icon.style.visibility = "hidden";
            $WH.ae($WH.Tooltip.icon, $WH.ce("div"));
            $WH.ae(g, $WH.Tooltip.icon)
        }
        $WH.ae(g, n);
        if (!l) {
            var e = $WH.ce("div");
            e.className = "wowhead-tooltip-powered";
            $WH.ae(g, e);
            $WH.Tooltip.logo = e
        }
        return g
    },
    getMultiPartHtml: function (b, a) {
        return "<table><tr><td>" + b + "</td></tr></table><table><tr><td>" + a + "</td></tr></table>"
    },
    fix: function (d, b, f) {
        var e = $WH.gE(d, "table")[0],
            h = $WH.gE(e, "td")[0],
            g = h.childNodes;
        d.className = $WH.trim(d.className.replace("tooltip-slider", ""));
        if (g.length >= 2 && g[0].nodeName == "TABLE" && g[1].nodeName == "TABLE") {
            g[0].style.whiteSpace = "nowrap";
            var a = parseInt(d.style.width);
            if (!d.slider || !a) {
                if (g[1].offsetWidth == 0) {
                    a = 320
                } else {
                    if (g[1].offsetWidth > 300) {
                        a = Math.max(300, g[0].offsetWidth) + 20
                    } else {
                        a = Math.max(g[0].offsetWidth, g[1].offsetWidth) + 20
                    }
                }
            }
            a = Math.min(320, a);
            if (a > 20) {
                d.style.width = a + "px";
                g[0].style.width = g[1].style.width = "100%";
                if (d.slider) {
                    Slider.setSize(d.slider, a - 6);
                    d.className += " tooltip-slider"
                }
                if (!b && d.offsetHeight > document.body.clientHeight) {
                    e.className = "shrink"
                }
            }
        } else {
            if (g.length >= 1 && g[0].nodeName == "TABLE" && d.slider) {
                g[0].style.whiteSpace = "nowrap";
                var a = parseInt(d.style.width);
                if (!a) {
                    a = g[0].offsetWidth + 20
                }
                a = Math.min(320, a);
                if (a > 20) {
                    d.style.width = a + "px";
                    g[0].style.width = "100%";
                    if (d.slider) {
                        Slider.setSize(d.slider, a - 6);
                        d.className += " tooltip-slider"
                    }
                    if (!b && d.offsetHeight > document.body.clientHeight) {
                        e.className = "shrink"
                    }
                }
            }
        } if (f) {
            d.style.visibility = "visible"
        }
    },
    fixSafe: function (c, b, a) {
        $WH.Tooltip.fix(c, b, a)
    },
    attachImage: function (d, e, k, h) {
        if (typeof h == "undefined") {
            h = ""
        }
        if (typeof jQuery != "undefined") {
            jQuery(d.parentNode).children(".image" + h).remove()
        } else {
            var l = new RegExp("\\bimage" + h + "\\b");
            for (var g = 0; g < d.parentNode.childNodes.length; g++) {
                if (l.test(d.parentNode.childNodes[g].className)) {
                    d.parentNode.removeChild(d.parentNode.childNodes[g]);
                    g--
                }
            }
        }
        var j = typeof e;
        if (j == "number") {
            var f = $WH.g_getDataSource(),
                b = e;
            if (f[b] && f[b]["image_" + Locale.getName() + h]) {
                e = f[b]["image_" + Locale.getName() + h]
            } else {
                return
            }
        } else {
            if (j != "string") {
                return
            }
        }
        var a = $WH.ce("div");
        a.className = "image" + h + (k ? " " + k : "");
        a.style.backgroundImage = "url(" + e + ")";
        if (typeof jQuery != "undefined") {
            jQuery(d).after(a)
        } else {
            d.parentNode.insertBefore(a, d.nextSibling)
        }
    },
    append: function (c, b) {
        var c = $WH.ge(c);
        var a = $WH.Tooltip.create(b);
        $WH.ae(c, a);
        $WH.Tooltip.fixSafe(a, 1, 1)
    },
    prepare: function () {
        if ($WH.Tooltip.tooltip) {
            return
        }
        var a = $WH.Tooltip.create();
        a.style.position = "absolute";
        a.style.left = a.style.top = "-2323px";
        $WH.ae(document.body, a);
        $WH.Tooltip.tooltip = a;
        $WH.Tooltip.tooltipTable = $WH.gE(a, "table")[0];
        $WH.Tooltip.tooltipTd = $WH.gE(a, "td")[0];
        var a = $WH.Tooltip.create(null, true);
        a.style.position = "absolute";
        a.style.left = a.style.top = "-2323px";
        $WH.ae(document.body, a);
        $WH.Tooltip.tooltip2 = a;
        $WH.Tooltip.tooltipTable2 = $WH.gE(a, "table")[0];
        $WH.Tooltip.tooltipTd2 = $WH.gE(a, "td")[0]
    },
    set: function (g, d, f, c) {
        var b = $WH.Tooltip.tooltip;
        b.style.width = "550px";
        b.style.left = "-2323px";
        b.style.top = "-2323px";
        if (g.match("hearthhead-tooltip-image")) {
            if (g.match("hearthhead-tooltip-image large-tooltip")) {
                $WH.Tooltip.tooltip.className = "wowhead-tooltip hearthhead-tooltip-image large-tooltip"
            } else {
                $WH.Tooltip.tooltip.className = "wowhead-tooltip hearthhead-tooltip-image"
            }
        } else {
            $WH.Tooltip.tooltip.className = "wowhead-tooltip"
        } if (g.nodeName) {
            $WH.ee($WH.Tooltip.tooltipTd);
            $WH.ae($WH.Tooltip.tooltipTd, g)
        } else {
            $($WH.Tooltip.tooltipTd).html(g);
        }
        b.style.display = "";
        b.visibility = "visible";
        $WH.Tooltip.fix(b, 0, 0);
        if (d) {
            $WH.Tooltip.showSecondary = true;
            var b = $WH.Tooltip.tooltip2;
            b.style.width = "550px";
            b.style.left = "-2323px";
            b.style.top = "-2323px";
            if (d.nodeName) {
                $WH.ee($WH.Tooltip.tooltipTd2);
                $WH.ae($WH.Tooltip.tooltipTd2, d)
            }
            b.style.display = "";
            $WH.Tooltip.fix(b, 0, 0)
        } else {
            $WH.Tooltip.showSecondary = false
        }
        var a = typeof Platform != "undefined" ? Platform.isTouch() : $WH.isTouch();
        if (a) {
            var h = $WH.Tooltip.showSecondary ? $WH.Tooltip.tooltipTd2 : $WH.Tooltip.tooltipTd;
            var e = $WH.ce("a");
            e.href = "javascript:;";
            e.className = "wowhead-touch-tooltip-closer";
            e.onclick = $WH.Tooltip.hide;
            $WH.ae(h, e)
        }
        $WH.Tooltip.tooltipTable.style.display = (g == "") ? "none" : "";
        $WH.Tooltip.attachImage($WH.Tooltip.tooltipTable, f, c);
        $WH.Tooltip.generateEvent("show")
    },
    displayTooltip: function (a, d, b, c) {
        $WowheadPower.displayTooltip(a, d, b, c)
    },
    moveTests: [
        [null, null],
        [null, false],
        [false, null],
        [false, false]
    ],
    move: function (p, o, e, q, d, b) {
        if (!$WH.Tooltip.tooltipTable) {
            return
        }
        var n = $WH.Tooltip.tooltip,
            j = $WH.Tooltip.tooltipTable.offsetWidth,
            c = $WH.Tooltip.tooltipTable.offsetHeight,
            l = $WH.Tooltip.tooltip2,
            g = $WH.Tooltip.showSecondary ? $WH.Tooltip.tooltipTable2.offsetWidth : 0,
            a = $WH.Tooltip.showSecondary ? $WH.Tooltip.tooltipTable2.offsetHeight : 0,
            r;
        n.style.width = (j == 0) ? "auto" : (j + "px");
        l.style.width = g + "px";
        var m, f;
        for (var h = 0, k = $WH.Tooltip.moveTests.length; h < k; ++h) {
            r = $WH.Tooltip.moveTests[h];
            m = $WH.Tooltip.moveTest(p, o, e, q, d, b, r[0], r[1]);
            if ($WH.isset("Ads") && !Ads.intersect(m)) {
                f = true;
                break
            } else {
                if (!$WH.isset("Ads")) {
                    break
                }
            }
        }
        if ($WH.isset("Ads") && !f) {
            Ads.intersect(m, true)
        }
        n.style.left = m.l + "px";
        n.style.top = m.t + "px";
        n.style.visibility = "visible";
        if ($WH.Tooltip.showSecondary) {
            l.style.left = m.l + j + "px";
            l.style.top = m.t + "px";
            l.style.visibility = "visible"
        }
        $WH.Tooltip.generateEvent("move")
    },
    moveTest: function (e, n, q, B, c, a, p, b) {
        var m = e,
            z = n,
            g = $WH.Tooltip.tooltip,
            k = $WH.Tooltip.tooltipTable.offsetWidth,
            s = $WH.Tooltip.tooltipTable.offsetHeight,
            o = $WH.Tooltip.tooltip2,
            A = $WH.Tooltip.showSecondary ? $WH.Tooltip.tooltipTable2.offsetWidth : 0,
            f = $WH.Tooltip.showSecondary ? $WH.Tooltip.tooltipTable2.offsetHeight : 0,
            j = $WH.g_getWindowSize(),
            l = $WH.g_getScroll(),
            h = j.w,
            r = j.h,
            d = l.x,
            y = l.y,
            w = d,
            v = y,
            u = d + h,
            t = y + r;
        if (p == null) {
            p = (e + q + k + A <= u)
        }
        if (b == null) {
            b = (n - Math.max(s, f) >= v)
        }
        if (p) {
            e += q + c
        } else {
            e = Math.max(e - (k + A), w) - c
        } if (b) {
            n -= Math.max(s, f) + a
        } else {
            n += B + a
        } if (e < w) {
            e = w
        } else {
            if (e + k + A > u) {
                e = u - (k + A)
            }
        } if (n < v) {
            n = v
        } else {
            if (n + Math.max(s, f) > t) {
                n = Math.max(y, t - Math.max(s, f))
            }
        } if ($WH.Tooltip.iconVisible) {
            if (m >= e - 48 && m <= e && z >= n - 4 && z <= n + 48) {
                n -= 48 - (z - n)
            }
        }
        return $WH.g_createRect(e, n, k, s)
    },
    show: function (e, h, b, a, f, c, d, g) {
        if ($WH.Tooltip.disabled) {
            return
        }
        if (!b || b < 1) {
            b = 1
        }
        if (!a || a < 1) {
            a = 1
        }
        if (f) {
            h = '<span class="' + f + '">' + h + "</span>"
        }
        var j = $WH.ac(e);
        $WH.Tooltip.prepare();
        $WH.Tooltip.set(h, c, d, g);
        $WH.Tooltip.move(j.x, j.y, e.offsetWidth, e.offsetHeight, b, a)
    },
    showAtCursor: function (f, k, b, a, g, c, d, j) {
        if ($WH.Tooltip.disabled) {
            return
        }
        if (!b || b < 10) {
            b = 10
        }
        if (!a || a < 10) {
            a = 10
        }
        if (g) {
            k = '<span class="' + g + '">' + k + "</span>";
            if (c) {
                c = '<span class="' + g + '">' + c + "</span>"
            }
        }
        f = $WH.$E(f);
        var h = $WH.g_getCursorPos(f);
        $WH.Tooltip.prepare();
        $WH.Tooltip.set(k, c, d, j);
        $WH.Tooltip.move(h.x, h.y, 0, 0, b, a)
    },
    showAtXY: function (g, a, h, d, c, e, f, b) {
        if ($WH.Tooltip.disabled) {
            return
        }
        $WH.Tooltip.prepare();
        $WH.Tooltip.set(g, e, f, b);
        $WH.Tooltip.move(a, h, 0, 0, d, c)
    },
    cursorUpdate: function (b, a, d) {
        if ($WH.Tooltip.disabled || !$WH.Tooltip.tooltip) {
            return
        }
        b = $WH.$E(b);
        if (!a || a < 10) {
            a = 10
        }
        if (!d || d < 10) {
            d = 10
        }
        var c = $WH.g_getCursorPos(b);
        $WH.Tooltip.move(c.x, c.y, 0, 0, a, d)
    },
    hide: function () {
        if ($WH.Tooltip.tooltip) {
            $WH.Tooltip.tooltip.style.display = "none";
            $WH.Tooltip.tooltip.visibility = "hidden";
            $WH.Tooltip.tooltipTable.className = "";
            $WH.Tooltip.setIcon(null);
            if ($WH.isset("Ads")) {
                Ads.restoreHidden()
            }
            $WH.Tooltip.generateEvent("hide")
        }
        if ($WH.Tooltip.tooltip2) {
            $WH.Tooltip.tooltip2.style.display = "none";
            $WH.Tooltip.tooltip2.visibility = "hidden";
            $WH.Tooltip.tooltipTable2.className = ""
        }
    },
    setIcon: function (a) {
        $WH.Tooltip.prepare();
        if (a) {
            $WH.Tooltip.icon.style.backgroundImage = "url(images/favicon.ico)";
            $WH.Tooltip.icon.style.visibility = "visible"
        } else {
            $WH.Tooltip.icon.style.backgroundImage = "none";
            $WH.Tooltip.icon.style.visibility = "hidden"
        }
        $WH.Tooltip.iconVisible = a ? 1 : 0
    },
    generateEvent: function (a) {
        if (!$WH.Tooltip.tooltip) {
            return
        }
        try {
            $WH.Tooltip.tooltip.dispatchEvent(new Event(a))
        } catch (c) {
            try {
                var b = document.createEvent("Event");
                b.initEvent(a, true, true);
                $WH.Tooltip.tooltip.dispatchEvent(b)
            } catch (c) {
                void(0)
            }
        }
    },
    addTooltipText: function (c, d, b) {
        var a = b ? ' class="' + b + '"' : "";
        c._fixTooltip = function (f) {
            if (f.match(/hearthhead-tooltip-image/)) {
                var g = /(<\/td><th[^>]*><\/th><\/tr><tr class="hearthhead-tooltip-inner">.*)/;
                var e = f.match(g);
                if (e) {
                    return f.replace(g, "<div" + a + ' style="margin-top:10px">' + d + "</div>$1")
                } else {
                    return f + "<table><tr><td><span" + a + ">" + d + '</span></td><th style="background-position:right top"></th></tr><tr><th style="background-position:left bottom"></th><th style="background-position:right bottom"></th></tr></table>'
                }
            } else {
                var g = /<\/table>\s*$/;
                if (g.test(f)) {
                    return f.replace(g, '<tr><td colspan="2"><div' + a + ' style="margin-top:10px">' + d + "</div></td></tr></table>")
                } else {
                    return f + "<div" + a + ' style="margin-top:10px">' + d + "</div>"
                }
            }
        }
    },
    simpleOverride: function (c, e, b, g, j, f, k, d, l, a, h) {
        c.overrideTooltip = {
            html: e,
            htmlGenerator: b,
            spanClass: g,
            icon: j,
            html2: f,
            html2Generator: k,
            image: d,
            imageClass: l,
            map: a,
            spellData: h
        }
    }
};
if ($WH.isset("$WowheadPower")) {
    $WowheadPower.init()
}
if (typeof jQuery != "undefined" && $WH.g_getSite() == "wowhead") {
    $(document).ready(function () {
        var a = $("div.header .header-logo");
        a.eq(Math.floor(Math.random() * 2)).addClass("hearthstone-logo")
    })
};