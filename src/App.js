import React from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import {  Menu } from "antd";
// import {HomeOutlined, InfoCircleOutlined,CustomerServiceOutlined,ContactsOutlined } from "@ant-design/icons";
import Contact from "./components/Contact";
import Services from "./components/Services";
import { Footer, Header } from "antd/es/layout/layout";
import Image2 from "./images/logo.png";

function App() {
  return (
    <div>
      <div>
        <NavigationBar />
        <Content />
      </div>
      <Footer className="footer">MCP Accounting</Footer>
    </div>
  );
}

function NavigationBar() {
  const navigate = useNavigate();
  return (
      <Header className="header">
        <div className="logo">
        <img className="logo_img" alt="" src={Image2} />
          MCP Accounting
        </div>
        <Menu className="menu"
          onClick={({ key }) => {
            navigate(key);
          }}
          mode="horizontal"
          title="MCP Accounting"
          items={[
            {
              label: "Home",
              key: "/",
              // icon: <HomeOutlined />
            },
            {
              label: "About",
              key: "/about",
              // icon:<InfoCircleOutlined />
            },
            {
              label: "Services",
              key: "/services",
              // icon:<CustomerServiceOutlined />
            },
            {
              label: "Contact",
              key: "/contact",
              // icon:<ContactsOutlined />
            },
          ]}
        ></Menu>
      </Header>
  );
}

function Content() {
  return (
    <div className="site-layout-content" style={{ margin: "30px 40px" }}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/services" element={<Services />}></Route>
      </Routes>
    </div>
  );
}

export default App;
