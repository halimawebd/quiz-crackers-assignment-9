import React from "react";

const Blog = () => {
  return (
    <div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is the purpose of react router?
        </div>
        <div className="collapse-content">
          <p>
          The primary goal of Router in React JS is to supply the browser with an
          asynchronous URL that corresponds to the data that will show on the web page.
          It is mainly used to create single-page web apps since it retains the
          application's regular structure and functionality.

          The Router in React JS is primarily used to create Single Page Web Apps. In the
           application, React Router is utilized to define various routes. When a user
            enters a URL into your browser and the URL route equals one of several 
            'pathways' as in the router folder, the user is sent to that route.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How does context api works?
        </div>
        <div className="collapse-content">
          <p>
          One of the best things about React is that we have a lot of different ways to 
          solve specific problems. We have a few different form libraries, a bunch of CSS libraries and, for the most important part of React, we have a lot of different libraries specific to state data problems in React.

          Identifying when to use a certain library in our project is a skill that we develop 
          through experience. Especially in React, where we have so many libraries to 
          choose from, sometimes we might end up installing and using libraries that we 
          don’t need.

          Context API is a React API that can solve a lot of problems that modern
           applications face related to state management and how they’re passing state 
           to their components.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is useRef in react?
        </div>
        <div className="collapse-content">
          <p>
            Essentially, useRef is like a “box” that can hold a mutable value in
            its .current property. You might be familiar with refs primarily as
            a way to access the DOM. If you pass a ref object to React with
            React will set its .current property to the corresponding DOM node
            whenever that node changes. However, useRef is useful for more than
            the ref attribute. Its handy for keeping any mutable value around
            similar to how youd use instance fields in classes. This works
            because useRef creates a plain JavaScript object. The only
            difference between useRef and creating a object yourself is that
            useRef will give you the same ref object on every render. Keep in
            mind that useRef doesnt notify you when its content changes.
            Mutating the .current property doesnt cause a re-render. If you want
            to run some code when React attaches or detaches a ref to a DOM
            node, you may want to use a callback ref instead.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
