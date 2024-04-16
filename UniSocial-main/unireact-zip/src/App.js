import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/header";
import Post from "./components/Post/post";
import { Button, Navbar, Nav, Container, Row, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faUser, faCog, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { PostProvider } from "./context/PostContext";

function LoginPage({ handleLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleLogin(username, password);
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={handleUsernameChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

function FeedPage({ posts }) {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={8}>
          <div className="feed">
            {posts.map((post) => (
              <div key={post.id} className="post">
                <h5>{post.author}</h5>
                <p>{post.content}</p>
                <div className="post-actions">
                  <Button variant="link" className="action-button"><FontAwesomeIcon icon={faHeart} /> {post.likes}</Button>
                  <Button variant="link" className="action-button"><FontAwesomeIcon icon={faComment} /> {post.comments}</Button>
                </div>
              </div>
            ))}
          </div>
        </Col>
        <Col md={4}>
          <div className="sidebar">
            <Button
              variant="primary"
              className="new-post-button"
              as={Link}
              to="/new-post"
            >
              <FontAwesomeIcon icon={faPlusSquare} className="mr-2" />
              Novo Post
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Para controle de login
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "user1",
      content: "Conteúdo do post 1",
      likes: 10,
      comments: 5
    },
    {
      id: 2,
      author: "user2",
      content: "Conteúdo do post 2",
      likes: 15,
      comments: 7
    },
    {
      id: 3,
      author: "user3",
      content: "Conteúdo do post 3",
      likes: 20,
      comments: 12
    }
  ]);

  const handleLogin = (username, password) => {
    // Lógica de login
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Lógica de logout
    setIsLoggedIn(false);
  };

  const handleCreatePost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <PostProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              {isLoggedIn ? <Redirect to="/feed" /> : <LoginPage handleLogin={handleLogin} />}
            </Route>
            <Route path="/feed">
              {isLoggedIn ? (
                <>
                  <Header />
                  <FeedPage posts={posts} />
                </>
              ) : (
                <Redirect to="/" />
              )}
            </Route>
          </Switch>
        </Router>
        <Post showModal={false} handleClose={() => {}} handleCreatePost={handleCreatePost} />
      </div>
    </PostProvider>
  );
}

export default App;
