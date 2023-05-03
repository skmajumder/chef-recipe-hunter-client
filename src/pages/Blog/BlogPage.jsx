/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import CodeImg from "../../../public/img/code.png";

const BlogPage = () => {
  const pageTitle = "Blog";
  return (
    <>
      <Breadcrumb pageTitle={pageTitle} />
      <section className="all-chefs mt-10">
        <div className="container px-6 py-14">
          <div className="grid grid-cols-1 justify-start items-center gap-y-7">
            <article className="question space-y-4">
              <h3 className="text-xl font-semibold mb-3">
                1. Tell us the differences between uncontrolled and controlled
                components.
              </h3>
              <p>
                In React, there are two main types of components: that are
                controlled and uncontrolled. The main difference between
                controlled and uncontrolled components in React is how they
                handle and change form data. Uncontrolled components use the DOM
                to handle the data, while controlled components use{" "}
                <strong>useState()</strong> and handle the data themselves.
              </p>

              <p>
                <strong>Uncontrolled</strong> components are ones in which the
                DOM, not the React component, handles the form data. This means
                that the DOM manages and updates the data and that refs are used
                to access the data.
              </p>

              <p>
                On the other hand, a React component handles form input in{" "}
                <strong>controlled</strong> components. Using state and props,
                the component handles and updates the form data, and any changes
                are mirrored in the way the component is rendered. Controlled
                components give you more control over the form data and can make
                it easier to handle complicated forms with many inputs and
                validations.
              </p>
            </article>
            <article className="question space-y-4">
              <h3 className="text-xl font-semibold mb-3">
                2. How to validate React props using PropTypes
              </h3>
              <p>
                Props (short for "properties") are used to send data to React
                components. PropTypes is a React built-in package that enables
                you to declare the expected data types and whether or not they
                are needed for each prop received by your component. This helps
                detect faults early on and makes debugging simpler when anything
                goes wrong.
              </p>
              <p>
                Simply define a propTypes object as a property of your component
                class or function to use PropTypes. You may declare the
                anticipated data types for each prop that your component expects
                to receive within the propTypes object. You can also use
                the.isRequired method to declare if a prop is necessary or not.
              </p>
              <p>
                Here is an example of propTypes code for a basic component that
                requires two props, name and age:
              </p>
              <img src={CodeImg} alt="" />
              <p>
                We're importing PropTypes from the prop-types library and
                creating our MyComponent function in this example. Then, as a
                property on our component, we define a propTypes object,
                specifying that name is a required string and age is a required
                number.
              </p>
              <p>
                That is the fundamental concept of using PropTypes in React. You
                may assist avoid issues and make your code more resilient and
                dependable by stating the anticipated data types and whether or
                not they are necessary for each prop that your component gets.
              </p>
            </article>
            <article className="question space-y-4">
              <h3 className="text-xl font-semibold mb-3">
                3. Tell us the difference between nodejs and express js.
              </h3>
              <p>
                Node.js is a JavaScript runtime that enables developers to
                execute JavaScript on the server. It offers a framework for
                running JavaScript code outside of a web browser. Node.js has a
                number of built-in modules and APIs that enable developers to
                create scalable, high-performance applications.
              </p>
              <p>
                Express.js, on the other hand, is a simple Node.js web
                framework. It includes capabilities and tools for developing web
                apps and APIs. Express.js is built on top of Node.js and offers
                a layer of abstraction that allows developers to construct web
                apps using Node.js more easily.
              </p>
              <p>
                In simple terms, Node.js is a runtime environment for developing
                server-side JavaScript applications, while Express.js is a
                framework for developing web apps and APIs on top of Node.js.
              </p>
            </article>
            <article className="question space-y-4">
              <h3 className="text-xl font-semibold mb-3">
                4. What is a custom hook, and why will you create a custom hook?
              </h3>
              <p>
                In React, a custom hook is a method that can be used again and
                again. It uses one or more built-in hooks to wrap and hide
                complex reasoning and state management code. Developers can use
                custom hooks to make pieces of code that can be used in multiple
                components and apps.
              </p>

              <p>Custom hooks are made for many different reasons, such as:</p>

              <p>
                <strong>Reusability:</strong> By making a custom hook, we can
                use the same piece of code in more than one part of our app.
                This makes things more consistent and cuts down on duplicate
                code.
              </p>

              <p>
                <strong>Abstraction:</strong> Custom hooks let us separate
                complicated logic into a single function, which makes it easier
                to think about and test. This also helps keep our components
                clean and more focused on the structure of how they look.
              </p>

              <p>
                Overall, custom hooks let you write code that is clear and can
                be used more than once. This makes it easier to build and manage
                complex React apps.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
