import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import dayjs from "dayjs";
import axios from "axios";
import randoms from "generate-random-data";

import "./table.css";



const TableComponent = () => {
  const [Items, setItems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await axios.get(
          `https://62f4f02c535c0c50e765fa13.mockapi.io/api/table/table`
        );
        setItems(res.data);
      } catch (e) {}
    };
    getItems();
  }, []);
  const [rand, setRand] = useState(randoms.int(0, 43))
  const [rand1, setRand1] = useState(rand+7)
  //   useEffect(() => {
  //     if (random2 - random1 === 7) {
  //       return [random2, random1];
  //     } else {
  //       random1 = randoms.int(0, 50);
  //       random2 = randoms.int(0, 50);
  //     }
  //     return [random2, random1];
  //   }, [random2, random1]);

  return (
    <Container className="clutch">
      {Items.slice(rand, rand1).map((data) => (
        <Container className="clutch">
          <Row className="clutch">
            <Col className="row-like">
              <span className="bold">#{data.id}</span>
              <span className="start">{data.name}</span>
              <span>{data.money}$</span>
              <span>{dayjs(data.createdAt).format("DD.MM.YYYY")}</span>
              <span>
                Multiplier:{" "}
                <span className="purple bold">x{data.multiplier}</span>
              </span>
              <span className="purple bold">
                {data.money * data.multiplier}$
              </span>
            </Col>
          </Row>
        </Container>
      ))}
    </Container>
  );
};

export default TableComponent;
