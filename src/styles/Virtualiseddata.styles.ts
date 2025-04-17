// Virtualiseddata.styles.ts
import { styled } from "@mui/material/styles";
import { Box, Button, Card, Typography } from "@mui/material";

export const PageWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 600,
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: "#f9f9f9",
  borderRadius: theme.spacing(1),
}));

export const FilterButton = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing(2),
  marginTop: theme.spacing(2),
}));
