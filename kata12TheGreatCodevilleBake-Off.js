const ingredientCheck = function (bakery, recipes) {
  let recipeName=[]
  for ( let i = 0; i < bakery.length; i++) {
    for (let j = 0; j < recipes.length; j++) {
      for (let k = 0; k < recipes[j].ingredients.length; k++) {
        if ( bakery[i] === recipes[j].ingredients[k]){
          recipeName.push(recipes[j].name);
        }
      }

    }
  } return recipeName;
}

const chooseRecipe = function (bakeryA, bakeryB, recipes){
  let recipeA = ingredientCheck (bakeryA, recipes);
  let recipeB = ingredientCheck (bakeryB, recipes);
  for (let i = 0; i < recipeA.length; i++) {
    for (j = 0; j < recipeB.length; j++) {
      if (recipeA[i] === recipeB [j]) {
        return recipeA [i];
      }
    }
  }
}


let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(ingredientCheck(bakeryA,recipes));
console.log(ingredientCheck(bakeryB,recipes));
console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(ingredientCheck(bakeryA,recipes));
console.log(ingredientCheck(bakeryB,recipes));
console.log(chooseRecipe(bakeryA, bakeryB, recipes));
