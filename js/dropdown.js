var card_850 = document.getElementsByClassName("card_850")
var card_855 = document.getElementsByClassName("card_855")
var card_8820 = document.getElementsByClassName("card_8820")
var card_8850 = document.getElementsByClassName("card_8850")

function get_850(show) {
    for (var i = 0; i < card_850.length; i++) {
        card_850[i].style.display = show
    }
}

function get_855(show) {
    for (var i = 0; i < card_855.length; i++) {
        card_855[i].style.display = show
    }
}

function get_8820(show) {
    for (var i = 0; i < card_8820.length; i++) {
        card_8820[i].style.display = show
    }
}

function get_8850(show) {
    for (var i = 0; i < card_8850.length; i++) {
        card_8850[i].style.display = show
    }
}

$(document).ready(function () {
    $("#checkType").on("change", function () {
        var ct = document.getElementById("checkType");
        var index = ct.selectedIndex;
        var sv = ct.options[index].value;
        if (sv == "all") {
            get_850("flex");
            get_855("flex");
            get_8820("flex");
            get_8850("flex");

        } else if (sv == "850") {
            get_850("flex");
            get_855("none");
            get_8820("none");
            get_8850("none");
        } else if (sv == "855") {
            get_850("none");
            get_855("flex");
            get_8820("none");
            get_8850("none");
        } else if (sv == "8820") {
            get_850("none");
            get_855("none");
            get_8820("flex");
            get_8850("none");
        } else if (sv == "8850") {
            get_850("none");
            get_855("none");
            get_8820("none");
            get_8850("flex");
        }
    })
})