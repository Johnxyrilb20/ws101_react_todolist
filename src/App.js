import './App.css';
// import Navbar from './components/Navbar/navbar';
// import Hero from './components/Hero/hero';
// import About from './components/About/about';
// import Contact from './components/Contact/contact';
// import Footer from './components/Footer/footer';
// import HandlingFunction from './components/HandlingFunction';
// import HandlingClass from './components/HandlingClass';
// import IfCondition from './components/IfConditions';
//import Biodata from './components/Biodata/biodata';
import TodoList from './components/todolist/todolist';
//import todolist from './components/todolist/todolist';
function App() {
    return (
        <div className="App">
        {/* <Navbar name="John Xyril" lastname="Cabana" />
        <Hero message="Hello"/>
        <About />
        <Contact />
        <Footer />
        <HandlingFunction />
        <HandlingClass />
        <IfCondition /> */}
        <TodoList />
    </div>
    
    );

}
export default App;
