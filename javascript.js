function populateAbout(data) {
    let about_section = document.getElementById("about");

    about_section.querySelector('.name-animation').textContent = data.name;
    about_section.querySelector('.image').src = data.profilepic;
    about_section.querySelector('.image').alt = `${data.name}'s Profile Picture`;
    about_section.querySelector('#profession').textContent = data.profession;

    let about_info = document.getElementById("about-info");
    let about_description = about_info.querySelector('p');
    about_description.innerHTML = data.description;

    let about_quote = about_info.querySelector('blockquote');
    about_quote.innerHTML = data.quote;

}

function populateSkills(data) {
    //technical skills
    let technical_skills = document.getElementById("technical-skills-ul");
    technical_skills.innerHTML = data.technicalskills.map(
        skill =>
            `<li class="skill"><i class="${skill.icon_class}" style="color:${skill.icon_color}"></i>
                        ${skill.name}
                        <div class="progress-bar">
                            <div style="width:${skill.percentage}%;"></div>
                        </div>
            </li>`
    ).join('');

    //soft skills
    let soft_skills = document.getElementById("soft-skills-ul");
    soft_skills.innerHTML = data.softskills.map(
        skill =>
            `<li class="skill">
                        ${skill.name}
                        <div class="progress-bar">
                            <div style="width:${skill.percentage}%;"></div>
                        </div>
            </li>`
    ).join('');
}

function populateProjects(data) {
    let projects = document.getElementById("project_section");
    projects.innerHTML =
        `<h2>Projects</h2>
        ${data.projects.map(project => 
            `<div class="project-card">
                    <div class="project-image">
                        <img class="project-img" src="${project.image}" alt="my ${project.title} project image">
                    </div>
                    <div class="project-info">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <span class="date">Date: ${project.date}</span>
                    </div>
                </div>
        `).join('')}`

}

function populateEducation(data){
    //degree section
    let degrees = document.getElementById("degree-container");
    degrees.innerHTML=data.degrees.map(degree =>
        `<div class="degree">
                    <h3>${degree.name}</h3>
                    <p>${degree.institute}, ${degree.status}</p>
                </div>`
    ).join('');
    //programs section

}

function populateProfile(data) {
    console.log("in polulate Profile");
    populateAbout(data);
    populateSkills(data);
    populateProjects(data);
    populateEducation(data);
}

function NavBarResponsiveness() {
    var x = document.getElementById("NavBar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

function fetchData() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            populateProfile(data);
        })
        .catch(error => console.error('Error fetching the JSON data:', error));

}

fetchData();
