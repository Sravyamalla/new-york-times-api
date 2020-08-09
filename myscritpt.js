var dict = {
    1: "arts",
    2: "automobiles",
    3: "books",
    4: "buisiness",
    5: "fashion",
    6: "food",
    7: "health",
    8: "home", 
    9: "insider",
    10: "magazine",
    11: "movies",
    12: "nyregion",
    13: "obituaries",
    14: "opinion",
    15: "politics",
    16: "realestates",
    17: "science",
    18: "sports",
    19: "sundayreview",
    20: "technology",
    21: "theater",
    22: "t-magazine",
    23: "travel",
    24: "upshot",
    25: "us",
    26: "world"

};

function doSomething(DicKey){
    if(DicKey >= 1 && DicKey <= 26){
        dict[DicKey]
        fetchData(dict[DicKey]);
    }
}

async function fetchData(Select_api){
    let api_key = "XUpP7JuiEdmV9GGlNB8LR7ytWc5gLNKx";
    let base_url = "https://api.nytimes.com/svc/topstories/v2/";
    let api = base_url + Select_api+ ".json?" + "api-key="+ api_key; 
    //https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=yourkey

    // read our JSON
    let response = await fetch(api);
    let stories = await response.json();

    // // read github user
    // let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    // let githubUser = await githubResponse.json();

    // // show the avatar
    // let img = document.createElement('img');
    // img.src = githubUser.avatar_url;
    // img.className = "promise-avatar-example";
    // document.body.append(img);

    // // wait 3 seconds
    // await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    // img.remove();

    // return githubUser;

    loadElementsInDiv(stories);
}

function loadElementsInDiv(stories){
    var element = document.getElementById("TopStoriesDiv");
    element.innerHTML = "";


}