let friends = require("../data/friends");

// export the function with get requests for api server routes
module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post("/api/compat", function (req, res) {

        let { scores: newScore } = req.body;
        let bestMatch;
        let index;


        for (let i = 0; i < friends.length; i++) {
            //Iterate through the whole list of friends already in server
            let total = 0;

            for (let j = 0; j < newScore.length; j++) {
                //for each friend calculate the total value
                let diff = Math.abs(newScore[j] - friends[i].scores[j]);
                total += diff;
            }

            // test for best match being undefined for first iteration and then test if it less than the total on every other pass
            if (bestMatch === undefined || total < bestMatch) {
                bestMatch = total;
                index = i;
            }

        }

        // push the new friend into the array an send back the best match
        res.send(friends[index]);
        friends.push(req.body);
    });
};


