

fetch("https://covid-19-data.p.rapidapi.com/country/code?code=br", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "e9c4724778msh07ee15a9af51346p1be01bjsnca6bf7ea6657"
	}
})
.then( resposta => {
	 resposta.json().then((r)=>{
         console.log(r)
     })
    
})
.catch(err => {
	console.error(err);
});