// This program calculates the numeric grade based on category weights. Then it calculates the letter grade based on the numeric grade.
//Both the numeric and letter grades are outputted on the html page. One is sent to an alert and one is printed on the form.

$("#btnSend").click(function () {
    var grade = 0;
    var letterGrade = "";
    grade = (($("#assignments").val() * .5) +
    ($("#group").val() * .1) +
    ($("#quizzes").val() * .1) +
    ($("#midterm").val() * .1) +
    ($("#final").val() * .1) +
    ($("#intex").val() * .1))
    //grade = math.round(grade)

    if (grade > 100 || grade < 0) {
        alert("There is an error with your form. Please enter the values in again.")
    } else {
        if (grade >= 94) {
            letterGrade = "A"
        } else if ((grade < 94) && (grade >= 90)) {
            letterGrade = "A-"
        } else if ((grade < 90) && (grade >= 87)) {e
            letterGrade = "B+"
        } else if ((grade < 87) && (grade >= 84)) {
            letterGrade = "B"
        } else if ((grade < 84) && (grade >= 80)) {
            letterGrade = "B-"
        } else if ((grade < 80) && (grade >= 77)) {
            letterGrade = "C+"
        } else if ((grade < 77) && (grade >= 74)) {
            letterGrade = "C"
        } else if ((grade < 74) && (grade >= 70)) {
            letterGrade = "C-"
        } else if ((grade < 70) && (grade >= 67)) {
            letterGrade = "D+"
        } else if ((grade < 67) && (grade >= 64)) {
            letterGrade = "D"
        } else if ((grade < 64) && (grade >= 60)) {
            letterGrade = "D-"
        } else {
            letterGrade = "E"
        }
        alert("Your final grade percentage is a " + grade + "%");

        $('#finalGrade').text("Final Grade: " + letterGrade);
    }

})