var akan = function(year, month, day, gender) {
    
    //array of male akan names
    var maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    //array of female names
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    
    var day= new Date(year, --month, day);
    if (gender === "Female") {
        return day && femaleNames[d.getDay()];
    } else {
        return day && maleNames[d.getDay()];
    }
}

$(document).ready(function() {
    $("form#form").submit(function(event) {
        event.preventDefault();
        var year = parseInt($("#year").val());
        var month = parseInt($("#month").val());
        var day = parseInt($("#date").val());
        var gender = $("input:radio[name=gender]:checked").val();
        var result = akan(y, m, d, g);
        alert("Your akan name is: " + result);
        
        //refresh page
        document.getElementById("form").reset();
    });
});