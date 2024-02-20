// Month is 0-indexed (January is 0, February is 1, etc), 
// but by using 0 as the day it will give us the last day of the prior
// month. So passing in 1 as the month number will return the last day
// of January, not February

function daysInPrevMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

function calculateAge(dob) {
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var months = today.getMonth() - dob.getMonth();
    var days = today.getDate() - dob.getDate();

    //console.log(dob)
    //console.log(today)
    //console.log("today year", today.getFullYear(), "dob year", dob.getFullYear(), "resta", age)
    //console.log("today month", today.getMonth(), "dob month", dob.getMonth(), "resta", months)
    //console.log("today day", today.getDate(), "dob day", dob.getDate(), "resta", days)

    //si el mes de hoy es menor al mes de nacimiento
    if (months < 0) {
        age -= 1;
        months += 12;
    }

    //si el dia de hoy es menor al dia de nacimiento
    if (days < 0) {
        let daysInMonth = daysInPrevMonth(today.getMonth(), today.getFullYear());
        //console.log("daysInMonth", daysInMonth)
        days += daysInMonth;
        months -= 1;
    }

    return age + ' years, ' + months + ' months and ' + days + ' days';
}

var age = calculateAge(new Date('3/13/2000'));
document.getElementById('age').innerHTML = age;