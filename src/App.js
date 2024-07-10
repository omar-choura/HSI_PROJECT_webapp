import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import BlockServices from "./pages/BlockServices";
import Contact from "./pages/Contact";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Project4 from "./pages/Project4";
import Blog2 from "./pages/Blog2";
import Blog3 from "./pages/Blog3";
import Masonry from "./pages/Masonry";
import BlogLeft from "./pages/BlogLeft";
import BlogRight from "./pages/BlogRight";
import BlognoSidebar from "./pages/BlognoSidebar";
import Blogdetails from "./pages/Blogdetails";
import Shopcol3 from "./pages/Shopcol3";
import Shopcol4 from "./pages/Shopcol4";
import Shopleft from "./pages/Shopleft";
import Shopright from "./pages/Shopright";
import Shopleft3 from "./pages/Shopleft3";
import Shopright3 from "./pages/Shopright3";
import Login from "./pages/Login";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL + "/about"}`} component={About} />
        <Route exact path={`${process.env.PUBLIC_URL + "/services"}`} component={Services} />
        <Route exact path={`${process.env.PUBLIC_URL + "/blocks-services"}`} component={BlockServices} />
        <Route exact path={`${process.env.PUBLIC_URL + "/contact"}`} component={Contact} />
        <Route exact path={`${process.env.PUBLIC_URL + "/project-3-col"}`} component={Project1} />
        <Route exact path={`${process.env.PUBLIC_URL + "/project-3-col-masonry"}`} component={Project2} />
        <Route exact path={`${process.env.PUBLIC_URL + "/project-4-col"}`} component={Project3} />
        <Route exact path={`${process.env.PUBLIC_URL + "/project-4-col-slider"}`} component={Project4} />
        <Route exact path={`${process.env.PUBLIC_URL + "/blog-2-col"}`} component={Blog2} />
        <Route exact path={`${process.env.PUBLIC_URL + "/blog-3-col"}`} component={Blog3} />
        <Route exact path={`${process.env.PUBLIC_URL + "/masonry-blog"}`} component={Masonry} />
        <Route exact path={`${process.env.PUBLIC_URL + "/blog-left-sidebar"}`} component={BlogLeft} />
        <Route exact path={`${process.env.PUBLIC_URL + "/blog-right-sidebar"}`} component={BlogRight} />
        <Route exact path={`${process.env.PUBLIC_URL + "/blog-no-sidebar"}`} component={BlognoSidebar} />
        <Route exact path={`${process.env.PUBLIC_URL + "/blog-details"}`} component={Blogdetails} />
        <Route exact path={`${process.env.PUBLIC_URL + "/shop-3-col"}`} component={Shopcol3} />
        <Route exact path={`${process.env.PUBLIC_URL + "/shop-4-col"}`} component={Shopcol4} />
        <Route exact path={`${process.env.PUBLIC_URL + "/shop-2col-left-sidebar"}`} component={Shopleft} />
        <Route exact path={`${process.env.PUBLIC_URL + "/shop-2col-right-sidebar"}`} component={Shopright} />
        <Route exact path={`${process.env.PUBLIC_URL + "/shop-3col-left-sidebar"}`} component={Shopleft3} />
        <Route exact path={`${process.env.PUBLIC_URL + "/shop-3col-right-sidebar"}`} component={Shopright3} />
        <Route exact path={`${process.env.PUBLIC_URL + "/login"}`} component={Login} />
        <Route exact path={`${process.env.PUBLIC_URL + "/"}`} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
