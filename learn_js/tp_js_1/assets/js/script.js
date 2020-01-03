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