import React from 'react'; 
import './App.css';
//import firebase from './config/firebase'
import MainComponent from './components/main.component';
import { Container, Row, Col } from 'react-bootstrap';
function App() {
  // const [spells, setSpells] = React.useState([])
  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     const db = firebase.firestore();
  //     const data = await db.collection("spell").get();
  //     setSpells(data.docs.map(doc => doc.data()))
  //   }
  //   fetchData()
  // }, []);
  return (
    <div className="App">
      <Container>
        <Row>
          <Col sm={12}>
      <MainComponent/>
          </Col>
        </Row>
      </Container>

      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      />
      {/* <h5>How to use Firebase and React</h5>
      <hr/>
      <div>
        {
          spells.map(spell=> (
            <li key={spell.name} > {spell.name} - {spell.desc} - {spell.page} - </li>
          ))
        }
      </div> */}
    </div>
  );
}

export default App;
