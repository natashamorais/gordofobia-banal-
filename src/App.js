import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import Text from './pages/Text/Text'
import Text1 from './pages/Text1/Text1'
import Text2 from './pages/Text2/Text2'
import Text3 from './pages/Text3/Text3'
import Text4 from './pages/Text4/Text4'
import { withRouter } from 'react-router'


class App extends Component{
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Text} />
          <Route path="/Text1" component={Text1} />
          <Route path="/Text2" component={Text2} />
          <Route path="/Text3" component={Text3} />
          <Route path="/Text4" component={Text4} />
          
        </Switch>
      </React.Fragment>
    )
  }
}

export default withRouter(App)