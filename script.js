
var p = document.getElementsByTagName('p');

for( i = 0; i < p.length; i++ ){
    p[i].innerHTML =  p[0].innerHTML + i;
}