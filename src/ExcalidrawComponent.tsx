import React from "react";
import {
  Excalidraw,
  convertToExcalidrawElements,
} from "@excalidraw/excalidraw";
import classes from "./styles/Modal.module.css";
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";

const ExcalidrawComponent = () => {
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
    },
  ]);

  const doubleHandler = () => {
    setSelectedElementData(elements);
  };

  return (
    <div style={{ height: "500px" }} onDoubleClick={doubleHandler}>
      <Excalidraw
        initialData={{
          elements,
          appState: { zenModeEnabled: true, viewBackgroundColor: "#ffffff" },
          scrollToContent: true,
        }}
      />
      {selectedElementData && (
        <div className={classes.dataWindow}>
          <p>{JSON.stringify(selectedElementData, undefined, 2)}</p>
          <button onClick={() => setSelectedElementData(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ExcalidrawComponent;
