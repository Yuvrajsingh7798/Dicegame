
const firstRandomNum =
Math.floor(Math.random() * 6) + 1

const firstDiceImage = 'images/dice' + firstRandomNum + '.png';

document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);



const secRandomNum = 
Math.floor(Math.random() * 6) + 1

const secDiceImage ='images/dice' + secRandomNum + '.png';

document.querySelectorAll('img')[1].setAttribute('src', secDiceImage);

if(firstRandomNum > secRandomNum){
    document.querySelector('h1').innerHTML = 'The Winner is User 1';
}
else if(firstRandomNum < secRandomNum){
    document.querySelector('h1').innerHTML = 'The Winner is User 2';
}
else{
    document.querySelector('h1').innerHTML = "It's a Draw";
}