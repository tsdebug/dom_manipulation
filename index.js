        let menu = document.getElementById("menu");
        //console.log(menu.textContent); // doesn't follow style and displays all the tesxt contents of the mentioned id
        
        console.log(menu.innerText); // follows style and displays only the visible text contents
        
        // menu.innerHTML = "<h1>Hello!</h1>";
        // console.log(menu.textContent);

        //after() : insert one or more nodes after the element
        //syntax - menu.after(node1, node2) or menu.after(str1, str2)

        //append() : add new element to a parent element, can add mutliple elements unlike appendChile()
        //syntax - parentNode.append(newNodes); the element will be added in the end of the list of child

        //prepend() : add new element to a parent element
        //syntax - parentNode.prepend(newNodes); the new npde will be added as the first child of the parent node

        //insertAdjacentHTML() - positions : ,beforebegin,beforeend, afterbegin, afterend 
        menu.insertAdjacentHTML("beforeend", "<li>Contact</li>");

        //replaceChild()
        //syntax - parentNode.replaceChild(newChild, oldChild);

        // cloneNode() - to create a clone of a node
        let newNode1 = menu.cloneNode();
        console.log(newNode1); // only the node

        let newNode2 = menu.cloneNode(true);
        console.log(newNode2); // the node + decendence

        //removeChild()
        //syntax - parentNode.removeChild(childNode);
        menu.removeChild(menu.lastElementChild);

        //insertBefore() - insert a new node before an existing node as a child node of a parent node
        //syntax - parentNode.insertBefore(newNode, existingNode);
        //menu.insertBefore(newNode, menu.firstElementChild)

        //Attribute methods

        let inputBox = document.getElementById("username");
        console.log(inputBox.attributes);

        //getAttribute() : gives the mentioned attribute's value
        console.log(inputBox.getAttribute("type"));

        //setAttribute() : to set a new attribute
        //syntax - inputBox.setAttribute("name", "value");
        inputBox.setAttribute("class", "user");
        console.log(inputBox);

        //hasAttribute() : to find if the required attribute is available or not, gives boolean value as result
        console.log(inputBox.hasAttribute("class"));

        //removeAttribute() : to remove existing attribute
        // inputBox.removeAttribute("placeholder");
        // console.log(inputBox);

        //Manipulating Element's style
        let inputBox2 = document.getElementById("password");

        //to get the style attributes
        console.log(inputBox2.style);
        console.log(inputBox2.style.backgroundColor);

        //add style attrbutes
        inputBox2.style.padding = "10px";
        console.log(inputBox2);

        //cssText() : add style but it overwrites the existing style, can add multiple style at once
        //inputBox2.style.cssText = "width:200px; height:100px";
        //console.log(inputBox2);

        // use (concatenate) += sign to add the cssText as well as the existing style
        inputBox2.style.cssText += "width:200px";
        console.log(inputBox2);

        //getComputedStyle() :  to get the style writen in the external css
        //syntax - window.getComputedStyle(element, pseudoElement);
        //console.log(window.getComputedStyle(inputBox).fontSize);

        // className property - returns a list of classes separated by space
        let title = document.getElementById("title");

        // title.className = "new"; // overwrites the existing class
        // title.className += " new"; // concatenates the added and existing classes
        // console.log(title);

        // classList property - returns the collection of the css classes, also can be used to add and remove class

        // add class
        // title.classList.add("new", "new2");
        // console.log(title);

        //remove class
        // title.classList.remove("message");
        // console.log(title);

        //replace class
        // title.classList.replace("message", "msg");
        // console.log(title);

        //contains class - find class, returns boolean value
        console.log(title.classList.contains("message"));

        //toggle - if a class is available then it will remove it and if it doesn't exist it will add it
        title.classList.toggle("here");
        console.log(title);

        // JavaScript Events - An event is an action that occurs when we move cursor, click, scroll, etc
        
        // Event bubbling - event starts at the most specific element and flows towards the least specific element

        // Event capturing - event starts at the least specific element and flows towards the most specific element

        // An event handler is a piece of code that will be executed when the event occurs. Event handlers are also known as event listeners.

        // HTML Event Handler Attributes
        
        function displayMsg(){
            console.log("Button clicked from fn");
        }

        // When the event occurs, the web browser passes and Event object to the event handler

        // "this" keyword inside the event handler refers to target element

        let btn = document.getElementById("btn");

        // btn.onclick = null;  // to remove the 'onclick' event handler

        // btn.onclick = function(){
        //     console.log("Button clicked !");
        // }

        // addEventListener() - register an event handler
        // syntax - addEventListener(event, function, useCapture);    the useCapture arguement is optional as it is a boolean value

        function display(){
            console.log("Button Clicked using EventListener !");
        }
        btn.addEventListener('click', display);

        // removeEventListener() - remove an event handler
        // btn.removeEventListener('click', display);

        // mousemove - event fires repeatedly when you move the mouse cursor around the element
        // mousedown - event fires when you press the mouse button on the element
        // mouseup - event fires when you release the mouse button on the element
        // mouseover - event fires when the cursor moves from outside to inside the boundaries of the element
        // mouseout - event fired when the cursor is over an element and then moves to another element

        // keydown -  event fires when you press a key on the keyboard & fires repeatedly while you're holding down the key
        // keyup -  event fires when you release a key on the keyboard
        // keypress -  event fires when you press a character on the keyboard like a, b, c.. It fires repeatedly while you hold down the key on the keyboard

        // scroll -  event fires when you scroll a document or an element