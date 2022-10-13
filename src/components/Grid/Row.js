import React from 'react'
import Tile from './Tile'

export default function Row(props) {
    const nums=[1,2,3,4,5]
    return (
        <div className="flex flex-row justify-center items-center" >
            {
                nums.map((item, index) => (<Tile rowId={props.id} key={index} id={index} />))
            }
            
        </div>
    )
}
