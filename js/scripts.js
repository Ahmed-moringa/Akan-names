var akan = function(year, month, day, gender) {
    
    //array of male akan names
    var maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    //array of female names
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var day= new Date(year, --month, dau);
    if (g === "Female") {
        return day && femaleNames[d.getDay()];
    } else {
        return day && maleNames[d.getDay()];
    }
}

