const cardWrapper = document.querySelector(".content-cards");
const searchButton = document.querySelector("#search-button");
const searchInput = document.querySelector("#search-input");

const films = [
    {
        id: 0,
        title: "Марсианин",
        original: "The Martian 2015",
        category: "Фантастика, приключения",
        rating: 7.8,
        link: "./film.html",
        img: "./images/film.png",

    },
    {
        id: 1,
        title: "Марсианин",
        original: "The Martian 2015",
        category: "Фантастика, приключения",
        rating: 7.8,
        link: "./film.html",
        img: "./images/film.png",

    },
    {
        id: 2,
        title: "Марсианин",
        original: "The Martian 2015",
        category: "Фантастика, приключения",
        rating: 7.8,
        link: "./film.html",
        img: "./images/film.png",

    },
    {
        id: 3,
        title: "Марсианин",
        original: "The Martian 2015",
        category: "Фантастика, приключения",
        rating: 7.8,
        link: "./film.html",
        img: "./images/film.png",

    },
    {
        id: 4,
        title: "Марсианин",
        original: "The Martian 2015",
        category: "Фантастика, приключения",
        rating: 7.8,
        link: "./film.html",
        img: "./images/film.png",

    }

]

const render = (array) => {
    cardWrapper.innerHTML =''
    films.forEach((item) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
        <a href="film.html" class="content-cards__items">
                                <div class="content-cards__item--img">
                                    <img src="${item.img}" alt="mars">
                                </div>

                                <div class="content-cards__item--title">
                                    <h5>${item.title}, </h5>
                                    <span>${item.original}</span>
                                </div>
                                <p class="content-cards__item--description">
                                    ${item.category}
                                </p>
                                <p class="content-cards__item--rating">
                                    ${item.rating}
                                </p>    

                            </a>
        `)
    })

}
searchButton.addEventListener('click', () => {
    console.log(searchInput.value)
    // render(films.filter((item) => item.title.includes(searchInput.value)))
    render(films.filter((item) =>{
        return item.title.includes(searchInput.value)
    }))
})
render(films)