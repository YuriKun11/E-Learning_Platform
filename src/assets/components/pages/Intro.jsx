import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';

function Intro(){

    const [selectedLesson, setSelectedLesson] = useState('Introduction');

    const handleLessonClick = (lesson) => {
        setSelectedLesson(lesson);
    };

    // Temporary removal of conditional rendering for debugging
    return(
        <Container fluid>
            <Row>
                <Col xs={12} lg={4}>
                    <div className="lessons-wrapp">
                        <h4>Lessons</h4>
                        <div className="lessons-nav">
                            <div
                                className={`lessons-nav-items ${
                                    selectedLesson === 'Introduction' ? 'highlight' : ''
                                }`}
                                onClick={() => handleLessonClick('Introduction')}
                            >
                                <p>Introduction</p>
                            </div>
                            <div
                                className={`lessons-nav-items ${
                                    selectedLesson === 'Variables' ? 'highlight' : ''
                                }`}
                                onClick={() => handleLessonClick('Variables')}
                            >
                                <p>Variables</p>
                            </div>
                            <div
                                className={`lessons-nav-items ${
                                    selectedLesson === 'Data Types' ? 'highlight' : ''
                                }`}
                                onClick={() => handleLessonClick('Data Types')}
                            >
                                <p>Data Types</p>
                            </div>
                            <div
                                className={`lessons-nav-items ${
                                    selectedLesson === 'Loops' ? 'highlight' : ''
                                }`}
                                onClick={() => handleLessonClick('Loops')}
                            >
                                <p>Loops</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} lg={8}>
                    <div className="youtube-wrap container-fluid">
                        {selectedLesson === 'Introduction' && (
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/CgkZ7MvWUAA?si=sKxI4T8ptNWO3viH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    )}
                        {selectedLesson === 'Variables' && (
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/i0rbmzyaVaM?si=RjBGvoRNOOAVW4o8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    )}

                    </div>
                </Col>
            </Row>

            <div className="lesson-title">
                <h1 style={{color: 'gold'}}>React JS</h1>
            </div>
        </Container>
    );
}

export default Intro;
