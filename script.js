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
        return this.exercices[indexArray];
    }
};

/*Fonction de séléction du durée aléatoire entre 30s et 120s par pallier de 5s*/

const dureeAleatoireCalcul = () => {
    
    let checkDureeAleatoire = 1;
    let dureeAleatoire = "";
    let dureeAleatoireMin = 1;
    let dureeAleatoireSec = 1;

    while (!Number.isInteger(checkDureeAleatoire / 5)) {
    checkDureeAleatoire = Math.floor(Math.random () * (120-30)+30);
    };

    if (checkDureeAleatoire > 59) {
        dureeAleatoireMin = Math.floor(checkDureeAleatoire / 60);
        dureeAleatoireSec = checkDureeAleatoire - dureeAleatoireMin*60;
        if (dureeAleatoireSec = 0) {
            dureeAleatoire = `${dureeAleatoireMin} minutes`;
        } else {
        dureeAleatoire = `${dureeAleatoireMin} minutes et ${dureeAleatoireSec}secondes`;
        };
    } else {
        dureeAleatoire = `${dureeAleatoireSec} minutes`;
    };   
    console.log((checkDureeAleatoire / 60));
    console.log(checkDureeAleatoire);
    console.log(dureeAleatoireMin);
    console.log(dureeAleatoireSec);
    console.log(dureeAleatoire);
    return dureeAleatoire;
};

console.log(dureeAleatoireCalcul ()); 
