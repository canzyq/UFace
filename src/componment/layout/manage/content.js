import React from 'react';
import Container from 'rsuite/Container';
import Header from 'rsuite/Header';
import Content from 'rsuite/Content';
import Footer from 'rsuite/Footer';
import Sidebar from 'rsuite/Sidebar';

const UContent = () => {
    return (
        <Container>
            <Header>Header</Header>
            <Container>
                <Sidebar>Sidebar</Sidebar>
                <Content>Content</Content>
            </Container>
            <Footer>Footer</Footer>
        </Container>
    );
};

export default UContent;
