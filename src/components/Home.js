import React, { useState } from "react";
import { Divider } from "antd";
import { Carousel } from "antd";
import { Card, Row, Col, Modal } from "antd";
import "./home.css";

function Home() {
  const [modalVisible1, setModalVisible1] = useState(false);
  const handleCardClick1 = () => {
    setModalVisible1(true);
  };

  const [modalVisible2, setModalVisible2] = useState(false);
  const handleCardClick2 = () => {
    setModalVisible2(true);
  };

  const [modalVisible3, setModalVisible3] = useState(false);
  const handleCardClick3 = () => {
    setModalVisible3(true);
  };
  const [modalVisible4, setModalVisible4] = useState(false);
  const handleCardClick4 = () => {
    setModalVisible4(true);
  };
  const [modalVisible5, setModalVisible5] = useState(false);
  const handleCardClick5 = () => {
    setModalVisible5(true);
  };

  const { Meta } = Card;
  const contentStyle = {
    height: "500px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <>
      <Divider plain></Divider>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <Divider orientation="left" plain>
        {/* Left Text */}
      </Divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
      <Divider>What We Do</Divider>
      <Row
        gutter={[16, 16]}
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            style={{
              width: "100%",
              position: "relative",
              zIndex: 2,
            }}
            cover={
              <img
                alt="example"
                src="https://thumbs.dreamstime.com/b/finance-accounting-concept-business-woman-working-desk-using-calculator-to-calculate-office-finance-accounting-141544975.jpg"
              />
            }
            onClick={handleCardClick1}
          >
            <Meta title="Bookkeeping" />
          </Card>
          <Modal
            title="Bookkeeping"
            visible={modalVisible1}
            onCancel={() => setModalVisible1(false)}
            footer={null}
          >
            <p>
              You need to have a greater focus on your business as an
              entrepreneur and it is time consuming. At MCP Accounting, we
              assist small to medium businesses with Bookkeeping services so
              that you have more time to concentrate on your main business
              activities and strategy development. Also, you can save the cost
              of hiring an inhouse bookkeeper with our outsourced bookkeeping
              options. (We are Xero and Quickbooks Certified Advisors) We do
              Monthly, Quarterly, and Yearly Bookkeeping, performing all aspects
              of Bookkeeping: Accounts Receivables, Accounts Payables, General
              Ledger, General Journal, Credit Card and Bank Account
              Reconciliation, Balance Sheet and Profit and Loss Statement
              Preparation.
            </p>
            <p>(We are Xero and Quickbooks Certified Advisors)</p>
            <p>
              We do Monthly, Quarterly, and Yearly Bookkeeping, performing all
              aspects of Bookkeeping: Accounts Receivables, Accounts Payables,
              General Ledger, General Journal, Credit Card and Bank Account
              Reconciliation, Balance Sheet and Profit and Loss Statement
              Preparation.
            </p>
            <img
              src="https://thumbs.dreamstime.com/b/finance-accounting-concept-business-woman-working-desk-using-calculator-to-calculate-office-finance-accounting-141544975.jpg"
              alt="bookkeeping"
              style={{ width: "100%", height: "auto" }}
            />
          </Modal>
        </Col>

        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            style={{
              width: "100%",
              position: "relative",
              zIndex: 2,
            }}
            cover={
              <img
                alt="example"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZwOxoEVTnMaCnteTTEYU0im1e1nOtis2UAw&usqp=CAU"
              />
            }
            onClick={handleCardClick2}
          >
            <Meta
              title="Personal Taxes"
              // description="www.MCP.com"
            />
          </Card>
          <Modal
            title="Personal Taxes"
            visible={modalVisible2}
            onCancel={() => setModalVisible2(false)}
            footer={null}
          >
            <p>
              MCP Accounting offers professional Personal Tax Preparation
              services. We review your tax status and assess the various tax
              credits and benefits available to that individual. We help you to
              reduce your tax liability or to maximize your tax return in
              accordance with Canadian Tax Regulations.
            </p>
            <img
              src="https://thumbs.dreamstime.com/b/finance-accounting-concept-business-woman-working-desk-using-calculator-to-calculate-office-finance-accounting-141544975.jpg"
              alt="bookkeeping"
              style={{ width: "100%", height: "auto" }}
            />
          </Modal>
        </Col>

        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            style={{
              width: "100%",
              position: "relative",
              zIndex: 2,
            }}
            cover={
              <img
                alt="example"
                src="https://www.mcgill.ca/desautels/files/desautels/styles/fullwidth_breakpoints_theme_moriarty_small_1x/public/areas-960x450-accounting.jpg?itok=JdP7knWx&timestamp=1671231457"
              />
            }
            onClick={handleCardClick3}
          >
            <Meta title="Corporate Taxes" />
          </Card>
          <Modal
            title="Corporate Taxes"
            visible={modalVisible3}
            onCancel={() => setModalVisible3(false)}
            footer={null}
          >
            <p>
              Canadian Resident Corporations (including non-profit organization,
              Tax Exempt Corporations and Inactive Corporations) are required to
              file a T2 return at the end of their financial year, even if there
              are no tax payable. MCP Accounting offer professional Corporate
              Tax Preparation and filing services. We assess and review your
              corporate structure and help you to reduce your tax liability in
              accordance with Canadian Tax Regulations.
            </p>
            <img
              src="https://thumbs.dreamstime.com/b/finance-accounting-concept-business-woman-working-desk-using-calculator-to-calculate-office-finance-accounting-141544975.jpg"
              alt="bookkeeping"
              style={{ width: "100%", height: "auto" }}
            />
          </Modal>
        </Col>

        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            style={{
              width: "100%",
              position: "relative",
              zIndex: 2,
            }}
            cover={
              <img
                alt="example"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgNLZCKLGqXh-UpvsZpbzLNeon54YpYiTjGA&usqp=CAU"
              />
            }
            onClick={handleCardClick4}
          >
            <Meta title="HST Reporting" />
          </Card>
          <Modal
            title="HST Reporting"
            visible={modalVisible4}
            onCancel={() => setModalVisible4(false)}
            footer={null}
          >
            <p>
              Businesses that have registered for HST are entitled to claim
              sales taxes paid on purchases and services against sales taxes
              collected on their sales. We file your HST returns as per required
              timeline with CRA.
            </p>
            <img
              src="https://thumbs.dreamstime.com/b/finance-accounting-concept-business-woman-working-desk-using-calculator-to-calculate-office-finance-accounting-141544975.jpg"
              alt="bookkeeping"
              style={{ width: "100%", height: "auto" }}
            />
          </Modal>
        </Col>

        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            style={{
              width: "100%",
              position: "relative",
              zIndex: 2,
            }}
            cover={
              <img
                alt="example"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgNLZCKLGqXh-UpvsZpbzLNeon54YpYiTjGA&usqp=CAU"
              />
            }
            onClick={handleCardClick5}
          >
            <Meta title="Payroll" />
          </Card>
          <Modal
            title="Payroll"
            visible={modalVisible5}
            onCancel={() => setModalVisible5(false)}
            footer={null}
          >
            <p>
              At MCP Accounting we do Payroll Processing for your employees, CRA
              Remittance Payments, T4 Generation for employees, CRA T4 Fiing,
              Preparation of Record of Employment (ROE), WSIB & Employer Health
              Tax filing.
            </p>
            <img
              src="https://thumbs.dreamstime.com/b/finance-accounting-concept-business-woman-working-desk-using-calculator-to-calculate-office-finance-accounting-141544975.jpg"
              alt="bookkeeping"
              style={{ width: "100%", height: "auto" }}
            />
          </Modal>
        </Col>
      </Row>
    </>
  );
}

export default Home;
