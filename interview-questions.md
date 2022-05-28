# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer: This is this which is obviously this so that this can take in this with this hehehe. `this` is a really useful and fun tool that we use every single day in react! Since everything we're doing in react is class based we need a way to refer to certain data within it. Say we want to call a method we made, we would have to refer to it as `this.methodName` since react wouldn't be able to understand what our method is before it's initialized. One of the most important ways we use `this` is to get data in the state with dot notation since state is an object. It would look something like this `{this.state.name}`. 

  Researched answer: `this` is a keyword that references JavaScript elements within the scope of its use. I found out that you can use `this` in your browser console to see the global Window object. `this` is also very important for passing props and refering to them within components.



2. What is React? Why would you use it?

  Your answer: React is a JavaScript Library that is built around user interaction. We use it so we can have real time updates based on users input that are efficient and don't need to re render the entire page. Instead we have the Virtual DOM(Virtual Document Object Model) which takes nodes and updates them one at a time based on changes instead of all at once. The Virtual DOM updates the DOM directly. Even apps like facebook and instagram are made using React Native!

  Researched answer: I found out some interesting things about react, one being the Shadow DOM which some people misinterpret as being the same as the Virtual DOM. The Shadow DOM is a technology designed for scoping variables and CSS within web components in your browser. Another being React Fiber which seems to be a complete overhaul of the old React reconciler(which is how we get efficient UI updates) and it tries to promote incremental rendering of the Virtual DOM. 



3. Which lifecycle method is required in a React class component?

  Your answer: The lifecycle method that is required in a React class component is `render()`. We use render literally to render the HTML elements on our page. We usually put our return inside of the render so that we can return and render all the code that we've written. Lifecycle methods are used to update the DOM at specific times within the lifecycle. 

  Researched answer: Render is the only method that is absolutely necessary in a class component and takes the role of describing the view that will be rendered in your browser. There are however other lifecycle methods that can be used along with return such as `componentWillMount()`, `constructor()`, `componentDidMount()` for mounting, and a lot more for rendering and unmounting.



4. What is JSX? What is one syntax difference between HTML and JSX?

  Your answer: JSX is a syntax extension that is used for javascript so that we might include HTML within our JavaScript and have them work together. This is very important and is a big part of what makes React. One syntax difference off the top of my head would be the way we create containers and how JSX introduces react fragments which are just empty tags that create a unnamed container allowing us to have cleaner code.

  Researched answer: JSX allows us to produce React elements and combine JavaScript with HTML so we don't have to make multiple files and link them together. We can just do it all in one! Some other syntax differences I found were pretty cool, first JSX allows all tags to be self closing if you so choose. Making a class for an element isn't defined as the attribute class, but as className. You can also write inline styling as objects using JSX.



5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer: Yarn is a very powerful tool that makes it all possible to easily create react apps! Yarn is a package manager that bundles all the node modules and react dependencies together so that all we have to do is run the commands `$ yarn create react-app app-name`. We've been using it everyday at LEARN for our React challenges. The files that are modified in a react app when you run `$ yarn` are allll of those node modules that came with your react app are updated based on what your yarn.lock file tells it. You run the yarn command after pulling down a react app from github so that you can download the node modules and actually start your server for the app. Node modules are not pushed up to github, and if they are you mayyyy wanna check your gitignore file!

  Researched answer: Yarn was originally developed as a package manager for the JavaScript runtime environment Node.js by Meta. You don't have to use yarn as your package manager if you don't want to, the main alternative is npm and the updated version npx. 



6. STRETCH: What is an anonymous function in JavaScript?

  Your answer: An anonymous function is a function that has no name! We recently figured out in class that it can be used to stop a method in React that was passed as a prop in an onClick from automatically calling itself. I'm sure there's a lot more uses for these that can be pretty important. 

  Researched answer: I found out anonymous functions are usually not accessible after creation and can be used inside other functions. We also would use them a lot for event handlers.


## Looking Ahead: Terms for Next Week

1. Conditional rendering: Conditional rendering is pretty similar to how we use conditionals normally. The main difference is it only renders certain items based on if the condition is met

2. Object-oriented programming: Also known as OOP is a way that we code using classes and objects. We could also use function oriented programming instead.

3. Ruby: Ruby is a scripting language that happens to have a very similar syntax to python. Github is made with ruby too!

4. Ruby blocks: These are anonymous functions! They can be passed into methods and have arguments

5. Ruby hashes: Similar to an object? They house key value pairs 
