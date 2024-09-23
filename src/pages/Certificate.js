import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./Certificate.module.css"; // Importing CSS module for styling
import { UserState } from "../contexts/VerifyContext";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    textField: {
        marginBottom: "24px",
        backgroundColor: "#f4f4f4",
        borderRadius: "8px",
        width: "100% !important",
    },
    button: {
        marginTop: "16px",
        padding: "12px 0",
        borderRadius: "8px",
        width: "100% !important",
    },
});

const Certificate = () => {
    const [state, setState] = useState({
        serialNumber: "",
        internName: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { setUser } = UserState();
    const classes = useStyles();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        if (!state.serialNumber || !state.internName) {
            setError("Please fill in both the Serial Number and Intern Name.");
            setLoading(false);
            return;
        }

        const requestBody = {
            intern_name: state.internName,
            certificate_code: state.serialNumber,
        };

        try {
            const response = await fetch(
                "https://products2-tt3o.onrender.com/api/certificate-verification",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(requestBody),
                }
            );

            const data = await response.json();

            if (response.ok) {
                setUser({
                    serialNumber: state.serialNumber,
                    internName: state.internName,
                });
                navigate("/verification");
            } else {
                setError(data.message || "An error occurred");
            }
        } catch (error) {
            setError("Failed to verify certificate. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setError("");
        setState((prevState) => ({
            ...prevState,
            [id]: value.trim(),
        }));
    };

    return (
        <div className={styles.container}>
            <div className={styles.combinedSection}>
                <div className={styles.textSection}>
                    <h1>Internship Certificate Verification</h1>
                    <p>
                        Efficiently Verify and Authenticate Your Internship
                        Credentials
                    </p>
                    <button>Enter the details to get started →</button>
                </div>

                <div className="ccard">
                    <Card
                        className={styles.card}
                        style={{
                            borderRadius: "0px 40px 0px 40px",
                            width: "",
                        }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className={styles.form}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                className={classes.textField}
                                onChange={handleChange}
                                id="serialNumber"
                                label="Enter Serial Number"
                                value={state.serialNumber}
                                fullWidth
                            />
                            <TextField
                                className={classes.textField}
                                onChange={handleChange}
                                id="internName"
                                label="Enter Name of the Intern"
                                value={state.internName}
                                fullWidth
                            />
                            {error && <p className={styles.error}>{error}</p>}
                            <Button
                                className={`${classes.button} ${styles.buttonPrimary}`}
                                variant="contained"
                                type="submit"
                                disabled={
                                    loading ||
                                    !state.serialNumber ||
                                    !state.internName
                                }
                                fullWidth
                            >
                                {loading ? "Verifying..." : "Verify"}
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Certificate;
