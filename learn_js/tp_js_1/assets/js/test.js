//---------------------ADDITIONS DE PLUSIEURS CHIFFRES---------------------
var nombre = Number(prompt("Commbien de chiffre à additioner ?"));
var resultat = 0;
for (let i = 0 ; i < nombre; i++){
    var a = parseInt(prompt("donner une valeur"))
    resultat += a; //resultat = resultat + a
}
    alert(resultat)
//---------------------

var nombre = Number(prompt("Déterminer le chiffre ?"));
function nbrPremier(nbr) {
    for(var i = 2; i < nbr; i++)
      if(nbr%i === 0) return false;
    return nbr > 1;
  }
  console.log(nbrPremier(2));


//CORRECTION                                ----------------------
// VERSION 1 NON OPTIMALE
// Inviter l'utilisateur à saisir un nombre
let x = Number(prompt("Saisir un nombre svp"))
// Sert à compter le nombre de diviseur de x
let cptDiviseur = 0
// Recuperer tous les nombres compris entre 2 et x - 1
for(let i = 1; i < x; i++){
    // Verifier si x est un diviseur de i
    if(x % i == 0){
        // Incrementer le compteur des diviseurs (sert à compter le nombre de diviseur entier)
        cptDiviseur++
    }
}
// Tester la valeur du compteur des diviseurs
if(cptDiviseur == 2){
    console.log(x + " est un nombre premier")
} else {
    console.log(x + " n'est pas un nombre premier")
}

//VERSION 2 
// Inviter l'utilisateur à saisir un nombre
let x = Number(prompt("Saisir un nombre svp"))
// Sert à compter le nombre de diviseur de x
let cptDiviseur = 0
// Recuperer tous les nombres compris entre 2 et x - 1
for(let i = 2; i < x; i++){
    // Verifier si x est un diviseur de i
    if(x % i == 0){
        // Incrementer le compteur des diviseurs
        cptDiviseur++
        break
    }
}
// Tester la valeur du compteur des diviseurs
if(cptDiviseur == 0){
    console.log(x + " est un nombre premier")
} else {
    console.log(x + " n'est pas un nombre premier")
}

//VERSION 3 
// Inviter l'utilisateur à saisir un nombre
let x = Number(prompt("Saisir un nombre svp"))
// Sert à compter le nombre de diviseur de x
let cptDiviseur = 0
// Recuperer tous les nombres compris entre 2 et x - 1
for(let i = 2; i < (x / 2); i++){
    // Verifier si x est un diviseur de i
    if(x % i == 0){
        // Incrementer le compteur des diviseurs
        cptDiviseur++
        break
    }
}
// Tester la valeur du compteur des diviseurs
if(cptDiviseur == 0){
    console.log(x + " est un nombre premier")
} else {
    console.log(x + " n'est pas un nombre premier")
}

//VERSION 4
// Inviter l'utilisateur à saisir un nombre
let n = Number(prompt("Saisir un nombre N svp"))
for(let x = 1; x <= n; x++){
    // Sert à compter le nombre de diviseur de x
    let cptDiviseur = 0
    // Recuperer tous les nombres compris entre 2 et x - 1
    for(let i = 2; i < x; i++){
        // Verifier si x est un diviseur de i
        if(x % i == 0){
            // Incrementer le compteur des diviseurs
            cptDiviseur++
            break
        }
    }
    // Tester la valeur du compteur des diviseurs
    if(cptDiviseur == 0){
        console.log(x + " est un nombre premier")
    }
}

//----------------------
let x = Number(prompt("Saisir un nombre svp"))
for (let i = 2; i <= x-1; i++){
    if(x % i == 0)
    isPremier = false
    break
}

//----------------------FONCTION
function isPremier(n)
for(let x = 1; x <= n; x++){
    let cptDiviseur = 0
    for(let i = 2; i < n; i++){
        if(x % i == 0){
            cptDiviseur++
            break
        }
    }
    if(cptDiviseur == 0){
        return true
    }
}
