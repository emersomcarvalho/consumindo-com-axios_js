axios.get('https://api.github.com/users/emersomcarvalho')
.then(function(reponse){
console.log(reponse);
})
.catch(function(error){
    console.warn(error);
});

