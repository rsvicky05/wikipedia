let userInput = document.getElementById("searchInput");
let results = document.getElementById("searchResults");
let spinner = document.getElementById("spinner");

function createAndAppend(each) {
    let eachContainer = document.createElement("div");
    eachContainer.classList.add("result-item");
    results.appendChild(eachContainer);

    let head = document.createElement("a");
    head.textContent = each.title;
    head.href = each.link;
    head.target = "_blank";
    head.classList.add("result-title");
    eachContainer.appendChild(head);

    let breakEle = document.createElement('br');
    eachContainer.appendChild(breakEle);


    let link = document.createElement('a');
    link.textContent = each.link;
    link.href = each.link;
    link.target = "_blank";
    link.classList.add("result-url");
    eachContainer.appendChild(link);

    let description = document.createElement('p');
    description.textContent = each.description;
    description.classList.add("link-description");
    eachContainer.appendChild(description);
}

function printEachResult(Arrays) {
    spinner.classList.add("d-none");
    for (let each of Arrays) {
        createAndAppend(each);
    }
}

function readInput(event) {
    let inputValue = userInput.value;
    if (inputValue !== "" && event.key === "Enter") {
        console.log(inputValue);
        let options = {
            method: "GET"
        };
        let url = "https://apis.ccbp.in/wiki-search?search=" + inputValue;
        results.textContent = "";
        spinner.classList.remove("d-none");
        fetch(url, options)
            .then(function(res) {
                return res.json();
            })
            .then(function(jsonD) {
                let searchArray = jsonD.search_results;
                printEachResult(searchArray);
            });
    }
}


userInput.addEventListener("keydown", readInput);
