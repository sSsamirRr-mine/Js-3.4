'use strict';

let btn = document.querySelector('button')

async function randomUser() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();

    EditCard(data.results[0]);

}

randomUser()

function EditCard(user) {

    let name = document.querySelector('.name');
    let img = document.querySelector('.user');
    let info = document.querySelector('.info');

    name.innerHTML = `${user.name.first} ${user.name.last}`;
    img.src = `${data.picture.medium}`
    info.innerHTML = `<p class="phone">PhoneNumber:${data.phone}</p> <p class="home">Address:${data.city}</p> <p class="age">Age:${data.dob.age}</p> <p class="mail">Email:${data.email}</p>`



}

