    // setup variables for finding match
        let newFriend =  { name: "Steven Nevets",
        photo: "https://static.pexels.com/photos/343717/pexels-photo-343717.jpeg",
        scores: [2, 2, 1, 3, 4, 2, 4, 2, 5, 4]
    };
        let newScore = newFriend.scores;
        let bestMatch;
        let index;

        
let friends = [ {
    name: "Carolina Anilorac",
    photo: "https://static.pexels.com/photos/206481/pexels-photo-206481.jpeg",
    scores: [1, 5, 5, 4, 5, 3, 4, 3, 1, 4]
}, {
    name: "George Egroeg",
    photo: "https://static.pexels.com/photos/249760/pexels-photo-249760.jpeg",
    scores: [4, 1, 3, 1, 1, 2, 5, 4, 2, 1]
}, {
    name: "Samantha Athnamas",
    photo: "https://static.pexels.com/photos/270308/pexels-photo-270308.jpeg",
    scores: [5, 2, 3, 3, 4, 1, 2, 5, 3, 3]
}, { 
    name: "Robert Trebor",
    photo: "https://static.pexels.com/photos/249757/pexels-photo-249757.jpeg",
    scores: [5, 1, 5, 3, 2, 4, 2, 1, 3, 2]
}, {
    name: "Kristina Anitsirk",
    photo: "https://static.pexels.com/photos/388517/pexels-photo-388517.jpeg",
    scores: [5, 1, 1, 2, 4, 4, 3, 3, 1, 4]
}, {
    name: "JAcob Bacaj",
    photo: "https://static.pexels.com/photos/64385/pexels-photo-64385.jpeg",
    scores: [2, 2, 1, 3, 4, 2, 5, 2, 5, 4]
}];


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
