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
        problemSetup: "A futuristic drone uses a lightweight, inextensible cable of length $L$ to fly a small cargo package of mass $m$ in a horizontal circle at a constant speed. The cable makes a constant angle $\\theta_0$ relative to the vertical, as shown in Figure 1. At a height $H$ above the ground, the cable suddenly snaps, releasing the package. The package then travels as a projectile before striking the flat ground at a horizontal distance $D$ from the release point. Frictional forces from air resistance are negligible.",
        jpegDiagram: `<img src="./images/q1-drone-setup.jpg" alt="Drone System - Circular Motion Setup" style="display:block; margin:auto; max-width:360px; height:auto;" />`,
        dataTable: null,
        parts: [
            {
                partId: "APPHY-EX001-SU001-P0001",
                partTitle: "Part A",
                partIntroText: "",
                jpegDiagram: `<img src="./images/q1-part-a-intro.jpg" alt="Part A Introduction Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU001-P0001-S0001",
                        subpartLabel: "i.",
                        subpartQuestion: "On the dot below, which represents the package while it is still flying in the horizontal circle, draw and label the forces (not components) acting on the package. Each force must be represented by a distinct arrow starting on, and pointing away from, the dot.",
                        jpegDiagram: `<img src="./images/q1-force-diagram.jpg" alt="Force Diagram - Package" style="display:block; margin:auto; max-width:200px; height:auto;" />`
                    },
                    {
                        subpartId: "APPHY-EX001-SU001-P0001-S0002",
                        subpartLabel: "ii.",
                        subpartQuestion: "Starting with Newton's second law, derive an expression for the tangential speed $v_0$ of the package while it is moving in the circular path. Express your final answer in terms of $m$, $L$, $\\theta_0$, and physical constants, as appropriate. Begin your derivation by writing a fundamental physics principle or an equation from the reference information.",
                        jpegDiagram: `<img src="./images/q1-subpart-ii-diagram.jpg" alt="Subpart ii Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`
                    },
                    {
                        subpartId: "APPHY-EX001-SU001-P0001-S0003",
                        subpartLabel: "iii.",
                        subpartQuestion: "Derive an expression for the horizontal distance $D$ traveled by the package from the moment the cable snaps until it hits the ground. Express your final answer in terms of $v_0$, $H$, and physical constants, as appropriate. Begin your derivation by writing a fundamental physics principle or an equation from the reference information.",
                        jpegDiagram: `<img src="./images/q1-subpart-iii-diagram.jpg" alt="Subpart iii Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`
                    }
                ]
            },
            {
                partId: "APPHY-EX001-SU001-P0002",
                partTitle: "Part B",
                partIntroText: "The drone system is adjusted so that it carries a new package with a mass greater than $m$. The cable length remains $L$, and the drone flies the package such that the cable maintains the exact same angle $\\theta_0$ relative to the vertical. The new package is flown at the same height $H$ when the cable snaps.",
                jpegDiagram: `<img src="./images/q1-part-b-intro.jpg" alt="Part B Introduction Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU001-P0002-S0001",
                        subpartLabel: "",
                        subpartQuestion: "Indicate whether the horizontal distance $D_{\\text{new}}$ traveled by the heavier package is greater than, less than, or equal to the original distance $D$.\n\n$$\\text{___ } D_{\\text{new}} > D \\quad \\text{___ } D_{\\text{new}} < D \\quad \\text{___ } D_{\\text{new}} = D$$\n\nJustify your answer. In your justification, include qualitative reasoning beyond mathematical derivations or expressions.",
                        jpegDiagram: `<img src="./images/q1-part-b-s0001-diagram.jpg" alt="Part B Subpart Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`
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
        problemSetup: "A horizontal, uniform solid disk of mass $M_0$ and radius $R_0$ is free to rotate with negligible friction about a vertical axle through its center. At time $t=0$, the disk rotates with a constant initial angular speed $\\omega_0$ in the counterclockwise (positive) direction. At time $t=t_1$, a small piece of sticky clay of mass $\\frac{1}{2}M_0$ is dropped vertically onto the outer edge of the rotating disk and sticks to it. Immediately after the collision, the disk-clay system rotates together with a new constant angular speed. Frictional forces from air resistance are negligible.",
        jpegDiagram: `<img src="./images/q2-disk-clay-setup.jpg" alt="Rotating Disk with Dropped Clay" style="display:block; margin:auto; max-width:300px; height:auto;" />`,
        dataTable: null,
        parts: [
            {
                partId: "APPHY-EX001-SU002-P0001",
                partTitle: "Part A",
                partIntroText: "The angular momentum-vector diagram in Figure 1 represents the angular momentum $L$ of the disk and the clay before the collision at $t < t_1$.",
                jpegDiagram: `<img src="./images/q2-part-a-figure1.jpg" alt="Figure 1: Angular Momentum Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU002-P0001-S0001",
                        subpartLabel: "",
                        subpartQuestion: "On Figure 2 below, draw arrows to represent the angular momentum vectors of the disk and the clay immediately after the collision ($t > t_1$). Each arrow must start on, and point away from, each dot. If the angular momentum of either object is zero, write \"$L=0$\" next to the dot. Draw the length of each arrow to represent the magnitude of each angular momentum, keeping your scale consistent with Figure 1. (Note: The rotational inertia of a solid disk is $I = \\frac{1}{2}MR^2$.)",
                        jpegDiagram: `<img src="./images/q2-collision-vectors.jpg" alt="Figure 2: Angular Momentum Vectors After Collision" style="display:block; margin:auto; max-width:340px; height:auto;" />`
                    }
                ]
            },
            {
                partId: "APPHY-EX001-SU002-P0002",
                partTitle: "Part B",
                partIntroText: "",
                jpegDiagram: `<img src="./images/q2-part-b-intro.jpg" alt="Part B Introduction Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU002-P0002-S0001",
                        subpartLabel: "",
                        subpartQuestion: "Starting with the conservation of angular momentum, derive an expression for the final angular speed $\\omega_f$ of the disk-clay system immediately after the collision. Express your final answer in terms of $\\omega_0$ and physical constants, as appropriate. Begin your derivation by writing a fundamental physics principle or an equation from the reference information.",
                        jpegDiagram: `<img src="./images/q2-part-b-s0001-diagram.jpg" alt="Part B Subpart Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`
                    }
                ]
            },
            {
                partId: "APPHY-EX001-SU002-P0003",
                partTitle: "Part C",
                partIntroText: "The graph shown in Figure 3 below represents the angular velocities $\\omega$ as functions of time $t$ from $t=0$ until the collision at $t=t_1$ for each of the following:\n- The rotating disk\n- The dropped clay\n- The total system (disk + clay)",
                jpegDiagram: `<img src="./images/q2-part-c-figure3-intro.jpg" alt="Figure 3: Angular Velocity Diagram (0 to t1)" style="display:block; margin:auto; max-width:300px; height:auto;" />`,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU002-P0003-S0001",
                        subpartLabel: "",
                        subpartQuestion: "On the graph in Figure 3, draw three lines that represent the angular velocities $\\omega$ of the disk, the clay, and the total system as functions of $t$ from $t=t_1$ to $t=2t_1$. Distinctly label each line.",
                        jpegDiagram: `<img src="./images/q2-angular-velocity-graph.jpg" alt="Figure 3: Angular Velocity vs Time Graph" style="display:block; margin:auto; max-width:320px; height:auto;" />`
                    }
                ]
            },
            {
                partId: "APPHY-EX001-SU002-P0004",
                partTitle: "Part D",
                partIntroText: "During the collision, the magnitudes of the changes in angular momentum of the disk and the clay are $|\\Delta L_{\\text{disk}}|$ and $|\\Delta L_{\\text{clay}}|$, respectively.",
                jpegDiagram: `<img src="./images/q2-part-d-intro.jpg" alt="Part D Introduction Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU002-P0004-S0001",
                        subpartLabel: "",
                        subpartQuestion: "Indicate whether $|\\Delta L_{\\text{disk}}|$ is greater than, less than, or equal to $|\\Delta L_{\\text{clay}}|$ by selecting one of the options:\n\n$$\\text{___ } |\\Delta L_{\\text{disk}}| > |\\Delta L_{\\text{clay}}| \\quad \\text{___ } |\\Delta L_{\\text{disk}}| < |\\Delta L_{\\text{clay}}| \\quad \\text{___ } |\\Delta L_{\\text{disk}}| = |\\Delta L_{\\text{clay}}|$$\n\nBriefly justify your response by referencing a fundamental physics principle.",
                        jpegDiagram: `<img src="./images/q2-part-d-s0001-diagram.jpg" alt="Part D Subpart Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`
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
        jpegDiagram: `<img src="./images/q3-setup-diagram.jpg" alt="Magnetic Launching System Setup" style="display:block; margin:auto; max-width:300px; height:auto;" />`,
        dataTable: null,
        parts: [
            {
                partId: "APPHY-EX001-SU003-P0001",
                partTitle: "Part A",
                partIntroText: "",
                jpegDiagram: `<img src="./images/q3-part-a-intro.jpg" alt="Part A Introduction Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU003-P0001-S0001",
                        subpartLabel: "i.",
                        subpartQuestion: "Indicate quantities that could be measured by the students that would allow them to determine $F_0$ using a linear graph.",
                        jpegDiagram: `<img src="./images/q3-part-a-s0001-diagram.jpg" alt="Part A Subpart i Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`
                    },
                    {
                        subpartId: "APPHY-EX001-SU003-P0001-S0002",
                        subpartLabel: "ii.",
                        subpartQuestion: "Briefly describe a method to reduce experimental uncertainty for the measured quantities.",
                        jpegDiagram: `<img src="./images/q3-part-a-s0002-diagram.jpg" alt="Part A Subpart ii Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`
                    }
                ]
            },
            {
                partId: "APPHY-EX001-SU003-P0002",
                partTitle: "Part B",
                partIntroText: "",
                jpegDiagram: `<img src="./images/q3-part-b-intro.jpg" alt="Part B Introduction Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU003-P0002-S0001",
                        subpartLabel: "i.",
                        subpartQuestion: "Indicate what quantities the students could graph on the horizontal and vertical axes to create a linear graph that can be used to determine $F_0$. Clearly state which quantity will be graphed on each axis.",
                        jpegDiagram: `<img src="./images/q3-part-b-s0001-diagram.jpg" alt="Part B Subpart i Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`
                    },
                    {
                        subpartId: "APPHY-EX001-SU003-P0002-S0002",
                        subpartLabel: "ii.",
                        subpartQuestion: "Briefly describe the relationship between $F_0$ and a feature of the graph from part B (i). Your answer may include an equation that relates $F_0$ and the chosen feature of the graph.",
                        jpegDiagram: `<img src="./images/q3-part-b-s0002-diagram.jpg" alt="Part B Subpart ii Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`
                    }
                ]
            },
            {
                partId: "APPHY-EX001-SU003-P0003",
                partTitle: "Part C & D Context",
                partIntroText: "In a different experiment, the students place a cart of known mass $M_0 = 0.50\\text{ kg}$ on a completely frictionless, horizontal track. The cart has a strong neodymium magnet fixed to its front face. At the end of the track, an identical magnet is securely anchored in place, oriented so that the two magnets repel each other. The cart is pushed toward the anchored magnet and held at rest at an initial separation distance $d$. The cart is then released from rest and travels away from the anchored magnet. A photogate positioned further down the track determines the final constant speed $v$ of the cart after it completely clears the magnetic field. The experiment is repeated several times with different initial release separation distances $d$ for the same cart. Table 1 shows the measured values of $d$ and $v$.\n\nThe students correctly determine that the relationship between $d$ and $v$ is given by:\n$$v^2 = \\left( \\frac{2C}{M_0} \\right) \\frac{1}{d}$$\nwhere $C$ is an unknown magnetic strength constant. The students want to determine $C$. The students create a graph with $\\frac{1}{d}$ plotted on the horizontal axis.",
                jpegDiagram: `<img src="./images/q3-part-c-setup-diagram.jpg" alt="Part C & D Setup Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`,
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
                        jpegDiagram: `<img src="./images/q3-part-c-s0001-diagram.jpg" alt="Part C Subpart i Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`
                    },
                    {
                        subpartId: "APPHY-EX001-SU003-P0003-S0002",
                        subpartLabel: "ii.",
                        subpartQuestion: "On the grid provided in Figure 3, create a graph that can be used to determine $C$. Clearly label the vertical axis with a numerical scale. Plot the corresponding data points on the grid.",
                        jpegDiagram: `<img src="./images/q3-magnetic-graph.jpg" alt="Figure 3: Magnetic Strength Data Graph Grid" style="display:block; margin:auto; max-width:340px; height:auto;" />`
                    },
                    {
                        subpartId: "APPHY-EX001-SU003-P0003-S0003",
                        subpartLabel: "iii.",
                        subpartQuestion: "Draw a best-fit line for the data plotted in part C (ii).",
                        jpegDiagram: `<img src="./images/q3-part-c-s0003-diagram.jpg" alt="Part C Subpart iii Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`
                    },
                    {
                        subpartId: "APPHY-EX001-SU003-P0003-S0004",
                        subpartLabel: "Part D",
                        subpartQuestion: "Using the best-fit line that you drew in part C (iii), calculate an experimental value for the magnetic strength constant $C$.",
                        jpegDiagram: `<img src="./images/q3-part-d-diagram.jpg" alt="Part D Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`
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
        problemSetup: "Two identical planetary probes, Probe X and Probe Y, are in stable circular orbits around a distant planet of mass $M_0$. Probe X is in a low orbit of radius $R_X = R_0$. Probe Y is in a higher orbit of radius $R_Y = 4R_0$. Both probes enter a very thin region of upper-atmospheric gas that exerts a small, constant resisting drag force of magnitude $F_0$ on each probe. The drag force acts opposite to each probe's direction of motion over a short tracking interval. Because the orbits remain nearly circular during this brief interval, the orbital speed $v$ of a probe at any radius $R$ can be approximated using the relationship for a stable circular orbit.",
        jpegDiagram: `<img src="./images/q4-orbital-probes.jpg" alt="Planet with Two Orbital Probes" style="display:block; margin:auto; max-width:260px; height:auto;" />`,
        dataTable: null,
        parts: [
            {
                partId: "APPHY-EX001-SU004-P0001",
                partTitle: "Part A",
                partIntroText: "",
                jpegDiagram: `<img src="./images/q4-part-a-intro.jpg" alt="Part A Introduction Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU004-P0001-S0001",
                        subpartLabel: "",
                        subpartQuestion: "Indicate whether the orbital speed $v_X$ of Probe X is greater than, less than, or equal to the orbital speed $v_Y$ of Probe Y during their circular orbits.\n\n$$\\bigcirc \\quad v_X > v_Y \\qquad \\bigcirc \\quad v_X < v_Y \\qquad \\bigcirc \\quad v_X = v_Y$$\n\nJustify your answer using qualitative reasoning beyond referencing equations.",
                        jpegDiagram: `<img src="./images/q4-part-a-s0001-diagram.jpg" alt="Part A Subpart Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`
                    }
                ]
            },
            {
                partId: "APPHY-EX001-SU004-P0002",
                partTitle: "Part B",
                partIntroText: "",
                jpegDiagram: `<img src="./images/q4-part-b-intro.jpg" alt="Part B Introduction Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU004-P0002-S0001",
                        subpartLabel: "",
                        subpartQuestion: "Starting with Newton's second law in translational form or the definition of centripetal acceleration, derive an expression for the exact mathematical ratio of the orbital speeds $\\frac{v_X}{v_Y}$. Express your final numerical ratio as a simplified integer or fraction.\n\nBegin your derivation by writing a fundamental physics principle or an equation from the reference information.",
                        jpegDiagram: `<img src="./images/q4-part-b-s0001-diagram.jpg" alt="Part B Subpart Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`
                    }
                ]
            },
            {
                partId: "APPHY-EX001-SU004-P0003",
                partTitle: "Part C",
                partIntroText: "",
                jpegDiagram: `<img src="./images/q4-part-c-intro.jpg" alt="Part C Introduction Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU004-P0003-S0001",
                        subpartLabel: "",
                        subpartQuestion: "In a cohesive, paragraph-length response, explain how your quantitative derivation in Part B is consistent with your qualitative reasoning in Part A. Your response must explicitly translate how specific features of your mathematical solution align with the physical principles you described conceptually.",
                        jpegDiagram: `<img src="./images/q4-part-c-s0001-diagram.jpg" alt="Part C Subpart Diagram" style="display:block; margin:auto; max-width:300px; height:auto;" />`
                    }
                ]
            }
        ]
    }
];
