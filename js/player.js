class Player {
    constructor(){
        this.index=null
        this.distance=0
        this.name=null
        this.rank=null
    }
    getCount(){
        var playerCountRef=database.ref('playerCount')
        playerCountRef.on("value",function(data){
            playerCount=data.val()
        })
    }
    update(){
        var playerIndex ="players/player"+this.index
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }
    updateCount(count){
        database.ref('/').update({playerCount:count})
    }
    static getPlayerInfo(){
        var getPlayerInfoRef=database.ref('players')
        getPlayerInfoRef.on("value",function(data){
            allPlayers=data.val()
        })
    }
    getCarsAtEnd(){
        database.ref('carsatend').on("value",function(data){
            this.rank=data.val()
        })
    }
    static updateCarsAtEnd(rank){
        console.log(rank)
        database.ref('/').update({
            carsatend:rank
        })
    }
}