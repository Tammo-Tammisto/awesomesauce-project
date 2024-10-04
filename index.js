var selectSubject = document.getElementById("selectSubject");
var subject = ["Matemaatika", "Inglise keel", "Eesti keel", "Vene keel", "Programmeerimine"];

for (var i = 0; i < subject.length; i++) {
    var opt = subject[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectSubject.appendChild(el);
}

mathTeachers = ["Eva Saul", "Hanna Toom", "Rutt Kukk", "Svetlana Mihhailova", "Vitali Retšnoi", "Julia Tammela"];
englishTeachers = ["Anastasia Stacey Andros", "Reen Liivat-Oorschot", "Irina Stassenko", "Helena Stern-Kopra", "Inna Tammet", "Klea Vaher", "Marina Zotikova"];
estonianTeachers = ["Terje Varul", "Lea Kreinin", "Pille Reins", "Siiri Salin", "Jaanika Stackhouse"];
russianTeachers = ["Alla Nikitina"];
programmingTeachers = ["Timo Triisa", "Gunnar Peipman"];

var selectTeacher = document.getElementById("selectTeacher");
document.getElementById("selectSubject").onchange = function () {
    if (selectSubject.value == "Vali aine") {
        document.getElementById("selectTeacher").innerHTML = "<option>Vali aine enne õpetaja valikut</option>";
    }
    else if (selectSubject.value == "Matemaatika") {
        console.log("Matemaatika");
        document.getElementById("selectTeacher").innerHTML = "";
        for (var i = 0; i < mathTeachers.length; i++) {
            var opt = mathTeachers[i];
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            selectTeacher.appendChild(el);
        }
    }
    else if (selectSubject.value == "Inglise keel") {
        console.log("Inglise keel");
        document.getElementById("selectTeacher").innerHTML = "";
        for (var i = 0; i < englishTeachers.length; i++) {
            var opt = englishTeachers[i];
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            selectTeacher.appendChild(el);
        }
    }
    else if (selectSubject.value == "Eesti keel") {
        console.log("Eesti keel");
        document.getElementById("selectTeacher").innerHTML = "";
        for (var i = 0; i < estonianTeachers.length; i++) {
            var opt = estonianTeachers[i];
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            selectTeacher.appendChild(el);
        }
    }
    else if (selectSubject.value == "Vene keel") {
        console.log("Vene keel");
        document.getElementById("selectTeacher").innerHTML = "";
        for (var i = 0; i < russianTeachers.length; i++) {
            var opt = russianTeachers[i];
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            selectTeacher.appendChild(el);
        }
    }
    else if (selectSubject.value == "Programmeerimine") {
        console.log("Programmeerimine");
        document.getElementById("selectTeacher").innerHTML = "";
        for (var i = 0; i < programmingTeachers.length; i++) {
            var opt = programmingTeachers[i];
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            selectTeacher.appendChild(el);
        }
    }
};

document.getElementById("feedbackForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var subject = document.getElementById("selectSubject").value;
    var teacher = document.getElementById("selectTeacher").value;
    var subject_rating = document.querySelector('input[name="ratingSubject"]:checked').value;
    var teacher_rating = document.querySelector('input[name="rating"]:checked').value;
    var comment = document.getElementById("comment").value;
    var student_name = document.getElementById("studentName").value;
    var student_group = document.getElementById("stGroup").value;

    // Create data object to send to server
    var formData = {
        subject: subject,
        subject_rating: subject_rating,
        teacher: teacher,
        teacher_rating: teacher_rating,
        comment: comment,
        student_name: student_name,
        student_group: student_group
    };

    // Send the data to the Node.js backend using Fetch API
    fetch('http://localhost:3000/submit_feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                alert("Tagasiside edukalt saadetud!");
            } else {
                alert("Midagi läks valesti.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Midagi läks valesti.");
        });
});

const commentEle = document.getElementById('comment');
const counterEle = document.getElementById('counter');

commentEle.addEventListener('input', function (e) {
    const target = e.target;

    // Get the `maxlength` attribute
    const maxLength = target.getAttribute('maxlength');

    // Count the current number of characters
    const currentLength = target.value.length;

    counterEle.innerHTML = `${currentLength}/${maxLength}`;
});

function fieldCheck() {
    var rating = document.querySelector('input[name="rating"]:checked').value;
    var studentName = document.getElementById("studentName").value;
    var stGroup = document.getElementById("stGroup").value;
    if (selectSubject.value == "Vali aine" || selectTeacher.value == "Vali õpetaja" || rating == "" || studentName == "" || stGroup == "") {
        alert("Vaata üle, kas kõik väljad on täidetud!");
        return false;
    }
    return true;
}

