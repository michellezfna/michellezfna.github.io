data = [{
    'img1' : 'assets/jaemin-che.jpg',
    'img2' : 'assets/jaemin-che.jpg',
    'title' : 'Web E-commerce',
    'desc' : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et omnis fuga veniam nesciunt dolores sapiente! "
}, {
    'img1' : 'assets/jaemin-che.jpg',
    'img2' : 'assets/jaemin-che.jpg',
    'title' : 'Web Design',
    'subtitle' : 'The Gallery',
    'desc' : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et omnis fuga veniam nesciunt dolores sapiente! "
}]

var container = document.querySelector('.container-project')

data.forEach(element => {
    container.innerHTML +=
    `<div class="project">
    <div class="img-project">
        <img src="`+element.img1+`" alt="">
        <img src="${element.img2}" alt="">
    </div>
    <div class="desc-project">
        <h1>${element.title}</h1>
        <h2>${element.subtitle}</h2>
        <p>${element.desc}</h2>
    </div>
    <button class="read-more">Read More</button>
</div>`

});

