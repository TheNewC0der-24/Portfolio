import React from "react";
import WorkList from "../../Components/WorkList";
import {
    Typography,
    Box,
} from '@mui/material';

export default function ListView({ filteredProjects, searchTerm }) {
    return (
        <Box sx={{ p: { sm: 0, md: 4 } }}>
            <Box sx={{ marginX: "auto", width: '100%', maxWidth: { sm: "100%", md: "80%" } }}>
                {filteredProjects?.length === 0 ? (
                    <Box sx={{ display: "flex", justifyContent: "center", margin: "auto", mt: 5 }}>
                        <Typography variant='h5'>No Work found with topic <span className='badge' style={{ backgroundColor: "#DFD8FD", color: "#6d2ae2" }}>{searchTerm}</span></Typography>
                    </Box>
                ) :
                    <Box>
                        {
                            filteredProjects.map((item) => (
                                <WorkList
                                    key={item.id}
                                    heading={item.name}
                                    subheading={item.description}
                                    imgSrc={item.image}
                                    href={item.homepage}
                                    topics={item.topics}
                                />

                            ))
                        }
                    </Box>
                }
            </Box>
        </Box>
    );
};