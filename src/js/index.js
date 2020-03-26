import Search from './models/search';



let state = {}
let controleSearch = async () => {

    // 1) get query from view
    let query = 'pizza'
    if(query){
    // 2) new search object and add to state only if the query is true
    state.search = new Search(query)// creating new object and adding query as pizza
    // 3) prepair ui for result

    // 4) search for recipes
    await state.search.getRecipe() // calling method getresult stored in the constructor search we are using await because the getrecipe method is stored in a async function
    // 5) desplay recipes on ui
    console.log(state.search.recipes);   
}
}
document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controleSearch();
    // console.log(e);
    
})

