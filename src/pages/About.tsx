export default function About() {
  return (
    <main>
      <article className="prose">
        <h2 className="text-2xl">Motivation</h2>
        <p>
          The F1 website provides a bunch of information but often I find myself constantly flicking back and forth
          across differnt pages of data to see what happened. Such as who finished in which position and where they
          started. Seeing who set the fatest laps and their average speeds.
        </p>
        <p>
          There are also things in the F1 reports that I don't care about. For example I don't care on what lap and what
          time of day a driver achieved their fastest lap
        </p>
        <p>
          So I decided to build a personal app that just summarises the data that I care about in a way that seemed
          quicker and easier for me to read
        </p>
      </article>
      <article className="prose">
        <h2 className="text-2xl">Features</h2>
        <ul>
          <li>
            <h3 className="text-lg">Timeline of Drivers and Contructors Championship</h3>
            <p>
              Currently on the F1 website you see can the{" "}
              <a target="_blank" rel="noopener noreferrer" href="https://www.formula1.com/en/results/2024/drivers">
                driver's ladder
              </a>
              and the{" "}
              <a target="_blank" rel="noopener noreferrer" href="https://www.formula1.com/en/results/2024/team">
                constructor's ladder{" "}
              </a>
              however not at the same time. Also these pages only show the current state of the Championship they do not
              allow to see it as it was after the third race or what the championship looked like just before the latest
              race. Also for convenience I've added differnce between the current entity and the entity above them to
              save myself the ardous task of basic arithmetic.
            </p>
          </li>
          <li>
            <h3 className="text-lg">Race Reports</h3>
            <p>
              Partially inspired by the games, the table displays both the drivers finishing position and their starting
              poisition. We then show a little indicator showing their promotion or demotion on the ladder. The table is
              not supposed to be a comprehensive view of all available data. It was created to show the stuff that
              interested me personally. Finally the Pirelli info graphics present a nice view of the pit stops.
            </p>
          </li>
        </ul>
      </article>
    </main>
  )
}
