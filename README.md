# Indio Form Builder
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

#### Installation
* git clone https://github.com/nzoLogic/IndioChallenge.git
* run **npm install --save** in the root directory
* **npm run**

### Overview

Building this project using React, I took advantage of React's one-way data flow structure to store and update the *Questions* data kept in the browsers *localStorage* object based on the current state of each *Question* component. 

### Technology used
* React
* Webpack
* semantic-ui-react
* semantic-ui-css
* Lodash
* Babel
* localStorage
##### Data model:
<pre>
QuestionNode = ({
  question='', 
  type='text', 
  conditions=null, 
  isSub= false, 
  subQ=[]
}
</pre>

### Component Hierarchical Structure
There are 3 primary views, Create, Preview, and Export. Since Preview and Export rely on the data from Create, I decided to use the **App** component to store an array of parent questions in its state and update localStorage.questions based on the condition of its state. **App** passes this data down to either **QuestionForm** or **Preview** depending on which tab is clicked. **Export** simply calls a function that stringify's the saved data. **QuestionForm** is passed bound helper functions as props that are for deleting, updating, and adding QuestionNodes, and **Preview** maintains its own state by using the questions passed down by its parent. 

##### Visual reference:
<pre>
App
  |
  * QuestionForm
    |
    * Question
        |
        * subquestions (which are Question componets)
  |
  * Preview
    |
    * PreviewQuestion
  |
  * Export

</pre>

### Proudest moments

The way I solved updating deeply nested subquestions was by attaching a *path* property to each Question and nested Question which referenced it's location in the the tree and using update functions that were bound to the App component. Initially, I struggled getting it to work, but after researching Lodash, it became relatively simple. 

##### Known Bugs:
1. Radio Input on Preview view
 * There's bugs in Semantic-UI's components causing the *checked* property to return false if there's another radio input available

#### Refactoring Thoughts:
1. Get rid of Semantic UI's react components because
 * Poor documentation
 * Form components are buggy and missing certain event properties
2. Make the Export text area box the size of it's parent container
3. Beautify the rendered JSON in Export to be more readable
4. Clean up the src/ directory by putting files in sub-directories relative to their views and functionality.