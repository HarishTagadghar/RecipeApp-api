import { dom } from './dom'; // importing dom string from dom.js module

export let getInput =  () => dom.inputValue.value; // exporting the input value of search

export let clearInput = () => { //exporting the function which clears the input
    dom.inputValue.value = ''
};
export let clearlist = () => { // exporting the funciong which clears the recipies list
    dom.resultList.innerHTML = '';
    dom.searchResPages.innerHTML = '';
}
const limitTitle = (title , limit = 17) => {
    const newtitle = [];
    if(title.length > limit){
    title.split(' ').reduce((acc,cur) => {
        if(acc + cur.length <= limit){
            newtitle.push(cur)
        }
        return acc + cur.length
    },0)
    return `${newtitle.join(' ')} ...`
    }else{
    return title

    }
}

const renderRecipe = (recipe) => { // a function which takes  a single recipe list item and add it to hardcoded html 
    let markup = ` 
                    <li>
                    <a class="results__link " href="#${recipe.recipe_id}">
                        <figure class="results__fig">
                            <img src="${recipe.image_url}" alt="Test">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${limitTitle(recipe.title)}</h4>
                            <p class="results__author">${recipe.publisher}</p>
                        </div>
                    </a>
                </li>`
    dom.resultList.insertAdjacentHTML('beforeend' , markup) // appending child to a class here class is dom.resultlist  and the html part is markup variable
}
const createButton = (page,type)   =>
                                ` <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page -1 : page +1}>
                                    <svg class="search__icon">
                                        <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
                                    </svg>
                                    <span>Page ${type === 'prev' ? page -1 : page +1}</span>
                                </button>`;

// <button class="btn-inline results__btn--prev">
//     <svg class="search__icon">
//         <use href="img/icons.svg#icon-triangle-left"></use>
//     </svg>
//     <span>Page 1</span>
// </button>
// <button class="btn-inline results__btn--next">
//     <span>Page 3</span>
//     <svg class="search__icon">
//         <use href="img/icons.svg#icon-triangle-right"></use>
//     </svg>
// </button>


const renderButton = (page,numResult,resPerPage) => {
let pages = Math.ceil(numResult / resPerPage);
let button;
if(page === 1 && pages > 1){
    // display next button
    button = createButton(page,'next');
}else if (page < pages){
    // display both prev and next button
    button = `${createButton(page,'prev')} 
              ${createButton(page,'next')}`
}else if( page === pages && pages > 1){
    //display prev button
    button = createButton(page,'prev')
}

dom.searchResPages.insertAdjacentHTML('afterbegin',button)



}
export const recipes = (recipe,page = 1 , resPerPage = 10) => { // a function which takes recipes object as parameter  
    let start = (page - 1) * resPerPage
    let end = page * resPerPage;
    recipe.slice(start,end).forEach(renderRecipe) //and loop it with a function one by one
    renderButton(page,recipe.length,resPerPage)
}
