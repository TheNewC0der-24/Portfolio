import React from "react";
import WorkList from "../../Components/WorkList";
import {
    Typography,
    Box,
    Grid,
} from '@mui/material';

export default function ListView({ filteredProjects, searchTerm }) {
    return (
        <Box sx={{ p: { sm: 0, md: 4 } }}>
            {filteredProjects?.length === 0 ? (
                <Box sx={{ display: "flex", justifyContent: "center", margin: "auto", mt: 5 }}>
                    <Typography variant='h5'>No Work found with topic <span className='badge' style={{ backgroundColor: "#DFD8FD", color: "#6d2ae2" }}>{searchTerm}</span></Typography>
                </Box>
            ) :
                <Box className="d-flex flex-column justify-content-center mx-auto" sx={{ maxWidth: "992px", width: "100%" }}>
                    {
                        filteredProjects.map((item) => (
                            <WorkList
                                key={item.id}
                                heading={item.name}
                                subheading={item.description}
                                imgSrc={item.image}
                                href={item.homepage ? item.homepage : item.html_url}
                                topics={item.topics}
                            />
                        ))
                    }
                </Box>
            }
        </Box>
    );
};