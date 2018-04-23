pragma solidity ^0.4.21;
contract playerScore {
    
    struct playerData {
        int score;
    }
    
    mapping(address => playerData) scores;

    function getPoints() public constant  returns (int) {
        return scores[msg.sender].score;
    }
     
    function addPoints(int points) public {
        scores[msg.sender].score += points;
    }
    
    function resetScore() public {
        scores[msg.sender].score = 0;
    }
}