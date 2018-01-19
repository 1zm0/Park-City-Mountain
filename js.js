var lifts = [
              { "Lift":"Cabriolet", "Type":"Gondola" },
              { "Lift": "Frostwood Gondola", "Type": "Gondola"},
              { "Lift": "Orange Bubble Express", "Type": "Quad"},
              { "Lift": "Red Pine Gondola", "Type": "Gondola"},
              { "Lift": "Sunrise", "Type":"Double" },
              { "Lift": "Shortcut", "Type": "Triple"},
              { "Lift": "Super Condor Express", "Type": "Quad"},
              { "Lift":"Rip Cord", "Type": "Rope Tow"},
              { "Lift": "Sun Peak Express", "Type": "Quad"},
              { "Lift":  "High Meadow", "Type": "Quad"},
              { "Lift": "Saddleback Express", "Type": "Quad"},
              { "Lift": "Tombstone Express", "Type": "6 pack"},
              { "Lift": "Ninety-Nine 90 Express", "Type": "Quad"},
              { "Lift": "Peak 5", "Type": "Quad"},
              { "Lift": "Day Break", "Type": "Triple"},
              { "Lift": "Dreamscape", "Type": "Quad"},
              { "Lift": "Dreamcatcher", "Type": "Quad"},
              { "Lift": "Iron Mountain Express", "Type": "Quad"},
              { "Lift": "Timberline", "Type": "Quad"},
              { "Lift": "Flat Iron", "Type": "Double"},
              { "Lift": "Quicksilver Gondola", "Type": "Gondola"},
              { "Lift": "Motherload Express", "Type": "Quad"},
              { "Lift": "Silverlode Express", "Type": "6 pack"},
              { "Lift": "King Con Express", "Type": "6 pack"},
              { "Lift": "Silver Star", "Type": "Triple"},
              { "Lift": "Eagle", "Type": "Triple"},
              { "Lift": "3 Kings", "Type": "Triple"},
              { "Lift": "First Time", "Type": "Quad"},
              { "Lift":"Eaglet", "Type": "Triple"},
              { "Lift": "Payday Express", "Type": "6 pack"},
              { "Lift": "Town Lift", "Type": "Triple"},
              { "Lift": "Bonanza Express", "Type": "6 pack"},
              { "Lift": "Crescent Express", "Type": "Quad"},
              { "Lift": "Thaynes", "Type": "Double"},
              { "Lift": "Pioneer", "Type": "Triple"},
              { "Lift": "McConkey's Express", "Type": "6 pack"},
              { "Lift": "Jupiter", "Type": "Double"}
]


lifts.forEach(function (item, index){

  console.log(index, item);

  document.write(

    "<div id=lifts>" +
    "<br>" +
    "Lift: " + lifts[index].Lift +"<br>"+"Type: " + lifts[index].Type +
    "</div>"
                );
});
