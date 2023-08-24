//* Responsive menu 
let burger = document.querySelector('.burger')
let mobileMenu = document.querySelector('.mobile')
let btnclose = document.querySelector('.close')

burger.addEventListener('click', ()=> {
    mobileMenu.classList.add('mobileactive')
})

btnclose.addEventListener('click', ()=> {
    mobileMenu.classList.remove('mobileactive')
})
//* Servic section
const servicCategory = [
    {
        categoryImg: "./img/category-one.png",
        categoryTitle: "Garden care",
        categoryText: "Lorem Ipsum has been the industry"
    },
    {
        categoryImg: "./img/category-two.png",
        categoryTitle: "Planting",
        categoryText: "Lorem Ipsum has been the industry"
    },
    {
        categoryImg: "./img/category-three.png",
        categoryTitle: "Lawn care",
        categoryText: "Lorem Ipsum has been the industry"
    },
    {
        categoryImg: "./img/category-four.png",
        categoryTitle: "Planting",
        categoryText: "Lorem Ipsum has been the industry"
    },
    {
        categoryImg: "./img/category-five.png",
        categoryTitle: "Garden care",
        categoryText: "Lorem Ipsum has been the industry"
    },
    {
        categoryImg: "./img/category-six.png",
        categoryTitle: "Planting",
        categoryText: "Lorem Ipsum has been the industry"
    },
] 

document.getElementById("servic-category").innerHTML = 
    servicCategory.map((item) => {
        return `<div class="box-category">
                <img src=${item.categoryImg} alt=${item.categoryTitle}>
                <h4>${item.categoryTitle}</h4>
                <p>${item.categoryText}</p>
            </div>`;
}).join("");
//* garden function
function garden(){
    const filterServicCategory = servicCategory.filter((data) => data.categoryTitle === "Garden care");
    const newServicCategory = servicCategory.filter((data) => data.categoryTitle !== "Garden care");
    document.getElementById("servic-category").innerHTML = 
    filterServicCategory.map((item) => {
            return `<div class="box-category">
                    <img src=${item.categoryImg} alt=${item.categoryTitle}>
                    <h4>${item.categoryTitle}</h4>
                    <p>${item.categoryText}</p>
                </div>`;
    }).join("") + 
    newServicCategory.map((item) => {
        return `<div class="box-category">
                <img id="blur-img" src=${item.categoryImg} alt=${item.categoryTitle}>
                <h4>${item.categoryTitle}</h4>
                <p>${item.categoryText}</p>
            </div>`;
    }).join("");
}
//* planting function
function planting(){
    const filterServicCategory = servicCategory.filter((data) => data.categoryTitle === "Planting");
    const newServicCategory = servicCategory.filter((data) => data.categoryTitle !== "Planting");
    document.getElementById("servic-category").innerHTML = 
        filterServicCategory.map((item) => {
            return `<div class="box-category">
                    <img src=${item.categoryImg} alt=${item.categoryTitle}>
                    <h4>${item.categoryTitle}</h4>
                    <p>${item.categoryText}</p>
                </div>`;
    }).join("") + 
    newServicCategory.map((item) => {
        return `<div class="box-category">
                <img id="blur-img" src=${item.categoryImg} alt=${item.categoryTitle}>
                <h4>${item.categoryTitle}</h4>
                <p>${item.categoryText}</p>
            </div>`;
    }).join("");
}
//* lawn function
function lawn(){
    const filterServicCategory = servicCategory.filter((data) => data.categoryTitle === "Lawn care");
    const newServicCategory = servicCategory.filter((data) => data.categoryTitle !== "Lawn care");
    document.getElementById("servic-category").innerHTML = 
        filterServicCategory.map((item) => {
            return `<div class="box-category">
                    <img src=${item.categoryImg} alt=${item.categoryTitle}>
                    <h4>${item.categoryTitle}</h4>
                    <p>${item.categoryText}</p>
                </div>`;
    }).join("") + 
    newServicCategory.map((item) => {
        return `<div class="box-category">
                <img id="blur-img" src=${item.categoryImg} alt=${item.categoryTitle}>
                <h4>${item.categoryTitle}</h4>
                <p>${item.categoryText}</p>
            </div>`;
    }).join("");
}
//* Price section
//* basic function
function basic(){
    let basicOpen = document.getElementById("open-basic");
    if (basicOpen.style.display === "block"){
        basicOpen.style.display = "none";
        document.getElementById("basic").style['background-color'] = "#edf2ec";
        document.getElementById("basic").style['border-radius'] = "20px";
        document.getElementById("basic-accourdion-btn").style.display = "block";
        document.getElementById("basic-drop-btn").style.display = "none";
    }else{
        document.getElementById("basic").style['background-color'] = "#d6e7d2";
        document.getElementById("basic").style['border-radius'] = "20px 20px 0 0";
        document.getElementById("basic-price-category-text").style['border-top'] = "0.5px solid #aea1a1";
        document.getElementById("basic-accourdion-btn").style.display = "none";
        document.getElementById("basic-drop-btn").style.display = "block";
        basicOpen.style.display = "block"
    }
}
//* stansart function
function standart(){
    let standartOpen = document.getElementById("open-standart");
    if (standartOpen.style.display === "block"){
        standartOpen.style.display = "none";
        document.getElementById("standart").style['background-color'] = "#edf2ec";
        document.getElementById("standart").style['border-radius'] = "20px";
        document.getElementById("standart-accourdion-btn").style.display = "block";
        document.getElementById("standart-drop-btn").style.display = "none";
    }else{
        document.getElementById("standart").style['background-color'] = "#d6e7d2";
        document.getElementById("standart").style['border-radius'] = "20px 20px 0 0";
        document.getElementById("standart-price-category-text").style['border-top'] = "0.5px solid #aea1a1";
        document.getElementById("standart-accourdion-btn").style.display = "none";
        document.getElementById("standart-drop-btn").style.display = "block";
        standartOpen.style.display = "block"
    }
}
//* proCare function
function proCare(){
    let proCareOpen = document.getElementById("open-pro-care");
    if (proCareOpen.style.display === "block"){
        proCareOpen.style.display = "none";
        document.getElementById("pro-care").style['margin-bottom'] = "34px";
        document.getElementById("pro-care").style['background-color'] = "#edf2ec";
        document.getElementById("pro-care").style['border-radius'] = "20px";
        document.getElementById("pro-care-accourdion-btn").style.display = "block";
        document.getElementById("pro-care-drop-btn").style.display = "none";
    }else{
        document.getElementById("pro-care").style['margin-bottom'] = "0";
        proCareOpen.style['margin-bottom'] = "34px";
        document.getElementById("pro-care").style['background-color'] = "#d6e7d2";
        document.getElementById("pro-care").style['border-radius'] = "20px 20px 0 0";
        document.getElementById("pro-care-price-category-text").style['border-top'] = "0.5px solid #aea1a1";
        document.getElementById("pro-care-accourdion-btn").style.display = "none";
        document.getElementById("pro-care-drop-btn").style.display = "block";
        proCareOpen.style.display = "block"
    }
}
//* Contact section
const contactCity = [
    {
        city: "Canandaigua, NY",
        phone: "+1	585	393 0001",
        officeAdress: "151 Charlotte Street",
    },
    {
        city: "New York City",
        phone: "+1	212	456 0002",
        officeAdress: "9 East 91st Street",
    },
    {
        city: "Yonkers, NY",
        phone: "+1	914	678 0003",
        officeAdress: "511 Warburton Ave",
    },
    {
        city: "Sherrill, NY",
        phone: "+1	315	908 0004",
        officeAdress: "14 WEST Noyes BLVD",
    }
];
//* openCity function 
function openCity(){
    let cityBox = document.getElementById("citys-box");
    if (cityBox.style.display === "block") {
        document.getElementById("accourdion-btn").style.display = "block";
        document.getElementById("drop-btn").style.display = "none";
        document.getElementById("city-contact").style['background-color'] = "#dce9d9"
        cityBox.style.display = "none";
    } else {
        document.getElementById("open-contact").style.display = "none";
        document.getElementById("accourdion-btn").style.display = "none";
        document.getElementById("drop-btn").style.display = "block";
        document.getElementById("city-contact").style['background-color'] = "#c1e698";
        cityBox.style.display = "block";
        cityBox.innerHTML = 
        contactCity.map((item, index) => {
            return `<button type="button" onClick="openContact(${index})">${item.city}<button>`;
    }).join(" ")
    } 
}
//* openContact function
function openContact(index){
    document.getElementById("open-contact").style.display = "block"
    document.getElementById("city-contact").innerHTML = contactCity[index].city + 
    `
        <span id="accourdion-btn">
            <img src="./img/accordion_btn.png" alt="Accordion Icon">
        </span>
        <span id="drop-btn">
            <img src="./img/drop_btn.png" alt="Dropdown Icon">
        </span>
    `;
    document.getElementById("drop-btn").style.display = "none"
    document.getElementById("citys-box").style.display = "none";
    document.getElementById("open-contact").innerHTML = 
    `
        <div class="open-contact-content">
            <div class="open-contact-category">
                <p>City:</p>
                <p>Phone:</p>
                <p>Office adress:</p>
            </div>
            <div class="open-contact-item">
                <p>${contactCity[index].city}</p>
                <p>${contactCity[index].phone}</p>
                <p>${contactCity[index].officeAdress}</p>
            </div>
        </div>
        <button type="button" class="call-us">Call us</button>
    `;
}
//* Current time function 
document.getElementById("date").innerHTML = new Date().getFullYear();