
// import React,{useState,useEffect,useContext} from 'react'
// import {Excalidraw} from '@excalidraw/excalidraw'
// import styled from "styled-components";
// import {ModalContext} from "./context/ModalContext"

// const ExelDraw = () => {
//     const {
//         activeWindow,
//         changeWindow,
//         showModal,
//         addZoneData,
//         addNewElement,
//         newElement,
//       } = useContext(ModalContext);
//     const [excalidrawAPI, setExcalidrawAPI] = useState(null);
//     const [elements, setElements] = useState([]);
//     const [files, setFiles] = useState([]);
//     const [initialElements, setInitialElements] = useState([]);
//     const zone =[]
//     useEffect(() => {
//         if (excalidrawAPI) {
//           if (activeWindow === 0) {
//             excalidrawAPI.onChange((elements, _, files) => {
//               setElements(elements);
//               setFiles(files);
//             });
//           }
    
//           // console.log(elements, "inside api");
//           excalidrawAPI.onPointerDown((event, pointerDownState) => {
//             const selectedEl = pointerDownState.hit.element;
//             // console.log(selectedEl);
//             if (selectedEl && selectedEl.type !== "image") {
//               setSelectedZone(selectedEl);
//               changeWindow(6);
//               showModal();
//             }
//           });
//         }
//       }, [excalidrawAPI]);

//       if (excalidrawAPI) {
//         if (activeWindow === 0) {
//           excalidrawAPI.onChange((elements, _, files) => {
//             setElements(elements);
//             setFiles(files);
//           });
//         }
//       }

//       useEffect(() => {
//         const updatedZones =
//           Array.isArray(zone) &&
//           zone?.map((z) => ({
//             ...z,
//             opacity: 100 - z.transparency,
//             label: {
//               text: `Z ${z.index}`,
//               fontSize: 10,
//               fontFamily: "Arial",
//               fontWeight: "bold",
//             },
//             customData: z.id,
//           }));
//         const imageFile = url
//           ? {
//               mimeType: url.type,
//               id: url.id,
//               dataURL: `data:image/jpeg;base64,${url.dataURL}`,
//               created: date,
//               lastRetrieved: date,
//             }
//           : null;
    
//         if (imageFile) {
//           setFiles({ 1: imageFile });
//         }
//         Array.isArray(zone) &&
//           url &&
//           setElements(
//             convertToExcalidrawElements([
//               {
//                 backgroundColor: "transparent",
//                 fillStyle: "solid",
//                 height: 589.32421875,
//                 id: 1,
//                 fileId: 1,
//                 scale: [1, 1],
//                 opacity: 100,
//                 roughness: 1,
//                 roundness: { type: 3 },
//                 strokeColor: "#1e1e1e",
//                 strokeStyle: "solid",
//                 strokeWidth: 2,
//                 type: "image",
//                 width: 926.3007302545692,
//                 x: 1.2665658656984533,
//                 y: 2.47113037109375,
//               },
//               ...updatedZones,
//             ])
//           );
    
//         setInitialElements(updatedZones);
//       }, [url, zone, currentProject]);

//       useEffect(() => {
//         Array.isArray(initialElements) &&
//           addNewElement(
//             elements
//               .filter((el1) => {
//                 return !initialElements?.some((el2) => el2.id === el1.customData);
//               })
//               .filter((el) => el.type !== "image" && el.type !== "text")[0]
//           );
//       }, [elements, initialElements]);

//       useEffect(() => {
//         if (newElement) {
//           newElement?.height &&
//             newElement?.width &&
//             addZoneData({
//                 id: "RLMQdeJsdQZ4W2BLZLbms",
//                 type: "line",
//                 x: 400,
//                 y: 200,
//                 width: 140,
//                 height: 140,
//                 angle: 0,
//                 strokeColor: "#1971c2",
//                 backgroundColor: "#a5d8ff",
//                 fillStyle: "solid",
//                 strokeWidth: 2,
//                 strokeStyle: "solid",
//                 roughness: 1,
//                 opacity: 100,
//                 groupIds: [],
//                 frameId: null,
//                 roundness: null,
//                 seed: 513121647,
//                 version: 668,
//                 versionNonce: 1200702959,
//                 isDeleted: false,
//                 boundElements: null,
//                 updated: 1722442322007,
//                 link: null,
//                 locked: false,
//                 points: [
//                   [0, 0],
//                   [0, 136],
//                   [145.06039186351566, 136.6280200350316],
//                   [146, 78],
//                   [68, 77.47483827666167],
//                   [67, 0],
//                   [0, 0],
//                 ],
//                 lastCommittedPoint: [0.83331298828125, 0],
//                 startBinding: null,
//                 endBinding: null,
//                 startArrowhead: null,
//                 endArrowhead: null,
//               });
//         } else {
//           addZoneData(null);
//         }
//       }, [newElement?.width, newElement?.height]);
//       useEffect(() => {
//         if (excalidrawAPI) {
//           const sceneData = {
//             elements,
//             files,
//           };
//           activeWindow !== 0 && excalidrawAPI.updateScene(sceneData);
//         }
//         // setInitialData(elements, files);
//         // console.log(initialData);
//       }, [elements, files, excalidrawAPI, interval]);

//   return (
//     <StyledDashboard activeWindow={activeWindow}>
//       <Excalidraw
//         excalidrawAPI={(api) => setExcalidrawAPI(api)}
//         initialData={{ elements, files }}
//       />
//   </StyledDashboard>
//   )
// }

// export default ExelDraw


// const StyledDashboard = styled.div`
//   border: 2px solid #000;
//   height: 90vh;
//   background-color: #e1e1e1;
//   width: 68%;
//   .excalidraw .Stack {
//     visibility: ${(props) => (props.activeWindow === 0 ? "" : "hidden")};
//   }
//   .excalidraw .sidebar-trigger {
//     visibility: ${(props) => (props.activeWindow === 0 ? "" : "hidden")};
//   }
//   .excalidraw .undo-redo-buttons,
//   .excalidraw .help-icon {
//     display: none;
//   }
//   footer {
//     display: none;
//   }
//   .excalidraw .HintViewer {
//     display: none;
//   }
//   @media (max-width: 900px) {
//     .dashboard {
//       width: 58%;
//     }
//   }
// `;
