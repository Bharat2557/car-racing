class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.rank = null;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  clear(){
    var playerRef = database.ref('players');  
    playerRef.remove();
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  getcarsAtend(){
    database.ref("carsAtend").on("value",(data)=>{
    this.rank=data.val();
    })
  }

 static updateCarsAtend(rank){
  database.ref("/").update({
    carsAtend: rank
  })
  }
}
