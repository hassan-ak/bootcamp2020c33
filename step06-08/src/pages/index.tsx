import React from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { Link } from "gatsby";

export default function home() {
  return (
    <div>
      <Layout>
        <Header text="This is a heading" subtext="The is the sub heading"></Header>
        <p>This is my home page</p>
        <p>Click <Link to="/desc/">here</Link> for component scoped css</p>
        <Link to="/my-dynamic-page/">Dynamically Created Page At Build Time</Link>
      </Layout>
    </div>
  )
}