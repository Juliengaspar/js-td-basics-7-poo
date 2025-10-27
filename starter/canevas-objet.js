// CANEVAS D'UN OBJET EN JS

// 1. Création de l'objet

const objet = {
	prop1: "val1",
	prop2: ['lundi', 'mardi','mercredi','jeudi', 'vendredi', 'samedi','dimanche'],
	prop3: {
		name:'julien',
		age:12,
	},
	prop4: function() {
		console.log("test")
	},
	prop4bis() {
this.decrire()
	},
	decrire() {
		// Définit le comportement de la méthode "decrire"
		console.log("test")
		console.log(this.prop1)
	},
	prop5: 'Toto'
};

// 2. Utilisation des méthodes et des propriétés de l'objet

console.log(objet.prop1);
console.log(objet.prop2);
console.log(objet.prop3);

objet.prop1 = 'valeur'; // Modifie la propriété "prop1" de l'objet en lui attribuant une nouvelle valeur
objet.prop4bis(); // Appelle la méthode "decrire" de l'objet pour effectuer une action spécifique
objet.prop4();
console.table(objet.prop2);
