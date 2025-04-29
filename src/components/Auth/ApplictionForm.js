import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../../styles/ApplicationForm.css';

const ApplicationForm = () => {
    const navigate = useNavigate();
    const userId = localStorage.getItem("userId");

    const [formData, setFormData] = useState({
        countryCode: "",
        phone: "",
        inquiry: "myself",
        workExp: "",
        fullName: "",
        email: "",
        age: "",
        gender: "",
        location: "",
        education: "",
        occupation: "",
        goals: "",
        priorKnowledge: "",
        reasonForJoining: "",
        languagePreference: "",
        learningMode: "online",
        hasLaptopOrSmartphone: true,
        hasInternetAccess: true,
        additionalNotes: "",
        referralSource: "",
        preferredInstructorGender: "noPreference",
        user: userId,
    });


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");

        try {
            const res = await axios.post(
                "http://localhost:3006/api/applications/apply",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,  // This matches your backend
                    },
                }
            );

            alert("Application submitted successfully!");
            localStorage.setItem('userProfile', JSON.stringify(formData)); //  Save profile
            window.location.href = "http://localhost:3007/";
        } catch (error) {
            console.error("Submission error:", error.response?.data || error.message);
            alert(error.response?.data?.message || "Submission failed.");
        }
    };

    return (
        <div className="container">
            <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">Apply to Learn Sign Language</h2>
                <p className="text-gray-700">
                    Welcome to our <strong>Sign Language Learning Platform</strong> — a space dedicated to making communication inclusive and accessible for everyone. Whether you're a beginner, a professional, or someone looking to bridge communication gaps, this platform is for you.
                    <br /><br />
                    <strong>This application form</strong> helps us understand your background, goals, and preferences to offer a personalized learning experience. Kindly fill it out to begin your journey!
                </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white shadow-md rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                    <input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="input" required />
                    <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="input" required />
                    {/* <input name="countryCode" placeholder="Country Code" value={formData.countryCode} onChange={handleChange} className="input" required /> */}
                    <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="input" required />
                    <input name="age" placeholder="Age" type="number" value={formData.age} onChange={handleChange} className="input" />
                    <select name="gender" value={formData.gender} onChange={handleChange} className="input">
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="preferNotToSay">Prefer not to say</option>
                    </select>
                    <input name="education" placeholder="Education" value={formData.education} onChange={handleChange} className="input" />
                    <input name="occupation" placeholder="Occupation" value={formData.occupation} onChange={handleChange} className="input" />
                    <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} className="input" />
                    <input name="languagePreference" placeholder="Language Preference (e.g., ISL)" value={formData.languagePreference} onChange={handleChange} className="input" required />
                </div>

                <textarea name="goals" placeholder="Your learning goals" value={formData.goals} onChange={handleChange} className="input" required />
                <textarea name="priorKnowledge" placeholder="Prior knowledge of sign language" value={formData.priorKnowledge} onChange={handleChange} className="input" />
                <textarea name="reasonForJoining" placeholder="Why do you want to join?" value={formData.reasonForJoining} onChange={handleChange} className="input" />
                <textarea name="additionalNotes" placeholder="Additional Notes" value={formData.additionalNotes} onChange={handleChange} className="input" />

                <select name="inquiry" value={formData.inquiry} onChange={handleChange} className="input">
                    <option value="myself">For Myself</option>
                    <option value="myCompany">For My Company</option>
                </select>
                <input name="workExp" placeholder="Work Experience" value={formData.workExp} onChange={handleChange} className="input" />

                <select name="learningMode" value={formData.learningMode} onChange={handleChange} className="input">
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                    <option value="hybrid">Hybrid</option>
                </select>
                <select name="preferredInstructorGender" value={formData.preferredInstructorGender} onChange={handleChange} className="input">
                    <option value="noPreference">No Preference</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>

                <input name="referralSource" placeholder="How did you hear about us?" value={formData.referralSource} onChange={handleChange} className="input" />

                <div className="flex gap-4">
                    <label>
                        <input type="checkbox" name="hasLaptopOrSmartphone" checked={formData.hasLaptopOrSmartphone} onChange={handleChange} />
                        Have Laptop/Smartphone
                    </label>
                    <label>
                        <input type="checkbox" name="hasInternetAccess" checked={formData.hasInternetAccess} onChange={handleChange} />
                        Have Internet Access
                    </label>
                </div>

                <button type="submit" className="btn-primary w-full mt-4">Submit Application</button>
            </form>
        </div>
    );
};

export default ApplicationForm;
