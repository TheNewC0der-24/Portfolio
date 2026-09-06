/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { expertise, principles } from "../../Data/about";
import "./About.css";

const About = () => {
  useEffect(() => {
    document.title = "Bhavya Khurana | About";
  }, []);

  return (
    <main className="about-page">
      {/* Background */}
      <div className="about-page__grid" />
      <div className="about-page__glow about-page__glow--one" />
      <div className="about-page__glow about-page__glow--two" />

      {/* Hero */}
      <section className="about-hero">
        <div className="about-container">
          <motion.div
            className="about-hero__eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span />
            About me
          </motion.div>

          <div className="about-hero__layout">
            <motion.div
              className="about-hero__heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
            >
              <h1>
                Building things that are
                <span> useful.</span>
              </h1>
            </motion.div>

            <motion.div
              className="about-hero__intro"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
            >
              <p className="about-hero__lead">
                I'm Bhavya Khurana, a Software Engineer
                who enjoys turning complex problems into
                simple, reliable digital experiences.
              </p>

              <p>
                My work sits at the intersection of
                engineering, product thinking, and user
                experience. I build applications using
                modern web technologies while continuously
                exploring better ways to solve real-world
                problems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="about-story">
        <div className="about-container">
          <div className="about-section-label">
            <span>01</span>
            A little context
          </div>

          <div className="about-story__grid">
            <motion.div
              className="about-story__title"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>
                More than
                <br />
                <span>just code.</span>
              </h2>
            </motion.div>

            <motion.div
              className="about-story__content"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p>
                I like solving problems where technology
                meets people. Whether I'm building an
                application, integrating an API, improving
                an interface, or experimenting with a new
                idea, I try to understand the bigger
                picture before reaching for a solution.
              </p>

              <p>
                Over time, that mindset has shaped how I
                approach development — focusing not only
                on whether something works, but also on
                whether it is understandable, maintainable,
                and genuinely useful.
              </p>

              <p>
                I'm particularly interested in modern
                frontend engineering, application
                architecture, performance, and the
                possibilities of AI-powered products.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="about-expertise">
        <div className="about-container">
          <div className="about-section-label">
            <span>02</span>
            What I do
          </div>

          <div className="about-expertise__header">
            <h2>
              Things I like
              <br />
              <span>working on.</span>
            </h2>

            <p>
              A few areas where I spend most of my
              time building, learning, and experimenting.
            </p>
          </div>

          <div className="about-expertise__grid">
            {expertise.map((item, index) => (
              <motion.article
                className="about-expertise__card"
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="about-expertise__top">
                  <span className="about-expertise__number">
                    {item.number}
                  </span>

                  <span className="about-expertise__icon">
                    <item.icon />
                  </span>
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="about-expertise__tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="about-principles">
        <div className="about-container">
          <div className="about-section-label">
            <span>03</span>
            How I work
          </div>

          <div className="about-principles__grid">
            <h2>
              A few things
              <br />
              I believe in.
            </h2>

            <div className="about-principles__list">
              {principles.map((principle, index) => (
                <motion.div
                  className="about-principle"
                  key={principle}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span>
                    0{index + 1}
                  </span>

                  <p>{principle}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-container">
          <motion.div
            className="about-cta__card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span>What's next?</span>

            <h2>
              Let's create something
              <br />
              <em>worth building.</em>
            </h2>

            <p>
              Take a look at some of the things I've
              built or get in touch if you'd like to
              work together.
            </p>

            <div className="about-cta__actions">
              <Link
                to="/work"
                className="about-cta__button about-cta__button--primary"
              >
                View my work
                <FiArrowUpRight />
              </Link>

              <Link
                to="/contact"
                className="about-cta__button about-cta__button--secondary"
              >
                Get in touch
                <FiArrowUpRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;