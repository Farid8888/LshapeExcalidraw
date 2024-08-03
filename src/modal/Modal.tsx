// @ts-nocheck 
import React from 'react'
import classes from "../styles/Modal.module.css";

const Modal = ({selectedElementData,setSelectedElementData}) => {
  return (
    <div>
      {selectedElementData && (
        <div className={classes.dataWindow}>
          <p>
            {JSON.stringify(selectedElementData, undefined, 2)}</p>
          <button onClick={() => setSelectedElementData(null)}>Close</button>
        </div>
      )}
    </div>
  )
}

export default Modal
