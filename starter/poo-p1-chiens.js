// 1. Crée une classe Chien
class Chien {
    nom;
    race;
    taille;
    constructor(nom, race, taille) {
        // Crée le constructeur avec les propriétés
        // et la méthode aboyer
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    }

    // Ajoute la méthode aboyer ici
    aboyer(){
        return "Wouf ! Wouf !";
    }
    // Ajoute la méthode decrire ici
    decrire(){
        return ` le chien s'appelle ${this.nom} il est de race ${this.race} et il fais ${this.taille} metres!`;
    }
}

// 2. Instancie des chiens à partir de la classe
// et assigne-les aux variables Crockdur et Milou
const chien1 = new Chien();
const chien2 = new Chien();
chien1.nom = 'Crockdur';
chien2.nom = 'Milou';
chien1.race = 'Berger allemand';
chien2.race = 'Berger allemand';
chien1.taille = 1.03;
chien2.taille = 0.86;

console.log(" description chien...")
// 3. Affiche la description de chaque chien dans la console
console.log(chien1.decrire());
console.log(chien2.decrire());
// 4. Les chiens rencontrent un chat...
// Affiche le message dans la console avec les aboiements de chaque chien
console.log(" Les chiens rencontrent un chat...")
console.log(chien1.aboyer());
console.log(chien2.aboyer());
