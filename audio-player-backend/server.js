const express = require('express')
const app = express()

app.use((req, res, next) => {
 res.header("Access-Control-Allow-Origin", "*")
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
 next()
})

class Song {
 constructor(source, title, description, id, length, lyric){
  this.source = source
  this.title = title
  this.description = description
  this.id = id
  this.length = length
  this.lyric = lyric
 }
}
const song = [
 new Song(`/Slipknot.mp3`, `The Devil In I`, `Shortly after the reveal of "The Negative One", another countdown was put up on Slipknot's official website telling fans to come back on August 11, 2014 at 10 am PDT for "A special announcement". The announcement was delayed but eventually revealed the cover art for the new single titled "The Devil in I".`, 0, `5:55`,`Undo these chains, my friend
 I’ll show you the rage I’ve hidden
 Perish the Sacrament
 Swallow, but nothing’s forgiven
 You and I can’t decide
 Which of us was taken for granted
 Make amends
 Some of us are destined to be outlived
 Step inside, see the devil in I
 Too many times, we’ve let it come to this
 Step inside, see the devil in I
 You’ll realize I’m not your devil anymore
 Under the words of men
 Something is tempting the father
 Where is your will, my friend?
 Insatiates never even bother
 You and I, wrong or right
 Traded a lie for the leverage
 In between the lens in light
 You're not what you seem
 Step inside, see the devil in I
 Too many times, we’ve let it come to this
 Step inside, see the devil in I
 You’ll realize I’m not your devil
 I’m not your devil anymore
 Your station, is abandoned
 Fool you cause I know what you’ve done
 Sensation, deprivation
 You should’ve burned when you turned on everyone
 So step inside, see the devil in I
 Too many times, we’ve let it come to this
 Step inside, see the devil in I
 I know you’ll find your answers in the end
 Step inside, see the devil in I
 You’ll realize I’m not your devil, anymore
 So step inside, step inside`),
 new Song (`/Rammstein.mp3`,`Ich Tu Dir Weh`, `"Ich tu dir weh" (German for "I hurt you" or "I do thee woe") is a song by German Neue Deutsche Härte band Rammstein. It was released as the second single from their fifth studio album, Liebe ist für alle da (2009), on 5 February 2010. A music video for the song was previously released online on 21 December 2009.`,1, '3:58',`Nur für mich bist du am Leben
 Ich steck dir Orden ins Gesicht
 Du bist mir ganz und gar ergeben
 Du liebst mich denn ich lieb' dich nicht
 
 Du blutest für mein Seelenheil
 Ein kleiner Schnitt und du wirst geil
 Der Körper - schon total entstellt
 Egal, erlaubt ist, was gefällt
 
 Ich tu' dir weh.
 Tut mir nicht Leid!
 Das tut dir gut.
 Hör wie es schreit!
 
 Bei dir habe ich die Wahl der Qual
 Stacheldraht im Harnkanal
 Leg dein Fleisch in Salz und Eiter
 Erst stirbst du doch dann lebst du weiter
 
 Bisse, Tritte, harte Schläge
 Nadel, Zangen, stumpfe Säge
 Wünsch' dir was, ich sag nicht nein
 Und führ' dir Nagetiere ein
 
 Ich tu' dir weh.
 Tut mir nicht Leid!
 Das tut dir gut.
 Hör wie es schreit!
 
 Ich tu' dir weh.
 Tut mir nicht Leid!
 Es tut dir gut.
 Hör wie es schreit!
 
 Du bist das Schiff, ich der Kapitän
 Wohin soll denn die Reise geh'n?
 Ich seh' im Spiegel dein Gesicht
 Du liebst mich denn ich lieb' dich nicht
 
 Ich tu' dir weh.
 Tut mir nicht Leid!
 Das tut dir gut.
 Hört wie es schreit!
 
 Ich tu' dir weh.
 Tut mir nicht Leid!
 Das tut dir gut.
 Hör wie es schreit!
 
 Ich tu' dir weh.
 Tut mir nicht Leid!
 Das tut dir gut.
 Hör wie's schreit! `),
 new Song (`/BMTH.mp3`, `Shadow Moses`, `"Shadow Moses" was originally written with the intention of possibly releasing it for free prior to the release of Sempiternal, according to Bring Me the Horizon vocalist Oliver Sykes, before management reportedly opposed the idea and encouraged the band to save it for the album.[1] Both Sykes and drummer Matt Nicholls have described it as "the 'safest' track on the album".`,2, '4:11',`
 Can you tell from the look in her eyes?
 We’re going no where
 We live our lives like we’re ready to die
 We’re going no where
 Can you tell from the look in her eyes?
 We’re going no where
 We live our lives like we’re ready to die
 We’re going no where
 I thought I’d buried you
 And covered the tracks
 You’ll have to take this with your cold dead hands
 I thought I’d buried you
 We’re sinking, never die
 I thought I cut you loose
 Severed the feeling
 I stepped through the crack as you clamp to my shirt
 I thought I’d buried you
 We’re sinking, never die
 Can you tell from the look in her eyes
 We’re going no where
 We live our life like we’re ready to die
 We’re going no where.
 You can run but you’ll never escape
 Over and over again
 Will we ever see the end?
 We’re going no where
 This is sempiternal
 Will we ever see the end?
 This is sempiternal
 Over and over, again and again
 Rise from the dead you child
 Secrets don’t deplete till they come to the ground
 Signal the sirens, rally the troops
 Ladies and gentlemen
 Its the moment of truth
 Can you tell from the look in her eyes?
 We’re going no where
 We live our lives like we’re ready to die
 We’re going no where
 You can run but never escape
 Over and over again
 Will we ever see the end?
 We’re going no where
 Can you tell from the look in her eyes?
 We’re going no where
 We live our lives like we’re ready to die
 We’re going no where
 You can run but never escape
 Over and over again
 Will we ever see the end?
 We’re going no where
 This is sempiternal
 Will we ever see the end?
 This is sempiternal
 Over and over, again and again`)
]

app.get('/song', (req, res) => res.send(song))

const port = process.env.PORT || 1368
app.listen(port, () => console.log(`server is running on port ${port}`))