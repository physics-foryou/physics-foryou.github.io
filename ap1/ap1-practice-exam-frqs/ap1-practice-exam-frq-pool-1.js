/**
 * AP Physics 1 - Practice Exam 1
 * Section II: Free-Response Questions Template Pool
 * =========================================================================
 * ID SYSTEM RULES & LOGIC:
 * =========================================================================
 * 1. setupId (3 Tiers): [COURSE]-[EXAM]-[SETUP]
 * - Course (5 chars): 'APPHY' (AP Physics 1)
 * - Exam Number (5 chars): Starts with 'EX' followed by digits (e.g., 'EX001')
 * - Setup Number (5 chars): Starts with 'SU' followed by digits (e.g., 'SU001')
 * Format: XXXXX-XXXXX-XXXXX (e.g., APPHY-EX001-SU001)
 * * 2. partId (4 Tiers): [COURSE]-[EXAM]-[SETUP]-[PART]
 * - Inherits the first 3 tiers from its parent setup.
 * - Part Number (5 chars): Starts with 'P' followed by digits (e.g., 'P0001')
 * Format: XXXXX-XXXXX-XXXXX-XXXXX (e.g., APPHY-EX001-SU001-P0001)
 * * 3. subpartId (5 Tiers): [COURSE]-[EXAM]-[SETUP]-[PART]-[SUBPART]
 * - Inherits the first 4 tiers from its parent part.
 * - Subpart Number (5 chars): Starts with 'S' followed by digits (e.g., 'S0001')
 * Format: XXXXX-XXXXX-XXXXX-XXXXX-XXXXX (e.g., APPHY-EX001-SU001-P0001-S0001)
 * =========================================================================
 */

const ap1PracticeExamFRQPoolOne = [
    // =========================================================================
    // QUESTION 1
    // =========================================================================
    {
        setupId: "APPHY-EX001-SU001",
        problemNumber: 1,
        problemType: "Mathematical Routines",
        problemSetup: "A stationary planet of mass $M$ is located at the center of a circular orbit. Two identical moons, Moon A and Moon B, each of mass $m$, orbit the planet. At the instant shown, the three bodies form the vertices of an equilateral triangle, where the distance between any two bodies is $d$.",
        pngDiagram: `<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-frq-images/ap1-PE1-FRQ-1.png" alt="N/A" style="display:block; margin:auto; max-width:360px; height:auto;" />`,
        dataTable: null,
        parts: [
            {
                partId: "APPHY-EX001-SU001-P0001",
                partTitle: "Part A",
                partIntroText: null,
                pngDiagram: null,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU001-P0001-S0001",
                        subpartLabel: "i.",
                        subpartQuestion: "On the dot below, which represents Moon B at the instant shown in the diagram, draw and label the forces, not components, exerted on Moon B. Each force must be represented by a distinct arrow starting on, and pointing away from, the dot. The relative lengths of the arrows should reflect the relative magnitudes of the forces.",
                        pngDiagram: `<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-frq-images/ap1-PE1-FRQ-1A.png" alt="N/A" style="display:block; margin:auto; max-width:360px; height:auto;" />`
                    },
                    {
                        subpartId: "APPHY-EX001-SU001-P0001-S0002",
                        subpartLabel: "ii.",
                        subpartQuestion: "Derive an expression for the orbital speed of Moon B. Express your final answer in terms of $m$, $M$, $d$, and physical constants, as appropriate. Begin your derivation by writing a fundamental physics principle or an equation from the reference sheet.",
                        pngDiagram: null
                    },
                    {
                        subpartId: "APPHY-EX001-SU001-P0001-S0003",
                        subpartLabel: "iii.",
                        subpartQuestion: "Derive an expression for the orbital period $T$ of Moon B. Express your final answer in terms of $m$, $M$, $d$, and physical constants, as appropriate.",
                        pngDiagram: null
                    }
                ]
            },
            {
                partId: "APPHY-EX001-SU001-P0002",
                partTitle: "Part B",
                partIntroText: null,
                pngDiagram: null,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU001-P0002-S0001",
                        subpartLabel: "",
                        subpartQuestion: "In a alternate configuration, the separation distance between each planet is increased to a distance greater than $d$. Planet A and Planet B still have the same original orbital velocities. The gravitational potential energy of this new 3-body system is $U_g$. <br> If the original gravitational potential energy of the 3-body system is $U_{g0}$, indicate whether $U_g$ is greater than, less than, or equal to $U_{g0}$, by writing one of the following. <br> - $U_g > U_{g0}$ <br> - $U_g < U_{g0}$ <br> - $U_g = U_{g0}$ <br> Justify your answer with a qualitative reasoning without mathematical derivations or expressions.",
                        pngDiagram: null
                    }
                ]
            }
        ]
    },

    // =========================================================================
    // QUESTION 2
    // =========================================================================
    {
        setupId: "APPHY-EX001-SU002",
        problemNumber: 2,
        problemType: "Translation Between Representations",
        problemSetup: "A uniform drawbridge of mass $M$ and length $L$ is attached to a vertical castle wall by an axle at its base. A string attached to the castle wall holds the drawbridge at rest. The string is attached to the outer end of the drawbridge and is oriented perpendicular to the drawbridge. The angle $\\theta_0$ is measured between the vertical castle wall and the drawbridge, as shown in the diagram above.",
        pngDiagram: `<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-frq-images/ap1-PE1-FRQ-2.png" alt="N/A" style="display:block; margin:auto; max-width:360px; height:auto;" />`,
        dataTable: null,
        parts: [
            {
                partId: "APPHY-EX001-SU002-P0001",
                partTitle: "Part A",
                partIntroText: null,
                pngDiagram: null,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU002-P0001-S0001",
                        subpartLabel: "",
                        subpartQuestion: "On the diagram shown, which represents the drawbridge, draw and label the forces, not components, exerted on the drawbridge. Each force must be represented by a distinct arrow starting on, and pointing away from, the point at which the force is exerted.",
                        pngDiagram: `<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-frq-images/ap1-PE1-FRQ-2A.png" alt="N/A" style="display:block; margin:auto; max-width:360px; height:auto;" />`
                    }
                ]
            },
            {
                partId: "APPHY-EX001-SU002-P0002",
                partTitle: "Part B",
                partIntroText: "",
                pngDiagram: null,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU002-P0002-S0001",
                        subpartLabel: "",
                        subpartQuestion: "Derive an expression for the magnitude of the tension $T_0$ in the string at the instant shown in the diagram. Express your final answer in terms of $M$, $L$, $\\theta_0$, and physical constants, as appropriate. Start by writing a fundamental physics principle or an equation from the reference sheet.",
                        pngDiagram: null
                    }
                ]
            },
            {
                partId: "APPHY-EX001-SU002-P0003",
                partTitle: "Part C",
                partIntroText: null,
                pngDiagram: null,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU002-P0003-S0001",
                        subpartLabel: "",
                        subpartQuestion: "The drawbridge is now lowered at a constant angular velocity $\\omega_0$ from an initial angle $\\theta_0$ until it reaches a final angle $\\theta_f$ where the drawbridge rests on the floor. On the axes below, sketch a graph of the magnitude of the tension $T$ in the string as a function of the angle $\\theta$ as it approaches $\\theta_f$ from $\\theta_0$.",
                        pngDiagram: `<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-frq-images/ap1-PE1-FRQ-2C.png" alt="N/A" style="display:block; margin:auto; max-width:360px; height:auto;" />`
                    }
                ]
            },
            {
                partId: "APPHY-EX001-SU002-P0004",
                partTitle: "Part D",
                partIntroText: null,
                pngDiagram: null,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU002-P0004-S0001",
                        subpartLabel: "",
                        subpartQuestion: "Suppose the original drawbridge is replaced with a new, non-uniform drawbridge. The new drawbridge has the same mass $M$ and length $L$, but the mass is concentrated a distance $\\frac{3L}{4}$ from the axle. The drawbridge is held at rest at the same initial angle $\\theta_0$. <br><br> Let $T_{\\text{uniform}}$ be the magnitude of the tension required to hold the original drawbridge at $\\theta_0$, and let $T_{\\text{new}}$ be the magnitude of the tension required to hold the new non-uniform drawbridge at $\\theta_0$. <br><br> Indicate whether $T_{\\text{new}}$ is greater than, less than, or equal to $T_{\\text{uniform}}$ by writing one of the following. <br> - $T_{\\text{new}} > T_{\\text{uniform}}$ <br> - $T_{\\text{new}} < T_{\\text{uniform}}$ <br> - $T_{\\text{new}} = T_{\\text{uniform}}$ <br><br> Briefly justify your response by referencing a fundamental physics principle.",
                        pngDiagram: `<img src="ap1/ap1-practice-exam-1-pcq-problem-images/q2-part-d-s0001-diagram.png" alt="Part D Subpart Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`
                    }
                ]
            }
        ]
    },

    // =========================================================================
    // QUESTION 3
    // =========================================================================
    {
        setupId: "APPHY-EX001-SU003",
        problemNumber: 3,
        problemType: "Experimental Design and Analysis",
        problemSetup: "A group of students are investigating a magnetic launching system using the following procedure.\n\nA cart of unknown mass $M$ is placed on a horizontal track. A magnetic launcher at the end of the track uses a repelling magnetic force to accelerate the cart from rest over a fixed, short distance $x_0$. Frictional forces are negligible between the cart and the track while the cart is being launched. Once the cart leaves the launcher at a maximum speed $v$, it enters a rough section of the horizontal track where a constant kinetic frictional force is exerted on the cart until it comes to a stop. The students are asked to perform an experiment in which a single quantity is varied in order to collect data that could be graphed to determine the value $F_0$ of the constant launching force exerted by the magnetic launcher. The students have access to only a meterstick and a stopwatch.",
        pngDiagram: `<img src="ap1/ap1-practice-exam-1-pcq-problem-images/q3-setup-diagram.png" alt="Magnetic Launching System Setup" style="display:block; margin:auto; max-width:300px; height:auto;" />`,
        dataTable: null,
        parts: [
            {
                partId: "APPHY-EX001-SU003-P0001",
                partTitle: "Part A",
                partIntroText: "",
                pngDiagram: `<img src="ap1/ap1-practice-exam-1-pcq-problem-images/q3-part-a-intro.png" alt="Part A Introduction Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU003-P0001-S0001",
                        subpartLabel: "i.",
                        subpartQuestion: "Indicate quantities that could be measured by the students that would allow them to determine $F_0$ using a linear graph.",
                        pngDiagram: `<img src="ap1/ap1-practice-exam-1-pcq-problem-images/q3-part-a-s0001-diagram.png" alt="Part A Subpart i Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`
                    },
                    {
                        subpartId: "APPHY-EX001-SU003-P0001-S0002",
                        subpartLabel: "ii.",
                        subpartQuestion: "Briefly describe a method to reduce experimental uncertainty for the measured quantities.",
                        pngDiagram: `<img src="ap1/ap1-practice-exam-1-pcq-problem-images/q3-part-a-s0002-diagram.png" alt="Part A Subpart ii Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`
                    }
                ]
            },
            {
                partId: "APPHY-EX001-SU003-P0002",
                partTitle: "Part B",
                partIntroText: "",
                pngDiagram: `<img src="ap1/ap1-practice-exam-1-pcq-problem-images/q3-part-b-intro.png" alt="Part B Introduction Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU003-P0002-S0001",
                        subpartLabel: "i.",
                        subpartQuestion: "Indicate what quantities the students could graph on the horizontal and vertical axes to create a linear graph that can be used to determine $F_0$. Clearly state which quantity will be graphed on each axis.",
                        pngDiagram: `<img src="ap1/ap1-practice-exam-1-pcq-problem-images/q3-part-b-s0001-diagram.png" alt="Part B Subpart i Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`
                    },
                    {
                        subpartId: "APPHY-EX001-SU003-P0002-S0002",
                        subpartLabel: "ii.",
                        subpartQuestion: "Briefly describe the relationship between $F_0$ and a feature of the graph from part B (i). Your answer may include an equation that relates $F_0$ and the chosen feature of the graph.",
                        pngDiagram: `<img src="ap1/ap1-practice-exam-1-pcq-problem-images/q3-part-b-s0002-diagram.png" alt="Part B Subpart ii Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`
                    }
                ]
            },
            {
                partId: "APPHY-EX001-SU003-P0003",
                partTitle: "Part C & D Context",
                partIntroText: "In a different experiment, the students place a cart of known mass $M_0 = 0.50\\text{ kg}$ on a completely frictionless, horizontal track. The cart has a strong neodymium magnet fixed to its front face. At the end of the track, an identical magnet is securely anchored in place, oriented so that the two magnets repel each other. The cart is pushed toward the anchored magnet and held at rest at an initial separation distance $d$. The cart is then released from rest and travels away from the anchored magnet. A photogate positioned further down the track determines the final constant speed $v$ of the cart after it completely clears the magnetic field. The experiment is repeated several times with different initial release separation distances $d$ for the same cart. Table 1 shows the measured values of $d$ and $v$.\n\nThe students correctly determine that the relationship between $d$ and $v$ is given by:\n$$v^2 = \\left( \\frac{2C}{M_0} \\right) \\frac{1}{d}$$\nwhere $C$ is an unknown magnetic strength constant. The students want to determine $C$. The students create a graph with $\\frac{1}{d}$ plotted on the horizontal axis.",
                pngDiagram: `<img src="ap1/ap1-practice-exam-1-pcq-problem-images/q3-part-c-setup-diagram.png" alt="Part C & D Setup Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`,
                dataTable: {
                    rows: [
                        ["0.10", "1.41"],
                        ["0.20", "1.00"],
                        ["0.30", "0.82"],
                        ["0.40", "0.71"],
                        ["0.50", "0.63"]
                    ]
                },
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU003-P0003-S0001",
                        subpartLabel: "i.",
                        subpartQuestion: "Label the vertical axis of Figure 3 with a measured or calculated quantity. Include units, as appropriate. The graphed quantities should yield a linear graph that can be used to determine $C$.",
                        pngDiagram: `<img src="ap1/ap1-practice-exam-1-pcq-problem-images/q3-part-c-s0001-diagram.png" alt="Part C Subpart i Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`
                    },
                    {
                        subpartId: "APPHY-EX001-SU003-P0003-S0002",
                        subpartLabel: "ii.",
                        subpartQuestion: "On the grid provided in Figure 3, create a graph that can be used to determine $C$. Clearly label the vertical axis with a numerical scale. Plot the corresponding data points on the grid.",
                        pngDiagram: `<img src="ap1/ap1-practice-exam-1-pcq-problem-images/q3-magnetic-graph.png" alt="Figure 3: Magnetic Strength Data Graph Grid" style="display:block; margin:auto; max-width:340px; height:auto;" />`
                    },
                    {
                        subpartId: "APPHY-EX001-SU003-P0003-S0003",
                        subpartLabel: "iii.",
                        subpartQuestion: "Draw a best-fit line for the data plotted in part C (ii).",
                        pngDiagram: `<img src="ap1/ap1-practice-exam-1-pcq-problem-images/q3-part-c-s0003-diagram.png" alt="Part C Subpart iii Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`
                    },
                    {
                        subpartId: "APPHY-EX001-SU003-P0003-S0004",
                        subpartLabel: "Part D",
                        subpartQuestion: "Using the best-fit line that you drew in part C (iii), calculate an experimental value for the magnetic strength constant $C$.",
                        pngDiagram: `<img src="ap1/ap1-practice-exam-1-pcq-problem-images/q3-part-d-diagram.png" alt="Part D Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`
                    }
                ]
            }
        ]
    },

    // =========================================================================
    // QUESTION 4
    // =========================================================================
    {
        setupId: "APPHY-EX001-SU004",
        problemNumber: 4,
        problemType: "Qualitative/Quantitative Translation",
        problemSetup: "A small bob of mass $m$ is attached to a long, lightweight string that is wrapped several turns around a pulley and is then anchored at a point, as shown. The active length of the pendulum, which is the distance from the bob to the point where the string first contacts the pulley, is initially $L$. The bob is pulled back to a small angle $\\theta$ and is then released, oscillating with a frequency $f_0$.<br>The anchor is then moved and secured such that the active length of the pendulum becomes $2L$. The bob is again pulled back to the same small angle $\\theta$ and released, oscillating with a new frequency $f$.",
        pngDiagram: `<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-frq-images/ap1-PE1-FRQ-4.png" alt="N/A" style="display:block; margin:auto; max-width:360px; height:auto;" />`,
        dataTable: null,
        parts: [
            {
                partId: "APPHY-EX001-SU004-P0001",
                partTitle: "Part A",
                partIntroText: "",
                pngDiagram: null,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU004-P0001-S0001",
                        subpartLabel: "",
                        subpartQuestion: "Indicate whether $f$ is greater than, less than, or equal to $f_0$ by writing one of the following. <br> - $f > f_0$ <br> - $f < f_0$ <br> - $f = f_0$ <br> Justify your answer using qualitative reasoning without referencing equations.",
                        pngDiagram: null
                    }
                ]
            },
            {
                partId: "APPHY-EX001-SU004-P0002",
                partTitle: "Part B",
                partIntroText: "",
                pngDiagram: null,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU004-P0002-S0001",
                        subpartLabel: "",
                        subpartQuestion: "The pulley is removed, and the bob is attached to a string of fixed length $L$. The bob is pulled to the left to a small angle $\\theta$ and is then released from rest. The moment the bob reaches point 2, the string is cut. Indicate and justify which path, A, B, or C, the bob would follow.",
                        pngDiagram: `<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-frq-images/ap1-PE1-FRQ-4B.png" alt="N/A" style="display:block; margin:auto; max-width:360px; height:auto;" />`
                    }
                ]
            },
            {
                partId: "APPHY-EX001-SU004-P0003",
                partTitle: "Part C",
                partIntroText: "",
                pngDiagram: `<img src="ap1/ap1-practice-exam-1-pcq-problem-images/q4-part-c-intro.png" alt="Part C Introduction Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU004-P0003-S0001",
                        subpartLabel: "",
                        subpartQuestion: "Continuing with the setup from Part B, the rigid string is replaced with an elastic string of unstretched length $L$. The bob is pulled to the left at a small angle $\\theta$ such that the string remains unstretched, and is then released from rest. If the string is cut at the exact moment the bob reaches Point 2, briefly explain what would happen to the resulting trajectory of the bob.",
                        pngDiagram: null
                    }
                ]
            }
        ]
    }
];
