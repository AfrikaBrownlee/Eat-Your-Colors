console.log(recipe.name); //should output "Pomegranate-Glazed Duck Breast"
console.log(recipe.description.slice()); //should output "This recipe for d... Winter 2006"
console.log(recipe.ingredients[3].measurement); //should output "teaspoon"
console.log(recipe.ingredients[recipe.ingredients.length -1].ingredient); //should output "Pomegranate Glaze"
console.log(recipe.ingredients[2].amount); //should output 0.5
console.log(recipe.description.slice(64, 80)+
            recipe.directions[0].slice(20,30)
           ); //this is a surprise output! 😃


let recipe = {
  name: "Pomegranate-Glazed Duck Breast",


}
