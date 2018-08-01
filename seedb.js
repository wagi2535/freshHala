 const mongoose = require("mongoose")
 const Hala = require("./models/fresh")
 
 let data = [
  {
        name: "chicken over rice Plate", 
        image: "./img/chicken&rice.png",
        description: "Freshly Chopped chicken grilled over spice rice and a side salad with our signature white sauce and a hot sauce."
  },
    { 
        name: "Combination Plate", 
         image: "/img/compination.png",         
         description:"Tender, lean beef meat chopped and grilled, chopped chicken grilled over spiced Basmati rice and a side salad with our signature white sauce and hot sauce."
    },
    
     {
         name: "Falafel Wrap",
         image: "/img/falafelW.png",        
         description: "Garbanzo beans, mixed vegetables and special spices combined to create a delicious deep fried veggie ball made fresh to order wrapped in pita bread."
     },
     
    {
      name: "Loaded Frech Fries",
      image: "/img/loaded.png",
      description:"Frech fries loaded with queso, beef and white sauce "
    },
    {
      name: "Shawarma Plate",
      image: "/img/shawarma.png",
      description: "Marinated Chicken or lamb breast cooked to perfection, rice with tomato, onions, garlic mayo and hot sauce."
    }, 
    {
      name: "chicken Shawarma Wrap",
      image: "/img/wrap.png",
      description: "chicken or lamb, thin sliced wrapped in pita bread with toamto, lettuce onions and served with white sauce and hot sauce."
    }
 ]
 
 function seeDB(){
    // data.forEach(function(seed){
    //  Hala.create(seed, function(error, fresh){
    //     if(error){
    //       console.log(error)
    //     }else{
    //       console.log("add data to the database")
    //     }
    //      }) 
    //  })
    Hala.remove({}, function(err){
         if(err){
      console.log(err);
        }
 })
 }
 
 
 module.exports = seeDB;