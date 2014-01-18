if (typeof $WH == "undefined") {
    $WH = {
        wowheadRemote: true
    }
}
$WH.isTouch = function () {
    if (!$WH.wowheadRemote && typeof Platform != "undefined") {
        $WH.isTouch = function () {
            return Platform.isTouch()
        }
    } else {
        var b = navigator.userAgent || navigator.vendor || window.opera;
        var a = {
            isMobile: false,
            isTablet: false
        };
        $WH.isTouch = (function (c) {
            return c.isMobile || c.isTablet
        }).bind(null, a)
    }
    return $WH.isTouch()
};
if (typeof $WowheadPower == "undefined") {
    var $WowheadPower = new function () {
            var isRemote = $WH.wowheadRemote;
            var opt = {
                applyto: 3
            }, head = document.getElementsByTagName("head")[0],
                whcss, currentType, currentId, currentLocale, currentDomain, currentParams, currentA, cursorX, cursorY, mode = 0,
                eventAttached = false,
                currentTouchTooltipSource = null,
                npcs = {}, objects = {}, items = {}, quests = {}, spells = {}, achievements = {}, transmogsets = {}, statistics = {}, petabilities = {}, hearthstonecards = {}, hearthstonedecks = {}, showIcon = 1,
                showLogo = 1,
                STATUS_NONE = 0,
                STATUS_QUERYING = 1,
                STATUS_ERROR = 2,
                STATUS_NOTFOUND = 3,
                STATUS_OK = 4,
                STATUS_SCALES = 5,
                TYPE_NPC = 1,
                TYPE_OBJECT = 2,
                TYPE_ITEM = 3,
                TYPE_QUEST = 5,
                TYPE_SPELL = 6,
                TYPE_ACHIEVEMENT = 10,
                TYPE_TRANSMOGSET = 101,
                TYPE_PETABILITY = 200,
                TYPE_HEARTHSTONECARD = 220,
                TYPE_HEARTHSTONEDECK = 104,
                CURSOR_HSPACE = 15,
                CURSOR_VSPACE = 15,
                _LANG = {
                    loading: "Loading...",
                    noresponse: "No response from server :(",
                    achievementcomplete: "Achievement earned by $1 on $2/$3/$4"
                }, LOOKUPS = {
                    220: [hearthstonecards, "card", "Hearthstone Card", "hearthhead.com"],
                    104: [hearthstonedecks, "deck", "Hearthstone Deck", "hearthhead.com"]
                }, SCALES = {

                }, LOCALES = {
                    0: "enus",
                    2: "frfr",
                    3: "dede",
                    6: "eses",
                    7: "ruru",
                    8: "ptbr",
                    ptr: "ptr",
                    beta: "beta"
                }, REDIRECTS = {
                    wotlk: "www",
                    cata: "www",
                    mop: "www"
                };
            if (isRemote) {
                var Locale = {
                    getId: function () {
                        return 0
                    },
                    getName: function () {
                        return "enus"
                    }
                }
            }
            if (typeof LANG === "undefined") {
                var LANG = {
                    tooltip_genericrating: '<span class="q2">Equip: Increases your $1 by <!--rtg$2-->$3&nbsp;<small>(<!--rtg%$2-->0&nbsp;@&nbsp;L<!--lvl-->0)</small>.</span><br />',
                    tooltip_reforged: "Reforged ($1 $2 &rarr; $1 $3)",
                    traits: {
                        agi: ["Agility", "Agi", "Agi"],
                        arcres: ["Arcane resistance", "Arcane Resist", "ArcR"],
                        arcsplpwr: ["Arcane spell power", "Arcane Power", "ArcP"],
                        armor: ["Armor", "Armor", "Armor"],
                        armorbonus: ["Additional armor", "Bonus Armor", "AddAr"],
                        armorpenrtng: ["Armor penetration rating", "Armor Pen", "Pen"],
                        atkpwr: ["Attack power", "AP", "AP"],
                        block: ["Block value", "Block Value", "BkVal"],
                        blockrtng: ["Block rating", "Block", "Block"],
                        critstrkrtng: ["Critical strike rating", "Crit", "Crit"],
                        defrtng: ["Defense rating", "Defense", "Def"],
                        dmg: ["Weapon damage", "Damage", "Dmg"],
                        dmgmax1: ["Maximum damage", "Max Damage", "Max"],
                        dmgmin1: ["Minimum damage", "Min Damage", "Min"],
                        dodgertng: ["Dodge rating", "Dodge", "Dodge"],
                        dps: ["Damage per second", "DPS", "DPS"],
                        exprtng: ["Expertise rating", "Expertise", "Exp"],
                        firres: ["Fire resistance", "Fire Resist", "FirR"],
                        firsplpwr: ["Fire spell power", "Fire Power", "FireP"],
                        frores: ["Frost resistance", "Frost Resist", "FroR"],
                        frosplpwr: ["Frost spell power", "Frost Power", "FroP"],
                        hastertng: ["Haste rating", "Haste", "Haste"],
                        health: ["Health", "Health", "Hlth"],
                        healthrgn: ["Health regeneration", "HP5", "HP5"],
                        hitrtng: ["Hit rating", "Hit", "Hit"],
                        holres: ["Holy resistance", "Holy Resist", "HolR"],
                        holsplpwr: ["Holy spell power", "Holy Power", "HolP"],
                        "int": ["Intellect", "Int", "Int"],
                        level: ["Level", "Level", "Lvl"],
                        mana: ["Mana", "Mana", "Mana"],
                        manargn: ["Mana regeneration", "MP5", "MP5"],
                        mastrtng: ["Mastery rating", "Mastery", "Mastery"],
                        mleatkpwr: ["Melee attack power", "Melee AP", "AP"],
                        mlecritstrkrtng: ["Melee critical strike rating", "Melee Crit", "Crit"],
                        mledmgmax: ["Melee maximum damage", "Melee Max Damage", "Max"],
                        mledmgmin: ["Melee minimum damage", "Melee Min Damage", "Min"],
                        mledps: ["Melee DPS", "Melee DPS", "DPS"],
                        mlehastertng: ["Melee haste rating", "Melee Haste", "Haste"],
                        mlehitrtng: ["Melee hit rating", "Melee Hit", "Hit"],
                        mlespeed: ["Melee speed", "Melee Speed", "Speed"],
                        natres: ["Nature resistance", "Nature Resist", "NatR"],
                        natsplpwr: ["Nature spell power", "Nature Power", "NatP"],
                        nsockets: ["Number of sockets", "Sockets", "Sockt"],
                        parryrtng: ["Parry rating", "Parry", "Parry"],
                        reqarenartng: ["Required personal and team arena rating", "Req Rating", "Rating"],
                        reqlevel: ["Required level", "Req Level", "Level"],
                        resirtng: ["PvP Resilience rating", "PvP Resilience", "Resil"],
                        rgdatkpwr: ["Ranged attack power", "Ranged AP", "RAP"],
                        rgdcritstrkrtng: ["Ranged critical strike rating", "Ranged Crit", "Crit"],
                        rgddmgmax: ["Ranged maximum damage", "Ranged Max Damage", "Max"],
                        rgddmgmin: ["Ranged minimum damage", "Ranged Min Damage", "Min"],
                        rgddps: ["Ranged DPS", "Ranged DPS", "DPS"],
                        rgdhastertng: ["Ranged haste rating", "Ranged Haste", "Haste"],
                        rgdhitrtng: ["Ranged hit rating", "Ranged Hit", "Hit"],
                        rgdspeed: ["Ranged speed", "Ranged Speed", "Speed"],
                        sepbasestats: "Base stats",
                        sepdefensivestats: "Defensive stats",
                        sepindividualstats: "Individual stats",
                        sepmisc: "Miscellaneous",
                        sepoffensivestats: "Offensive stats",
                        sepresistances: "Resistances",
                        sepweaponstats: "Weapon stats",
                        shares: ["Shadow resistance", "Shadow Resist", "ShaR"],
                        shasplpwr: ["Shadow spell power", "Shadow Power", "ShaP"],
                        speed: ["Speed", "Speed", "Speed"],
                        spi: ["Spirit", "Spi", "Spi"],
                        splcritstrkrtng: ["Spell critical strike rating", "Spell Crit", "Crit"],
                        spldmg: ["Damage done by spells", "Spell Damage", "Dmg"],
                        splheal: ["Healing done by spells", "Healing", "Heal"],
                        splpwr: ["Spell power", "Spell Power", "SP"],
                        splhastertng: ["Spell haste rating", "Spell Haste", "Haste"],
                        splhitrtng: ["Spell hit rating", "Spell Hit", "Hit"],
                        splpen: ["Spell penetration", "Spell Pen", "Pen"],
                        sta: ["Stamina", "Sta", "Sta"],
                        str: ["Strength", "Str", "Str"],
                        pvppower: ["PvP Power", "PvPPower", "PvPPower"]
                    }
                }
            }

            function init() {
				attachEvent();
				var ptrIsActive = $WH.isset("g_ptractive") && g_ptractive;
				if (!ptrIsActive) {
					REDIRECTS.ptr = "www"
				}
            }

            function initCSS() {
                if (typeof wowhead_tooltips == "undefined") {
                    return
                }
                if (!("hide" in wowhead_tooltips)) {
                    return
                }
                if (typeof whcss != "undefined") {
                    return
                }
                if (!document.styleSheets) {
                    return
                }
                var style = document.createElement("style");
                style.type = "text/css";
                head.appendChild(style);
                if (!window.createPopup) {
                    head.appendChild(document.createTextNode(""))
                }
                whcss = document.styleSheets[document.styleSheets.length - 1];
                for (var k in wowhead_tooltips.hide) {
                    if (!wowhead_tooltips.hide[k]) {
                        continue
                    }
                    if (whcss.insertRule) {
                        whcss.insertRule(".wowhead-tooltip .whtt-" + k + "{display: none}", whcss.cssRules.length)
                    } else {
                        if (whcss.addRule) {
                            whcss.addRule(".wowhead-tooltip .whtt-" + k, "display: none", -1)
                        }
                    }
                }
            }

            function attachEvent() {
                if (eventAttached) {
                    return
                }
                eventAttached = true;
                    $WH.aE(document, "mouseover", onMouseOv)
            }
            this.attachTouchTooltips = function (scope) {
                if (scope && scope.nodeType === 1) {
                    attachTouchEvents(scope)
                }
            };

            function onDOMReady(func) {
                if (typeof jQuery != "undefined") {
                    $(func);
                    return
                }
            }

            function attachTouchEvents(scope) {
                onDOMReady(function () {
                    scope = scope || document.body;
                    var targets = $WH.gE(scope, "a");
                    for (var i in targets) {
                        if (targets[i].onclick == null) {
                            targets[i].onclick = onTouch;
                            continue
                        }
                        if (targets[i].addEventListener) {
                            targets[i].addEventListener("click", onTouch, false)
                        } else {
                            if (targets[i].attachEvent) {
                                targets[i].attachEvent("onclick", onTouch)
                            }
                        }
                    }
                })
            }
            this.init = function () {
                if (isRemote) {
                    $WH.ae(head, $WH.ce("link", {
                        type: "text/css",
                        href: "//wowcss.zamimg.com/css/basic.css?5",
                        rel: "stylesheet"
                    }))
                }
                attachEvent();
                if (typeof wowhead_tooltips != "undefined") {
                    for (var i = 0; i < document.links.length; i++) {
                        var link = document.links[i];
                        scanElement(link)
                    }
                    initCSS()
                }
            };

            function updateCursorPos(e) {
                var pos = $WH.g_getCursorPos(e);
                cursorX = pos.x;
                cursorY = pos.y
            }

            function scanElement(t, e) {
                if (t.nodeName != "A" && t.nodeName != "AREA") {
                    return -2323
                }
                if (!t.href.length && !t.rel) {
                    return
                }
                if (t.rel && t.rel.indexOf("np") != -1) {
                    return
                }
                var i0, i1, i2, m, params = {};
                currentParams = params;
                var p = function (m, k, v) {
                    if (k == "buff" || k == "sock" || k == "map" || k == "notip" || k == "chal") {
                        params[k] = true
                    } else {
                        if (k == "rand" || k == "ench" || k == "lvl" || k == "c" || k == "diff" || k == "diffnew" || k == "upgd" || k == "pwr") {
                            params[k] = parseInt(v)
                        } else {
                            if (k == "gems" || k == "pcs" || k == "forg" || k == "know") {
                                params[k] = v.split(":")
                            } else {
                                if (k == "who" || k == "domain") {
                                    params[k] = v
                                } else {
                                    if (k == "when") {
                                        params[k] = new Date(parseInt(v))
                                    } else {
                                        if (k == "image" && v == "premium") {
                                            params[v] = true
                                        } else {
                                            if (k == "image") {
                                                params[k] = ((v == "") ? "" : "_") + v
                                            } else {
                                                if (k == "premium") {
                                                    params[k] = true
                                                } else {
                                                    if (k == "text") {
                                                        params[k] = true
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                };
                var relativeUrl = false;
                if (opt.applyto & 1) {
                    i1 = 2;
                    i2 = 3;
                    if (t.href.indexOf("http://") == 0 || t.href.indexOf("https://") == 0) {
                        i0 = 1;
                        m = t.href.match(/^https?:\/\/(.+?)?\.?(?:wowhead|thottbot)\.com(?:\:\d+)?\/\??(item|quest|spell|achievement|transmog-set|statistic|npc|object|petability|hearthstone\/card)=([0-9]+)/);
                        if (!m) {
                            m = t.href.match(/^https?:\/\/(.+?)?\.?(?:hearthhead)\.com(?:\:\d+)?\/\??(card|deck)=([0-9]+)/)
                        }
                        showLogo = 0
                    } else {
                        relativeUrl = true;
                        m = t.href.match(/()\/\??(item|quest|spell|achievement|transmog-set|statistic|npc|object|petability|hearthstone\/card|card|deck)=([0-9]+)/);
                        showLogo = 1
                    }
                }
                if (m == null && t.rel && (opt.applyto & 2)) {
                    i0 = 0;
                    i1 = 1;
                    i2 = 2;
                    m = t.rel.match(/(item|quest|spell|achievement|transmog-set|statistic|npc|object|petability|hearthstone\/card|card|deck).?([0-9]+)/);
                    showLogo = 1
                }
                t.href.replace(/([a-zA-Z]+)=?([a-zA-Z0-9:-]*)/g, p);
                if (t.rel) {
                    t.rel.replace(/([a-zA-Z]+)=?([a-zA-Z0-9:-]*)/g, p)
                }
                if (params.gems && params.gems.length > 0) {
                    var i;
                    for (i = Math.min(3, params.gems.length - 1); i >= 0; --i) {
                        if (parseInt(params.gems[i])) {
                            break
                        }
                    }++i;
                    if (i == 0) {
                        delete params.gems
                    } else {
                        if (i < params.gems.length) {
                            params.gems = params.gems.slice(0, i)
                        }
                    }
                }
                if (m) {
                    var locale, domain = "www";
                    currentA = t;
                    if (params.domain) {
                        domain = params.domain
                    } else {
                        if (i0 && m[i0]) {
                            domain = m[i0]
                        } else {
                            if (relativeUrl) {
                                if ($WH.isset("g_beta") && g_beta) {
                                    domain = "mop"
                                } else {
                                    if ($WH.isset("g_ptr") && g_ptr) {
                                        domain = "ptr"
                                    } else {
                                        if ($WH.isset("g_old") && g_old) {
                                            domain = "old"
                                        }
                                    }
                                }
                            }
                        }
                    } if (window.location.pathname.indexOf("&ptr") != -1) {
                        domain = "ptr"
                    }
                    if (REDIRECTS[domain]) {
                        domain = REDIRECTS[domain]
                    }
                    locale = $WH.g_getLocaleFromDomain(domain);
                    if (domain == "ptr") {
                        locale = "ptr"
                    } else {
                        if (domain == "beta" || domain == "mop") {
                            locale = "beta"
                        }
                    }
                    currentDomain = domain;
                    if (t.href.indexOf("#") != -1 && document.location.href.indexOf(m[i1] + "=" + m[i2]) != -1) {
                        return
                    }
                    mode = t.parentNode.className.indexOf("icon") == 0 && t.parentNode.nodeName == "DIV" || t.getAttribute("data-whattach") == "true" || $WH.isTouch() ? 1 : 0;
                    if (!$WH.isTouch() && !t.onmouseout) {
                        if (mode == 0) {
                            $(t).mousemove(onMouseMov);
                        }
                        $(t).mouseout(onMouseOut);
                    }
                    if (e) {
                        updateCursorPos(e)
                    }
                    var type = $WH.g_getIdFromTypeName(m[i1]),
                        typeId = m[i2];
                    if (typeof t.overrideTooltip == "object") {
                        var html = t.overrideTooltip.html;
                        var html2 = t.overrideTooltip.html2;
                        if (typeof t.overrideTooltip.htmlGenerator == "function") {
                            html = t.overrideTooltip.htmlGenerator(t.overrideTooltip)
                        }
                        if (typeof t.overrideTooltip.html2Generator == "function") {
                            html2 = t.overrideTooltip.html2Generator(t.overrideTooltip)
                        }
                        if (t.overrideTooltip.spanClass) {
                            html = '<span class="' + t.overrideTooltip.spanClass + '">' + html + "</span>";
                            if (html2) {
                                html2 = '<span class="' + t.overrideTooltip.spanClass + '">' + html2 + "</span>"
                            }
                        }
                        showTooltip(html, t.overrideTooltip.icon, t.overrideTooltip.map, t.overrideTooltip.spellData, html2, t.overrideTooltip.image, t.overrideTooltip.imageClass)
                    } else {
                        display(type, typeId, locale, params)
                    } if (e || typeof wowhead_tooltips == "undefined") {
                        return
                    }
                    var data = LOOKUPS[type][0][typeId];
                    var timeout = function (t) {
                        if (data.status[locale] != STATUS_OK && data.status[locale] != STATUS_NOTFOUND) {
                            window.setTimeout(function () {
                                timeout(t)
                            }, 5);
                            return
                        }
                    };
                    timeout(t)
                }
            }

            function onMouseOv(e) {
                e = $WH.$E(e);
                var t = e._target;
                var i = 0;
                while (t != null && i < 5 && scanElement(t, e) == -2323) {
                    t = t.parentNode;
                    ++i
                }
            }

            function onTouch(e) {
                e = $WH.$E(e);
                var t = this;
                if (t.hasWHTouchTooltip === true) {
                    return
                }
                var i = 0;
                while (t != null && i < 5 && scanElement(t, e) == -2323) {
                    t = t.parentNode;
                    ++i
                }
                if (i < 5) {
                    if (currentTouchTooltipSource !== null) {
                        delete currentTouchTooltipSource.hasWHTouchTooltip
                    }
                    t.hasWHTouchTooltip = true;
                    currentTouchTooltipSource = t;
                    return false
                }
            }

            function onMouseMov(e) {
                e = $WH.$E(e);
                updateCursorPos(e);
                $WH.Tooltip.move(cursorX, cursorY, 0, 0, CURSOR_HSPACE, CURSOR_VSPACE)
            }

            function onMouseOut() {
                currentType = null;
                currentA = null;
                $WH.Tooltip.hide()
            }

            function getTooltipField(locale, n) {
                var prefix = "tooltip";
                if (currentParams && currentParams.buff) {
                    prefix = "buff"
                }
                if (currentParams && currentParams.text) {
                    prefix = "text"
                }
                if (currentParams && currentParams.premium) {
                    prefix = "tooltip_premium"
                }
                return prefix + (n ? n : "") + "_" + LOCALES[locale]
            }

            function getIconField() {
                return (currentParams && currentParams.text) ? "text_icon" : "icon"
            }

            function getSpellsField(locale) {
                return (currentParams && currentParams.buff ? "buff" : "") + "spells_" + LOCALES[locale]
            }

            function getImageField(locale, whichimage) {
                if (typeof whichimage == "undefined") {
                    return "image_NONE"
                }
                return "image" + whichimage + "_" + LOCALES[locale]
            }

            function initElement(type, id, locale) {
                var arr = LOOKUPS[type][0];
                if (arr[id] == null) {
                    arr[id] = {}
                }
                if (arr[id].status == null) {
                    arr[id].status = {}
                }
                if (arr[id].response == null) {
                    arr[id].response = {}
                }
                if (arr[id].status[locale] == null) {
                    arr[id].status[locale] = STATUS_NONE
                }
            }

            function display(type, id, locale, params) {
                if (!params) {
                    params = {}
                }
                var fullId = getFullId(id, params);
                currentType = type;
                currentId = fullId;
                currentLocale = locale;
                currentParams = params;
                initElement(type, fullId, locale);
                var arr = LOOKUPS[type][0];
                if (arr[fullId].status[locale] == STATUS_OK || arr[fullId].status[locale] == STATUS_NOTFOUND) {
                    showTooltip(arr[fullId][getTooltipField(locale)], arr[fullId][getIconField()], arr[fullId].map, arr[fullId][getSpellsField(locale)], arr[fullId][getTooltipField(locale, 2)], arr[fullId][getImageField(locale, params.image)], arr[fullId]["image" + params.image + "_class"])
                } else {
                    if (arr[fullId].status[locale] == STATUS_QUERYING || arr[fullId].status[locale] == STATUS_SCALES) {
                        showTooltip(_LANG.loading)
                    } else {
                        request(type, id, locale, null, params)
                    }
                }
            }

            function request(type, id, locale, stealth, params) {
                var fullId = getFullId(id, params);
                var arr = LOOKUPS[type][0];
                if (arr[fullId].status[locale] != STATUS_NONE && arr[fullId].status[locale] != STATUS_ERROR) {
                    return
                }
                arr[fullId].status[locale] = STATUS_QUERYING;
                if (!stealth) {
                    arr[fullId].timer = setTimeout(function () {
                        showLoading.apply(this, [type, fullId, locale])
                    }, 333)
                }
                var p = "";
                for (var i in params) {
                    if (i != "rand" && i != "ench" && i != "gems" && i != "sock" && i != "diff" && i != "diffnew" && i != "upgd" && i != "chal") {
                        continue
                    }
                    if (typeof params[i] == "object") {
                        p += "&" + i + "=" + params[i].join(":")
                    } else {
                        if (params[i] === true) {
                            p += "&" + i
                        } else {
                            p += "&" + i + "=" + params[i]
                        }
                    }
                }
                var localeDomain = $WH.g_getDomainFromLocale(locale);
                if (locale == "ptr") {
                    localeDomain = "ptr"
                } else {
                    if (locale == "beta") {
                        localeDomain = "mop"
                    }
                }
                var url = "https://" + localeDomain + "." + LOOKUPS[type][3];
                if ((typeof g_dev != "undefined") && g_dev && (document.location.port != "")) {
                    url += ((document.location.port.indexOf(":") < 0) ? ":" : "") + document.location.port
                }
                $WH.g_ajaxIshRequest(url + "/" + LOOKUPS[type][1] + "=" + id + "&power" + p);
                if (SCALES[type] && !SCALES[type][locale]) {
                    $WH.g_ajaxIshRequest(url + SCALES[type].url)
                }
            }

            function showTooltip(html, icon, map, spellData, html2, image, imageClass) {
                if (currentA && currentA._fixTooltip) {
                    html = currentA._fixTooltip(html, currentType, currentId, currentA)
                }
                initCSS();
                var notFound = false;
                if (!html) {
                    html = LOOKUPS[currentType][2] + " not found :(";
                    icon = "inv_misc_questionmark";
                    notFound = true
                } else {
                    if (currentParams != null) {
                        if (currentParams.forg && $WH.g_reforgeStats[currentParams.forg]) {
                            var reforge = $WH.g_reforgeStats[currentParams.forg];
                            var _ = [reforge.i1];
                            for (var i in $WH.g_individualToGlobalStat) {
                                if ($WH.g_individualToGlobalStat[i] == _[0]) {
                                    _.push(i)
                                }
                            }
                            var m;
                            if ((m = html.match(new RegExp("(<!--(stat|rtg)(" + _.join("|") + ")-->)[+-]?([0-9]+)"))) && !html.match(new RegExp("<!--(stat|rtg)" + reforge.i2 + "-->[+-]?[0-9]+"))) {
                                var value = Math.floor(m[4] * reforge.v),
                                    statName = LANG.traits[reforge.s2][0];
                                if (reforge.i2 == 6) {
                                    html = html.replace("<!--rs-->", "<br />+" + value + " " + statName)
                                } else {
                                    html = html.replace("<!--rr-->", $WH.sprintfa(LANG.tooltip_genericrating, statName.toLowerCase(), reforge.i2, value))
                                }
                                html = html.replace(m[0], m[1] + (m[4] - value));
                                html = html.replace("<!--rf-->", '<span class="q2">' + $WH.sprintfa(LANG.tooltip_reforged, value, LANG.traits[reforge.s1][2], LANG.traits[reforge.s2][2]) + "</span><br />")
                            }
                        }
                        if (currentParams.pcs && currentParams.pcs.length) {
                            var itemId = currentId.match(/^(\d+)/);
                            itemId = itemId[1];
                            var n = 0;
                            for (var i = 0, len = currentParams.pcs.length; i < len; ++i) {
                                var m;
                                if (m = html.match(new RegExp("<span><!--si([0-9]+:)*" + currentParams.pcs[i] + '(:[0-9]+)*--><a href="/??item=(\\d+)">(.+?)</a></span>'))) {
                                    html = html.replace(m[0], '<span class="q8"><!--si' + currentParams.pcs[i] + '--><a href="/item=' + m[3] + '">' + (($WH.isset("g_items") && g_items[currentParams.pcs[i]]) ? g_items[currentParams.pcs[i]]["name_" + LOCALES[currentLocale]] : m[4]) + "</a></span>");
                                    ++n
                                }
                            }
                            if (n > 0) {
                                html = html.replace("(0/", "(" + n + "/");
                                html = html.replace(new RegExp("<span>\\(([0-" + n + "])\\)", "g"), '<span class="q2">($1)')
                            }
                        }
                        if (currentParams.know && currentParams.know.length) {
                            html = $WH.g_setTooltipSpells(html, currentParams.know, spellData)
                        }
                        if (currentParams.lvl) {
                            html = $WH.g_setTooltipLevel(html, currentParams.lvl, currentParams.buff)
                        }
                        if (currentParams.who && currentParams.when) {
                            html = html.replace("<table><tr><td><br />", '<table><tr><td><br /><span class="q2">' + $WH.sprintf(_LANG.achievementcomplete, currentParams.who, currentParams.when.getMonth() + 1, currentParams.when.getDate(), currentParams.when.getFullYear()) + "</span><br /><br />");
                            html = html.replace(/class="q0"/g, 'class="r3"')
                        }
                        if (currentParams.notip && image) {
                            html = "";
                            icon = null
                        }
                        if ((currentType == TYPE_PETABILITY) && currentParams.pwr) {
                            html = html.replace(/<!--sca-->(\d+)<!--sca-->/g, function (m, p1) {
                                return Math.floor(parseInt(p1) * (1 + 0.05 * currentParams.pwr))
                            })
                        }
                    }
                } if ((!isRemote) && $WH.isset("g_user") && ("lists" in g_user) && $WH.isset("g_completion")) {
                    var comphtml = "";
                    var complist = ((currentType in g_types) && (g_types[currentType] in g_completion)) ? g_completion[g_types[currentType]] : false;
                    if (complist && (currentType in g_completion_categories) && ($WH.in_array(g_completion_categories[currentType], LOOKUPS[currentType][0][currentId].completion_category) == -1)) {
                        complist = false
                    }
                    if (complist) {
                        for (var c in g_user.lists) {
                            var l = g_user.lists[c];
                            if (!(l.id in complist)) {
                                continue
                            }
                            var completed = ($WH.in_array(complist[l.id], currentId) != -1);
                            comphtml += '<br><span class="progress-icon ' + (completed ? "progress-8" : "progress-0") + '"></span> ';
                            comphtml += l.character + " - " + l.realm + " " + l.region
                        }
                    }
                    if (comphtml != "") {
                        html += '<br><span class="q">' + window.LANG.completion + ":</span>" + comphtml
                    }
                }
                if (currentParams.map && map && map.getMap) {
                    html2 = map.getMap()
                }
                if (mode == 1) {
                    $WH.Tooltip.setIcon(null);
                    $WH.Tooltip.show(currentA, html, null, null, null, html2, image, imageClass)
                } else {
                    $WH.Tooltip.setIcon(icon);
                    $WH.Tooltip.showAtXY(html, cursorX, cursorY, CURSOR_HSPACE, CURSOR_VSPACE, html2, image, imageClass)
                } if (isRemote && $WH.Tooltip.logo) {
                    $WH.Tooltip.logo.style.display = (showLogo ? "block" : "none")
                }
            }

            function showLoading(type, id, locale) {
                if (currentType == type && currentId == id && currentLocale == locale) {
                    showTooltip(_LANG.loading);
                    var arr = LOOKUPS[type][0];
                    arr[id].timer = setTimeout(function () {
                        notFound.apply(this, [type, id, locale])
                    }, 3850)
                }
            }

            function notFound(type, id, locale) {
                var arr = LOOKUPS[type][0];
                arr[id].status[locale] = STATUS_ERROR;
                if (currentType == type && currentId == id && currentLocale == locale) {
                    showTooltip(_LANG.noresponse)
                }
            }

            function getFullId(id, params) {
                return id + (params.rand ? "r" + params.rand : "") + (params.ench ? "e" + params.ench : "") + (params.gems ? "g" + params.gems.join(",") : "") + (params.sock ? "s" : "") + (params.upgd ? "u" + params.upgd : "") + (params.chal ? "c" : "")
            }
            this.loadScales = function (type, locale) {
                var arr = LOOKUPS[type][0];
                for (var i in LOCALES) {
                    if (locale == i || (!locale && !isNaN(i))) {
                        SCALES[type][i] = 1;
                        for (var id in arr) {
                            if (arr[id].status[i] == STATUS_SCALES && arr[id].response[i]) {
                                arr[id].response[i]()
                            }
                        }
                    }
                }
            };
            this.register = function (type, id, locale, json) {
                var arr = LOOKUPS[type][0];
                initElement(type, id, locale);
                if (SCALES[type] && !SCALES[type][locale]) {
                    arr[id].status[locale] = STATUS_SCALES;
                    arr[id].response[locale] = this.register.bind(this, type, id, locale, json);
                    return
                }
                if (arr[id].timer) {
                    clearTimeout(arr[id].timer);
                    arr[id].timer = null
                }
                if (!$WH.wowheadRemote && json.map) {
                    if (arr[id].map == null) {
                        arr[id].map = new Mapper({
                            parent: $WH.ce("div"),
                            zoom: 3,
                            zoomable: false,
                            buttons: false
                        })
                    }
                    arr[id].map.update(json.map);
                    delete json.map
                }
                $WH.cO(arr[id], json);
                if (arr[id].status[locale] == STATUS_QUERYING || arr[id].status[locale] == STATUS_SCALES) {
                    if (arr[id][getTooltipField(locale)]) {
                        arr[id].status[locale] = STATUS_OK
                    } else {
                        arr[id].status[locale] = STATUS_NOTFOUND
                    }
                }
                if (currentType == type && id == currentId && currentLocale == locale) {
                    showTooltip(arr[id][getTooltipField(locale)], arr[id].icon, arr[id].map, arr[id][getSpellsField(locale)], arr[id][getTooltipField(locale, 2)], arr[id][getImageField(locale, currentParams.image)], arr[id]["image" + currentParams.image + "_class"])
                }
            };
            this.registerNpc = function (id, locale, json) {
                this.register(TYPE_NPC, id, locale, json)
            };
            this.registerPetAbility = function (id, locale, json) {
                this.register(TYPE_PETABILITY, id, locale, json)
            };
            this.registerObject = function (id, locale, json) {
                this.register(TYPE_OBJECT, id, locale, json)
            };
            this.registerItem = function (id, locale, json) {
                this.register(TYPE_ITEM, id, locale, json)
            };
            this.registerTransmogSet = function (id, locale, json) {
                this.register(TYPE_TRANSMOGSET, id, locale, json)
            };
            this.registerQuest = function (id, locale, json) {
                this.register(TYPE_QUEST, id, locale, json)
            };
            this.registerSpell = function (id, locale, json) {
                this.register(TYPE_SPELL, id, locale, json)
            };
            this.registerAchievement = function (id, locale, json) {
                this.register(TYPE_ACHIEVEMENT, id, locale, json)
            };
            this.registerHearthstoneCard = function (id, locale, json) {
                this.register(TYPE_HEARTHSTONECARD, id, locale, json)
            };
            this.registerHearthstoneDeck = function (id, locale, json) {
                this.register(TYPE_HEARTHSTONEDECK, id, locale, json)
            };
            this.displayTooltip = function (type, id, locale, params) {
                display(type, id, locale, params)
            };
            this.request = function (type, id, locale, params) {
                if (!params) {
                    params = {}
                }
                var fullId = getFullId(id, params);
                initElement(type, fullId, locale);
                request(type, id, locale, 1, params)
            };
            this.requestItem = function (id, params) {
                this.request(TYPE_ITEM, id, Locale.getId(), params)
            };
            this.requestSpell = function (id) {
                this.request(TYPE_SPELL, id, Locale.getId())
            };
            this.getStatus = function (type, id, locale) {
                var arr = LOOKUPS[type][0];
                if (arr[id] != null) {
                    return arr[id].status[locale]
                } else {
                    return STATUS_NONE
                }
            };
            this.getItemStatus = function (id, locale) {
                this.getStatus(TYPE_ITEM, id, locale)
            };
            this.getSpellStatus = function (id, locale) {
                this.getStatus(TYPE_SPELL, id, locale)
            };
            if (isRemote) {
                this.set = function (foo) {
                    $WH.cO(opt, foo)
                };
                this.showTooltip = function (e, tooltip, icon) {
                    updateCursorPos(e);
                    showTooltip(tooltip, icon)
                };
                this.hideTooltip = function () {
                    $WH.Tooltip.hide()
                };
                this.moveTooltip = function (e) {
                    onMouseMov(e)
                }
            }
            init()
        }
};