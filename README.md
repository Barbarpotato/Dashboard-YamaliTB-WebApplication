# Introduction
In this structure there are several files that need attention, namely the package.json file where in this file, there are several modules that are used to support the running of this application, for example the react-pro-sidebar, react-router-dom, react-chart-js and tailwind modules . In this file we can see all the module versions used to build this application, which is of course very helpful for the developer to develop or improve this application.

The next file is tailwind.config.js, this file is a file that is used to support the css styles provided by Tailwind, this file does not need to be changed with the aim that the use of Tailwind's inline style continues to run in coding.

# public Folder
In this folder, there are various kinds of files, namely logo, favicon, ico, index.html, etc. It is important to note that the index.html file is where all React components are built in, where all React components are in a div tag with id = root. There are several other important things such as files with the .ico extension which are useful as the main icon when opening the YamaliTB dashboard application.

# src Folder
### index.js
In this folder where the react components are stored, various content and views are in this folder. The first thing to notice in this folder is the index.js file. This file is the main React component which is rendered inside a div tag with the id root which as the author has explained in the index.html file section in the public folder.
In this main component, there are various modules used, the module that needs attention is BrowserRotuer from react-router-dom.

This module works to save the current location in the browser's address bar using clean URLs and navigate using the browser's built-in history stack. We can see the documentation of <a href="https://reactrouter.com/en/main/router-components/browser-router">https://reactrouter.com/en/main/router-components/browser-router. </a>
Then the second important module is ProSidebarProvider from react-pro-sidebar. This module is used to wrap child components that will use the sidebar later. We can see documentation of using react-pro-sidebar at <a href="https://github.com/azouaoui-med/react-pro-sidebar#readme">https://github.com/azouaoui-med/react-pro-sidebar#readme</a>
Inside the Pro Sidebar Provider tag there is another tag with the name App. App is a child component of index.js itself.

### app.js
Next we enter the App.js file which is a child component of index.js. in this file, there is the use of default nodules from react itself, such as useState and useEffect, you can visit the react documentation website at: <a href="https://reactjs.org/docs/getting-started.html">https://reactjs.org/docs/getting-started.html</a> This component serves as the login menu in the dashboard application itself. There is also a blocking feature that restrains users from accessing applications on smartphones. There is also the use of the framer module from framer motion which functions to provide animation. You can visit the framer motion documentation website at: <a href="https://www.framer.com/docs/">https://www.framer.com/docs/</a>. The logical flow of this component is that if the user enters the username and password correctly then another component, namely a component named sidebar.js will be rendered and replaces the component from App.js itself. Please note that the sidebar component must be imported to App.js so that it can work. used.

### sidebar.js
After Main.js proceed to the next component, namely the sidebar.js component contained in the Components folder. The main thing to note is the Sidebar, Menu, MenuItem, SubMenu modules from react-pro-sidebar. This module functions to direct to other components when the user selects a menu in the provided sidebar. Every time the user clicks on the desired menu, other components will be called, so we have to import the required components into this sidebar.js file, such as: Home, AddCases, AddInfo, DeleteInfo. There are also several modules to support the use of icons using the react-icon module, you can visit this link: <a href="https://react-icons.github.io/react-icons/">https://react-icons.github.io/react-icons/.</a>

### Beranda.js
Next, enter the home file in the Components folder. In this file there are several modules that need attention such as Bar, Pie, Donut, PolarArea, Radar from react-chart-js. This module is useful for building data visualizations contained in the homepage display in displaying Tuberculosis case data. There are also main modules that are used to be able to support the existence of visualizations such as Charts from chart.js/auto, CategoryScale from chart.js you can see the documentation here:<a href="https://react-chartjs-2.js.org/components/">https://react-chartjs-2.js.org/components/.</a>  In this component there are many functions used in managing data that will be displayed through the database. Such as unique_year, lael_case, case_semester, successful_semester and many other functions. Functions that are outside the function of the components function to support the visualization of tuberculosis cases. There is also data fetching in this component which we can see in the useEffect module react. In fetching application data using the axios module, you can see the documentation here: <a href="https://axios-http.com/docs/intro">https://axios-http.com/docs/intro</a> In useEffect we call the data source that comes from hosting yamalitb precisely at the address <a href="https://yayasanmptb.or.id.yamalitb.or.id/">https://yayasanmptb.or.id.yamalitb.or.id/</a> there are various types of files that are useful for managing data from the admin to the database, so that it can be it is said that the address and source are REST Representational state transfers.

### AddInfo.js
Next we enter the AddInfo.js file in the Components folder. This component functions to make user input from the Admin application enter the database without making the user have to interact directly with the database and perform input, so that it can be said that this component is an interface that helps users fill in data into the database. The module that needs attention is axios. Like the homepage, this component also uses axios to interact with fetching sources from other platforms. But here it is not the GET method that is implemented, but the POST method because the user wants to input data into the database. It should also be noted that the use of the AddInfo component is used by two different views on the dashboard application, namely artikel and berita. This is because React provides a props feature that functions to use the same component with different properties. So the conclusion is that 1 component is used by 2 different views, namely artikel and berita.

### DeleteInfo.js
The next component, namely DeleteInfo.js, in this component, we do the GET method via https://yayasanmptb.or.id.yamalitb.or.id/. This is because users want to see what data is in berita or artikel. After the user sees, the user can choose what data needs to be deleted. So there is a DELETE method that will be executed. But we can use the Post method provided by axios. Sending the data id is then handled by the php script to delete the desired data.

### Kasus.js
The Case component in the Components folder provides updated data. However, implementing the POST method is the same as the DeleteInfo.js scenario where data is sent to the source location, then the source handles updating the data. Handling of updating data is handled by the PHP Script that has been provided.

### TambahKasus.js
The next component, AddKasus.js, is similar to AddInfo.js, but has more input than AddInfo.js. This component also has a props parameter which can have 2 types of props, namely the normal type and the total type, the normal type will be used by the case and the total will be used for the total case itself. So that 1 component is used by 2 different UIs.

### TotalKasus.js
The last component is TotalKasus.js, in this component the Pie module from react-chart-js2 is used to display all the attributes needed to be seen such as caseTb, success, default, failure, etc. The logic for using it is exactly the same as the case.js component, but the difference is that case uses the element table tag, while total cases uses Pie as the data representation.

# Module CheatSheet.

### react-pro-sidebar
Help Building sidebar component without developing from scratch. You can visit this link: <a href="https://www.npmjs.com/package/react-pro-sidebar">https://www.npmjs.com/package/react-pro-sidebar</a>

### react-router-dom
Enables client side routing. Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI. You can visit this link: <a href="https://reactrouter.com/en/main/start/overview">https://reactrouter.com/en/main/start/overview</a>

### Tailwindcss
Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file. You can visit this link: <a href='https://tailwindcss.com/docs/installation'>https://tailwindcss.com/docs/installation</a>

### react-chartsJS-2
React components for Chart.js, the most popular charting library. You can visit this link <a href='https://react-chartjs-2.js.org/'>https://react-chartjs-2.js.org/</a>

### Axios
Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.
<a href='https://axios-http.com/docs/intro'>https://axios-http.com/docs/intro</a>

### Framer Motion
An open source production-ready motion library for React. <a href='https://www.framer.com/docs/'>https://www.framer.com/docs/</a>
