let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";

let userInp = document.getElementById("user-inp").value;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let myMeal = data.meals[0];
    console.log(myMeal);
    console.log(myMeal.strMeal);
    console.log(myMeal.strArea);
    console.log(myMeal.strMealThumb);
    console.log(myMeal.strInstructions);
    let count = 1;
    let ingredients = [];
    for (let i in myMeal) {
      let ingredient = "";
      let measure = "";
      if (i.startsWith("strIngredient") && myMeal[i]) {
        ingredient = myMeal[i];
        measure = myMeal[`strMeasure` + count];
        count += 1;
        console.log(ingredient, measure);
        ingredients.push(`${measure} ${ingredient}`);
      }
    }
    console.log(ingredients);
    result.innerHTML = `<img  src= ${myMeal.strMealThumb}>
    <div class="details">
    <h2>${myMeal.strMeal}</h2>
    <h2>${myMeal.strArea}</h2>
</div>
<div id="ingredient-con">
<div id="recipe">
    <button id="hide-recipe">x</button>
    <pre id="instructions">${myMeal.strInstructions}</pre>
</div>
</div>
    `;

   
  });
