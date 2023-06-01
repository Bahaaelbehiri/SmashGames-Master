//index.html Smash Games-Home
//Blast.html Smash Games-Inferno Blast
const data= {
    brandName: "Smash Games",
    pages:[
            {
            names:"index",
            pageName:"Home",
            callToAction:{
            ser:"images/SmashGamesLogo-short.png",
            altText:"Smash Games Logo",
            }
        },
            {
            names:"blast",
            pageName:"Inferno Blast",
            blocks:[
                {
                    callToAction:{
                    ser:"images/Inferno-Jumbotron.png",
                    altText:"Inferno Blast Gameplay",
                    buttonLinkSrc:"https://steampowered.com",
                    buttonLinkText:"Buy Now on Steam!"
                    }
                },
                {
            type:"description",
            text:"Inferno Blast is an action-packed adventure game that takes players to a fiery realm of danger and excitement. In this game, you'll take on the role of a hero who must navigate through a series of treacherous levels filled with fiery obstacles and hordes of demons. With each level you complete, you'll unlock new weapons and power-ups to help you in your quest to defeat the ultimate demon boss. Can you survive the inferno and emerge victorious?",
                },
                {
                    type:"deck",
                    cards:[
                        {
                            type:"card",
                            //card properties down here
                            ser:"images/Inferno/Inferno-2-short.png",
                            altText:"Inferno Blast Gameplay",
                            title:"Dynamic Environments",
                            body:"Navigate through a variety of fiery landscapes, including lava pits, crumbling ruins, and demonic strongholds.",
                        },
                        {
                            
                            type:"card",
                            //card properties down here
                            ser:"images/Inferno/Inferno-1-short.png",
                            altText:"Upgradable Weapons",
                            title:"Dynamic Environments",
                            body:"Customize your arsenal with a range of weapons and power-ups, including flamethrowers, rocket launchers, and more.",

                        }
                    ],
                }   
            ],
        }
            
        ] 
}
console.log(data.pages[1].blocks[2].cards[1].body);
 