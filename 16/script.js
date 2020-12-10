window.addEventListener("DOMContentLoaded", (event) => {
  const makeRadioButton = (name, value, text) => {
    let label = document.createElement("label");
    label.style.width = "100%";
    label.style.display = "block";

    let radio = document.createElement("input");
    radio.type = "radio";
    radio.name = name;
    radio.value = value;

    label.appendChild(radio);
    label.appendChild(document.createTextNode(text));
    return label;
  };

  const makeDiv = (id, order, flex, alignSelf, height, display, alignItems) => {
    let div = document.createElement("div");
    div.setAttribute("id", id);
    div.style.order = order;
    div.style.flex = flex;
    div.style.alignSelf = alignSelf;
    div.style.height = height;
    div.style.display = display;
    div.style.alignItems = alignItems;
    return div;
  };

  const makeTextInput = (name, text) => {
    let label = document.createElement("label");
    label.style.width = "100%";
    label.style.display = "block";
    label.style.textAlign = "center";

    let input = document.createElement("input");
    input.type = "text";
    input.name = name;
    input.id = name;
    input.style.width = "100%";

    label.appendChild(document.createTextNode(text));
    label.appendChild(input);

    return label;
  };

  const handleClick = (element) => {
    element.addEventListener("click", (event) => {
      input.childNodes[1].value = element.value;
    });
  };

  let container = document.createElement("div");
  container.setAttribute("id", "container");
  container.className = "container";
  container.style.margin = "0 auto";
  container.style.display = "flex";
  container.style.flexDirection = "row";
  container.style.flexWrap = "wrap";
  container.style.justifyContent = "center";
  container.style.alignContent = "stretch";
  container.style.alignItems = "flex-start";
  container.style.maxWidth = "210px";
  document.body.appendChild(container);

  let leftDiv = makeDiv("leftDiv", "0", "1 1 auto", "auto", "60px");
  let rightDiv = makeDiv("rightDiv", "0","1 1 auto","auto","60px","flex","center");
  let bottomDiv = makeDiv("bottomDiv", "0", "1 1 100%", "auto");

  container.appendChild(leftDiv);
  container.appendChild(rightDiv);
  container.appendChild(bottomDiv);

  let fname = makeRadioButton("info", "نام", "نام");
  let lname = makeRadioButton("info", "نام خانوادگی", "نام خانوادگی");
  let age = makeRadioButton("info", "سن", "سن");

  leftDiv.appendChild(fname);
  leftDiv.appendChild(lname);
  leftDiv.appendChild(age);

  let btn = document.createElement("input");
  btn.setAttribute("value", "OK");
  btn.setAttribute("type", "button");

  rightDiv.appendChild(btn);

  let input = makeTextInput("txt", "Text");
  bottomDiv.appendChild(input);

  handleClick(fname.childNodes[0]);
  handleClick(lname.childNodes[0]);
  handleClick(age.childNodes[0]);
  handleClick(btn);
});
