import foto1 from "../../assets/imagenes/foto1.jpg";

export default function CardMain() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 justify-content-center">
          <h3>Ricardo Chiani</h3>
          <ul>
            <li>Coach Ontológico Profecional</li>
            <li>Neuropsicoeducador</li>
            <li>Hipnoterapeuta</li>
          </ul>
        </div>
        <div className="col-12 col-md-6 justify-content-center">
          <img src={foto1} alt="Foto del Cliente" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
}


//  ---- codigo anterior  lo vamos a cortar un poco usando boostrapt  ----
// ----- para  hacerlo responsive... col-12 son 12 columnas, en pantallas chicas
// ------ va a utilizar las 12 en grandes 6 (osea... van a entrar dos componentes en la
//------ misma fila)vamos probando asi si no se entiende o se complica
// ---- buscamos otra form
// import MediaQuery from "react-responsive";

// export default function Card1() {
//   return (
//     <div>
//       <MediaQuery maxWidth={512}>
//         {/* <div className="row"> */}
//         <div className="card">
//           {/* <div className="m-auto opacity-75 ">
//             <img
//               className="card-img-top "
//               style={{ width: "70%" }}
//               src={logo}
//               alt="Logo del cliente"
//             />
//           </div> */}

//           <div className="card-body m-auto">
//             <h3>Ricardo Chiani</h3>
//             <ul>
//               <li>Coach Ontológico Profecional</li>
//               <li>Neuropsicoeducador</li>
//               <li>Hipnoterapeuta</li>
//             </ul>
//           </div>

//           <div className="m-auto">
//             <img
//               className="card-img-bottom"
//               style={{ width: "100%" }}
//               src={foto1}
//               alt="Foto del Cliente"
//             />
//           </div>
//         </div>
//         {/* </div> */}
//       </MediaQuery>

//       <MediaQuery minWidth={513}>
//         <div className="row">
//           {/* <div className="col-4 z-n1 opacity-75 ">
//             <img src={logo} alt="Logo del cliente" />
//           </div> */}
//           <div className="col-3 justify-content-center">
//             <h3>Ricardo Chiani</h3>
//             <ul>
//               <li>Coach Ontológico Profecional</li>
//               <li>Neuropsicoeducador</li>
//               <li>Hipnoterapeuta</li>
//             </ul>
//           </div>
//           <div className="col-3 z-n1  justify-content-center ">
//             <img src={foto1} alt="Foto del Cliente" />
//           </div>
//         </div>
//       </MediaQuery>
//     </div>
//   );
// }
