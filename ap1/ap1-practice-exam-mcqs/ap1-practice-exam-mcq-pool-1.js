const ap1PracticeExamMCQPoolOne = [
    {
        id: "AP001-WRENP-A7B39",
        unit: "Work, Energy, and Power",
        topic: "Conservation of Mechanical Energy (Spring Systems)",
        skill: "Science Practice 2.B",
        difficulty: "Medium",
        svgDiagram: `
            <svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" style="background:transparent; max-width:100%;">
                <defs>
                    <marker id="arr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M0,1 L10,5 L0,9 Z" fill="var(--text-main, #fff)"/>
                    </marker>
                </defs>
                <line x1="15" y1="95" x2="305" y2="95" stroke="var(--text-main, #fff)" stroke-width="1.5"/>
                <line x1="20" y1="20" x2="20" y2="95" stroke="var(--text-main, #fff)" stroke-width="1.5"/>
                
                <line x1="170" y1="20" x2="170" y2="105" stroke="var(--text-main, #fff)" stroke-width="1" stroke-dasharray="4,4" opacity="0.6"/>
                <text x="170" y="118" fill="var(--text-main, #fff)" font-family="serif" font-size="11" text-anchor="middle" font-style="italic">x = 0</text>
                
                <g opacity="0.5">
                    <path d="M20,45 L32,45 L38,35 L48,55 L58,35 L68,55 L78,35 L88,55 L98,35 L104,45 L110,45" fill="none" stroke="var(--text-main, #fff)" stroke-width="1.2" stroke-linejoin="round"/>
                    <rect x="110" y="25" width="30" height="30" fill="none" stroke="var(--text-main, #fff)" stroke-width="1.2"/>
                    <text x="125" y="44" fill="var(--text-main, #fff)" font-family="serif" font-size="11" font-style="italic" text-anchor="middle">m</text>
                    <text x="125" y="16" fill="var(--text-main, #fff)" font-family="sans-serif" font-size="9" text-anchor="middle">Pos 1</text>
                </g>
                
                <g>
                    <path d="M20,80 L40,80 L48,70 L62,90 L76,70 L90,90 L104,70 L118,90 L132,70 L146,90 L154,80 L170,80" fill="none" stroke="var(--text-main, #fff)" stroke-width="1.5" stroke-linejoin="round"/>
                    <rect x="170" y="60" width="30" height="35" fill="var(--panel-bg, #2a2b2d)" stroke="var(--text-main, #fff)" stroke-width="1.5"/>
                    <text x="185" y="82" fill="var(--text-main, #fff)" font-family="serif" font-size="12" font-style="italic" text-anchor="middle">m</text>
                    <text x="185" y="52" fill="var(--text-main, #fff)" font-family="sans-serif" font-size="9" text-anchor="middle" font-weight="bold">Pos 2</text>
                    
                    <line x1="205" y1="77" x2="240" y2="77" stroke="var(--text-main, #fff)" stroke-width="2" marker-end="url(#arr)"/>
                    <text x="248" y="81" fill="var(--text-main, #fff)" font-family="serif" font-size="12" font-style="italic" font-weight="bold">v</text>
                </g>
                
                <line x1="125" y1="102" x2="170" y2="102" stroke="var(--text-main, #fff)" stroke-width="1" marker-start="url(#arr)" marker-end="url(#arr)"/>
                <text x="147" y="114" fill="var(--text-main, #fff)" font-family="serif" font-size="11" font-style="italic" text-anchor="middle">Δx</text>
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
            <svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" style="background:transparent; max-width:100%;">
                <defs>
                    <marker id="arr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                        <path d="M0,1 L10,5 L0,9 Z" fill="var(--text-main, #fff)"/>
                    </marker>
                </defs>
                <circle cx="160" cy="80" r="60" fill="none" stroke="var(--text-main, #fff)" stroke-width="1.5"/>
                <circle cx="160" cy="80" r="2" fill="var(--text-main, #fff)"/>
                
                <line x1="160" y1="80" x2="202" y2="122" stroke="var(--text-main, #fff)" stroke-width="1" stroke-dasharray="3,3"/>
                <text x="186" y="100" fill="var(--text-main, #fff)" font-family="serif" font-size="12" font-style="italic">R</text>
                
                <circle cx="160" cy="20" r="6" fill="var(--panel-bg, #2a2b2d)" stroke="var(--text-main, #fff)" stroke-width="1.5"/>
                <text x="160" y="11" fill="var(--text-main, #fff)" font-family="serif" font-size="11" text-anchor="middle" font-weight="bold">3</text>
                
                <circle cx="220" cy="80" r="6" fill="var(--panel-bg, #2a2b2d)" stroke="var(--text-main, #fff)" stroke-width="1.5"/>
                <text x="233" y="84" fill="var(--text-main, #fff)" font-family="serif" font-size="11" font-weight="bold">2</text>
                
                <circle cx="160" cy="140" r="6" fill="var(--panel-bg, #2a2b2d)" stroke="var(--text-main, #fff)" stroke-width="1.5"/>
                <text x="160" y="155" fill="var(--text-main, #fff)" font-family="serif" font-size="11" text-anchor="middle" font-weight="bold">1</text>
                
                <circle cx="100" cy="80" r="6" fill="var(--panel-bg, #2a2b2d)" stroke="var(--text-main, #fff)" stroke-width="1.5"/>
                <text x="87" y="84" fill="var(--text-main, #fff)" font-family="serif" font-size="11" font-weight="bold">4</text>
                
                <path d="M 226 65 A 68 68 0 0 0 175 14" fill="none" stroke="var(--text-main, #fff)" stroke-width="1" marker-end="url(#arr)"/>
                <text x="212" y="44" fill="var(--text-main, #fff)" font-family="serif" font-size="12" font-style="italic" font-weight="bold">v</text>
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
            <svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" style="background:transparent; max-width:100%;">
                <defs>
                    <marker id="arr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                        <path d="M0,1 L10,5 L0,9 Z" fill="var(--text-main, #fff)"/>
                    </marker>
                </defs>
                <line x1="30" y1="120" x2="290" y2="120" stroke="var(--text-main, #fff)" stroke-width="1.5" marker-end="url(#arr)"/>
                <line x1="40" y1="125" x2="40" y2="20" stroke="var(--text-main, #fff)" stroke-width="1.5" marker-end="url(#arr)"/>
                <text x="295" y="124" fill="var(--text-main, #fff)" font-family="serif" font-size="11" font-style="italic">x</text>
                <text x="40" y="12" fill="var(--text-main, #fff)" font-family="serif" font-size="11" font-style="italic" text-anchor="middle">y</text>
                
                <path d="M 40 120 Q 150 -10 260 120" fill="none" stroke="var(--text-main, #fff)" stroke-width="1.5" stroke-dasharray="4,3"/>
                
                <circle cx="40" cy="120" r="3" fill="var(--text-main, #fff)"/>
                <text x="28" y="132" fill="var(--text-main, #fff)" font-family="serif" font-size="11">O</text>
                <line x1="40" y1="120" x2="85" y2="65" stroke="var(--text-main, #fff)" stroke-width="2" marker-end="url(#arr)"/>
                <text x="82" y="54" fill="var(--text-main, #fff)" font-family="serif" font-size="12" font-style="italic" font-weight="bold">v₀</text>
                
                <path d="M 65 120 A 25 25 0 0 0 58 98" fill="none" stroke="var(--text-main, #fff)" stroke-width="1"/>
                <text x="72" y="114" fill="var(--text-main, #fff)" font-family="serif" font-size="11">θ</text>
                
                <circle cx="150" cy="22" r="3" fill="var(--text-main, #fff)"/>
                <text x="150" y="14" fill="var(--text-main, #fff)" font-family="serif" font-size="11" text-anchor="middle">H</text>
                
                <circle cx="210" cy="62" r="4" fill="var(--panel-bg, #2a2b2d)" stroke="var(--text-main, #fff)" stroke-width="1.5"/>
                <text x="220" y="60" fill="var(--text-main, #fff)" font-family="serif" font-size="11" font-weight="bold">P</text>
                
                <line x1="210" y1="120" x2="210" y2="66" stroke="var(--text-main, #fff)" stroke-width="1" stroke-dasharray="2,2"/>
                <line x1="205" y1="91" x2="215" y2="91" stroke="transparent"/> <line x1="200" y1="120" x2="200" y2="62" stroke="var(--text-main, #fff)" stroke-width="1" marker-start="url(#arr)" marker-end="url(#arr)"/>
                <text x="190" y="95" fill="var(--text-main, #fff)" font-family="serif" font-size="11" font-style="italic" text-anchor="middle">h</text>
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
            <svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" style="background:transparent; max-width:100%;">
                <text x="65" y="15" fill="var(--text-main, #fff)" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">Scenario A</text>
                <line x1="15" y1="20" x2="15" y2="105" stroke="var(--text-main, #fff)" stroke-width="2"/>
                <rect x="15" y="80" width="100" height="10" fill="var(--panel-bg, #2a2b2d)" stroke="var(--text-main, #fff)" stroke-width="1.2"/>
                <line x1="115" y1="80" x2="15" y2="30" stroke="var(--text-main, #fff)" stroke-width="1.2"/>
                <path d="M 95 80 A 20 20 0 0 1 100 70" fill="none" stroke="var(--text-main, #fff)" stroke-width="1"/>
                <text x="85" y="74" fill="var(--text-main, #fff)" font-family="serif" font-size="10">30°</text>
                <text x="65" y="104" fill="var(--text-main, #fff)" font-family="serif" font-size="10" text-anchor="middle">L, M</text>
                
                <line x1="160" y1="10" x2="160" y2="110" stroke="var(--text-main, #fff)" stroke-width="1" stroke-dasharray="4,4" opacity="0.4"/>

                <text x="255" y="15" fill="var(--text-main, #fff)" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">Scenario B</text>
                <line x1="205" y1="20" x2="205" y2="105" stroke="var(--text-main, #fff)" stroke-width="2"/>
                <rect x="205" y="80" width="100" height="10" fill="var(--panel-bg, #2a2b2d)" stroke="var(--text-main, #fff)" stroke-width="1.2"/>
                <line x1="255" y1="80" x2="205" y2="25" stroke="var(--text-main, #fff)" stroke-width="1.2"/>
                <circle cx="255" cy="80" r="2" fill="var(--text-main, #fff)"/>
                <path d="M 243 80 A 12 12 0 0 1 247 70" fill="none" stroke="var(--text-main, #fff)" stroke-width="1"/>
                <text x="249" y="68" fill="var(--text-main, #fff)" font-family="serif" font-size="10">60°</text>
                
                <line x1="205" y1="100" x2="255" y2="100" stroke="var(--text-main, #fff)" stroke-width="0.8"/>
                <text x="230" y="111" fill="var(--text-main, #fff)" font-family="serif" font-size="9" font-style="italic" text-anchor="middle">L/2</text>
            </svg>
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
            <svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" style="background:transparent; max-width:100%;">
                <defs>
                    <marker id="arr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                        <path d="M0,1 L10,5 L0,9 Z" fill="var(--text-main, #fff)"/>
                    </marker>
                </defs>
                <circle cx="190" cy="70" r="45" fill="var(--panel-bg, #2a2b2d)" stroke="var(--text-main, #fff)" stroke-width="1.5"/>
                <circle cx="190" cy="70" r="4" fill="none" stroke="var(--text-main, #fff)" stroke-width="1.5"/>
                <circle cx="190" cy="70" r="1.5" fill="var(--text-main, #fff)"/>
                <text x="190" y="60" fill="var(--text-main, #fff)" font-family="serif" font-size="11" text-anchor="middle" font-weight="bold">M, R</text>
                
                <path d="M45,21 C50,18 60,22 58,28 C56,34 46,32 42,28 C38,24 40,24 45,21 Z" fill="var(--text-main, #fff)"/>
                <text x="48" y="42" fill="var(--text-main, #fff)" font-family="serif" font-size="12" font-style="italic">m</text>
                
                <line x1="62" y1="25" x2="190" y2="25" stroke="var(--text-main, #fff)" stroke-width="1" stroke-dasharray="4,4" opacity="0.6"/>
                <line x1="65" y1="25" x2="115" y2="25" stroke="var(--text-main, #fff)" stroke-width="2" marker-end="url(#arr)"/>
                <text x="90" y="16" fill="var(--text-main, #fff)" font-family="serif" font-size="12" font-style="italic" font-weight="bold">v₀</text>
                
                <line x1="190" y1="25" x2="190" y2="66" stroke="var(--text-main, #fff)" stroke-width="1" stroke-dasharray="2,2"/>
                <text x="198" y="48" fill="var(--text-main, #fff)" font-family="serif" font-size="12" font-style="italic">R</text>
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
            <svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" style="background:transparent; max-width:100%;">
                <defs>
                    <marker id="arr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                        <path d="M0,1 L10,5 L0,9 Z" fill="var(--text-main, #fff)"/>
                    </marker>
                </defs>
                <line x1="50" y1="20" x2="290" y2="20" stroke="var(--text-main, #fff)" stroke-width="0.5" stroke-dasharray="3,3" opacity="0.2"/>
                <line x1="50" y1="100" x2="290" y2="100" stroke="var(--text-main, #fff)" stroke-width="0.5" stroke-dasharray="3,3" opacity="0.2"/>
                <line x1="110" y1="15" x2="110" y2="105" stroke="var(--text-main, #fff)" stroke-width="0.5" stroke-dasharray="3,3" opacity="0.3"/>
                <line x1="170" y1="15" x2="170" y2="105" stroke="var(--text-main, #fff)" stroke-width="0.5" stroke-dasharray="3,3" opacity="0.3"/>
                <line x1="230" y1="15" x2="230" y2="105" stroke="var(--text-main, #fff)" stroke-width="0.5" stroke-dasharray="3,3" opacity="0.3"/>
                <line x1="290" y1="15" x2="290" y2="105" stroke="var(--text-main, #fff)" stroke-width="0.5" stroke-dasharray="3,3" opacity="0.3"/>

                <line x1="45" y1="60" x2="305" y2="60" stroke="var(--text-main, #fff)" stroke-width="1.5" marker-end="url(#arr)"/>
                <line x1="50" y1="115" x2="50" y2="10" stroke="var(--text-main, #fff)" stroke-width="1.5" marker-end="url(#arr)"/>
                <text x="308" y="64" fill="var(--text-main, #fff)" font-family="serif" font-size="11" font-style="italic">t</text>
                <text x="40" y="12" fill="var(--text-main, #fff)" font-family="serif" font-size="11" font-style="italic">x</text>
                
                <path d="M 50 20 C 80 20, 80 60, 110 60 C 140 60, 140 100, 170 100 C 200 100, 200 60, 230 60 C 260 60, 260 20, 290 20" fill="none" stroke="var(--text-main, #fff)" stroke-width="2"/>
                
                <text x="32" y="24" fill="var(--text-main, #fff)" font-family="serif" font-size="11">+A</text>
                <text x="32" y="104" fill="var(--text-main, #fff)" font-family="serif" font-size="11">-A</text>
                
                <text x="110" y="74" fill="var(--text-main, #fff)" font-family="serif" font-size="9" text-anchor="middle">T/4</text>
                <text x="170" y="50" fill="var(--text-main, #fff)" font-family="serif" font-size="9" text-anchor="middle">T/2</text>
                <text x="230" y="74" fill="var(--text-main, #fff)" font-family="serif" font-size="9" text-anchor="middle">3T/4</text>
                <text x="290" y="50" fill="var(--text-main, #fff)" font-family="serif" font-size="9" text-anchor="middle">T</text>
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
            <svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" style="background:transparent; max-width:100%;">
                <defs>
                    <marker id="arr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                        <path d="M0,1 L10,5 L0,9 Z" fill="var(--text-main, #fff)"/>
                    </marker>
                </defs>
                <line x1="20" y1="125" x2="290" y2="125" stroke="var(--text-main, #fff)" stroke-width="1"/>
                
                <polygon points="40,125 260,125 40,30" fill="var(--panel-bg, #2a2b2d)" stroke="var(--text-main, #fff)" stroke-width="1.5"/>
                
                <path d="M 220 125 A 40 40 0 0 0 228 102" fill="none" stroke="var(--text-main, #fff)" stroke-width="1"/>
                <text x="198" y="118" fill="var(--text-main, #fff)" font-family="serif" font-size="12" font-weight="bold">37°</text>
                
                <g transform="translate(125, 68) rotate(23.6)">
                    <rect x="-20" y="-25" width="40" height="25" fill="var(--panel-bg, #2a2b2d)" stroke="var(--text-main, #fff)" stroke-width="1.5"/>
                    <text x="0" y="-8" fill="var(--text-main, #fff)" font-family="serif" font-size="11" font-weight="bold" text-anchor="middle">5.0 kg</text>
                    
                    <line x1="28" y1="-12" x2="60" y2="-12" stroke="var(--text-main, #fff)" stroke-width="1.5" marker-end="url(#arr)"/>
                </g>
                
                <rect x="220" y="15" width="75" height="22" fill="var(--panel-bg, #2a2b2d)" stroke="var(--text-main, #fff)" stroke-width="1" rx="2"/>
                <text x="257" y="30" fill="var(--text-main, #fff)" font-family="serif" font-size="11" text-anchor="middle">μ_k = 0.25</text>
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
            <svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" style="background:transparent; max-width:100%;">
                <defs>
                    <marker id="arr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                        <path d="M0,1 L10,5 L0,9 Z" fill="var(--text-main, #fff)"/>
                    </marker>
                </defs>
                <line x1="15" y1="90" x2="305" y2="90" stroke="var(--text-main, #fff)" stroke-width="1.5"/>
                
                <rect x="25" y="60" width="22" height="30" fill="var(--panel-bg, #2a2b2d)" stroke="var(--text-main, #fff)" stroke-width="1.2" rx="1"/>
                <path d="M53,67 C57,71 57,79 53,83 M58,62 C64,68 64,82 58,88" fill="none" stroke="var(--text-main, #fff)" stroke-width="1" stroke-dasharray="2,2"/>
                <text x="36" y="50" fill="var(--text-main, #fff)" font-family="sans-serif" font-size="8" text-anchor="middle">Sensor</text>
                
                <rect x="95" y="63" width="45" height="20" fill="var(--panel-bg, #2a2b2d)" stroke="var(--text-main, #fff)" stroke-width="1.5" rx="1"/>
                <circle cx="104" cy="86" r="4" fill="var(--text-main, #fff)"/>
                <circle cx="131" cy="86" r="4" fill="var(--text-main, #fff)"/>
                <text x="117.5" y="76" fill="var(--text-main, #fff)" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">Cart A</text>
                
                <rect x="140" y="68" width="6" height="10" fill="var(--text-main, #fff)"/>
                
                <line x1="102" y1="46" x2="132" y2="46" stroke="var(--text-main, #fff)" stroke-width="1.5" marker-end="url(#arr)"/>
                <text x="117" y="38" fill="var(--text-main, #fff)" font-family="serif" font-size="11" font-style="italic" font-weight="bold" text-anchor="middle">v</text>
                
                <rect x="215" y="63" width="45" height="20" fill="var(--panel-bg, #2a2b2d)" stroke="var(--text-main, #fff)" stroke-width="1.5" rx="1"/>
                <circle cx="224" cy="86" r="4" fill="var(--text-main, #fff)"/>
                <circle cx="251" cy="86" r="4" fill="var(--text-main, #fff)"/>
                <text x="237.5" y="76" fill="var(--text-main, #fff)" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">Cart B</text>
                <text x="237.5" y="46" fill="var(--text-main, #fff)" font-family="serif" font-size="11" font-style="italic" text-anchor="middle">v = 0</text>
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
            <svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" style="background:transparent; max-width:100%;">
                <defs>
                    <marker id="arr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                        <path d="M0,1 L10,5 L0,9 Z" fill="var(--text-main, #fff)"/>
                    </marker>
                </defs>
                <path d="M 120 20 L 120 55 C 90 85, 80 110, 90 135 L 210 135 C 220 110, 210 85, 180 55 L 180 20 Z" fill="var(--panel-bg, #2a2b2d)" stroke="var(--text-main, #fff)" stroke-width="2" stroke-linejoin="round"/>
                
                <line x1="120" y1="35" x2="180" y2="35" stroke="var(--text-main, #fff)" stroke-width="1.5"/>
                <path d="M 112 65 L 188 65 M 95 95 L 205 95" stroke="var(--text-main, #fff)" stroke-width="1" stroke-dasharray="4,4" opacity="0.15"/>
                
                <line x1="150" y1="5" x2="150" y2="15" stroke="var(--text-main, #fff)" stroke-width="1" marker-end="url(#arr)"/>
                <text x="150" y="2" fill="var(--text-main, #fff)" font-family="serif" font-size="10" text-anchor="middle">P_{atm}</text>

                <circle cx="115" cy="65" r="3" fill="var(--text-main, #fff)"/>
                <text x="123" y="68" fill="var(--text-main, #fff)" font-family="serif" font-size="11" font-weight="bold">X</text>
                
                <circle cx="155" cy="65" r="3" fill="var(--text-main, #fff)"/>
                <text x="163" y="68" fill="var(--text-main, #fff)" font-family="serif" font-size="11" font-weight="bold">Y</text>
                
                <circle cx="150" cy="110" r="3" fill="var(--text-main, #fff)"/>
                <text x="158" y="113" fill="var(--text-main, #fff)" font-family="serif" font-size="11" font-weight="bold">Z</text>
                
                <line x1="230" y1="35" x2="245" y2="35" stroke="var(--text-main, #fff)" stroke-width="0.8"/>
                <line x1="230" y1="65" x2="245" y2="65" stroke="var(--text-main, #fff)" stroke-width="0.8"/>
                <line x1="230" y1="110" x2="245" y2="110" stroke="var(--text-main, #fff)" stroke-width="0.8"/>
                
                <line x1="238" y1="35" x2="238" y2="65" stroke="var(--text-main, #fff)" stroke-width="1" marker-start="url(#arr)" marker-end="url(#arr)"/>
                <text x="248" y="54" fill="var(--text-main, #fff)" font-family="serif" font-size="11">5 cm</text>
                
                <line x1="238" y1="35" x2="238" y2="110" stroke="var(--text-main, #fff)" stroke-width="1" marker-end="url(#arr)"/>
                <text x="248" y="92" fill="var(--text-main, #fff)" font-family="serif" font-size="11">15 cm</text>
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
            <svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" style="background:transparent; max-width:100%;">
                <defs>
                    <marker id="arr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                        <path d="M0,1 L10,5 L0,9 Z" fill="var(--text-main, #fff)"/>
                    </marker>
                </defs>
                <line x1="20" y1="120" x2="300" y2="120" stroke="var(--text-main, #fff)" stroke-width="1.5"/>
                <line x1="45" y1="30" x2="75" y2="30" stroke="var(--text-main, #fff)" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.5"/>
                
                <line x1="55" y1="30" x2="55" y2="120" stroke="var(--text-main, #fff)" stroke-width="1" marker-start="url(#arr)" marker-end="url(#arr)"/>
                <text x="43" y="80" fill="var(--text-main, #fff)" font-family="serif" font-size="12" font-style="italic" font-weight="bold">H</text>

                <polygon points="75,30 265,120 75,120" fill="var(--panel-bg, #2a2b2d)" stroke="var(--text-main, #fff)" stroke-width="1.5"/>
                
                <g transform="translate(100, 26)">
                    <circle cx="0" cy="0" r="16" fill="var(--panel-bg, #2a2b2d)" stroke="var(--text-main, #fff)" stroke-width="1.5"/>
                    <circle cx="0" cy="0" r="1" fill="var(--text-main, #fff)"/>
                    <text x="0" y="-22" fill="var(--text-main, #fff)" font-family="serif" font-size="11" font-weight="bold" text-anchor="middle">M, R</text>
                    
                    <path d="M 7 -11 A 13 13 0 0 1 12 3" fill="none" stroke="var(--text-main, #fff)" stroke-width="1" marker-end="url(#arr)"/>
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
