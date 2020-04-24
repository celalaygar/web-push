import React from 'react';
import firebase from '.././config/firebase'
export const SpellInput = ({ spell }) => {
    const [name, setName] = React.useState(spell.name);
    const onUpdate = (e) => { 
        const db = firebase.firestore();
        db.collection('spell').doc(spell.id).set({ ...spell, name }) 
    }
    const onDelete = (e) => { 
        const db = firebase.firestore();
        db.collection('spell').doc(spell.id).delete()
    }
    return (<div>
        <input value={name} onChange={e => { setName(e.target.value) }} />
        <button onClick={onUpdate} className="btn btn-sm btn-warning">Update</button>
        <button onClick={onDelete} className="btn btn-sm btn-danger" >Delete</button>
    </div>)
}