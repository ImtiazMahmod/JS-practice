 //friends name check

function bestFriend(friends){
        let bestFriend = friends[0];
        for(const friend of friends){
            if(friend.length > bestFriend.length){
                 bestFriend = friend;
            }
        }
        return bestFriend;
}
const friends = ['alim','abdul','abdullah','mahmudullah']
const getBestFriend = bestFriend(friends);
console.log(getBestFriend); 
