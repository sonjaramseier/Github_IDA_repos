function request_cats_facts() {
    let base_url = 'https://cat-fact.herokuapp.com'

    let query = '/facts'

    fetch(base_url + query) //url anfragen für Daten
        .then(function(response) { //auf response warten
            return response.json() //format
        })
        .then(function(data) { //was tun mit information
            build_facts(data)

        })
        .catch(function(error) {
            console.log(error)
        })
}

function build_facts(data) {
    let cat_facts_div = document.querySelector('.cats-facts')
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        let data_point = data[i]
            //console.log(data_point)
        console.log(data_point['text']) //nur Text anzeigen
        let cat_fact = document.createElement('div') //virtuelles div in javascript bauen
        cat_fact.textContent = data_point['text'] //text hinzufügen
        cat_facts_div.appendChild(cat_fact) //zu html element hinzufügen, das weiter oben eingefügt wurde
    }
}

function request_coffee() {
    let base_url = 'https://coffee.alexflipnote.dev'
    let query = '/random.json'

    fetch(base_url + query)
        .then(
            function(response) {
                return response.json()
            }
        )
        .then(
            function(data) {
                build_coffee(data)
            }
        )
        .catch(
            function(error) {
                console.log(error)
            }
        )
}

function build_coffee(data) {
    console.log(data['file'])
    let coffee_div = document.querySelector('.coffee')
    let coffee_img = document.createElement('img')
    coffee_img.src = data['file']
    coffee_div.appendChild(coffee_img)
}

window.onload = function() {
    let coffee_button = document.querySelector('.kafi')
    console.log(coffee_button)

    coffee_button.addEventListener('click', request_coffee) //event listener zum button hinzufügen, hier click
}



// https://cataas.com/cat