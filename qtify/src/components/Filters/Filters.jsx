import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./Filters.module.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function Filters(filters, selectedFilterIndex, setSelectedFilterIndex) {
  // console.log(filters, "filters");
  console.log(selectedFilterIndex, "selectedFilterIndex");
  const handleChange = (event, newValue) => {
    // console.log(newValue, "clicked");
    filters.setSelectedFilterIndex(newValue);
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <div>
      <Tabs
        value={filters.selectedFilterIndex}
        onChange={handleChange}
        aria-label="basic tabs example"
        TabIndicatorProps={{
          style: {
            backgroundColor: "var(--color-primary)",
          },
        }}
      >
        {/* <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} /> */}
        {filters?.filters?.map((ele, index) => (
          <Tab className={styles.tab} label={ele.label} {...a11yProps(index)} />
        ))}
      </Tabs>

      {filters?.filters?.map((ele, index) => (
        // <TabPanel label={ele.label} index={index} />
        <TabPanel label={ele.label} index={index} />
      ))}
    </div>
  );
}

export default Filters;
