const ap1PracticeExamMCQPoolOne = [

    {
        id: "AP001-WRENP-KX72M",
        unit: "Work, Energy, and Power",
        topic: "Conservation of Mechanical Energy (Spring Systems)",
        skill: "Mathematical Routines",
        sciencePractice: "2.B – Calculate or estimate an unknown quantity with units from known quantities by selecting and following a logical computational pathway.",
        difficulty: "Medium",

        svgDiagram: `
            <svg width="320" height="130" viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg">
                <!-- Wall -->
                <rect x="0" y="10" width="18" height="110" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/>
                <line x1="18" y1="10" x2="0" y2="30" stroke="var(--text-main)" stroke-width="1.5"/>
                <line x1="18" y1="30" x2="0" y2="50" stroke="var(--text-main)" stroke-width="1.5"/>
                <line x1="18" y1="50" x2="0" y2="70" stroke="var(--text-main)" stroke-width="1.5"/>
                <line x1="18" y1="70" x2="0" y2="90" stroke="var(--text-main)" stroke-width="1.5"/>
                <line x1="18" y1="90" x2="0" y2="110" stroke="var(--text-main)" stroke-width="1.5"/>

                <!-- === POSITION 1: Compressed === -->
                <!-- Label -->
                <text x="55" y="14" fill="var(--text-main)" font-family="inherit" font-size="11" font-weight="bold" text-anchor="middle">Position 1</text>
                <text x="55" y="26" fill="var(--text-main)" font-family="inherit" font-size="10" text-anchor="middle">(Compressed)</text>

                <!-- Spring compressed (zigzag from x=18 to x=78) -->
                <polyline points="18,65 24,55 30,75 36,55 42,75 48,55 54,75 60,55 66,75 72,65 78,65"
                    fill="none" stroke="var(--text-main)" stroke-width="2"/>

                <!-- Block 1 -->
                <rect x="78" y="50" width="30" height="30" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/>
                <text x="93" y="69" fill="var(--text-main)" font-family="inherit" font-size="10" text-anchor="middle">m</text>

                <!-- Ground line -->
                <line x1="18" y1="80" x2="115" y2="80" stroke="var(--text-main)" stroke-width="1.5"/>

                <!-- Compression label -->
                <line x1="78" y1="88" x2="108" y2="88" stroke="var(--text-main)" stroke-width="1" stroke-dasharray="3,2"/>
                <line x1="78" y1="85" x2="78" y2="92" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="108" y1="85" x2="108" y2="92" stroke="var(--text-main)" stroke-width="1"/>
                <text x="93" y="102" fill="var(--text-main)" font-family="inherit" font-size="10" text-anchor="middle">Δx = 0.20 m</text>

                <!-- k label -->
                <text x="48" y="46" fill="var(--text-main)" font-family="inherit" font-size="10" text-anchor="middle">k=400 N/m</text>

                <!-- === POSITION 2: Released === -->
                <!-- Label -->
                <text x="230" y="14" fill="var(--text-main)" font-family="inherit" font-size="11" font-weight="bold" text-anchor="middle">Position 2</text>
                <text x="230" y="26" fill="var(--text-main)" font-family="inherit" font-size="10" text-anchor="middle">(Released)</text>

                <!-- Spring relaxed (zigzag from x=158 to x=238, natural length) -->
                <polyline points="158,65 165,55 172,75 179,55 186,75 193,55 200,75 207,55 214,75 221,65 228,65"
                    fill="none" stroke="var(--text-main)" stroke-width="2"/>

                <!-- Block 2 -->
                <rect x="228" y="50" width="30" height="30" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/>
                <text x="243" y="69" fill="var(--text-main)" font-family="inherit" font-size="10" text-anchor="middle">m</text>

                <!-- Ground line 2 -->
                <line x1="158" y1="80" x2="310" y2="80" stroke="var(--text-main)" stroke-width="1.5"/>

                <!-- Wall 2 -->
                <rect x="140" y="10" width="18" height="110" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/>
                <line x1="158" y1="10" x2="140" y2="30" stroke="var(--text-main)" stroke-width="1.5"/>
                <line x1="158" y1="30" x2="140" y2="50" stroke="var(--text-main)" stroke-width="1.5"/>
                <line x1="158" y1="50" x2="140" y2="70" stroke="var(--text-main)" stroke-width="1.5"/>
                <line x1="158" y1="70" x2="140" y2="90" stroke="var(--text-main)" stroke-width="1.5"/>
                <line x1="158" y1="90" x2="140" y2="110" stroke="var(--text-main)" stroke-width="1.5"/>

                <!-- Velocity arrow -->
                <line x1="260" y1="65" x2="300" y2="65" stroke="var(--text-main)" stroke-width="2"/>
                <path d="M 292 60 L 300 65 L 292 70" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                <text x="280" y="56" fill="var(--text-main)" font-family="inherit" font-size="12" text-anchor="middle">v</text>
            </svg>
        `,

        question: "A 2.0 kg block is held against a horizontal spring of spring constant 400 N/m, compressing the spring by 0.20 m. The block is then released from rest on a frictionless horizontal surface. What is the maximum speed achieved by the block after release?",

        choices: [
            { text: "2.0 m/s", svgDiagram: null },
            { text: "2.8 m/s", svgDiagram: null },
            { text: "4.0 m/s", svgDiagram: null },
            { text: "8.0 m/s", svgDiagram: null }
        ],

        correctIndex: 1,

        explanation: {
            correct: "By conservation of mechanical energy, all elastic potential energy converts to kinetic energy at release: (1/2)k(Δx)² = (1/2)mv². Substituting: (1/2)(400)(0.20)² = 8.0 J = (1/2)(2.0)v², so v = √8.0 ≈ 2.8 m/s.",
            distractors: [
                "2.0 m/s – Obtained by forgetting to square the compression distance, using (1/2)kΔx instead of (1/2)k(Δx)².",
                "4.0 m/s – Calculated by omitting the 1/2 coefficients entirely from both sides.",
                "8.0 m/s – This is the value of the kinetic energy (8.0 J), confusing energy units with speed units."
            ]
        }
    },

    {
        id: "AP001-DYNAM-PR58N",
        unit: "Force and Translational Dynamics",
        topic: "Net Force in Vertical Circular Motion",
        skill: "Argumentation",
        sciencePractice: "3.B – Apply an appropriate law, definition, theoretical relationship, or model to make a claim.",
        difficulty: "Hard",

        svgDiagram: `
            <svg width="220" height="220" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
                <!-- Circular track -->
                <circle cx="110" cy="110" r="80" fill="none" stroke="var(--text-main)" stroke-width="3"/>

                <!-- Center dot -->
                <circle cx="110" cy="110" r="3" fill="var(--text-main)"/>

                <!-- Point 1: Bottom -->
                <circle cx="110" cy="190" r="7" fill="var(--text-main)"/>
                <text x="110" y="212" fill="var(--text-main)" font-family="inherit" font-size="12" text-anchor="middle" font-weight="bold">1 (Bottom)</text>

                <!-- Point 2: Right -->
                <circle cx="190" cy="110" r="7" fill="var(--text-main)"/>
                <text x="210" y="114" fill="var(--text-main)" font-family="inherit" font-size="12" text-anchor="start" font-weight="bold">2</text>

                <!-- Point 3: Top -->
                <circle cx="110" cy="30" r="7" fill="var(--text-main)"/>
                <text x="110" y="20" fill="var(--text-main)" font-family="inherit" font-size="12" text-anchor="middle" font-weight="bold">3 (Top)</text>

                <!-- Point 4: Left -->
                <circle cx="30" cy="110" r="7" fill="var(--text-main)"/>
                <text x="5" y="114" fill="var(--text-main)" font-family="inherit" font-size="12" text-anchor="start" font-weight="bold">4</text>

                <!-- Direction of travel arrow (curved, near top-right) -->
                <path d="M 155 55 A 60 60 0 0 1 165 100" fill="none" stroke="var(--text-main)" stroke-width="1.5" stroke-dasharray="5,3"/>
                <path d="M 160 97 L 165 100 L 161 104" fill="none" stroke="var(--text-main)" stroke-width="1.5"/>
                <text x="172" y="80" fill="var(--text-main)" font-family="inherit" font-size="10">v</text>

                <!-- Radius label -->
                <line x1="110" y1="110" x2="190" y2="110" stroke="var(--text-main)" stroke-width="1" stroke-dasharray="4,3"/>
                <text x="150" y="104" fill="var(--text-main)" font-family="inherit" font-size="11" text-anchor="middle">R</text>
            </svg>
        `,

        question: "A small block is launched along the inside of a rough, vertical circular track. Due to friction, the block moves at a constant speed v as it successfully traverses the complete circular path. Which of the following options correctly represents the relative magnitudes of the normal force F_N exerted by the track on the block at the four labeled positions?",

        choices: [
            {
                text: "Normal force is identical in length (equal) at all four positions.",
                svgDiagram: `
                    <svg width="260" height="80" viewBox="0 0 260 80" xmlns="http://www.w3.org/2000/svg">
                        <!-- Point 1: Bottom — FN up (inward = up), same length -->
                        <circle cx="30" cy="50" r="5" fill="var(--text-main)"/>
                        <line x1="30" y1="50" x2="30" y2="20" stroke="var(--text-main)" stroke-width="2"/>
                        <path d="M 26 24 L 30 20 L 34 24" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                        <text x="30" y="70" fill="var(--text-main)" font-family="inherit" font-size="9" text-anchor="middle">Pt 1</text>

                        <!-- Point 2: Right side — FN left (inward = left), same length -->
                        <circle cx="90" cy="50" r="5" fill="var(--text-main)"/>
                        <line x1="90" y1="50" x2="60" y2="50" stroke="var(--text-main)" stroke-width="2"/>
                        <path d="M 64 46 L 60 50 L 64 54" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                        <text x="90" y="70" fill="var(--text-main)" font-family="inherit" font-size="9" text-anchor="middle">Pt 2</text>

                        <!-- Point 3: Top — FN down (inward = down), same length -->
                        <circle cx="160" cy="30" r="5" fill="var(--text-main)"/>
                        <line x1="160" y1="30" x2="160" y2="60" stroke="var(--text-main)" stroke-width="2"/>
                        <path d="M 156 56 L 160 60 L 164 56" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                        <text x="160" y="74" fill="var(--text-main)" font-family="inherit" font-size="9" text-anchor="middle">Pt 3</text>

                        <!-- Point 4: Left side — FN right (inward = right), same length -->
                        <circle cx="220" cy="50" r="5" fill="var(--text-main)"/>
                        <line x1="220" y1="50" x2="250" y2="50" stroke="var(--text-main)" stroke-width="2"/>
                        <path d="M 246 46 L 250 50 L 246 54" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                        <text x="220" y="70" fill="var(--text-main)" font-family="inherit" font-size="9" text-anchor="middle">Pt 4</text>
                    </svg>
                `
            },
            {
                text: "Normal force at Point 1 (bottom) is longest; Points 2 and 4 (sides) are equal and medium; Point 3 (top) is shortest.",
                svgDiagram: `
                    <svg width="260" height="90" viewBox="0 0 260 90" xmlns="http://www.w3.org/2000/svg">
                        <!-- Point 1: Bottom — FN up, longest (40px) -->
                        <circle cx="30" cy="60" r="5" fill="var(--text-main)"/>
                        <line x1="30" y1="60" x2="30" y2="20" stroke="var(--text-main)" stroke-width="2"/>
                        <path d="M 26 24 L 30 20 L 34 24" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                        <text x="30" y="76" fill="var(--text-main)" font-family="inherit" font-size="9" text-anchor="middle">Pt 1</text>
                        <text x="30" y="87" fill="var(--text-main)" font-family="inherit" font-size="8" text-anchor="middle">Largest</text>

                        <!-- Point 2: Right side — FN left, medium (25px) -->
                        <circle cx="90" cy="50" r="5" fill="var(--text-main)"/>
                        <line x1="90" y1="50" x2="65" y2="50" stroke="var(--text-main)" stroke-width="2"/>
                        <path d="M 69 46 L 65 50 L 69 54" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                        <text x="90" y="70" fill="var(--text-main)" font-family="inherit" font-size="9" text-anchor="middle">Pt 2</text>
                        <text x="90" y="81" fill="var(--text-main)" font-family="inherit" font-size="8" text-anchor="middle">Medium</text>

                        <!-- Point 3: Top — FN down, shortest (12px) -->
                        <circle cx="160" cy="30" r="5" fill="var(--text-main)"/>
                        <line x1="160" y1="30" x2="160" y2="42" stroke="var(--text-main)" stroke-width="2"/>
                        <path d="M 156 38 L 160 42 L 164 38" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                        <text x="160" y="56" fill="var(--text-main)" font-family="inherit" font-size="9" text-anchor="middle">Pt 3</text>
                        <text x="160" y="67" fill="var(--text-main)" font-family="inherit" font-size="8" text-anchor="middle">Smallest</text>

                        <!-- Point 4: Left side — FN right, medium (25px) -->
                        <circle cx="220" cy="50" r="5" fill="var(--text-main)"/>
                        <line x1="220" y1="50" x2="245" y2="50" stroke="var(--text-main)" stroke-width="2"/>
                        <path d="M 241 46 L 245 50 L 241 54" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                        <text x="220" y="70" fill="var(--text-main)" font-family="inherit" font-size="9" text-anchor="middle">Pt 4</text>
                        <text x="220" y="81" fill="var(--text-main)" font-family="inherit" font-size="8" text-anchor="middle">Medium</text>
                    </svg>
                `
            },
            {
                text: "Normal force at Point 3 (top) is longest; Points 2 and 4 are equal; Point 1 (bottom) is shortest.",
                svgDiagram: `
                    <svg width="260" height="90" viewBox="0 0 260 90" xmlns="http://www.w3.org/2000/svg">
                        <!-- Point 1: Bottom — FN up, shortest (12px) -->
                        <circle cx="30" cy="50" r="5" fill="var(--text-main)"/>
                        <line x1="30" y1="50" x2="30" y2="38" stroke="var(--text-main)" stroke-width="2"/>
                        <path d="M 26 42 L 30 38 L 34 42" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                        <text x="30" y="66" fill="var(--text-main)" font-family="inherit" font-size="9" text-anchor="middle">Pt 1</text>
                        <text x="30" y="77" fill="var(--text-main)" font-family="inherit" font-size="8" text-anchor="middle">Smallest</text>

                        <!-- Point 2: Right side — FN left, medium (25px) -->
                        <circle cx="90" cy="50" r="5" fill="var(--text-main)"/>
                        <line x1="90" y1="50" x2="65" y2="50" stroke="var(--text-main)" stroke-width="2"/>
                        <path d="M 69 46 L 65 50 L 69 54" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                        <text x="90" y="66" fill="var(--text-main)" font-family="inherit" font-size="9" text-anchor="middle">Pt 2</text>
                        <text x="90" y="77" fill="var(--text-main)" font-family="inherit" font-size="8" text-anchor="middle">Medium</text>

                        <!-- Point 3: Top — FN down, longest (40px) -->
                        <circle cx="160" cy="20" r="5" fill="var(--text-main)"/>
                        <line x1="160" y1="20" x2="160" y2="60" stroke="var(--text-main)" stroke-width="2"/>
                        <path d="M 156 56 L 160 60 L 164 56" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                        <text x="160" y="74" fill="var(--text-main)" font-family="inherit" font-size="9" text-anchor="middle">Pt 3</text>
                        <text x="160" y="85" fill="var(--text-main)" font-family="inherit" font-size="8" text-anchor="middle">Largest</text>

                        <!-- Point 4: Left side — FN right, medium (25px) -->
                        <circle cx="220" cy="50" r="5" fill="var(--text-main)"/>
                        <line x1="220" y1="50" x2="245" y2="50" stroke="var(--text-main)" stroke-width="2"/>
                        <path d="M 241 46 L 245 50 L 241 54" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                        <text x="220" y="66" fill="var(--text-main)" font-family="inherit" font-size="9" text-anchor="middle">Pt 4</text>
                        <text x="220" y="77" fill="var(--text-main)" font-family="inherit" font-size="8" text-anchor="middle">Medium</text>
                    </svg>
                `
            },
            {
                text: "Normal force at Point 2 is longer than Point 4 due to the direction of motion.",
                svgDiagram: null
            }
        ],

        correctIndex: 1,

        explanation: {
            correct: "At constant speed, net radial force = mv²/R everywhere. At the bottom (Pt 1): F_N1 − mg = mv²/R → F_N1 = mv²/R + mg. At the sides (Pts 2 & 4): gravity is tangential, so F_N2 = F_N4 = mv²/R. At the top (Pt 3): F_N3 + mg = mv²/R → F_N3 = mv²/R − mg. Therefore F_N1 > F_N2 = F_N4 > F_N3.",
            distractors: [
                "Choice A is wrong because the centripetal requirement is constant but gravity adds/subtracts from the needed normal force depending on position.",
                "Choice C reverses the correct order — the normal force is largest at the bottom where it must support weight AND provide centripetal force.",
                "Choice D is wrong because the horizontal side positions are symmetric; the direction of travel does not change the magnitude of normal force."
            ]
        }
    },

    {
        id: "AP001-KINMA-WT31B",
        unit: "Kinematics",
        topic: "Projectile Motion and Mechanical Energy Conservation",
        skill: "Mathematical Routines",
        sciencePractice: "2.A – Derive a symbolic expression from known quantities.",
        difficulty: "Hard",

        svgDiagram: `
            <svg width="300" height="180" viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
                <!-- Axes -->
                <line x1="30" y1="160" x2="280" y2="160" stroke="var(--text-main)" stroke-width="2"/>
                <line x1="30" y1="160" x2="30" y2="20" stroke="var(--text-main)" stroke-width="2"/>
                <!-- Axis arrows -->
                <path d="M 276 155 L 280 160 L 276 165" fill="none" stroke="var(--text-main)" stroke-width="1.5"/>
                <path d="M 25 24 L 30 20 L 35 24" fill="none" stroke="var(--text-main)" stroke-width="1.5"/>
                <!-- Axis labels -->
                <text x="285" y="163" fill="var(--text-main)" font-family="inherit" font-size="12">x</text>
                <text x="22" y="18" fill="var(--text-main)" font-family="inherit" font-size="12">y</text>

                <!-- Parabolic trajectory path -->
                <path d="M 30 160 Q 155 30 280 130" fill="none" stroke="var(--text-main)" stroke-width="2" stroke-dasharray="0"/>

                <!-- Point O: Launch -->
                <circle cx="30" cy="160" r="5" fill="var(--text-main)"/>
                <text x="18" y="176" fill="var(--text-main)" font-family="inherit" font-size="11" font-weight="bold">O</text>

                <!-- Launch angle arc -->
                <path d="M 55 160 A 25 25 0 0 0 42 138" fill="none" stroke="var(--text-main)" stroke-width="1.5"/>
                <text x="60" y="148" fill="var(--text-main)" font-family="inherit" font-size="11">θ</text>

                <!-- Launch velocity arrow -->
                <line x1="30" y1="160" x2="68" y2="128" stroke="var(--text-main)" stroke-width="2"/>
                <path d="M 63 123 L 68 128 L 62 131" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                <text x="38" y="133" fill="var(--text-main)" font-family="inherit" font-size="11">v₀</text>

                <!-- Point H: Apex -->
                <circle cx="155" cy="30" r="5" fill="var(--text-main)"/>
                <text x="155" y="22" fill="var(--text-main)" font-family="inherit" font-size="11" font-weight="bold" text-anchor="middle">H (y_max)</text>

                <!-- Point P: On descending path -->
                <!-- Approximate position on parabola Q 155,30 control gives ~x=220,y=85 -->
                <circle cx="220" cy="85" r="5" fill="var(--text-main)"/>
                <text x="232" y="82" fill="var(--text-main)" font-family="inherit" font-size="11" font-weight="bold">P</text>

                <!-- Height h dashed line from P to ground -->
                <line x1="220" y1="85" x2="220" y2="160" stroke="var(--text-main)" stroke-width="1" stroke-dasharray="5,3"/>
                <!-- Height label -->
                <text x="228" y="126" fill="var(--text-main)" font-family="inherit" font-size="11">h</text>
                <!-- Tick marks -->
                <line x1="216" y1="85" x2="224" y2="85" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="216" y1="160" x2="224" y2="160" stroke="var(--text-main)" stroke-width="1"/>

                <!-- Velocity vector at P -->
                <line x1="220" y1="85" x2="248" y2="108" stroke="var(--text-main)" stroke-width="2"/>
                <path d="M 243 105 L 248 108 L 244 112" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                <text x="252" y="100" fill="var(--text-main)" font-family="inherit" font-size="11">v_p</text>
            </svg>
        `,

        question: "A projectile of mass m is launched from the ground with an initial speed v₀ at an angle θ above the horizontal. Air resistance is negligible. Using principles of conservation of energy, derive an expression for the speed v_p of the projectile when it passes through Point P at a known vertical height h above the ground.",

        choices: [
            { text: "v_p = v₀cosθ − √(2gh)", svgDiagram: null },
            { text: "v_p = √(v₀² − 2gh)", svgDiagram: null },
            { text: "v_p = √((v₀sinθ)² − 2gh)", svgDiagram: null },
            { text: "v_p = √(v₀²cos²θ − 2gh)", svgDiagram: null }
        ],

        correctIndex: 1,

        explanation: {
            correct: "By conservation of mechanical energy: (1/2)mv₀² = (1/2)mv_p² + mgh. Dividing by m and solving: v_p = √(v₀² − 2gh). The launch angle θ does not appear in the final expression because the formula uses total speed, not components.",
            distractors: [
                "Choice A incorrectly subtracts speeds rather than energies, and needlessly restricts to the horizontal component.",
                "Choice C is a common error: using only the vertical velocity component (v₀sinθ) instead of the total initial speed v₀.",
                "Choice D considers only the horizontal component of initial kinetic energy, ignoring the vertical contribution."
            ]
        }
    },

    {
        id: "AP001-ROTDY-CL47V",
        unit: "Torque and Rotational Dynamics",
        topic: "Rotational Equilibrium",
        skill: "Quantitative/Qualitative Translation",
        sciencePractice: "2.C – Compare physical quantities between two or more scenarios.",
        difficulty: "Medium",

        svgDiagram: `
            <svg width="320" height="200" viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
                <!-- === SCENARIO A === -->
                <text x="80" y="18" fill="var(--text-main)" font-family="inherit" font-size="12" font-weight="bold" text-anchor="middle">Scenario A</text>
                <!-- Wall A -->
                <rect x="0" y="20" width="16" height="100" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/>
                <line x1="16" y1="20" x2="0" y2="36" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="16" y1="36" x2="0" y2="52" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="16" y1="52" x2="0" y2="68" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="16" y1="68" x2="0" y2="84" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="16" y1="84" x2="0" y2="100" stroke="var(--text-main)" stroke-width="1"/>
                <!-- Hinge A -->
                <circle cx="16" cy="90" r="5" fill="var(--text-main)"/>
                <!-- Beam A -->
                <rect x="16" y="86" width="140" height="8" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/>
                <!-- Weight arrow at center -->
                <line x1="86" y1="94" x2="86" y2="115" stroke="var(--text-main)" stroke-width="2"/>
                <path d="M 82 111 L 86 115 L 90 111" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                <text x="94" y="108" fill="var(--text-main)" font-family="inherit" font-size="10">Mg</text>
                <!-- L/2 marker -->
                <line x1="16" y1="100" x2="86" y2="100" stroke="var(--text-main)" stroke-width="1" stroke-dasharray="3,2"/>
                <text x="51" y="112" fill="var(--text-main)" font-family="inherit" font-size="9" text-anchor="middle">L/2</text>
                <!-- Cable A: from right end (x=156) up-left to wall at angle 30° -->
                <!-- Wall attachment point is above hinge: x=16, y=90 - 80*tan(30°)≈46 = y=44 -->
                <line x1="156" y1="90" x2="16" y2="44" stroke="var(--text-main)" stroke-width="2"/>
                <!-- Angle label 30° at right end -->
                <path d="M 140 90 A 16 16 0 0 0 149 76" fill="none" stroke="var(--text-main)" stroke-width="1.5"/>
                <text x="128" y="79" fill="var(--text-main)" font-family="inherit" font-size="10">30°</text>
                <!-- TA label -->
                <text x="100" y="58" fill="var(--text-main)" font-family="inherit" font-size="11" font-style="italic">T_A</text>
                <!-- L label -->
                <text x="86" y="80" fill="var(--text-main)" font-family="inherit" font-size="10" text-anchor="middle">L</text>
                <!-- L bracket -->
                <line x1="16" y1="78" x2="156" y2="78" stroke="var(--text-main)" stroke-width="1" stroke-dasharray="2,2"/>
                <line x1="16" y1="75" x2="16" y2="81" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="156" y1="75" x2="156" y2="81" stroke="var(--text-main)" stroke-width="1"/>

                <!-- === SCENARIO B === -->
                <text x="250" y="18" fill="var(--text-main)" font-family="inherit" font-size="12" font-weight="bold" text-anchor="middle">Scenario B</text>
                <!-- Wall B -->
                <rect x="170" y="20" width="16" height="100" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/>
                <line x1="186" y1="20" x2="170" y2="36" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="186" y1="36" x2="170" y2="52" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="186" y1="52" x2="170" y2="68" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="186" y1="68" x2="170" y2="84" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="186" y1="84" x2="170" y2="100" stroke="var(--text-main)" stroke-width="1"/>
                <!-- Hinge B -->
                <circle cx="186" cy="90" r="5" fill="var(--text-main)"/>
                <!-- Beam B -->
                <rect x="186" y="86" width="120" height="8" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/>
                <!-- Weight arrow at center of B -->
                <line x1="246" y1="94" x2="246" y2="115" stroke="var(--text-main)" stroke-width="2"/>
                <path d="M 242 111 L 246 115 L 250 111" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                <text x="254" y="108" fill="var(--text-main)" font-family="inherit" font-size="10">Mg</text>
                <!-- Cable B: from midpoint (x=246) at 60° to wall above -->
                <!-- midpoint x=246, beam y=90. tan(60°)≈1.73, dx=60 → dy=60*1.73=104 → too tall; use dx=60, dy=60 for visual -->
                <!-- Attach to wall at x=186, y=90-60=30 for a clear 60° look -->
                <line x1="246" y1="90" x2="186" y2="36" stroke="var(--text-main)" stroke-width="2"/>
                <!-- Angle label 60° at midpoint attachment -->
                <path d="M 232 90 A 14 14 0 0 0 237 77" fill="none" stroke="var(--text-main)" stroke-width="1.5"/>
                <text x="217" y="83" fill="var(--text-main)" font-family="inherit" font-size="10">60°</text>
                <!-- TB label -->
                <text x="222" y="54" fill="var(--text-main)" font-family="inherit" font-size="11" font-style="italic">T_B</text>
                <!-- L/2 label on beam B -->
                <line x1="186" y1="78" x2="246" y2="78" stroke="var(--text-main)" stroke-width="1" stroke-dasharray="2,2"/>
                <line x1="186" y1="75" x2="186" y2="81" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="246" y1="75" x2="246" y2="81" stroke="var(--text-main)" stroke-width="1"/>
                <text x="216" y="73" fill="var(--text-main)" font-family="inherit" font-size="9" text-anchor="middle">L/2</text>
            </svg>
        `,

        question: "In both scenarios described above, a uniform beam of length L and mass M is held in perfect horizontal static equilibrium by a cable. Let T_A be the tension in Scenario A (cable at the right end, 30° from beam) and T_B be the tension in Scenario B (cable at the midpoint, 60° from beam). Which of the following correctly describes the relationship between T_A and T_B?",

        choices: [
            { text: "T_A = (√3/2) T_B", svgDiagram: null },
            { text: "T_A = T_B", svgDiagram: null },
            { text: "T_A = √3 · T_B", svgDiagram: null },
            { text: "T_A = (1/2) T_B", svgDiagram: null }
        ],

        correctIndex: 0,

        explanation: {
            correct: "Setting net torque about the hinge = 0 for each scenario: Scenario A: T_A · L · sin(30°) = Mg(L/2) → T_A·(1/2) = Mg/2 → T_A = Mg. Scenario B: T_B · (L/2) · sin(60°) = Mg(L/2) → T_B · (√3/2) = Mg → T_B = (2/√3)Mg. Ratio: T_A/T_B = Mg / [(2/√3)Mg] = √3/2. Therefore T_A = (√3/2)T_B.",
            distractors: [
                "Choice B (T_A = T_B) is wrong — both cables balance the same beam weight, but different attachment points and angles require different tensions.",
                "Choice C (T_A = √3·T_B) incorrectly inverts the ratio.",
                "Choice D (T_A = (1/2)T_B) uses a wrong proportionality."
            ]
        }
    },

    {
        id: "AP001-ROTDY-NG85Q",
        unit: "Torque and Rotational Dynamics",
        topic: "Angular Momentum During a Collision",
        skill: "Argumentation",
        sciencePractice: "3.B – Apply an appropriate physical model to make a claim.",
        difficulty: "Hard",

        svgDiagram: `
            <svg width="300" height="230" viewBox="0 0 300 230" xmlns="http://www.w3.org/2000/svg">
                <!-- === BEFORE === -->
                <text x="75" y="18" fill="var(--text-main)" font-family="inherit" font-size="12" font-weight="bold" text-anchor="middle">Before</text>

                <!-- Disk (circle) centered at 75,110 -->
                <circle cx="75" cy="110" r="60" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                <!-- Axle dot -->
                <circle cx="75" cy="110" r="5" fill="var(--text-main)"/>
                <!-- Axle symbol (cross) -->
                <line x1="68" y1="103" x2="82" y2="117" stroke="var(--text-main)" stroke-width="2"/>
                <line x1="82" y1="103" x2="68" y2="117" stroke="var(--text-main)" stroke-width="2"/>
                <!-- Disk label -->
                <text x="75" y="132" fill="var(--text-main)" font-family="inherit" font-size="10" text-anchor="middle">Disk (M, R)</text>
                <text x="75" y="144" fill="var(--text-main)" font-family="inherit" font-size="10" text-anchor="middle">stationary</text>

                <!-- Putty traveling tangent to top of disk: enters from left at y=50 (top of disk rim) -->
                <!-- Disk top at (75, 50). Tangent from left means horizontal arrow. -->
                <rect x="10" y="44" width="14" height="12" fill="var(--text-main)"/>
                <line x1="24" y1="50" x2="62" y2="50" stroke="var(--text-main)" stroke-width="2"/>
                <path d="M 57 46 L 62 50 L 57 54" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                <text x="37" y="42" fill="var(--text-main)" font-family="inherit" font-size="11" text-anchor="middle">v₀ →</text>
                <text x="17" y="40" fill="var(--text-main)" font-family="inherit" font-size="10" text-anchor="middle">m</text>

                <!-- Radius R label -->
                <line x1="75" y1="110" x2="75" y2="50" stroke="var(--text-main)" stroke-width="1" stroke-dasharray="4,3"/>
                <text x="82" y="83" fill="var(--text-main)" font-family="inherit" font-size="10">R</text>

                <!-- === AFTER === -->
                <text x="225" y="18" fill="var(--text-main)" font-family="inherit" font-size="12" font-weight="bold" text-anchor="middle">After</text>

                <!-- Disk after, same center at 225,110 -->
                <circle cx="225" cy="110" r="60" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                <!-- Axle -->
                <circle cx="225" cy="110" r="5" fill="var(--text-main)"/>
                <line x1="218" y1="103" x2="232" y2="117" stroke="var(--text-main)" stroke-width="2"/>
                <line x1="232" y1="103" x2="218" y2="117" stroke="var(--text-main)" stroke-width="2"/>

                <!-- Putty stuck at top edge -->
                <rect x="218" y="44" width="14" height="12" fill="var(--text-main)"/>

                <!-- Rotation arrows (curved arrows showing CCW rotation) -->
                <path d="M 225 52 A 58 58 0 0 1 280 100" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                <path d="M 276 96 L 280 100 L 275 103" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                <text x="265" y="80" fill="var(--text-main)" font-family="inherit" font-size="11">ω</text>

                <!-- System label -->
                <text x="225" y="135" fill="var(--text-main)" font-family="inherit" font-size="10" text-anchor="middle">Disk+putty</text>
                <text x="225" y="147" fill="var(--text-main)" font-family="inherit" font-size="10" text-anchor="middle">rotate together</text>
            </svg>
        `,

        question: "A sticky projectile of mass m is moving horizontally with speed v₀ when it strikes and sticks to the edge of an initially stationary uniform disk of radius R and mass M (I_disk = (1/2)MR²). Which of the following statements is true regarding the linear momentum and angular momentum of the system during the collision?",

        choices: [
            { text: "Both linear momentum and angular momentum are conserved because there are no external forces acting on the disk-projectile system.", svgDiagram: null },
            { text: "Neither linear momentum nor angular momentum are conserved because the axle exerts a force and a torque during the collision.", svgDiagram: null },
            { text: "Linear momentum is conserved because the collision is completely inelastic, but angular momentum is not conserved.", svgDiagram: null },
            { text: "Angular momentum about the central axle is conserved because the force exerted by the axle acts at zero radius, producing no external torque. Linear momentum is not conserved.", svgDiagram: null }
        ],

        correctIndex: 3,

        explanation: {
            correct: "The central axle must exert an external force on the disk during collision to keep it from translating, so linear momentum is NOT conserved. However, this axle force acts at r = 0 from the pivot, producing zero torque (τ = rF·sinθ = 0). With no external torques about the axle, angular momentum about the axle IS conserved.",
            distractors: [
                "Choice A is wrong because the axle does exert an external force, breaking linear momentum conservation.",
                "Choice B is wrong because the axle force produces zero torque (it acts at r = 0), so angular momentum about the axle is conserved.",
                "Choice C is wrong — the collision type (inelastic) is irrelevant to momentum conservation, and this choice incorrectly identifies which momentum is conserved."
            ]
        }
    },

    {
        id: "AP001-OSCIL-BM19Z",
        unit: "Oscillations",
        topic: "Kinematics of Simple Harmonic Motion",
        skill: "Quantitative/Qualitative Translation",
        sciencePractice: "2.D – Predict new values using functional dependence between variables.",
        difficulty: "Medium",

        svgDiagram: `
            <svg width="300" height="160" viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg">
                <!-- Axes -->
                <line x1="30" y1="80" x2="280" y2="80" stroke="var(--text-main)" stroke-width="1.5"/>
                <line x1="30" y1="20" x2="30" y2="150" stroke="var(--text-main)" stroke-width="1.5"/>
                <!-- Arrow heads -->
                <path d="M 276 76 L 280 80 L 276 84" fill="none" stroke="var(--text-main)" stroke-width="1.5"/>
                <path d="M 26 24 L 30 20 L 34 24" fill="none" stroke="var(--text-main)" stroke-width="1.5"/>
                <!-- Labels -->
                <text x="285" y="84" fill="var(--text-main)" font-family="inherit" font-size="12">t</text>
                <text x="20" y="17" fill="var(--text-main)" font-family="inherit" font-size="12">x</text>

                <!-- Cosine curve: x(t) = A·cos(2π/T · t), A=50 -->
                <!-- Starts at +A at t=0 (x=30), peaks at y=30. -->
                <!-- At t=T/4 → x_graph=100, y=80(zero) -->
                <!-- At t=T/2 → x_graph=170, y=130(-A) -->
                <!-- At t=3T/4 → x_graph=240, y=80(zero) -->
                <!-- At t=T → x_graph=280 approx -->
                <path d="M 30 30 C 52 30 72 80 100 80 C 128 80 148 130 170 130 C 192 130 212 80 240 80 C 260 80 272 30 280 30"
                    fill="none" stroke="var(--text-main)" stroke-width="2.5"/>

                <!-- +A label -->
                <text x="15" y="34" fill="var(--text-main)" font-family="inherit" font-size="10" text-anchor="middle">+A</text>
                <line x1="25" y1="30" x2="35" y2="30" stroke="var(--text-main)" stroke-width="1" stroke-dasharray="3,2"/>

                <!-- -A label -->
                <text x="15" y="134" fill="var(--text-main)" font-family="inherit" font-size="10" text-anchor="middle">−A</text>
                <line x1="25" y1="130" x2="35" y2="130" stroke="var(--text-main)" stroke-width="1" stroke-dasharray="3,2"/>

                <!-- T/4, T/2, 3T/4, T markers on time axis -->
                <line x1="100" y1="77" x2="100" y2="83" stroke="var(--text-main)" stroke-width="1.5"/>
                <text x="100" y="95" fill="var(--text-main)" font-family="inherit" font-size="10" text-anchor="middle">T/4</text>

                <line x1="170" y1="77" x2="170" y2="83" stroke="var(--text-main)" stroke-width="1.5"/>
                <text x="170" y="95" fill="var(--text-main)" font-family="inherit" font-size="10" text-anchor="middle">T/2</text>

                <line x1="240" y1="77" x2="240" y2="83" stroke="var(--text-main)" stroke-width="1.5"/>
                <text x="240" y="95" fill="var(--text-main)" font-family="inherit" font-size="10" text-anchor="middle">3T/4</text>

                <line x1="280" y1="77" x2="280" y2="83" stroke="var(--text-main)" stroke-width="1.5"/>
                <text x="280" y="95" fill="var(--text-main)" font-family="inherit" font-size="10" text-anchor="middle">T</text>

                <!-- Graph title -->
                <text x="155" y="150" fill="var(--text-main)" font-family="inherit" font-size="11" text-anchor="middle">Position x(t) = A·cos(ωt)</text>
            </svg>
        `,

        question: "An object attached to an ideal spring undergoes simple harmonic motion. Its position as a function of time is shown above as x(t) = A·cos(ωt), beginning at maximum positive displacement +A at t = 0. Which of the following velocity vs. time graphs correctly corresponds to this motion?",

        choices: [
            {
                text: "Positive sine curve: starts at v = 0 at t = 0, rises to +v_max at t = T/4, returns to zero at t = T/2.",
                svgDiagram: `
                    <svg width="200" height="90" viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg">
                        <line x1="15" y1="45" x2="190" y2="45" stroke="var(--text-main)" stroke-width="1.5"/>
                        <line x1="15" y1="10" x2="15" y2="85" stroke="var(--text-main)" stroke-width="1.5"/>
                        <text x="195" y="49" fill="var(--text-main)" font-family="inherit" font-size="10">t</text>
                        <text x="8" y="8" fill="var(--text-main)" font-family="inherit" font-size="10">v</text>
                        <!-- +sine: 0 at t=0 (x=15), up to +Vmax at T/4 (x=70), back to 0 at T/2 (x=125), down to -Vmax at 3T/4 (x=180) -->
                        <path d="M 15 45 C 30 45 42 10 70 10 C 98 10 110 45 125 45 C 140 45 152 80 180 80 C 188 80 190 80 190 80"
                            fill="none" stroke="var(--text-main)" stroke-width="2"/>
                        <text x="105" y="82" fill="var(--text-main)" font-family="inherit" font-size="9" text-anchor="middle">+sin (Incorrect)</text>
                    </svg>
                `
            },
            {
                text: "Negative sine curve: starts at v = 0 at t = 0, drops to −v_max at t = T/4, passes through zero at T/2, rises to +v_max at t = 3T/4.",
                svgDiagram: `
                    <svg width="200" height="90" viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg">
                        <line x1="15" y1="45" x2="190" y2="45" stroke="var(--text-main)" stroke-width="1.5"/>
                        <line x1="15" y1="10" x2="15" y2="85" stroke="var(--text-main)" stroke-width="1.5"/>
                        <text x="195" y="49" fill="var(--text-main)" font-family="inherit" font-size="10">t</text>
                        <text x="8" y="8" fill="var(--text-main)" font-family="inherit" font-size="10">v</text>
                        <!-- -sine: 0 at t=0, down to -Vmax at T/4, 0 at T/2, up to +Vmax at 3T/4 -->
                        <path d="M 15 45 C 30 45 42 80 70 80 C 98 80 110 45 125 45 C 140 45 152 10 180 10 C 188 10 190 10 190 10"
                            fill="none" stroke="var(--text-main)" stroke-width="2"/>
                        <text x="105" y="10" fill="var(--text-main)" font-family="inherit" font-size="9" text-anchor="middle">−sin (Correct)</text>
                    </svg>
                `
            },
            {
                text: "Cosine curve identical in shape to the position graph (same phase), scaled up in amplitude.",
                svgDiagram: `
                    <svg width="200" height="90" viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg">
                        <line x1="15" y1="45" x2="190" y2="45" stroke="var(--text-main)" stroke-width="1.5"/>
                        <line x1="15" y1="10" x2="15" y2="85" stroke="var(--text-main)" stroke-width="1.5"/>
                        <text x="195" y="49" fill="var(--text-main)" font-family="inherit" font-size="10">t</text>
                        <text x="8" y="8" fill="var(--text-main)" font-family="inherit" font-size="10">v</text>
                        <!-- Cosine: starts at +Vmax, zero at T/4, -Vmax at T/2 -->
                        <path d="M 15 10 C 30 10 42 45 70 45 C 98 45 110 80 125 80 C 140 80 152 45 162 45 C 172 45 180 10 190 10"
                            fill="none" stroke="var(--text-main)" stroke-width="2"/>
                        <text x="105" y="82" fill="var(--text-main)" font-family="inherit" font-size="9" text-anchor="middle">+cos (Incorrect)</text>
                    </svg>
                `
            },
            {
                text: "Negative cosine curve: starts at −v_max at t = 0.",
                svgDiagram: `
                    <svg width="200" height="90" viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg">
                        <line x1="15" y1="45" x2="190" y2="45" stroke="var(--text-main)" stroke-width="1.5"/>
                        <line x1="15" y1="10" x2="15" y2="85" stroke="var(--text-main)" stroke-width="1.5"/>
                        <text x="195" y="49" fill="var(--text-main)" font-family="inherit" font-size="10">t</text>
                        <text x="8" y="8" fill="var(--text-main)" font-family="inherit" font-size="10">v</text>
                        <!-- -cosine: starts at -Vmax, zero at T/4, +Vmax at T/2 -->
                        <path d="M 15 80 C 30 80 42 45 70 45 C 98 45 110 10 125 10 C 140 10 152 45 162 45 C 172 45 180 80 190 80"
                            fill="none" stroke="var(--text-main)" stroke-width="2"/>
                        <text x="105" y="10" fill="var(--text-main)" font-family="inherit" font-size="9" text-anchor="middle">−cos (Incorrect)</text>
                    </svg>
                `
            }
        ],

        correctIndex: 1,

        explanation: {
            correct: "Velocity is the derivative of position. Since x(t) = A·cos(ωt), then v(t) = −Aω·sin(ωt). At t = 0 the slope of x(t) is zero (flat peak), so v = 0. Just after t = 0, position decreases (slope is negative), making velocity negative. At t = T/4, the cosine curve crosses zero at its steepest downward slope, giving v = −v_max. This matches a negative sine curve.",
            distractors: [
                "Choice A (positive sine) is wrong because the position graph slopes downward immediately after t = 0, meaning velocity must go negative, not positive.",
                "Choice C (cosine) is wrong because velocity is not in phase with position; it is the derivative, shifted by 90°.",
                "Choice D (negative cosine) starts at −v_max at t = 0, but velocity is zero at t = 0 since the position graph has zero slope at its peak."
            ]
        }
    },

    {
        id: "AP001-KINMA-HF62D",
        unit: "Kinematics",
        topic: "Motion on an Inclined Plane",
        skill: "Mathematical Routines",
        sciencePractice: "2.B – Calculate an unknown quantity.",
        difficulty: "Medium",

        svgDiagram: `
            <svg width="260" height="170" viewBox="0 0 260 170" xmlns="http://www.w3.org/2000/svg">
                <!-- Inclined surface -->
                <polygon points="20,150 240,150 240,50" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                <!-- Ground -->
                <line x1="10" y1="150" x2="255" y2="150" stroke="var(--text-main)" stroke-width="2"/>
                <!-- Hatch marks below ground -->
                <line x1="20" y1="150" x2="10" y2="162" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="40" y1="150" x2="30" y2="162" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="60" y1="150" x2="50" y2="162" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="80" y1="150" x2="70" y2="162" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="100" y1="150" x2="90" y2="162" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="120" y1="150" x2="110" y2="162" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="140" y1="150" x2="130" y2="162" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="160" y1="150" x2="150" y2="162" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="180" y1="150" x2="170" y2="162" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="200" y1="150" x2="190" y2="162" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="220" y1="150" x2="210" y2="162" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="240" y1="150" x2="230" y2="162" stroke="var(--text-main)" stroke-width="1"/>

                <!-- Angle arc at base right (240,150) to measure 37° -->
                <path d="M 210 150 A 30 30 0 0 0 227 122" fill="none" stroke="var(--text-main)" stroke-width="1.5"/>
                <text x="200" y="140" fill="var(--text-main)" font-family="inherit" font-size="12">37°</text>

                <!-- Block on incline: centered ~halfway up the hypotenuse -->
                <!-- Incline slope: from (20,150) to (240,50), slope direction angle = arctan(100/220) -->
                <!-- Midpoint ~(130,100). Draw rotated rectangle. -->
                <!-- For simplicity, draw a parallelogram tilted to match slope -->
                <g transform="rotate(-24.4, 130, 100)">
                    <rect x="110" y="87" width="40" height="26" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/>
                </g>

                <!-- Mass label -->
                <text x="118" y="106" fill="var(--text-main)" font-family="inherit" font-size="11" text-anchor="middle">m=5 kg</text>

                <!-- Sliding direction arrow (down the slope) -->
                <line x1="110" y1="95" x2="78" y2="120" stroke="var(--text-main)" stroke-width="2"/>
                <path d="M 82 120 L 78 120 L 80 115" fill="none" stroke="var(--text-main)" stroke-width="2"/>

                <!-- μk label -->
                <text x="70" y="90" fill="var(--text-main)" font-family="inherit" font-size="11">μk = 0.25</text>

                <!-- θ = 37° reminder top -->
                <text x="130" y="20" fill="var(--text-main)" font-family="inherit" font-size="11" text-anchor="middle">θ = 37°, g = 10 m/s²</text>
                <text x="130" y="35" fill="var(--text-main)" font-family="inherit" font-size="10" text-anchor="middle">sin 37° ≈ 0.60  cos 37° ≈ 0.80</text>
            </svg>
        `,

        question: "A 5.0 kg block slides down an incline tilted at an angle of 37° relative to the horizontal. If the coefficient of kinetic friction between the block and the incline is 0.25, what is the magnitude of the acceleration of the block down the ramp? (Use g = 10 m/s², sin 37° ≈ 0.60, cos 37° ≈ 0.80)",

        choices: [
            { text: "2.0 m/s²", svgDiagram: null },
            { text: "4.0 m/s²", svgDiagram: null },
            { text: "6.0 m/s²", svgDiagram: null },
            { text: "8.0 m/s²", svgDiagram: null }
        ],

        correctIndex: 1,

        explanation: {
            correct: "Applying Newton's second law along the incline: a = g·sinθ − μk·g·cosθ = (10)(0.60) − (0.25)(10)(0.80) = 6.0 − 2.0 = 4.0 m/s². The mass cancels out entirely.",
            distractors: [
                "2.0 m/s² is only the friction deceleration term (μk·g·cosθ), ignoring the gravity component along the slope.",
                "6.0 m/s² is the gravity component along the slope (g·sinθ) alone, ignoring friction entirely.",
                "8.0 m/s² uses g·cosθ instead of g·sinθ for the gravity component, swapping the sin and cos."
            ]
        }
    },

    {
        id: "AP001-LINMO-SV04R",
        unit: "Linear Momentum",
        topic: "Experimental Design Using the Impulse-Momentum Theorem",
        skill: "Argumentation",
        sciencePractice: "3.B – Apply an appropriate physical model to make a claim.",
        difficulty: "Hard",

        svgDiagram: `
            <svg width="310" height="120" viewBox="0 0 310 120" xmlns="http://www.w3.org/2000/svg">
                <!-- Track -->
                <line x1="10" y1="80" x2="300" y2="80" stroke="var(--text-main)" stroke-width="2"/>
                <!-- Track supports -->
                <line x1="50" y1="80" x2="50" y2="95" stroke="var(--text-main)" stroke-width="2"/>
                <line x1="150" y1="80" x2="150" y2="95" stroke="var(--text-main)" stroke-width="2"/>
                <line x1="260" y1="80" x2="260" y2="95" stroke="var(--text-main)" stroke-width="2"/>
                <!-- Motion detector (left) -->
                <rect x="10" y="60" width="20" height="20" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/>
                <text x="20" y="56" fill="var(--text-main)" font-family="inherit" font-size="9" text-anchor="middle">Motion</text>
                <text x="20" y="46" fill="var(--text-main)" font-family="inherit" font-size="9" text-anchor="middle">Detector</text>
                <!-- Semicircle for sonar -->
                <path d="M 30 65 A 8 8 0 0 1 30 75" fill="none" stroke="var(--text-main)" stroke-width="1.5"/>
                <path d="M 33 62 A 13 13 0 0 1 33 78" fill="none" stroke="var(--text-main)" stroke-width="1"/>

                <!-- Cart A with force sensor -->
                <rect x="80" y="58" width="50" height="22" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/>
                <text x="105" y="73" fill="var(--text-main)" font-family="inherit" font-size="10" text-anchor="middle">Cart A (m)</text>
                <!-- Force sensor bump on front -->
                <rect x="130" y="64" width="10" height="10" fill="var(--text-main)" rx="2"/>
                <text x="145" y="62" fill="var(--text-main)" font-family="inherit" font-size="8">F sensor</text>
                <!-- Wheels A -->
                <circle cx="90" cy="80" r="4" fill="var(--text-main)"/>
                <circle cx="120" cy="80" r="4" fill="var(--text-main)"/>
                <!-- Velocity arrow A -->
                <line x1="130" y1="69" x2="160" y2="69" stroke="var(--text-main)" stroke-width="2"/>
                <path d="M 155 65 L 160 69 L 155 73" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                <text x="145" y="84" fill="var(--text-main)" font-family="inherit" font-size="10">→</text>

                <!-- Cart B (stationary) -->
                <rect x="190" y="58" width="50" height="22" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/>
                <text x="215" y="73" fill="var(--text-main)" font-family="inherit" font-size="10" text-anchor="middle">Cart B</text>
                <!-- Wheels B -->
                <circle cx="200" cy="80" r="4" fill="var(--text-main)"/>
                <circle cx="230" cy="80" r="4" fill="var(--text-main)"/>
                <!-- Stationary label -->
                <text x="215" y="56" fill="var(--text-main)" font-family="inherit" font-size="9" text-anchor="middle">(stationary)</text>

                <!-- Table surface label -->
                <text x="155" y="108" fill="var(--text-main)" font-family="inherit" font-size="10" text-anchor="middle">Level laboratory track</text>
            </svg>
        `,

        question: "Students are designing an experiment to verify the Impulse-Momentum Theorem (∫F dt = Δp) during a collision between two carts. Cart A has an electronic force sensor mounted on it, and a motion detector tracks its velocity. To completely verify that the impulse delivered equals the change in linear momentum of Cart A, which of the following describes the correct data analysis?",

        choices: [
            { text: "Calculate the area under the Force vs. Time graph during the collision, and compare it to Cart A's mass times its change in velocity (mΔv).", svgDiagram: null },
            { text: "Find the peak maximum force on the Force vs. Time graph, multiply it by the total collision duration, and set it equal to mv_f.", svgDiagram: null },
            { text: "Plot Force vs. Distance, find the slope of the linear fit, and check if it equals the kinetic energy change.", svgDiagram: null },
            { text: "Measure the total duration of the impact using the force sensor and multiply it by the initial momentum to confirm it matches the final force value.", svgDiagram: null }
        ],

        correctIndex: 0,

        explanation: {
            correct: "The Impulse-Momentum Theorem states that ∫F dt (the area under a Force vs. Time curve) equals the change in momentum Δp = mΔv. The area under the F-t graph gives total impulse; comparing that to m·(v_f − v_i) from the motion detector directly verifies the theorem.",
            distractors: [
                "Choice B incorrectly uses F_max · Δt, which assumes constant force. Real collision forces vary and peak near the middle, so this method would overestimate impulse.",
                "Choice C describes the work-energy theorem (∫F dx = ΔKE), not the impulse-momentum theorem.",
                "Choice D reverses the relationship and uses meaningless quantities — impulse is force integrated over time, not momentum multiplied by time."
            ]
        }
    },

    {
        id: "AP001-FLUID-EJ37A",
        unit: "Fluids",
        topic: "Pressure in Static Fluids",
        skill: "Quantitative/Qualitative Translation",
        sciencePractice: "2.C – Compare physical quantities.",
        difficulty: "Medium",

        svgDiagram: `
            <svg width="220" height="220" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
                <!-- Container: irregular shape, wider at bottom -->
                <!-- Outer outline using a path -->
                <path d="M 50 20 L 170 20 L 170 60 Q 200 80 200 130 L 200 200 L 20 200 L 20 130 Q 20 80 50 60 Z"
                    fill="none" stroke="var(--text-main)" stroke-width="2"/>

                <!-- Water fill (light blue-ish, respects theme via opacity) -->
                <path d="M 50 20 L 170 20 L 170 60 Q 200 80 200 130 L 200 200 L 20 200 L 20 130 Q 20 80 50 60 Z"
                    fill="var(--text-main)" fill-opacity="0.07"/>

                <!-- Surface line -->
                <line x1="50" y1="20" x2="170" y2="20" stroke="var(--text-main)" stroke-width="1" stroke-dasharray="5,3"/>
                <text x="185" y="24" fill="var(--text-main)" font-family="inherit" font-size="10">surface</text>

                <!-- Depth indicator: 5cm line from surface -->
                <line x1="30" y1="20" x2="30" y2="60" stroke="var(--text-main)" stroke-width="1" stroke-dasharray="3,2"/>
                <line x1="27" y1="60" x2="33" y2="60" stroke="var(--text-main)" stroke-width="1"/>
                <text x="10" y="44" fill="var(--text-main)" font-family="inherit" font-size="9" text-anchor="middle">5 cm</text>

                <!-- Depth indicator: 15 cm line -->
                <line x1="30" y1="20" x2="30" y2="118" stroke="var(--text-main)" stroke-width="1" stroke-dasharray="3,2"/>
                <line x1="27" y1="118" x2="33" y2="118" stroke="var(--text-main)" stroke-width="1"/>
                <text x="10" y="75" fill="var(--text-main)" font-family="inherit" font-size="9" text-anchor="middle">15 cm</text>

                <!-- Point X: 5cm below surface, near left wall -->
                <circle cx="68" cy="60" r="6" fill="var(--text-main)"/>
                <text x="78" y="57" fill="var(--text-main)" font-family="inherit" font-size="12" font-weight="bold">X</text>

                <!-- Point Y: 5cm below surface, near center -->
                <circle cx="130" cy="60" r="6" fill="var(--text-main)"/>
                <text x="140" y="57" fill="var(--text-main)" font-family="inherit" font-size="12" font-weight="bold">Y</text>

                <!-- Point Z: 15cm below surface, near bottom center -->
                <circle cx="110" cy="118" r="6" fill="var(--text-main)"/>
                <text x="120" y="115" fill="var(--text-main)" font-family="inherit" font-size="12" font-weight="bold">Z</text>

                <!-- Dashed horizontal lines indicating equal depth for X and Y -->
                <line x1="55" y1="60" x2="148" y2="60" stroke="var(--text-main)" stroke-width="1" stroke-dasharray="4,3"/>

                <!-- Open top label -->
                <text x="110" y="12" fill="var(--text-main)" font-family="inherit" font-size="10" text-anchor="middle">Open to atmosphere (P_atm)</text>
            </svg>
        `,

        question: "An open container holds an ideal static fluid as shown. Point X is 5 cm below the surface near the left wall, Point Y is 5 cm below the surface near the center, and Point Z is 15 cm below the surface near the bottom. Which of the following correctly ranks the absolute hydrostatic pressures P_X, P_Y, and P_Z?",

        choices: [
            { text: "P_X = P_Y < P_Z", svgDiagram: null },
            { text: "P_X < P_Y < P_Z", svgDiagram: null },
            { text: "P_Z < P_X = P_Y", svgDiagram: null },
            { text: "P_X = P_Y = P_Z", svgDiagram: null }
        ],

        correctIndex: 0,

        explanation: {
            correct: "Hydrostatic pressure depends only on vertical depth: P = P_atm + ρgh. Points X and Y are both at depth h = 5 cm, so P_X = P_Y regardless of horizontal position. Point Z is at h = 15 cm, giving a larger pressure. Therefore P_X = P_Y < P_Z.",
            distractors: [
                "Choice B incorrectly assumes horizontal position affects pressure — it does not in a static fluid.",
                "Choice C reverses the correct order; deeper points have higher pressure, not lower.",
                "Choice D would only be correct if all three points were at the same depth, which they are not."
            ]
        }
    },

    {
        id: "AP001-ROTEN-LQ28S",
        unit: "Energy and Momentum of Rotating Systems",
        topic: "Rotational Kinetic Energy",
        skill: "Mathematical Routines",
        sciencePractice: "2.B – Calculate an unknown quantity.",
        difficulty: "Medium",

        svgDiagram: `
            <svg width="260" height="190" viewBox="0 0 260 190" xmlns="http://www.w3.org/2000/svg">
                <!-- Inclined ramp -->
                <polygon points="20,170 240,170 240,60" fill="none" stroke="var(--text-main)" stroke-width="2"/>
                <!-- Ground hatch -->
                <line x1="10" y1="170" x2="255" y2="170" stroke="var(--text-main)" stroke-width="2"/>
                <line x1="20" y1="170" x2="10" y2="182" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="40" y1="170" x2="30" y2="182" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="60" y1="170" x2="50" y2="182" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="80" y1="170" x2="70" y2="182" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="100" y1="170" x2="90" y2="182" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="120" y1="170" x2="110" y2="182" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="140" y1="170" x2="130" y2="182" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="160" y1="170" x2="150" y2="182" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="180" y1="170" x2="170" y2="182" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="200" y1="170" x2="190" y2="182" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="220" y1="170" x2="210" y2="182" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="240" y1="170" x2="230" y2="182" stroke="var(--text-main)" stroke-width="1"/>

                <!-- Height H: vertical dashed line from top of ramp to ground -->
                <line x1="240" y1="60" x2="240" y2="170" stroke="var(--text-main)" stroke-width="1" stroke-dasharray="5,3"/>
                <line x1="236" y1="60" x2="244" y2="60" stroke="var(--text-main)" stroke-width="1"/>
                <line x1="236" y1="170" x2="244" y2="170" stroke="var(--text-main)" stroke-width="1"/>
                <text x="252" y="120" fill="var(--text-main)" font-family="inherit" font-size="12">H</text>

                <!-- Cylinder AT TOP of ramp: a circle (end-on view from side = ellipse or side view) -->
                <!-- Side view: cylinder is a rectangle + circles at ends. For simplicity, use a circle to suggest rolling. -->
                <!-- Position: at top of ramp: approximately (195, 90) on the slope -->
                <circle cx="195" cy="90" r="22" fill="var(--panel-bg)" stroke="var(--text-main)" stroke-width="2"/>
                <!-- Spokes to indicate rolling -->
                <line x1="195" y1="68" x2="195" y2="112" stroke="var(--text-main)" stroke-width="1.5"/>
                <line x1="173" y1="90" x2="217" y2="90" stroke="var(--text-main)" stroke-width="1.5"/>
                <line x1="179" y1="74" x2="211" y2="106" stroke="var(--text-main)" stroke-width="1.5"/>
                <line x1="211" y1="74" x2="179" y2="106" stroke="var(--text-main)" stroke-width="1.5"/>
                <!-- Labels on cylinder -->
                <text x="195" y="87" fill="var(--text-main)" font-family="inherit" font-size="10" text-anchor="middle">M</text>
                <text x="195" y="100" fill="var(--text-main)" font-family="inherit" font-size="10" text-anchor="middle">R</text>

                <!-- "At rest" label -->
                <text x="195" y="65" fill="var(--text-main)" font-family="inherit" font-size="10" text-anchor="middle">Released</text>
                <text x="195" y="55" fill="var(--text-main)" font-family="inherit" font-size="10" text-anchor="middle">from rest</text>

                <!-- Rolling direction arrow -->
                <line x1="173" y1="105" x2="100" y2="147" stroke="var(--text-main)" stroke-width="1.5"/>
                <path d="M 106 143 L 100 147 L 103 141" fill="none" stroke="var(--text-main)" stroke-width="1.5"/>

                <!-- I = (1/2)MR² label -->
                <text x="50" y="130" fill="var(--text-main)" font-family="inherit" font-size="11">I = ½MR²</text>
                <text x="50" y="145" fill="var(--text-main)" font-family="inherit" font-size="10">(solid cylinder)</text>
                <text x="50" y="158" fill="var(--text-main)" font-family="inherit" font-size="10">rolls without slipping</text>
            </svg>
        `,

        question: "A solid, uniform cylinder (I = (1/2)MR²) starts from rest and rolls without slipping down an incline from a vertical height H. What fraction of the cylinder's total kinetic energy at the bottom of the ramp is stored as rotational kinetic energy?",

        choices: [
            { text: "1/4", svgDiagram: null },
            { text: "1/3", svgDiagram: null },
            { text: "1/2", svgDiagram: null },
            { text: "2/3", svgDiagram: null }
        ],

        correctIndex: 1,

        explanation: {
            correct: "K_trans = (1/2)Mv², K_rot = (1/2)·(1/2)MR²·(v/R)² = (1/4)Mv². Total KE = (3/4)Mv². Fraction that is rotational: K_rot / K_total = (1/4)Mv² / (3/4)Mv² = 1/3.",
            distractors: [
                "1/4 is the ratio of rotational to translational energy alone (K_rot/K_trans), not the fraction of the total.",
                "1/2 would apply to a hollow cylindrical shell (I = MR²), where rotational and translational energies are equal.",
                "2/3 is the fraction of translational kinetic energy — it is 1 minus the correct answer."
            ]
        }
    }

];
