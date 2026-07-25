import { createClient } 
from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";


// SUPABASE CONFIG

const supabaseUrl = 
"https://hhbfahgchqomsabkmkgm.supabase.co";


const supabaseKey =
"sb_publishable_99ibwAjVKBZdkmy2g6EXeg_2cgXdvtr";


const supabase = createClient(
    supabaseUrl,
    supabaseKey
);




// SAVE MISSION

window.saveMission = async function(){


    const mission = {


        player:
        document.getElementById("player").value,


        troop:
        document.getElementById("troop").value,


        count:
        Number(document.getElementById("count").value),


        items:
        Number(document.getElementById("items").value),


        location:
        document.getElementById("location").value,


        spy:
        document.getElementById("spy").value,


        target:
        document.getElementById("target").value,


        attack_location:
        document.getElementById("attackLocation").value,


        attack_time:
        document.getElementById("attackTime").value,


        notes:
        document.getElementById("notes").value

    };



    const {error} = await supabase
        .from("missions")
        .insert([mission]);



    if(error){

        console.log(error);

        alert("❌ خطا در ذخیره");

    }
    else{

        alert("✅ عملیات ثبت شد");

        loadMissions();

    }


};





// LOAD MISSIONS

async function loadMissions(){


    const {data,error} =
    await supabase
    .from("missions")
    .select("*")
    .order("id",{ascending:false});



    if(error){

        console.log(error);

        return;

    }



    displayMissions(data);


}







// DISPLAY

function displayMissions(missions){


    const box =
    document.getElementById("missions");


    box.innerHTML="";



    missions.forEach((m,index)=>{


        box.innerHTML += `


        <div class="card">


        <h3>
        ⚔️ Mission #${index+1}
        </h3>


        <p>👤 Player: ${m.player}</p>

        <p>🛡️ Troop: ${m.troop}</p>

        <p>🔢 Count: ${m.count}</p>

        <p>🎒 Items: ${m.items}</p>

        <p>📍 Location: ${m.location}</p>

        <p>🕵️ Spy: ${m.spy}</p>

        <p>🎯 Target: ${m.target}</p>

        <p>📌 Attack: ${m.attack_location}</p>

        <p>⏰ Time: ${m.attack_time}</p>

        <p>📝 Notes: ${m.notes}</p>


        <button onclick="deleteMission(${m.id})">
        🗑 حذف
        </button>


        </div>


        `;


    });


}







// DELETE

window.deleteMission = async function(id){


    await supabase
    .from("missions")
    .delete()
    .eq("id",id);



    loadMissions();


};







// START

// BUTTON FUNKTION

window.showMissions = function(){

    loadMissions();

};