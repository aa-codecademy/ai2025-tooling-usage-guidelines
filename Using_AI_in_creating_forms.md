# AI-Assisted HTML Form (getting boilerplate code): Instructor Guide

In this guide, we will demonstrate how to use Copilot to generate **boilerplate HTML form code**, while emphasizing that instructors must **guide and navigate the AI** with precise prompts. The goal is not only to produce code but also to help students **evaluate the results**, understand them, and recognize the importance of **asking detailed, specific questions** to get meaningful and correct output.

## Requirement

We want to create a **user registration form** with the following fields:

- **Username**   
- **Password** 
- **Comment**  
- **Language selection** 
- **Service options** 
- **Device selection** 
- **File upload**  
- **Hidden serial number**  
- **Submit and reset buttons**

**Goal for instructors:**  
- Demonstrate to students how **AI can generate forms** based on prompts.  
- Teach students how to **ask precise questions** and **evaluate AI output**.  
- Show that even when AI provides the code, **understanding structure, types, accessibility, and semantic use is critical**.

### Example: Minimal AI-Generated Form

Using a minimal prompt for the form, we can demonstrate how Copilot produces a **vague and incomplete answer**, highlighting the need for more detailed guidance.

**Prompt:**  
> "Make a simple form for user registration"

**Sample answer:**  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Registration</title>
</head>
<body>
    <form action="/register" method="post">
        <fieldset>
            <legend>User Registration</legend>

            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required><br><br>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required><br><br>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br><br>

            <input type="submit" value="Register">
            <input type="reset" value="Reset">
        </fieldset>
    </form>
</body>
</html>
```

#### Analysis / Why this is not ideal

##### Missing fields
- No comment section
- No language selection
- No checkboxes for service options
- No select list for devices
- No file upload
- No hidden serial number

##### Minimal structure
- Claude Sonnet automatically added `<fieldset>` and `<legend>` to group related fields. This shows AI anticipates some semantic structure even in a "simple" prompt.
- Only basic labels are present; no hints, instructions

##### Accessibility concerns
- Limited accessibility features 

#### Teaching implications
- Demonstrates that **vague prompts lead to incomplete forms**
- Highlights the importance of **prompt specificity**: detailed instructions yield more complete, structured, and usable forms
- Serves as a starting point for instructors to **discuss how to expand and improve the form**, adding semantic grouping, proper labels, and additional inputs

### Example AI-Generated Form: Better Prompt Output

With a more detailed prompt, we show how Copilot can generate a **more complete and structured form**, though it still may need human review and refinement. This demonstrates that Copilot can handle the task, but it still **requires careful guidance and detailed prompts** from the instructor to produce fully accurate and usable forms.

**Prompt:**  
> Create an HTML user registration form including:  
> - Username  
> - Password  
> - Comment  
> - Language selection  
> - Services  
> - Device selection (multi-select)  
> - File upload  
> - Hidden serial number  
> - Submit and reset buttons"

**Sample answer:**  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Registration</title>
</head>
<body>
    <form action="/register" method="post" enctype="multipart/form-data">
        <fieldset>
            <legend>User Registration</legend>

            <div>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
            </div>

            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
            </div>

            <div>
                <label for="comment">Comment:</label>
                <textarea id="comment" name="comment" rows="4" cols="40"></textarea>
            </div>

            <div>
                <label for="language">Language:</label>
                <select id="language" name="language">
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                </select>
            </div>

            <fieldset>
                <legend>Services</legend>
                <div>
                    <input type="checkbox" id="newsletter" name="services" value="newsletter">
                    <label for="newsletter">Newsletter</label>
                    
                    <input type="checkbox" id="support" name="services" value="support">
                    <label for="support">Technical Support</label>
                    
                    <input type="checkbox" id="updates" name="services" value="updates">
                    <label for="updates">Product Updates</label>
                </div>
            </fieldset>

            <div>
                <label for="devices">Devices (hold Ctrl/Cmd to select multiple):</label>
                <select id="devices" name="devices" multiple size="4">
                    <option value="desktop">Desktop</option>
                    <option value="laptop">Laptop</option>
                    <option value="tablet">Tablet</option>
                    <option value="mobile">Mobile</option>
                </select>
            </div>

            <div>
                <label for="file">Upload File:</label>
                <input type="file" id="file" name="file">
            </div>

            <input type="hidden" name="serial" value="ABC123XYZ">

            <div>
                <input type="submit" value="Register">
                <input type="reset" value="Reset">
            </div>
        </fieldset>
    </form>
</body>
</html>
```

#### Analysis / Why this is better than minimal output

##### All required fields are included
- Username, password, comment, language, services, devices, file upload, hidden serial number, submit/reset buttons

##### Improved structure
- Fields grouped using `<fieldset>` and `<legend>`
- Labels present for nearly all inputs

##### Accessibility
- `for` attributes on labels link to input IDs, improving screen reader compatibility

##### Areas for potential improvement
- Could further improve semantic structure (e.g., using `<section>` for different form parts)
- Could add instructions or placeholders for better UX
- Could specify if creator wants select, radio buttons or checkboxes
- Could ensure all accessibility attributes are present (ARIA labels, error messages)

#### Teaching points
- Students see that even a “better” prompt produces a form that mostly works but still needs human review
- Emphasizes the trainer’s role in explaining why structure, accessibility, and usability matter
- Shows that AI can generate functional code, but instructors guide how to make it production-ready and understandable

### Example: Excellent Prompt Output

With a fully detailed and structured prompt, Copilot produces an **excellent, production-ready form**, demonstrating how precise guidance leads to complete, usable, and accessible HTML output.

**Prompt:**  
> Create a complete HTML user registration form with the following requirements:  
> - Username (text input)  
> - Password (password input)  
> - Comment (textarea)  
> - Language selection (radio buttons)  
> - Services (checkboxes)  
> - Device selection (multi-select dropdown)  
> - File upload  
> - Hidden serial number  
> - Submit and reset buttons  
> Include proper `<fieldset>` and `<legend>` to group related inputs, use `<section>` or semantic grouping for different parts of the form, provide labels with `for` attributes, include placeholders and hints for better UX, and ensure accessibility with ARIA attributes. Write clean, well-indented, and production-ready HTML code."

**Sample answer:**  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Registration Form</title>
</head>
<body>
    <form action="/register" method="post" enctype="multipart/form-data" aria-labelledby="form-title">
        <fieldset>
            <legend id="form-title">User Registration</legend>

            <section aria-label="Account Information">
                <div>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required 
                           placeholder="Enter your username" aria-required="true">
                    <small id="username-hint">Choose a unique username (minimum 3 characters)</small>
                </div>

                <div>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required 
                           placeholder="Enter your password" aria-required="true"
                           aria-describedby="password-hint">
                    <small id="password-hint">Use at least 8 characters with numbers and symbols</small>
                </div>
            </section>

            <section aria-label="Additional Information">
                <div>
                    <label for="comment">Comment:</label>
                    <textarea id="comment" name="comment" rows="4" cols="40" 
                             placeholder="Tell us about yourself"
                             aria-describedby="comment-hint"></textarea>
                    <small id="comment-hint">Optional: Share anything you'd like us to know</small>
                </div>
            </section>

            <fieldset>
                <legend>Language Selection</legend>
                <div role="radiogroup" aria-required="true">
                    <input type="radio" id="lang-en" name="language" value="en" required>
                    <label for="lang-en">English</label>
                    
                    <input type="radio" id="lang-es" name="language" value="es">
                    <label for="lang-es">Spanish</label>
                    
                    <input type="radio" id="lang-fr" name="language" value="fr">
                    <label for="lang-fr">French</label>
                    
                    <input type="radio" id="lang-de" name="language" value="de">
                    <label for="lang-de">German</label>
                </div>
            </fieldset>

            <fieldset>
                <legend>Services</legend>
                <div role="group" aria-describedby="services-hint">
                    <input type="checkbox" id="newsletter" name="services" value="newsletter">
                    <label for="newsletter">Newsletter</label>
                    
                    <input type="checkbox" id="support" name="services" value="support">
                    <label for="support">Technical Support</label>
                    
                    <input type="checkbox" id="updates" name="services" value="updates">
                    <label for="updates">Product Updates</label>
                </div>
                <small id="services-hint">Select all services you're interested in</small>
            </fieldset>

            <section aria-label="Device Selection">
                <div>
                    <label for="devices">Devices:</label>
                    <select id="devices" name="devices" multiple size="4" 
                            aria-describedby="devices-hint">
                        <option value="desktop">Desktop</option>
                        <option value="laptop">Laptop</option>
                        <option value="tablet">Tablet</option>
                        <option value="mobile">Mobile</option>
                    </select>
                    <small id="devices-hint">Hold Ctrl/Cmd to select multiple devices</small>
                </div>
            </section>

            <section aria-label="File Upload">
                <div>
                    <label for="file">Profile Picture:</label>
                    <input type="file" id="file" name="file" accept="image/*"
                           aria-describedby="file-hint">
                    <small id="file-hint">Optional: Upload a profile picture (max 5MB)</small>
                </div>
            </section>

            <input type="hidden" name="serial" value="ABC123XYZ">

            <div class="form-controls">
                <input type="submit" value="Register" aria-label="Submit registration">
                <input type="reset" value="Reset" aria-label="Reset form">
            </div>
        </fieldset>
    </form>
</body>
</html>
```

#### Analysis / Why this is excellent

- **All required fields are included and functional**  
- **Semantic grouping:** `<section>` and `<fieldset>` with `<legend>` are used to organize related inputs  
- **Accessibility:** Labels are linked via `for` attributes; placeholders and hints improve usability  
- **User guidance:** `<small>` hints provide instructions for fields like password, language, devices, and file upload  
- **Production-ready:** Clean indentation, well-structured HTML, easy to read and maintain  
- **Teaching value:** Demonstrates to students how a detailed prompt produces a fully usable, structured, and accessible form; emphasizes why prompt specificity and semantic structure matter

**Note:** <br>
After this form generation a follow up question should follow for further explanation. This way we interact and discuss the solution, not just accept it. For example, students can ask about different tags, such as `<section>`,`<fieldset>`, `<legend>`. They can even ask for more guidance on accessibility etc. <br>
*Teachers can also show students that they can ask for simpler answers, for instance they can guide Copilot to exclude part of the tags, or create a form for beginner's knowledge using only a set of tags.*

## Conclusion

AI can generate HTML code quickly, but students need guidance to use it effectively.  

The instructor’s role is crucial to:  
- Show **which questions to ask** in the first place  
- Model **good vs. bad prompting techniques**  
- Explain **why structure, accessibility, and usability matter** 
- Navigate students to think about **UX** and **UI** 
- Encourage **critical thinking** to evaluate AI-generated answers  

Even when AI provides code, students must understand **what each element does**, why it is used, and how to decide if the solution is correct and applicable.  

The goal is not just to “get code” but to develop the mindset of a **complete web developer**:  
- Someone who can **use AI effectively**,  
- Understand **core concepts**, and  
- Write **efficient, safe, and sustainable code**.
