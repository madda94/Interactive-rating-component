let isRated = false

document.addEventListener("click", function(e){
    if (e.target.dataset.star) {
        isRated = true
        document.getElementById(`${e.target.dataset.star}`).style.backgroundColor = "hsl(25, 97%, 53%)"
        document.getElementById(`${e.target.dataset.star}`).style.color = "hsl(0, 0%, 100%)"
        document.getElementById("selected-rating").innerHTML = `You selected ${e.target.dataset.star} out of 5`
    }
    else if (e.target.id === "submit") {
        if (isRated) {
            document.getElementById("rating-component").style.display = "none"
            document.getElementById("thank-you-div").style.display = "flex"       
        }
    }
})

