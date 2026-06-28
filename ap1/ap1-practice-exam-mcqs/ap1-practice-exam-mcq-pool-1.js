const ap1PracticeExamMCQPoolOne = [
    {
        id: "q1",
        unit: "Unit 3: Work, Energy, and Power",
        topic: "Conservation of Mechanical Energy (Spring Systems)",
        skill: "Science Practice 2.B",
        difficulty: "Medium",
        svgDiagram: `
            <svg viewBox="0 0 350 150" xmlns="http://www.w3.org/2000/svg">
                <line x1="10" y1="130" x2="340" y2="130" stroke="var(--text-main)" stroke-width="2"/>
                <line x1="20" y1="20" x2="20" y2="130" stroke="var(--text-main)" stroke-width="4"/>
                <line x1="10" y1="20" x2="20" y2="20" stroke="var(--text-main)" stroke-width="2"/>
                <line x1="180" y1="20" x2="180" y2="140" stroke="var(--text-main)" stroke-width="1" stroke-dasharray="4,4"/>
                <text x="180" y="15" fill="var(--text-main)" font-family="sans-serif" font-size="10" text-anchor="middle">x = 0</text>
                
                <path d="M 20 50 L 40 40 L 60 60 L 80 40 L 100 60 L 120 50" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                <rect x="120" y="30" width="30" height="30" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/>
                <text x="135" y="50" fill="var(--text-main)" font-family="sans-serif" font-size="12" text-anchor="middle">m</text>
                <text x="70" y="30" fill="var(--text-main)" font-family="sans-serif" font-size="10" text-anchor="middle">Pos 1</text>
                
                <path d="M 20 110 L 45 100 L 75 120 L 105 100 L 135 120 L 165 110" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                <rect x="180" y="90" width="30" height="30" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/>
                <text x="195" y="110" fill="var(--text-main)" font-family="sans-serif" font-size="12" text-anchor="middle">m</text>
                <path d="M 220 105 L 250 105 L 245 100 M 250 105 L 245 110" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                <text x="235" y="95" fill="var(--text-main)" font-family="sans-serif" font-size="12" text-anchor="middle">v</text>
                <text x="100" y="90" fill="var(--text-main)" font-family="sans-serif" font-size="10" text-anchor="middle">Pos 2</text>
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
        id: "q2",
        unit: "Unit 2 (Dynamics) + Unit 6 (Rotational Energy/Momentum)",
        topic: "Net Force in Vertical Circular Motion",
        skill: "Science Practice 3.B",
        difficulty: "Hard",
        svgDiagram: `
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="70" fill="none" stroke="var(--text-main)" stroke-width="3" stroke-dasharray="5,5"/>
                <circle cx="100" cy="30" r="6" fill="var(--text-main)"/>
                <text x="100" y="20" fill="var(--text-main)" font-family="sans-serif" font-size="12" text-anchor="middle">3</text>
                <circle cx="170" cy="100" r="6" fill="var(--text-main)"/>
                <text x="185" y="104" fill="var(--text-main)" font-family="sans-serif" font-size="12" text-anchor="middle">2</text>
                <circle cx="100" cy="170" r="6" fill="var(--text-main)"/>
                <text x="100" y="190" fill="var(--text-main)" font-family="sans-serif" font-size="12" text-anchor="middle">1</text>
                <circle cx="30" cy="100" r="6" fill="var(--text-main)"/>
                <text x="15" y="104" fill="var(--text-main)" font-family="sans-serif" font-size="12" text-anchor="middle">4</text>
                <circle cx="100" cy="100" r="3" fill="var(--text-main)"/>
                <text x="90" y="110" fill="var(--text-main)" font-family="sans-serif" font-size="14" font-style="italic">R</text>
                <line x1="100" y1="100" x2="150" y2="150" stroke="var(--text-main)" stroke-width="1"/>
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
        id: "q3",
        unit: "Unit 1: Kinematics + Unit 3: Work, Energy, and Power",
        topic: "Projectile Motion and Mechanical Energy Conservation",
        skill: "Science Practice 2.A",
        difficulty: "Hard",
        svgDiagram: `
            <svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
                <line x1="20" y1="150" x2="280" y2="150" stroke="var(--text-main)" stroke-width="2"/>
                <line x1="30" y1="160" x2="30" y2="20" stroke="var(--text-main)" stroke-width="2"/>
                <text x="280" y="145" fill="var(--text-main)" font-family="sans-serif" font-size="12">x</text>
                <text x="15" y="30" fill="var(--text-main)" font-family="sans-serif" font-size="12">y</text>
                
                <path d="M 30 150 Q 140 -20 250 150" fill="none" stroke="var(--text-main)" stroke-width="2" stroke-dasharray="4,4"/>
                
                <circle cx="30" cy="150" r="4" fill="var(--text-main)"/>
                <text x="15" y="165" fill="var(--text-main)" font-family="sans-serif" font-size="12">O</text>
                <line x1="30" y1="150" x2="70" y2="90" stroke="var(--text-main)" stroke-width="2"/>
                <polygon points="70,90 62,95 68,100" fill="var(--text-main)" transform="rotate(-15 70 90)"/>
                <text x="40" y="110" fill="var(--text-main)" font-family="sans-serif" font-size="12">v₀</text>
                <path d="M 50 150 A 20 20 0 0 0 45 125" fill="none" stroke="var(--text-main)" stroke-width="1"/>
                <text x="55" y="142" fill="var(--text-main)" font-family="sans-serif" font-size="12">θ</text>
                
                <circle cx="140" cy="36" r="4" fill="var(--text-main)"/>
                <text x="135" y="25" fill="var(--text-main)" font-family="sans-serif" font-size="12">H</text>
                
                <circle cx="210" cy="90" r="4" fill="var(--text-main)"/>
                <text x="220" y="85" fill="var(--text-main)" font-family="sans-serif" font-size="12">P</text>
                <line x1="210" y1="150" x2="210" y2="90" stroke="var(--text-main)" stroke-width="1" stroke-dasharray="2,2"/>
                <text x="195" y="125" fill="var(--text-main)" font-family="sans-serif" font-size="12">h</text>
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
        id: "q4",
        unit: "Unit 5: Torque and Rotational Dynamics",
        topic: "Rotational Equilibrium",
        skill: "Science Practice 2.C",
        difficulty: "Medium",
        svgDiagram: `
            <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
                <text x="80" y="20" fill="var(--text-main)" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Scenario A</text>
                <line x1="20" y1="30" x2="20" y2="150" stroke="var(--text-main)" stroke-width="4"/> <rect x="20" y="120" width="120" height="10" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/> <circle cx="20" cy="125" r="4" fill="var(--text-main)"/> <line x1="140" y1="120" x2="20" y2="50" stroke="var(--text-main)" stroke-width="1"/> <path d="M 120 120 A 20 20 0 0 1 123 110" fill="none" stroke="var(--text-main)" stroke-width="1"/>
                <text x="100" y="115" fill="var(--text-main)" font-family="sans-serif" font-size="10">30°</text>
                <text x="75" y="145" fill="var(--text-main)" font-family="sans-serif" font-size="12">L, M</text>
                
                <line x1="180" y1="10" x2="180" y2="160" stroke="var(--text-main)" stroke-width="1" stroke-dasharray="4,4"/>

                <text x="280" y="20" fill="var(--text-main)" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Scenario B</text>
                <line x1="200" y1="30" x2="200" y2="150" stroke="var(--text-main)" stroke-width="4"/> <rect x="200" y="120" width="120" height="10" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/> <circle cx="200" cy="125" r="4" fill="var(--text-main)"/> <line x1="260" y1="120" x2="200" y2="20" stroke="var(--text-main)" stroke-width="1"/> <path d="M 245 120 A 15 15 0 0 1 253 108" fill="none" stroke="var(--text-main)" stroke-width="1"/>
                <text x="260" y="110" fill="var(--text-main)" font-family="sans-serif" font-size="10">60°</text>
                <text x="225" y="145" fill="var(--text-main)" font-family="sans-serif" font-size="12">L/2</text>
                <line x1="260" y1="135" x2="260" y2="145" stroke="var(--text-main)" stroke-width="1"/>
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
        id: "q5",
        unit: "Unit 4: Linear Momentum + Unit 5: Torque and Rotational Dynamics",
        topic: "Angular Momentum During a Collision",
        skill: "Science Practice 3.B",
        difficulty: "Hard",
        svgDiagram: `
            <svg viewBox="0 0 250 150" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="75" r="60" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/>
                <circle cx="150" cy="75" r="4" fill="var(--text-main)"/> <text x="145" y="65" fill="var(--text-main)" font-family="sans-serif" font-size="12">M, R</text>
                
                <circle cx="30" cy="15" r="6" fill="var(--text-main)"/>
                <text x="25" y="35" fill="var(--text-main)" font-family="sans-serif" font-size="12">m</text>
                
                <line x1="36" y1="15" x2="80" y2="15" stroke="var(--text-main)" stroke-width="2"/>
                <polygon points="80,15 72,11 72,19" fill="var(--text-main)"/>
                <text x="50" y="10" fill="var(--text-main)" font-family="sans-serif" font-size="12">v₀</text>
                
                <line x1="85" y1="15" x2="150" y2="15" stroke="var(--text-main)" stroke-width="1" stroke-dasharray="3,3"/>
                <line x1="150" y1="15" x2="150" y2="75" stroke="var(--text-main)" stroke-width="1" stroke-dasharray="3,3"/>
                <text x="155" y="45" fill="var(--text-main)" font-family="sans-serif" font-size="12">R</text>
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
        id: "q6",
        unit: "Unit 7: Oscillations",
        topic: "Kinematics of Simple Harmonic Motion",
        skill: "Science Practice 2.D",
        difficulty: "Medium",
        svgDiagram: `
            <svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
                <line x1="20" y1="75" x2="280" y2="75" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="40" y1="10" x2="40" y2="140" stroke="var(--text-main)" stroke-width="1"/>
                <text x="280" y="70" fill="var(--text-main)" font-family="sans-serif" font-size="10">t</text>
                <text x="25" y="15" fill="var(--text-main)" font-family="sans-serif" font-size="10">x</text>
                
                <path d="M 40 25 Q 65 25 90 75 T 140 125 T 190 75 T 240 25" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                
                <text x="15" y="30" fill="var(--text-main)" font-family="sans-serif" font-size="10">+A</text>
                <text x="15" y="130" fill="var(--text-main)" font-family="sans-serif" font-size="10">-A</text>
                <line x1="90" y1="70" x2="90" y2="80" stroke="var(--text-main)" stroke-width="1"/>
                <text x="80" y="90" fill="var(--text-main)" font-family="sans-serif" font-size="10">T/4</text>
                <line x1="140" y1="70" x2="140" y2="80" stroke="var(--text-main)" stroke-width="1"/>
                <text x="135" y="65" fill="var(--text-main)" font-family="sans-serif" font-size="10">T/2</text>
                <line x1="240" y1="70" x2="240" y2="80" stroke="var(--text-main)" stroke-width="1"/>
                <text x="235" y="90" fill="var(--text-main)" font-family="sans-serif" font-size="10">T</text>
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
        id: "q7",
        unit: "Unit 1: Kinematics + Unit 2: Force and Translational Dynamics",
        topic: "Motion on an Inclined Plane",
        skill: "Science Practice 2.B",
        difficulty: "Medium",
        svgDiagram: `
            <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="30,170 250,170 30,50" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                <path d="M 210 170 A 40 40 0 0 0 200 148" fill="none" stroke="var(--text-main)" stroke-width="1"/>
                <text x="180" y="165" fill="var(--text-main)" font-family="sans-serif" font-size="12">37°</text>
                
                <polygon points="100,105 135,85 110,45 75,65" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/>
                <text x="95" y="80" fill="var(--text-main)" font-family="sans-serif" font-size="12">5.0 kg</text>
                
                <line x1="140" y1="90" x2="180" y2="112" stroke="var(--text-main)" stroke-width="2"/>
                <polygon points="180,112 172,105 177,117" fill="var(--text-main)" transform="rotate(30 180 112)"/>
                
                <text x="30" y="20" fill="var(--text-main)" font-family="sans-serif" font-size="12">μk = 0.25</text>
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
        id: "q8",
        unit: "Unit 2: Force and Translational Dynamics + Unit 4: Linear Momentum",
        topic: "Experimental Design Using the Impulse-Momentum Theorem",
        skill: "Science Practice 3.B",
        difficulty: "Hard",
        svgDiagram: `
            <svg viewBox="0 0 350 120" xmlns="http://www.w3.org/2000/svg">
                <line x1="10" y1="90" x2="340" y2="90" stroke="var(--text-main)" stroke-width="3"/>
                
                <rect x="20" y="60" width="20" height="30" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/>
                <path d="M 45 70 Q 55 60 55 75 T 45 80" fill="none" stroke="var(--text-main)" stroke-width="1" stroke-dasharray="2,2"/>
                
                <rect x="100" y="60" width="40" height="20" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/>
                <circle cx="110" cy="85" r="5" fill="var(--text-main)"/>
                <circle cx="130" cy="85" r="5" fill="var(--text-main)"/>
                <text x="120" y="75" fill="var(--text-main)" font-family="sans-serif" font-size="12" text-anchor="middle">A</text>
                <path d="M 140 65 L 145 65 L 145 75 L 140 75" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                <line x1="150" y1="50" x2="180" y2="50" stroke="var(--text-main)" stroke-width="2"/>
                <polygon points="180,50 172,45 172,55" fill="var(--text-main)"/>
                
                <rect x="220" y="60" width="40" height="20" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/>
                <circle cx="230" cy="85" r="5" fill="var(--text-main)"/>
                <circle cx="250" cy="85" r="5" fill="var(--text-main)"/>
                <text x="240" y="75" fill="var(--text-main)" font-family="sans-serif" font-size="12" text-anchor="middle">B</text>
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
        id: "q9",
        unit: "Unit 8: Fluids",
        topic: "Pressure in Static Fluids",
        skill: "Science Practice 2.C",
        difficulty: "Medium",
        svgDiagram: `
            <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                <path d="M 80 30 L 80 80 Q 50 120 50 170 L 250 170 Q 250 120 220 80 L 220 30" fill="none" stroke="var(--text-main)" stroke-width="3"/>
                <line x1="80" y1="50" x2="220" y2="50" stroke="var(--text-main)" stroke-width="1" stroke-dasharray="4,4"/>
                
                <circle cx="100" cy="80" r="4" fill="var(--text-main)"/>
                <text x="90" y="75" fill="var(--text-main)" font-family="sans-serif" font-size="12">X</text>
                
                <circle cx="150" cy="80" r="4" fill="var(--text-main)"/>
                <text x="160" y="75" fill="var(--text-main)" font-family="sans-serif" font-size="12">Y</text>
                
                <circle cx="150" cy="150" r="4" fill="var(--text-main)"/>
                <text x="160" y="145" fill="var(--text-main)" font-family="sans-serif" font-size="12">Z</text>
                
                <line x1="230" y1="50" x2="240" y2="50" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="230" y1="80" x2="240" y2="80" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="235" y1="50" x2="235" y2="80" stroke="var(--text-main)" stroke-width="1" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
                <text x="245" y="70" fill="var(--text-main)" font-family="sans-serif" font-size="10">5 cm</text>
                
                <line x1="230" y1="150" x2="240" y2="150" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="235" y1="50" x2="235" y2="150" stroke="var(--text-main)" stroke-width="1"/>
                <text x="245" y="110" fill="var(--text-main)" font-family="sans-serif" font-size="10">15 cm</text>
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
        id: "q10",
        unit: "Unit 3: Work, Energy, and Power + Unit 6: Energy and Momentum of Rotating Systems",
        topic: "Rotational Kinetic Energy",
        skill: "Science Practice 2.B",
        difficulty: "Medium",
        svgDiagram: `
            <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="40,160 260,160 40,40" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                
                <circle cx="65" cy="40" r="15" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/>
                <circle cx="65" cy="40" r="2" fill="var(--text-main)"/>
                
                <line x1="20" y1="40" x2="35" y2="40" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="20" y1="160" x2="35" y2="160" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="27" y1="40" x2="27" y2="160" stroke="var(--text-main)" stroke-width="1" stroke-dasharray="4,4"/>
                <text x="10" y="105" fill="var(--text-main)" font-family="sans-serif" font-size="14">H</text>
                
                <path d="M 80 50 A 20 20 0 0 1 100 80" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                <polygon points="100,80 95,72 105,75" fill="var(--text-main)"/>
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
