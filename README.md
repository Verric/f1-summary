# F1 Summary 2024

A small personal app to give a quick summary of races and the season.
A public verion hosted by netlify can be found at https://f1-summary-2024.netlify.app

## Motivation

The F1 website provides a bunch of information but often I find myself constantly flicking back and forth
across differnt pages of data to see what happened. Such as who finished in which position and where they
started. Seeing who set the fatest laps and their average speeds.
There are also things in the F1 reports that I don't care about. For example I don't care on what lap and what
time of day a driver achieved their fastest lap.
So I decided to build a personal app that just summarises the data that I care about in a way that seemed
quicker and easier for me to read

## How does it work.

Under the tools folder I have a hacky semi-automated script that given a base url for an event scrapes the F1 results pages
using cheerio. The data is then pasted into the "results.ts" under the data folder. Images and tyre info grahphics are currently,
manually downloaded.

## Thanks

In a sort of weird negative thanks, to F1 for supplying the data in a longwinded way which motivated this project. Yet they actually have all the info I care about so that's nice. Also could the FIA or F1 create a simple JSON/XML/GQL API? It would be nice for accessing this type of basic info

Also, weirdly despite Pirelli having a bit of a poor website. Their section on F1 info graphics found [here](https://www.pirelli.com/global/en-ww/emotions-and-numbers/) actually provides an incredibly nice view about the tyres and pit stops. So well done to who ever works on the info graphics, I think they are great

## Todo

- Automate more of the data retrieval and automate yoinking images from F1 and Pirelli
- Make the race report table orderable / sortable
- Highlight fastest lap
- Raft of CSS and layout improvements
- Potentially if im really bored make the app more responsive friendly for smaller screens
- Maybe look into performance improvements, but generally that app is small enough not to warrant them at this point
- Denormalise the data to allow for things like driver images and numbers, althought I don't really care hence why they
  aren't part of the app already

## License

In the advent this somehow gets found and is used, I'm just going to tack on a PolyForm NCL for the code and app.
Obviously all images and assets pulled from F1 and Pirelli and owned by their respective entities.
Other than that feel free to poke and play around

A copy of the license can be found in LICENSE.md or at ([polyform](https://polyformproject.org/licenses/noncommercial/1.0.0/))
