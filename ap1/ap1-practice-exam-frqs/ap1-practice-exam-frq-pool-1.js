/**
 * AP Physics 1 - Practice Exam 1
 * Section II: Free-Response Questions Template Pool
 * =========================================================================
 * AUTOMATED FIGURE LABELING INTEGRATION:
 * - Each setup dynamically tracks its own global inner figure count sequence.
 * - If an svgDiagram exists, it automatically embeds a clean "Figure X" bold label.
 * - If an svgDiagram is absent, no text or blank figure references are generated.
 * =========================================================================
 */

const ap1PracticeExamFRQPoolOne = [
    {
        setupId: "APPHY-EX001-SU001",
        problemSetup: "A block of mass $m_1 = 2.0\\text{ kg}$ rests on a rough horizontal surface and is connected by a lightweight, inextensible string passing over a frictionless, ideal pulley to a hanging sphere of mass $m_2 = 1.5\\text{ kg}$. The coefficient of kinetic friction between block 1 and the horizontal runway surface is $\\mu_k = 0.25$. At time $t = 0$, the system is released from rest, allowing the hanging mass to accelerate downward towards the floor.",
        svgDiagram: `
            <div style="display: flex; flex-direction: column; align-items: center; margin: 10px 0;">
                <svg width="280" height="160" style="background: transparent; overflow: visible;">
                    <line x1="20" y1="90" x2="180" y2="90" stroke="var(--text-main)" stroke-width="2"/>
                    <line x1="18" y1="90" x2="18" y2="105" stroke="var(--text-main)" stroke-width="1"/>
                    <line x1="58" y1="90" x2="58" y2="105" stroke="var(--text-main)" stroke-width="1"/>
                    <line x1="98" y1="90" x2="98" y2="105" stroke="var(--text-main)" stroke-width="1"/>
                    <line x1="138" y1="90" x2="138" y2="105" stroke="var(--text-main)" stroke-width="1"/>
                    <line x1="178" y1="90" x2="178" y2="105" stroke="var(--text-main)" stroke-width="1"/>
                    
                    <rect x="70" y="50" width="50" height="40" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                    <text x="95" y="74" font-family="monospace" font-size="13" text-anchor="middle" fill="var(--text-main)">m₁</text>
                    
                    <circle cx="180" cy="50" r="12" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                    
                    <line x1="120" y1="65" x2="180" y2="38" stroke="var(--text-main)" stroke-width="1.5"/>
                    <line x1="192" y1="50" x2="192" y2="110" stroke="var(--text-main)" stroke-width="1.5"/>
                    
                    <circle cx="192" cy="118" r="8" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                    <text x="210" y="122" font-family="monospace" font-size="13" fill="var(--text-main)">m₂</text>
                </svg>
            </div>
        `,
        dataTable: null,
        parts: [
            {
                partId: "APPHY-EX001-SU001-P0001",
                partTitle: "Part A",
                partIntroText: "The system is accelerating freely after release.",
                svgDiagram: ``,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU001-P0001-S0001",
                        subpartLabel: "(i)",
                        subpartQuestion: "On the dots provided below, draw and label the forces (not components) that act on block $m_1$ and sphere $m_2$ respectively. Each force must be represented by a distinct arrow starting from, and pointing away from, the appropriate dot.",
                        svgDiagram: `
                            <div style="display: flex; justify-content: space-around; align-items: center; width: 100%; max-width: 400px; margin: 20px auto;">
                                <div style="text-align: center;">
                                    <div style="font-size: 12px; font-weight: bold; margin-bottom: 30px;">Block m₁</div>
                                    <circle cx="50" cy="50" r="4" fill="var(--text-main)"/>
                                </div>
                                <div style="text-align: center;">
                                    <div style="font-size: 12px; font-weight: bold; margin-bottom: 30px;">Sphere m₂</div>
                                    <circle cx="50" cy="50" r="4" fill="var(--text-main)"/>
                                </div>
                            </div>
                        `
                    },
                    {
                        subpartId: "APPHY-EX001-SU001-P0001-S0002",
                        subpartLabel: "(ii)",
                        subpartQuestion: "Derive an expression for the magnitude of the linear acceleration $a$ of the system in terms of $m_1$, $m_2$, $\\mu_k$, and physical constants as necessary.",
                        svgDiagram: ``
                    }
                ]
            },
            {
                partId: "APPHY-EX001-SU001-P0002",
                partTitle: "Part B",
                partIntroText: "",
                svgDiagram: ``,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU001-P0002-S0001",
                        subpartLabel: "",
                        subpartQuestion: "An experimental student replaces the lightweight string with a heavy, uniform cord of non-negligible mass $M_c$. In a clear, coherent paragraph-length response, explain how the linear acceleration of block $m_1$ shifts or varies over time from the precise instant the setup is released until just before sphere $m_2$ strikes the horizontal floor workspace.",
                        svgDiagram: ``
                    }
                ]
            }
        ]
    },
    {
        setupId: "APPHY-EX001-SU002",
        problemSetup: "A basic spring with an unknown stiffness constant $k$ is mounted horizontally on a flat, low-friction laboratory track table. A student launches a cart of known mass $M = 0.50\\text{ kg}$ directly toward the spring, tracking the maximum compression length $\\Delta x$ of the spring structural mechanism across multiple baseline trial runs with varying initial velocities $v_0$.",
        svgDiagram: ``,
        dataTable: {
            rows: [
                ["Trial Velocity $v_0$ (m/s)", "Max Compression $\\Delta x$ (m)", "Calculated $(\\Delta x)^2$ (m²)"],
                ["1.0", "0.14", "0.020"],
                ["1.5", "0.22", "0.048"],
                ["2.0", "0.28", "0.078"],
                ["2.5", "0.35", "0.123"]
            ]
        },
        parts: [
            {
                partId: "APPHY-EX001-SU002-P0001",
                partTitle: "Part A",
                partIntroText: "",
                svgDiagram: ``,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU002-P0001-S0001",
                        subpartLabel: "(i)",
                        subpartQuestion: "Explain how a student can use a linear graph of $(\\Delta x)^2$ as a function of $v_0^2$ to solve for the spring constant $k$.",
                        svgDiagram: ``
                    },
                    {
                        subpartId: "APPHY-EX001-SU002-P0001-S0002",
                        subpartLabel: "(ii)",
                        subpartQuestion: "Calculate the experimental value of the spring constant $k$ using the numerical parameters detailed inside the data matrix layout above.",
                        svgDiagram: ``
                    }
                ]
            }
        ]
    },
    {
        setupId: "APPHY-EX001-SU003",
        problemSetup: "A rigid horizontal rod of total mass $M$ and length $L$ is pinned smoothly to a wall at its left boundary endpoint (Point $P$). The rod is supported at its right endpoint by a structural cable sloped at an angle $\\theta$ relative to the beam line. A small heavy safe block of mass $3M$ is sitting on top of the beam at a distance of $\\frac{1.3}{4}L$ away from Point $P$.",
        svgDiagram: `
            <div style="display: flex; flex-direction: column; align-items: center; margin: 10px 0;">
                <svg width="300" height="150" style="background: transparent; overflow: visible;">
                    <line x1="40" y1="20" x2="40" y2="130" stroke="var(--text-main)" stroke-width="3"/>
                    
                    <rect x="40" y="90" width="180" height="10" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                    <circle cx="40" cy="95" r="4" fill="var(--text-main)"/>
                    <text x="30" y="99" font-family="monospace" font-size="12" fill="var(--text-main)">P</text>
                    
                    <line x1="220" y1="95" x2="40" y2="30" stroke="var(--text-main)" stroke-width="1.5"/>
                    <path d="M 60 95 A 20 20 0 0 1 55 85" fill="none" stroke="var(--text-main)" stroke-width="1"/>
                    <text x="65" y="85" font-family="monospace" font-size="11" fill="var(--text-main)">θ</text>
                    
                    <rect x="90" y="70" width="30" height="20" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                    <text x="105" y="84" font-family="monospace" font-size="11" text-anchor="middle" fill="var(--text-main)">3M</text>
                </svg>
            </div>
        `,
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
                        subpartLabel: "",
                        subpartQuestion: "Determine an expression for the magnitude of the tension $T$ within the supportive line cable structure. Express your final algebraic relationships in terms of $M$, $L$, $\\theta$, and fundamental constants.",
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
                        subpartLabel: "",
                        subpartQuestion: "If the support cable suddenly snaps at an explicit experimental window moment, write down the fundamental principle or equation necessary to find the initial rotational acceleration $\\alpha$ of the uniform structural beam structure.",
                        svgDiagram: ``
                    }
                ]
            }
        ]
    },
    {
        setupId: "APPHY-EX001-SU004",
        problemSetup: "Two deep-space scientific instrumentation research probes, Probe $X$ of total system mass $m_0$ and Probe $Y$ of mass $3m_0$, move in stable circular orbits around an isolated uniform planet of total background mass $M_0$. Probe $X$ moves in a circular orbit of radius $R_0$, while Probe $Y$ tracks a wider outer orbit of path radius $4R_0$. Both probes are far enough apart that their mutual gravitational interaction is entirely negligible.",
        svgDiagram: `
            <div style="display: flex; flex-direction: column; align-items: center; margin: 10px 0;">
                <svg width="260" height="200" style="background: transparent; overflow: visible;">
                    <circle cx="130" cy="100" r="20" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                    <text x="130" y="104" font-family="monospace" font-size="11" text-anchor="middle" fill="var(--text-main)">M_0</text>
                    
                    <circle cx="130" cy="100" r="45" fill="none" stroke="var(--text-main)" stroke-width="1" stroke-dasharray="3,3"/>
                    <circle cx="162" cy="68" r="4" fill="var(--text-main)"/>
                    <text x="170" y="64" font-family="monospace" font-size="11" fill="var(--text-main)">Probe X (R_0)</text>
                    
                    <circle cx="130" cy="100" r="80" fill="none" stroke="var(--text-main)" stroke-width="1" stroke-dasharray="4,4"/>
                    <circle cx="187" cy="43" r="4" fill="var(--text-main)"/>
                    <text x="195" y="38" font-family="monospace" font-size="11" fill="var(--text-main)">Probe Y (4R_0)</text>
                </svg>
            </div>
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
                        subpartQuestion: "Indicate whether the orbital tangential speed of Probe $X$ is greater than, less than, or equal to the orbital tangential speed of Probe $Y$. Justify your selection qualitatively without referencing mathematical derivations or formulas.",
                        svgDiagram: ``
                    }
                ]
            },
            {
                partId: "APPHY-EX001-SU004-P0002",
                partTitle: "Part B",
                partIntroText: "",
                svgDiagram: ``,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU004-P0002-S0001",
                        subpartLabel: "",
                        subpartQuestion: "Starting with Newton's second law in translational form or the definition of centripetal acceleration, derive an expression for the exact mathematical ratio of the orbital speeds $\\frac{v_X}{v_Y}$. Express your final numerical ratio as a simplified integer or fraction.\n\nBegin your derivation by writing a fundamental physics principle or an equation from the reference information.",
                        svgDiagram: ``
                    }
                ]
            },
            {
                partId: "APPHY-EX001-SU004-P0003",
                partTitle: "Part C",
                partIntroText: "",
                svgDiagram: ``,
                subparts: [
                    {
                        subpartId: "APPHY-EX001-SU004-P0003-S0001",
                        subpartLabel: "",
                        subpartQuestion: "In a cohesive, paragraph-length response, explain how your quantitative derivation in Part B is consistent with your qualitative reasoning in Part A. Your response must explicitly translate how specific features of your mathematical solution align with the physical principles you described conceptually.",
                        svgDiagram: ``
                    }
                ]
            }
        ]
    }
];
