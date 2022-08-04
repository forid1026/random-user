const fetchData = () => {
  fetch("https://randomuser.me/api/?results=100")
    .then((res) => res.json())
    .then((data) => displayUser(data));
};

// call function
fetchData();



// display users function
const displayUser = (users) => {
    const usersDiv = document.getElementById("users");
    const userInfo = users.results; 
    for (const user of userInfo) {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user-info');
        usersDiv.appendChild(userDiv);
        userDiv.innerHTML = `
            <img src="${user.picture.large}" alt="profile-image">
            <p>Hi, My name is</p>
            <h3>${user.name.title} ${user.name.first} ${user.name.last} </h3>
        `;
    }
};
