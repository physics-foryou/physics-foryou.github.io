const ap1PracticeExamMCQPoolOne = [

    {//1
        id: "AP001-WRENP-KX72M",
        unit: "Kinematics",
        topic: "Displacement, Velocity, and Acceleration",
        skill: "Mathematical Routines",
        sciencePractice: "Solve for or approximate a missing value (complete with correct units) using given data and formulas.",
        difficulty: "Easy",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-1-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',

        question: "A toy car moves along a straight, horizontal track aligned with the x-axis. The graph shown tracks the car's position, x, as a function of time t, over a 6 second interval. What is the car's velocity during this time interval?",

        choices: [
            { text: "$-2.0\\text{ m/s}$", jpegDiagram: null },
            { text: "$-0.5\\text{ m/s}$", jpegDiagram: null },
            { text: "$0.5\\text{ m/s}$", jpegDiagram: null },
            { text: "$2.0\\text{ m/s}$", jpegDiagram: null }
        ],

        correctIndex: 1,

        explanation: {
            correct: "The car's velocity is the slope of the position vs. time graph. From the graph, the car moves from x = 2 m to x = 1 m over 2 s, so v = (1 - 2) / 2 = -0.5 m/s."
        }
    },

    {//2
        id: "AP001-DYNAM-PR58N",
        unit: "Force and Translational Dynamics + Torque and Rotational Dynamics",
        topic: "Newton's Second Law and Torque",
        skill: "Argumentation",
        sciencePractice: "Create algebraic formulas by combining known variables through a step-by-step mathematical proof.",
        difficulty: "Hard",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-2-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        question: "A block of mass $m$ is attached to a light, inextensible string wrapped securely around a solid, uniform cylindrical pulley of mass $M$, radius $R$, and rotational inertia $I = \\frac{1}{2}MR^2$. The pulley is mounted on a frictionless horizontal axle. The block is released from rest. What is the linear acceleration a of the falling block?",

        choices: [
            {
                text: "$\\frac{2mg}{2m + M}$",
                jpegDiagram: null
            },
            {
                text: "$\\frac{mg}{m + M}$",
                jpegDiagram: null
            },
            {
                text: "$\\frac{2mg}{M - 2m}$",
                jpegDiagram: null
            },
            {
                text: "$\\frac{mg}{m - \\frac{1}{2}M}$",
                jpegDiagram: null
            }
        ],

        correctIndex: 1,

        explanation: {
            correct: "At constant speed, net radial force = mvÂ²/R everywhere. At the bottom (Pt 1): F_N1 âˆ’ mg = mvÂ²/R â†’ F_N1 = mvÂ²/R + mg. At the sides (Pts 2 & 4): gravity is tangential, so F_N2 = F_N4 = mvÂ²/R. At the top (Pt 3): F_N3 + mg = mvÂ²/R â†’ F_N3 = mvÂ²/R âˆ’ mg. Therefore F_N1 > F_N2 = F_N4 > F_N3."
        }
    },

    {//3
        id: "AP001-KINMA-WT31B",
        unit: "Work, Energy, and Power",
        topic: "Conservation of Mechanical Energy",
        skill: "Mathematical Routines",
        sciencePractice: "Contrast how values change across different situations, moments in time, or positions within a system.",
        difficulty: "Medium",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-3-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        question: "A roller coaster car of mass $m$ is released from rest at Point $A$, which is at a height $H$ above the ground, as shown in the diagram. The car travels along a frictionless track. Point $B$ is at a height of $\\frac{2}{3}H$ above the ground, and Point $C$ is at a height of $\\frac{1}{3}H$ above the ground. Let $K_B$ and $K_C$ represent the kinetic energy of the car at points $B$ and $C$, respectively. Which of the following correctly compares $K_B$ and $K_C$?",

        choices: [
            { text: "$K_C = 2K_B$", jpegDiagram: null },
            { text: "$K_C = \\frac{1}{2}K_B$", jpegDiagram: null },
            { text: "$K_C = \\frac{3}{2}K_B$", jpegDiagram: null },
            { text: "$K_C = 4K_B$", jpegDiagram: null }
        ],

        correctIndex: 0,

        explanation: {
            correct: "By conservation of mechanical energy: (1/2)mvâ‚€Â² = (1/2)mv_pÂ² + mgh. Dividing by m and solving: v_p = âˆš(vâ‚€Â² âˆ’ 2gh). The launch angle Î¸ does not appear in the final expression because the formula uses total speed, not components."
        }
    },

    {//4
        id: "AP001-ROTDY-CL47V",
        unit: "Linear Momentum",
        topic: "Change in Momentum and Impulse",
        skill: "Quantitative/Qualitative Translation",
        sciencePractice: "Use established physics laws, theories, or models to make an accurate scientific assertion.",
        difficulty: "Medium",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-4-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        question: "A block of mass $m$ moves to the right along a frictionless surface with a constant speed $v_0$. It collides head-on with a rigid vertical wall and bounces back elastically. The graph shows the magnitude of the force $F$ exerted on the block by the wall as a function of time $t$ during the collision window from $t = 0$ to $t = t_1$.The total area under the force-time graph is equal to $A$. Taking the initial direction of the block's motion as the positive direction, which of the following correctly identifies the change in momentum of the block and the relationship between the area $A$, mass $m$, and initial speed $v_0$?",

        choices: [
            {
                text: "<table style='width:100%; border-collapse:collapse; font-size:20px; font-family:inherit; line-height:1.55;'><thead><tr><th style='border:1px solid #999; padding:4px; font-weight:400;'>Change in Momentum</th><th style='border:1px solid #999; padding:4px; font-weight:400;'>Relationship for A</th></tr></thead><tbody><tr><td style='border:1px solid #999; padding:4px;'>$+A$</td><td style='border:1px solid #999; padding:4px;'>$A = mv_0$</td></tr></tbody></table>",
                jpegDiagram: null
            },
            {
                text: "<table style='width:100%; border-collapse:collapse; font-size:20px; font-family:inherit; line-height:1.55;'><thead><tr><th style='border:1px solid #999; padding:4px; font-weight:400;'>Change in Momentum</th><th style='border:1px solid #999; padding:4px; font-weight:400;'>Relationship for A</th></tr></thead><tbody><tr><td style='border:1px solid #999; padding:4px;'>$-A$</td><td style='border:1px solid #999; padding:4px;'>$A = mv_0$</td></tr></tbody></table>",
                jpegDiagram: null
            },
            {
                text: "<table style='width:100%; border-collapse:collapse; font-size:20px; font-family:inherit; line-height:1.55;'><thead><tr><th style='border:1px solid #999; padding:4px; font-weight:400;'>Change in Momentum</th><th style='border:1px solid #999; padding:4px; font-weight:400;'>Relationship for A</th></tr></thead><tbody><tr><td style='border:1px solid #999; padding:4px;'>$-A$</td><td style='border:1px solid #999; padding:4px;'>$A = 2mv_0$</td></tr></tbody></table>",
                jpegDiagram: null
            },
            {
                text: "<table style='width:100%; border-collapse:collapse; font-size:20px; font-family:inherit; line-height:1.55;'><thead><tr><th style='border:1px solid #999; padding:4px; font-weight:400;'>Change in Momentum</th><th style='border:1px solid #999; padding:4px; font-weight:400;'>Relationship for A</th></tr></thead><tbody><tr><td style='border:1px solid #999; padding:4px;'>$-2A$</td><td style='border:1px solid #999; padding:4px;'>$A = mv_0$</td></tr></tbody></table>",
                jpegDiagram: null
            }
        ],

        correctIndex: 2,

        explanation: {
            correct: "Setting net torque about the hinge = 0 for each scenario: Scenario A: T_A Â· L Â· sin(30Â°) = Mg(L/2) â†’ T_AÂ·(1/2) = Mg/2 â†’ T_A = Mg. Scenario B: T_B Â· (L/2) Â· sin(60Â°) = Mg(L/2) â†’ T_B Â· (âˆš3/2) = Mg â†’ T_B = (2/âˆš3)Mg. Ratio: T_A/T_B = Mg / [(2/âˆš3)Mg] = âˆš3/2. Therefore T_A = (âˆš3/2)T_B."
        }
    },

    {//5
        id: "AP001-ROTDY-NG85Q",
        unit: "Fluids",
        topic: "Pressure",
        skill: "Argumentation",
        sciencePractice: "Solve for or approximate a missing value using given data and formulas.",
        difficulty: "Medium",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-5-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        question: "A vertical cylindrical storage tank with a radius of $2.0\\text{ m}$ and a total height of $10\\text{ m}$ is open to the atmosphere at the top. The tank is completely filled with an ideal fluid. The total weight of the fluid contained within the tank is $1.25 \\times 10^6\\text{ N}$. What is the absolute pressure exerted at the inner bottom surface of the tank?",

        choices: [
            { text: "$1.0 \\times 10^5\\text{ Pa}$", jpegDiagram: null },
            { text: "$2.0 \\times 10^5\\text{ Pa}$", jpegDiagram: null },
            { text: "$4.0 \\times 10^5\\text{ Pa}$", jpegDiagram: null },
            { text: "$7.25 \\times 10^5\\text{ Pa}$", jpegDiagram: null }
        ],

        correctIndex: 1,

        explanation: {
            correct: "The central axle must exert an external force on the disk during collision to keep it from translating, so linear momentum is NOT conserved. However, this axle force acts at r = 0 from the pivot, producing zero torque (Ï„ = rFÂ·sinÎ¸ = 0). With no external torques about the axle, angular momentum about the axle IS conserved."
        }
    },

    {//6
        id: "AP001-OSCIL-BM19Z",
        unit: "Oscillations",
        topic: "Kinematics of Simple Harmonic Motion",
        skill: "Quantitative/Qualitative Translation",
        sciencePractice: "2.D â€“ Predict new values using functional dependence between variables.",
        difficulty: "Medium",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-6-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        question: "A thin-walled cylindrical hoop and a solid cylinder each have an identical mass $M$ and an outer radius $R$. Both objects are released from rest at the top of identical inclined planes of height $h$, as shown in the diagram, and roll down the inclines without slipping. At the bottom of the inclines, the ratio of the hoop's rotational kinetic energy to the solid cylinder's rotational kinetic energy is $X$, where $X = \\frac{K_{\\text{rot, hoop}}}{K_{\\text{rot, cyl}}}$. The experiment is repeated on a different incline. Which of the following modifications would cause the new ratio $Y$ to be equal to $2X$?",

        choices: [
            {text: "Doubling the mass $M$ of both the cylinder and the hoop.", jpegDiagram: null},
            {text: "Doubling the height $h$ of both inclined planes.", jpegDiagram: null},
            {text: "Replacing the solid cylinder with a second identical thin-walled hoop.", jpegDiagram: null},
            {text: "No modification of mass, radius, or ramp height can change the value of $Y$.", jpegDiagram: null}
        ],

        correctIndex: 3,

        explanation: {
            correct: "Velocity is the derivative of position. Since x(t) = AÂ·cos(Ï‰t), then v(t) = âˆ’AÏ‰Â·sin(Ï‰t). At t = 0 the slope of x(t) is zero (flat peak), so v = 0. Just after t = 0, position decreases (slope is negative), making velocity negative. At t = T/4, the cosine curve crosses zero at its steepest downward slope, giving v = âˆ’v_max. This matches a negative sine curve."
        }
    },

    {//7
        id: "AP001-KINMA-HF62D",
        unit: "Kinematics",
        topic: "Motion on an Inclined Plane",
        skill: "Mathematical Routines",
        sciencePractice: "2.B â€“ Calculate an unknown quantity.",
        difficulty: "Medium",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-7-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        question: "A heavy wooden shipping crate of mass $m$ rests on a flat, rough platform. An electric pump slowly and continuously raises one end of the platform to form an incline of angle $\\theta$ with the horizontal, as shown in the diagram. An experimenter notes that the crate remains completely stationary until the platform reaches a critical angle $\\theta_c$, at which point the crate is on the verge of slipping. Which of the following correctly represents the free-body diagram for the crate at the instant $\\theta = \\theta_c$?",

        choices: [
            { text: null, jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-choice-images/ap1-PE1-choice-1.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />' },
            { text: null, jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-choice-images/ap1-PE1-choice-2.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />' },
            { text: null, jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-choice-images/ap1-PE1-choice-3.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />' },
            { text: null, jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-choice-images/ap1-PE1-choice-4.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />' }
        ],

        correctIndex: 1,

        explanation: {
            correct: "Applying Newton's second law along the incline: a = gÂ·sinÎ¸ âˆ’ Î¼kÂ·gÂ·cosÎ¸ = (10)(0.60) âˆ’ (0.25)(10)(0.80) = 6.0 âˆ’ 2.0 = 4.0 m/sÂ². The mass cancels out entirely."
        }
    },

    {
        id: "AP001-LINMO-SV04R",
        unit: "Linear Momentum",
        topic: "Experimental Design Using the Impulse-Momentum Theorem",
        skill: "Argumentation",
        sciencePractice: "3.B â€“ Apply an appropriate physical model to make a claim.",
        difficulty: "Hard",

        jpegDiagram: null,


        question: "Students are designing an experiment to verify the Impulse-Momentum Theorem (âˆ«F dt = Î”p) during a collision between two carts. Cart A has an electronic force sensor mounted on it, and a motion detector tracks its velocity. To completely verify that the impulse delivered equals the change in linear momentum of Cart A, which of the following describes the correct data analysis?",

        choices: [
            { text: "Calculate the area under the Force vs. Time graph during the collision, and compare it to Cart A's mass times its change in velocity (mÎ”v).", jpegDiagram: null },
            { text: "Find the peak maximum force on the Force vs. Time graph, multiply it by the total collision duration, and set it equal to mv_f.", jpegDiagram: null },
            { text: "Plot Force vs. Distance, find the slope of the linear fit, and check if it equals the kinetic energy change.", jpegDiagram: null },
            { text: "Measure the total duration of the impact using the force sensor and multiply it by the initial momentum to confirm it matches the final force value.", jpegDiagram: null }
        ],

        correctIndex: 0,

        explanation: {
            correct: "The Impulse-Momentum Theorem states that âˆ«F dt (the area under a Force vs. Time curve) equals the change in momentum Î”p = mÎ”v. The area under the F-t graph gives total impulse; comparing that to mÂ·(v_f âˆ’ v_i) from the motion detector directly verifies the theorem."
        }
    },

    {
        id: "AP001-FLUID-EJ37A",
        unit: "Fluids",
        topic: "Pressure in Static Fluids",
        skill: "Quantitative/Qualitative Translation",
        sciencePractice: "2.C â€“ Compare physical quantities.",
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
            correct: "Hydrostatic pressure depends only on vertical depth: P = P_atm + Ïgh. Points X and Y are both at depth h = 5 cm, so P_X = P_Y regardless of horizontal position. Point Z is at h = 15 cm, giving a larger pressure. Therefore P_X = P_Y < P_Z."
        }
    },

    {
        id: "AP001-ROTEN-LQ28S",
        unit: "Energy and Momentum of Rotating Systems",
        topic: "Rotational Kinetic Energy",
        skill: "Mathematical Routines",
        sciencePractice: "2.B â€“ Calculate an unknown quantity.",
        difficulty: "Medium",

        jpegDiagram: null,


        question: "A solid, uniform cylinder (I = (1/2)MRÂ²) starts from rest and rolls without slipping down an incline from a vertical height H. What fraction of the cylinder's total kinetic energy at the bottom of the ramp is stored as rotational kinetic energy?",

        choices: [
            { text: "1/4", jpegDiagram: null },
            { text: "1/3", jpegDiagram: null },
            { text: "1/2", jpegDiagram: null },
            { text: "2/3", jpegDiagram: null }
        ],

        correctIndex: 1,

        explanation: {
            correct: "K_trans = (1/2)MvÂ², K_rot = (1/2)Â·(1/2)MRÂ²Â·(v/R)Â² = (1/4)MvÂ². Total KE = (3/4)MvÂ². Fraction that is rotational: K_rot / K_total = (1/4)MvÂ² / (3/4)MvÂ² = 1/3."
        }
    }

];

