// Through below code we can create a react element like html element.

// const container = React.createElement('h3', {className: 'main-container'}, "I'm a container")

// const root = ReactDOM.createRoot(document.querySelector('#root'));

// root.render(container)

//================================================================================================================

const container = React.createElement(
  "h2",
  { className: "container", id: "container" },
  [
    React.createElement("section", { key: 1 }, [
      React.createElement(
        "p",
        { key: 1 },
        "I am a nested element under div child of section"
      ),

      React.createElement("img", {
        key: 2,
        style: {
          width: 220,
          backgroundColor: "red",
          color: "black",
          padding: 12,
          borderRadius: 9,
        },
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      }),
    ]),

    React.createElement("section", { key: 2 }, [
      React.createElement("form", { key: 1 }, [
        React.createElement("div", { className: "input-group", key: 1 }, [
          React.createElement(
            "label",
            { key: 1, htmlFor: "username" },
            "Username"
          ),
          React.createElement("input", {
            key: 2,
            id: "username",
            placeholder: "username...",
          }),
        ]),

        React.createElement("div", { className: "input-group", key: 2 }, [
          React.createElement(
            "label",
            { key: 1, htmlFor: "password" },
            "Password"
          ),
          React.createElement("input", {
            key: 2,
            id: "password",
            placeholder: "password...",
          }),
        ]),
      ]),
    ]),
  ]
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(container);
