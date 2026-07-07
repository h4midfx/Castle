const troops = {

    zanjir:{
        name:"👹 زنجیرشکن",
        wheat:321,
        wood:391,
        stone:500,
        iron:149,
        time:1.45,
        power:92.85
    },


    jaloot:{
        name:"👹 جالوت",
        wheat:539,
        wood:291,
        stone:148,
        iron:57,
        time:1.15,
        power:73.75
    },


    dastderaz:{
        name:"👑 دست‌دراز غول",
        wheat:199,
        wood:91,
        stone:128,
        iron:349,
        time:1.38,
        power:68.45
    },


    gladiator:{
        name:"⚔️ گلادیاتور",
        wheat:235,
        wood:322,
        stone:337,
        iron:349,
        time:1.42,
        power:94.35
    },


    gard:{
        name:"👑 گارد سلطنتی",
        wheat:240,
        wood:244,
        stone:288,
        iron:439,
        time:1.15,
        power:84.2
    },


    shekanshamsher:{
        name:"⚔️ شمشیرشکن",
        wheat:203,
        wood:357,
        stone:384,
        iron:258,
        time:0.50,
        power:83.85
    },


    negahban:{
        name:"🛡️ نگهبان",
        wheat:221,
        wood:210,
        stone:290,
        iron:403,
        time:0.50,
        power:77.5
    },


    doshamsher:{
        name:"⚔️ دوشمشیره",
        wheat:149,
        wood:148,
        stone:206,
        iron:244,
        time:0.58,
        power:52.95
    },


    modafe:{
        name:"🛡️ مدافع",
        wheat:111,
        wood:140,
        stone:151,
        iron:199,
        time:0.39,
        power:52.95
    },


    jonongar:{
        name:"😈 جنونگر",
        wheat:102,
        wood:119,
        stone:131,
        iron:154,
        time:0.42,
        power:47.35
    },


    shovaliye:{
        name:"🐎 شوالیه",
        wheat:64,
        wood:98,
        stone:103,
        iron:159,
        time:0.53,
        power:42.1
    },


    shamsherzan:{
        name:"🗡️ شمشیرزن",
        wheat:61,
        wood:85,
        stone:77,
        iron:117,
        time:0.45,
        power:35.1
    },


    javidan:{
        name:"👑 جاویدان",
        wheat:398,
        wood:392,
        stone:304,
        iron:500,
        time:1.40,
        power:95.3
    },


    hoplite:{
        name:"🛡️ هوپلیت",
        wheat:209,
        wood:301,
        stone:234,
        iron:367,
        time:1.13,
        power:84.2
    }

};





function calculate(){


    let type =
    document.getElementById("troop").value;


    let count =
    Number(document.getElementById("count").value);



    let troop = troops[type];



    let result = document.getElementById("result");



    if(count <= 0){

        result.innerHTML =
        "❌ لطفاً تعداد درست وارد کنید";

        return;

    }




    result.innerHTML = `


    <h2>${troop.name}</h2>


    ⚔️ قدرت:
    <span class="green">
    ${Math.floor(troop.power * count)}
    </span>

    <br>


    🌾 گندم:
    ${troop.wheat * count}


    <br>


    🪵 چوب:
    ${troop.wood * count}


    <br>


    🪨 سنگ:
    ${troop.stone * count}


    <br>


    ⛏️ آهن:
    ${troop.iron * count}


    <br>


    ⏱️ زمان:
    ${(troop.time * count).toFixed(2)}
    دقیقه


    `;


}