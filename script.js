var selectSubject = document.getElementById("selectSubject");
var subject = ["Matemaatika", "Inglise keel", "Eesti keel", "Vene keel", "Programmeerimise alused"];

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
    else if (selectSubject.value == "Programmeerimise alused") {
        console.log("Programmeerimise alused");
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
    var rating = document.querySelector('input[name="rating"]:checked').value;
    var comment = document.getElementById("comment").value;

    // Here you can handle the submission, for now just logging the values
    console.log("Rating: ", rating);
    console.log("Comment: ", comment);
    console.log("Subject: ", selectSubject.value);
    console.log("Teacher: ", selectTeacher.value);

    // You can send this data to the server using AJAX or other methods
    // For simplicity, I'm just logging it here
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