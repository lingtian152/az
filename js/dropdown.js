$(document).ready(function () {
    $("#checkType").on("change", function () {
        var ct = document.getElementById("checkType");
        var index = ct.selectedIndex;
        var sv = ct.options[index].value;
        if (sv == "all") {
            $("#card_850").fadeIn("fast");
            $("#card_855").fadeIn("fast");
            $("#card_8820").fadeIn("fast");
            $("#card_8820_1").fadeIn("fast");
            $("#card_8850").fadeIn("fast");
        } else if (sv == "850") {
            $("#card_850").fadeIn("fast");
            $("#card_855").fadeOut("fast");
            $("#card_8820").fadeOut("fast");
            $("#card_8820_1").fadeOut("fast");
            $("#card_8850").fadeOut("fast");
        } else if (sv == "855") {
            $("#card_850").fadeOut("fast");
            $("#card_855").fadeIn("fast");
            $("#card_8820").fadeOut("fast");
            $("#card_8820_1").fadeOut("fast");
            $("#card_8850").fadeOut("fast");
        } else if (sv == "8820") {
            $("#card_850").fadeOut("fast");
            $("#card_855").fadeOut("fast");
            $("#card_8820").fadeIn("fast");
            $("#card_8820_1").fadeOut("fast");
            $("#card_8850").fadeOut("fast");
        } else if (sv == "8850") {
            $("#card_850").fadeOut("fast");
            $("#card_855").fadeOut("fast");
            $("#card_8820").fadeOut("fast");
            $("#card_8820_1").fadeOut("fast");
            $("#card_8850").fadeIn("fast");
        }
    })
})