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