

function add_element() {
  let element_type = document.getElementById(this.id).dataset.type;
  let id = hash_code((Math.random.toString(32).substring(2)))
  let view = document.getElementById(view_data["id"]);
  element = document.createElement(element_type);
  element.setAttribute('id', id);
  element.setAttribute('class', 'base_button');
  element.innerText = "Button"
  view.appendChild(element);
  widget_list.style.display = "none";
  element_data = {"id": id, "element-type": element_type, "private-id": "", "text":"", "x":0, "y":0, "height":0, "width":0};
  view_data["element"].push(element_data);

  return 0;
}


function drag_start(x, y) {
  element = document.getElementById(element_data["id"])
  console.log(element_data)
  element_data["x"] = parseInt(element.offsetLeft);
  element_data["y"] = parseInt(element.offsetTop);
  now_mouse_x = x;
  now_mouse_y = y;
  move_judge = true;
}

function drag_end() {
  if (move_judge == true){
    move_judge = false;
    element_data["x"] = (element_data["x"]/400 *100)
    element_data["y"] = (element_data["y"]/860 * 100)
  }else {
    return;
  }
}
function drag_over() {
  if (move_judge == true) {
    move_judge = false;
    return;
  }else {
    return;
  }
}


function element_move(x, y) {
  if (!move_judge) {
    return;
  }
  else {
    let move_x = element_data["x"]+x - now_mouse_x;
    let move_y = element_data["y"]+y - now_mouse_y;
    console.log(move_x)
    console.log(move_y)
    element.style.left = move_x + "px";
    element.style.top = move_y + "px"

  }
}
