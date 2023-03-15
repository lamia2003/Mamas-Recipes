  const ingredientsList = document.getElementById('recipe-ingredients-list');
  fetch('/recipes-data.json')
  recipe.ingredients.forEach((ingredient) => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    ingredientsList.appendChild(li);
  });
  
  const directionsList = document.getElementById('recipe-directions-list');
  recipe.directions.forEach((direction) => {
    const li = document.createElement('li');
    li.textContent = direction;
    directionsList.appendChild(li);
  });
  