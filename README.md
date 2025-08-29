
# Answer the  questions

 ### **1)** What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll?***

**Answer**:

* **getElementById:** 

         i)Can access the ID name.
         ii)It returns only one element always.



* **getElementsByClassName:**

         i)Can access only the class name.
         ii)It returns a live collection.

* **querySelector:**

         i)Can access both the ID name and the class name.
         ii)But it has to be mentioned that the class name by using a dot (.) and the ID name using a hash (#).
         iii)It returns only the first matching element.

* **querySelectorAll:**

        i)Can access any CSS selector.
        ii)It returns a static NodeList.

---

### **2)** How do you create and insert a new element into the DOM?

**Answer**:

**Step-1:** Create a new element using createElement:
      
      Example:let newDiv = document.createElement('div');

                    
**Step-2:** Get access to the parent where I want to insert newDiv:

      Example: let parent=document.getElementById("parent-container")

**Step-3:** Add newDiv :

      Example:parent.appendChild(newDiv);

---

### **3)** What is Event Bubbling and how does it work?

**Answer**:

**Event Bubbling:** Event bubbling is the process of triggering an event on the target element first, then triggering it on the target’s parent, and then on its ancestors,In the same way, it triggers up the DOM tree until it gets to the root element.This triggering method is like a bubble rising., so it is called event bubbling.

**How Event Bubbling Works:** Suppose I have a button inside a div container with the ID parent-container. When I click the button, the event is triggered on the button first and returns the result (“button clicked”). Then the event bubbles up to the div container and triggers its event listener, returning the result (“div container clicked”).

**Example:**

        <div id="parent-container">
          <button id="child-button">Click Me</button>
        </div>
        
        <script>
        document.getElementById('child-button').addEventListener('click', ()=> {
        console.log('button clicked');
        });

        document.getElementById('parent-container').addEventListener('click', () => {
        console.log('div container clicked');
        });
        </script>

**Output:**

                    button clicked
                    div container clicked

___

### **4)** What is Event Delegation in JavaScript? Why is it useful?
**Answer**:

**Event Delegation:** Event delegation is the process of adding an event listener to a parent element instead of multiple child elements. The parent element handles events and passes the event listener to the child elements using event bubbling.

**Benefits of Event Delegation:** 
* Allows writing cleaner and shorter code.
* No need to add event listeners for newly added child elements.
* Creates fewer event listeners, saving memory.
* It is easier to add or remove elements without updating event listeners.
* Event delegation is possible because of event propagation.
___

### **5)** What is the difference between preventDefault() and stopPropagation() methods?
**Answer**:

**preventDefault():**

        i)It can cancel the browser’s default action for an event.
        ii)It does not prevent propagation of an event.
        iii)Example:Prevent form submission or link navigation

**stopPropagation():**

        i)It can prevent propagation of an event.
        ii)It does not cancel default action.
        iii)Example:Prevent parent element’s click listener