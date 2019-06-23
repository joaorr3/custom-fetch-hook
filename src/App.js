import React, { lazy, Suspense } from 'react'
import { Router, Link } from '@reach/router'
import { PostsProvider } from './context/PostsContext'
import Nav from './components/Nav'

import './transition.css'

const About = lazy(() => import('./components/About'))
const Contacts = lazy(() => import('./components/Contacts'))
const Posts = lazy(() => import('./components/Posts'))

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">

        <Suspense fallback={<div></div>}>
          <PostsProvider>
            <Router primary={false}>
              <About path="/about" />
              <Contacts path="/contacts" />
              <Posts path="/posts" />
            </Router>
          </PostsProvider>
        </Suspense>

      </div>
    </div>
  );
}

export default App;
