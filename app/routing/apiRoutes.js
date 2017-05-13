"use strict";

const friendsList = require("../data/friends.json");

module.exports = function(app) {

    //returns the friendslist in json format
    app.get("/api/friends", (req, res) => res.json(friendsList));

    //Logic for determining match finder and returning result to user
    app.post("/api/friends", (req, res) => {

        let userScores = req.body.scores,
            matchIndex,
            tempScore,
            bestScore = 99;

        for (let i = 0; i < friendsList.length; i++) {
            tempScore = 0;
            for (let j = 0; j < friendsList[i].scores.length; j++) {
                tempScore += Math.abs(parseInt(friendsList[i].scores[j]) - parseInt(userScores[j]));
            }
            if (tempScore < bestScore) {
                bestScore = tempScore;
                matchIndex = i;
            }
        }
        res.json(friendsList[matchIndex]);
    });
}
