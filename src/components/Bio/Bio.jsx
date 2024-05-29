import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Bio() {
  return (
    <div className="container">
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <h3>Quién soy?</h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              Soy un profesional comprometido en asistir y acompañar a las
              personas, empresas y organizaciones a que vivan una vida inspirada
              y con propósito.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <h2>Mi historia</h2>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              Durante 36 años, fui violinista en la Orquesta del Teatro
              Argentino de La Plata, Buenos Aires, Argentina. Desde una edad
              temprana, comprendí el valor de la disciplina, enfrenté desafíos y
              frustraciones, y competí por alcanzar mis sueños. Al descubrir el
              coaching y la Programación Neurolingüística (PNL), entendí cómo
              mis interpretaciones de la realidad, mis patrones mentales y mis
              emociones condicionaban mis resultados, relaciones y mi vida en
              general. Al identificar y modificar estas limitaciones, descubrí
              nuevas oportunidades y posibilidades para alcanzar mis objetivos.
              Implementando estas herramientas tanto en mi vida personal como en
              la de mis alumnos de violín, y en la asistencia a personas en sus
              vidas personales y profesionales, confirmé que el cambio es
              posible. Hoy me dedico a acompañar a personas, empresas y
              organizaciones en el logro de sus objetivos, mientras disfrutan
              del proceso de caminar hacia el éxito.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <h2>Frases que me identifican</h2>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              Cuida tus pensamientos, porque se convertirán en tus palabras.
              Cuida tus palabras, porque se convertirán en tus actos. Cuida tus
              actos, porque convertirán en tus hábitos. Cuida tus hábitos,
              porque se convertirán en tu destino. Gandhi.
            </p>
            <p>
              Comienza haciendo lo necesario, luego lo posible y terminaras
              haciendo lo imposible. San Francisco de Asís
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <h3>Mi misión:</h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              Es facilitar procesos de transformaciones profundas y duraderas, a
              personas, empresas y organizaciones de todo el mundo, para
              maximizar su potencial, logrando resultados extraordinarios y
              viviendo vidas plenas y significativas. Enseñando principios
              universales y estrategias efectivas, cultivando el liderazgo,
              integridad y excelencia personal y profesional, para que puedan
              alcanzar sus metas y sueños.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <h3>Mi Visión:</h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              &quot;Crear una comunidad global de individuos y organizaciones
              que operen con confianza, integridad y eficacia. Aspiro a ser
              reconocido como un líder internacional en el desarrollo personal,
              organizacional y empresarial, transformando vidas e inspirando a
              millones a vivir vidas auténticas, plenas y extraordinarias,
              liderando un movimiento de cambio positivo que permita a las
              personas alcanzar sus sueños y mejorar el mundo que nos rodea.
              Visiono habitar un mundo más consciente, compasivo y exitoso, en
              donde cada persona tenga las herramientas para cambiar su vida,
              inspirar a otros a hacer lo mismo y generar un impacto positivo y
              duradero en la sociedad.&quot;
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <h2>Formación académica</h2>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul style={{ listStyleType: "none" }}>
              <li></li>
              <li>
                ELAC - Escuela Latinoamericana de Coaching Coach Ontológico
                Profesional (aval internacional FICOP - AACOP)
              </li>

              <li>
                INSTITUTO ELBA SELDES Master Trainer en PNL (Programación
                Neurolingüística) (aval internacional IANLP)
              </li>
              <li>
                CENTRO ARGENTINO DE HIPNOSIS Master Hipnótico (Hipnoterapeuta)
                con especialidad clínica
              </li>

              <li>UCA - Universidad Católica Argentina Neuropsicoeducador </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <h2>Beneficios de un proceso de coaching y PNL</h2>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>
                Convertirse en un observador más consciente de uno mismo y del
                entorno.
              </li>
              <li>
                Definir el tipo de vida y carrera que deseas, y tomar las
                acciones necesarias para alcanzarla.
              </li>
              <li>
                Transformar conductas reactivas, asumiendo el control de tu
                futuro.
              </li>
              <li>
                Diseñar conversaciones que abran nuevas oportunidades y
                concreten posibilidades.
              </li>
              <li>
                Planificar acciones efectivas que generen resultados antes
                inalcanzables.
              </li>
              <li>
                Coordinar estrategias para lograr resultados extraordinarios.
              </li>
              <li>Superar problemas actuales y diseñar un futuro deseado.</li>
              <li>
                Crear un modelo de transformación profunda en la cultura
                organizacional.
              </li>
              <li>
                Promover entornos de confianza para equipos de alto rendimiento.
              </li>
              <li>
                Identificar emociones que abren posibilidades y aprender a
                gestionarlas eficazmente para alcanzar tus metas.
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
