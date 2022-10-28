import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Card 
             img="https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Jensen_Ackles_as_Dean_Winchester.png/220px-Jensen_Ackles_as_Dean_Winchester.png" 
             name="Nikhil Wanjare"
             telephone="9970046884"
             mail="wanjarenikhil16@gmail.com"
      />
      <Card 
            img="https://i.pinimg.com/originals/1f/cf/ba/1fcfbabd631523ea9986dd04702abd16.jpg"
            name="Sam Winchester"
            telephone="000000000000"
            mail="callme@gmail.com"
      />
      <Card 
            img="https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Jensen_Ackles_as_Dean_Winchester.png/220px-Jensen_Ackles_as_Dean_Winchester.png" 
            name="Dean Winchester"
            telephone="1111111111"
            mail="dontcallme@gmail.com"
      />
      <Card 
            img="https://upload.wikimedia.org/wikipedia/en/thumb/6/63/John_winchester.jpg/240px-John_winchester.jpg"
            name="John winchester"
            telephone="2222222222"
            mail="justkidding@gmail.com"
      />
    </div>
  );
}

export default App;
