import "./apps.css"
import Card from "./Card";
function App() {
    return (
        <div className="background">
            <section className="topnav">
                <a className="active" href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <form>
                    <input 
                    type="text"
                    className="search"
                    placeholder="type here to filter..."
                    />
                </form>
            </section>
            <section className="grid-container">
                <Card/>
            </section>
        </div>
    );
}

export default App;
