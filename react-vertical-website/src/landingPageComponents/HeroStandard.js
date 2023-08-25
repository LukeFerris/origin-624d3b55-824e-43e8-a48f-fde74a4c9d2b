// MUI imports
import { Box, List, Typography } from "@mui/material";

export default function HeroStandard({
  mainHeading,
  subHeading,
  imageSrc,
  imageAltTag,
}) {
  return (
    <Box
      sx={{
        display: { md: "flex" },
        alignItems: { md: "center" },
        paddingTop: { xs: "30px", md: "40px" },
        paddingBottom: "60px",
        marginBottom: "60px",
        width: "100%",
        justifyContent: { xs: "center", md: "" },
        background:
          "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(244,244,245,1) 100%)",
        flexWrap: { xs: "wrap", md: "nowrap" },
      }}
    >
      <Box
        sx={{
          flexBasis: { xs: "", md: "5vw" },
          minWidth: { xs: "", md: "5vw" },
        }}
      ></Box>
      <div>
        <Box
          sx={{
            flexBasis: "49%",
            marginLeft: { xs: "5vw", md: "0px" },
            marginRight: { xs: "5vw", md: "0px" },
            marginBottom: { xs: "5vw", md: "0px" },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: "h3.fontSize",
                sm: "h3.fontSize",
                md: "h3.fontSize",
                lg: "h1.fontSize",
              },
            }}
          >
            {mainHeading}
          </Typography>
          <Typography variant="h2">{subHeading}</Typography>
        </Box>
      </div>
      <div style={{ flexBasis: "49%" }}>
        <img src={imageSrc} width="100%" height="100%" alt={imageAltTag} />
      </div>
      <Box
        sx={{
          flexBasis: { xs: "", md: "5vw" },
          minWidth: { xs: "", md: "5vw" },
        }}
      ></Box>
    </Box>
  );
}
