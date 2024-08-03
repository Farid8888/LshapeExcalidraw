// @ts-nocheck 
import React,{useContext,useRef} from "react";
import {
  Excalidraw,
  convertToExcalidrawElements,
  restoreElements
} from "@excalidraw/excalidraw";
import classes from "./styles/Modal.module.css";
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import Modal from "./modal/Modal";
import {ModalContext} from './context/ModalContext'



const ExcalidrawComponent = () => {
  const clickTimeoutRef = useRef(null);
const {changeWindow,showModal} = useContext(ModalContext)
  const [selectedElementData, setSelectedElementData] = React.useState<
    ExcalidrawElement[] | null
  >(null);
  const elements = convertToExcalidrawElements([
    {
      id: "RLMQdeJsdQZ4W2BLZLbms",
      type: "line",
      x: 400,
      y: 200,
      width: 140,
      height: 140,
      angle: 0,
      strokeColor: "#1971c2",
      backgroundColor: "#a5d8ff",
      fillStyle: "solid",
      strokeWidth: 2,
      strokeStyle: "solid",
      roughness: 1,
      opacity: 100,
      groupIds: [],
      frameId: null,
      roundness: null,
      seed: 513121647,
      version: 668,
      versionNonce: 1200702959,
      isDeleted: false,
      boundElements: null,
      updated: 1722442322007,
      link: null,
      locked: false,
      points: [
        [0, 0],
        [0, 136],
        [145.06039186351566, 136.6280200350316],
        [146, 78],
        [68, 77.47483827666167],
        [67, 0],
        [0, 0],
      ],
      lastCommittedPoint: [0.83331298828125, 0],
      startBinding: null,
      endBinding: null,
      startArrowhead: null,
      endArrowhead: null,
    }
  ]);

  const [excalidrawAPI, setExcalidrawAPI] = React.useState(null);

  const elem = excalidrawAPI?.getSceneElements()
console.log(elem)

  // const doubleHandler = () => {
  //   setSelectedElementData(elem);
  // };

// React.useEffect(()=>{
//   excalidrawAPI?.onPointerDown((event, pointerDownState) => {
//     const selectedEl = pointerDownState.hit.element;
//     // console.log(selectedEl);
//       setSelectedElementData(selectedEl);
//       changeWindow(6);
//       showModal();
//   });
// },[excalidrawAPI])

React.useEffect(() => {
  const handlePointerDown = (event, pointerDownState) => {
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
      clickTimeoutRef.current = null;

      const selectedEl = pointerDownState.hit.element;
      setSelectedElementData(selectedEl);
      changeWindow(6);
      showModal();
    } else {
      clickTimeoutRef.current = setTimeout(() => {
        clickTimeoutRef.current = null;
      }, 200); 
    }
  };

  excalidrawAPI?.onPointerDown(handlePointerDown);

  return () => {
    excalidrawAPI?.offPointerDown(handlePointerDown);
  };
}, [excalidrawAPI]);

        
    const updateScene = () => {
      const sceneData = {
        elements: restoreElements([...elements,{...elements[0],x:(500 - 200*Math.random()),y:(300 - 10*Math.random())}],null),
        appState: {
          viewBackgroundColor: "#edf2ff"
        }
      };
      excalidrawAPI?.updateScene(sceneData);
    };


  return (
    <div style={{ height: "500px"}}>
      <Excalidraw
        excalidrawAPI={(api) => setExcalidrawAPI(api)}
        initialData={{
          elements
        }
      }
      />
      <button type="button" className={classes.btn} onClick={updateScene}>L</button>
      <Modal selectedElementData={selectedElementData} setSelectedElementData={setSelectedElementData}/>
    </div>
  );
};

export default ExcalidrawComponent;

