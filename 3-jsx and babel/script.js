const container = (
  <div className="container" id="container">
    <section>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        soluta et necessitatibus sit aspernatur laboriosam doloribus, placeat,
        veniam illum deserunt id sed consequuntur.
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt=""
        style={{
          width: 244,
          padding: 12,
          borderRadius: 9,
          backgroundColor: "teal",
        }}
      />
    </section>
    <section>
      <form>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input id="username" placeholder="Enter username..." />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="text" id="password" placeholder="Enter password..." />
        </div>
      </form>
    </section>
  </div>
);

console.log("Container: ", container);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(container);
