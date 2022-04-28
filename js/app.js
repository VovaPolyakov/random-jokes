let btn  = document.querySelector('.btn');
let content = document.querySelector('.content')
let author = document.querySelector('.author')


btn.addEventListener('click',function(event){
    fetch('https://www.breakingbadapi.com/api/quotes')
    .then((response) => {
        return response.json();
    })
    .then((data) =>{
        console.log(data)
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
          }
        let random = getRandomInt(0,data.length+1)


        console.log(data[random].quote)

        content.innerText = data[random].quote
        author.innerText = data[random].author
    })
})