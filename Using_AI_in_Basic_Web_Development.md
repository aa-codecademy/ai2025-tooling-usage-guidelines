# Teaching Basic Web Development (HTML) with AI-Assisted Question Flow

This guide helps instructors demonstrate how to integrate AI tools like GitHub Copilot into teaching HTML.
In this training, the focus is not for trainers to go deep into **HTML and CSS syntax**, nor for students to memorize every tag or style. Instead, the main goal is to:  

- Explain the **fundamental concepts**: what a web page is, how the client-server model works, the role of HTML.  
- Introduce the **basic tools**: Visual Studio Code, browser developer tools, and GitHub Copilot.  
- Help students build a **mental picture and intuition** of how a web page is created.  
- Encourage a **way of thinking**, rather than simply memorizing code.  

Trainers will act more as **guides** than “syntax textbooks.”  
They will demonstrate:  
- how to ask the right questions (prompts),  
- how to interpret AI-generated results,  
- and how to pay attention to structure, accessibility, and usability. 
    
The idea is to show students that they don’t need to memorize tags mechanically, but instead learn how to **ask questions, get meaningful answers, and build understanding step by step**.

---

## Helping Students Learn Syntax by Using Copilot Iteratively

For the frontend courses, we plan to use **VS Code with GitHub Copilot running on the Claude Sonnet 3.5 model**, giving students hands-on experience with modern AI-powered development tools.  

The following examples show how, through **iterative questioning**, we can guide GitHub Copilot to help us explore the syntax of HTML.  
In this way, Copilot takes over part of the **mechanical coding demonstrations**, while trainers and students can focus more on the **concepts, structure, and reasoning** behind the code.  

In the first three questions, we guide Copilot toward **more specific prompts**, directing it to explain the exact set of HTML tags and concepts we want students to understand, rather than generating vague or overly broad answers.

Here are some prompt examples where students will iteratively get familiar with HTML syntax.
Along the way, we will also provide additional questions and explanations to help them understand how to properly use AI tools for deeper learning and writing code.

### 1. What is HTML and why is it used in web development? Explain for beginners.

**Sample Answer:**  

> HTML (HyperText Markup Language) is the standard language used to create and structure web pages. Think of it as the skeleton or foundation of every website you visit.  
>
> **Why is HTML important?**  
>
> **Structure and Organization**  
> - Provides the basic structure of web pages  
> - Organizes content into headings, paragraphs, lists, etc.  
> - Creates the layout of a webpage  
>
> **Content Display**  
> Tells browsers how to show:  
> - Text  
> - Images  
> - Links  
> - Forms  
> - Tables  
>
> **Universal Standard**  
> - Works in all web browsers  
> - Foundation for other web technologies (CSS, JavaScript)  
> - Required for any website  
>
> **Basic Example:**  
> ```html
> <!DOCTYPE html>
> <html>
> <head>
>     <title>My First Webpage</title>
> </head>
> <body>
>     <h1>Welcome!</h1>
>     <p>This is a simple webpage built with HTML.</p>
> </body>
> </html>
> ```  
>
> Think of HTML like building blocks — each tag is a block that serves a specific purpose in constructing your webpage. Even complex websites start with this basic HTML foundation.

This way the prompt is asked **in a clean beginner-friendly format**.

---

### 2. What are HTML tags and how do they work? Give a few common examples.

**Sample Answer:**  

> HTML tags are elements used to structure and format content on web pages. They are enclosed in angle brackets `< >` and usually come in pairs: an **opening tag** and a **closing tag** (with a forward slash).  
>
> **How Tags Work:**  
> - Opening tag: `<tagname>`  
> - Closing tag: `</tagname>`  
> - Content goes between these tags  
> - Some tags are **self-closing**: `<tagname />`  
>
> **Common Examples:**  
> ```html
> <!-- Basic document structure -->
> <html>
>     <head>
>         <title>Page Title</title>
>     </head>
>     <body>
>         <!-- Content tags -->
>         <h1>Main Heading</h1>
>         <p>This is a paragraph of text.</p>
>         
>         <!-- Link tag -->
>         <a href="https://example.com">Click here</a>
>         
>         <!-- Image tag (self-closing) -->
>         <img src="image.jpg" alt="Description">
>         
>         <!-- List tags -->
>         <ul>
>             <li>Unordered list item</li>
>             <li>Another bullet point</li>
>         </ul>
>         
>         <!-- Table tags -->
>         <table>
>             <tr>
>                 <td>Table cell</td>
>             </tr>
>         </table>
>     </body>
> </html>
> ```  
>
> **Each tag serves a specific purpose:**  
> - `<h1>` to `<h6>`: Headings  
> - `<p>`: Paragraphs  
> - `<a>`: Links  
> - `<img>`: Images  
> - `<ul>`, `<ol>`, `<li>`: Lists  
> - `<table>`, `<tr>`, `<td>`: Tables  
> - `<div>`: Generic container  
> - `<span>`: Inline container  
>
> **Tags can also have attributes** that provide additional information or modify their behavior:  
> - `class="value"`  
> - `id="unique-id"`  
> - `src="file-path"`  
> - `href="url"`


This way the prompt is **iterative**. We are navigating Copilot to also **provide common examples**.

---

### 3. Can you list the most important HTML tags a beginner should know to build a simple web page?

**Sample Answer:** 

> Here are the most essential HTML tags for beginners, with descriptions and examples:
>
> ## Document Structure Tags
> ```html
> <!DOCTYPE html>  <!-- Declares HTML5 document -->
> <html>           <!-- Root element -->
> <head>           <!-- Contains metadata -->
> <title>          <!-- Page title -->
> <body>           <!-- Main content -->
> ```
>
> ## Text Content Tags
> ```html
> <h1>Heading 1</h1>            <!-- Largest heading -->
> <h2>Heading 2</h2>            <!-- Second level heading -->
> <p>A paragraph of text</p>    <!-- Paragraph -->
> <br>                          <!-- Line break -->
> ```
>
> ## List Tags
> ```html
> <ul>                    <!-- Unordered (bullet) list -->
>   <li>List item</li>    <!-- List item -->
> </ul>
>
> <ol>                    <!-- Ordered (numbered) list -->
>   <li>List item</li>    <!-- List item -->
> </ol>
> ```
>
> ## Links and Images
> ```html
> <a href="url">Link text</a>               <!-- Hyperlink -->
> <img src="image.jpg" alt="Description">   <!-- Image -->
> ```
>
> ## Basic Form Tags
> ```html
> <form>                                    <!-- Form container -->
>   <input type="text" name="username">     <!-- Text input -->
>   <input type="password" name="password"> <!-- Password input -->
>   <input type="submit" value="Submit">    <!-- Submit button -->
> </form>
> ```
>
> ## Container Tags
> ```html
> <div>   <!-- Generic block container -->
> <span>  <!-- Generic inline container -->
> ```
>
> ## Creating a Basic Webpage
>
> 1. Start with the document structure
> 2. Add content using text tags
> 3. Include links and images
> 4. Use containers to organize content
> 5. Add forms if needed for user input
>
> ### Tips:
>
> - Always close your tags
> - Use proper nesting
> - Include required attributes
> - Follow semantic structure


This way we **narrowed the prompt**, asking firstly for the most important HTML tags.

---

### 4. Can you create a small HTML page using the most important beginner HTML tags?

**Sample Answer:**  

> Here's a simple HTML page using the most important beginner tags:
>
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <title>My First Web Page</title>
> </head>
> <body>
>     <!-- Main heading -->
>     <h1>Welcome to My Web Page</h1>
>
>     <!-- About section -->
>     <section>
>         <h2>About Me</h2>
>         <p>Hello! I am learning HTML. This is my first web page.</p>
>     </section>
>
>     <!-- Links section -->
>     <section>
>         <h2>My Favorite Websites</h2>
>         <ul>
>             <li><a href="https://www.example.com">Example Website</a></li>
>             <li><a href="https://www.wikipedia.org">Wikipedia</a></li>
>         </ul>
>     </section>
>
>     <!-- Image section -->
>     <section>
>         <h2>My Profile Picture</h2>
>         <img src="profile.jpg" alt="My profile picture">
>     </section>
>
>     <!-- Contact form -->
>     <section>
>         <h2>Contact Me</h2>
>         <form>
>             <label for="name">Name:</label>
>             <input type="text" id="name" name="name"><br><br>
>             
>             <label for="email">Email:</label>
>             <input type="email" id="email" name="email"><br><br>
>             
>             <button type="submit">Send</button>
>         </form>
>     </section>
>
>     <!-- Footer -->
>     <footer>
>         <p>Thanks for visiting!</p>
>     </footer>
> </body>
> </html>
> ```

We are asking for example, while specifiying that only most important HTML tags should be used.

**Note:**
Notice that we **avoid ambiguity** by explicitly pointing the tags rather than saying “these tags” or being vague.

**Now we navigate students to analyse the provided answers and ask further questions.**

### 5. Can you explain why we put `<!DOCTYPE html>` at the beginning of an HTML web page? *(Follow-up question)*

**Sample Answer:**  

> The `<!DOCTYPE html>` declaration serves several important purposes:
>
> ## Document Type Declaration
>
> - It tells the browser that this is an HTML5 document  
> - It must be the very first line in your HTML file  
> - It is not an HTML tag, but a special instruction
>
> ## Browser Rendering Mode
>
> - Without DOCTYPE, browsers may enter "quirks mode"  
> - Quirks mode tries to handle old, non-standard HTML code  
> - This can cause inconsistent display across different browsers  
> - With DOCTYPE, browsers use "standards mode" for consistent rendering
>
> ## HTML Version
>
> - `<!DOCTYPE html>` specifically indicates HTML5  
> - Older versions of HTML had longer, more complex DOCTYPE declarations  
> - HTML5 simplified this to a single, clean declaration
>
> ## Example of Correct Usage
>
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <title>My Page</title>
> </head>
> <body>
>     <h1>Hello World</h1>
> </body>
> </html>
> ```
>
> ## Best Practice
>
> Always include the DOCTYPE declaration as the first line of your HTML documents to ensure proper rendering and standards compliance.
---

### 6. Can you explain if there are some rules for nesting the tags in HTML? *(Follow-up question)*

**Sample Answer:** 

> Yes, there are important rules for nesting HTML tags. Here are the key principles:
>
> ## Proper Nesting Order
>
> - Tags must be closed in the reverse order they were opened  
> - Think of it like nesting boxes – the last one opened is the first one closed
>
> ```html
> <!-- Correct nesting -->
> <div>
>   <p>This is <strong>correct</strong> nesting.</p>
> </div>
>
> <!-- Incorrect nesting -->
> <div>
>   <p>This is <strong>incorrect</p></strong>
> </div>
> ```
>
> ## Parent-Child Relationships
>
> - Some elements can only exist inside specific parent elements
>
> ```html
> <!-- Correct -->
> <ul>
>   <li>List item</li>
> </ul>
>
> <!-- Incorrect -->
> <li>Orphaned list item</li>
> ```
>
> ## Block vs Inline Elements
>
> - Block elements should not be placed inside inline elements
>
> ```html
> <!-- Incorrect -->
> <span>
>   <div>This is not allowed</div>
> </span>
>
> <!-- Correct -->
> <div>
>   <span>This is allowed</span>
> </div>
> ```
>
> ## Special Restrictions
>
> - Certain elements have specific rules about what they can contain
>
> ```html
> <!-- Incorrect -->
> <p>
>   <div>Cannot put block elements in paragraphs</div>
> </p>
>
> <!-- Correct -->
> <div>
>   <p>Paragraphs can go in divs</p>
> </div>
> ```
>
> Following these nesting rules ensures your HTML is valid and renders consistently across browsers.

---

### 7. Can you explain me the difference between div and section? *(Follow-up question)*

**Sample answer** 

>Let me explain the key differences between <div> and <section> elements:
>
> ## `<div>` (Division)
>
> - Generic container with no semantic meaning  
> - Used for grouping elements for styling purposes  
> - When you just need a container but the content has no specific meaning  
> - Like a plain box – useful but doesn't tell you what's inside
>
> ```html
> <div class="wrapper">
>     <p>Some content that just needs to be grouped together</p>
>     <p>Usually for layout or styling purposes</p>
> </div>
> ```
>
> ## `<section>` (Section)
>
> - Semantic element that represents a thematic grouping of content  
> - Should have a heading (`<h1>`–`<h6>`) as a child  
> - Used when the content is related and forms a distinct section  
> - Like a labeled box – tells you what type of content is inside
>
> ```html
> <section>
>     <h2>About Us</h2>
>     <p>This is a thematic section about our company</p>
>     <p>All this content is related to the "About Us" theme</p>
> </section>
> ```
>
> ## When to Use Which
>
> - Use `<section>` when the content is thematically related and makes sense as a standalone piece  
> - Use `<div>` when you just need a container for styling or layout purposes  
> - `<section>` improves accessibility and SEO because it provides semantic meaning  
> - When in doubt about whether content forms a thematic group, use `<div>`  
>
> This distinction is important for creating semantic, accessible HTML code.
---

**Note:** <br>  
Follow-up questions help guide Copilot to **more specific explanations**.

## Example of Ineffective Prompt

Before or after showing students how to ask **effective, detailed** questions, it’s useful to  show what an **ineffective prompt** looks like.  
This helps them understand why some AI answers are overwhelming or unhelpful, and why clear, focused prompting matters.

❌ **Suboptimal Prompt:**  
“Can you write me all HTML tags with explanation.”  

- This is too broad.  
- Copilot is not able to handle such a broad response. 

✅ **Better Prompt:**  
“List the most important HTML tags a beginner should know to build a basic web page.  
Include a short description and example for each.”  

This keeps the answer scoped, useful, and relevant to their learning stage.

---

## Instructor Guidance & Conclusion

Using this flow, students learn that **AI can guide them step by step**:

- One question leads naturally to the next.  
- They don’t need to memorize every detail, but they need to understand the purpose of each element.  

The instructor’s role is crucial:  
- to model **good prompting**,  
- to encourage **critical thinking**,  
- to help students **decide if the AI’s answer is correct and useful**,  
- to teach students **which questions to ask**, and  
- to open broader topics for discussion, for example, guiding students toward **semantic tags**.

---

### Guiding Students to Semantic Tags

After students are familiar with basic tags like `<div>` and `<p>`, the instructor can guide them to **semantic tags** by asking:

> "We have containers like `<div>` and headings like `<h1>` — how can we **better describe the structure of a page** for both humans and browsers?"

This naturally introduces semantic tags:

- `<header>` — for introductory content or navigation  
- `<footer>` — for page footer content  
- `<section>` — for grouping related content  
- `<article>` — for self-contained content pieces  

**Why semantic tags matter:**  
- They **improve readability** for humans and accessibility tools (like screen readers).  
- They help **search engines understand page structure**.  
- They **clarify relationships between content sections**, which is essential for maintainable, well-structured web pages.  
- Even with AI generating code, students need to **understand why a semantic tag is used** to make correct design decisions.  

The instructor is key here because **AI can provide the tags, but only the trainer can explain their purpose, importance, and proper use in context**.  

**Note on AI-generated structure:**  <br>

When using Claude Sonnet 3.5, even a “simple page” prompt may include `<section>`, `<article>`, or other semantic elements automatically. This is a great opportunity to discuss:

- Why **AI sometimes gives more than expected**: it anticipates semantic organization but students need to understand **why** these tags are used.  
- How to **evaluate and decide** which tags are necessary for their design and accessibility.

This shows students that while AI can generate well-structured HTML, the **instructor’s guidance is crucial** for interpreting and teaching the purpose of semantic elements.

---

## Wrapping Up

In other words, the trainer is not only there to check answers,  
but also to guide students in recognizing **good vs. bad prompts**,  
and to build their ability to frame meaningful questions that move their learning forward.  

AI provides the **answers**, but instructors provide the **context, reasoning, and judgment**.  

The goal is not just to *“get code”*, but to develop the mindset of a **complete web developer**—  
someone who can use AI effectively, understand core concepts,  
and write **efficient, safe, and sustainable code**.