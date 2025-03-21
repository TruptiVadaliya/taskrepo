const form = document.getElementById("myForm"),
    imgInput = document.querySelector(".img"),
    file = document.querySelector("#imgInput"),
    name = document.querySelector("#name"),
    age = document.querySelector("#age"),
    city = document.querySelector("#city"),
    email = document.querySelector("#email"),
    phone = document.querySelector("#phone"),
    post = document.querySelector("#post"),
    sDate = document.querySelector("#sDate"),
    submitBtn = document.querySelector(".submit"),
    userInput = document.querySelector("#data");

let getData = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : [];

file?.addEventListener("change", function () {
    if (file.files[0].size < 1000000) {
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            imgInput.src = e.target.result;
        };
        fileReader.readAsDataURL(file.files[0]);
    } else {
        alert("This file is too large!");
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const information = {
        picture: imgInput.src ? imgInput.src : "img/user-icon.webp",
        employeeName: name.value,
        employeeAge: age.value,
        employeeCity: city.value,
        employeeEmail: email.value,
        employeePhone: phone.value,
        employeePost: post.value,
        startDate: sDate.value
    };

    getData.push(information);
    localStorage.setItem('userProfile', JSON.stringify(getData));
    displayData();
    form.reset();
});

function displayData() {
    userInput.innerHTML = "";
    getData.forEach((user, index) => {
        userInput.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td><img src="${user.picture}" alt="" style="width: 60px;height: 40px;"></td>
                <td>${user.employeeName}</td>
                <td>${user.employeeAge}</td>
                <td>${user.employeeCity}</td>
                <td>${user.employeeEmail}</td>
                <td>${user.employeePhone}</td>
                <td>${user.employeePost}</td>
                <td>${user.startDate}</td>
                <td>
                    <button class="btn btn-primary" onclick="editUser(${index})"><i class="bi bi-pencil-square"></i></button>
                    <button class="btn btn-danger" onclick="deleteUser(${index})"><i class="bi bi-trash"></i></button>
                </td>
            </tr>
        `;
    });
}

displayData();

function deleteUser(index) {
    getData.splice(index, 1);
    localStorage.setItem('userProfile', JSON.stringify(getData));
    displayData();
}

function editUser(index) {
    let user = getData[index];
    name.value = user.employeeName;
    age.value = user.employeeAge;
    city.value = user.employeeCity;
    email.value = user.employeeEmail;
    phone.value = user.employeePhone;
    post.value = user.employeePost;
    sDate.value = user.startDate;
    imgInput.src = user.picture;

    submitBtn.onclick = function () {
        user.employeeName = name.value;
        user.employeeAge = age.value;
        user.employeeCity = city.value;
        user.employeeEmail = email.value;
        user.employeePhone = phone.value;
        user.employeePost = post.value;
        user.startDate = sDate.value;
        user.picture = imgInput.src;
        
        getData[index] = user;
        localStorage.setItem('userProfile', JSON.stringify(getData));
        displayData();
        form.reset();
    };
}
