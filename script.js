document.addEventListener('DOMContentLoaded', (e)=>{
    e.preventDefault()

// -------------------------------Code for a major div section ---------------------------
// --------------------------Police Force Data-------------------------
    document.querySelector('#force-form').addEventListener('submit', (event) => {
        event.preventDefault()
        // code below gets the location data from the HTML page 
        let locatio = document.querySelector("#forcedatalocal").value.toLowerCase()

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
                <a target = "_blank" class = "links" href = "${data.engagement_methods[2].url}"> ${locatio} Youtube Page</a>
                <br>
                <a target = "_blank" class = "links" href = "${data.engagement_methods[0].url}"> ${locatio} Facebook Page</a>
                <br>
                <a target = "_blank" class = "links" href = "${data.engagement_methods[1].url}"> ${locatio} Twitter Website Page</a>
                <br>
                <a target = "_blank" class = "links" href = "${data.engagement_methods[3].url}"> ${locatio} Crime News Update Website Page</a>
                <br>
                <a target = "_blank" class = "links" href = "${data.url}"> ${locatio} Police Official website </a>
            `


        });
        

    })

// -------------------------------Another code for another major div section ---------------------------
// --------------------------Senior Officer Data-------------------------
    document.querySelector('#senior-officer-data-form').addEventListener('submit', (event) => {
        event.preventDefault()
        // code below gets the location data from the HTML page 
        let locatio = document.querySelector("#seniorOfficerlocal").value.toLowerCase()
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
                <br>
                <br>
                `
            }

        });
        

    })


// -------------------------------Another code for another major div section ---------------------------
// --------------------------Crime Data-------------------------

    document.querySelector('#crime-data-form').addEventListener('submit', (event) => {
        event.preventDefault()
        // code below gets the date from the HTML page
        let date = document.querySelector("#crimesOnDate").value
        alert(date)
        console.log(date)

        // code below gets the categories of Crime within a certain date from server and converts it to local json for work purposes
        fetch(`https://data.police.uk/api/crime-categories?date=` + date)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log('done with data loading')

            // code below gets the categories of Crime within a certain daten and inserts it onto the website front page
            for (elem of data) {
                document.querySelector('#result-crimeData').innerHTML += `

                <h3>Name: ${elem.name}</h3>
                <a target = "_blank" class = "links" href="${elem.url}">${elem.name}</a>
                `
            }
            
        });
        

    })


// -------------------------------Another code for another major div section ---------------------------
// --------------------------Neighbourhood Data-------------------------

    document.querySelector('#neighbourhood-data-form').addEventListener('submit', (event) => {
        event.preventDefault()
        // code below gets the date from the HTML page
       // code below gets the location data from the HTML page 
       let locatio = document.querySelector("#neighbourhoods").value.toLowerCase()

       // code below tests whether code is working
       alert(locatio)
       console.log(locatio)

       // code below gets Neighbourhood data from server and converts it to local json for work purposes
       fetch(`https://data.police.uk/api/` + locatio + `/neighbourhoods`)
       .then(res => res.json())
       .then(data => {
           console.log(data)
           console.log('done with data loading')

            // code below gets all the Neighbourhood data within a certain location and inserts it onto the website front page
           for (elem of data) {
            document.querySelector('#result-NeighbourhoodsData').innerHTML += `

            <p><b>Name:</b> ${elem.name}</p>
            <p><b>ID:</b> ${elem.id}</p>
            <br>
            `
        }
       
       });
        

    })




// -------------------------------Another code for another major div section ---------------------------
// --------------------------Nearby Events Data-------------------------


    document.querySelector('#nearby-events-data-form').addEventListener('submit', (event) => {
        event.preventDefault()
        // code below gets the date from the HTML page
        // code below gets the location data from the HTML page 
        let locatio = document.querySelector("#neighbourhoods").value.toLowerCase()

        // code below gets the neighbourhood ID from the HTML page
        let identif = document.querySelector('#neighbourhoodID').value.toUpperCase()

        // code below tests whether code is working
        alert(locatio)
        console.log(locatio)
        alert(identif)
        console.log(identif)

        /* code below gets the nearby events by using the ID obtained from the neighborhoods data, from server,
        alongside the location name and converts it to local json for work purposes
        */
        fetch(`https://data.police.uk/api/` + locatio + `/` +identif + `/events`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log('done with data loading')

            // code below gets the Nearby events data within a certain location and inserts it onto the website front page
            for (elem of data) {
                document.querySelector('#result-nearbyEventsData').innerHTML += `

                <p><b>Address:</b> ${elem.address}</p>
                <p><b>Title:</b> ${elem.title}</p>
                <p><b>Description:</b> ${elem.description}</p>
                <p><b>Start Date:</b> ${elem.start_date}</p>
                <p><b>End Date:</b> ${elem.end_date}</p>
                <br>
                `
            }
            
            
        });
        

    })

// -------------------------------Another code for another major div section ---------------------------
// --------------------------Nearby Watchers data-------------------------

    document.querySelector('#nearby-watchers-data-form').addEventListener('submit', (event) => {
        event.preventDefault()
        // code below gets the date from the HTML page
        // code below gets the location data from the HTML page 
        let locatio = document.querySelector("#localWatchers").value.toLowerCase()

        // code below gets the neighbourhood ID from the HTML page
        let identif = document.querySelector('#neighbourhoodID2').value.toUpperCase()

        // code below tests whether code is working
        alert(locatio)
        console.log(locatio)
        alert(identif)
        console.log(identif)

        /* code below gets the nearby watchers by using the ID obtained from the neighborhoods data, from server,
        alongside the location name and converts it to local json for work purposes
        */
        fetch(`https://data.police.uk/api/` + locatio + `/` +identif + `/people`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log('done with data loading')

            // code below gets the Nearby Watchers data within a certain location and inserts it onto the website front page
            for (elem of data) {
                document.querySelector('#result-nearbyWatchersData').innerHTML += `

                <p><b>Name:</b> ${elem.name}</p>
                <p><b>Rank:</b> ${elem.rank}</p>
                <br>
                `
            }
            
            
            
        });
        

    })















}) // ---MARKS THE END OF DOMCONTENT LOADED--


