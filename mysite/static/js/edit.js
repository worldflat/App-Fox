
let element;
let view;
let view_data;
let element_data;
let element_data_list;
let view_data_list = [];
let now_mouse_x;
let now_mouse_y;
let move_judge = false;

window.addEventListener('load', ()=> {
// Plat Form widget
  let add_widget = document.getElementById('add_widget');
  let widget_list = document.getElementById('widget_list');
  let list_close = document.getElementById("list_close");
  let add_view = document.getElementById('add_view');
  let test_view = document.getElementById('view');
  let view_id_input  = document.getElementById("view_id");
  let view_name_input  = document.getElementById("view_name");
  let view_color_input  = document.getElementById("view_color");
  let widget_background_input = document.getElementById("background_color");
  let widget_textcolor_input = document.getElementById("text_color");
  let view_set = document.getElementById("view_set");
  let widget_set = document.getElementById("widget_set")
  let widget_id_input = document.getElementById("element_id");
  let widget_text_input = document.getElementById("element_text");
  let widget_width_input = document.getElementById("widget_width");
  let widget_height_input = document.getElementById("widget_height");
  let widget_top_input = document.getElementById("widget_top");
  let widget_left_input = document.getElementById("widget_left");
// App Widget
  let add_button = document.getElementById('add_button');


  widget_list.style.display = "none";

  function open_widget() {
    widget_list.style.display = "block";
    EventListener()
  }
  function close_widget() {
    widget_list.style.display = "none";
    EventListener()
  }
  function create_view() {
    let id = hash_code(Math.random.toString(32).substring(2))
    view = document.createElement("div")
    view.setAttribute("id", id)
    view.setAttribute("class", "dev_view")
    view.setAttribute("data-id", "")
    test_view.appendChild(view)
    view_data = {"id": id, "name": "", "color": "#fff", "private-id": "", "element":[]}
    view_data_list.push(view_data)
    EventListener()
  }
  function select_element() {
    element = document.getElementsByClassName('base_button');
    for (var i = 0; i< element.length;i++){
      element[i].style.border = "1px solid #007bff";
    }
    element = document.getElementById(this.id)
    element.style.border = "2px solid #007bff"
    element_data_list = view_data["element"]
    for (var i = 0; i < element_data_list.length;i++){
      if(element_data_list[i]["id"] == this.id) {
        element_data = element_data_list[i]
        widget_id_input.value = element_data['private-id']
        widget_text_input.value = element_data["text"]
        widget_width_input.value = element_data["width"] * 400/100;
        widget_height_input.value = element_data["height"] * 860/100;
        widget_left_input.value = element_data["x"] * 400 / 100;
        widget_top_input.value = element_data["y"] * 860 /100;
      }
    }
    EventListener()
  }

  function selected_view() {
    view = document.getElementsByClassName("dev_view")
    for (var i = 0; i < view.length; i++){
      view[i].style.border = "1px solid #007bff"
    }
    view = document.getElementById(this.id)
    view.style.border = "2px solid #007bff"
    for (var i = 0; i < view_data_list.length; i++) {
      if (view_data_list[i]["id"] == this.id) {
        view_data = view_data_list[i];
        view_id_input.value = view_data['private-id']
        view_name_input.value = view_data['name']
        view_color_input.value = view_data['color']
      }
    }
    EventListener()
  }



  function change_view_data(type) {
    if (type == "id") {
      view_data["private-id"] = document.getElementById('view_id').value;
    } else if (type == "name") {
      view_data["name"] = document.getElementById('view_name').value;
    } else if (type == "color") {
      view_data["color"] = document.getElementById('view_color').value;
      document.getElementById(view_data["id"]).style.backgroundColor = view_data["color"];
    }
    EventListener()
  }

  function change_element_data(type) {
    for (var i = 0; i < element_data_list.length;i++){
      if (element.id == element_data_list[i]["id"]){
        element_data = element_data_list[i]
      }
    }
    if (type == "id") {
      element_data["text"] = widget_text_input.value;
      element.innerText = element_data["id"]
    }else if (type == "text"){
      element_data["text"] = widget_text_input.value;
      element.innerText = element_data["text"]
    } else if (type == "top") {
      element_data["x"] = widget_left_input.value;
      element.style.left = element_data["x"] + "px";
      element_data["x"] = element_data["x"]/400 *100;
    }else if (type == "left") {
      element_data["y"] = widget_top_input.value;
      element.style.top = element_data["y"] + "px"
      element_data["y"] = element_data["y"] /860 *100;
    }else if (type == "width") {
      element_data["width"] = widget_width_input.value;
      element.style.width = element_data["width"] + "px"
      element_data["width"] = element_data["width"]/400 *100;
    } else if (type == "height") {
      element_data["height"] = widget_height_input.value;
      element.style.height = element_data["height"] + "px"
      element_data["height"] = element_data["height"]/860 * 100;
    } else if (type == "background") {
      element_data["background"] = widget_background_input.value;
      element.style.backgroundColor = element_data["background"];
    }
    else if (type == "text_color") {
      element_data["text_color"] = widget_textcolor_input.value;
      element.style.color = element_data["text_color"];
    }
  }

  function EventListener() {
    add_widget.addEventListener('click', open_widget, false);
    list_close.addEventListener('click', close_widget, false);
    add_view.addEventListener('click', create_view, false);
    add_button.addEventListener('click', add_element, false);
    view.addEventListener('click', selected_view, false);
    element.addEventListener("click", select_element, false);
    element.addEventListener("mouseover", drag_over, false);
    element.addEventListener('mouseup', drag_end, false);
    element.addEventListener('mousedown', (event) => {
      drag_start(event.pageX, event.pageY);
    })
    element.addEventListener("mousemove", (event) => {
      element_move(event.pageX, event.pageY)
    })
    view_id_input.addEventListener('change', () => {
      change_view_data("id");
    });
    view_name_input.addEventListener('change', () => {
      change_view_data("name");
    });
    view_color_input.addEventListener('change', () => {
      change_view_data("color");
    })
    widget_id_input.addEventListener('change', () => {
      change_element_data("id");
    });
    widget_text_input.addEventListener('change', () => {
      change_element_data("text");
    })
    widget_width_input.addEventListener('change', () => {
      change_element_data("width")
    })
    widget_height_input.addEventListener('change', () => {
      change_element_data("height")
    })
    widget_top_input.addEventListener('change', () => {
      change_element_data("top");
    })
    widget_left_input.addEventListener('change', () => {
      change_element_data("left");
    })
    widget_background_input.addEventListener("change", () => {
      change_element_data("background");
    })
    widget_textcolor_input.addEventListener("change", () => {
      change_element_data("text_color");
    })
  }
  EventListener()
})
