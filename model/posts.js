module.exports = {
    posts: [
        {id:"hsuahsauh",
         title: "teste do mural",
         description: "descrição do teste"},
    ],
    // O getAll é um método própro do javascript
    getAll(){
        return this.posts
    },

    newPost(title,description){
        this.posts.push({id: generateID(),title,description})

    }
}

function generateID(){
    return Math.random().toString(36).substr(2,9)
}