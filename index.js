// code your solution here

function saturdayFun(){
    console.log("This Saturday, I want to roller-skate!")
}
saturdayFun();


function saturdayFun(activity = "roller-skate!") {
    console.log(`This Saturday, I want to ${activity}`);
}
saturdayFun();
saturdayFun("bathe my dog!");
