class Personnage {
  nom;
  sante ;
  force ;
  inventaire = {}
  constructor(nom, sante, force) {
    this.nom = nom;
    this.sante = sante;
    this.force = force;
    this.inventaire = {
      piecesOr: 10,
      cles: 1
    };
  }

  // Ajoute une méthode décrire ici
decrire(){
    return `la fiche du perso , son nom = ${this.nom}, il a ${this.sante} de point de santé il a autand de poits de force = ${this.force} point et il a dans ses inventaires il a ${this.inventaire.piecesOr} piece d'or et de (${this.inventaire.cles} clef);`
}
  // Ajoute une méthode attaquer ici
  attack(attackPv){
    this.sante -=  attackPv
    return this.sante;
  }
}

// Crée un nouvel objet Aurora
const Aurora = new Personnage('Aurora', 10000, 111111);

// Crée un nouvel objet monstre
const monstre = new Personnage('Monstre', 999999, 1100);

// Affiche le message de bienvenue
console.log("bienvenus dans le combats de aurora vs le monstres ")

// Affiche la description d'Aurora
console.log(Aurora.decrire())

// Affiche le message pour le monstre
console.log("attention le monstres attack")

// Fais attaquer le monstre sur Aurora
console.log(Aurora.attack(100));

// Fais riposter Aurora
console.log('Aurora riposte et attack a son tours ')
console.log(monstre.attack(150));

// Réaffiche la description d'Aurora
console.log(Aurora.decrire());
console.log(monstre.decrire());

