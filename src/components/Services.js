import React from "react";
import { Card, Col, Row } from "antd";

function Services() {
  const services = [
    {
      title: "Bookkeeping",
      description1: "You need to have a greater focus on your business as an entrepreneur and it is time consuming. At MCP Accounting, we assist small to medium businesses with Bookkeeping services so that you have more time to concentrate on your main business activities and strategy development. Also, you can save the cost of hiring an inhouse bookkeeper with our outsourced bookkeeping options. (We are Xero and Quickbooks Certified Advisors) We do Monthly, Quarterly, and Yearly Bookkeeping, performing all aspects of Bookkeeping: Accounts Receivables, Accounts Payables, General Ledger, General Journal, Credit Card and Bank Account Reconciliation, Balance Sheet and Profit and Loss Statement Preparation. ",
      description2: "(We are Xero and Quickbooks Certified Advisors)",
      description3: "We do Monthly, Quarterly, and Yearly Bookkeeping, performing all aspects of Bookkeeping: Accounts Receivables, Accounts Payables, General Ledger, General Journal, Credit Card and Bank Account Reconciliation, Balance Sheet and Profit and Loss Statement Preparation. ",
      icon: "https://thumbs.dreamstime.com/b/finance-accounting-concept-business-woman-working-desk-using-calculator-to-calculate-office-finance-accounting-141544975.jpg",
    },
    {
      title: "Personal Taxes",
      description1: "MCP Accounting offers professional Personal Tax Preparation services. We review your tax status and assess the various tax credits and benefits available to that individual. We help you to reduce your tax liability or to maximize your tax return in accordance with Canadian Tax Regulations. ",
      icon: "https://thumbs.dreamstime.com/b/finance-accounting-concept-business-woman-working-desk-using-calculator-to-calculate-office-finance-accounting-141544975.jpg",
    },
    {
      title: "Corporate Taxes",
      description1: "Canadian Resident Corporations (including non-profit organization, Tax Exempt Corporations and Inactive Corporations) are required to file a T2 return at the end of their financial year, even if there are no tax payable. MCP Accounting offer professional Corporate Tax Preparation and filing services. We assess and review your corporate structure and help you to reduce your tax liability in accordance with Canadian Tax Regulations. ",
      icon: "https://thumbs.dreamstime.com/b/finance-accounting-concept-business-woman-working-desk-using-calculator-to-calculate-office-finance-accounting-141544975.jpg",
    },
    {
      title: "HST Reporting",
      description1: "Businesses that have registered for HST are entitled to claim sales taxes paid on purchases and services against sales taxes collected on their sales. We file your HST returns as per required timeline with CRA.",
      icon: "https://thumbs.dreamstime.com/b/finance-accounting-concept-business-woman-working-desk-using-calculator-to-calculate-office-finance-accounting-141544975.jpg",
    },
    {
      title: "Payroll",
      description1: "At MCP Accounting we do Payroll Processing for your employees, CRA Remittance Payments, T4 Generation for employees, CRA T4 Fiing, Preparation of Record of Employment (ROE), WSIB & Employer Health Tax filing.",
      icon: "https://thumbs.dreamstime.com/b/finance-accounting-concept-business-woman-working-desk-using-calculator-to-calculate-office-finance-accounting-141544975.jpg",
    },
  ];

  return (
    <div style={{ padding: "50px" }}>
      <Row gutter={[16, 16]}>
        {services.map((service) => (
          <Col xs={24} sm={12} md={8} key={service.title}>
            <Card title={service.title} bordered={false}>
              <p>{service.description1}</p>
              <p>{service.description2}</p>
              <p>{service.description3}</p>
              <img src={service.icon} alt={service.title} style={{width:"100%", height:"auto"}} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Services;

