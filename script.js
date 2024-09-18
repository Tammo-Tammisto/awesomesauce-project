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