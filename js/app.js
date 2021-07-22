async function getRandomMeal(){
    const randomMeal = fetch('https://www.themealdb.com/api/json/v1/1/random.php'); 
};
async function getRandomMeal(id){
    const meal = fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+ id); 
};
async function getMealsBySearch(term){
    const meals = fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+ term); 
};
