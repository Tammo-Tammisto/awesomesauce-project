var select = document.getElementById("selectSubject");
var subject = ["Matemaatika", "Inglise keel", "Eesti keel", "Vene keel", "Programmeerimise alused"];

for(var i = 0; i < subject.length; i++) {
    var opt = subject[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}
MathTeachers = ["Eva Saul", "Hanna"]

function dropdownTeacher(listindex)
{
     document.getElementById("ddlCity").options.length = 0;
     switch (listindex) 
     {
         case "Karnataka":
                 document.getElementById("ddlCity").options[0] = new Option("--select--", "");
                 document.getElementById("ddlCity").options[1] = new Option("Dharawad", "Dharawad");
                 document.getElementById("ddlCity").options[2] = new Option("Haveri", "Haveri");
                 document.getElementById("ddlCity").options[3] = new Option("Belgum", "Belgum");
                 document.getElementById("ddlCity").options[4] = new Option("Bijapur", "Bijapur");

             break;

         case "Tamilnadu":
             document.getElementById("ddlCity").options[0] = new Option("--select--", "");
             document.getElementById("ddlCity").options[1] = new Option("dgdf", "dgdf");
             document.getElementById("ddlCity").options[2] = new Option("gffd", "gffd");


             break;
     }

}