import { Col, Container, Image, Row } from "react-bootstrap";
import colombian_map from "../../assets/img/pageSix/Asset_15.png";
import page6_element_1 from "../../assets/img/pageSix/Asset 2_1.png";
import page6_element_2 from "../../assets/img/pageSix/Asset 3.png";
import page6_element_3 from "../../assets/img/pageSix/Asset 4.png";
import "./PageSix.css";

function PageSix() {
  return (
    <>
      <section className="desktop" id="transformaciones-urbanas">
        <Container fluid>
          <Row className="vh-100 justify-content-center align-items-center">
            <Col
              lg={5}
              md={5}
              style={{
                backgroundImage: `url(${colombian_map})`,
                height: "100%",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h1 className="font-d-din-bold m-5">
                Conoce en este mapa las transformaciones urbanas que evaluamos
                en el proyecto SALURBAL
              </h1>
            </Col>
            <Col lg={7} md={7}>
              <Row className="vh-100">
                {/* Element 1 */}
                <Col lg={4} md={4}>
                  <Row
                    style={{ height: "50%" }}
                    className="pt-4 align-items-center"
                  >
                    <Col style={{ height: "100%" }}>
                      <Row style={{ height: "85%" }} className="mb-4">
                        <Col
                          style={{ height: "100%" }}
                          className="d-flex justify-content-center align-items-center"
                        >
                          <Image
                            src={page6_element_1}
                            style={{ height: "100%", width: "auto" }}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col className="d-flex justify-content-center">
                          <h3 className="font-d-din-bold">Estudio RUCAS</h3>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="d-flex justify-content-center align-items-center">
                      <span
                        style={{
                          backgroundColor: "#D4D5D5",
                          borderRadius: "20px",
                        }}
                        className="font-d-din-italic p-4 description"
                      >
                        <span className="bold-italic">Lugar:</span> Puente Alto,
                        Santiago y Viña del Mar (Chile).
                        <br />
                        <span className="bold-italic">Intervención:</span>{" "}
                        Programa de Regeneración de conjuntos de vivienda social
                        formal deteriorados.
                        <br />
                        <span className="bold-italic">
                          Población estimada afectada por la intervención:
                        </span>{" "}
                        3,834 personas en Puente Alto y 831 en Viña del Mar.
                      </span>
                    </Col>
                  </Row>
                </Col>
                {/* Element 2 */}
                <Col lg={4} md={4}>
                  <Row
                    style={{ height: "50%" }}
                    className="pt-4 align-items-center"
                  >
                    <Col style={{ height: "100%" }}>
                      <Row style={{ height: "85%" }} className="mb-4">
                        <Col
                          style={{ height: "100%" }}
                          className="d-flex justify-content-center align-items-center"
                        >
                          <Image
                            src={page6_element_2}
                            style={{ height: "100%", width: "auto" }}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col className="d-flex justify-content-center">
                          <h3 className="font-d-din-bold">Estudio TrUST</h3>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="d-flex justify-content-center align-items-center">
                      <span
                        style={{
                          backgroundColor: "#D4D5D5",
                          borderRadius: "20px",
                        }}
                        className="font-d-din-italic p-4 description"
                      >
                        <span className="bold-italic">Lugar:</span> Ciudad
                        Bolívar, Bogotá (Colombia).
                        <br />
                        <span className="bold-italic">Intervención:</span>{" "}
                        Implementación del sistema de transporte urbano por
                        cable aéreo TransMiCable y la transformación urbana del
                        barrio.
                        <br />
                        <span className="bold-italic">
                          Población estimada afectada por la intervención:
                        </span>{" "}
                        748,000 personas.
                      </span>
                    </Col>
                  </Row>
                </Col>
                {/* Element 3 */}
                <Col lg={4} md={4}>
                  <Row
                    style={{ height: "50%" }}
                    className="pt-4 align-items-center"
                  >
                    <Col style={{ height: "100%" }}>
                      <Row style={{ height: "85%" }} className="mb-4">
                        <Col
                          style={{ height: "100%" }}
                          className="d-flex justify-content-center align-items-center"
                        >
                          <Image
                            src={page6_element_3}
                            style={{ height: "100%", width: "auto" }}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col className="d-flex justify-content-center">
                          <h3 className="font-d-din-bold">Estudio BH Viva</h3>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="d-flex justify-content-center align-items-center">
                      <span
                        style={{
                          backgroundColor: "#D4D5D5",
                          borderRadius: "20px",
                        }}
                        className="font-d-din-italic p-4 description"
                      >
                        <span className="bold-italic">Local:</span> Belo
                        Horizonte (Brasil).
                        <br /> <span className="bold-italic">
                          Intervenção:
                        </span>{" "}
                        O Programa Vila Viva tem ações urbanísticas, sociais e
                        jurídicas.
                        <br /> São obras de saneamento, habitação, erradicação
                        de áreas de risco, reestruturação do sistema viário, e
                        implantação de parques e equipamentos para a prática de
                        esportes e lazer.
                        <br />{" "}
                        <span className="bold-italic">
                          População estimada afetada pela intervenção:
                        </span>{" "}
                        50.000 pessoas.
                      </span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mobile" id="transformaciones-urbanas-mb">
        <Container fluid>
          <Row className="vh-100">
            <Col
              style={{
                backgroundImage: `url(${colombian_map})`,
                height: "100%",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
              className="page-6"
            >
              <h1 className="font-d-din-bold m-3 text-page-6">
                Conoce en este mapa las transformaciones urbanas que evaluamos
                en el proyecto SALURBAL
              </h1>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mobile">
        <Container fluid>
          <Row className="vh-100">
            <Col>
              <Row>
                <Col className="d-flex justify-content-center my-3">
                  <Image src={page6_element_1} className="image-page-6" />
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-center">
                  <h3 className="font-d-din-bold title-image-page-6">
                    Estudio RUCAS
                  </h3>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col sm={8} xs={8} className="d-flex justify-content-center">
                  <span
                    style={{
                      backgroundColor: "#D4D5D5",
                      borderRadius: "20px",
                      display: "inline-block",
                    }}
                    className="font-d-din-italic p-4 label-page-6"
                  >
                    <span className="bold-italic">Lugar:</span> Puente Alto,
                    Santiago y Viña del Mar (Chile).
                    <br />
                    <span className="bold-italic">Intervención:</span> Programa
                    de Regeneración de conjuntos de vivienda social formal
                    deteriorados.
                    <br />
                    <span className="bold-italic">
                      Población estimada afectada por la intervención:
                    </span>{" "}
                    3,834 personas en Puente Alto y 831 en Viña del Mar.
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mobile">
        <Container fluid>
          <Row className="vh-100">
            <Col>
              <Row>
                <Col className="d-flex justify-content-center my-3">
                  <Image src={page6_element_2} className="image-page-6" />
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-center">
                  <h3 className="font-d-din-bold title-image-page-6">
                    Estudio TrUST
                  </h3>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col sm={8} xs={8} className="d-flex justify-content-center">
                  <span
                    style={{
                      backgroundColor: "#D4D5D5",
                      borderRadius: "20px",
                      display: "inline-block",
                    }}
                    className="font-d-din-italic p-4 label-page-6"
                  >
                    <span className="bold-italic">Lugar:</span> Ciudad Bolívar,
                    Bogotá (Colombia).
                    <br />
                    <span className="bold-italic">Intervención:</span>{" "}
                    Implementación del sistema de transporte urbano por cable
                    aéreo TransMiCable y la transformación urbana del barrio.
                    <br />
                    <span className="bold-italic">
                      Población estimada afectada por la intervención:
                    </span>{" "}
                    748,000 personas.
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mobile">
        <Container fluid>
          <Row className="vh-100">
            <Col>
              <Row>
                <Col className="d-flex justify-content-center my-3">
                  <Image src={page6_element_3} className="image-page-6" />
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-center">
                  <h3 className="font-d-din-bold title-image-page-6">
                    Estudio RUCAS
                  </h3>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col sm={8} xs={8} className="d-flex justify-content-center">
                  <span
                    style={{
                      backgroundColor: "#D4D5D5",
                      borderRadius: "20px",
                      display: "inline-block",
                    }}
                    className="font-d-din-italic p-4 label-page-6"
                  >
                    <span className="bold-italic">Local:</span> Belo Horizonte
                    (Brasil).
                    <br /> <span className="bold-italic">Intervenção:</span> O
                    Programa Vila Viva tem ações urbanísticas, sociais e
                    jurídicas.
                    <br /> São obras de saneamento, habitação, erradicação de
                    áreas de risco, reestruturação do sistema viário, e
                    implantação de parques e equipamentos para a prática de
                    esportes e lazer.
                    <br />{" "}
                    <span className="bold-italic">
                      População estimada afetada pela intervenção:
                    </span>{" "}
                    50.000 pessoas.
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default PageSix;
