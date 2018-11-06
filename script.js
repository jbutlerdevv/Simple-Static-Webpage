// jquery HOVER event for icons
$(document).ready(function(){
    $(".icons").hover(function(){
        $(this).css("font-size", "225%");
    }, function(){
        $(this).css("font-size", "200%");
    });
});

// AJAX call
let gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    let gitObject = JSON.parse(this.responseText);
    let txt = "";
    for(i = 0; i < gitObject.length; i++){
        txt = txt + gitObject[i].name + "<br>"; 
    }
    document.getElementById("gitHubRepos").innerHTML = txt;
}
};

gitHubRequest.open("GET", "https://api.github.com/users/joshorion7/repos", true);
gitHubRequest.send();
