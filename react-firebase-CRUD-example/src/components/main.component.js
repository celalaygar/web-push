import React, { Component } from 'react';
import firebase from '.././config/firebase';
import { Table, Col, Container, Row } from 'react-bootstrap/';
import { SpellInput } from './SpellInput';
import addNotification from 'react-push-notification';
var result = [];
var showNotification = false;
export default class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spell: [],
            name: "name",
            desc: "desc",
            page: "page"
        };
        this.handleChange = this.handleChange.bind(this);
        //const[spell, setSpell] = React.useState([])
    }

    componentDidMount() {
        this.fetchData();
        this.showNotification();
    }
    // componentDidUpdate() {
    //     this.fetchData();
    // }
    fetchData = async () => {
        const db = firebase.firestore();
        const data = await db.collection("spell").get();
        result = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        this.setState({ spell: result });
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSave = (e) => {
        let formData = {
            name: this.state.name,
            desc: this.state.desc,
            page: this.state.page
        };
        const db = firebase.firestore();
        db.collection("spell").add(formData)
        this.showNotification2(formData.name, formData.desc, formData.page);
        this.fetchData();
    }
    showNotification2(title, subtitle, message) {
        return addNotification({
            title: title,
            subtitle: subtitle,
            message: message,
            theme: 'darkblue',
            duration: 15000, //optional, default: 5000,
            backgroundBottom: 'darkgreen',
            backgroundTop: 'green',
            native: true // when using native, your OS will handle theming.
        });

    }
    showNotification() {
        return addNotification({
            title: 'Warning',
            subtitle: 'This is a subtitle',
            message: 'This is a very long message',
            theme: 'darkblue',
            duration: 15000, //optional, default: 5000,
            backgroundBottom: 'darkgreen',
            backgroundTop: 'green',
            native: true // when using native, your OS will handle theming.
        });

    }
    onDelete(spell){
        const db = firebase.firestore();
        db.collection('spell').doc(spell.id).delete();
        this.fetchData();
    }
    render() {

        return (
            <div>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <h5>FireStore Coming Data</h5>
                            <hr />
                            <button onClick={this.showNotification} className="button">
                                Show Notification
                            </button>
                        </Col>
                        <Col sm={6} style={{ border: " 2px solid #ddd" }}>

                            <form>
                                <div className="form-group">
                                    <label>  Name:  </label>
                                    <input type="text" className="form-control  form-control-sm" name="name" defaultValue={this.state.name} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>  Desc:  </label>
                                    <input type="text" className="form-control  form-control-sm" name="desc" defaultValue={this.state.desc} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>  Page:  </label>
                                    <input type="text" className="form-control  form-control-sm" name="page" defaultValue={this.state.page} onChange={this.handleChange} />
                                </div>
                                <input className="btn btn-primary btn-sm" defaultValue="Submit" onClick={this.onSave} />
                            </form>
                        </Col>
                        <Col sm={12}>
                            <hr />
                            <div>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            {/* <th>Id</th> */}
                                            <th>Name</th>
                                            <th>Desc</th>
                                            <th>Page</th>
                                            <th>Show</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.spell.map(s => (
                                            <tr key={s.id}>
                                                {/* <td>{s.id} </td> */}
                                                <SpellInput spell={s} />
                                                <td>{s.desc} </td>
                                                <td>{s.page} </td>
                                                <td>
                                                    <button onClick={() => this.showNotification2(s.name,s.desc,s.page)} className="btn btn-sm btn-info">
                                                        Show
                                                    </button>
                                                    <button onClick={() => this.onDelete(s)} className="btn btn-sm btn-danger">
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        )
    }
}
