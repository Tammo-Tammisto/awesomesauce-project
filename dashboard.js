var selectSubject = document.getElementById("selectSubject");
var hinnang = document.getElementById("hinnang");
const dashboardDiv = document.getElementById('dashboardData');

function createDivs(subject) {
    dashboardData.innerHTML = '';
    const subjectBlock = document.createElement('div');
    hinnang.innerHTML = `
            <h1>Average subject's rating: </h1>
            <h1>${subject.avg_rating}*</h1>
        `;

    subject.comments.forEach(comment => {
        const commentBlock = document.createElement('div');
        commentBlock.innerHTML = `
                <p><strong>${comment.student_group}</strong> ${comment.comment}</p>
            `;
        subjectBlock.appendChild(commentBlock);
    });

    dashboardDiv.appendChild(subjectBlock);
}

fetch('http://localhost:3000/dashboard_data')
    .then(response => response.json())
    .then(data => {
        const subjectDataArray = [];

        data.forEach(subjectItem => {
            const subjectObj = {
                subject: subjectItem.subject,
                avg_rating: parseFloat(subjectItem.avg_rating).toFixed(2),
                comments: subjectItem.comments.map(commentItem => {
                    return {
                        comment: commentItem.comment,
                        student_group: commentItem.student_group
                    };
                })
            };
            subjectDataArray.push(subjectObj);
        });
        console.log(subjectDataArray);
        // muuda tähe täidetuvust protsentides
        //setRatingWidth(subjectDataArray[1].avg_rating * 20);
        var subjectOrder = []
        for (var i = 0; i < subjectDataArray.length; i++) {
            var opt = subjectDataArray[i].subject;
            subjectOrder.push(opt);
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            selectSubject.appendChild(el);
        }
        console.log(subjectOrder);

        var mathIndex = subjectOrder.findIndex(x => x == "Matemaatika");
        var englishIndex = subjectOrder.findIndex(x => x == "Inglise keel");
        var estoniaIndex = subjectOrder.findIndex(x => x == "Eesti keel");
        var russianIndex = subjectOrder.findIndex(x => x == "Vene keel");
        var programmingIndex = subjectOrder.findIndex(x => x == "Programmeerimine");
        
        document.getElementById("selectSubject").onchange = function () {
            if (selectSubject.value == "Aine nimi") {
                setRatingWidth(0);
                dashboardData.innerHTML = '';
            }
            else if (selectSubject.value == "Matemaatika") {
                console.log("Matemaatika");
                setRatingWidth(subjectDataArray[mathIndex].avg_rating * 20);
                createDivs(subjectDataArray[mathIndex]);
            }
            else if (selectSubject.value == "Inglise keel") {
                console.log("Inglise keel");
                setRatingWidth(subjectDataArray[englishIndex].avg_rating * 20);
                createDivs(subjectDataArray[englishIndex]);
            }
            else if (selectSubject.value == "Eesti keel") {
                console.log("Eesti keel");
                setRatingWidth(subjectDataArray[estoniaIndex].avg_rating * 20);
                createDivs(subjectDataArray[estoniaIndex]);
            }
            else if (selectSubject.value == "Vene keel") {
                console.log("Vene keel");
                setRatingWidth(subjectDataArray[russianIndex].avg_rating * 20);
                createDivs(subjectDataArray[russianIndex]);
            }
            else if (selectSubject.value == "Programmeerimine") {
                console.log("Programmeerimine");
                setRatingWidth(subjectDataArray[programmingIndex].avg_rating * 20);
                createDivs(subjectDataArray[programmingIndex]);
            }
        };
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

const ratingRect = document.getElementById('rating');

function setRatingWidth(percentage) {
    ratingRect.style.width = `${percentage}%`;
}