let friends = require("../data/friends");

// export the function with get requests for api server routes
module.exports = function(app){

    app.get('/api/friends', function(req, res){
        res.json(friends);
    }); 

    app.post("/api/compat", function(req, res) {

        let {scores: newScore} = req.body; 
        let bestMatch; 
        let index;


        for(let i = 0; i < friends.length; i++){
            //Iterate through the whole list of friends already in server
            let total = 0;

            for(let j = 0; j < newScore.length; j++){
                //for each friend calculate the total value
                let diff = Math.abs(newScore[j] -  friends[i].scores[j]);
                total += diff;
            }
 
            console.log(total); 

            if (!bestMatch || total < bestMatch) {
                bestMatch = total;
                index = i;
            }  
          
        }
        console.log('Best Match:', `${friends[index].name}, ${index}`);
        console.log('server' + JSON.stringify(req.body)); 
        res.send(friends[index]); 
    }); 
}; 


