import { Box, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';


const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return <Box m="20px">
        <Header title="FAQ" subtitle="Prguntas frecuentes" />
        
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Pregunta Importante 1
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi enim maxime fugiat dolore tenetur explicabo nostrum, commodi corrupti alias, ab fuga. Magni reprehenderit necessitatibus mollitia tenetur molestias voluptate sunt dolore.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Pregunta Importante 2
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi enim maxime fugiat dolore tenetur explicabo nostrum, commodi corrupti alias, ab fuga. Magni reprehenderit necessitatibus mollitia tenetur molestias voluptate sunt dolore.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Pregunta Importante 3
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi enim maxime fugiat dolore tenetur explicabo nostrum, commodi corrupti alias, ab fuga. Magni reprehenderit necessitatibus mollitia tenetur molestias voluptate sunt dolore.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Pregunta Importante 4
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi enim maxime fugiat dolore tenetur explicabo nostrum, commodi corrupti alias, ab fuga. Magni reprehenderit necessitatibus mollitia tenetur molestias voluptate sunt dolore.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Pregunta Importante 5
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi enim maxime fugiat dolore tenetur explicabo nostrum, commodi corrupti alias, ab fuga. Magni reprehenderit necessitatibus mollitia tenetur molestias voluptate sunt dolore.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
};

export default FAQ;