import React, { useEffect, props } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {Container, Row, Col, Nav,Tabs, Tab, Modal, Button} from 'react-bootstrap'
import {
  exampleDataSelector,
  fetchingSelector,
} from '../selectors/exampleSelector'
import { item } from '../actions'
import { LoadingAnimation } from '../components/LoadingAnimation'
import {Header} from '../components/Header'
import {StoryPageArticleLeft} from '../components/StoryPageArticleLeft'
import {ArticleLeftRight} from '../components/ArticleLeftRight'
import {StayConnect} from '../components/StayConnect'
import {Footer} from '../components/Footer'


export const StoryPageContainer = () => {
  const dispatch = useDispatch()
  const exampleData = useSelector(exampleDataSelector)
  const fetching = useSelector(fetchingSelector)

  useEffect(() => {
    dispatch(item.requestOne('1'))
  }, [dispatch]) 
  
  

  return (
      <div className="wrapper">
        <Header />

        <section className="article-sec">
                <Container fluid>
                    <Row>
                        <Col xl={9} lg={8} md={12}>
                            <StoryPageArticleLeft/>                            
                        </Col>
                        <Col xl={3} lg={4} md={12}>
                            <ArticleLeftRight/>
                        </Col> 
                    </Row> 
                </Container>
        </section>

        <StayConnect/>
        <Footer/>

      </div>
  )
}
