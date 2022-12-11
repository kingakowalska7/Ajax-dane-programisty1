$(document).ready(function() {
    
$('#dane-programisty').click(function() {

$.get('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
.done(function (data) {
    let jqBody = $('body');
    jqBody.append(data);
    console.log(data);
   });      
 });
});