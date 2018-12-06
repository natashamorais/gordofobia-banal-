import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import Text from './pages/Text/Text'
import Text1 from './pages/Text1/Text1'
import Text2 from './pages/Text2/Text2'
import Text3 from './pages/Text3/Text3'
import Text4 from './pages/Text4/Text4'
import Text5 from './pages/Text5/Text5'
import Text6 from './pages/Text6/Text6'
import Text7 from './pages/Text7/Text7'
import Text8 from './pages/Text8/Text8'
import Text9 from './pages/Text9/Text9'
import Text10 from './pages/Text10/Text10'
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
          <Route path="/Text5" component={Text5} />
          <Route path="/Text6" component={Text6} />
          <Route path="/Text7" component={Text7} />
          <Route path="/Text8" component={Text8} />
          <Route path="/Text9" component={Text9} />
          <Route path="/Text10" component={Text10} />
          
        </Switch>
      </React.Fragment>
    )
  }
}

export default withRouter(App)