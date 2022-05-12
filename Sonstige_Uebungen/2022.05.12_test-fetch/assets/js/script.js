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


function build_facts(data) {
    console.log(data)
}

// https://cataas.com/cat