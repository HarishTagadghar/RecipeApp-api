import axios from 'axios'; // importing axios library

async function searchquery(query){ 
    const data = await axios(`https://forkify-api.herokuapp.com/api/search?q=${query}`) //axios is a npm library used to featch the data we can also use featch keyword but its not supported for all browsers
    console.log(data.data.recipes);
    
}
searchquery('pizza')