let friends = require("../data/friends");

module.exports = function(app){

    app.get('/api/friends', function(req, res){
        res.json(friends);
    }); 

    app.post("/api/new", function(req, res) {
        
        let newFriend = req.body;
        let newScore = newFriend.scores;
        let bestMatch;
        let index;


        for(let i = 0; i < friends.length; i++){
            //Iterate through the whole list of friends already in database
            let total = 0;

            for(let j = 0; j < newScore.length; j++){
                //for each friend calculate the total value
                let diff = Math.abs(newScore[j] -  friends[i].scores[j]);
                total += diff;
            }

            console.log(total); 

            if (!bestMatch) {
                bestMatch = total; 
            } else if (total < bestMatch) {
                bestMatch = total;
                index = i;
            }
            
          
        }
        console.log('Best Match:', `${friends[index].name}, ${index}`);
        console.log('server' + JSON.stringify(req.body)); 
        res.json(friends[index]); 
    }); 
}; 


// ------------------------------------------------ Code Save
   //   setup variables for finding match
        // let newFriend = req.body;
        // let newScore = newFriend.scores;
        // let total = 0;
        // let bestMatch = 1000;
        // let index = -1;

        // for(let i = 0; i < friends.length; i++){
        //     //Iterate through the whole list of friends already in database
        //     total = 0;

        //     for(let j = 0; j < newScore.length; j++){
        //         //for each friend calculate the total value
        //         let diff = Math.abs(newScore[j] - friends[i].scores[j]);
        //         total += diff;
        //     }
        //     if(total < bestMatch){
        //         bestMatch = total;
        //         index = i;
        //     }
        // }
        // console.log('Best Match:', friends[index]);
        // friends.push(newFriend);
        // res.json(friends[index]);