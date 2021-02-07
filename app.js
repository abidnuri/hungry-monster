document.getElementById('search-button').addEventListener('click', function () {
    getTheMealList();
})

const getTheMealList = () => {
    let searchInput = document.getElementById('search-input').value;
    console.log(searchInput);
}