const baseUrl = 'https://api.github.com/users/';
var username = 'DanielsDubstep35';

async function getInformation() {
    const response = await fetch(baseUrl + username)
    return await response.json();
}

async function getRepos() {
    const response = await fetch(baseUrl + username + "/repos")
    return await response.json();
}

function loadUserProfile() {
    getInformation().then(data => {

        var avatar = data["avatar_url"];
        var name = data["name"];
        var username = data["login"];
        var email = data["email"];
        var location = data["location"];
        var numberOfGists = data["public_gists"];

        if (avatar == null) {
            avatar = "https://149611589.v2.pressablecdn.com/wp-content/uploads/2020/09/github-logo-black-on-white.png";
        }
        if (name == null) {
            name = "No name found!";
        }

        if (username == null) {
            username = "No username found!";
        }

        if (email == null) {
            email = "No email found!";
        }

        if (location == null) {
            location = "No location found!";
        }

        if (numberOfGists == null) {
            numberOfGists = "No gists found!";
        }

        document.getElementById("UserProfileImage").src = avatar;
        document.getElementById("UserProfileName").innerHTML = name;
        document.getElementById("UserProfileUsername").innerHTML = username;
        document.getElementById("UserProfileEmail").innerHTML = email;
        document.getElementById("UserProfileLocation").innerHTML = location;
        document.getElementById("UserProfileNumberOfGists").innerHTML = numberOfGists;
    })
}

function loadUserRepository() {
    getRepos().then(data => {
        if (data != null) {
            data.map(element => {
                var repo = document.createElement("li");
                var userRepoName = document.createElement("div");
                var UserRepoDescription = document.createElement("div");

                repo.setAttribute("id", "Repository");
                userRepoName.setAttribute("id", "UserRepositoryName");
                UserRepoDescription.setAttribute("id", "UserRepositoryDescription");

                userRepoName.innerHTML = element["name"];
                UserRepoDescription.innerHTML = element["description"];

                repo.appendChild(userRepoName);
                repo.appendChild(UserRepoDescription);

                var elemToInsert = document.getElementById("ScrollableRepositoriesHolder");
                elemToInsert.insertBefore(repo, elemToInsert.childNodes[1]);
            })
        } else {
            var repo = document.createElement("li");
            var userRepoName = document.createElement("div");
            var UserRepoDescription = document.createElement("div");

            repo.setAttribute("id", "Repository");
            userRepoName.setAttribute("id", "UserRepositoryName");
            UserRepoDescription.setAttribute("id", "UserRepositoryDescription");

            userRepoName.innerHTML = "No repositories found!";
            UserRepoDescription.innerHTML = "No repositories found!";

            repo.appendChild(userRepoName);
            repo.appendChild(UserRepoDescription);

            var elemToInsert = document.getElementById("ScrollableRepositoriesHolder");
            elemToInsert.insertBefore(repo, elemToInsert.childNodes[1]);
        }
    })
}

function searchUser() {
    username = document.getElementById("TopBarSearch").value;
    loadUserProfile();
    loadUserRepository();
}
