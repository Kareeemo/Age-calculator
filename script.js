let currentYear = 2022;
let currentMonth = 9;
let currentDate = 1;

const userYear = document.getElementById('year-input');
const userMonth = document.getElementById('month-input');
const userDate = document.getElementById('date-input');
const answerArea = document.getElementById('text-area');
let overallMonths = currentMonth - userMonth.value;

function Submit() {
    answerArea.innerHTML = `Your Age is ${currentYear - userYear.value} Years ,
     ${Math.abs(currentMonth - userMonth.value)} months and ${Math.abs(currentDate - userDate.value)} days old `;

}


