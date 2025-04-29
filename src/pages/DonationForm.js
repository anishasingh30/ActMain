import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/DonationForm.css";

const PRESETS = [60, 120, 350, 1000];

export default function DonationForm() {
    const [frequency, setFrequency] = useState("once"); // "once" or "monthly"
    const [selected, setSelected] = useState(null);    // preset amount
    const [other, setOther] = useState("");            // custom amount
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const amount = selected === "other" ? Number(other) : selected;

    const handlePreset = (amt) => {
        setSelected(amt);
        setOther("");
    };

    const handleOtherChange = (e) => {
        setOther(e.target.value.replace(/\D/, ""));
        setSelected("other");
    };

    const handleFreq = (f) => {
        setFrequency(f);
        setSelected(null);
        setOther("");
    };

    const handleField = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;
        if (!amount || amount <= 0) {
            toast.error("Please select or enter a valid amount");
            return;
        }
        if (!formData.name || !formData.email) {
            toast.error("Name and email are required");
            return;
        }

        setIsSubmitting(true);
        try {
            const res = await fetch("http://localhost:3006/create-order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    amount,
                    frequency,
                }),
            });
            const { url } = await res.json();
            if (url) window.location.href = url;
            else throw new Error("No redirect URL");
        } catch (err) {
            console.error(err);
            toast.error("Payment initiation failed");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="donation-card">
            <h2 className="donation-title">Support Global Goals With Us
            </h2>

            <div className="tabs">
                <button
                    className={frequency === "once" ? "tab active" : "tab"}
                    onClick={() => handleFreq("once")}
                >
                    Donate Once
                </button>
                <button
                    className={frequency === "monthly" ? "tab active" : "tab"}
                    onClick={() => handleFreq("monthly")}
                >
                    Donate Monthly
                </button>
            </div>

            <form onSubmit={handleSubmit} className="donation-form">
                <div className="amount-grid">
                    {PRESETS.map((amt) => (
                        <button
                            type="button"
                            key={amt}
                            className={selected === amt ? "amt-btn active" : "amt-btn"}
                            onClick={() => handlePreset(amt)}
                        >
                            ₹{amt.toLocaleString("en-IN")}
                        </button>
                    ))}

                    <div className="other-box">
                        <button
                            type="button"
                            className={selected === "other" ? "amt-btn active" : "amt-btn"}
                            onClick={() => setSelected("other")}
                        >
                            Other
                        </button>
                        {selected === "other" && (
                            <input
                                type="text"
                                placeholder="Enter amount"
                                value={other}
                                onChange={handleOtherChange}
                                className="other-input"
                            />
                        )}
                    </div>
                </div>

                <div className="fields">
                    <input
                        name="name"
                        type="text"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleField}
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleField}
                    />
                </div>

                <div className="footer-row">
                    <label>
                        <input type="checkbox" /> Dedicate my donation
                    </label>
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Processing…" : "Donate Now"}
                    </button>
                </div>
            </form>

            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
}
