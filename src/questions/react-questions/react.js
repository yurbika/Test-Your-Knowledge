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
      "Fiber is the new reconciliation engine or reimplementation of core algorithm in React v16. The goal of React Fiber is to increase its suitability for areas like animation, layout, gestures, ability to pause, abort, or reuse work and assign priority to different types of updates; and new concurrency primitives."
  }
];

export default ReactQuestions;
