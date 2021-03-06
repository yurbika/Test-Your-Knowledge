const ReactQuestions = [
  {
    question: "What is React?",
    answer:
      "React is an open-source frontend JavaScript library which is used for building user interfaces especially for single page applications. It is used for handling view layer for web and mobile apps. "
  },
  {
    question: "What are the major features of React?",
    answer: `- It uses VirtualDOM instead RealDOM considering that RealDOM manipulations are expensive.

- Supports server-side rendering.

- Follows Unidirectional data flow or data binding.

- Uses reusable/composable UI components to develop the view.`
  },
  {
    question: "What is JSX?",
    answer:
      "JSX is a XML-like syntax extension to ECMAScript (the acronym stands for JavaScript XML). Basically it just provides syntactic sugar for the React.createElement() function, giving us expressiveness of JavaScript along with HTML like template syntax."
  },
  {
    question: "What is the difference between Element and Component?",
    answer: `-An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components.
      
- Whereas a component can be declared in several different ways. It can be a class with a render() method. Alternatively, in simple cases, it can be defined as a function.`
  },
  {
    question: "How to create components in React?",
    answer: `- Function Components
- Class Components`
  },
  {
    question: "When to use a Class Component over a Function Component?",
    answer:
      "If the component needs state or lifecycle methods then use class component otherwise use function component. However, from React 16.8 with the addition of Hooks, you could use state , lifecycle methods and other features that were only available in class component right in your function component."
  },
  {
    question: "What are Pure Components?",
    answer:
      "React.PureComponent is exactly the same as React.Component except that it handles the shouldComponentUpdate() method for you. When props or state changes, PureComponent will do a shallow comparison on both props and state. Component on the other hand won't compare current props and state to next out of the box. Thus, the component will re-render by default whenever shouldComponentUpdate is called."
  },
  {
    question: "What is state in React?",
    answer:
      "State of a component is an object that holds some information that may change over the lifetime of the component. We should always try to make our state as simple as possible and minimize the number of stateful components."
  },
  {
    question: "What are props in React?",
    answer:
      "Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation using a naming convention similar to HTML-tag attributes."
  },
  {
    question: "What is the difference between state and props?",
    answer:
      "Both props and state are plain JavaScript objects. While both of them hold information that influences the output of render, they are different in their functionality with respect to component. Props get passed to the component similar to function parameters whereas state is managed within the component similar to variables declared within a function."
  },
  {
    question: "Why should we not update the state directly?",
    answer:
      "If you try to update state directly then it won't re-render the component."
  },
  {
    question:
      "What is the purpose of callback function as an argument of setState()?",
    answer:
      "The callback function is invoked when setState finished and the component gets rendered. Since setState() is asynchronous the callback function is used for any post action. (It is recommended to use lifecycle method rather than this callback function.)"
  },
  {
    question: "What is the difference between HTML and React event handling?",
    answer: `-event naming - HTML = lowercase/React = camelCase

- preventDefault() must be called explicitly in React. In HTML you can return false.

- In HTML, you need to invoke the function by appending () Whereas in React you should not append () with the function name.`
  },
  {
    question: "How to bind methods or event handlers in JSX callbacks?",
    answer: `- Binding in constructor
      
- Public class flieds syntax

-Arrow functions in callbacks`
  },
  {
    question: "What are synthetic events in React?",
    answer:
      "SyntheticEvent is a cross-browser wrapper around the browser's native event. It's API is same as the browser's native event, including stopPropagation() and preventDefault(), except the events work identically across all browsers."
  },
  {
    question: "What is inline conditional expressions?",
    answer:
      "You can use either if statements or ternary expressions which are available from JS to conditionally render expressions. Apart from these approaches, you can also embed any expressions in JSX by wrapping them in curly braces and then followed by JS logical operator &&."
  },
  {
    question:
      "What are 'key' props and what is the benefit of using them in arrays of elements?",
    answer:
      "A key is a special string attribute you should include when creating arrays of elements. Keys help React identify which items have changed, are added, or are removed."
  },
  {
    question: "What is the use of refs?",
    answer:
      "The ref is used to return a reference to the element. They should be avoided in most cases, however, they can be useful when you need a direct access to the DOM element or an instance of a component."
  },
  {
    question: "What are forward refs?",
    answer:
      "Ref forwarding is a feature that lets some components take a ref they receive, and pass it further down to a child."
  },
  {
    question:
      "Which is preferred option with in callback refs and findDOMNode()?",
    answer: `findDOMNode:
    class MyComponent extends Component {
      componentDidMount() {
        findDOMNode(this).scrollIntoView()
      }
    
      render() {
        return <div />
      }
    }
    
callback:
    class MyComponent extends Component {
      constructor(props){
        super(props);
        this.node = createRef();
      }
      componentDidMount() {
        this.node.current.scrollIntoView();
      }
    
      render() {
        return <div ref={this.node} />
      }
    }`
  },
  {
    question: "What is Virtual DOM?",
    answer:
      "The Virtual DOM (VDOM) is an in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the 'real' DOM. It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called reconciliation."
  },
  {
    question: "How Virtual DOM works?",
    answer: `- Whenever anything may have changed, the entire UI will be re-rendered in a Virtual DOM representation.

- The difference between the previous Virtual DOM representation and the new one will be calculated.

- The real DOM will be updated with what has actually changed. This is very much like applying a patch.`
  },
  {
    question: "What is the difference between Shadow DOM and Virtual DOM?",
    answer:
      "The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The Virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs."
  },
  {
    question: "What are controlled components?",
    answer:
      "A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component 'controls' it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a 'dumb component'."
  },
  {
    question: "What are uncontrolled components?",
    answer:
      "The Uncontrolled Components are the ones that store their own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML."
  },
  {
    question: "What is the difference between createElement and cloneElement?",
    answer:
      "JSX elements will be transpiled to React.createElement() functions to create React elements which are going to be used for the object representation of UI. Whereas cloneElement is used to clone an element and pass it new props."
  },
  {
    question: "What is Lifting State Up in React?",
    answer:
      "When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. "
  },
  {
    question: "What are the different phases of component lifecycle?",
    answer: `- Mounting: The component is ready to mount in the browser DOM. This phase covers initialization from constructor(), getDerivedStateFromProps(), render(), and componentDidMount() lifecycle methods.

  - Updating: In this phase, the component get updated in two ways, sending the new props and updating the state either from setState() or forceUpdate(). This phase covers getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate() and componentDidUpdate() lifecycle methods.

  - Unmounting: In this last phase, the component is not needed and get unmounted from the browser DOM. This phase includes componentWillUnmount() lifecycle method.`
  },
  {
    question: "What are Higher-Order Components?",
    answer:
      "A higher-order component (HOC) is a function that takes a component and returns a new component."
  },
  {
    question: "What is children prop?",
    answer:
      "Children is a prop (this.prop.children) that allow you to pass components as data to other components, just like any other prop you use. Component tree put between component's opening and closing tag will be passed to that component as children prop."
  },
  {
    question:
      "What is the purpose of using super constructor with props argument?",
    answer:
      "A child class constructor cannot make use of this reference until super() method has been called. The same applies for ES6 sub-classes as well. The main reason of passing props parameter to super() call is to access this.props in your child constructors."
  },
  {
    question: "What is reconciliation?",
    answer:
      "When a component's props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM. This process is called reconciliation."
  },
  {
    question: "How to set state with a dynamic key name?",
    answer: `handleInputChange(event) {
      this.setState({ [event.target.id]: event.target.value })
    }`
  },
  {
    question: "Why React uses className over class attribute?",
    answer:
      "class is a keyword in JavaScript, and JSX is an extension of JavaScript. That's the principal reason why React uses className instead of class. Pass a string as the className prop."
  },
  {
    question: "What are fragments?",
    answer:
      "It's common pattern in React which is used for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.",
    example: `render() {
        return (
          <React.Fragment>
            <ChildA />
            <ChildB />
            <ChildC />
          </React.Fragment>
        )
      }`
  },
  {
    question: "Why fragments are better than container divs?",
    answer: `- Fragments are a bit faster and use less memory by not creating an extra DOM node. This only has a real benefit on very large and deep trees.

- Some CSS mechanisms like Flexbox and CSS Grid have a special parent-child relationships, and adding divs in the middle makes it hard to keep the desired layout.

- The DOM Inspector is less cluttered.`
  },
  {
    question: "What are portals in React?",
    answer:
      "Portal is a recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component."
  },
  {
    question: "What are stateless components?",
    answer:
      "If the behaviour is independent of its state then it can be a stateless component."
  },
  {
    question: "What are stateful components?",
    answer:
      "If the behaviour of a component is dependent on the state of the component then it can be termed as stateful component."
  },
  {
    question: "What are the advantages of React?",
    answer: `- Increases the application's performance with Virtual DOM.

- JSX makes code easy to read and write.

- It renders both on client and server side (SSR).

- Easy to integrate with frameworks (Angular, Backbone) since it is only a view library.

- Easy to write unit and integration tests with tools such as Jest.`
  },
  {
    question: "What are the limitations of React?",
    answer: `- React is just a view library, not a full framework.

- Integrating React into a traditional MVC framework requires some additional configuration.

- The code complexity increases with inline templating and JSX.

- Too many smaller components leading to over engineering or boilerplate.`
  },
  {
    question: "What are error boundaries in React v16?",
    answer:
      "Error boundaries are components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed."
  },
  {
    question: "How error boundaries handled in React v15?",
    answer:
      "React v15 provided very basic support for error boundaries using unstable_handleError method. It has been renamed to componentDidCatch in React v16."
  }
];

export default ReactQuestions;
