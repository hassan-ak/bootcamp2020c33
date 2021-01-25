import React from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { Link } from "gatsby";
import Button from '@material-ui/core/Button';

export default function home() {
  return (
    <div>
      <Layout>
        <Header text="This is a heading" subtext="The is the sub heading"></Header>
        <p>This is my home page</p>
        <p>Click <Link to="/desc/">here</Link> for component scoped css</p>
        <Link to="/my-dynamic-page/">Dynamically Created Page At Build Time</Link>
        <br />
        <Link to="/app/page1/">Go to Client Page 1</Link>
        <br/>
        <Button variant="contained" color="primary">
          Hello from Material UI
        </Button>
      </Layout>
    </div>
  )
}