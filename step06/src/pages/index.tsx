import { Link } from 'gatsby';
import React from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Button from '@material-ui/core/Button';

export default () => {
    return (
        <div>
            <Layout>
                <Header text="This is a heading" subtext="The is the sub heading"></Header>
                <p>This is my home page</p>
                <Link to="/my-dynamic-page/">
                    <Button variant="contained" color="primary">
                        Dynamically Created Page At Build Time
                    </Button>
                </Link>
                <br/>
                <Link to="/app/page1/">Go to Client Page 1</Link>
            </Layout>
        </div>
    );
}