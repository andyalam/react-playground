import React from "react";

import Article from "../components/Article";

export default class Featured extends React.Component {
  render() {

    // Map shorthand, easier than creating repetition with array of <Article/>
    // key is used for speed, it does not have to be a number it can be anything
    const Articles = [
      "Some Article",
      "Another Article",
      "Moar Article",
      "Ok I'm done"
    ].map((title, i) => <Article key={i} title={title}/> );

    const adText = [
      "Ad spot #1",
      "Ad spot #2",
      "Ad spot #3",
      "Ad spot #4",
    ];

    const randomAd = adText[Math.round( Math.random() * (adText.length-1) )];

    return (
      <div>
        <h1>Featured</h1>

        <div class="row">
          <div class="col-lg-12">
            <div class="well text-center">
              {randomAd}
            </div>
          </div>
        </div>

        <div class="row">
          {Articles}
        </div>
      </div>
    );
  }
}
