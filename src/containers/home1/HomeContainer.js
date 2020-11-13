import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ArticleLeft from '../../components/ArticleLeft/ArticleLeft'
import ArticleLeftRight from '../../components/ArticleLeftRight/ArticleLeftRight'
import StayConnect from '../../components/StayConnect/StayConnect'


const HomeContainer = () => {  

  return (
      <div className="wrapper">

        <section className="pre-login-banner">
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <div className="text-box">
                                <h1>Future Now Motivation is a social community</h1>
                                <p>where everyone can share their stories about their issues for others to read,
                                    learn, engage and connect.</p>
                                <a href="/signup">REGISTER NOW</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
        </section>
        <section className="article-sec">
                <Container fluid>
                    <Row>
                        <Col xl={9} lg={8} md={12}>
                            <ArticleLeft/>                            
                        </Col>
                        <Col xl={3} lg={4} md={12}>
                            <ArticleLeftRight/>
                        </Col> 
                    </Row> 
                </Container>
        </section>

        <StayConnect/>

      </div>
  )
}
export default HomeContainer