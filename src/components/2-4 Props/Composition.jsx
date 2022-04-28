import React from 'react'

function Welcome(props){
    return <h1>Hello, {props.name}</h1>;
}


export default function Composition() {
 
    return (
        <div>
            <Welcome name ="sara"></Welcome>
            <Welcome name ="tome"></Welcome>
            <Welcome name ="aaa"></Welcome>
            
        </div>
  )

}
