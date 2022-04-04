getRandomMeal();

 async function getRandomMeal(){
    fetch('https://countriesnow.space/api/v0.1/countries/population/cities/filter')
    const randomMeal = await resp.json()

    console.log(randomMeal)
}

async function MealById(id){
    fetch('https://countriesnow.space/api/v0.1/countries/population/cities/filter')
}

async function getMealsBySearch(term)
{

}