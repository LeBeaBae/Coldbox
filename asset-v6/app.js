/* This looks like invasion lol - Ters */
var app=new function(){this.name="OldChanic",this.version="5",this.date="2022",this.folder="asset-v6/",this.looptime=9600,this.bpm=100,this.totalframe=452,this.nbpolo=7,this.nbloopbonus=1,this.bonusloopA=!0,this.bonusendloopA=!1,this.recmaxloop=92,this.recminloop=3,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.spritepolo="polo-sprite.png",this.spritepicto="game-picto.png",this.colBck="#0a190f",this.col0="#6EB950",this.col1="#41A032",this.col2="#2D7D28",this.col3="#235023",this.col4="#14321E",this.animearray=[{name:"1_pump",color:"FAB405",uniqsnd:!0},{name:"2_wheel",color:"FAB405",uniqsnd:!0},{name:"3_tiktuk",color:"FAB405",uniqsnd:!0},{name:"4_cluck",color:"FAB405",uniqsnd:!0},{name:"5_hammer",color:"FAB405",uniqsnd:!0},{name:"6_bass",color:"23BEE1",uniqsnd:!0},{name:"7_cube",color:"23BEE1",uniqsnd:!0},{name:"8_breather",color:"23BEE1",uniqsnd:!0},{name:"9_transition",color:"23BEE1",uniqsnd:!0},{name:"10_hit",color:"23BEE1",uniqsnd:!0},{name:"11_alert",color:"64B92D",uniqsnd:!0},{name:"12_synth",color:"64B92D",uniqsnd:!0},{name:"13_beep",color:"64B92D",uniqsnd:!0},{name:"14_soon",color:"64B92D",uniqsnd:!0},{name:"15_whistle",color:"64B92D",uniqsnd:!0},{name:"16_soon",color:"E63C14",uniqsnd:!0},{name:"17_soon",color:"E63C14",uniqsnd:!0},{name:"18_soon",color:"E63C14",uniqsnd:!0},{name:"19_soon",color:"E63C14",uniqsnd:!0},{name:"20_soon",color:"E63C14",uniqsnd:!0}],this.bonusarray=[{name:"Felicidade",src:"v5-b1-felicidade-hb.mp4",code:"1,3,5,10,11",sound:"bonus-felicidade",aspire:"aspire"},{name:"Chegou",src:"v5-b2-chegou-hb.mp4",code:"1,3,5,10,11",sound:"bonus-chegou",aspire:"aspire"},{name:"Musica",src:"v5-b3-musica-hb.mp4",code:"1,3,5,10,11",sound:"bonus-musica",aspire:"aspire"}],this.unlockerarray=[];for(var n=0,o=this.animearray.length;n<o;n++){var i=this.animearray[n].name;this.animearray[n].soundA=i+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?i+"_a":i+"_b",this.animearray[n].anime=i+"-sprite.png",this.animearray[n].animeData=i+".json"}};
/* This looks like invasion lol - Ters */
var app = new function() {
    this.name = "OldChanic", this.version = "5", this.date = "2022", this.folder = "asset-v6/", this.looptime = 9600, this.bpm = 100, this.totalframe = 452, this.nbpolo = 7, this.nbloopbonus = 1, this.bonusloopA = !0, this.bonusendloopA = !1, this.recmaxloop = 92, this.recminloop = 3, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#0a190f", this.col0 = "#6EB950", this.col1 = "#41A032", this.col2 = "#2D7D28", this.col3 = "#235023", this.col4 = "#14321E", this.animearray = [{
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
        name: "4_cluck",
        color: "FAB405",
        uniqsnd: !0
    }, {
        name: "5_hammer",
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
        name: "14_soon",
        color: "64B92D",
        uniqsnd: !0
    }, {
        name: "15_whistle",
        color: "64B92D",
        uniqsnd: !0
    }, {
        name: "16_soon",
        color: "E63C14",
        uniqsnd: !0
    }, {
        name: "17_soon",
        color: "E63C14",
        uniqsnd: !0
    }, {
        name: "18_soon",
        color: "E63C14",
        uniqsnd: !0
    }, {
        name: "19_soon",
        color: "E63C14",
        uniqsnd: !0
    }, {
        name: "20_soon",
        color: "E63C14",
        uniqsnd: !0
    }], this.bonusarray = [], this.unlockerarray = [];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var i = this.animearray[n].name;
        this.animearray[n].soundA = i + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? i + "_a" : i + "_b", this.animearray[n].anime = i + "-sprite.png", this.animearray[n].animeData = i + ".json"
    }
};
