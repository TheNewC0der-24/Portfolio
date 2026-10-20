/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { FaLinkedinIn } from "react-icons/fa";
import { FiArrowDownRight, FiArrowUpRight, FiCheck, FiGithub, FiMail, FiSend } from "react-icons/fi";
import "./Contact.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const contactOptions = [
    { value: "just chatting", label: "Just chatting" },
    { value: "web design", label: "Web / Product" },
    { value: "questions", label: "A question" },
    { value: "collaboration", label: "Collaboration" },
    { value: "opinion", label: "Feedback" },
    { value: "others", label: "Something else" },
];

const socialLinks = [
    {
        label: "GitHub",
        detail: "Explore my work",
        href: "https://github.com/TheNewC0der-24",
        icon: FiGithub,
    },
    {
        label: "LinkedIn",
        detail: "Let's connect",
        href: "https://www.linkedin.com/in/bhavya-khurana/",
        icon: FaLinkedinIn,
    }
];

const validationSchema = Yup.object({
    fname: Yup.string()
        .trim()
        .required("Please enter your first name.")
        .max(60, "Please keep your name under 60 characters."),

    lname: Yup.string()
        .trim()
        .required("Please enter your last name.")
        .max(60, "Please keep your name under 60 characters."),

    email: Yup.string()
        .trim()
        .email("Enter a valid email address.")
        .required("Your email is required.")
        .max(254, "Please enter a shorter email address."),

    subject: Yup.string()
        .oneOf(contactOptions.map((option) => option.value))
        .required("Please choose a topic."),

    message: Yup.string()
        .trim()
        .required("Tell me a little about what you have in mind.")
        .max(5000, "Please keep your message under 5,000 characters."),
});

const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0 },
};

const Contact = () => {
    const formRef = useRef(null);

    const formik = useFormik({
        initialValues: {
            fname: "",
            lname: "",
            email: "",
            subject: "",
            message: "",
        },

        validationSchema,

        onSubmit: async (values, { resetForm, setStatus }) => {
            setStatus(undefined);

            try {
                if (!formRef.current) {
                    throw new Error("The contact form is not available.");
                }

                await emailjs.sendForm(
                    "service_oept3k5",
                    "template_1u8sgyc",
                    formRef.current,
                    "J0p498TOPVXH53bfO"
                );

                toast.success("Message sent successfully. Thanks for reaching out!");
                resetForm();
            } catch (error) {
                console.error("Contact form submission failed:", error);

                setStatus(
                    "Your message couldn't be sent. Please try again or email me directly."
                );

                toast.error("Couldn't send your message. Please try again.");
            }
        },
    });

    const fieldError = (name) =>
        formik.touched[name] && formik.errors[name];

    return (
        <>
            <Helmet>
                <title>Bhavya Khurana | Contact</title>
                <meta name="description" content="Contact Bhavya Khurana about software engineering opportunities, development projects, and professional collaborations." />
                <link rel="canonical" href="https://bhavya-khurana.vercel.app/contact" />
                <meta property="og:title" content="Bhavya Khurana | Contact" />
                <meta property="og:description" content="Get in touch with Bhavya Khurana for opportunities and collaborations." />
                <meta property="og:url" content="https://bhavya-khurana.vercel.app/contact" />
                <meta property="og:type" content="website" />
            </Helmet>

            <main className="contact-page">
                <div className="ambient-glow" aria-hidden="true" />

                <div className="contact-container">
                    <motion.header
                        className="contact-hero"
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        transition={{ duration: 0.65, ease: "easeOut" }}
                    >
                        <div className="contact-hero__eyebrow">
                            <span className="contact-hero__eyebrow-dot" />
                            <span>OPEN TO INTERESTING CONVERSATIONS</span>
                        </div>

                        <h1 className="contact-hero__title">
                            Have something
                            <br />
                            <span>in mind?</span>
                        </h1>

                        <div className="heroBottom">
                            <p className="contact-hero__description">
                                Have an idea, a project, or an opportunity worth discussing?
                                I'm always happy to connect with people who enjoy building
                                meaningful things.
                            </p>

                            <a className="scrollHint" href="#contact-form">
                                <span>LET'S TALK</span>
                                <FiArrowDownRight aria-hidden="true" />
                            </a>
                        </div>
                    </motion.header>

                    {/* Section divider */}
                    <div className="sectionRule">
                        <span>01 / GET IN TOUCH</span>
                        <span>GOOD THINGS START WITH A CONVERSATION</span>
                    </div>

                    {/* Main content */}
                    <section className="contactGrid">
                        {/* Contact information */}
                        <motion.aside
                            className="contactAside"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            variants={fadeUp}
                            transition={{ duration: 0.55 }}
                        >
                            <span className="section-label">THE OTHER SIDE</span>

                            <h2 className="aside__title">
                                Let's make
                                <br />
                                <span>something happen.</span>
                            </h2>

                            <p className="asideDescription">
                                Whether it's software engineering, a collaborative project,
                                or simply exchanging ideas, drop me a message. Tell me what
                                you're working on and we'll take it from there.
                            </p>

                            <a
                                className="emailLink"
                                href="mailto:bhavyakhurana.dev@gmail.com"
                            >
                                <span className="emailIcon">
                                    <FiMail aria-hidden="true" />
                                </span>

                                <span className="emailText">
                                    <span className="mutedLabel">PREFER EMAIL?</span>
                                    <span className="emailAddress">
                                        bhavyakhurana.dev@gmail.com
                                    </span>
                                </span>

                                <FiArrowUpRight className="linkArrow" aria-hidden="true" />
                            </a>

                            <div className="socialSection">
                                <span className="mutedLabel">FIND ME ELSEWHERE</span>

                                <div className="socialList">
                                    {socialLinks.map(({ label, detail, href, icon: Icon }) => (
                                        <Link
                                            key={label}
                                            to={href}
                                            target={
                                                href.startsWith("mailto:") ? undefined : "_blank"
                                            }
                                            rel={
                                                href.startsWith("mailto:")
                                                    ? undefined
                                                    : "noopener noreferrer"
                                            }
                                            className="socialLink"
                                        >
                                            <span className="socialIcon">
                                                <Icon aria-hidden="true" />
                                            </span>

                                            <span className="socialText">
                                                <span>{label}</span>
                                                <span>{detail}</span>
                                            </span>

                                            <FiArrowUpRight
                                                className="socialArrow"
                                                aria-hidden="true"
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="availabilityNote">
                                <FiCheck aria-hidden="true" />
                                <p>
                                    Thoughtful messages, project ideas, and new connections are
                                    always welcome.
                                </p>
                            </div>
                        </motion.aside>

                        {/* Contact form */}
                        <motion.section
                            className="formPanel"
                            id="contact-form"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.12 }}
                            variants={fadeUp}
                            transition={{ duration: 0.6, delay: 0.08 }}
                        >
                            <div className="formHeader">
                                <div>
                                    <span className="section-label">YOUR MESSAGE</span>
                                    <h2 className="formTitle">Start a conversation.</h2>
                                </div>

                                <span className="formIndex">01—06</span>
                            </div>

                            <form
                                ref={formRef}
                                onSubmit={formik.handleSubmit}
                                noValidate
                                autoComplete="on"
                                className="contactForm"
                            >
                                {/* Name fields */}
                                <div className="fieldRow">
                                    <div className="field">
                                        <label htmlFor="fname">First name</label>

                                        <input
                                            id="fname"
                                            name="fname"
                                            type="text"
                                            autoComplete="given-name"
                                            placeholder="Jane"
                                            {...formik.getFieldProps("fname")}
                                            aria-invalid={Boolean(fieldError("fname"))}
                                            aria-describedby={
                                                fieldError("fname") ? "fname-error" : undefined
                                            }
                                        />

                                        {fieldError("fname") && (
                                            <span id="fname-error" className="fieldError">
                                                {formik.errors.fname}
                                            </span>
                                        )}
                                    </div>

                                    <div className="field">
                                        <label htmlFor="lname">Last name</label>

                                        <input
                                            id="lname"
                                            name="lname"
                                            type="text"
                                            autoComplete="family-name"
                                            placeholder="Doe"
                                            {...formik.getFieldProps("lname")}
                                            aria-invalid={Boolean(fieldError("lname"))}
                                            aria-describedby={
                                                fieldError("lname") ? "lname-error" : undefined
                                            }
                                        />

                                        {fieldError("lname") && (
                                            <span id="lname-error" className="fieldError">
                                                {formik.errors.lname}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="field">
                                    <label htmlFor="email">Email address</label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        placeholder="jane@company.com"
                                        {...formik.getFieldProps("email")}
                                        aria-invalid={Boolean(fieldError("email"))}
                                        aria-describedby={
                                            fieldError("email") ? "email-error" : undefined
                                        }
                                    />

                                    {fieldError("email") && (
                                        <span id="email-error" className="fieldError">
                                            {formik.errors.email}
                                        </span>
                                    )}
                                </div>

                                {/* Topic */}
                                <fieldset className="topicField">
                                    <legend>What would you like to talk about?</legend>

                                    <div className="topicOptions">
                                        {contactOptions.map((option) => (
                                            <label
                                                key={option.value}
                                                className={`topicOption ${formik.values.subject === option.value
                                                    ? "topicSelected"
                                                    : ""
                                                    }`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="subject"
                                                    value={option.value}
                                                    checked={formik.values.subject === option.value}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />

                                                <span>{option.label}</span>
                                            </label>
                                        ))}
                                    </div>

                                    {fieldError("subject") && (
                                        <span className="fieldError">
                                            {formik.errors.subject}
                                        </span>
                                    )}
                                </fieldset>

                                {/* Message */}
                                <div className="field">
                                    <div className="messageLabelRow">
                                        <label htmlFor="message">Your message</label>
                                        <span>UP TO 5,000 CHARACTERS</span>
                                    </div>

                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        maxLength={5000}
                                        placeholder="Tell me a little about your idea, project, or question..."
                                        {...formik.getFieldProps("message")}
                                        aria-invalid={Boolean(fieldError("message"))}
                                        aria-describedby={
                                            fieldError("message") ? "message-error" : undefined
                                        }
                                    />

                                    {fieldError("message") && (
                                        <span id="message-error" className="fieldError">
                                            {formik.errors.message}
                                        </span>
                                    )}
                                </div>

                                {/* Submission error */}
                                {formik.status && (
                                    <p className="submitError" role="alert">
                                        {formik.status}
                                    </p>
                                )}

                                {/* Submit */}
                                <div className="formFooter">
                                    <p className="formFootnote">
                                        <FiCheck aria-hidden="true" />
                                        Your details are only used to reply to your message.
                                    </p>

                                    <button
                                        type="submit"
                                        className="submitButton"
                                        disabled={formik.isSubmitting}
                                    >
                                        <span>
                                            {formik.isSubmitting ? "Sending..." : "Send message"}
                                        </span>
                                        <FiSend aria-hidden="true" />
                                    </button>
                                </div>
                            </form>
                        </motion.section>
                    </section>

                    <footer className="bottomNote">
                        <span>HAVE A GOOD ONE.</span>
                        <span>
                            THANKS FOR STOPPING BY <span aria-hidden="true">↗</span>
                        </span>
                    </footer>
                </div>
            </main>
        </>
    );
};

export default Contact;
