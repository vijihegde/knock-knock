let jokes = ["Knock, knock. Who’s there? You. You who? Yoo-hoo!, Anybody home?", 
             "Knock, knock. Who’s there? Radio. Radio who? Radio not, here I come!",
             "Knock, knock. Who’s there?  Ice cream.  Ice cream who? ICE CREAM SO YOU CAN HEAR ME!",
             "Knock, knock. Who’s there? Weirdo.Weirdo who? Weirdo you think you’re going?",
             "Knock, knock.  Who’s there?  Canoe. Canoe who?Canoe come out now?",
             "Knock, knock.Who’s there?Tank. Tank who?You’re welcome.",
             "Knock, knock.Who’s there? Howl. Howl who?Howl you know unless you open the door?",
             "Knock, knock.Who’s there?Hatch.  Hatch who? Bless you!",
             "Knock, knock.Who’s there?Spell.Spell who?Okay, W-H-O!",
             "Knock, knock.Who’s there?Avenue.Avenue who?Avenue knocked on this door before?"];


function newJoke(){
    let randomNum = Math.floor(Math.random() * jokes.length);
    document.getElementById('jokeDisplay').innerHTML = jokes[randomNum];
}