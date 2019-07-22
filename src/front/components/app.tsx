import * as React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./homepage/home";
import AboutMe from "./aboutme/about-me";
import Contact from "./contactme/contact";
import Projects from "./myprojects/projects";
import "../style/page.scss"
import {scrollContext} from "../utils/context/ProjectContext"
const App: React.SFC<IAppProps> = () => {
    const [scroll, setScroll] = React.useState(0)
    return (
        <Router>
            <div className="page">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about-me" component={AboutMe} />
                    <Route exact path="/contact-me" component={Contact} />
                    <scrollContext.Provider value={{scroll,setScroll}}>
                    <Route exact path="/my-projects" component={Projects} />
                    </scrollContext.Provider>
                </Switch>
            </div>
        </Router>
    )
}

interface IAppProps {

}

export default App 