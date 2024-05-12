import "../App.css";

import React from "react";
import Box from "@mui/material/Box";

import TLDR from "../components/blog/TLDR";
import BlogHeading from "../components/blog/BlogHeading";
import BlogTitle from "../components/blog/BlogTitle";
import BlogPara from "../components/blog/BlogPara";
import BlogExample from "../components/blog/BlogExample";
import BlogDate from "../components/blog/BlogDate";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


const codeBlock1 = 
`var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};

girl ();`;

const codeBlock2 =
`var myVariable;`

const codeBlock3 =
`var myVariable = 10;`

const codeBlock4 =
`var x = 21;
var girl = function () {
    var x;   //The variable is declared (x=‘undefined’)
    console.log(x);
    x = 20;   //The variable is initialised (x=20)
};

girl ();`

function Blogs() {
  return (
      <Box
      sx={{ 
        width:  { xs: "80%", md: "50%" }, 
        margin: "auto", 
        textAlign: "justify", 
        mb: "100px"
      }}
      >
          <BlogDate>25/11/2023</BlogDate>
          <BlogTitle>Javascript Hoisting</BlogTitle>
          <TLDR>
            In JavaScript, variable declarations (but not initialisations) are moved to the top of their relevant scope at run time. If the variable is used after it has been declared but before it has been initialised, it will be ‘undefined’.
          </TLDR>
          <BlogHeading>Introduction: </BlogHeading>
          <BlogPara>
            I stumbled upon a JavaScript puzzle (big shout-out to Caitlin!) that turned out trickier than expected. The puzzle asked what the following code would output:
          </BlogPara>
          <SyntaxHighlighter language="javascript" style={materialDark}>
            {codeBlock1}
          </SyntaxHighlighter>
          <BlogPara>
            My first thought was 21, but to my surprise the answer was ‘undefined’. Let's find out why. This unexpected output is due to three concepts, Hoisting, Declarations/Initialisations and Function Scope. 
          </BlogPara>

          <BlogHeading>Declarations and Initialisations:</BlogHeading>
          <BlogPara>
            First we must understand the difference between declarations and initlisations. When you declare a variable, you're basically telling JavaScript it exists and where it is located but not assigning it a value, the variable is therefore left as ‘undefined’. Like so:
          </BlogPara>
          <SyntaxHighlighter language="javascript" style={materialDark}>
            {codeBlock2}
          </SyntaxHighlighter>
          <BlogPara>
            Initialising a variable is the process of assigning a value to a declared variable. This can be done in conjunction with a variable declaration, like so:
          </BlogPara>
          <SyntaxHighlighter language="javascript" style={materialDark}>
            {codeBlock3}
          </SyntaxHighlighter>

          <BlogHeading>Function Scope:</BlogHeading>
          <BlogPara>
            The scope of a variable is the context in which it can be ‘seen’ or referenced. There are three types of scope in JavaScript; Global Scope, Function Scope  and Block Scope. For this scenario we need only focus on Global Scope and Function Scope. 
          </BlogPara>
          <BlogPara>
            Any variable declared outside of a function or curly braces is automatically placed in Global Scope. Any variables in the Global Scope of a document can be accessed from anywhere in that document, including within functions and curly braces.
          </BlogPara>
          <BlogPara>
            Any variable that is declared inside a function has Function Scope and can only be accessed from within that function. Each function has its own scope, and cannot access another function’s scope.
          </BlogPara>
          <BlogPara>
            Because of scope, you can have more than one variable with the same name within a document as long as they do not have the same scope. In our example we have two variables named ‘x’, one in Global Scope and the other in Function Scope. When accessing variables from within a function, any variables that are declared within the Function Scope take precedence over variables that are declared outside of the function. In our example, the ‘x’ variable declared within the ‘girl’ function takes precedence over the ‘x’ variable declared outside of the function.
          </BlogPara>

          <BlogHeading>Hoisting:</BlogHeading>
          <BlogPara>
            In JavaScript, variable declarations (but not initializations) are "hoisted" or moved to the top of their containing scope at run time but the initialisation is left in place. Therefore, within the ‘girl’ function, the variable ‘x’ is declared before console.log is called but initialised after console.log is called. Meaning at the time console.log is called, the variable is ‘undefined’. Conceptually, this process looks like the following:
          </BlogPara>
          <SyntaxHighlighter language="javascript" style={materialDark}>
            {codeBlock4}
          </SyntaxHighlighter>

          <BlogHeading>Conclusion:</BlogHeading>
          <BlogPara>
            So, to sum it up, the unexpected 'undefined' output in the JavaScript puzzle boils down to three key things: hoisting, variable declarations/initializations, and function scope. Hoisting moves variable declarations to the top of the scope during runtime, leaving initializations where they are. This means you might stumble upon variables that are declared but not yet initialized, resulting in 'undefined' when accessed.
          </BlogPara>
      </Box>
  );
}

export default Blogs;
