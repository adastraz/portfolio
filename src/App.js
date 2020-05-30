import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute.js'
import Header from './components/Header.js'
import Blog from './components/Blog.js'
import NewPost from './components/NewPost.js'
import Welcome from './components/Welcome.js'
import Projects from './components/Projects.js'
import NewProject from './components/NewProject.js'

function App() {
  return (
    <Router>
      <Header />
      <Switch>  
        <PrivateRoute path='/newproject' component={NewProject} /> 
        {/* <PrivateRoute path='/newpost' component={NewPost} /> */}
        {/* <Route path='/blog' component={Blog} /> */}
        <Route path='/projects' component={Projects} />
        <Route path='/' component={Welcome} />
      </Switch>
    </Router>
  )
}



export default App
