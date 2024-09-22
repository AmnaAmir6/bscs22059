function populateAbout(data){
    let about_section = document.getElementById("about");

    about_section.querySelector('.name-animation').textContent = data.name;
    about_section.querySelector('.image').src = data.profilepic;
    about_section.querySelector('.image').alt = `${data.name}'s Profile Picture`;
    about_section.querySelector('#profession').textContent=data.profession;

    let about_info = document.getElementById("about-info");
    let about_description = about_info.querySelector('p');
    about_description.innerHTML = data.description; 

    let about_quote = about_info.querySelector('blockquote');
    about_quote.innerHTML = data.quote;

}

function populateProfile(data) {
    console.log("in polulate Profile");
    populateAbout(data);
}

function NavBarResponsiveness() {
    var x = document.getElementById("NavBar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

function fetchData(){
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            populateProfile(data);
        })
        .catch(error => console.error('Error fetching the JSON data:', error));

}

fetchData();
