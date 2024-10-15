import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import prophileImage from '../components/profil.jpg'; 
import './Style.css';  

const Home = () => {
  return (
    <div className="homepage">
    <header className="text-center py-6 bg-gray-100">
      <h4 className="text-2xl font-semibold mb-3">Welcome to My Academic Website</h4>
      <p className="text-xl m-2 text-gray-600" id="description">
        <strong className="mx-3">Fethi Ben Belgacem:</strong>
        As a Professor of Mathematics at the University of Monastir, I have been deeply engaged in both the education and research facets of mathematics since 2003. My role involves developing and delivering advanced mathematical coursework, mentoring students, and spearheading research initiatives within the Department of Mathematics. My work is dedicated to enhancing the quality of mathematical education and contributing to significant research advancements in the field.
      </p>
    </header>
      <main>
        <Container>
          <Row>
          <Col md={3}>
            <img src={prophileImage} alt="Professor Fethi Ben Belgacem" className="img-fluid rounded w-64 h-auto" />
          </Col>
            <Col md={9}>
              <h4 className="text-2xl font-bold mb-4">About this platform :</h4>
              <p>Through my close interactions with students, I recognized the importance of offering a comprehensive platform that facilitates access to course materials, practice exercises, and exam preparation resources.</p>
              <p>Here, you'll find resources tailored to your academic needs.</p>
              
                <div className="d-flex flex-row">              
                  <Col md={4}>
                    <Card>
                      <Card.Body>
                        <Card.Title>Courses</Card.Title>
                        <Card.Text>Explore a variety of courses according to your level.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card>
                      <Card.Body>
                        <Card.Title>Exercises</Card.Title>
                        <Card.Text>Practice exercises to reinforce learning.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card>
                      <Card.Body>
                        <Card.Title>Exams</Card.Title>
                        <Card.Text>Prepare for exams with relevant materials.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </div>
            </Col>
          </Row>

          {/* Additional Sections */}
          <section className="mt-4 mb-3 mx-2">
            <h2 className="text-2xl font-bold mb-2">Research</h2>
            <p className="text-lg font-semibold">Learn about my research interests and publications, you can find all my articles here:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

            <aside className="bg-gray-100 rounded-lg shadow-md border border-gray-300 custom-padding">
                <h6 className="text-lg font-bold">
                    Convergent approaches for the dirichlet monge-ampère problem
                </h6>
                <p className="mt-2 text-gray-700">In this article, I work with Imen Hajri. We introduce and study three numerical methods for the Dirichlet Monge Ampère equation in two dimensions.</p>
                <a href="https://www.researchgate.net/publication/377047201_CONVERGENT_APPROACHES_FOR_THE_DIRICHLET_MONGE-AMPERE_PROBLEM" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 block">Read more</a>
              </aside>

              <aside className="bg-gray-100 rounded-lg shadow-md border border-gray-300 custom-padding">
                <h6 className="text-lg font-bold">
                    Convergence of Numerical Approximations to Non-linear Continuity Equations with Rough Force Fields
                </h6>
                <p className="mt-2 text-gray-700">With Pierre-Emmanuel Jabin from University of Maryland ,we prove quantitative regularity estimates for the solutions to non-linear continuity equations and their discretized numerical approximations on Cartesian grids when advected by a rough force field. This allow us to recover the known optimal regularity for linear transport equations ...</p>
                <a href="https://www.researchgate.net/publication/311222832_Convergence_of_Numerical_Approximations_to_Non-linear_Continuity_Equations_with_Rough_Force_Fields" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 block">Read more</a>
              </aside>

              <aside className="bg-gray-100 rounded-lg shadow-md border border-gray-300 custom-padding">
                <h6 className="text-lg font-bold">
                Optimisation approach for the Monge-Ampere equation
                </h6>
                <p className="mt-2 text-gray-700">This paper studies the numerical approximation of solution of the Dirichlet problem for the fully nonlinear Monge-Ampere equation. In this approach, we take the advantage of reformulation the Monge-Ampere problem as an optimization problem, to which we associate a well defined functional whose minimum provides us with the solution to the Monge-Ampe...</p>
                <a href="https://www.researchgate.net/publication/311222832_Convergence_of_Numerical_Approximations_to_Non-linear_Continuity_Equations_with_Rough_Force_Fields" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 block">Read more</a>
              </aside>

              <aside className="bg-gray-100 rounded-lg shadow-md border border-gray-300 custom-padding">
                <h6 className="text-lg font-bold">
                    Hydrodynamic limit of the Boltzmann-Monge-Ampere system
                </h6>
                <p className="mt-2 text-gray-700">In this paper we investigate the hydrodynamic limit of the Boltzmann-Monge-Ampere system in the so-called quasineutral regime. We prove the convergence of the Boltzmann-Monge-Ampere system to the Euler equation by using the relative entropy method.</p>
                <a href="https://www.researchgate.net/publication/312194341_Hydrodynamic_limit_of_the_Boltzmann-Monge-Ampere_system" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 block">Read more</a>
              </aside>

              <aside className="bg-gray-100 rounded-lg shadow-md border border-gray-300 custom-padding">
                <h6 className="text-lg font-bold">
                 From Monge-Ampere-Boltzman to Euler Equations
                </h6>
                <p className="mt-2 text-gray-700">This paper concerns with the convergence of the Monge-Ampere-Boltzman system to the in compressible Euler Equations in the quasi-neutral regime.</p>
                <a href="https://www.researchgate.net/publication/317136341_From_Monge-Ampere-Boltzman_to_Euler_Equations" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 block">Read more</a>
              </aside>

              <aside className="bg-gray-100 rounded-lg shadow-md border border-gray-300 custom-padding">
                <h6 className="text-lg font-bold">
                A dynamical systems approach for the contact-line singularity in thin-film flows
                </h6>
                <p className="mt-2 text-gray-700">We are interested in a complete characterization of the contact-line singularity of thin-film flows for zero and nonzero contact angles. By treating the model problem of source-type self-similar solutions, we demonstrate that this singularity can be understood by the study of invariant manifolds of a suitable dynamical system...</p>
                <a href="https://www.researchgate.net/publication/297428587_A_dynamical_systems_approach_for_the_contact-line_singularity_in_thin-film_flows" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 block">Read more</a>
              </aside>


              <aside className="bg-gray-100 rounded-lg shadow-md border border-gray-300 custom-padding">
                <h6 className="text-lg font-bold">
                  Compactness for nonlinear continuity equations
                </h6>
                <p className="mt-2 text-gray-700">We prove compactness and hence existence for solutions to a class of nonlinear transport equations. The corresponding models combine the features of linear transport equations and scalar conservation laws. We introduce a new method which gives quantitative compactness estimates compatible with both frameworks.</p>
                <a href="https://www.researchgate.net/publication/256756107_Compactness_for_nonlinear_continuity_equations" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 block">Read more</a>
              </aside>

              <aside className="bg-gray-100 rounded-lg shadow-md border border-gray-300 custom-padding">
                <h6 className="text-lg font-bold">
                Compactness for nonlinear transport equations
                </h6>
                <p className="mt-2 text-gray-700">We prove compactness and hence existence for solutions to a class of nonlinear transport equations. The corresponding models combine the features of linear transport equations and scalar conservation laws. We introduce a new method which gives quantitative compactness estimates compatible with both frameworks.</p>
                <a href="https://www.researchgate.net/publication/51932304_Compactness_for_nonlinear_transport_equations" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 block">Read more</a>
              </aside>


              <aside className="bg-gray-100 rounded-lg shadow-md border border-gray-300 custom-padding">
                <h6 className="text-lg font-bold">
                Numerical solution of Monge-Ampère equation
                </h6>
                <p className="mt-2 text-gray-700">We show that the numerical solution, of the fully non linear Monge-Ampre equation in two dimension, can be obtained by resolving an optimisation problem implying the resolution of a quasilinear Dirichlet problem. A gradient method is used. We give a no classical method to compute the gradient.</p>
                <a href="https://www.researchgate.net/publication/266918468_Numerical_solution_of_Monge-Ampere_equation" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 block">Read more</a>
              </aside>

              <aside className="bg-gray-100 rounded-lg shadow-md border border-gray-300 custom-padding">
                <h6 className="text-lg font-bold">
                Computation method for the Monge-Ampère equation
                </h6>
                <p className="mt-2 text-gray-700">We show that the numerical solution of the Monge-Ampère equation in two dimension, can be obtained by resolving an optimization problem implying the resolution of a Poisson problem, and we give a method to compute the gradient of the functional.</p>
                <a href="https://www.researchgate.net/publication/266996949_Computation_method_for_the_Monge-Ampere_equation" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 block">Read more</a>
              </aside>

            </div>
          </section>
        </Container>
      </main>
    </div>
  );
};

export default Home;
