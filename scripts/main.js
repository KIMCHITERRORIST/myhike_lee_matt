function getNameFromAuth() {
    firbase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log("user is logged in")
            console.log(user.displayname)

            document.getElementById("name-goes-here").innerHTML = user.displayName;
            userName = user.displayName;
        }
        else {
            console.log("user is not logged in")
        }

    }
}



getNameFromAuth(); //run the function you will always need this