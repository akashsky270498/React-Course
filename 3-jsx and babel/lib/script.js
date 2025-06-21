const container = /*#__PURE__*/React.createElement("div", {
  className: "container",
  id: "container"
}, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate soluta et necessitatibus sit aspernatur laboriosam doloribus, placeat, veniam illum deserunt id sed consequuntur."), /*#__PURE__*/React.createElement("img", {
  src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  alt: "",
  style: {
    width: 244,
    padding: 12,
    borderRadius: 9,
    backgroundColor: "teal"
  }
})), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
  className: "input-group"
}, /*#__PURE__*/React.createElement("label", {
  htmlFor: "username"
}, "Username"), /*#__PURE__*/React.createElement("input", {
  id: "username",
  placeholder: "Enter username..."
})), /*#__PURE__*/React.createElement("div", {
  className: "input-group"
}, /*#__PURE__*/React.createElement("label", {
  htmlFor: "password"
}, "Password"), /*#__PURE__*/React.createElement("input", {
  type: "text",
  id: "password",
  placeholder: "Enter password..."
})))));
console.log("Container: ", container);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(container);
//# sourceMappingURL=script.js.map