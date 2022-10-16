import React from "react";
import { Router } from "wouter";

import "./styles/styles.css";
import styles from './styles/Home.module.css'

import PageRouter from "./components/router.jsx";

import Seo from './components/seo.jsx';

export default function Home() {
  return (
    <Router>
      <Seo />
      <main role="main" className="wrapper">
        <div className="content">
          <PageRouter />
        </div>
      </main>
      <footer className={styles.footer}>
              &copy;
              {new Date().getFullYear()} {' '}
              Raul Rodrigues
          </footer>
    </Router>
  );
}
