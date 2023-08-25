import { Container } from "@mui/system";
import "../App.css";
import Blog from "../components/Blog";

import React from "react";
import Box from "@mui/material/Box";

// MUI Grid
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

function Blogs() {
  // let blogs = [
  //   ["Who the hell is CORs, and why is he breaking my website?", "23/07/2023"],
  //   ["Sorting algorithms, which one would win in a race?", "24/08/2023"],
  //   ["What's a backend framework and where can I find one?", "04/09/2023"],
  // ];

  let blogs = [
    {
      Name: "Who the hell is CORs, and why is he breaking my website?",
      Date: "23/07/2023",
      Topics: "CORs • Same-Origin Policy • CSRF",
      Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia nec augue ac aliquam. Fusce consectetur, enim at blandit volutpat, nisl turpis bibendum eros, eget congue nunc turpis quis erat. Quisque tincidunt, sapien a ultricies egestas, sapien arcu sollicitudin purus, ut efficitur enim leo nec metus. Suspendisse sed rhoncus urna. Vestibulum ut malesuada turpis, non aliquam nisl. Nullam sodales lobortis libero, non congue risus semper quis.",
      Link: "",
    },
    {
      Name: "Sorting algorithms, which one would win in a race?",
      Date: "24/08/2023",
      Topics: "Sorting Algorithms • Big-O Notation",
      Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia nec augue ac aliquam. Fusce consectetur, enim at blandit volutpat, nisl turpis bibendum eros, eget congue nunc turpis quis erat. Quisque tincidunt, sapien a ultricies egestas, sapien arcu sollicitudin purus, ut efficitur enim leo nec metus. Suspendisse sed rhoncus urna. Vestibulum ut malesuada turpis, non aliquam nisl. Nullam sodales lobortis libero, non congue risus semper quis.",
      Link: "",
    },
    {
      Name: "What's a backend framework and where can I find one?",
      Date: "04/09/2023",
      Topics: "Backend Frameworks",
      Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia nec augue ac aliquam. Fusce consectetur, enim at blandit volutpat, nisl turpis bibendum eros, eget congue nunc turpis quis erat. Quisque tincidunt, sapien a ultricies egestas, sapien arcu sollicitudin purus, ut efficitur enim leo nec metus. Suspendisse sed rhoncus urna. Vestibulum ut malesuada turpis, non aliquam nisl. Nullam sodales lobortis libero, non congue risus semper quis.",
      Link: "",
    },
  ];

  let componentsArr = [];
  for (let i = 0; i < blogs.length; i++) {
    componentsArr.push(
      <Blog
        key={i}
        title={blogs[i].Name}
        date={blogs[i].Date}
        topics={blogs[i].Topics}
        desc={blogs[i].Desc}
        link={blogs[i].Link}
      />
    );
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: "#121212",
      }}
    >
      <Container
        className="aboutMe"
        style={{ color: "white", textAlign: "justify", paddingTop: "8vh" }}
      >
        <h1>/blog</h1>
        <div>{componentsArr}</div>
      </Container>
    </div>
  );
}

export default Blogs;
