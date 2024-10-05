import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { UserState } from "../contexts/VerifyContext";

const useStyles = makeStyles({
    outerWrapper: {
        backgroundColor: "#fff",
        padding: "50px 0",
        display: "flex",
        justifyContent: "center",
    },
    innerWrapper: {
        backgroundColor: "#1e1e1e",
        borderRadius: "0px 40px 0px 40px",
        padding: "50px 130px",
        maxWidth: "800px",
        boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
        position: "relative",
        textAlign: "center",
        color: "#fff",
    },
    title: {
        fontSize: "28px",
        fontWeight: "bold",
        color: "#fff",
        marginBottom: "30px",
        position: "relative",
        display: "inline-block",
        "&::before, &::after": {
            content: '""',
            width: "80px",
            height: "2px",
            backgroundColor: "#fff",
            position: "absolute",
            top: "50%",
        },
        "&::before": {
            left: "-90px",
        },
        "&::after": {
            right: "-90px",
        },
    },
    certificateBox: {
        backgroundColor: "#fff",
        padding: "20px 130px",
        borderRadius: "10px",
        color: "#000",
        marginBottom: "20px",
        textAlign: "center",
    },
    name: {
        fontSize: "22px",
        fontWeight: "bold",
        marginBottom: "20px",
    },
    date: {
        fontSize: "16px",
        color: "#666",
        margin: "10px 0",
        textAlign: "center",
    },
    button: {
        marginTop: "20px",
        padding: "12px 20px",
        backgroundColor: "#2e7d32",
        color: "#fff",
        borderRadius: "10px",
        border: "none",
        fontSize: "18px",
        fontWeight: "bold",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "#1b5e20",
        },
    },
    // Mobile styles
    '@media (max-width: 768px)': {
        innerWrapper: {
            padding: "30px 20px", // Reduce padding for mobile
        },
        title: {
            fontSize: "24px", // Smaller title font size
        },
        certificateBox: {
            padding: "20px 10px", // Reduce padding for the certificate box
        },
        name: {
            fontSize: "20px", // Smaller font size for name
        },
        date: {
            fontSize: "14px", // Smaller font size for date
        },
        button: {
            padding: "10px 15px", // Adjust button padding
            fontSize: "16px", // Smaller button text
        },
    },
});

const Verification = () => {
    const classes = useStyles();
    const { user } = UserState();
    const [certificate, setCertificate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchCertificate = async () => {
            console.log("Fetching certificate for:", user.serialNumber);

            try {
                const response = await fetch(
                    `https://products2-tt3o.onrender.com/api/certificate-verification/${user.serialNumber}`
                );
                const data = await response.json();

                if (response.ok) {
                    setCertificate(data);
                    console.log("Certificate data:", data);
                } else {
                    setError(data.message || "Failed to fetch certificate");
                }
            } catch (err) {
                console.error("Fetch error:", err);
                setError("Failed to fetch certificate. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        if (user.serialNumber) {
            fetchCertificate();
        } else {
            setError("No certificate code provided.");
            setLoading(false);
        }
    }, [user.serialNumber]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className={classes.outerWrapper}>
            <div className={classes.innerWrapper}>
                <h1 className={classes.title}>Certificate Of Completion</h1>
                <div className={classes.certificateBox}>
                    <div className={classes.name}>
                        Name of the Intern:{" "}
                        {certificate?.intern_name || "Not available"}
                    </div>
                    <div className={classes.date}>
                        Joining Date:{" "}
                        {certificate?.Joining_date || "Not available"}
                        <br />
                        Certificate Issued On:{" "}
                        {certificate?.issued_date || "Not available"}
                        <br />
                        Serial Number:{" "}
                        {certificate?.certificate_code || "Not available"}
                    </div>
                    <button className={classes.button}>
                        Verified Successfully!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Verification;
