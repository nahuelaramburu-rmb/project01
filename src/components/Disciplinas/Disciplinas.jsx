import React from "react";
import "./Disciplinas.css";
import img1 from "../../assets/imagenes/fotochiani.png";
import img2 from "../../assets/imagenes/contact-us.jpg";
import img3 from "../../assets/imagenes/imagen.png";
import img4 from "../../assets/imagenes/foto1.jpg";
import ModalDisciplinas from "./ModalDisciplinas/ModalDisciplina";

const Disciplinas = () => {
  return (
    <div
      className="cards-container"
      style={{
        padding: "20px",
        borderRadius: "20px",
        background: "rgba(128, 128, 128, 0.329)",
      }}
    >
      <div className="card">
        <div className="face front">
          <img src={img1} alt="Hipnosis" />
          <h3>Hipnosis</h3>
        </div>
        <div className="face back">
          <h3>Hipnosis</h3>
          <p>
            La hipnosis es una técnica que invita a un estado de concentración y
            relajación profunda, en el cual una persona puede acceder a su mente
            subconsciente.{" "}
            <ModalDisciplinas
              title="Hipnosis"
              content={
                <>
                  <h2>Qué es:</h2>
                  <p>
                    La hipnosis es una técnica que invita a un estado de
                    concentración y relajación profunda, en el cual una persona
                    puede acceder a su mente subconsciente. En ningún momento
                    hay pérdida de control, más bien se induce a un estado donde
                    la mente consciente está en segundo plano, permitiendo
                    acceder a la historia y a programas que guían la vida a
                    nivel automático, poder observarlos, analizarlos y
                    re-programarlos si fuera necesario.
                  </p>

                  <h2>Qué hace:</h2>
                  <p>
                    Durante una sesión de hipnosis, el hipnoterapeuta guía al
                    cliente a un estado de relajación profunda donde la mente es
                    más receptiva. En este estado, se pueden abordar cuestiones
                    como hábitos no deseados, miedos, ansiedad, dolor crónico y
                    creencias limitantes.
                  </p>

                  <h2>Para qué sirve:</h2>
                  <ul>
                    <li>
                      Manejo del dolor: Aliviar el dolor crónico y agudo sin el
                      uso de medicamentos.
                    </li>
                    <li>
                      Reducción del estrés y la ansiedad: Técnicas de relajación
                      profunda para reducir los niveles de estrés.
                    </li>
                    <li>
                      Tratamiento de fobias: Desensibilización de miedos
                      específicos.
                    </li>
                    <li>
                      Modificación de hábitos: Dejar de fumar, pérdida de peso,
                      etc.
                    </li>
                    <li>
                      Mejora del rendimiento: Aumentar la concentración y el
                      enfoque en deportes o estudios.
                    </li>
                    <li>
                      Modificación de creencias limitantes: Genera nuevas pautas
                      mentales para la concreción de objetivos.
                    </li>
                  </ul>

                  <h2>Qué logras con la hipnosis:</h2>
                  <ul>
                    <li>
                      A nivel personal: Superar bloqueos y miedos, mejorar el
                      bienestar general y establecer hábitos saludables.
                    </li>
                    <li>
                      A nivel empresarial: Reducir el estrés laboral, mejorar la
                      creatividad y la concentración.
                    </li>
                    <li>
                      A nivel ejecutivo y emprendedor: Incrementar la confianza
                      en la toma de decisiones y reducir el estrés asociado con
                      el liderazgo.
                    </li>
                  </ul>
                </>
              }
            />
          </p>
        </div>
      </div>

      <div className="card">
        <div className="face front">
          <img src={img2} alt="Neurociencia" />
          <h3>Neurociencia</h3>
        </div>
        <div className="face back">
          <h3>Neurociencia</h3>
          <p>
            Qué es: La neurociencia estudia el sistema nervioso y cómo sus
            diferentes componentes interactúan para influir en el comportamiento
            y las funciones mentales.{" "}
            <ModalDisciplinas
              title="Neurociencia"
              content={
                <>
                  <h2>Qué es:</h2>
                  <p>
                    La neurociencia estudia el sistema nervioso y cómo sus
                    diferentes componentes interactúan para influir en el
                    comportamiento y las funciones mentales.
                  </p>

                  <h2>Qué hace:</h2>
                  <p>
                    Explora cómo funcionan las neuronas y las redes neuronales,
                    cómo se procesan las emociones y cómo aprendemos y
                    recordamos información. La neurociencia también investiga
                    cómo las enfermedades y las lesiones afectan el cerebro y el
                    sistema nervioso.
                  </p>

                  <h2>Para qué sirve:</h2>
                  <ul>
                    <li>
                      Medicina: Desarrollo de tratamientos para enfermedades
                      neurológicas.
                    </li>
                    <li>
                      Educación: Mejorar métodos de enseñanza y aprendizaje
                      basados en cómo funciona el cerebro.
                    </li>
                    <li>
                      Tecnología: Avances en inteligencia artificial y
                      computación.
                    </li>
                  </ul>

                  <h2>Qué logras con la neurociencia:</h2>
                  <ul>
                    <li>
                      A nivel personal: Entender mejor tu propio comportamiento
                      y optimizar el aprendizaje y la memoria.
                    </li>
                    <li>
                      A nivel empresarial: Desarrollar estrategias basadas en
                      cómo funciona el cerebro para mejorar la toma de
                      decisiones y la comunicación.
                    </li>
                    <li>
                      A nivel ejecutivo y emprendedor: Aplicar conocimientos
                      neurocientíficos para mejorar la eficiencia y efectividad
                      en la gestión y el liderazgo.
                    </li>
                  </ul>
                </>
              }
            />
          </p>
        </div>
      </div>

      <div className="card">
        <div className="face front">
          <img src={img3} alt="PNL" />
          <h3>PNL</h3>
        </div>
        <div className="face back">
          <h3>Programación Neurolingüística (PNL)</h3>
          <p>
            La PNL es una metodología que estudia cómo nuestros pensamientos,
            lenguaje y patrones de...
            <ModalDisciplinas
              title="Programación Neurolingüística (PNL)"
              content={
                <>
                  <h2>Qué es:</h2>
                  <p>
                    La PNL es una metodología que estudia cómo nuestros
                    pensamientos, lenguaje y patrones de comportamiento afectan
                    nuestras experiencias de vida y cómo podemos cambiar estos
                    patrones para lograr mejores resultados.
                  </p>

                  <h2>Qué hace:</h2>
                  <p>
                    La PNL identifica y modifica patrones de pensamiento y
                    comportamiento que no son útiles, permitiendo a las personas
                    cambiar su forma de pensar y actuar para alcanzar sus
                    objetivos.
                  </p>

                  <h2>Para qué sirve:</h2>
                  <ul>
                    <li>
                      Comunicación: Mejorar la forma en que nos comunicamos con
                      nosotros mismos y con los demás.
                    </li>
                    <li>
                      Cambio de hábitos: Reemplazar hábitos negativos con
                      positivos.
                    </li>
                    <li>
                      Resolución de conflictos: Manejar y resolver conflictos
                      internos y externos.
                    </li>
                  </ul>

                  <h2>Qué logras con la PNL:</h2>
                  <ul>
                    <li>
                      A nivel personal: Superar creencias limitantes, establecer
                      y alcanzar metas, mejorar la comunicación interpersonal.
                    </li>
                    <li>
                      A nivel empresarial: Optimizar equipos de trabajo, mejorar
                      la comunicación y resolver conflictos de manera efectiva.
                    </li>
                    <li>
                      A nivel ejecutivo y emprendedor: Desarrollar estrategias
                      de liderazgo, mejorar la toma de decisiones y aumentar la
                      efectividad en la gestión.
                    </li>
                  </ul>
                </>
              }
            />
          </p>
        </div>
      </div>

      <div className="card">
        <div className="face front">
          <img src={img4} alt="Coaching" />
          <h3>Coaching</h3>
        </div>
        <div className="face back">
          <h3>Coaching</h3>
          <p>
            El coaching es un proceso de acompañamiento donde el coach ayuda al
            coachee (consultante) a alcanzar sus metas personales y
            profesionales, potenciando su desarrollo y maximización de su
            potencial.{" "}
            <ModalDisciplinas
              title="Coaching"
              content={
                <>
                  <h2>Qué es:</h2>
                  <p>
                    El coaching es un proceso de acompañamiento donde el coach
                    ayuda al coachee (consultante) a alcanzar sus metas
                    personales y profesionales, potenciando su desarrollo y
                    maximización de su potencial.
                  </p>

                  <h2>Qué hace:</h2>
                  <p>
                    A través de preguntas y técnicas de escucha activa, el coach
                    facilita el autodescubrimiento, la clarificación de metas y
                    la creación de un plan de acción para alcanzarlas.
                  </p>

                  <h2>Para qué sirve:</h2>
                  <ul>
                    <li>
                      Definición de objetivos: Ayuda a las personas a
                      identificar y establecer metas claras y alcanzables.
                    </li>
                    <li>
                      Desarrollo de habilidades: Fomenta el desarrollo de nuevas
                      habilidades y competencias.
                    </li>
                    <li>
                      Mejora de la autoeficacia: Aumenta la confianza en uno
                      mismo y la capacidad para alcanzar objetivos.
                    </li>
                  </ul>

                  <h2>Qué logras con el coaching:</h2>
                  <ul>
                    <li>
                      A nivel personal: Clarificación de metas, desarrollo de
                      habilidades personales y superación de obstáculos.
                    </li>
                    <li>
                      A nivel empresarial: Mejora de la efectividad de los
                      equipos, desarrollo del liderazgo y aumento de la
                      productividad.
                    </li>
                    <li>
                      A nivel ejecutivo y emprendedor: Estrategias para el
                      crecimiento empresarial, toma de decisiones efectivas y
                      desarrollo de habilidades de liderazgo.
                    </li>
                  </ul>

                  <p>
                    Cada una de estas disciplinas proporciona herramientas
                    poderosas para el crecimiento y el desarrollo tanto a nivel
                    personal como profesional. Su integración puede amplificar
                    los resultados y tener un impacto significativo en diversas
                    áreas de la vida y de los negocios.
                  </p>
                </>
              }
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disciplinas;
