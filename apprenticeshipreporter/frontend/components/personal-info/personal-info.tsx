"use client";

import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";
import IconButton from "@mui/joy/IconButton";
import Textarea from "@mui/joy/Textarea";
import Stack from "@mui/joy/Stack";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Typography from "@mui/joy/Typography";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardOverflow from "@mui/joy/CardOverflow";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import InsertDriveFileRoundedIcon from "@mui/icons-material/InsertDriveFileRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { LocateIcon, MapIcon } from "lucide-react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export default function PersonalInfo() {
  return (
    <Box
      sx={{
        flex: 1,
        width: "100%",
      }}
    >
      <Box
        sx={{
          position: "sticky",
          top: {
            sm: -100,
            md: -110,
          },
          bgcolor: "background.body",
          zIndex: 9995,
        }}
      >
        <Box
          sx={{
            px: {
              xs: 2,
              md: 6,
            },
          }}
        >
          <Breadcrumbs
            size="sm"
            aria-label="breadcrumbs"
            separator={<ChevronRightRoundedIcon fontSize="small" />}
            sx={{ pl: 0 }}
          >
            <Link
              underline="none"
              color="neutral"
              href="#some-link"
              aria-label="Home"
            >
              <HomeRoundedIcon />
            </Link>
            <Link
              underline="hover"
              color="neutral"
              href="#some-link"
              fontSize={12}
              fontWeight={500}
            >
              Users
            </Link>
            <Typography color="primary" fontWeight={500} fontSize={12}>
              My profile
            </Typography>
          </Breadcrumbs>
          <Typography
            level="h2"
            sx={{
              mt: 1,
              mb: 2,
            }}
          >
            My profile
          </Typography>
        </Box>
        <Tabs
          defaultValue={0}
          sx={{
            bgcolor: "transparent",
          }}
        >
          <TabList
            tabFlex={1}
            size="sm"
            sx={{
              pl: {
                xs: 0,
                md: 4,
              },
              justifyContent: "left",
              [`&& .${tabClasses.root}`]: {
                flex: "initial",
                bgcolor: "transparent",
                [`&.${tabClasses.selected}`]: {
                  fontWeight: "600",
                  "&::after": {
                    height: "2px",
                    bgcolor: "primary.500",
                  },
                },
              },
            }}
          >
            <Tab sx={{ borderRadius: "6px 6px 0 0" }} indicatorInset value={0}>
              Übersicht
            </Tab>
            <Tab sx={{ borderRadius: "6px 6px 0 0" }} indicatorInset value={1}>
              Ausbildungsnachweis
            </Tab>
            <Tab sx={{ borderRadius: "6px 6px 0 0" }} indicatorInset value={2}>
              Stammdaten
            </Tab>
            <Tab sx={{ borderRadius: "6px 6px 0 0" }} indicatorInset value={3}>
              Pool
            </Tab>
          </TabList>
        </Tabs>
      </Box>

      <Stack
        spacing={4}
        sx={{
          display: "flex",
          maxWidth: "800px",
          mx: "auto",
          px: {
            xs: 2,
            md: 6,
          },
          py: {
            xs: 2,
            md: 3,
          },
        }}
      >
        <Card>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Typography level="title-md" sx={{ flex: 1 }}>
              Persönliche Infos
            </Typography>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </StyledBadge>
          </Box>
          <Typography level="body-sm">
            Geben Sie Ihre Profilinformationen ein, die in die Dokumente
            eingefügt werden.
          </Typography>

          <Divider />

          <Stack spacing={4} sx={{ flexGrow: 1 }}>
            <Stack spacing={1}>
              <FormLabel>Name</FormLabel>
              <FormControl
                sx={{
                  display: {
                    sm: "flex-column",
                    md: "flex-row",
                  },
                  gap: 2,
                }}
              >
                <Input size="sm" placeholder="First name" />
                <Input size="sm" placeholder="Last name" sx={{ flexGrow: 1 }} />
              </FormControl>
            </Stack>
            <Stack spacing={1}>
              <FormLabel>Berufsbild</FormLabel>
              <FormControl
                sx={{
                  display: {
                    sm: "flex-column",
                    md: "flex-row",
                  },
                  gap: 2,
                }}
              >
                <Input
                  size="sm"
                  placeholder="Fachberater Softwaretechniken inkl. Fachinformatiker Anwendungsentwicklung"
                />
              </FormControl>
            </Stack>

            <div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ flex: 1 }}>
                  <FormLabel>Telefon mobil</FormLabel>
                  <div style={{ margin: "10px 0" }}></div>{" "}
                  <Input size="sm" placeholder="(+49)" sx={{ flexGrow: 1 }} />
                </div>
                <div style={{ flex: 1 }}>
                  <FormLabel>Email</FormLabel>
                  <div style={{ margin: "10px 0" }}></div>{" "}
                  <Input
                    size="sm"
                    type="email"
                    startDecorator={<EmailRoundedIcon />}
                    placeholder="Mustermann@mail.com"
                    sx={{ flexGrow: 1 }}
                  />
                </div>
              </div>
            </div>
            <div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ flex: 1 }}>
                  <FormLabel>Ausbildungsende</FormLabel>
                  <div style={{ margin: "10px 0" }}></div>{" "}
                  <Input
                    size="sm"
                    placeholder="Herbst 2025"
                    sx={{ flexGrow: 1 }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <FormLabel>Einstellort</FormLabel>
                  <div style={{ margin: "10px 0" }}></div>{" "}
                  <Input
                    size="sm"
                    startDecorator={<MapIcon />}
                    placeholder="Berlin"
                    sx={{ flexGrow: 1 }}
                  />
                </div>
              </div>
            </div>

            <div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ flex: 1 }}>
                  <FormLabel>Führungskraft</FormLabel>
                  <div style={{ margin: "10px 0" }}></div>{" "}
                  <Input
                    size="sm"
                    placeholder="Annika Drüke"
                    sx={{ flexGrow: 1 }}
                  />
                  <div style={{ margin: "10px 0" }}></div>{" "}
                  <Input
                    size="sm"
                    placeholder="(+49) 21139927474"
                    sx={{ flexGrow: 1 }}
                  />
                  <div style={{ margin: "10px 0" }}></div>{" "}
                  <Input
                    size="sm"
                    placeholder="annika.drueke@atos.net"
                    sx={{ flexGrow: 1 }}
                  />
                </div>
              </div>
            </div>
          </Stack>
          <CardOverflow sx={{ borderTop: "1px solid", borderColor: "divider" }}>
            <CardActions sx={{ alignSelf: "flex-end", pt: 2 }}>
              <Button size="sm" variant="outlined" color="neutral">
                Cancel
              </Button>
              <Button size="sm" variant="outlined" color="primary">
                Save
              </Button>
            </CardActions>
          </CardOverflow>
        </Card>
      </Stack>
    </Box>
  );
}
