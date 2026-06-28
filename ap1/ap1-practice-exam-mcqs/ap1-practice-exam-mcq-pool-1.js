const ap1PracticeExamMCQPoolOne = [
    {
        id: "AP001-WRENP-A7B39",
        unit: "Work, Energy, and Power",
        topic: "Conservation of Mechanical Energy (Spring Systems)",
        skill: "Science Practice 2.B",
        difficulty: "Medium",
        svgDiagram: `
            <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="hatch" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="0" x2="0" y2="10" stroke="var(--text-main)" stroke-width="1" />
                    </pattern>
                </defs>
                <rect x="10" y="130" width="380" height="10" fill="url(#hatch)" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="10" y1="130" x2="390" y2="130" stroke="var(--text-main)" stroke-width="2"/>
                <rect x="10" y="10" width="10" height="120" fill="url(#hatch)" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="20" y1="10" x2="20" y2="130" stroke="var(--text-main)" stroke-width="2"/>
                
                <line x1="220" y1="10" x2="220" y2="145" stroke="var(--text-main)" stroke-width="1.5" stroke-dasharray="6,4"/>
                <text x="220" y="155" fill="var(--text-main)" font-family="sans-serif" font-size="12" font-style="italic" text-anchor="middle">x = 0</text>
                
                <g transform="translate(0, -50)">
                    <text x="80" y="70" fill="var(--text-main)" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Position 1</text>
                    <path d="M 20 105 L 30 105 L 40 90 L 55 120 L 70 90 L 85 120 L 100 90 L 110 105 L 120 105" fill="none" stroke="var(--text-main)" stroke-width="2" stroke-linejoin="round"/>
                    <rect x="120" y="85" width="40" height="40" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2" rx="3"/>
                    <text x="140" y="110" fill="var(--text-main)" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">m</text>
                    <line x1="140" y1="135" x2="220" y2="135" stroke="var(--text-main)" stroke-width="1"/>
                    <path d="M 145 130 L 140 135 L 145 140 M 215 130 L 220 135 L 215 140" fill="none" stroke="var(--text-main)" stroke-width="1"/>
                    <text x="180" y="148" fill="var(--text-main)" font-family="sans-serif" font-size="12" font-style="italic" text-anchor="middle">Δx</text>
                </g>
                
                <g transform="translate(0, 5)">
                    <text x="120" y="70" fill="var(--text-main)" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Position 2</text>
                    <path d="M 20 105 L 40 105 L 60 90 L 90 120 L 120 90 L 150 120 L 180 90 L 200 105 L 220 105" fill="none" stroke="var(--text-main)" stroke-width="2" stroke-linejoin="round"/>
                    <rect x="220" y="85" width="40" height="40" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2" rx="3"/>
                    <text x="240" y="110" fill="var(--text-main)" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">m</text>
                    <line x1="270" y1="105" x2="320" y2="105" stroke="var(--text-main)" stroke-width="3"/>
                    <polygon points="320,105 310,98 310,112" fill="var(--text-main)"/>
                    <text x="295" y="95" fill="var(--text-main)" font-family="sans-serif" font-size="14" font-style="italic" font-weight="bold" text-anchor="middle">v</text>
                </g>
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
        explanation: "By the conservation of mechanical energy, the initial elastic potential energy stored in the spring is completely converted into the kinetic energy of the block at the equilibrium position: $U_s = K$ $\\implies \\frac{1}{2}k(\\Delta x)^2 = \\frac{1}{2}mv^2$. Solving for velocity $v$: $v = \\sqrt{\\frac{k}{m}} \\cdot \\Delta x = \\sqrt{\\frac{400}{2.0}} \\cdot 0.20 = \\sqrt{200} \\cdot 0.20 \\approx 14.14 \\cdot 0.20 \\approx 2.8\\text{ m/s}$."
    },
    {
        id: "AP001-DYNAM-C2L84",
        unit: "Force and Translational Dynamics",
        topic: "Net Force in Vertical Circular Motion",
        skill: "Science Practice 3.B",
        difficulty: "Hard",
        svgDiagram: `
            <svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
                <circle cx="125" cy="125" r="90" fill="none" stroke="var(--text-main)" stroke-width="4"/>
                <circle cx="125" cy="125" r="98" fill="none" stroke="var(--text-main)" stroke-width="1" stroke-dasharray="4,4"/>
                
                <circle cx="125" cy="125" r="4" fill="var(--text-main)"/>
                <line x1="125" y1="125" x2="188.6" y2="188.6" stroke="var(--text-main)" stroke-width="1.5" stroke-dasharray="4,4"/>
                <text x="145" y="150" fill="var(--text-main)" font-family="sans-serif" font-size="16" font-style="italic">R</text>

                <circle cx="125" cy="35" r="8" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/>
                <text x="125" y="20" fill="var(--text-main)" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">3</text>
                
                <circle cx="215" cy="125" r="8" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/>
                <text x="235" y="130" fill="var(--text-main)" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">2</text>
                
                <circle cx="125" cy="215" r="8" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/>
                <text x="125" y="240" fill="var(--text-main)" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">1</text>
                
                <circle cx="35" cy="125" r="8" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/>
                <text x="15" y="130" fill="var(--text-main)" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">4</text>
                
                <path d="M 215 100 A 90 90 0 0 0 150 35" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                <polygon points="150,35 158,42 160,32" fill="var(--text-main)"/>
                <text x="195" y="65" fill="var(--text-main)" font-family="sans-serif" font-size="16" font-style="italic" font-weight="bold">v</text>
            </svg>
        `,
        question: "A small block is launched along the inside of a rough, vertical circular track. Due to friction, the block moves at a constant speed $v$ as it successfully traverses the complete circular path. Which of the following options correctly represents the relative magnitudes of the normal force $F_N$ exerted by the track on the block at the four labeled positions?",
        choices: [
            { text: "Four diagrams where the normal force vector pointing toward the center of the circle is identical in length at all four positions.", svgDiagram: "" },
            { text: "Four diagrams where the normal force at the bottom (Point 1) is longest, the normal forces at the sides (Points 2 and 4) are equal and medium length, and the normal force at the top (Point 3) is shortest.", svgDiagram: "" },
            { text: "Four diagrams where the normal force at the top (Point 3) is longest, the side forces are equal, and the normal force at the bottom (Point 1) is shortest.", svgDiagram: "" },
            { text: "Four diagrams where the normal force at Point 2 is longer than Point 4 due to the direction of motion.", svgDiagram: "" }
        ],
        correctIndex: 1,
        explanation: "For constant speed, net radial force equals centripetal force: $\\Sigma F_r = \\frac{mv^2}{R} = \\text{constant}$. At Point 1 (Bottom): $F_{N1} - mg = \\frac{mv^2}{R} \\implies F_{N1} = \\frac{mv^2}{R} + mg$. At Points 2 & 4 (Sides): Gravity acts tangentially, so $F_{N2} = F_{N4} = \\frac{mv^2}{R}$. At Point 3 (Top): $F_{N3} + mg = \\frac{mv^2}{R} \\implies F_{N3} = \\frac{mv^2}{R} - mg$. Comparing magnitudes: $F_{N1} > F_{N2} = F_{N4} > F_{N3}$."
    },
    {
        id: "AP001-WRENP-M9X12",
        unit: "Work, Energy, and Power",
        topic: "Projectile Motion and Mechanical Energy Conservation",
        skill: "Science Practice 2.A",
        difficulty: "Hard",
        svgDiagram: `
            <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
                <line x1="40" y1="180" x2="360" y2="180" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arrow)"/>
                <line x1="50" y1="190" x2="50" y2="20" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arrow)"/>
                <text x="365" y="175" fill="var(--text-main)" font-family="sans-serif" font-size="14" font-weight="bold">x</text>
                <text x="30" y="30" fill="var(--text-main)" font-family="sans-serif" font-size="14" font-weight="bold">y</text>
                
                <path d="M 50 180 Q 200 -40 350 180" fill="none" stroke="var(--text-main)" stroke-width="3" stroke-dasharray="6,4"/>
                
                <circle cx="50" cy="180" r="5" fill="var(--text-main)"/>
                <text x="35" y="195" fill="var(--text-main)" font-family="sans-serif" font-size="14" font-weight="bold">O</text>
                
                <line x1="50" y1="180" x2="110" y2="90" stroke="var(--text-main)" stroke-width="3"/>
                <polygon points="110,90 100,95 106,102" fill="var(--text-main)" transform="rotate(-10 110 90)"/>
                <text x="65" y="115" fill="var(--text-main)" font-family="sans-serif" font-size="16" font-style="italic" font-weight="bold">v₀</text>
                
                <path d="M 90 180 A 40 40 0 0 0 73 145" fill="none" stroke="var(--text-main)" stroke-width="1.5"/>
                <text x="95" y="170" fill="var(--text-main)" font-family="sans-serif" font-size="14" font-style="italic">θ</text>
                
                <circle cx="200" cy="15" r="5" fill="var(--text-main)"/>
                <text x="195" y="40" fill="var(--text-main)" font-family="sans-serif" font-size="14" font-weight="bold">H</text>
                
                <circle cx="280" cy="94" r="6" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/>
                <text x="295" y="90" fill="var(--text-main)" font-family="sans-serif" font-size="14" font-weight="bold">P</text>
                
                <line x1="280" y1="180" x2="280" y2="100" stroke="var(--text-main)" stroke-width="1.5" stroke-dasharray="4,4"/>
                <line x1="270" y1="180" x2="290" y2="180" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="270" y1="94" x2="290" y2="94" stroke="var(--text-main)" stroke-width="1"/>
                <path d="M 285 100 L 280 94 L 275 100 M 285 174 L 280 180 L 275 174" fill="none" stroke="var(--text-main)" stroke-width="1.5"/>
                <text x="265" y="142" fill="var(--text-main)" font-family="sans-serif" font-size="14" font-style="italic">h</text>
            </svg>
        `,
        question: "A projectile of mass $m$ is launched from the ground with an initial speed $v_0$ at an angle $\\theta$ above the horizontal. Air resistance is negligible. Using principles of conservation of energy, derive an expression for the speed $v_p$ of the projectile when it passes through Point P at a known vertical height $h$ above the ground.",
        choices: [
            { text: "$v_p = v_0 \\cos\\theta - \\sqrt{2gh}$", svgDiagram: "" },
            { text: "$v_p = \\sqrt{v_0^2 - 2gh}$", svgDiagram: "" },
            { text: "$v_p = \\sqrt{(v_0\\sin\\theta)^2 - 2gh}$", svgDiagram: "" },
            { text: "$v_p = \\sqrt{v_0^2\\cos^2\\theta - 2gh}$", svgDiagram: "" }
        ],
        correctIndex: 1,
        explanation: "Because mechanical energy is conserved throughout the projectile's flight, the total energy at ground level equals the total mechanical energy at height $h$. $E_i = E_f \\implies \\frac{1}{2}mv_0^2 = \\frac{1}{2}mv_p^2 + mgh$. Dividing out the mass $m$ and multiplying by 2 yields: $v_0^2 = v_p^2 + 2gh \\implies v_p = \\sqrt{v_0^2 - 2gh}$. The launch angle $\\theta$ does not affect total kinetic energy, only its initial component distribution."
    },
    {
        id: "AP001-ROTDY-T4V55",
        unit: "Torque and Rotational Dynamics",
        topic: "Rotational Equilibrium",
        skill: "Science Practice 2.C",
        difficulty: "Medium",
        svgDiagram: `
            <svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="wall" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="0" x2="0" y2="8" stroke="var(--text-main)" stroke-width="1" />
                    </pattern>
                </defs>

                <text x="125" y="25" fill="var(--text-main)" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle">Scenario A</text>
                
                <rect x="20" y="40" width="15" height="150" fill="url(#wall)" stroke="var(--text-main)" stroke-width="2"/>
                <line x1="35" y1="40" x2="35" y2="190" stroke="var(--text-main)" stroke-width="3"/>
                
                <polygon points="35,145 50,155 35,165" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/>
                
                <rect x="50" y="145" width="160" height="20" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/>
                <circle cx="50" cy="155" r="4" fill="var(--text-main)"/> <line x1="210" y1="145" x2="35" y2="45" stroke="var(--text-main)" stroke-width="2"/>
                
                <path d="M 180 145 A 35 35 0 0 1 185 128" fill="none" stroke="var(--text-main)" stroke-width="1.5"/>
                <text x="155" y="135" fill="var(--text-main)" font-family="sans-serif" font-size="14">30°</text>
                <text x="130" y="185" fill="var(--text-main)" font-family="sans-serif" font-size="14" font-weight="bold">L, M</text>
                
                <line x1="250" y1="10" x2="250" y2="210" stroke="var(--text-main)" stroke-width="2" stroke-dasharray="6,6"/>

                <text x="375" y="25" fill="var(--text-main)" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle">Scenario B</text>
                
                <rect x="270" y="40" width="15" height="150" fill="url(#wall)" stroke="var(--text-main)" stroke-width="2"/>
                <line x1="285" y1="40" x2="285" y2="190" stroke="var(--text-main)" stroke-width="3"/>
                
                <polygon points="285,145 300,155 285,165" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/>
                
                <rect x="300" y="145" width="160" height="20" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/>
                <circle cx="300" cy="155" r="4" fill="var(--text-main)"/> <line x1="380" y1="145" x2="285" y2="35" stroke="var(--text-main)" stroke-width="2"/>
                
                <path d="M 360 145 A 25 25 0 0 1 366 120" fill="none" stroke="var(--text-main)" stroke-width="1.5"/>
                <text x="370" y="130" fill="var(--text-main)" font-family="sans-serif" font-size="14">60°</text>
                
                <line x1="300" y1="175" x2="380" y2="175" stroke="var(--text-main)" stroke-width="1"/>
                <path d="M 305 170 L 300 175 L 305 180 M 375 170 L 380 175 L 375 180" fill="none" stroke="var(--text-main)" stroke-width="1.5"/>
                <text x="340" y="195" fill="var(--text-main)" font-family="sans-serif" font-size="14" font-weight="bold">L/2</text>
                <circle cx="380" cy="145" r="3" fill="var(--text-main)"/> </svg>
        `,
        question: "In both scenarios described above, the uniform rigid beam is held in perfect horizontal static equilibrium. Let $T_A$ be the tension in the cable for Scenario A, and $T_B$ be the tension in the cable for Scenario B. Which of the following correctly describes the relationship between $T_A$ and $T_B$?",
        choices: [
            { text: "$T_A = \\frac{\\sqrt{3}}{2} T_B$", svgDiagram: "" },
            { text: "$T_A = T_B$", svgDiagram: "" },
            { text: "$T_A = \\sqrt{3} T_B$", svgDiagram: "" },
            { text: "$T_A = \\frac{1}{2} T_B$", svgDiagram: "" }
        ],
        correctIndex: 0,
        explanation: "To maintain equilibrium, net torque is zero. For A: $\\Sigma \\tau = T_A \\cdot L \\cdot \\sin(30^\\circ) - Mg(\\frac{L}{2}) = 0 \\implies T_A(\\frac{1}{2}) = Mg(\\frac{1}{2}) \\implies T_A = Mg$. For B: $\\Sigma \\tau = T_B \\cdot (\\frac{L}{2}) \\cdot \\sin(60^\\circ) - Mg(\\frac{L}{2}) = 0 \\implies T_B(\\frac{\\sqrt{3}}{2}) = Mg \\implies T_B = \\frac{2}{\\sqrt{3}}Mg$. The ratio $\\frac{T_A}{T_B} = \\frac{\\sqrt{3}}{2}$, meaning $T_A = \\frac{\\sqrt{3}}{2}T_B$."
    },
    {
        id: "AP001-LINMO-K8P99",
        unit: "Linear Momentum",
        topic: "Angular Momentum During a Collision",
        skill: "Science Practice 3.B",
        difficulty: "Hard",
        svgDiagram: `
            <svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="220" cy="100" r="80" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="3"/>
                
                <circle cx="220" cy="100" r="10" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/>
                <circle cx="220" cy="100" r="4" fill="var(--text-main)"/>
                
                <text x="210" y="85" fill="var(--text-main)" font-family="sans-serif" font-size="16" font-weight="bold">M, R</text>
                
                <path d="M 40 15 C 45 10, 55 15, 60 20 C 65 25, 55 35, 45 30 C 35 25, 30 20, 40 15 Z" fill="var(--text-main)"/>
                <text x="35" y="50" fill="var(--text-main)" font-family="sans-serif" font-size="16" font-weight="bold">m</text>
                
                <line x1="65" y1="20" x2="130" y2="20" stroke="var(--text-main)" stroke-width="3"/>
                <polygon points="130,20 120,13 120,27" fill="var(--text-main)"/>
                <text x="90" y="12" fill="var(--text-main)" font-family="sans-serif" font-size="16" font-style="italic" font-weight="bold">v₀</text>
                
                <line x1="140" y1="20" x2="220" y2="20" stroke="var(--text-main)" stroke-width="1.5" stroke-dasharray="5,5"/>
                <line x1="220" y1="20" x2="220" y2="90" stroke="var(--text-main)" stroke-width="1.5" stroke-dasharray="5,5"/>
                
                <text x="230" y="60" fill="var(--text-main)" font-family="sans-serif" font-size="16" font-style="italic" font-weight="bold">R</text>
            </svg>
        `,
        question: "A sticky projectile of mass $m$ is moving horizontally with speed $v_0$ when it strikes and sticks to the edge of an initially stationary uniform disk of radius $R$ and mass $M$ ($I_{disk} = \\frac{1}{2}MR^2$). Which of the following statements is true regarding the linear momentum and angular momentum of the system consisting of the disk and the projectile during the collision?",
        choices: [
            { text: "Both linear and angular momentum are conserved because there are no external forces acting on the system.", svgDiagram: "" },
            { text: "Neither linear nor angular momentum are conserved because the axle exerts a force and a torque during the collision.", svgDiagram: "" },
            { text: "Linear momentum is conserved because the collision is completely inelastic, but angular momentum is not conserved.", svgDiagram: "" },
            { text: "Angular momentum about the central axle is conserved because the force exerted by the axle acts at a radius of zero. Linear momentum is not conserved.", svgDiagram: "" }
        ],
        correctIndex: 3,
        explanation: "During the collision, the central pivot pin/axle prevents the disk from flying away by exerting an external linear force. Thus, linear momentum is not conserved. However, because this external force acts directly at the pivot point ($r = 0$), it produces zero torque ($\\tau = rF\\sin\\theta = 0$). Since there are no external torques, angular momentum about the axle is strictly conserved."
    },
    {
        id: "AP001-OSCIL-J3N41",
        unit: "Oscillations",
        topic: "Kinematics of Simple Harmonic Motion",
        skill: "Science Practice 2.D",
        difficulty: "Medium",
        svgDiagram: `
            <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                <line x1="60" y1="30" x2="360" y2="30" stroke="var(--text-main)" stroke-width="0.5" stroke-dasharray="4,4" opacity="0.5"/>
                <line x1="60" y1="170" x2="360" y2="170" stroke="var(--text-main)" stroke-width="0.5" stroke-dasharray="4,4" opacity="0.5"/>
                <line x1="135" y1="20" x2="135" y2="180" stroke="var(--text-main)" stroke-width="0.5" stroke-dasharray="4,4" opacity="0.5"/>
                <line x1="210" y1="20" x2="210" y2="180" stroke="var(--text-main)" stroke-width="0.5" stroke-dasharray="4,4" opacity="0.5"/>
                <line x1="285" y1="20" x2="285" y2="180" stroke="var(--text-main)" stroke-width="0.5" stroke-dasharray="4,4" opacity="0.5"/>
                <line x1="360" y1="20" x2="360" y2="180" stroke="var(--text-main)" stroke-width="0.5" stroke-dasharray="4,4" opacity="0.5"/>

                <line x1="50" y1="100" x2="380" y2="100" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arrow)"/>
                <line x1="60" y1="190" x2="60" y2="10" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arrow)"/>
                <text x="385" y="95" fill="var(--text-main)" font-family="sans-serif" font-size="14" font-weight="bold">t</text>
                <text x="40" y="15" fill="var(--text-main)" font-family="sans-serif" font-size="14" font-weight="bold">x</text>
                
                <path d="M 60 30 C 90 30, 105 100, 135 100 C 165 100, 180 170, 210 170 C 240 170, 255 100, 285 100 C 315 100, 330 30, 360 30" fill="none" stroke="var(--text-main)" stroke-width="3"/>
                
                <text x="25" y="35" fill="var(--text-main)" font-family="sans-serif" font-size="14" font-weight="bold">+A</text>
                <text x="25" y="175" fill="var(--text-main)" font-family="sans-serif" font-size="14" font-weight="bold">-A</text>
                
                <text x="135" y="120" fill="var(--text-main)" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">T/4</text>
                <text x="210" y="85" fill="var(--text-main)" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">T/2</text>
                <text x="285" y="120" fill="var(--text-main)" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">3T/4</text>
                <text x="360" y="85" fill="var(--text-main)" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">T</text>
            </svg>
        `,
        question: "An object attached to an ideal spring undergoes simple harmonic motion. Its position as a function of time is plotted in the graph above. Which of the following velocity vs. time ($v$ vs. $t$) graphs correctly corresponds to the motion of this object over the same time interval?",
        choices: [
            { text: "A sine curve starting at $v=0$, reaching $+v_{max}$ at $T/4$, and returning to zero at $T/2$.", svgDiagram: "" },
            { text: "A negative sine curve starting at $v=0$, reaching $-v_{max}$ at $T/4$, passing through zero at $T/2$, and reaching $+v_{max}$ at $3T/4$.", svgDiagram: "" },
            { text: "A cosine curve identical to the position graph but scaled up in amplitude.", svgDiagram: "" },
            { text: "A negative cosine curve starting at its lowest negative value $-v_{max}$ at $t=0$.", svgDiagram: "" }
        ],
        correctIndex: 1,
        explanation: "Velocity is the rate of change (slope) of the position-time graph. At $t=0$, the slope is zero, so $v(0)=0$. Immediately after, the graph slopes downward (negative velocity). At $t = T/4$, the downward slope is steepest, corresponding to maximum negative velocity. Mathematically, if $x(t) = A\\cos(\\omega t)$, the derivative is $v(t) = -A\\omega\\sin(\\omega t)$, a negative sine graph."
    },
    {
        id: "AP001-DYNAM-W6R77",
        unit: "Force and Translational Dynamics",
        topic: "Motion on an Inclined Plane",
        skill: "Science Practice 2.B",
        difficulty: "Medium",
        svgDiagram: `
            <svg viewBox="0 0 350 250" xmlns="http://www.w3.org/2000/svg">
                <line x1="20" y1="220" x2="330" y2="220" stroke="var(--text-main)" stroke-width="2"/>
                
                <polygon points="50,220 290,220 50,40" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="3"/>
                
                <path d="M 230 220 A 60 60 0 0 0 242 184" fill="none" stroke="var(--text-main)" stroke-width="1.5"/>
                <text x="200" y="210" fill="var(--text-main)" font-family="sans-serif" font-size="16" font-weight="bold">37°</text>
                
                <g transform="translate(130, 160) rotate(37)">
                    <rect x="-30" y="-40" width="60" height="40" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="3" rx="2"/>
                    <text x="0" y="-15" fill="var(--text-main)" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">5.0 kg</text>
                    
                    <line x1="40" y1="-20" x2="90" y2="-20" stroke="var(--text-main)" stroke-width="3"/>
                    <polygon points="90,-20 80,-27 80,-13" fill="var(--text-main)"/>
                </g>
                
                <rect x="230" y="20" width="90" height="30" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="1" rx="4"/>
                <text x="275" y="40" fill="var(--text-main)" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">μk = 0.25</text>
            </svg>
        `,
        question: "A $5.0\\text{ kg}$ block slides down an incline tilted at an angle of $37^\\circ$ relative to the horizontal. If the coefficient of kinetic friction between the block and the incline is $0.25$, what is the magnitude of the acceleration of the block down the ramp? (Use $g = 10\\text{ m/s}^2$, $\\sin 37^\\circ \\approx 0.60$, $\\cos 37^\\circ \\approx 0.80$)",
        choices: [
            { text: "$2.0\\text{ m/s}^2$", svgDiagram: "" },
            { text: "$4.0\\text{ m/s}^2$", svgDiagram: "" },
            { text: "$6.0\\text{ m/s}^2$", svgDiagram: "" },
            { text: "$8.0\\text{ m/s}^2$", svgDiagram: "" }
        ],
        correctIndex: 1,
        explanation: "Resolving forces parallel and perpendicular to the inclined plane: $F_{g,\\parallel} = mg\\sin\\theta$ and $F_N = mg\\cos\\theta$. Kinetic friction is $F_f = \\mu_k F_N = \\mu_k mg\\cos\\theta$. Newton's second law along the ramp: $\\Sigma F_{\\parallel} = mg\\sin\\theta - \\mu_k mg\\cos\\theta = ma$. The mass $m$ cancels out: $a = g\\sin\\theta - \\mu_k g\\cos\\theta = (10)(0.60) - (0.25)(10)(0.80) = 6.0 - 2.0 = 4.0\\text{ m/s}^2$."
    },
    {
        id: "AP001-LINMO-Q1F23",
        unit: "Linear Momentum",
        topic: "Experimental Design Using the Impulse-Momentum Theorem",
        skill: "Science Practice 3.B",
        difficulty: "Hard",
        svgDiagram: `
            <svg viewBox="0 0 450 160" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="120" width="430" height="15" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/>
                <line x1="10" y1="120" x2="440" y2="120" stroke="var(--text-main)" stroke-width="3"/>
                
                <rect x="20" y="80" width="30" height="40" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2" rx="3"/>
                <circle cx="35" cy="100" r="8" fill="none" stroke="var(--text-main)" stroke-width="1.5"/>
                <path d="M 60 85 Q 75 100 60 115 M 70 80 Q 90 100 70 120" fill="none" stroke="var(--text-main)" stroke-width="1.5" stroke-dasharray="3,3"/>
                <text x="35" y="70" fill="var(--text-main)" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">Sensor</text>
                
                <rect x="130" y="85" width="60" height="25" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2" rx="2"/>
                <circle cx="145" cy="115" r="5" fill="var(--text-main)"/> <circle cx="175" cy="115" r="5" fill="var(--text-main)"/> <text x="160" y="103" fill="var(--text-main)" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Cart A</text>
                
                <rect x="190" y="90" width="10" height="15" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="1"/>
                <path d="M 200 97 L 210 97" stroke="var(--text-main)" stroke-width="2"/>
                <rect x="210" y="92" width="5" height="10" fill="var(--text-main)"/>
                
                <line x1="140" y1="65" x2="200" y2="65" stroke="var(--text-main)" stroke-width="2"/>
                <polygon points="200,65 192,59 192,71" fill="var(--text-main)"/>
                <text x="170" y="55" fill="var(--text-main)" font-family="sans-serif" font-size="14" font-style="italic" font-weight="bold" text-anchor="middle">v</text>
                
                <rect x="300" y="85" width="60" height="25" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2" rx="2"/>
                <circle cx="315" cy="115" r="5" fill="var(--text-main)"/> <circle cx="345" cy="115" r="5" fill="var(--text-main)"/> <text x="330" y="103" fill="var(--text-main)" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Cart B</text>
                <text x="330" y="65" fill="var(--text-main)" font-family="sans-serif" font-size="12" font-style="italic" text-anchor="middle">v = 0</text>
            </svg>
        `,
        question: "Students are designing an experiment to verify the Impulse-Momentum Theorem ($\\int F \\, dt = \\Delta p$) during a collision between two carts. Cart A has an electronic force sensor mounted on it, and a motion detector tracks its velocity. To completely verify that the impulse delivered by the force matches the change in linear momentum of Cart A, which of the following describes the necessary data analysis?",
        choices: [
            { text: "Calculate the area under the Force vs. Time graph during the collision, and compare it directly to the product of Cart A's mass and its change in velocity ($m \\cdot \\Delta v$).", svgDiagram: "" },
            { text: "Find the peak maximum value of the force on the Force vs. Time graph, multiply it by the total duration of the collision, and set it equal to $m v_f$.", svgDiagram: "" },
            { text: "Plot Force vs. Distance, find the slope of the linear fit line, and check if it equals the kinetic energy change.", svgDiagram: "" },
            { text: "Measure the total time duration of the impact using the force sensor and multiply it by the initial momentum to confirm it matches the final force value.", svgDiagram: "" }
        ],
        correctIndex: 0,
        explanation: "The Impulse-Momentum Theorem states that the definite integral of force with respect to time ($\\int F \\, dt$), which geometrically corresponds to the area under a Force vs. Time curve, is precisely equal to the change in momentum ($\\Delta p = m\\Delta v$). Finding the peak force and multiplying by duration would drastically overestimate the true impulse."
    },
    {
        id: "AP001-FLUID-Y5Z88",
        unit: "Fluids",
        topic: "Pressure in Static Fluids",
        skill: "Science Practice 2.C",
        difficulty: "Medium",
        svgDiagram: `
            <svg viewBox="0 0 350 250" xmlns="http://www.w3.org/2000/svg">
                <path d="M 120 40 L 120 100 C 70 140, 70 210, 80 220 L 220 220 C 230 210, 230 140, 180 100 L 180 40 Z" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="4" stroke-linejoin="round"/>
                
                <line x1="120" y1="60" x2="180" y2="60" stroke="var(--text-main)" stroke-width="2"/>
                <path d="M 125 75 L 175 75 M 115 90 L 185 90 M 100 110 L 200 110 M 90 130 L 210 130" stroke="var(--text-main)" stroke-width="1" stroke-dasharray="4,6" opacity="0.4"/>
                
                <path d="M 140 20 L 140 35 M 150 15 L 150 35 M 160 20 L 160 35" stroke="var(--text-main)" stroke-width="1.5"/>
                <polygon points="140,35 137,30 143,30" fill="var(--text-main)"/>
                <polygon points="150,35 147,30 153,30" fill="var(--text-main)"/>
                <polygon points="160,35 157,30 163,30" fill="var(--text-main)"/>
                <text x="150" y="10" fill="var(--text-main)" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Patm</text>

                <circle cx="110" cy="120" r="5" fill="var(--text-main)"/>
                <text x="95" y="125" fill="var(--text-main)" font-family="sans-serif" font-size="14" font-weight="bold">X</text>
                
                <circle cx="160" cy="120" r="5" fill="var(--text-main)"/>
                <text x="175" y="125" fill="var(--text-main)" font-family="sans-serif" font-size="14" font-weight="bold">Y</text>
                
                <circle cx="150" cy="190" r="5" fill="var(--text-main)"/>
                <text x="165" y="195" fill="var(--text-main)" font-family="sans-serif" font-size="14" font-weight="bold">Z</text>
                
                <line x1="240" y1="60" x2="260" y2="60" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="240" y1="120" x2="260" y2="120" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="240" y1="190" x2="260" y2="190" stroke="var(--text-main)" stroke-width="1"/>
                
                <line x1="250" y1="60" x2="250" y2="120" stroke="var(--text-main)" stroke-width="1.5"/>
                <polygon points="250,60 246,67 254,67" fill="var(--text-main)"/>
                <polygon points="250,120 246,113 254,113" fill="var(--text-main)"/>
                <text x="265" y="95" fill="var(--text-main)" font-family="sans-serif" font-size="12" font-weight="bold">5 cm</text>
                
                <line x1="250" y1="60" x2="250" y2="190" stroke="var(--text-main)" stroke-width="1.5"/>
                <polygon points="250,190 246,183 254,183" fill="var(--text-main)"/>
                <text x="265" y="160" fill="var(--text-main)" font-family="sans-serif" font-size="12" font-weight="bold">15 cm</text>
            </svg>
        `,
        question: "An open container holds an ideal static fluid as shown. Let $P_X$, $P_Y$, and $P_Z$ represent the absolute hydrostatic pressures at locations X, Y, and Z, respectively. Which of the following rankings correctly orders the pressures at these three locations?",
        choices: [
            { text: "$P_X = P_Y < P_Z$", svgDiagram: "" },
            { text: "$P_X < P_Y < P_Z$", svgDiagram: "" },
            { text: "$P_Z < P_X = P_Y$", svgDiagram: "" },
            { text: "$P_X = P_Y = P_Z$", svgDiagram: "" }
        ],
        correctIndex: 0,
        explanation: "Absolute pressure in a static fluid depends strictly on vertical depth $h$ beneath the open surface: $P = P_{atm} + \\rho g h$. Points X and Y are at the exact same vertical depth ($h = 5\\text{ cm}$), so their pressures are equal ($P_X = P_Y$). Point Z is significantly deeper ($h = 15\\text{ cm}$), yielding a higher pressure ($P_Z > P_X$). Thus, $P_X = P_Y < P_Z$."
    },
    {
        id: "AP001-ROTEN-B2C34",
        unit: "Energy and Momentum of Rotating Systems",
        topic: "Rotational Kinetic Energy",
        skill: "Science Practice 2.B",
        difficulty: "Medium",
        svgDiagram: `
            <svg viewBox="0 0 350 250" xmlns="http://www.w3.org/2000/svg">
                <line x1="30" y1="40" x2="70" y2="40" stroke="var(--text-main)" stroke-width="1" stroke-dasharray="4,4"/>
                <line x1="30" y1="210" x2="320" y2="210" stroke="var(--text-main)" stroke-width="2"/>
                
                <line x1="45" y1="40" x2="45" y2="210" stroke="var(--text-main)" stroke-width="2"/>
                <polygon points="45,40 40,48 50,48" fill="var(--text-main)"/>
                <polygon points="45,210 40,202 50,202" fill="var(--text-main)"/>
                <rect x="25" y="115" width="20" height="20" fill="var(--panel-bg)"/>
                <text x="35" y="130" fill="var(--text-main)" font-family="sans-serif" font-size="16" font-weight="bold" font-style="italic" text-anchor="middle">H</text>

                <polygon points="70,40 290,210 70,210" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="3"/>
                
                <g transform="translate(100, 35)">
                    <circle cx="0" cy="0" r="25" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="3"/>
                    
                    <circle cx="0" cy="0" r="15" fill="none" stroke="var(--text-main)" stroke-width="1" stroke-dasharray="4,4"/>
                    
                    <circle cx="0" cy="0" r="3" fill="var(--text-main)"/>
                    <text x="0" y="-30" fill="var(--text-main)" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">M, R</text>
                    
                    <path d="M 10 -15 A 18 18 0 0 1 20 5" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                    <polygon points="20,5 14,0 22,-3" fill="var(--text-main)" transform="rotate(30 20 5)"/>
                </g>
            </svg>
        `,
        question: "A solid, uniform cylinder ($I = \\frac{1}{2}MR^2$) starts from rest and rolls without slipping down an incline from a vertical height $H$. What fraction of the cylinder's total kinetic energy at the bottom of the ramp is stored as rotational kinetic energy?",
        choices: [
            { text: "$\\frac{1}{4}$", svgDiagram: "" },
            { text: "$\\frac{1}{3}$", svgDiagram: "" },
            { text: "$\\frac{1}{2}$", svgDiagram: "" },
            { text: "$\\frac{2}{3}$", svgDiagram: "" }
        ],
        correctIndex: 1,
        explanation: "Total kinetic energy is the sum of translational ($K_{trans}$) and rotational ($K_{rot}$): $K_{trans} = \\frac{1}{2}Mv^2$. $K_{rot} = \\frac{1}{2}I\\omega^2 = \\frac{1}{2}(\\frac{1}{2}MR^2)(\\frac{v}{R})^2 = \\frac{1}{4}Mv^2$. Total kinetic energy is $K_{total} = \\frac{1}{2}Mv^2 + \\frac{1}{4}Mv^2 = \\frac{3}{4}Mv^2$. The fraction that is rotational is $\\frac{K_{rot}}{K_{total}} = \\frac{\\frac{1}{4}Mv^2}{\\frac{3}{4}Mv^2} = \\frac{1}{3}$."
    }
];
