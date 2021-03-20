//Sidepanel
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}
//Array
var pizza_names = [];
var display_menu_list = [];
var tag = [];
//Function For Displaying The Name
function addPizza() {
    document.getElementById("output").style.visibility = "visible";
    document.getElementById("submit_idea").style.visibility = "visible";
    console.log("#FunctionForDisplayingTheName Is Working Properly")
}
//Function For Submitting The Name
function submit_idea() {
    var name = document.getElementById("name").value;
    console.log(name);
    display_menu_list.push(name);
    console.log(display_menu_list);
    tag.push("<h2>My Suggestions</h2>");
    console.log("Step : " + tag);
    document.getElementById("display_menu").innerHTML = tag + display_menu_list;
}
