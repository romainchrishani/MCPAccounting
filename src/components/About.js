import React from "react";
import { Space, Card, Typography, Row, Col } from "antd";
import { CheckOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

function About(props) {
  return (
    <Space
      direction="vertical"
      size="middle"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Card
        title="About Us"
        style={{
          width: "90%",
          maxWidth: 800,
          textAlign: "center",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: 8,
          padding: "24px 16px",
        }}
      >
        <Title level={3}>Our Experience</Title>
        <Paragraph style={{ marginBottom: 24 }}>
          With over 10 years of experience in the industry, we have helped
          businesses of all sizes and industries achieve their goals. Our team
          of experts is highly skilled in the latest technologies and
          strategies, and we are constantly staying up-to-date with the latest
          trends to provide our clients with the best solutions.
        </Paragraph>

        <Title level={3}>Why Choose Us?</Title>
        <Row gutter={[16, 16]} justify="center" align="middle">
          <Col xs={24} sm={8} md={8} lg={8}>
            <CheckOutlined style={{ fontSize: 24, color: "#1890ff" }} />
            <Paragraph strong style={{ marginBottom: 0 }}>
              High-Quality Services
            </Paragraph>
            <Paragraph type="secondary">
              We are committed to providing our clients with the highest quality
              services and solutions.
            </Paragraph>
          </Col>
          <Col xs={24} sm={8} md={8} lg={8}>
            <CheckOutlined style={{ fontSize: 24, color: "#1890ff" }} />
            <Paragraph strong style={{ marginBottom: 0 }}>
              Competitive Pricing
            </Paragraph>
            <Paragraph type="secondary">
              We offer competitive pricing for our services without
              compromising on quality.
            </Paragraph>
          </Col>
          <Col xs={24} sm={8} md={8} lg={8}>
            <CheckOutlined style={{ fontSize: 24, color: "#1890ff" }} />
            <Paragraph strong style={{ marginBottom: 0 }}>
              Dedicated Team
            </Paragraph>
            <Paragraph type="secondary">
              Our team is dedicated to helping our clients achieve their goals,
              and we are always available to answer any questions or concerns.
            </Paragraph>
          </Col>
        </Row>

        <Title level={3}>Our Team</Title>
        <Paragraph>
          Our team is made up of highly skilled professionals with a passion for
          technology and innovation. We believe in working together to achieve
          our goals, and we are always striving to improve and learn.
        </Paragraph>
      </Card>
    </Space>
  );
}

export default About;
