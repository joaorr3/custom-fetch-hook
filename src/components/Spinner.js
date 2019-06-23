import React from "react";
import "../spinner.css";

export default function Spinner({ size = "medium" }) {
    return <div className={`spinner spinner-${size}`} />;
}