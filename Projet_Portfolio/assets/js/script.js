document.addEventListener('DOMContentLoaded', function(event){
    console.log('load');


//CAROUSEL XP----------------------------------------------------------------------------
document.getElementsByClassName('years')[0].onclick = function () {
    //var show = 
    document.getElementById('xp1').style.display='block';
    //var hidden = 
    document.getElementById('xp2').style.display='none';
    document.getElementById('xp3').style.display='none';
    event.preventDefault();
    }

document.getElementsByClassName('years')[1].onclick = function () {
    document.getElementById('xp1').style.display='none';
    document.getElementById('xp2').style.display='block';
    document.getElementById('xp3').style.display='none';
    event.preventDefault();
    }

document.getElementsByClassName('years')[2].onclick = function () {
    document.getElementById('xp1').style.display='none';
    document.getElementById('xp2').style.display='none';
    document.getElementById('xp3').style.display='block';
    event.preventDefault();
    }

//FORMULAIRE----------------------------------------------------------------------------
    let submit = document.getElementById('submit');

    submit.addEventListener('click', function(){
        console.log('Hello ' + document.getElementById('name').value + 
        ' votre adresse mail est ' + document.getElementById('mail').value +
        ' et votre message ' + document.getElementById('msg').value);
    })
})
