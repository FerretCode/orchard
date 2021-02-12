window.onload = function() {
    var form = document.getElementById('submit');
    var webview = document.getElementById('foog');
    
    form.addEventListener('click', (event) => {
        event.preventDefault();
    
        console.log("hi");
    
        webview.loadURL(document.getElementById('addressBar').value)
            .catch((error) => {
                if(error) alert("error! check your url");
            });
    });
}