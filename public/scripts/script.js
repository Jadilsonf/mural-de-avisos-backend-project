document.addEventListener('DOMContentLoaded', ()=>{
    updatePosts();
})

function updatePosts(){

    fetch("http://localhost:3000/api/all").then(res=>{
        return res.json()
    }).then(json=>{
        console.log(json)
    })

}

function newPost(){

}