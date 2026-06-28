const ap1PracticeExamMCQPoolOne = [
    {
        id: "q1",
        unit: "Kinematics",
        topic: "Constant Acceleration",
        skill: "Conceptual Analysis",
        difficulty: "Medium",
        // Setup diagram is now optional SVG/HTML code. 
        // Notice the use of var(--text-main) and var(--panel-bg) for dynamic theme matching.
        svgDiagram: `
            <svg width="250" height="100" viewBox="0 0 250 100" xmlns="http://www.w3.org/2000/svg">
                <!-- Track -->
                <line x1="10" y1="80" x2="240" y2="80" stroke="var(--text-main)" stroke-width="3"/>
                <!-- Cart -->
                <rect x="30" y="50" width="40" height="20" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/>
                <circle cx="40" cy="75" r="5" fill="var(--text-main)"/>
                <circle cx="60" cy="75" r="5" fill="var(--text-main)"/>
                <!-- Acceleration Arrow -->
                <path d="M 85 60 L 125 60 M 115 55 L 125 60 L 115 65" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                <text x="100" y="50" fill="var(--text-main)" font-family="inherit" font-size="14" text-anchor="middle">a</text>
            </svg>
        `,
        question: "A cart travels along a horizontal track with a constant acceleration path as shown above. Which of the following parameters must adapt at a constant linear rate with respect to time variables?",
        // Choices are now an array of objects to support both text and individual diagrams
        choices: [
            { 
                text: "Kinetic Energy", 
                svgDiagram: "" 
            },
            { 
                text: "Instantaneous Velocity", 
                svgDiagram: "" 
            },
            { 
                text: "Linear Position Displacement", 
                svgDiagram: "" 
            },
            { 
                text: "Mechanical Power Output", 
                svgDiagram: "" 
            }
        ],
        correctIndex: 1,
        explanation: "Since acceleration is constant, velocity changes at a linear rate with respect to time according to the kinematic equation v = v0 + at."
    },
    {
        id: "q2",
        unit: "Dynamics",
        topic: "Newton's Second Law",
        skill: "Mathematical Routines",
        difficulty: "Medium",
        // Example of a question with no setup diagram
        svgDiagram: "",
        question: "A 5.0 kg box is pushed across a rough horizontal surface by a constant horizontal force. Which of the following free-body diagrams best represents the vertical forces acting on the box?",
        // Example of answer choices containing their own diagrams
        choices: [
            {
                text: "Equal normal and gravitational forces",
                svgDiagram: `
                    <svg width="80" height="100" viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="40" cy="50" r="4" fill="var(--text-main)"/>
                        <line x1="40" y1="50" x2="40" y2="20" stroke="var(--text-main)" stroke-width="2"/>
                        <path d="M 35 25 L 40 20 L 45 25" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                        <text x="45" y="25" fill="var(--text-main)" font-family="inherit" font-size="12">Fn</text>
                        <line x1="40" y1="50" x2="40" y2="80" stroke="var(--text-main)" stroke-width="2"/>
                        <path d="M 35 75 L 40 80 L 45 75" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                        <text x="45" y="80" fill="var(--text-main)" font-family="inherit" font-size="12">Fg</text>
                    </svg>
                `
            },
            {
                text: "Greater normal force",
                svgDiagram: `
                    <svg width="80" height="100" viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="40" cy="50" r="4" fill="var(--text-main)"/>
                        <line x1="40" y1="50" x2="40" y2="10" stroke="var(--text-main)" stroke-width="2"/>
                        <path d="M 35 15 L 40 10 L 45 15" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                        <line x1="40" y1="50" x2="40" y2="70" stroke="var(--text-main)" stroke-width="2"/>
                        <path d="M 35 65 L 40 70 L 45 65" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                    </svg>
                `
            },
            {
                text: "Only gravitational force",
                svgDiagram: "" // Diagram intentionally omitted for this choice
            },
            {
                text: "No vertical forces",
                svgDiagram: "" 
            }
        ],
        correctIndex: 0,
        explanation: "Since the box is moving horizontally, there is no vertical acceleration. Therefore, the upward normal force must perfectly balance the downward gravitational force."
    }
];
