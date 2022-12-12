$(document).ready(function() {

$('#dane-programisty').on('click', function() {

$.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(data) 
{
$('<p>').text('Imie: ' + data.imie).appendTo('body');
$('<p>').text('Nazwisko: ' + data.nazwisko).appendTo('body');
$('<p>').text('Zawod: ' + data.zawod).appendTo('body');
$('<p>').text('Firma: ' + data.firma).appendTo('body');
$('<hr>').appendTo('body');
});
});
 });