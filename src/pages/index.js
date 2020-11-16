import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import "./index.css"

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Header />
    </React.Fragment>
  )
}
