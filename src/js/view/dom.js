export let dom =  {
    searchForm: document.querySelector('.search'),
    inputValue: document.querySelector('.search__field'),
    resultList: document.querySelector('.results__list'),
    result: document.querySelector('.results')
};

export const renderLoader = parentElement => {
    const loader = `
    <div class="loader">
    <svg>
    <use href="img/icons.svg#icon-cw">
    </svg>
    </div>
    `
    parentElement.insertAdjacentHTML('afterbegin',loader)
}
export const  clearLoader = () => {
    const loader = document.querySelector('.loader');
    if(loader) {
        loader.parentElement.removeChild(loader)
    } 
}