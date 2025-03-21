var form = document.getElementById("myForm"),
    imgInput = document.querySelector(".img"),
    file = document.querySelector("#imgInput"),
    name = document.querySelector("name"),
    age = document.querySelector("age"),
    city = document.querySelector("city"),
    email = document.querySelector("email"),
    phone = document.querySelector("phone"),
    post = document.querySelector("post"),
    sData = document.querySelector("sData"),
    submitBtn = document.querySelector(".submit"),
    userInput = document.querySelector("data")


let getData = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : []

let isData = false, editId
file?.addEventListener("change", function () {
    console.log("File selected:", this.files[0]); // Debugging output
});
file.onchange = function () {
    console.log("hgfhgfghf", file.files[0])
    if (file.files[0].size < 1000000) {
        var fileReader = new FileReader();

        fileReader.onload = function (e) {
            imgUrl = e.target.result
            imgInput.src = imgUrl
        }

        fileReader.readAsDataURL(file.files[0])
    } else {
        alert("this file is too large!");
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const information = {
        picture: imgInput.src == undefined ? "img/user-icon.webp" : imgInput.src,
        employeeName: name.value,
        employeeAge: age.value,
        employeeCity: city.value,
        employeeEmail: email.value,
        employeePhone: phone.value,
        employeePost: post.value,
        startDate: sData.value
    }

    // if(!isEdit)
})