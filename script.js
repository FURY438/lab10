function checkFields()

{

if(document.getElementById("UN").value=="" || document.getElementById("pwd").value == "")

document.getElementById("send").disabled = true;

else

document.getElementById("send").disabled = false;

}

function handleSelect()

{

var sel = document.getElementById("city");

if(sel.selectedIndex == 0 || sel.selectedIndex == -1)

document.getElementById("send-2").disabled = true;

else

document.getElementById("send-2").disabled = false;

}

function addToList()

{

if(document.getElementById("newElement").value!="") /*Якщо вміст текстового поля не пустий*/

{

var sel = document.getElementById("city-3");

var newItem = new Option();/*Оголошення нового об’єкта типу «Елемент списку»*/

newItem.text=document.getElementById("newElement").value; /*У властивість text нового елемента списку записуємо вміст текстового поля*/

newItem.value=sel.options.length-1; /*У властивість value нового елемента списку записуємо його майбутній порядковий номер у списку */

sel.add(newItem, sel.length); /*До списку додаємо визначений елемент на останню позицію */

}

}

function deleteItem()

{

var sel = document.getElementById("city-3"); /* у змінну sel запишемо посилання на випадаючий список */

sel.remove(sel.selectedIndex); /* Видаляємо елемент, що є вибраним у списку на даний момент */

sel.selectedIndex = 0; /* Робимо вибраним елемент з індексом 0*/

}

function change(){
    var textStyle = document.getElementById("text1").style;
    var textStyle2 = document.getElementById("text2").style;

textStyle.lineHeight = "20px";

textStyle.fontSize = "10pt";

textStyle.color = "#FFFFFF";

textStyle.backgroundColor = "#F70202";
textStyle2.lineHeight = "20px";

textStyle2.fontSize = "10pt";

textStyle2.color = "#FFFFFF";

textStyle2.backgroundColor = "#F70202";
}

function zavd3(){
    document.getElementById("r3").style.visibility = "hidden";
    document.getElementById("r1").style.display = "none";
}
////////////
function check(){
    let pass = document.getElementById("pas1").value;
    let pass2 = document.getElementById("pas2").value;
    let input_4= document.getElementById("txt1").value;
    let veg=document.getElementById("vegetables");

    if(document.getElementById("pas1").value=="" || document.getElementById("pas2").value=="" ){
        document.getElementById("btn-4").disabled=true;
    } else if( pass != pass2){
        document.getElementById("btn-4").disabled=true;
    } else if (input_4 == ""){
        document.getElementById("btn-4").disabled=true;
    }else if(veg.selectedIndex == 0 || veg.selectedIndex == -1){
        document.getElementById("btn-4").disabled=true;
    }else {
        document.getElementById("btn-4").disabled=false;
    }

}

function zavd6(){
    var str = document.getElementById("txt-6").value;
    if(!str.length){

alert("Номер мобільного телефону задано некоректно");
    }else {
var cellPhoneTemplate = new RegExp("[+]?((098)|(095)|(063))[0-9]{7}");

str = str.replace(cellPhoneTemplate,"");

if(str != ""){

alert("Номер мобільного телефону задано некоректно");}
else {
alert("Телефон задано коректно");
}
    }

}

function zavd7(){
    var str = document.getElementById("txt-7").value;
    if(!str.length){

alert("Поштовий індекс Львова задано неправильно!");
    }else {
var cellPhoneTemplate = new RegExp("790[0-9]{2}");

str = str.replace(cellPhoneTemplate,"");

if(str != ""){

alert("Поштовий індекс Львова задано неправильно!");}
else {
alert("Поштовий індекс Львова задано правильно");
}
    }

}

function zavd8(){
    var str = document.getElementById("txt-8").value;
    if(!str.length){

alert("Це не львівський міський номер телефону!");
    }else {
var cellPhoneTemplate = new RegExp("([(]?(032)|())[)]?[0-9]{3}[-]?[0-9]{2}[-]?[0-9]{2}");

str = str.replace(cellPhoneTemplate,"");

if(str != ""){

alert("Це не львівський міський номер телефону!");}
else {
alert("Це львівський міський номер телефону");
}
    }
}

function clearTextFromHTMLTags(textForEditing) {
    var tagTemplate = new RegExp("[<!-->]{1,}", "g");
    return textForEditing.replace(tagTemplate, "");
   }

   function clearTextFromHTMLTags2(textForEditing) {
    var tagTemplate2 = new RegExp("</?[brfontph]{1,}>", "g");
    return textForEditing.replace(tagTemplate2, "");
   }

   function removeRedundantSpaces(text_for_Editing) {

    
    
    return text_for_Editing.trim();
    
    }

        function zavd12(){
            let edit = document.getElementById("txt-12").value;

            if(!edit.length){
                return alert("Ведіть щось");
            }
            var thenumber= new RegExp("(19|20)[0-9]{2}","g");
            edit=edit.replace(thenumber,"");

            if(edit !=""){
                document.getElementById("txt-12").value="";
                return alert("Число задане неправильно")
            }else {
                document.getElementById("txt-12").value="";
                return alert("Число задане правильно")
            }
        }