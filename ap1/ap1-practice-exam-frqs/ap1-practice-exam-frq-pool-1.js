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
        problemType: "Kinematics, Dynamics & Circular Motion",
        problemSetup: "A futuristic drone uses a lightweight, inextensible cable of length $L$ to fly a small cargo package of mass $m$ in a horizontal circle at a constant speed. The cable makes a constant angle $\\theta_0$ relative to the vertical, as shown in Figure 1. At a height $H$ above the ground, the cable suddenly snaps, releasing the package. The package then travels as a projectile before striking the flat ground at a horizontal distance $D$ from the release point. Frictional forces from air resistance are negligible.",
        svgDiagram: `
            <svg width="360" height="240" viewBox="0 0 360 240" style="display:block; margin:auto;">
                <line x1="60" y1="30" x2="180" y2="30" stroke="var(--text-main)" stroke-width="2" stroke-dasharray="4,4"/>
                <circle cx="120" cy="30" r="4" fill="var(--text-main)"/>
                
                <line x1="120" y1="30" x2="120" y2="110" stroke="var(--text-dim)" stroke-width="1" stroke-dasharray="3,3"/>
                
                <path d="M 120,55 A 25,25 0 0 1 138,48" fill="none" stroke="var(--text-main)" stroke-width="1.5"/>
                <text x="127" y="70" font-family="monospace" font-size="12" fill="var(--text-main)">&theta;<sub>0</sub></text>
                
                <line x1="120" y1="30" x2="155" y2="90" stroke="var(--text-main)" stroke-width="2"/>
                <text x="143" y="55" font-family="monospace" font-size="12" fill="var(--text-main)">L</text>
                
                <ellipse cx="120" cy="90" rx="35" ry="12" fill="none" stroke="var(--text-dim)" stroke-width="1" stroke-dasharray="4,2"/>
                
                <circle cx="155" cy="90" r="7" fill="var(--text-main)"/>
                <text x="167" y="94" font-family="monospace" font-size="12" fill="var(--text-main)">m</text>
                
                <line x1="40" y1="90" x2="40" y2="200" stroke="var(--text-main)" stroke-width="1.5"/>
                <line x1="35" y1="90" x2="45" y2="90" stroke="var(--text-main)" stroke-width="1.5"/>
                <line x1="35" y1="200" x2="45" y2="200" stroke="var(--text-main)" stroke-width="1.5"/>
                <text x="25" y="150" font-family="monospace" font-size="13" fill="var(--text-main)">H</text>
                
                <line x1="20" y1="200" x2="340" y2="200" stroke="var(--text-main)" stroke-width="2"/>
                
                <path d="M 155,90 Q 210,90 265,200" fill="none" stroke="var(--text-main)" stroke-width="1.5" stroke-dasharray="4,4"/>
                <circle cx="265" cy="200" r="4" fill="none" stroke="var(--text-dim)"/>
                
                <line x1="155" y1="215" x2="265" y2="215" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="155" y1="210" x2="155" y2="220" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="265" y1="210" x2="265" y2="220" stroke="var(--text-main)" stroke-width="1"/>
                <text x="205" y="230" font-family="monospace" font-size="13" fill="var(--text-main)">D</text>
                
                <text x="130" y="15" font-family="monospace" font-size="11" fill="var(--text-dim)">Figure 1</text>
            </svg>
        `,
        dataTable: null,
        parts: [
            {
                partId: "APPHY-EX001-SU001-P0001",
                partTitle: "Part A",
                partIntroText: "",
                svgDiagram: ``,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU001-P0001-S0001",
                        subpartLabel: "i.",
                        subpartQuestion: "On the dot below, which represents the package while it is still flying in the horizontal circle, draw and label the forces (not components) acting on the package. Each force must be represented by a distinct arrow starting on, and pointing away from, the dot.",
                        svgDiagram: `
                            <svg width="200" height="160" viewBox="0 0 200 160" style="display:block; margin:auto;">
                                <circle cx="100" cy="80" r="6" fill="var(--text-main)"/>
                                <text x="112" y="84" font-family="monospace" font-size="12" fill="var(--text-dim)">Package</text>
                            </svg>
                        `
                    },
                    {
                        subpartId: "APPHY-EX001-SU001-P0001-S0002",
                        subpartLabel: "ii.",
                        subpartQuestion: "Starting with Newton's second law, derive an expression for the tangential speed $v_0$ of the package while it is moving in the circular path. Express your final answer in terms of $m$, $L$, $\\theta_0$, and physical constants, as appropriate. Begin your derivation by writing a fundamental physics principle or an equation from the reference information.",
                        svgDiagram: ``
                    },
                    {
                        subpartId: "APPHY-EX001-SU001-P0001-S0003",
                        subpartLabel: "iii.",
                        subpartQuestion: "Derive an expression for the horizontal distance $D$ traveled by the package from the moment the cable snaps until it hits the ground. Express your final answer in terms of $v_0$, $H$, and physical constants, as appropriate. Begin your derivation by writing a fundamental physics principle or an equation from the reference information.",
                        svgDiagram: ``
                    }
                ]
            },
            {
                partId: "APPHY-EX001-SU001-P0002",
                partTitle: "Part B",
                partIntroText: "The drone system is adjusted so that it carries a new package with a mass greater than $m$. The cable length remains $L$, and the drone flies the package such that the cable maintains the exact same angle $\\theta_0$ relative to the vertical. The new package is flown at the same height $H$ when the cable snaps.",
                svgDiagram: ``,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU001-P0002-S0001",
                        subpartLabel: "",
                        subpartQuestion: "Indicate whether the horizontal distance $D_{\\text{new}}$ traveled by the heavier package is greater than, less than, or equal to the original distance $D$.\n\n$$\\text{___ } D_{\\text{new}} > D \\quad \\text{___ } D_{\\text{new}} < D \\quad \\text{___ } D_{\\text{new}} = D$$\n\nJustify your answer. In your justification, include qualitative reasoning beyond mathematical derivations or expressions.",
                        svgDiagram: ``
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
        problemType: "Rotational Dynamics & Angular Momentum",
        problemSetup: "A horizontal, uniform solid disk of mass $M_0$ and radius $R_0$ is free to rotate with negligible friction about a vertical axle through its center. At time $t=0$, the disk rotates with a constant initial angular speed $\\omega_0$ in the counterclockwise (positive) direction. At time $t=t_1$, a small piece of sticky clay of mass $\\frac{1}{2}M_0$ is dropped vertically onto the outer edge of the rotating disk and sticks to it. Immediately after the collision, the disk-clay system rotates together with a new constant angular speed. Frictional forces from air resistance are negligible.",
        svgDiagram: `
            <svg width="300" height="180" viewBox="0 0 300 180" style="display:block; margin:auto;">
                <line x1="150" y1="30" x2="150" y2="150" stroke="var(--text-main)" stroke-width="3"/>
                
                <ellipse cx="150" cy="100" rx="80" ry="25" fill="rgba(0,0,0,0.05)" stroke="var(--text-main)" stroke-width="3"/>
                
                <circle cx="150" cy="100" r="4" fill="var(--text-main)"/>
                
                <text x="180" y="95" font-family="monospace" font-size="12" fill="var(--text-main)">M_0, R_0</text>
                
                <path d="M 90,105 A 70,22 0 0 0 135,123" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                <polygon points="135,123 127,119 130,126" fill="var(--text-main)"/>
                <text x="105" y="140" font-family="monospace" font-size="13" font-weight="bold" fill="var(--text-main)">&omega;_0</text>
                
                <circle cx="230" cy="45" r="6" fill="var(--text-dim)"/>
                <line x1="230" y1="45" x2="230" y2="70" stroke="var(--text-dim)" stroke-width="1.5" stroke-dasharray="3,2"/>
                <polygon points="230,75 226,67 234,67" fill="var(--text-dim)"/>
                <text x="242" y="48" font-family="monospace" font-size="12" fill="var(--text-dim)">Clay (1/2 M_0)</text>
            </svg>
        `,
        dataTable: null,
        parts: [
            {
                partId: "APPHY-EX001-SU002-P0001",
                partTitle: "Part A",
                partIntroText: "The angular momentum-vector diagram in Figure 1 represents the angular momentum $L$ of the disk and the clay before the collision at $t < t_1$.",
                svgDiagram: ``,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU002-P0001-S0001",
                        subpartLabel: "",
                        subpartQuestion: "On Figure 2 below, draw arrows to represent the angular momentum vectors of the disk and the clay immediately after the collision ($t > t_1$). Each arrow must start on, and point away from, each dot. If the angular momentum of either object is zero, write \"$L=0$\" next to the dot. Draw the length of each arrow to represent the magnitude of each angular momentum, keeping your scale consistent with Figure 1. (Note: The rotational inertia of a solid disk is $I = \\frac{1}{2}MR^2$.)",
                        svgDiagram: `
                            <svg width="340" height="120" viewBox="0 0 340 120" style="display:block; margin:auto;">
                                <text x="60" y="20" font-family="monospace" font-size="12" fill="var(--text-main)" font-weight="bold">Figure 2: Immediately After Collision</text>
                                
                                <circle cx="90" cy="70" r="5" fill="var(--text-main)"/>
                                <text x="75" y="92" font-family="monospace" font-size="12" fill="var(--text-main)">Disk Vector</text>
                                
                                <circle cx="230" cy="70" r="5" fill="var(--text-main)"/>
                                <text x="215" y="92" font-family="monospace" font-size="12" fill="var(--text-main)">Clay Vector</text>
                            </svg>
                        `
                    }
                ]
            },
            {
                partId: "APPHY-EX001-SU002-P0002",
                partTitle: "Part B",
                partIntroText: "",
                svgDiagram: ``,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU002-P0002-S0001",
                        subpartLabel: "",
                        subpartQuestion: "Starting with the conservation of angular momentum, derive an expression for the final angular speed $\\omega_f$ of the disk-clay system immediately after the collision. Express your final answer in terms of $\\omega_0$ and physical constants, as appropriate. Begin your derivation by writing a fundamental physics principle or an equation from the reference information.",
                        svgDiagram: ``
                    }
                ]
            },
            {
                partId: "APPHY-EX001-SU002-P0003",
                partTitle: "Part C",
                partIntroText: "The graph shown in Figure 3 below represents the angular velocities $\\omega$ as functions of time $t$ from $t=0$ until the collision at $t=t_1$ for each of the following:\n- The rotating disk\n- The dropped clay\n- The total system (disk + clay)",
                svgDiagram: ``,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU002-P0003-S0001",
                        subpartLabel: "",
                        subpartQuestion: "On the graph in Figure 3, draw three lines that represent the angular velocities $\\omega$ of the disk, the clay, and the total system as functions of $t$ from $t=t_1$ to $t=2t_1$. Distinctly label each line.",
                        svgDiagram: `
                            <svg width="320" height="180" viewBox="0 0 320 180" style="display:block; margin:auto;">
                                <line x1="50" y1="20" x2="50" y2="140" stroke="var(--text-main)" stroke-width="2"/>
                                <line x1="50" y1="140" x2="290" y2="140" stroke="var(--text-main)" stroke-width="2"/>
                                <text x="15" y="75" font-family="monospace" font-size="12" fill="var(--text-main)" transform="rotate(-90 15 75)">&omega;</text>
                                <text x="165" y="165" font-family="monospace" font-size="12" fill="var(--text-main)">Time (t)</text>
                                
                                <line x1="160" y1="140" x2="160" y2="145" stroke="var(--text-main)" stroke-width="1.5"/>
                                <text x="153" y="155" font-family="monospace" font-size="11" fill="var(--text-main)">t_1</text>
                                <line x1="270" y1="140" x2="270" y2="145" stroke="var(--text-main)" stroke-width="1.5"/>
                                <text x="263" y="155" font-family="monospace" font-size="11" fill="var(--text-main)">2t_1</text>
                                
                                <line x1="50" y1="50" x2="160" y2="50" stroke="var(--text-dim)" stroke-width="2"/>
                                <text x="60" y="42" font-family="monospace" font-size="10" fill="var(--text-dim)">Disk/System (0 to t_1)</text>
                                <line x1="50" y1="140" x2="160" y2="140" stroke="var(--text-dim)" stroke-width="2"/>
                                <text x="60" y="132" font-family="monospace" font-size="10" fill="var(--text-dim)">Clay (0 to t_1)</text>
                                
                                <line x1="160" y1="20" x2="160" y2="140" stroke="var(--text-dim)" stroke-width="1" stroke-dasharray="3,3"/>
                                <text x="210" y="15" font-family="monospace" font-size="11" fill="var(--text-dim)">Figure 3</text>
                            </svg>
                        `
                    }
                ]
            },
            {
                partId: "APPHY-EX001-SU002-P0004",
                partTitle: "Part D",
                partIntroText: "During the collision, the magnitudes of the changes in angular momentum of the disk and the clay are $|\\Delta L_{\\text{disk}}|$ and $|\\Delta L_{\\text{clay}}|$, respectively.",
                svgDiagram: ``,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU002-P0004-S0001",
                        subpartLabel: "",
                        subpartQuestion: "Indicate whether $|\\Delta L_{\\text{disk}}|$ is greater than, less than, or equal to $|\\Delta L_{\\text{clay}}|$ by selecting one of the options:\n\n$$\\text{___ } |\\Delta L_{\\text{disk}}| > |\\Delta L_{\\text{clay}}| \\quad \\text{___ } |\\Delta L_{\\text{disk}}| < |\\Delta L_{\\text{clay}}| \\quad \\text{___ } |\\Delta L_{\\text{disk}}| = |\\Delta L_{\\text{clay}}|$$\n\nBriefly justify your response by referencing a fundamental physics principle.",
                        svgDiagram: ``
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
        problemType: "Experimental Design & Data Analysis",
        problemSetup: "A group of students are investigating a magnetic launching system using the following procedure.\n\nA cart of unknown mass $M$ is placed on a horizontal track. A magnetic launcher at the end of the track uses a repelling magnetic force to accelerate the cart from rest over a fixed, short distance $x_0$. Frictional forces are negligible between the cart and the track while the cart is being launched. Once the cart leaves the launcher at a maximum speed $v$, it enters a rough section of the horizontal track where a constant kinetic frictional force is exerted on the cart until it comes to a stop. The students are asked to perform an experiment in which a single quantity is varied in order to collect data that could be graphed to determine the value $F_0$ of the constant launching force exerted by the magnetic launcher. The students have access to only a meterstick and a stopwatch.",
        svgDiagram: ``,
        dataTable: null,
        parts: [
            {
                partId: "APPHY-EX001-SU003-P0001",
                partTitle: "Part A",
                partIntroText: "",
                svgDiagram: ``,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU003-P0001-S0001",
                        subpartLabel: "i.",
                        subpartQuestion: "Indicate quantities that could be measured by the students that would allow them to determine $F_0$ using a linear graph.",
                        svgDiagram: ``
                    },
                    {
                        subpartId: "APPHY-EX001-SU003-P0001-S0002",
                        subpartLabel: "ii.",
                        subpartQuestion: "Briefly describe a method to reduce experimental uncertainty for the measured quantities.",
                        svgDiagram: ``
                    }
                ]
            },
            {
                partId: "APPHY-EX001-SU003-P0002",
                partTitle: "Part B",
                partIntroText: "",
                svgDiagram: ``,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU003-P0002-S0001",
                        subpartLabel: "i.",
                        subpartQuestion: "Indicate what quantities the students could graph on the horizontal and vertical axes to create a linear graph that can be used to determine $F_0$. Clearly state which quantity will be graphed on each axis.",
                        svgDiagram: ``
                    },
                    {
                        subpartId: "APPHY-EX001-SU003-P0002-S0002",
                        subpartLabel: "ii.",
                        subpartQuestion: "Briefly describe the relationship between $F_0$ and a feature of the graph from part B (i). Your answer may include an equation that relates $F_0$ and the chosen feature of the graph.",
                        svgDiagram: ``
                    }
                ]
            },
            {
                partId: "APPHY-EX001-SU003-P0003",
                partTitle: "Part C & D Context",
                partIntroText: "In a different experiment, the students place a cart of known mass $M_0 = 0.50\\text{ kg}$ on a completely frictionless, horizontal track. The cart has a strong neodymium magnet fixed to its front face. At the end of the track, an identical magnet is securely anchored in place, oriented so that the two magnets repel each other. The cart is pushed toward the anchored magnet and held at rest at an initial separation distance $d$. The cart is then released from rest and travels away from the anchored magnet. A photogate positioned further down the track determines the final constant speed $v$ of the cart after it completely clears the magnetic field. The experiment is repeated several times with different initial release separation distances $d$ for the same cart. Table 1 shows the measured values of $d$ and $v$.\n\nThe students correctly determine that the relationship between $d$ and $v$ is given by:\n$$v^2 = \\left( \\frac{2C}{M_0} \\right) \\frac{1}{d}$$\nwhere $C$ is an unknown magnetic strength constant. The students want to determine $C$. The students create a graph with $\\frac{1}{d}$ plotted on the horizontal axis.",
                svgDiagram: ``,
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
                        svgDiagram: ``
                    },
                    {
                        subpartId: "APPHY-EX001-SU003-P0003-S0002",
                        subpartLabel: "ii.",
                        subpartQuestion: "On the grid provided in Figure 3, create a graph that can be used to determine $C$. Clearly label the vertical axis with a numerical scale. Plot the corresponding data points on the grid.",
                        svgDiagram: `
                            <svg width="340" height="240" viewBox="0 0 340 240" style="display:block; margin:auto;">
                                <line x1="50" y1="20" x2="50" y2="190" stroke="var(--text-main)" stroke-width="2"/>
                                <polygon points="50,15 46,24 54,24" fill="var(--text-main)"/>
                                
                                <line x1="50" y1="190" x2="310" y2="190" stroke="var(--text-main)" stroke-width="2"/>
                                <polygon points="315,190 306,186 306,194" fill="var(--text-main)"/>
                                <text x="245" y="210" font-family="monospace" font-size="12" fill="var(--text-main)">1/d (1/m)</text>
                                
                                <text x="43" y="210" font-family="monospace" font-size="11" fill="var(--text-main)">0.0</text>
                                <line x1="94" y1="190" x2="94" y2="195" stroke="var(--text-main)" stroke-width="1.5"/>
                                <text x="86" y="210" font-family="monospace" font-size="11" fill="var(--text-main)">2.0</text>
                                <line x1="138" y1="190" x2="138" y2="195" stroke="var(--text-main)" stroke-width="1.5"/>
                                <text x="130" y="210" font-family="monospace" font-size="11" fill="var(--text-main)">4.0</text>
                                <line x1="182" y1="190" x2="182" y2="195" stroke="var(--text-main)" stroke-width="1.5"/>
                                <text x="174" y="210" font-family="monospace" font-size="11" fill="var(--text-main)">6.0</text>
                                <line x1="226" y1="190" x2="226" y2="195" stroke="var(--text-main)" stroke-width="1.5"/>
                                <text x="218" y="210" font-family="monospace" font-size="11" fill="var(--text-main)">8.0</text>
                                <line x1="270" y1="190" x2="270" y2="195" stroke="var(--text-main)" stroke-width="1.5"/>
                                <text x="258" y="210" font-family="monospace" font-size="11" fill="var(--text-main)">10.0</text>
                                
                                <text x="140" y="230" font-family="monospace" font-size="11" fill="var(--text-dim)">Figure 3</text>
                            </svg>
                        `
                    },
                    {
                        subpartId: "APPHY-EX001-SU003-P0003-S0003",
                        subpartLabel: "iii.",
                        subpartQuestion: "Draw a best-fit line for the data plotted in part C (ii).",
                        svgDiagram: ``
                    },
                    {
                        subpartId: "APPHY-EX001-SU003-P0003-S0004",
                        subpartLabel: "Part D",
                        subpartQuestion: "Using the best-fit line that you drew in part C (iii), calculate an experimental value for the magnetic strength constant $C$.",
                        svgDiagram: ``
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
        problemType: "Qualitative/Quantitative Translation (QQT)",
        problemSetup: "Two identical planetary probes, Probe X and Probe Y, are in stable circular orbits around a distant planet of mass $M_0$. Probe X is in a low orbit of radius $R_X = R_0$. Probe Y is in a higher orbit of radius $R_Y = 4R_0$. Both probes enter a very thin region of upper-atmospheric gas that exerts a small, constant resisting drag force of magnitude $F_0$ on each probe. The drag force acts opposite to each probe's direction of motion over a short tracking interval. Because the orbits remain nearly circular during this brief interval, the orbital speed $v$ of a probe at any radius $R$ can be approximated using the relationship for a stable circular orbit.",
        svgDiagram: `
            <svg width="260" height="200" viewBox="0 0 260 200" style="display:block; margin:auto;">
                <circle cx="130" cy="100" r="24" fill="var(--text-dim)" stroke="var(--text-main)" stroke-width="2"/>
                <text x="122" y="104" font-family="monospace" font-size="12" fill="var(--text-main)">M_0</text>
                
                <circle cx="130" cy="100" r="45" fill="none" stroke="var(--text-main)" stroke-width="1" stroke-dasharray="3,3"/>
                <circle cx="162" cy="68" r="4" fill="var(--text-main)"/>
                <text x="168" y="64" font-family="monospace" font-size="11" fill="var(--text-main)">Probe X (R_0)</text>
                
                <circle cx="130" cy="100" r="80" fill="none" stroke="var(--text-main)" stroke-width="1" stroke-dasharray="4,4"/>
                <circle cx="187" cy="43" r="4" fill="var(--text-main)"/>
                <text x="193" y="38" font-family="monospace" font-size="11" fill="var(--text-main)">Probe Y (4R_0)</text>
            </svg>
        `,
        dataTable: null,
        parts: [
            {
                partId: "APPHY-EX001-SU004-P0001",
                partTitle: "Part A",
                partIntroText: "",
                svgDiagram: ``,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU004-P0001-S0001",
                        subpartLabel: "",
                        subpartQuestion: "Indicate whether the orbital speed $v_X$ of Probe X is greater than, less than, or equal to the orbital speed $v_Y$ of Probe Y during their circular orbits prior to entering the thin atmospheric gas region, and conceptually justify your answer.",
                        svgDiagram: ``
                    }
                ]
            }
        ]
    }
];
