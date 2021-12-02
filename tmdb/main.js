let API_KEY = 'b971c2f0de8767f08d2bb84160ba24b7'
let api1 = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=`
let api2 = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=`
let api3 = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=`
let append = document.querySelector('.append')
let button1 = document.querySelector('.btns1')
let button2 = document.querySelector('.btns2')
let button3 = document.querySelector('.btns3')
let button4 = document.querySelector('.btn')
let min = document.querySelector('#min')
let max = document.querySelector('#max')
let perv = document.querySelector(".prev")
let next = document.querySelector(".next")
let search_input = document.querySelector('#search')
let storage = window.localStorage;
function create (...array){
    return array.map(el=>{
        return document.createElement(el)
    })
}
let page_soni=1
perv.onclick=()=>{
    if(page_soni<=1){return}
    page_soni=page_soni-1
    top1()
}
next.onclick = ()=>{
    if(page_soni>=22){return}
    page_soni=page_soni+1
    top1()
}
async function upcoming (){
    append.innerHTML=null
    const response = await fetch(api1+(page_soni+''))
    const x = await response.json()
    let info = await x.results
    console.log(x)
    for (let i of info){
        const[div1,img,div2,h3,span1,span2] = create('div','img','div','h3','span','span')

        div1.className = "movie";
        div2.className = "movie-info"
        span1.className = "orange"
        span2.className = "date"

        let rasim = await i.poster_path
        span2.textContent = await i.release_date
        span1.textContent = await i.vote_average
        h3.textContent = await i.title
        img.src = "https://image.tmdb.org/t/p/w500" + rasim

        div2.append(h3,span1)
        div1.append(img,div2,span2)
        append.append(div1)
        console.log(i)
    }
    
}
upcoming()
button3.onclick=()=>{
    upcoming()
}
button1.onclick=()=>{
    top1()
}
button2.onclick=()=>{
    popular()
}
async function top1(){
    append.innerHTML=null
    const response = await fetch(api2+(page_soni+''))
    const x = await response.json()
    let info = await x.results
    console.log(x)
    for (let i of info){
        const[div1,img,div2,h3,span1,span2] = create('div','img','div','h3','span','span')

        div1.className = "movie";
        div2.className = "movie-info"
        span1.className = "orange"
        span2.className = "date"

        let rasim = await i.poster_path
        span2.textContent = await i.release_date
        span1.textContent = await i.vote_average
        h3.textContent = await i.title
        img.src = "https://image.tmdb.org/t/p/w500" + rasim

        div2.append(h3,span1)
        div1.append(img,div2,span2)
        append.append(div1)
        console.log(i)
    }
}

async function popular(){
    append.innerHTML=null
    const response = await fetch(api3+(page_soni+''))
    const x = await response.json()
    let info = await x.results
    console.log(x)
    for (let i of info){
        const[div1,img,div2,h3,span1,span2] = create('div','img','div','h3','span','span')

        div1.className = "movie";
        div2.className = "movie-info"
        span1.className = "orange"
        span2.className = "date"

        let rasim = await i.poster_path
        span2.textContent = await i.release_date
        span1.textContent = await i.vote_average
        h3.textContent = await i.title
        img.src = "https://image.tmdb.org/t/p/w500" + rasim

        div2.append(h3,span1)
        div1.append(img,div2,span2)
        append.append(div1)
        console.log(i)
    }
}
button4.onclick = event => {
    // event.preventDefault()
    searched()
    console.log(max.value)
}

async function searched(){
    append.innerHTML=null
    const response = await fetch(api3+(page_soni+''))
    const x = await response.json()
    let info = await x.results
    console.log(x)
    for (let i of info){
        const[div1,img,div2,h3,span1,span2] = create('div','img','div','h3','span','span')

        div1.className = "movie";
        div2.className = "movie-info"
        span1.className = "orange"
        span2.className = "date"

        let rasim = await i.poster_path
        span2.textContent = await i.release_date
        span1.textContent = await i.vote_average
        h3.textContent = await i.title
        img.src = "https://image.tmdb.org/t/p/w500" + rasim
        let qwerty = await i.title
        let ismi=qwerty.toLowerCase()
        let yili = await i.release_date
        let array = yili.split('-')

        if(ismi.includes((search_input.value).toLowerCase())){
            div2.append(h3,span1)
            div1.append(img,div2,span2)
            append.append(div1)
            console.log(i)
        }
    }
}
