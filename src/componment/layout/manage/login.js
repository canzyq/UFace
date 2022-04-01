import React from 'react';
import Container from 'rsuite/Container';
import FlexboxGrid from 'rsuite/FlexboxGrid';
import Content from 'rsuite/Content';
import Footer from 'rsuite/Footer';
import Form from 'rsuite/Form';
import Panel from 'rsuite/Panel';
import Navbar from 'rsuite/Navbar';
import ButtonToolbar from 'rsuite/ButtonToolbar';
import Button from 'rsuite/Button';
import Header from 'rsuite/Header';
import locale from 'ulocale/zh';

const ULogin = () => {
    return (
        <div className="login-page">
        <Container>
            <Header>
                <Navbar appearance="inverse">
                    <Navbar.Brand href="#">
                        <h3>{locale.System.Name}</h3>
                    </Navbar.Brand>
                </Navbar>
            </Header>
            <Content>
                <FlexboxGrid justify="center" align="center">
                    <FlexboxGrid.Item>
                        <Panel header={<h3>{locale.Login.Login}</h3>} bordered shaded>
                            <Form fluid>
                                <Form.Group>
                                    <Form.ControlLabel>{locale.Login.Username}:</Form.ControlLabel>
                                    <Form.Control placeholder={locale.Login.UserRule} name="name" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.ControlLabel>{locale.Login.Password}:</Form.ControlLabel>
                                    <Form.Control name="password" type="password" autoComplete="off" placeholder={locale.Login.PassRule}/>
                                </Form.Group>
                                <Form.Group>
                                    <ButtonToolbar>
                                        <Button appearance="primary">{locale.Login.Log_in}</Button>
                                        <Button appearance="link">{locale.Login.Forgot_Pass}</Button>
                                    </ButtonToolbar>
                                </Form.Group>
                            </Form>
                        </Panel>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </Content>
            <Footer>Footer</Footer>
        </Container>
        </div>
    );
};

export default ULogin;
