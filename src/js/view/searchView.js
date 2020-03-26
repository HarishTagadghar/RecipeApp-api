import { dom } from './dom'; // importing dom string from dom.js module

export let getInput =  () => dom.inputValue.value; // exporting the input value of search

export let clearInput = () => { //exporting the function which clears the input
    dom.inputValue.value = ''
};
export let clearlist = () => { // exporting the funciong which clears the recipies list
    dom.resultList.innerHTML = '';
}

const renderRecipe = (recipe) => { // a function which takes  a single recipe list item and add it to hardcoded html 
    let markup = ` 
                    <li>
                    <a class="results__link results__link--active" href="#${recipe.recipe_id}">
                        <figure class="results__fig">
                            <img src="${recipe.image_url}" alt="Test">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${recipe.title}</h4>
                            <p class="results__author">${recipe.publisher}</p>
                        </div>
                    </a>
                </li>`
    dom.resultList.insertAdjacentHTML('beforeend' , markup) // appending child to a class here class is dom.resultlist  and the html part is markup variable
}
export const recipes = (recipe) => { // a function which takes recipes object as parameter  
    recipe.forEach(renderRecipe) //and loop it with a function one by one
}
