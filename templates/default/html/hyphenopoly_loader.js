window.Hyphenopoly = {}, ((e, t, s, n) => {
    "use strict";
    const l = e => new Map(e),
        r = "Hyphenopoly_Loader.js",
        o = t.currentScript.src,
        a = sessionStorage;
    let i = !1;
    s.config = c => {
        const h = (e, t) => e ? (n.entries(t).forEach((([t, s]) => {
            e[t] = e[t] || s
        })), e) : t;
        s.cft = !!c.cacheFeatureTests, s.cft && a.getItem(r) ? (s.cf = JSON.parse(a.getItem(r)), s.cf.langs = l(s.cf.langs)) : s.cf = {
            langs: l(),
            pf: !1
        };
        const d = o.slice(0, o.lastIndexOf("/") + 1),
            p = d + "patterns/";
        s.paths = h(c.paths, {
            maindir: d,
            patterndir: p
        }), s.s = h(c.setup, {
            CORScredentials: "omit",
            hide: "all",
            selectors: {
                ".hyphenate": {}
            },
            timeout: 1e3
        }), s.s.hide = ["all", "element", "text"].indexOf(s.s.hide), c.handleEvent && (s.hev = c.handleEvent);
        const f = l(n.entries(c.fallbacks || {}));
        s.lrq = l(), n.entries(c.require).forEach((([e, t]) => {
            s.lrq.set(e.toLowerCase(), {
                fn: f.get(e) || e,
                wo: t
            })
        })), (() => {
            const o = "appendChild",
                c = "createElement",
                h = "createTextNode",
                d = () => {
                    let e = null,
                        t = null;
                    const s = new Promise(((s, n) => {
                        e = s, t = n
                    }));
                    return s.resolve = e, s.reject = t, s
                };
            let p = null;
            s.hide = (e, l) => {
                if (0 === e) p && p.remove();
                else {
                    let e = "{visibility:hidden!important}";
                    p = t[c]("style");
                    let r = "";
                    0 === l ? r = "html" + e : -1 !== l && (2 === l && (e = "{color:transparent!important}"), n.keys(s.s.selectors).forEach((t => {
                        r += t + e
                    }))), p[o](t[h](r)), t.head[o](p)
                }
            };
            const f = (() => {
                let e = null;
                return {
                    ap: () => e ? (t.documentElement[o](e), e) : null,
                    cl: () => {
                        e && e.remove()
                    },
                    cr: n => {
                        if (s.cf.langs.has(n)) return;
                        e = e || t[c]("body");
                        const l = t[c]("div"),
                            r = "hyphens:auto";
                        l.lang = n, l.style.cssText = `visibility:hidden;-webkit-${r};-ms-${r};${r};width:48px;font-size:12px;line-height:12px;border:none;padding:0;word-wrap:normal`, l[o](t[h](s.lrq.get(n).wo.toLowerCase())), e[o](l)
                    }
                }
            })();
            s.res = {
                he: l()
            };
            const y = t => {
                const n = s.lrq.get(t).fn;
                s.cf.pf = !0, s.cf.langs.set(t, "H9Y"), s.res.he.has(n) ? s.res.he.get(n).l.push(t) : s.res.he.set(n, {
                    l: [t],
                    w: e.fetch(s.paths.patterndir + n + ".wasm", {
                        credentials: s.s.CORScredentials
                    })
                })
            };
            s.lrq.forEach(((e, t) => {
                "FORCEHYPHENOPOLY" === e.wo || "H9Y" === s.cf.langs.get(t) ? y(t) : f.cr(t)
            }));
            const g = f.ap();
            g && (g.querySelectorAll("div").forEach((e => {
                var t;
                "auto" === ((t = e.style).hyphens || t.webkitHyphens || t.msHyphens) && e.offsetHeight > 12 ? s.cf.langs.set(e.lang, "CSS") : y(e.lang)
            })), f.cl());
            const m = s.hev;
            if (s.cf.pf) {
                if (s.res.DOM = new Promise((e => {
                        "loading" === t.readyState ? t.addEventListener("DOMContentLoaded", e, {
                            once: !0,
                            passive: !0
                        }) : e()
                    })), s.hide(1, s.s.hide), s.timeOutHandler = e.setTimeout((() => {
                        s.hide(0, null), console.info(r + " timed out.")
                    }), s.s.timeout), i) s.main();
                else {
                    const e = t[c]("script");
                    e.src = s.paths.maindir + "Hyphenopoly.js", t.head[o](e), i = !0
                }
                s.hy6ors = l(), s.cf.langs.forEach(((e, t) => {
                    "H9Y" === e && s.hy6ors.set(t, d())
                })), s.hy6ors.set("HTML", d()), s.hyphenators = new Proxy(s.hy6ors, {
                    get: (e, t) => e.get(t),
                    set: () => !0
                }), m && m.polyfill && m.polyfill()
            } else m && m.tearDown && m.tearDown(), e.Hyphenopoly = null;
            s.cft && a.setItem(r, JSON.stringify({
                langs: [...s.cf.langs.entries()],
                pf: s.cf.pf
            }))
        })()
    }
})(window, document, Hyphenopoly, Object);

Hyphenopoly.config({
    require: {
        "ru": "превысокомногорассмотрительствующий",
        "en-us": "Supercalifragilisticexpialidocious"
    },
    paths: {
        patterndir: "https://cdnjs.cloudflare.com/ajax/libs/hyphenopoly/5.0.0/patterns/",
        maindir: "https://cdnjs.cloudflare.com/ajax/libs/hyphenopoly/5.0.0/"
    },
    setup: {
        selectors: {
            "div.typeset": {}
        }
    }
});
