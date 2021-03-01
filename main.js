var menu_lst_array = [
    "Chicken pizza",
    "Cheese pizza",
    "Pepperoni pizza",
    "Ham pizza",
    "Bacon pizza",
    "Paneer pizza"
];

document.getElementById("b2").style.display = "none";

function open_menu() {
    var htmldata;
    htmldata = "<ol class= 'menulist' >"
    menu.sort();
    for (var i = 0; i < menu_lst_aaray.length; i++) {
        htmldata = htmldata + '<li>' + menu_lst_array[i] + '<li>';

    }
    htmldata = htmldata + "</ol>";
    document.getElementById("display_menu").innerHTML = htmldata;
    document.getElementById("b2").style.display = "inline-block";
}

function getmenu() {
    var htmldata;
    htmldata = "<ol class= 'menulist' >"
    menu.sort();
    for (var i = 0; i < menu_lst_aaray.length; i++) {
        htmldata = htmldata + '<li>' + menu_lst_array[i] + '<li>';

    }
    htmldata = htmldata + "</ol>";
    document.getElementById("viewblock").innerHTML = menu_lst_array;
    document.getElementById("b2").style.display = "inline-block";
}