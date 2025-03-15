import Hello from "./CoDynHello";

function App() {
  return (
    <div>
      <h1>This is me</h1>
      <Hello></Hello>
      <div>
        <h3>This is my Bootstrap test div </h3> <br />
        <button type="button" class="btn btn-primary">
          Primary
        </button>
        <button type="button" class="btn btn-secondary">
          Secondary
        </button>
        <button type="button" class="btn btn-success">
          Success
        </button>
        <button type="button" class="btn btn-danger">
          Danger
        </button>
        <button type="button" class="btn btn-warning">
          Warning
        </button>
        <button type="button" class="btn btn-info">
          Info
        </button>
        <button type="button" class="btn btn-light">
          Light
        </button>
        <button type="button" class="btn btn-dark">
          Dark
        </button>
        <button type="button" class="btn btn-link">
          Link
        </button>
        <br />
        <br />
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary">
            Left
          </button>
          <button type="button" class="btn btn-primary">
            Middle
          </button>
          <button type="button" class="btn btn-primary">
            Right
          </button>
        </div>
        <br />
        <br />
        <ul class="list-group">
          <li class="list-group-item active" aria-current="true">
            An active item
          </li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A fourth item</li>
          <li class="list-group-item">And a fifth one</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
