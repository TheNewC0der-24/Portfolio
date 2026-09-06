/* eslint-disable react/no-unescaped-entities */
import { Typography, Button, Stack, Link as MuiLink } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiHome, FiArrowUpRight } from "react-icons/fi";
import "./NotFound.css";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="not-found">
                <div className="not-found__glow not-found__glow--one" />
                <div className="not-found__glow not-found__glow--two" />

                <div className="not-found__content">
                    <p className="not-found__code">
                        404
                    </p>

                    <h1 className="not-found__title">
                        Looks like you're lost.
                    </h1>

                    <p className="not-found__description">
                        The page you're looking for doesn't exist, has moved, or took an unexpected detour.
                    </p>

                    {/* Actions */}
                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={2}
                        justifyContent="center"
                        className="not-found__actions"
                    >
                        <Button
                            component={Link}
                            to="/"
                            variant="contained"
                            startIcon={<FiHome />}
                            className="not-found__button not-found__button--primary"
                        >
                            Back to Home
                        </Button>

                        <Button
                            onClick={() => navigate(-1)}
                            variant="outlined"
                            startIcon={<FiArrowLeft />}
                            className="not-found__button not-found__button--secondary"
                        >
                            Go Back
                        </Button>
                    </Stack>

                    {/* Quick navigation */}
                    <div className="not-found__links">
                        <Typography className="not-found__links-title">
                            Or explore
                        </Typography>

                        <Stack
                            direction="row"
                            spacing={3}
                            justifyContent="center"
                            flexWrap="wrap"
                            useFlexGap
                        >
                            <MuiLink
                                component={Link}
                                to="/about"
                                underline="none"
                                className="not-found__link"
                            >
                                About
                                <FiArrowUpRight />
                            </MuiLink>

                            <MuiLink
                                component={Link}
                                to="/work"
                                underline="none"
                                className="not-found__link"
                            >
                                Work
                                <FiArrowUpRight />
                            </MuiLink>

                            <MuiLink
                                component={Link}
                                to="/experience"
                                underline="none"
                                className="not-found__link"
                            >
                                Experience
                                <FiArrowUpRight />
                            </MuiLink>

                            <MuiLink
                                component={Link}
                                to="/contact"
                                underline="none"
                                className="not-found__link"
                            >
                                Contact
                                <FiArrowUpRight />
                            </MuiLink>
                        </Stack>
                    </div>

                    {/* Footer */}
                    <Typography className="not-found__footer">
                        If you think this is a mistake,{" "}
                        <MuiLink
                            href="mailto:bhavyakhurana.dev@gmail.com"
                            underline="none"
                        >
                            let me know
                        </MuiLink>
                        .
                    </Typography>

                </div>
            </div>
        </>
    );
};

export default NotFound;