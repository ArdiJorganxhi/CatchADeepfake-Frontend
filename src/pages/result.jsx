import React from "react";
import Navbar from "../components/navbar";
import "./css/result.css";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import RealResult from "../components/result/real.result";
import FakeResult from "../components/result/fake.result";
import { useSelector } from "react-redux";

export default function Result() {
  const navigate = useNavigate();

  const isReal = useSelector((state) => state.isReal.value)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar />
      {isReal ? <RealResult /> : <FakeResult />}
    </motion.div>
  );
}
