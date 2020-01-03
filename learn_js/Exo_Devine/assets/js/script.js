/* PREMIER ESSAI***************************************************************
 let de = nb_aleatoire(1, 10);

function nb_aleatoire(min, max)
{
     let nb = min + max*Math.random();
     return Math.floor(nb);
}


let nb = nb_aleatoire(1, 10);  // nb a deviner
let cpt = 0;    // nb de coups
let saisie;
let msg = 'Le nombre à deviner est compris entre 1 et 10.';

do
{
     saisie = prompt(msg);
     cpt++;
     // message a afficher au prochain tour :
     if(saisie > nb)
          msg = "C'est moins";
     else
          msg = "C'est plus";
}
while(saisie != nb);

alert("Bravo, tu as gagné en " + cpt + " coups !"); *************************************/

/*DEUXIÈME ESSAI**********************************************************************/

//let num = Math.floor(Math.random() * 10) + 1;

let num = nb_aleatoire(1, 10);
function nb_aleatoire(min, max)
{
     let num = min + max*Math.random();
     return Math.floor(num);
}
let NbEssais = 0;
function Devine() {
let choisi = document.form1.devine1.value;


while (NbEssais < 3)
{
    if (choisi != num)
    {
        if (choisi < num)
    document.form1.indice.value = "le nombre est plus grand.";
        else if (choisi > num)
    document.form1.indice.value = "le nombre est plus petit.";
    }
    NbEssais++;

    else 
    {
    window.alert("BRAVO ! Le nombre correct était bien " + num);
    location.reload();
    }
}
