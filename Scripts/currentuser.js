const user1 = localStorage.getItem("currentUser");

const keysOfLS = Object.keys(localStorage);
for (let key of keysOfLS) {

    if (key === user1) {
    const CurrentUserData = JSON.parse(localStorage.getItem(key));


    const welcomeTag = document.querySelector(".WelcomeTag");
            
    welcomeTag.insertAdjacentHTML("afterbegin", `
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" 
    data-bs-toggle="dropdown" aria-expanded="false">    
    Welcome ${CurrentUserData.name}</a>
    `);
    }
}

