const ap1PracticeExamMCQPoolOne = [
    {
        id: "AP001-WRENP-A7B39",
        unit: "Work, Energy, and Power",
        topic: "Conservation of Mechanical Energy (Spring Systems)",
        skill: "Science Practice 2.B",
        difficulty: "Medium",
        svgDiagram: `
            <svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg" style="background:transparent; max-width:100%;">
                <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--text-main, #fff)"/>
                    </marker>
                </defs>
                <line x1="20" y1="90" x2="280" y2="90" stroke="var(--text-main, #fff)" stroke-width="2"/>
                <line x1="20" y1="20" x2="20" y2="90" stroke="var(--text-main, #fff)" stroke-width="2"/>
                
                <line x1="160" y1="30" x2="160" y2="100" stroke="var(--text-main, #fff)" stroke-width="1" stroke-dasharray="4,4"/>
                <text x="160" y="112" fill="var(--text-main, #fff)" font-family="serif" font-size="12" text-anchor="middle">x = 0</text>
                
                <line x1="100" y1="30" x2="100" y2="90" stroke="var(--text-main, #fff)" stroke-width="1" stroke-dasharray="4,4" opacity="0.6"/>
                
                <path d="M 20,65 L 30,65 L 36,53 L 48,77 L 60,53 L 72,77 L 84,53 L 94,65 L 100,65" fill="none" stroke="var(--text-main, #fff)" stroke-width="1.5" stroke-linejoin="round"/>
                
                <rect x="100" y="45" width="40" height="45" fill="var(--panel-bg, #2a2b2d)" stroke="var(--text-main, #fff)" stroke-width="2"/>
                <text x="120" y="72" fill="var(--text-main, #fff)" font-family="serif" font-size="14" font-style="italic" text-anchor="middle">m</text>
                
                <line x1="160" y1="35" x2="100" y2="35" stroke="var(--text-main, #fff)" stroke-width="1" marker-end="url(#arrow)"/>
                <text x="130" y="28" fill="var(--text-main, #fff)" font-family="serif" font-size="12" text-anchor="middle">Δx</text>
            </svg>
        `,
        question: "A $2.0\\text{ kg}$ block is held against a horizontal spring of spring constant $400\\text{ N/m}$, compressing the spring by $0.20\\text{ m}$. The block is then released from rest on a frictionless horizontal surface. What is the maximum speed achieved by the block after release?",
        choices: [
            { text: "$2.0\\text{ m/s}$", svgDiagram: "" },
            { text: "$2.8\\text{ m/s}$", svgDiagram: "" },
            { text: "$4.0\\text{ m/s}$", svgDiagram: "" },
            { text: "$8.0\\text{ m/s}$", svgDiagram: "" }
        ],
        correctIndex: 1,
        explanation: "By the conservation of mechanical energy, the initial elastic potential energy stored in the spring is completely converted into the kinetic energy of the block at the equilibrium position: $U_s = K$ $\\implies \\frac{1}{2}k(\\Delta x)^2 = \\frac{1}{2}mv^2$. Solving for velocity $v$: $v = \\sqrt{\\frac{k}{m}} \\cdot \\Delta x = \\sqrt{\\frac{400}{2.0}} \\cdot 0.20 = \\sqrt{200} \\cdot 0.20 \\approx 2.8\\text{ m/s}$."
    },
    {
        id: "AP001-DYNAM-C2L84",
        unit: "Force and Translational Dynamics",
        topic: "Net Force in Vertical Circular Motion",
        skill: "Science Practice 3.B",
        difficulty: "Hard",
        svgDiagram: `
            <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:transparent; max-width:100%;">
                <circle cx="150" cy="100" r="70" fill="none" stroke="var(--text-main, #fff)" stroke-width="2"/>
                
                <circle cx="150" cy="170" r="8" fill="var(--panel-bg, #2a2b2d)" stroke="var(--text-main, #fff)" stroke-width="2"/>
                <text x="150" y="174" fill="var(--text-main, #fff)" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">1</text>
                
                <circle cx="220" cy="100" r="8" fill="var(--panel-bg, #2a2b2d)" stroke="var(--text-main, #fff)" stroke-width="2"/>
                <text x="220" y="104" fill="var(--text-main, #fff)" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">2</text>
                
                <circle cx="150" cy="30" r="8" fill="var(--panel-bg, #2a2b2d)" stroke="var(--text-main, #fff)" stroke-width="2"/>
                <text x="150" y="34" fill="var(--text-main, #fff)" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">3</text>
                
                <circle cx="80" cy="100" r="8" fill="var(--panel-bg, #2a2b2d)" stroke="var(--text-main, #fff)" stroke-width="2"/>
                <text x="80" y="104" fill="var(--text-main, #fff)" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">4</text>

                <circle cx="150" cy="100" r="2" fill="var(--text-main, #fff)"/>
                <line x1="150" y1="100" x2="200" y2="51" stroke="var(--text-main, #fff)" stroke-width="1" stroke-dasharray="3,3"/>
                <text x="180" y="72" fill="var(--text-main, #fff)" font-family="serif" font-size="12" font-style="italic">R</text>
            </svg>
        `,
        question: "A small block is launched along the inside of a rough, vertical circular track. Due to friction, the block moves at a constant speed $v$ as it successfully traverses the complete circular path. Which of the following options correctly represents the relative magnitudes of the normal force $F_N$ exerted by the track on the block at the four labeled positions?",
        choices: [
            { text: "$F_{N1} = F_{N2} = F_{N3} = F_{N4}$", svgDiagram: "" },
            { text: "$F_{N1} > F_{N2} = F_{N4} > F_{N3}$", svgDiagram: "" },
            { text: "$F_{N3} > F_{N2} = F_{N4} > F_{N1}$", svgDiagram: "" },
            { text: "$F_{N2} > F_{N4} > F_{N1} = F_{N3}$", svgDiagram: "" }
        ],
        correctIndex: 1,
        explanation: "For constant speed, net radial force equals centripetal force: $\\Sigma F_r = \\frac{mv^2}{R}$. At Point 1 (Bottom): $F_{N1} - mg = \\frac{mv^2}{R} \\implies F_{N1} = \\frac{mv^2}{R} + mg$. At Points 2 & 4 (Sides): Gravity is perpendicular to the normal force, so $F_{N2} = F_{N4} = \\frac{mv^2}{R}$. At Point 3 (Top): $F_{N3} + mg = \\frac{mv^2}{R} \\implies F_{N3} = \\frac{mv^2}{R} - mg$. Comparing magnitudes: $F_{N1} > F_{N2} = F_{N4} > F_{N3}$."
    },
    {
        id: "AP001-WRENP-M9X12",
        unit: "Work, Energy, and Power",
        topic: "Projectile Motion and Mechanical Energy Conservation",
        skill: "Science Practice 2.A",
        difficulty: "Hard",
        svgDiagram: `
            <svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg" style="background:transparent; max-width:100%;">
                <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--text-main, #fff)"/>
                    </marker>
                </defs>
                <line x1="20" y1="120" x2="280" y2="120" stroke="var(--text-main, #fff)" stroke-width="1.5"/>
                
                <path d="M 40 120 Q 140 20 240 120" fill="none" stroke="var(--text-main, #fff)" stroke-width="1.5" stroke-dasharray="4,3"/>
                
                <line x1="40" y1="120" x2="80" y2="80" stroke="var(--text-main, #fff)" stroke-width="2" marker-end="url(#arrow)"/>
                <text x="85" y="75" fill="var(--text-main, #fff)" font-family="serif" font-size="12" font-style="italic" font-weight="bold">v₀</text>
                <path d="M 60 120 A 20 20 0 0 0 54 106" fill="none" stroke="var(--text-main, #fff)" stroke-width="1"/>
                <text x="65" y="114" fill="var(--text-main, #fff)" font-family="serif" font-size="11">θ</text>
                
                <circle cx="190" cy="70" r="4" fill="var(--text-main, #fff)"/>
                <text x="198" y="66" fill="var(--text-main, #fff)" font-family="serif" font-size="12" font-weight="bold">P</text>
                
                <line x1="190" y1="120" x2="190" y2="70" stroke="var(--text-main, #fff)" stroke-width="1" stroke-dasharray="2,2"/>
                <line x1="210" y1="120" x2="210" y2="70" stroke="var(--text-main, #fff)" stroke-width="1" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
                <text x="220" y="100" fill="var(--text-main, #fff)" font-family="serif" font-size="12" font-style="italic">h</text>
            </svg>
        `,
        question: "A projectile of mass $m$ is launched from the ground with an initial speed $v_0$ at an angle $\\theta$ above the horizontal. Air resistance is negligible. Using principles of conservation of energy, find an expression for the speed $v_p$ of the projectile when it passes through Point P at a vertical height $h$ above the ground.",
        choices: [
            { text: "$v_p = v_0 \\cos\\theta - \\sqrt{2gh}$", svgDiagram: "" },
            { text: "$v_p = \\sqrt{v_0^2 - 2gh}$", svgDiagram: "" },
            { text: "$v_p = \\sqrt{(v_0\\sin\\theta)^2 - 2gh}$", svgDiagram: "" },
            { text: "$v_p = \\sqrt{v_0^2\\cos^2\\theta - 2gh}$", svgDiagram: "" }
        ],
        correctIndex: 1,
        explanation: "Mechanical energy is conserved throughout the projectile's flight. $E_i = E_f \\implies \\frac{1}{2}mv_0^2 = \\frac{1}{2}mv_p^2 + mgh$. Dividing out the mass $m$ and multiplying by 2 yields: $v_0^2 = v_p^2 + 2gh \\implies v_p = \\sqrt{v_0^2 - 2gh}$."
    },
    {
        id: "AP001-ROTDY-T4V55",
        unit: "Torque and Rotational Dynamics",
        topic: "Rotational Equilibrium",
        skill: "Science Practice 2.C",
        difficulty: "Medium",
        svgDiagram: `
            <svg viewBox="0 0 300 130" xmlns="http://www.w3.org/2000/svg" style="background:transparent; max-width:100%;">
                <text x="70" y="20" fill="var(--text-main, #fff)" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Scenario A</text>
                <line x1="20" y1="30" x2="20" y2="110" stroke="var(--text-main, #fff)" stroke-width="2"/>
                <rect x="20" y="85" width="100" height="8" fill="var(--panel-bg, #2a2b2d)" stroke="var(--text-main, #fff)" stroke-width="1.5"/>
                <line x1="120" y1="85" x2="20" y2="45" stroke="var(--text-main, #fff)" stroke-width="1.5"/>
                <path d="M 100 85 A 20 20 0 0 1 106 73" fill="none" stroke="var(--text-main, #fff)" stroke-width="1"/>
                <text x="88" y="78" fill="var(--text-main, #fff)" font-family="sans-serif" font-size="10">30°</text>

                <text x="220" y="20" fill="var(--text-main, #fff)" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Scenario B</text>
                <line x1="170" y1="30" x2="170" y2="110" stroke="var(--text-main, #fff)" stroke-width="2"/>
                <rect x="170" y="85" width="100" height="8" fill="var(--panel-bg, #2a2b2d)" stroke="var(--text-main, #fff)" stroke-width="1.5"/>
                <line x1="220" y1="85" x2="170" y2="35" stroke="var(--text-main, #fff)" stroke-width="1.5"/>
                <path d="M 210 85 A 10 10 0 0 1 213 75" fill="none" stroke="var(--text-main, #fff)" stroke-width="1"/>
                <text x="214" y="73" fill="var(--text-main, #fff)" font-family="sans-serif" font-size="10">60°</text>
            </svg>
        `,
        question: "In both scenarios described above, a uniform rigid beam of length $L$ and mass $M$ is held horizontally in static equilibrium. Let $T_A$ be the tension in the cable for Scenario A, and $T_B$ be the tension in the cable for Scenario B. Which of the following correctly describes the relationship between $T_A$ and $T_B$?",
        choices: [
            { text: "$T_A = \\frac{\\sqrt{3}}{2} T_B$", svgDiagram: "" },
            { text: "$T_A = T_B$", svgDiagram: "" },
            { text: "$T_A = \\sqrt{3} T_B$", svgDiagram: "" },
            { text: "$T_A = \\frac{1}{2} T_B$", svgDiagram: "" }
        ],
        correctIndex: 0,
        explanation: "For A: $\\Sigma \\tau = T_A L \\sin(30^\\circ) - Mg\\frac{L}{2} = 0 \\implies T_A = Mg$. For B: $\\Sigma \\tau = T_B \\frac{L}{2} \\sin(60^\\circ) - Mg\\frac{L}{2} = 0 \\implies T_B = \\frac{2}{\\sqrt{3}}Mg$. Therefore, $\\frac{T_A}{T_B} = \\frac{\\sqrt{3}}{2}$."
    },
    {
        id: "AP001-LINMO-K8P99",
        unit: "Linear Momentum",
        topic: "Angular Momentum During a Collision",
        skill: "Science Practice 3.B",
        difficulty: "Hard",
        svgDiagram: `
            <svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg" style="background:transparent; max-width:100%;">
                <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--text-main, #fff)"/>
                    </marker>
                </defs>
                <circle cx="150" cy="75" r="45" fill="var(--panel-bg, #2a2b2d)" stroke="var(--text-main, #fff)" stroke-width="2"/>
                <circle cx="150" cy="75" r="3" fill="var(--text-main, #fff)"/>
                <text x="150" y="65" fill="var(--text-main, #fff)" font-family="serif" font-size="12" text-anchor="middle">M, R</text>
                
                <line x1="30" y1="30" x2="150" y2="30" stroke="var(--text-main, #fff)" stroke-width="1" stroke-dasharray="4,4"/>
                <circle cx="50" cy="30" r="5" fill="var(--text-main, #fff)"/>
                <line x1="55" y1="30" x2="95" y2="30" stroke="var(--text-main, #fff)" stroke-width="1.5" marker-end="url(#arrow)"/>
                <text x="75" y="22" fill="var(--text-main, #fff)" font-family="serif" font-size="12" font-style="italic" font-weight="bold">v₀</text>
                <text x="35" y="34" fill="var(--text-main, #fff)" font-family="serif" font-size="12" font-style="italic">m</text>
                
                <line x1="150" y1="30" x2="150" y2="75" stroke="var(--text-main, #fff)" stroke-width="1"/>
                <text x="156" y="55" fill="var(--text-main, #fff)" font-family="serif" font-size="12" font-style="italic">R</text>
            </svg>
        `,
        question: "A sticky projectile of mass $m$ is moving horizontally with speed $v_0$ when it strikes and sticks to the edge of an initially stationary uniform disk of radius $R$ and mass $M$. Which of the following statements is true regarding the linear momentum and angular momentum of the disk-projectile system during the collision?",
        choices: [
            { text: "Both linear and angular momentum are conserved.", svgDiagram: "" },
            { text: "Neither linear nor angular momentum are conserved.", svgDiagram: "" },
            { text: "Linear momentum is conserved, but angular momentum is not.", svgDiagram: "" },
            { text: "Angular momentum about the central axle is conserved, but linear momentum is not conserved.", svgDiagram: "" }
        ],
        correctIndex: 3,
        explanation: "The central pivot axle exerts an external force to keep the disk anchored, changing linear momentum. However, because this force acts at $r = 0$ relative to the rotation point, it produces no net external torque. Thus, angular momentum is conserved."
    }
];
