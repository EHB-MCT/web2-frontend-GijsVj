//Inspiration from pokémon exercise

let list = [];
let phone = [];

function getData(){
    //get phone list
    fetch('https://api-mobilespecs.azharimm.site/v2/top-by-fans')
    .then(response => {
        return response.json();
    }).then(data => {
        list = data.data.phones;
        //Loop list of phones
        for(let element of list){
            fetch(element.detail).then(response => {
                return response.json();
             }).then(data => {
                 phone.push(data);
             })
        }
    });
}

window.onload = function(){

    getData();
    setTimeout(buildList, 3000);

    function buildList(){
        let html = '';
        // Ordering of my list
        phone.sort(function(a,b) {
            return a.id - b.id;
        });


        for(let p of phone){
            html += `<div class="itemsContainer"> <img src="${p.data.thumbnail}" alt="" width="100%">
            <div class="flexRow">
                <div class="flexCol">
                    <p class="brand">${p.data.brand}</p>
                    <p class="type">${p.data.phone_name}</p>
                </div>
                <input type="checkbox" id="liked">
            </div>
            </div>`
        }
        document.getElementById('list').innerHTML = html;
    }
}