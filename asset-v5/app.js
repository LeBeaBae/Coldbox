/* This looks like invasion lol - Ters */
var app = new function() {
    this.name = "OldChanic", this.version = "5", this.date = "2022", this.folder = "asset-v5/", this.looptime = 9600, this.bpm = 100, this.totalframe = 452, this.nbpolo = 7, this.nbloopbonus = 1, this.bonusloopA = !0, this.bonusendloopA = !1, this.recmaxloop = 92, this.recminloop = 3, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#0a190f", this.col0 = "#6EB950", this.col1 = "#41A032", this.col2 = "#2D7D28", this.col3 = "#235023", this.col4 = "#14321E", this.animearray = [{
        name: "1_pump",
        color: "FAB405",
        uniqsnd: !0
    }, {
        name: "2_wheel",
        color: "FAB405",
        uniqsnd: !0
    }, {
        name: "3_tiktuk",
        color: "FAB405",
        uniqsnd: !0
    }, {
        name: "4_hammer",
        color: "FAB405",
        uniqsnd: !0
    }, {
        name: "5_snare",
        color: "FAB405",
        uniqsnd: !0
    }, {
        name: "6_bass",
        color: "23BEE1",
        uniqsnd: !0
    }, {
        name: "7_cube",
        color: "23BEE1",
        uniqsnd: !0
    }, {
        name: "8_breather",
        color: "23BEE1",
        uniqsnd: !0
    }, {
        name: "9_transition",
        color: "23BEE1",
        uniqsnd: !0
    }, {
        name: "10_hit",
        color: "23BEE1",
        uniqsnd: !0
    }, {
        name: "11_alert",
        color: "64B92D",
        uniqsnd: !0
    }, {
        name: "12_synth",
        color: "64B92D",
        uniqsnd: !0
    }, {
        name: "13_beep",
        color: "64B92D",
        uniqsnd: !0
    }, {
        name: "14_arpeg",
        color: "64B92D",
        uniqsnd: !0
    }, {
        name: "15_tunbum",
        color: "64B92D",
        uniqsnd: !0
    }, {
        name: "16_mechanic",
        color: "64B92D",
        uniqsnd: !0
    }, {
        name: "17_struck",
        color: "64B92D",
        uniqsnd: !0
    }, {
        name: "18_woah",
        color: "64B92D",
        uniqsnd: !0
    }, {
        name: "19_hum",
        color: "64B92D",
        uniqsnd: !0
    }, {
        name: "20_doot",
        color: "64B92D",
        uniqsnd: !0
    }], this.bonusarray = [], this.unlockerarray = [];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var i = this.animearray[n].name;
        this.animearray[n].soundA = i + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? i + "_a" : i + "_b", this.animearray[n].anime = i + "-sprite.png", this.animearray[n].animeData = i + ".json"
    }
};
