/*Fonction de séléction de l'excercice et de son type associé dans un array*/
const exerciceSport2 = {
    exercices:
        [['Gainage face','Duree'],
        ['Gainage côté droit','Duree'],
        ['Gainage côté gauche','Duree'],
        ['Chaise','Duree'],
        ['Hollow rock','Duree'],
        ['Pompes','Repetitions'],
        ['Tractions','Repetitions'],
        ['Dips','Repetitions'],
        ['Extensions du dos au sol','Repetitions'],
        ['Crunchs','Repetitions'],
        ['Squats','Repetitions'],
        ['Squats jump','Repetitions'],
        ['Fentes avant','Repetitions'],
        ['Fentes arrière','Repetitions'],
        ['Burpees','Repetitions'],
        ['Superman','Repetitions'],
        ['Mountain climbers croisés','Repetitions'],
        ['Mountain climbers','Repetitions'],
        ['Relevé de bassin','Repetitions'],
        ['V-up','Repetitions'],
        ['Jumping Jack','Repetitions'],
        ['Chien tête en bas','Repetitions'],
        ['Chien tête en haut','Repetitions'],
        ['Squats bulgares','Repetitions'],
        ['Extensions des mollets','Repetitions']],
    selectExcercices () {
        const indexArray = Math.max(Math.round((Math.random ()*this.exercices.length-1)),0);
        return this.exercices[indexArray]; /* array de l'exercice*/
    }
};

/*Fonction de séléction du durée aléatoire entre 30s et 120s par pallier de 5s*/

const dureeAleatoireCalcul = () => {
    
    let checkDureeAleatoire = 1;
    let dureeAleatoire = "";
    let dureeAleatoireSec = 1;
    let dureeAleatoireMin = 1;

    while (!Number.isInteger(checkDureeAleatoire / 5)) {
    checkDureeAleatoire = Math.floor(Math.random () * (121-30)+30);
    };
    if (checkDureeAleatoire > 59) {
        dureeAleatoireMin = Math.floor(checkDureeAleatoire / 60);
        dureeAleatoireSec = (checkDureeAleatoire - (dureeAleatoireMin * 60));
       
        if (dureeAleatoireSec == 0) {
            dureeAleatoire = `${dureeAleatoireMin} minutes`;
        } else {
        dureeAleatoire = `${dureeAleatoireMin} minutes and ${dureeAleatoireSec} secondes`;
        }
    } else {
        dureeAleatoireSec = checkDureeAleatoire;
        dureeAleatoire = `${dureeAleatoireSec} secondes`;
    };   
    return dureeAleatoire; /*durée litérale de l'exercice*/
};

/*Fonction de séléction du nombre de répétitions entre 10 et 30*/

const repetitionAleatoireCalcul = () => {

    let nbRepetition = Math.floor(Math.random () * (31-10)+10);
    return nbRepetition; /*nombre de répétition séléctionné aléatoirement*/
};

/*Fonction construction du message contenant l'exercice séléctionné aléatoirement et de la durée ou nombre de répétition associé*/

const constructionExcerciceAleatoire = (funcDureeAleatoireCalcul, funcRepetitionAleatoireCalcul) => {

    let finalMessage;
    let exercices = exerciceSport2.selectExcercices();
    if (exercices[1] == "Duree") {
        finalMessage = `Your trainer has selected the excercice "${exercices[0]}" to do for ${funcDureeAleatoireCalcul()}. Let's go.`
    } else {
        finalMessage = `Your trainer has selected the excercice "${exercices[0]}" to do during ${funcRepetitionAleatoireCalcul()} repetitions. Let's go.`
    };
    return finalMessage;

};

/*Affichage du message dans le DOM*/

let element = document.querySelector(".corpsMessage");
let element2 = document.getElementById("bouton");

function showMessage () {
    let messageCandidate = constructionExcerciceAleatoire(dureeAleatoireCalcul,repetitionAleatoireCalcul);
    element.innerHTML = messageCandidate;
}
element2.onclick = showMessage;