document.getElementById('search-button').addEventListener('click', function () {
    getTheMealList();
})

const getTheMealList = () => {
    let searchInput = document.getElementById('search-input').value;
    // console.log(searchInput);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            let allMeal = "";
            if (data.meals) {
                data.meals.forEach(meal => {
                    allMeal = `                    
                        <div class="col-md-3">
                            <div class="meal-container text-center my-3 p-4 bg-dark text-white data-id="${meal.IdMeal}">
                                <img src="${meal.strMealThumb}" alt="" class="img-fluid rounded">
                                <p class="mt-3">${meal.strMeal}</p>
                            </div>
                        </div>                    
                    `;
                });
            }
            const mealList = document.getElementById('meal-item');
            mealList.innerHTML = allMeal;
        })
}