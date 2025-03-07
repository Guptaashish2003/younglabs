document.getElementById("get-greeting").addEventListener("click", async () => {
    console.log("Button clicked");
    try {
        const name = document.getElementById("name").value;
        const response = await fetch(`http://localhost:5000/api/v1/greet?name=${name}`);
        const data = await response.json();
        console.log(data);
        document.getElementById("message").innerText = data.message;
        document.getElementById("message").style.display = "block";
        document.getElementById("name").value = "";
    } catch (error) {
        console.log(error);
        
        
    }
});