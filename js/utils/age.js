function calculateAge(dob) {
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var months = today.getMonth() - dob.getMonth() - 1;
    var days = today.getDate() - dob.getDate();

    if (months < 0) {
        months *= -1;
        age -= 1;
    }

    //si ya estamos a 13, sumar otro mes
    if (days < 0) {
        days *= -1;
    } else {
        months += 1;
    }

    return age + ' years, ' + months + ' months and ' + days + ' days';
}

var age = calculateAge(new Date('11/07/2000'));
document.getElementById('age').innerHTML = age;