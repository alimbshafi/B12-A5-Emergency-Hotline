# B12-A5-Emergency-Hotline
Programming Hero Assignment 05


# Emergency Service Directory

Government Emergency Services at Your Fingertip – A Project by Government of the People’s Republic of Bangladesh

## Features

- Heart count feature
- Call alert showing service name and number
- Coin feature
- Call History feature
- Number Copy paste Feature
- Call history exact time feature


## Q/A

#### Question 1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

💬 The difference is how they play in HTML DOM.
each method have their own unique selection process.

getElementById: targets a single element by its unique id attribute. And returns one element as object.

getElementsByClassName: targets multiple elements by their class attribute, and returns multiple element as object. But its works dynamically upon putting the same classes on different tags.

querySelector: targets the first element by their css selectors like tag names, IDs, classes, attributes. And it returns one element as object.

querySelectorAll: it work like querySelector. But this time, it targets all elements by their css selectors, and returns a nodelist.  

#### Question 2: How do you create and insert a new element into the DOM?

💬 First we need to declare and initiate a variable with `document.createElement()`. Inside the parenthesis we need to write the element name/tag wrapped with '/". We need another variable initialization with `getElementById()` method to target the parent element. And then use `appendChild()` method with the parent element to add child element. 

Example,
`const newPara = document.createElement('p');`
`const parentElement = document.getElementById('story');`
`parentElement.appendChild(newDiv);`

#### Question 3: What is Event Bubbling and how does it work?

💬 It's better for me to explain using a HTML skeleton.

    <div>
        <span>
            <button>Call</button>
        </span>
    </div>
    
If users click on the button, the click event happens in button element. But the event doesn't stop there, it also happens on <span> and <div> area. And goes via all the parents/ancestors in the DOM tree until it reaches the document's root.

#### Question 4: What is Event Delegation in JavaScript? Why is it useful?

💬 from my understanding, when there's multiple events (like click, mouse hover, scroll) required in some elements, we tend to target all the elements using appropriate methods and add an event listener to them. And loop them in function to work. In that case Event Bubbling happens, the click goes until it reaches the root. 

So the event requires event delegation. which means initiate a parent element which has multiple child elements that requires multiple events. Add event listener to the parent element and set condition it to match with the child element.

So now the event will bubble up to the parent element, will not reach to the root.

Even if more new child elements adds to the parent it doesn't require more code to write as it shares the same parent.

#### Question 5: What is the difference between preventDefault() and stopPropagation() methods?

💬 Every event have some default behavior in browser like form auto submit or reload the page. `preventDefault()` can stop that from happening.

`stopPropagation()` method stops occurring event bubbling right there. 
<div> <button></button><div>
if both of the element have event listener then clicking on button will also trigger the div element. to stop that from happening the stopPropagation method works.


