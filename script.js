document.addEventListener('DOMContentLoaded', (e)=>{
    e.preventDefault()


    document.querySelector('#force-form').addEventListener('submit', (event) => {
        event.preventDefault()
        // code below gets the location data from the HTML page 
        let locatio = document.querySelector("#forcedatalocal").value

        // code below tests whether code is working
        alert(locatio)
        console.log(locatio)

        // code below gets Police Force data from server and converts it to local json for work purposes
        fetch(`https://data.police.uk/api/forces/` + locatio)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log('done with data loading')
        
        // code below gets the Police Force data information and inserts it onto the website front page
            document.querySelector('#result-policeData').innerHTML = `
                <h1>Force Data</h1>
                <p>Name of force: ${data.name} </p>
                <p>${data.escription}</p>
                <p>${data.telephone}</p>
                <a target = "_blank" href = "${data.engagement_methods[2].url}"> ${locatio} Youtube Page</a>
                <a target = "_blank" href = "${data.engagement_methods[0].url}"> ${locatio} Facebook Page</a>
                <a target = "_blank" href = "${data.engagement_methods[1].url}"> ${locatio} Twitter Website Page</a>
                <a target = "_blank" href = "${data.engagement_methods[3].url}"> ${locatio} Crime News Update Website Page</a>
                <a target = "_blank" href = "${data.url}"> ${locatio} Police Official website </a>
            `


        });
        

    })

// -------------------------------Another code for another div section ---------------------------

    document.querySelector('#senior-officer-data-form').addEventListener('submit', (event) => {
        event.preventDefault()
        // code below gets the location data from the HTML page 
        let locatio = document.querySelector("#seniorOfficerlocal").value
        alert(locatio)
        console.log(locatio)

        // code below gets the Senior Officer data within a certain location from the server and converts it to local json for work purposes
        fetch(`https://data.police.uk/api/forces/` + locatio + `/people`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log('done with data loading')

            // code below gets the Senior Officer data within a certain location and inserts it onto the website front page
            for (elem of data) {
                document.querySelector('#result-seniorOfficerData').innerHTML += `
                <h1>Name: ${elem.name}</h1>
                <h2>Rank: ${elem.rank}</h2>
                ${elem.bio}
                `
            }

        });
        

    })


// -------------------------------Another code for another div section ---------------------------


document.querySelector('#crime-data-form').addEventListener('submit', (event) => {
    event.preventDefault()

    let date = document.querySelector("#crimesOnDate").value
    alert(date)
    console.log(date)

    // code below gets Police Force data from server and converts it to local json for work purposes
    fetch(`https://data.police.uk/api/crime-categories?date=` + date)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        console.log('done with data loading')

        /*
        for (elem of data) {
            document.querySelector('#result-seniorOfficerData').innerHTML += `
            <h1>Name: ${elem.name}</h1>
            <h2>Rank: ${elem.rank}</h2>
            ${elem.bio}
            `
        }
        */
    });
    

})








})






function getCrimeCategoriesDataFromServer() {
    // code below gets List of crimes data of a specific date from server and converts it to local json for work purposes
    fetch('https://data.police.uk/api/crime-categories?date=' + date )
    .then(res => res.json())
    .then(data => {
        console.log(data)
    });
    console.log('done with data loading')
}

function getSeniorOfficerDataFromServer() {
    // code below gets Senior officer data from server and converts it to local json for work purposes
    fetch('https://data.police.uk/api/crime-categories?date=' + date )
    .then(res => res.json())
    .then(data => {
        console.log(data)
    });
    console.log('done with data loading')
}

function getNearbyEventsDataFromServer() {
    // code below gets Nearby events data from server and converts it to local json for work purposes
    fetch('https://data.police.uk/api/crime-categories?date=' + date )
    .then(res => res.json())
    .then(data => {
        console.log(data)
    });
    console.log('done with data loading')
}

function getNearbyWatchersDataFromServer() {
    // code below gets Nearby Watchers data from server and converts it to local json for work purposes
    fetch('https://data.police.uk/api/crime-categories?date=' + date )
    .then(res => res.json())
    .then(data => {
        console.log(data)
    });
    console.log('done with data loading')
}


function startingPage() {

}