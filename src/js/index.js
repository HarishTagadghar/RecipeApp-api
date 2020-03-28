import  { dom ,renderLoader , clearLoader } from './view/dom';
import Search from './models/search';
import * as searchView from './view/searchView';
import Recipe from './models/recipe'

//id = 47746

let state = {}

// search result controller
let controleSearch = async () => {      

    // 1) get query from view
    let query = searchView.getInput();
    if(query){
    // 2) new search object and add to state only if the query is true
    state.search = new Search(query)// creating new object and adding query as pizza
    // 3) prepair ui for result
    searchView.clearInput();
    searchView.clearlist(); 
    renderLoader(dom.result)

    // 4) search for recipes
    await state.search.getRecipe() // calling method getresult stored in the constructor search we are using await because the getrecipe method is stored in a async function
    // 5) desplay recipes on ui
    searchView.recipes(state.search.recipes) //colling a funcion recipes of searchView module and the argument is the recipes objects
    clearLoader()
}
}
dom.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controleSearch();

    
});
dom.searchResPages.addEventListener('click',e => {
let btn = e.target.closest('.btn-inline');

if(btn){
    let gotopage = parseInt(btn.dataset.goto,10);
    searchView.clearlist();
    searchView.recipes(state.search.recipes,gotopage);

    
}
});

// recipe controller

let controleRecipe = async() => {
    let id = window.location.hash.replace('#', '')
    console.log(id);
    if(id) {
        // prepair ui for changes
        //create new recipe object with id
        state.recipe = new Recipe(id)
        // get recipe data (await because it returs a promise)
        try{
        await state.recipe.getRecipe();
        //get time and serving
        state.recipe.getTime();
        state.recipe.getServing();
        // render recipe
        console.log(state.recipe);
        }catch(error){
            alert(error)
        }
    }
    
}

["hashchange","load"].forEach( event => window.addEventListener(event , controleRecipe));