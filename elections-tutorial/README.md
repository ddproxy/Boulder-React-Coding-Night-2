## Start
* `npx create-react-app elections`
* `cd elections`
* `atom .` (or open in your text editor of choice)
* `npm start`
* Wait for browser (should see react stuff)
* Open src/App.js
* Remove `import logo from '. /logo.svg';`
* Remove everything inside the `<div>`
* Add a heading to the `<div>`: `<h1>US Politics</h1>`


## Make your first component: DivisionList
* Add a <DivisionList /> component inside the `<div>`
* Import the <DivisionList /> component: `import DivisionList from './DivisionList;`
* Create a new file called DivisionList.js
* Import React: `import React, { Component } from 'react';`
* Export the component: `export default DivisionList;`
* Add a DivisionList class in between the import and export: `class DivisionList extends Component {}`
* Inside the curly braces, add a render method: render() {}
* Inside those curly braces, return a `<div>`: `return (<div></div>)`
* Give the `<div>` a className of container: `<div className="container">`
* Make 2 <p> elements with some dummy text (ie. Division 1 & Division 2)
* Check the browser (should see p’s)

## Make an API call and set state
* Go to App.js
* Add a state object above the render method: `state = {};`
* Add 3 properties to state: divisions, offices, and officials. Set divisions to an empty object, and the others to empty arrays.
* Under state, add a componentDidMount method: `componentDidMount() {}`
* In the code block of that method, add a fetch: `fetch()`
* Pass in the URL for the representatives API call as a string: `'https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyBhVKdgDSbR2LSxSIG2V9ZSuCvh4NtPiUY&address=colorado'`
* Chaining onto fetch(), handle the response with .then() and convert the streamed response to JSON: `.then(stream => stream.json())`
* Chaining again, add another .then() and inside that, pass the res as an argument and console log it: `.then(res => console.log(res));`
* Check the browser console
* Set state. Replace the console.log() with: `this.setState({})`
* Add the 3 properties from state inside the setState object: divisions, offices, & officials
* Set those properties to the values on the response object of the same name, ie: `divisions: res.divisions,`
* Check your work. Add another argument inside this.setState(), after the object. Make it a function in which you console.log() this.state.
* Check the browser console. You should now see the updated state

## Display state in the UI
* Pass divisions into the <DivisionList> as props: `<DivisionList divisions={this.state.divisions} />`
* Go to DivisionList.js
* Remove the dummy <p> elements
* Assign divisions to a variable inside the render() method: `const divisions = this.props.divisions;`
* Now, destructure that: `const { divisions } = this.props;`
* Underneath the <h3>, put divisions inside { }
* Check the browser. What’s the problem?
* Replace divisions with `Object.keys(divisions)` to make an array of keys for the object
* Chain on a .map(), with a => function that takes a key and returns a <p> with the key inside
* The full line should look like this: `{Object.keys(divisions).map(key => <p>{key}</p>)}`
* Check the browser. What’s going on?

## Create a functional component
* Change the <p> to a new component: `<DivisionListItem />`
* Add division as a prop, and pass in divisions[key]: `division={divisions[key]}`
* Above the DivisionList, create the new functional component: `const DivisionListItem = () => {}`
* In the block of the function, return a <h3> wrapped in ( ): `return (<p></p>)`
* Add props as an argument. How can we simplify this? Destructure: `({ division })`
* Inside the <p>, add { } and division.name
* Check the browser. Check the console. What’s wrong?
* Add a key prop to DivisionListItem. Pass in key: `key={key}`
* Handle a user selection. Create a new method above the render(): `handleSelectDivision = () => {}`
* Give it divisionKey as an argument
* Log divisionKey inside the method’s block
* Below, add a key prop on DivisionListItem and pass in key: `divisionKey={key}`
* Add the newly created method as a prop as well: `handleSelectDivision={this.handleSelectDivision}`
* Above, inside DivisionListItem, add divisionKey and handleSelectDivision to the destructured props
* Add onClick to the <p> and pass in an => function: `<p onClick={() => }>`
* In the => function, return an invocation of handleSelectDivision, passing in divisionKey: `() => handleSelectDivision(divisionKey)`
* Check the browser. Click on a division. Check the console.

## Display new data on selection
* Add state to the DivisionList: `state = {}`
* Give state a property: selectedDivisionKey, and set it to null
* Now update state with divisionKey: `this.setState({ selectedDivisionKey: divisionKey });`
* Down in the DivisionList, wrap the DivisionListItem in a `<div>`
* After DivisionListItem, add curly braces, and in that a ternary comparing the key on state with the key in the current function: `this.state.selectedDivisionKey === key`
* If true, make a dummy element: `? <p>selected</p>`
* If false, set to null: `: null`
* Check the browser. Does selecting work? Does unselecting work?
* Inside handleSelectDivision, declare `const nextKey`
* Set it to a ternary comparing state with the passed argument: `this.state.selectedDivisionKey === divisionKey`
* If true, set it to null: `? Null`
* If false, set it to the passed argument: `: divisionKey`
* Change the value in setState() from divisionKey to nextKey
* Try unselecting in the browser. Now check the console. What’s wrong?
* Move key={key} from DivisionListItem to the enclosing div

## Make a new component to display on selection
* Change the dummy <p> to a component: `<OfficeList />`
* In app.js, pass the offices to <DivisionList />: `offices={this.state.offices}`
* Back in DivisionList.js, add offices to the destructured props
* Pass an offices prop to <OfficeList />: `offices={offices}`
* Pass officeIndices from the division: `officeIndices={divisions[key].officeIndices}`
* Import OfficeList above: `import OfficeList from './OfficeList';`
* Create the file: OfficeList.js
* Import React: `import React, { Component } from 'react';`
* Create the class: `class OfficeList extends Component {}`
* Export it: `export default OfficeList;`
* Add a render function and return an empty `<div>`: `render() {return (<div></div>)}`
* Inside the render() method, destructure props: `const { offices, officeIndices } = this.props;`
* Underneath that, declare: `const officesForDivision`
* Use the officeIndices to filter out the offices for the current division: `offices.filter((office, i) => officeIndices.includes(i));`
* `console.log(officesForDivision);`
* Check the browser console. Click on a division.
* Inside the `<div>`, map over officesForDivision, passing office: `{officesForDivision.map((office) => )}`
* Return a new component: `<OfficeListItem />`
* Pass key as a prop: `key={office.name}`
* Pass in office as a prop: `office={office}`
* Pass officialIndices as a prop: `officialIndices={office.officialIndices}`
* Build that functional component above: `const OfficeListItem = () => {return (<p></p>)}`
* Destructure office and officialIndices from props: `({ office, officialIndices })`
* Add the office name inside the <h4>: `{office.name}`
* Check the browser. Check the console.
* Add an event handler to the functional component: `<p onClick={() => handleSelectOffice(officialIndices)}>`
* Add handleSelectOffice to the destructured props
* Pass handleSelectOffice as a prop: `handleSelectOffice={this.handleSelectOffice}`
* Create the handler method above render(): `handleSelectOffice = () => {}`
* Pass in the officialIndices
* console.log it
* Check the browser. Click on an office. Check the console.

## Pass it down, then back up! (methods down, variables up)
* In app.js, add a selectedOfficials property on state as an empty array: `selectedOfficials: [],`
* Create a new method above render(): `handleSelectOffice = () => {}`
* Pass in officialIndices
* Declare a variable: `const selectedOfficials`
* Filter the selected officials: ` = this.state.officials.filter((official, i) => officialIndices.includes(i));`
* Update the selectedOfficials on state: `this.setState({ selectedOfficials });`
* Pass the new method into <DivisionList /> as a prop: `handleSelectOffice={this.handleSelectOffice}`
* In DivisionList.js, add the handleSelectOffice method to the destructured props
* Pass it to <OfficeList /> as a prop: `handleSelectOffice={handleSelectOffice}`
* In OfficeList.js, add it to the props
* Delete the local method
* Remove the this from this.handleSelectOffice (near the bottom)
* Back in app.js, in the render(), add an <OfficialList />
* Pass in selectedOfficials as a prop: `selectedOfficials={this.state.selectedOfficials}`
* Import it: `import OfficialList from './OfficialList';`

## Create the final component
* Create OfficialList.js
* Create a class component called OfficialList (exactly how you started the last 2)
* Add `{ selectedOfficials }` as a destructured prop
* Inside the `<div>`, `.map()` over the `selectedOfficials`
* Return a new component: `<OfficialListItem />`
* Give it a key equal to the `official.name`
* Pass in `official` as a prop
* Create the functional component (just like the others)
* Pass in the `{ official }`
* Add a `<p>` inside the `<div>`, with it `{official.name}` inside
* Check the browser. Try selecting an office.
* Add more <p>’s with official.party and official.phones inside
* Add an <img> with a source photo: `src={official.photoUrl}`
* Give it a size: `style={{ maxHeight: '300px' }}`
* And an alt: `alt={official.name}`
* Map over offical.urls: `{official.urls.map(url => }`
* Return an <a> element with the href and value both equal to the url: `<a href={url}>{url}</a>`
* Check the browser.

## Add some styling
* In index.css
* Set the margin and padding to 20px
* Add an app class: `.app {}`
* Add flexbox: `display: flex;`
* And add some spacing: `justify-content: space-around;`
* Give first child divs a width of 500: `.App div { width: 500px; }`
* Make an OfficialList class with flexbox
* Add spacing: `justify-content: space-between;`
* Inside OfficialList.js, give the main component a className: `className="OfficialList"`
* Finally, give our h3’s and h4’s a hand cursor: `h3, h4 { cursor: pointer; }`
* Check the browser. That’s it!

Other possibilities
* Add a default photo (a silhouette or something)
* Add a field for specifying address instead of hard coding
* Add color for party (maybe a border around the official)
* Make the official’s url open in a new tab
* More styling
* What else??
