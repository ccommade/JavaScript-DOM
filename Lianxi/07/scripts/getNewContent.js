function getNewContent() {
    var request = getHTTPObject();
    if (request) {
        request.open("GET", "example.txt", true);
        request.onreadystatechange = function() {
            if (request.readyState == 4) {
                var para = document.createElement("p");
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
        };
        request.send(null);
    }else {
        alert('Sorry, your beowser doesn\'t support XMLHttpRequest')
    }
}
addLoadEvent(getNewContent);