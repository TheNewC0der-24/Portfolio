/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import "./Interest.css";
import { interests } from "../../Data/interestData";

const Interest = () => {
  document.title = "Bhavya Khurana | Interests";

  return (
    <main className="interest-page">
      <section className="interest-hero">
        <div className="interest-container">
          <motion.div
            className="interest-hero__eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="interest-hero__line" />
            <span>Beyond code</span>
          </motion.div>

          <motion.h1
            className="interest-hero__title"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Things
            <br />
            <span>I enjoy.</span>
          </motion.h1>

          <motion.div
            className="interest-hero__bottom"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >
            <p>
              A few things that keep me curious, creative and
              grounded outside of everyday engineering work.
            </p>

            <div className="interest-hero__meta">
              <span>01</span>
              <span>Personal interests</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="interest-quote">
        <div className="interest-container">
          <motion.div
            className="interest-quote__content"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{ duration: 0.6 }}
          >
            <span className="interest-quote__mark">“</span>

            <blockquote>
              Passion isn't always about doing something big.
              Sometimes it's about doing small things with
              intention.
            </blockquote>

            <span className="interest-quote__caption">
              Curiosity over routine.
            </span>
          </motion.div>
        </div>
      </section>

      <section className="interest-content">
        <div className="interest-container">
          <div className="interest-section-heading">
            <span>02</span>

            <div>
              <p>What keeps me curious</p>
              <h2>A little more about me.</h2>
            </div>
          </div>

          <div className="interest-list">
            {interests.map((interest, index) => {
              const Icon = interest.icon;

              return (
                <motion.article
                  className="interest-item"
                  key={interest.number}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                >
                  <div className="interest-item__number">
                    {interest.number}
                  </div>

                  <div className="interest-item__icon">
                    <Icon />
                  </div>

                  <div className="interest-item__content">
                    <h3>{interest.title}</h3>

                    <p>{interest.description}</p>

                    <div className="interest-item__tags">
                      {interest.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="interest-item__arrow">
                    <FiArrowUpRight />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="interest-closing">
        <div className="interest-container">
          <motion.div
            className="interest-closing__content"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{ duration: 0.6 }}
          >
            <span>03 / Keep exploring</span>

            <h2>
              Curiosity makes
              <br />
              <em>better builders.</em>
            </h2>

            <p>
              The things I explore outside of work often find
              their way back into how I think, create and solve
              problems.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Interest;