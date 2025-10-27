// Comptes bancaires

/*
Reprenons le contexte des comptes en banque issu d'un précédent exercice.
Un compte bancaire sera modélisé par une classe définie comme suit :
  - Une propriété titulaire initialisée par le constructeur.
  - Une propriété solde valant initialement 0.
  - Une méthode crediter() ajoutant le montant passé en paramètre (éventuellement négatif) au solde du compte.
  - Une méthode decrire() renvoyant la description du compte.

Ecrivez un programme qui crée 3 comptes bancaires,
  - l'un appartenant à Alex,
  - le deuxième à Clovis
  - et le troisième à Marco.
Stockez ces comptes dans un tableau.

Ensuite, le programme crédite 1000 €
et affiche la description de chacun des comptes.
*/
class comptebancaire {
    titulaire;
    solde;

    constructor(titulaire, solde) {
        this.titulaire = titulaire;
        this.solde = 0;
    }
    crediter(montantPasse){
            this.solde -= montantPasse ;
    }
    decrire(){
        this.crediter(1000)
return ` le titulaire de la carte est ${this.titulaire} et il a ${this.solde} de solde dans son compte`;
    }
}
const Alex = new comptebancaire();
const Clovis = new comptebancaire();
const Marco = new comptebancaire();
Alex.titulaire = "Alex";
Clovis.titulaire = "Clovis";
Marco.titulaire = "Marco";
Alex.solde  =100;
Clovis.solde = 300;
Marco.solde =500;
console.log(Alex.decrire());
console.log(Clovis.decrire());
console.log(Marco.decrire());

