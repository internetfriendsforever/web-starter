const html = require('../utils/html')

module.exports = () => {
  return html`
    <div class="grid grid--gap">
      <h3>16 columns</h3>

      <div class="grid layout--16-col">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
        <div class="box">6</div>
        <div class="box">7</div>
        <div class="box">8</div>
        <div class="box">9</div>
        <div class="box">10</div>
        <div class="box">11</div>
        <div class="box">12</div>
        <div class="box">13</div>
        <div class="box">14</div>
        <div class="box">15</div>
        <div class="box">16</div>
      </div>

      <h3>12 columns</h3>

      <div class="grid layout--12-col">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
        <div class="box">6</div>
        <div class="box">7</div>
        <div class="box">8</div>
        <div class="box">9</div>
        <div class="box">10</div>
        <div class="box">11</div>
        <div class="box">12</div>
      </div>

      <h3>10 columns</h3>

      <div class="grid layout--10-col">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
        <div class="box">6</div>
        <div class="box">7</div>
        <div class="box">8</div>
        <div class="box">9</div>
        <div class="box">10</div>
      </div>

      <h3>8 columns</h3>

      <div class="grid layout--8-col">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
        <div class="box">6</div>
        <div class="box">7</div>
        <div class="box">8</div>
      </div>

      <h3>6 columns</h3>

      <div class="grid layout--6-col">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
        <div class="box">6</div>
      </div>

      <h3>5 columns</h3>

      <div class="grid layout--5-col">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
      </div>

      <h3>4 columns</h3>

      <div class="grid layout--4-col">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
      </div>

      <h3>3 columns</h3>

      <div class="grid layout--3-col">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
      </div>

      <h3>2 columns</h3>

      <div class="grid layout--2-col">
        <div class="box">1</div>
        <div class="box">2</div>
      </div>

      <h3>1 column</h3>

      <div class="grid layout--1-col">
        <div class="box">1</div>
      </div>

      <h3>2+3 columns</h3>

      <div class="grid layout--5-col">
        <div class="box col-span-2">1</div>
        <div class="box col-span-3">2</div>
      </div>

      <h3>3 columns</h3>

      <div class="grid grid--gap layout--3-col">
        <div class="box col-span-3">
          <h4>Cards</h4>
        </div>

        <div class="box col-span-3 grid grid--gap layout--3-col">
          <div class="card card--inverted">Card 1</div>
          <div class="card card--inverted">Card 2</div>
          <div class="card card--inverted">Card 3</div>
          <div class="card card--border">Card 4</div>
          <div class="card card--border">Card 5</div>

          <div class="box">Normal box</div>

          <div class="box col-span-3">
            <div class="card card--border">
              Big card
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}
