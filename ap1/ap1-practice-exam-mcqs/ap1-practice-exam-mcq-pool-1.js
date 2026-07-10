const ap1PracticeExamMCQPoolOne = [

    {
        id: "AP001-WRENP-KX72M",
        unit: "Work, Energy, and Power",
        topic: "Conservation of Mechanical Energy (Spring Systems)",
        skill: "Mathematical Routines",
        sciencePractice: "2.B – Calculate or estimate an unknown quantity with units from known quantities by selecting and following a logical computational pathway.",
        difficulty: "Medium",

        jpegDiagram: null,

        question: "A 2.0 kg block is held against a horizontal spring of spring constant 400 N/m, compressing the spring by 0.20 m. The block is then released from rest on a frictionless horizontal surface. What is the maximum speed achieved by the block after release?",

        choices: [
            { text: "2.0 m/s", jpegDiagram: null },
            { text: "2.8 m/s", jpegDiagram: null },
            { text: "4.0 m/s", jpegDiagram: null },
            { text: "8.0 m/s", jpegDiagram: null }
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

        jpegDiagram: null,


        question: "A small block is launched along the inside of a rough, vertical circular track. Due to friction, the block moves at a constant speed v as it successfully traverses the complete circular path. Which of the following options correctly represents the relative magnitudes of the normal force F_N exerted by the track on the block at the four labeled positions?",

        choices: [
            {
                text: "Normal force is identical in length (equal) at all four positions.",
                jpegDiagram: null
            },
            {
                text: "Normal force at Point 1 (bottom) is longest; Points 2 and 4 (sides) are equal and medium; Point 3 (top) is shortest.",
                jpegDiagram: null
            },
            {
                text: "Normal force at Point 3 (top) is longest; Points 2 and 4 are equal; Point 1 (bottom) is shortest.",
                jpegDiagram: null
            },
            {
                text: "Normal force at Point 2 is longer than Point 4 due to the direction of motion.",
                jpegDiagram: null
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

        jpegDiagram: null,


        question: "A projectile of mass m is launched from the ground with an initial speed v₀ at an angle θ above the horizontal. Air resistance is negligible. Using principles of conservation of energy, derive an expression for the speed v_p of the projectile when it passes through Point P at a known vertical height h above the ground.",

        choices: [
            { text: "v_p = v₀cosθ − √(2gh)", jpegDiagram: null },
            { text: "v_p = √(v₀² − 2gh)", jpegDiagram: null },
            { text: "v_p = √((v₀sinθ)² − 2gh)", jpegDiagram: null },
            { text: "v_p = √(v₀²cos²θ − 2gh)", jpegDiagram: null }
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

        jpegDiagram: null,


        question: "In both scenarios described above, a uniform beam of length L and mass M is held in perfect horizontal static equilibrium by a cable. Let T_A be the tension in Scenario A (cable at the right end, 30° from beam) and T_B be the tension in Scenario B (cable at the midpoint, 60° from beam). Which of the following correctly describes the relationship between T_A and T_B?",

        choices: [
            { text: "T_A = (√3/2) T_B", jpegDiagram: null },
            { text: "T_A = T_B", jpegDiagram: null },
            { text: "T_A = √3 · T_B", jpegDiagram: null },
            { text: "T_A = (1/2) T_B", jpegDiagram: null }
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

        jpegDiagram: null,


        question: "A sticky projectile of mass m is moving horizontally with speed v₀ when it strikes and sticks to the edge of an initially stationary uniform disk of radius R and mass M (I_disk = (1/2)MR²). Which of the following statements is true regarding the linear momentum and angular momentum of the system during the collision?",

        choices: [
            { text: "Both linear momentum and angular momentum are conserved because there are no external forces acting on the disk-projectile system.", jpegDiagram: null },
            { text: "Neither linear momentum nor angular momentum are conserved because the axle exerts a force and a torque during the collision.", jpegDiagram: null },
            { text: "Linear momentum is conserved because the collision is completely inelastic, but angular momentum is not conserved.", jpegDiagram: null },
            { text: "Angular momentum about the central axle is conserved because the force exerted by the axle acts at zero radius, producing no external torque. Linear momentum is not conserved.", jpegDiagram: null }
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

        jpegDiagram: null,


        question: "An object attached to an ideal spring undergoes simple harmonic motion. Its position as a function of time is shown above as x(t) = A·cos(ωt), beginning at maximum positive displacement +A at t = 0. Which of the following velocity vs. time graphs correctly corresponds to this motion?",

        choices: [
            {
                text: "Positive sine curve: starts at v = 0 at t = 0, rises to +v_max at t = T/4, returns to zero at t = T/2.",
                jpegDiagram: null
            },
            {
                text: "Negative sine curve: starts at v = 0 at t = 0, drops to −v_max at t = T/4, passes through zero at T/2, rises to +v_max at t = 3T/4.",
                jpegDiagram: null
            },
            {
                text: "Cosine curve identical in shape to the position graph (same phase), scaled up in amplitude.",
                jpegDiagram: null
            },
            {
                text: "Negative cosine curve: starts at −v_max at t = 0.",
                jpegDiagram: null
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

        jpegDiagram: null,


        question: "A 5.0 kg block slides down an incline tilted at an angle of 37° relative to the horizontal. If the coefficient of kinetic friction between the block and the incline is 0.25, what is the magnitude of the acceleration of the block down the ramp? (Use g = 10 m/s², sin 37° ≈ 0.60, cos 37° ≈ 0.80)",

        choices: [
            { text: "2.0 m/s²", jpegDiagram: null },
            { text: "4.0 m/s²", jpegDiagram: null },
            { text: "6.0 m/s²", jpegDiagram: null },
            { text: "8.0 m/s²", jpegDiagram: null }
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

        jpegDiagram: null,


        question: "Students are designing an experiment to verify the Impulse-Momentum Theorem (∫F dt = Δp) during a collision between two carts. Cart A has an electronic force sensor mounted on it, and a motion detector tracks its velocity. To completely verify that the impulse delivered equals the change in linear momentum of Cart A, which of the following describes the correct data analysis?",

        choices: [
            { text: "Calculate the area under the Force vs. Time graph during the collision, and compare it to Cart A's mass times its change in velocity (mΔv).", jpegDiagram: null },
            { text: "Find the peak maximum force on the Force vs. Time graph, multiply it by the total collision duration, and set it equal to mv_f.", jpegDiagram: null },
            { text: "Plot Force vs. Distance, find the slope of the linear fit, and check if it equals the kinetic energy change.", jpegDiagram: null },
            { text: "Measure the total duration of the impact using the force sensor and multiply it by the initial momentum to confirm it matches the final force value.", jpegDiagram: null }
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

        jpegDiagram: null,


        question: "An open container holds an ideal static fluid as shown. Point X is 5 cm below the surface near the left wall, Point Y is 5 cm below the surface near the center, and Point Z is 15 cm below the surface near the bottom. Which of the following correctly ranks the absolute hydrostatic pressures P_X, P_Y, and P_Z?",

        choices: [
            { text: "P_X = P_Y < P_Z", jpegDiagram: null },
            { text: "P_X < P_Y < P_Z", jpegDiagram: null },
            { text: "P_Z < P_X = P_Y", jpegDiagram: null },
            { text: "P_X = P_Y = P_Z", jpegDiagram: null }
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

        jpegDiagram: null,


        question: "A solid, uniform cylinder (I = (1/2)MR²) starts from rest and rolls without slipping down an incline from a vertical height H. What fraction of the cylinder's total kinetic energy at the bottom of the ramp is stored as rotational kinetic energy?",

        choices: [
            { text: "1/4", jpegDiagram: null },
            { text: "1/3", jpegDiagram: null },
            { text: "1/2", jpegDiagram: null },
            { text: "2/3", jpegDiagram: null }
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
