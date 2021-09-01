import React from 'react'
import ReactDOM from 'react-dom'
import '~ui/index.css'
import App from '~ui/App'

import whyDidYouRender from '@welldone-software/why-did-you-render';

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

whyDidYouRender(React, {
  diffNameColor: 'grey',
  diffPathColor: 'orange',
  logOnDifferentValues: true,
  titleColor: 'red',
  trackAllPureComponents: true,
  trackHooks: true,
});

render()
