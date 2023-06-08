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
            altText:"Smash Games Logo"
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

                        },
                        {
                                type:"card",
                                //card properties down here
                                ser:"images/Inferno/Inferno-3-short.png",
                                altText:"Upgradable Weapons",
                                title:"Epic Boss Battles",
                                body:"Face off against towering demon bosses, each with their own unique strengths and weaknesses.",
                        }
                    ],
                }, 
                {
                    type:"requirements",
                    platforms:[
                        "steam",
                        "playstation",
                        "xbox",
                        "facebook",
                        "twitter",
                        "instagram",
                        "patreon",
                        "twitch",
                        "youtube",
                    ],
                    requirements:[
                        {
                            type:"minimum-requirements",
                            title:"Minimum Requirements",
                            requirements:[
                                {title:"OS", value:"Win7"},
                                {title:"Processor",value:"Intel I3 or Ryzen 3"},
                                {title:"RAM",value:"8gb"},
                                {title:"Graphics",value:"Geforce GTX 570"},
                                {title:"Storage",value:"1gb HDD"}
                            ]
                        },
                        {
                            type:"Recomended-requirements",
                            title:"Recomended Requirements",
                            requirements:[
                                {title:"OS", value:"Win11"},
                                {title:"Processor",value:"Intel I9 or Ryzen 7"},
                                {title:"RAM",value:"16gb"},
                                {title:"Graphics",value:"Geforce RTX 2080"},
                                {title:"Storage",value:"5gb SSD"}
                            ]
                        }
                    ],  
                },
                {
                    type:"wishlist"
                },
                {
                    type:"faq",
                    questions:[
                        {question:"what does this do?", answer:"stuff"},
                        {question:"what does that do?", answer:"that stuff"},
                        {question:"what does any of this do?", answer:"stuff I think"}
                    ]
                }
            ],
        }
            
        ], 
}


            let page = data.pages[1];
// get the main container
            let container = document.getElementById("main");
            document.title = data.brandName+ " - " + page.pageName; 

 // get access to the branding and change to data.brandName
 document.getElementById("brand").innerHTML = data.brandName.toUpperCase();

 // get access to the page title h1 and change it to page.pageName 
            document.getElementById("pageName").innerHTML=pageName;

 // create all of the block on the pages
            createPage(page.blocks);
            createCallToAction(page.blocks[0]);
            
            createDescription(page.blocks[1]);

//createPage(page.blocks)
            function createPage(blocks){
            for (let i=0; i<blocks.length;i++){
            let currentBlock = blocks[i];
            if (currentBlock.type == "call-to-action") {
                createCallToAction(currentBlock);
            } else if (currentBlock.type == "description") {
                createDescription(currentBlock);
            } else if(currentBlock.type=="deck"){
                createDeck(currentBlock);
            } else {
                console.log("no block template found");
            }
        }
    }
    function createImage(imgData) {
        let img = document.createElement("img");
        img.src = imgData.src;
        img.alt = imgData.alt;
        return img;
    }
    function createButtonLink(linkData) {
        let link = document.createElement("a");
        link.classList.add("btn");
        link.href = linkData.buttonLinkSrc;
        link.target = "_blank";
        link.innerHTML = linkData.buttonLinkText + ' <i class="fa-brands fa-steam-symbol"></i>';
        return link;
    }
        function createCallToAction(blockData){
// get the main container
    let container = document.getElementById("main");
 
 // create our block
        let block = document.createElement("div");
        block.classList.add("call-to-action");
//   add our img
            block.appendChild(createImage(blockData));
            block.appendChild(createButtonLink(blockData));
//   add our break
            block.appendChild(document.createElement("br"));
// add our call to action button
            block.appendChild(createButtonLink(blockData));
 // add our block to main
            container.appendChild(block);
}
            function createDeck(blockData){
//creating the featuere div
            let block= document.createElement("div");
            block.classList.add("features");
            let deck =document.createElement("div");
            deck.classList.add("deck");
            block.appendChild(deck);

           /* <div class="card">
                    <img src="images/Inferno/Inferno-2-short.png" alt="placeholder">
                    <div class="card-body">
                        <h3>Dynamic Environments</h3>
                        <p>Navigate through a variety of fiery landscapes, including lava pits, crumbling ruins, and demonic strongholds.</p>
                    </div>
                </div>*/
              for (let i = 0;i<blockData.cards.length; i++){
                let card = document.createElement("div");
              card.classList.add("card");
              card.appendChild(createImage({
                src:blockData.cards[i].src, 
                alt:blockData.card[i].altText}));

                

                let body = document.currentElement("div");
                    body.classList.add("card-body");
                    card.appenChild(body);
                    let title = document.createElement("h3").innerHTML;
                    title.innerHTML=bolckData.cards[i].title;
                    let text = document.createElement("p");
                    text.innerHTML = blockDta.cards[i].body;
                    body.appendChild(title);
                    body.appendChild(text);
                    deck.appendChild(card);
              }  
            
              container.appendChild(block);
            }
        
             
            function createDescription(blockData) {
// create our block
            let block = document.createElement("div");
            block.classList.add("description", "block", "accent-color");
// add some text here
    let description = document.createElement("p");
    description.classList.add("description-text");
    description.innerText = blockData.text;
    block.appendChild(description);
    // add our block to main
    container.appendChild(block);
 
}

    for(let i = 0;i<blockData.cards.length; i++){

}

