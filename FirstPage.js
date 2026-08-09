function openPage(pageID){

    let pages = document.querySelectorAll(".page");

    pages.forEach(function(page){

        page.classList.remove("active");

    });


    document.getElementById(pageID)
    .classList.add("active");

}




function sumNumbers(){

    let a = Number(
        document.getElementById("number1").value
    );


    let b = Number(
        document.getElementById("number2").value
    );


    let result = a + b;


    document.getElementById("answer").innerHTML =
    "نتیجه: " + result;

}