import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import "../styles/Body.css"


const goals = [
    { id: 1, img: "https://www.unoosa.org/images/ourwork/SDGs/E_SDG_goals_icons-individual-rgb-01.png", link: "/goal/1", title: "No Poverty" },
    { id: 2, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Sustainable_Development_Goal_02ZeroHunger.svg/1200px-Sustainable_Development_Goal_02ZeroHunger.svg.png", link: "/goal/2", title: "Zero Hunger" },
    { id: 3, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Sustainable_Development_Goal_03GoodHealth.svg/1200px-Sustainable_Development_Goal_03GoodHealth.svg.png", link: "/goal/3", title: "Good Health" },
    { id: 4, img: "https://sustainabledevelopment.un.org/content/sdgsummit/images/E_SDG%20goals_icons-individual-rgb-04.png", link: "/goal/4", title: "Quality Education" },
    { id: 5, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Sustainable_Development_Goal_05GenderEquality.svg/1200px-Sustainable_Development_Goal_05GenderEquality.svg.png", link: "/goal/5", title: "Gender Equality" },
    { id: 6, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Sustainable_Development_Goal_06CleanWaterSanitation.svg/1200px-Sustainable_Development_Goal_06CleanWaterSanitation.svg.png", link: "/goal/6", title: "Clean Water & Sanitation" },
    { id: 7, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Sustainable_Development_Goal_07CleanEnergy.svg/1200px-Sustainable_Development_Goal_07CleanEnergy.svg.png", link: "/goal/7", title: "Affordable & Clean Energy" },
    { id: 8, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Sustainable_Development_Goal_08DecentWork.svg/1200px-Sustainable_Development_Goal_08DecentWork.svg.png", link: "/goal/8", title: "Decent Work" },
    { id: 9, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Sustainable_Development_Goal_09Industry.svg/1200px-Sustainable_Development_Goal_09Industry.svg.png", link: "/goal/9", title: "Industry Innovation" },
    { id: 10, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Sustainable_Development_Goal_10ReducedInequalities.svg/1200px-Sustainable_Development_Goal_10ReducedInequalities.svg.png", link: "/goal/10", title: "Reduced Inequality" },
    { id: 11, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Sustainable_Development_Goal_11SustainableCities.svg/1200px-Sustainable_Development_Goal_11SustainableCities.svg.png", link: "/goal/11", title: "Sustainable Cities" },
    { id: 12, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Sustainable_Development_Goal_12ResponsibleConsumption.svg/1200px-Sustainable_Development_Goal_12ResponsibleConsumption.svg.png", link: "/goal/12", title: "Responsible Consumption" },
    { id: 13, img: "https://wmo.int/sites/default/files/2023-03/E-WEB-Goal-13.png", link: "/goal/13", title: "Climate Action" },
    { id: 14, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Sustainable_Development_Goal_14LifeBelowWater.svg/1200px-Sustainable_Development_Goal_14LifeBelowWater.svg.png", link: "/goal/14", title: "Life Below Water" },
    { id: 15, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPMqtUpP47JM5UpxRnwGFfVb84pvoLNSnj_w&s", link: "/goal/15", title: "Life on Land" },
    { id: 16, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Sustainable_Development_Goal_16PeaceJusticeInstitutions.svg/1200px-Sustainable_Development_Goal_16PeaceJusticeInstitutions.svg.png", link: "/goal/16", title: "Peace & Justice" },
    { id: 17, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sustainable_Development_Goal_17Partnerships.svg/1200px-Sustainable_Development_Goal_17Partnerships.svg.png", link: "/goal/17", title: "Partnerships for Goals" },
];

const Home = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    const hours = time.getHours() % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const hourDeg = (hours + minutes / 60) * 30;
    const minuteDeg = (minutes + seconds / 60) * 6;
    const secondDeg = seconds * 6;

    return (
        <>
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="rainbow-text">Empowering Change,<br />One Gesture at a Time</h1>
                    <p>
                        Join a global movement to support sustainable development. Contribute,
                        donate, and learn sign language to build a more inclusive world.
                    </p>
                    <div className="hero-buttons">
                        <button className="primary-btn" onClick={() => window.location.href = "/create-order"}>
                            Contribute Now
                        </button>

                        <button className="secondary-btn" onClick={() => window.location.href = "/apply"}>
                            Learn Sign Language
                        </button>
                    </div>
                </div>

                <div className="rotating-image-wrapper">
                    <img
                        src="https://oneoceanhub.org/wp-content/uploads/2023/01/SDG-wheel.png"
                        alt="Rotating SDG Wheel"
                        className="rotating-image"
                    />
                </div>

                <div className="clock embedded-clock">
                    {[...Array(12)].map((_, i) => (
                        <div
                            className="number"
                            key={i}
                            style={{
                                transform: `rotate(${i * 30}deg) translate(0, -65px) rotate(${-i * 30}deg)`
                            }}
                        >
                            {i === 0 ? 12 : i}
                        </div>
                    ))}

                    <div className="center-circle"></div>
                    <div className="hand hour" style={{ transform: `rotate(${hourDeg}deg)` }}></div>
                    <div className="hand minute" style={{ transform: `rotate(${minuteDeg}deg)` }}></div>
                    <div className="hand second" style={{ transform: `rotate(${secondDeg}deg)` }}></div>
                </div>

            </section >
            <section className="about-section" id="about-section">
                <h2>About ActAware</h2>
                <p>
                    At ActAware, we are on a mission to spread awareness about the 16 Sustainable Development Goals through
                    education, empathy, and engagement. We provide a unique platform where users can not only contribute to
                    causes that matter but also learn sign language as a step toward inclusion and communication equity.
                </p>
                <p>
                    Our vision is to make social contribution accessible and interactive for everyone — whether you're donating
                    to a cause, learning a new skill, or simply exploring how you can create a difference. We believe small acts
                    build big change.
                </p>
                <p>
                    Join us in making the world a better place, one contribution, one gesture, and one action at a time.
                </p>
            </section>
            <div className="body-container" id="body-container">
                <h2 className="section-heading">Explore All 17 Global Goals</h2>
                <div className="body-image">
                    {goals.map(goal => (
                        <a key={goal.id} href={goal.link} title={goal.title}>
                            <img src={goal.img} alt={`Goal ${goal.id}`} />
                        </a>
                    ))}
                </div>
            </div >

            <div className="horizontal-scroll-stories" id="horizontal-scroll-stories">
                {[
                    {
                        title: "Building Hope Through Green Walls",
                        image: "https://images.unsplash.com/photo-1495149905644-c9f27692c2c3?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        paragraphs: [
                            "In regions like the Gambia, planting trees is more than a climate action — it’s a lifeline. As arid lands threaten food production and livelihoods, communities are turning to green walls of hope: rows of cashew and moringa trees that shield against desertification. These trees are strategically planted not only to reclaim the soil but to empower communities with ownership over their environment.",
                            "Moringa, known as the 'miracle tree,' offers rich nutritional value, while cashew trees provide a valuable cash crop. Together, they offer food, income, and climate resilience. More importantly, they symbolize a return to harmony between people and nature. Local farmers receive training in sustainable agroforestry, enabling them to build a green circular economy. These initiatives restore dignity and independence, showing that a single seed can grow into a movement of change."
                        ]
                    },
                    {
                        title: "The Language of Inclusion",
                        image: "https://images.unsplash.com/photo-1663589523190-3dacf35e90d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        paragraphs: [
                            "At ActAware, we believe in bridging communication gaps. Our initiative to teach sign language is more than a campaign — it's a movement toward inclusivity, equity, and human connection. Millions of deaf individuals around the world face daily barriers to education, employment, and social interaction due to a lack of accessible communication.",
                            "By offering engaging sign language lessons, workshops, and interactive tools, we empower both hearing and non-hearing individuals to connect. Each session is a step toward empathy — where hand gestures transcend silence and foster understanding. With community outreach and advocacy, we envision a world where no voice is lost in translation, and everyone has the right to be heard — in whatever language they speak."
                        ]
                    },
                    {
                        title: "Empowering Through Small Acts",
                        image: "https://images.unsplash.com/photo-1709068874215-731a9291d208?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        paragraphs: [
                            "Whether it's donating a book, teaching a child, or planting a sapling — small acts have the power to ignite big change. At ActAware, we believe that impact doesn't always come in grand gestures; often, it's the quiet efforts — the shared meals, the lifted spirits, the helping hands — that shape our world the most.",
                            "Our platform celebrates every user who chooses to act, no matter the scale. Through stories, challenges, and recognition, we foster a sense of community and shared purpose. By tracking collective progress, we demonstrate how individual contributions weave into a global tapestry of transformation. Every act — no matter how small — is a spark. And together, we’re lighting up the world."
                        ]
                    }
                ].map((story, index) => (
                    <div className="story-card" key={index}>
                        <img
                            src={story.image}
                            alt={story.title}
                            className="story-card-img"
                        />
                        <div className="story-card-content">
                            <h2>{story.title}</h2>
                            {story.paragraphs.map((para, idx) => (
                                <p key={idx}>{para}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div >

        </>
    );
};

export default Home;
