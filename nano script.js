function generateVideo() {
    let text = document.getElementById("userInput").value;
    if (text.trim() === "") {
        alert("Please enter some text!");
        return;
    }
    
    document.getElementById("status").innerText = "Processing...";
    
    // अभी यह फेक प्रोसेसिंग दिखाएगा, बैकएंड जोड़ने पर असली वीडियो बनेगा
    setTimeout(() => {
        document.getElementById("status").innerText = "Your AI Video is ready! (Backend not connected yet)";
    }, 3000);
}
