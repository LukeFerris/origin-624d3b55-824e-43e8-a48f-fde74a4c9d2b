// MUI imports
import { Box, List, Typography } from "@mui/material";
import SignupBox from "./signupBox";
import CheckedListItem from "./checkedListItem";
import IPhoneMockup from "./iphoneMockup";

export default function HeroApp({
  mainHeading,
  subHeading,
  keyFeature1,
  keyFeature2,
  keyFeature3,
  imageSrc,
  imageAltTag,
  buttonText,
}) {
  return (
    <Box
      sx={{
        display: { md: "flex" },
        alignItems: { md: "center" },
        paddingTop: { xs: "30px", md: "40px" },
        paddingBottom: "60px",
        marginBottom: "60px",
        justifyContent: { xs: "center", md: "" },
        background:
          "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(244,244,245,1) 100%)",
        flexWrap: { xs: "wrap", md: "nowrap" },
      }}
    >
      <Box
        sx={{
          flexBasis: { xs: "", md: "20vw" },
          minWidth: { xs: "", md: "5vw" },
        }}
      ></Box>
      <Box
        sx={{
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

        <SignupBox isDark={false} buttonText={buttonText} />
        <List dense={true} style={{ marginTop: "15px" }}>
          <CheckedListItem checkListItemText={keyFeature1} />
          <CheckedListItem checkListItemText={keyFeature2} />
          <CheckedListItem checkListItemText={keyFeature3} />
        </List>
      </Box>
      <Box
        sx={{
          flexGrow: { xs: 0, md: 1 },
          flexBasis: { xs: "", md: "20vw" },
          minWidth: { xs: "", md: "5vw" },
        }}
      ></Box>
      <IPhoneMockup screenMockUpSrc={imageSrc} imageAltTag={imageAltTag} />
      <Box
        sx={{
          flexBasis: { xs: "", md: "20vw" },
          minWidth: { xs: "", md: "5vw" },
        }}
      ></Box>
    </Box>
  );
}
