$(document).ready(function(){



console.log("Let's get this party started!");
const $searchForm = $("#searchForm");
const searchInput = document.getElementById("searchInput");
const restartBtn = document.getElementById("startOver");
const gifDiv = document.getElementById("gifs");


async function getGif(e) {
    e.preventDefault();
    const searchTerm = searchInput.value;
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=ck63PIqmDR4HtAp22FvazZeH1llLHaGU&q=${searchTerm}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
    console.log(response);
    const newGif = new Image();
    const sourceUrl = response.data.data[0].images.original.url;
    newGif.src = sourceUrl;
    newGif.classList.add("p-3");
    $("#gifs").append(newGif);
    searchInput.value = "";
}

$searchForm.on("submit", getGif);


restartBtn.addEventListener("click", function(){
    console.log(gifDiv.children.length)
    while (gifDiv.children.length > 0) {
        gifDiv.removeChild(gifDiv.lastElementChild);
    }
    return;
});

















})

