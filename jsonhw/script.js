let userId = document.getElementById("userId");
let names = document.getElementById("name");
let username = document.getElementById("username");
let email = document.getElementById("email");
let street = document.getElementById("street");
let suite = document.getElementById("suite");
let city = document.getElementById("city");
let zipcode = document.getElementById("zipcode");
let lat = document.getElementById("lat");
let lng = document.getElementById("lng");
let phone = document.getElementById("phone");
let website = document.getElementById("website");
let companyName = document.getElementById("companyName");
let catchPh = document.getElementById("catchPh");
let bs = document.getElementById("bs");

let dataApi = fetch("https://jsonplaceholder.typicode.com/users");
dataApi.then(response => response.json())
.then(function(result){
    for (let j in result) {
        let tdId = document.createElement("td");
        let tdName = document.createElement("td");
        let tdUsername = document.createElement("td");
        let tdEmail = document.createElement("td");
        let tdstreet = document.createElement("td");
        let tdsuite = document.createElement("td");
        let tdcity = document.createElement("td");
        let tdzipcode = document.createElement("td");
        let tdlat = document.createElement("td");
        let tdlng = document.createElement("td");
        let tdphone = document.createElement("td");
        let tdwebsite = document.createElement("td");
        let tdcompanyName = document.createElement("td");
        let tdcatchPh = document.createElement("td");
        let tdbs = document.createElement("td");

        tdId.textContent = result[j].id;
        userId.appendChild(tdId);

        tdName.textContent = result[j].name;
        names.appendChild(tdName);

        tdUsername.textContent = result[j].username;
        username.appendChild(tdUsername);

        tdEmail.textContent = result[j].email;
        email.appendChild(tdEmail);
        
        tdstreet.textContent = result[j].address.street;
        street.appendChild(tdstreet);
        
        tdsuite.textContent = result[j].address.suite;
        suite.appendChild(tdsuite);
        
        tdcity.textContent = result[j].address.city;
        city.appendChild(tdcity);
        
        tdzipcode.textContent = result[j].address.zipcode;
        zipcode.appendChild(tdzipcode);
        
        tdlat.textContent = result[j].address.geo.lat;
        lat.appendChild(tdlat);
        
        tdlng.textContent = result[j].address.geo.lng;
        lng.appendChild(tdlng);
        
        tdphone.textContent = result[j].phone;
        phone.appendChild(tdphone);
        
        tdwebsite.textContent = result[j].website;
        website.appendChild(tdwebsite);
        
        tdcompanyName.textContent = result[j].company.name;
        companyName.appendChild(tdcompanyName);
        
        tdcatchPh.textContent = result[j].company.catchPhrase;
        catchPh.appendChild(tdcatchPh);

        tdbs.textContent = result[j].company.bs;
        bs.appendChild(tdbs); 
    }
})