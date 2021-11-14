
const $ = new Env('youthshare');
let md5 = require('md5-node');
let nowTime;
let wxck;
let articles = ["https://focus.youth.cn/article/s?signature=8DpYRNzAGL5bkKE1RXDMELIMQRJXfO6yVrb7ov3Xqel0ngwVyZ&uid=51318172&phone_code=02fe5c26e49c21d3dddadc082f8c1cdc&scid=40740478&time=1636520085&app_version=2.0.2&sign=d5dd8995b4c7780b6ce44aaa0281c641",
"https://focus.youth.cn/article/s?signature=Wn8Pym36L9l0Yoz1y9lROBcR598nuYZ56WE1xKXjQqgZBMVdDe&uid=51318172&phone_code=02fe5c26e49c21d3dddadc082f8c1cdc&scid=40740158&time=1636520099&app_version=2.0.2&sign=4ef8cdd19508637652c63cc1c0ff6255",
"https://focus.youth.cn/article/s?signature=ZLAxJmwrdW82D634Z30BE9szORoMtvbAYzd7N9B05XEbOlQGnj&uid=51318172&phone_code=02fe5c26e49c21d3dddadc082f8c1cdc&scid=40717562&time=1636520111&app_version=2.0.2&sign=b602bfda807d3bacb1b99b9b895c9528",
"https://focus.youth.cn/article/s?signature=8MzJgNdEKAO0xvq7nDED6yC0QkjlT5vqAmb1ZPYQ3lm9pbD2yn&uid=51318172&phone_code=02fe5c26e49c21d3dddadc082f8c1cdc&scid=40737913&time=1636520125&app_version=2.0.2&sign=f7057156574ba6ba9fd37eee771697f2",
"https://focus.youth.cn/article/s?signature=3YDwkj8dqQbPnoB4jAJElqhooNWkf3ngXJ31lgxXL9AJ2zORKM&uid=7708954&phone_code=794294d6bacdf1ece43f102a47211d3e&scid=40740695&time=1636520217&app_version=2.0.2&sign=04924c0d2ed7de6ec019cf43bdc2dcef",
"https://focus.youth.cn/article/s?signature=mq63rgk0doNXbYK7LKBq9NfeeyoxI8MbVBe4EMLO9lwG2zQJeB&uid=7708954&phone_code=794294d6bacdf1ece43f102a47211d3e&scid=40740158&time=1636520229&app_version=2.0.2&sign=867bac625966ca7e66163829e70012cc",
"https://focus.youth.cn/article/s?signature=yGdoJZx2eAwpjgl7O8PZYWuWW8nLSgZpOK0a0PMbqvLnr9EKzR&uid=7708954&phone_code=794294d6bacdf1ece43f102a47211d3e&scid=40754621&time=1636520239&app_version=2.0.2&sign=c908bb515d19c330e9fe2faca8eb971f",
"https://focus.youth.cn/article/s?signature=8DpYRNzAGL5bkKE1RXgjvvu33EPGUO6yBEE7ov3Xqel0ngwVyZ&uid=7708954&phone_code=794294d6bacdf1ece43f102a47211d3e&scid=40217923&time=1636520252&app_version=2.0.2&sign=e00c1d32b71102511c404a4a53610d0a",
"https://focus.youth.cn/article/s?signature=MGDKgpQNLZkJvEd4q2qAddunx2rgTNb3Ok37rny295VAlmPWzY&uid=59460622&phone_code=22e94f6e6662d545dbaf095b2ecb6646&scid=40744605&time=1636520278&app_version=2.0.2&sign=1ce51c27823a5d2051f7c971013aad15",
"https://focus.youth.cn/article/s?signature=LrNmbVzoOlxeyXw4pvx3gOc3E62zHzKQ2vlaM8ZkP3BAW9pJqD&uid=59460622&phone_code=22e94f6e6662d545dbaf095b2ecb6646&scid=40755451&time=1636520297&app_version=2.0.2&sign=bc82dbf1943c039763e011098e796fc5",
"https://focus.youth.cn/article/s?signature=8DpYRNzAGL5bkKE1RXDwZEFZlkrxiO6yBjP7ov3Xqel0ngwVyZ&uid=59460622&phone_code=22e94f6e6662d545dbaf095b2ecb6646&scid=40751683&time=1636520305&app_version=2.0.2&sign=cae79272c21525f0d35d0eef04893743",
"https://focus.youth.cn/article/s?signature=lbgJRpz0We53NxQ4Q8GLlRSV9J3ZCxA3Xb81koMEv6nydKPZLD&uid=59460622&phone_code=22e94f6e6662d545dbaf095b2ecb6646&scid=40755368&time=1636520314&app_version=2.0.2&sign=657cf67eba7ad084d8d22ac234acb7fa",
"https://focus.youth.cn/article/s?signature=X6AKVevx2zmNQOjaBJ9ddAIKeD9Ds6e0lo8ad93krDoJqw0WYn&uid=60091875&phone_code=3d72154895798959af56f44d9ae471eb&scid=40801128&time=1636854888&app_version=2.0.2&sign=dc0195366b8b0bd6281956463eabf483",
"https://focus.youth.cn/article/s?signature=XwoQBWe23qDAVz946lrQJjTpDo8oskEWKNbavNyb8EMlgYnm6k&uid=60091875&phone_code=3d72154895798959af56f44d9ae471eb&scid=40800853&time=1636854899&app_version=2.0.2&sign=5d2e3434d7c4e3b1baed1bba29f01a36",
"https://focus.youth.cn/article/s?signature=lbgJRpz0We53NxQ4Q8AoKGfAJmXmcxAjLWg1koMEv6nydKPZLD&uid=60091875&phone_code=3d72154895798959af56f44d9ae471eb&scid=40805990&time=1636854908&app_version=2.0.2&sign=9314f1aedc228bd0ca9e3bf5646637e9",
"https://focus.youth.cn/article/s?signature=qbBkjWwN2L3nP684eLqvVAIDpr8rCBRrlRM1gRyAEYpXDmeo0O&uid=60091875&phone_code=3d72154895798959af56f44d9ae471eb&scid=40648312&time=1636854918&app_version=2.0.2&sign=283590dd96ef95fd7057c06382fe5790",
"https://focus.youth.cn/article/s?signature=Vwo03AWDZyGJbgP7N8OQvksxQjyDsvY9ZYn1nMY6dljLxe9Opk&uid=60073076&phone_code=463fae4b315406cf1e5e7b10c2207501&scid=40798703&time=1636854931&app_version=2.0.2&sign=f03df6864b01ecc5cd5e522f4eec8458",
"https://focus.youth.cn/article/s?signature=Mq8BYdozK36wyv5a2eKkrGsyzrKGhNpP2pX7nPDWpxVg2LZmRX&uid=60073076&phone_code=463fae4b315406cf1e5e7b10c2207501&scid=40806049&time=1636854941&app_version=2.0.2&sign=e1bf399c662e2fab3357ca74892fcae5",
"https://focus.youth.cn/article/s?signature=0Z3Jgv96wqmVPeM7orLq8mhY9lKLtx5Nm5K4jpGDnANbo8KXQr&uid=60073076&phone_code=463fae4b315406cf1e5e7b10c2207501&scid=40802854&time=1636854950&app_version=2.0.2&sign=a45ede13c56a21dc2140c5ba1ebfaba3",
"https://focus.youth.cn/article/s?signature=Vwo03AWDZyGJbgP7N8O6OKsxQjyDsvY9ZEp1nMY6dljLxe9Opk&uid=60073076&phone_code=463fae4b315406cf1e5e7b10c2207501&scid=40795161&time=1636854961&app_version=2.0.2&sign=5d26516035606f180d053368c0e9f3f1"]


let encodearticles;


let headers = {
    "Accept-Encoding": "gzip, deflate, br",
    "Accept": "*/*",
    "Connection": "keep-alive",
    "Referer": "https://focus.youth.cn/",
    "Host": "script.baertt.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.2(0x18000231) NetType/WIFI Language/zh_CN",
    "Accept-Language": "zh-cn"
};

!(async() => {
    for (let i = 0; i < articles.length; i++) {
		encodearticles = encodeURIComponent(encodeURIComponent(articles[i]));
        nowTime = new Date().getTime();
        wxck = md5(nowTime);
        $.log(wxck);
		
        await storage();
        await $.wait(3000);

        await visit();
        await $.wait(3000);

        await openpage();
        await $.wait(3000);

        await callback();
        await $.wait(3000);

    }
})()
.catch((e) => $.logErr(e))
.finally(() => $.done())

function storage() {

    return new Promise((resolve, reject) => {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/storage?t=${wxck}&referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp2`;
        const request = {
            url: url,
            headers: headers,
        };

        $.get(request, function (error, response, data) {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function visit() {

    return new Promise((resolve, reject) => {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/visit?type=1&si=${wxck}&referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp3`;

        const request = {
            url: url,
            headers: headers,
        };

        $.get(request, function (error, response, data) {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function openpage() {
    return new Promise((resolve, reject) => {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/openpage?referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp5`;
        const request = {
            url: url,
            headers: headers,

        };

        $.get(request, function (error, response, data) {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function callback() {
    return new Promise((resolve, reject) => {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/callback?si=${wxck}&referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp6`;
        const request = {
            url: url,
            headers: headers,
        };

        $.get(request, function (error, response, data) {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            }
             : t;
            let s = this.get;
            return "POST" === e && (s = this.post),
            new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t,
            this.http = new s(this),
            this.data = null,
            this.dataFile = "box.dat",
            this.logs = [],
            this.isMute = !1,
            this.isNeedRewrite = !1,
            this.logSeparator = "\n",
            this.startTime = (new Date).getTime(),
            Object.assign(this, e),
            this.log(`\n${this.name}\u811a\u672c,\u5f00\u59cb\u6267\u884c:`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i)
                try {
                    s = JSON.parse(this.getdata(t))
                } catch {}
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20,
                r = e && e.timeout ? e.timeout : r;
                const[o, h] = i.split("@"),
                a = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: r
                    },
                    headers: {
                        "X-Key": o,
                        Accept: "*/*"
                    }
                };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode())
                return {}; {
                this.fs = this.fs ? this.fs : require("fs"),
                this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                e = this.path.resolve(process.cwd(), this.dataFile),
                s = this.fs.existsSync(t),
                i = !s && this.fs.existsSync(e);
                if (!s && !i)
                    return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"),
                this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                e = this.path.resolve(process.cwd(), this.dataFile),
                s = this.fs.existsSync(t),
                i = !s && this.fs.existsSync(e),
                r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r)
                    return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const[, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const[, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                o = this.getval(i),
                h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                    s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                    s = this.setval(JSON.stringify(o), i)
                }
            } else
                s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"),
            this.cktough = this.cktough ? this.cktough : require("tough-cookie"),
            this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar,
            t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => {})) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
            this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                        "X-Surge-Skip-Scripting": !1
                    })), $httpClient.get(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                    e(t, s, i)
                })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        hints: !1
                    })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            this.ckjar.setCookieSync(s, null),
                            e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                }))
        }
        post(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon())
                this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                        "X-Surge-Skip-Scripting": !1
                    })), $httpClient.post(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                    e(t, s, i)
                });
            else if (this.isQuanX())
                t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        hints: !1
                    })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                 : this.isSurge() ? {
                    url: t
                }
                 : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                        s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                        s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e),
            s && h.push(s),
            i && h.push(i),
            console.log(h.join("\n")),
            this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]),
            console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
            s = (e - this.startTime) / 1e3;
            this.log("", `${this.name}\u811a\u672c, \u6267\u884c\u7ed3\u675f! \u7528\u65f6${s}\u79d2`),
            this.log(),
            (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }
    (t, e)
}
