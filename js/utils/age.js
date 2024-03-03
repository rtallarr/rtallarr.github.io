// Month is 0-indexed (January is 0, February is 1, etc), 
// but by using 0 as the day it will give us the last day of the prior
// month. So passing in 1 as the month number will return the last day
// of January, not February

function daysInPrevMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

 function calculateAge(dob) {
    var today = new Date();

    const currentAge = today.getFullYear();
    const dobAge = dob.getFullYear();

    const currentMonth = today.getMonth();
    const dobMonth = dob.getMonth();

    const currentDay = today.getDate();
    const dobDay = dob.getDate();

    var age = currentAge - dobAge;

    if (currentMonth >= dobMonth) {
        var months = currentMonth - dobMonth;
    } else {
        age--;
        var months = 12 + currentMonth - dobMonth;
    }

    if (currentDay >= dobDay) {
        var days = daysInPrevMonth(today.getMonth(), today.getFullYear()) + currentDay - dobDay;
    } else {
        var days = daysInPrevMonth(today.getMonth(), today.getFullYear()) + currentDay - dobDay;
        months--;
        if (months < 0) {
            months = 11;
            age--;
        }
    }


    return age + ' years, ' + months + ' months and ' + days + ' days';
 }

document.getElementById('age').innerHTML = calculateAge(new Date('3/13/2000'));