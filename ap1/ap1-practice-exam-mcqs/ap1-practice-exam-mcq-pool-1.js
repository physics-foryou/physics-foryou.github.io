const ap1PracticeExamMCQPoolOne = [

    {//1
        id: "AP001-WRENP-KX72M",
        unit: "Kinematics",
        topic: "Displacement, Velocity, and Acceleration",
        skill: "Solve for or approximate a missing value using given data and formulas.",
        difficulty: "Easy",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-1-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',

        problemSetup: "A toy car moves along a straight, horizontal track aligned with the x-axis. The graph shown tracks the car's position, x, as a function of time t, over a 6 second interval.",
        problemPrompt: "What is the car's velocity during this time interval?",

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
        skill: "Create algebraic formulas by combining known variables through a step-by-step mathematical proof.",
        difficulty: "Hard",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-2-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        problemSetup: "A block of mass $m$ is attached to a light, inextensible string wrapped securely around a solid, uniform cylindrical pulley of mass $M$, radius $R$, and rotational inertia $I = \\frac{1}{2}MR^2$. The pulley is mounted on a frictionless horizontal axle. The block is released from rest.",
        problemPrompt: "What is the linear acceleration a of the falling block?",

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
            correct: "At constant speed, net radial force = mv^2/R everywhere. At the bottom (Pt 1): F_N1 - mg = mv^2/R -> F_N1 = mv^2/R + mg. At the sides (Pts 2 and 4): gravity is tangential, so F_N2 = F_N4 = mv^2/R. At the top (Pt 3): F_N3 + mg = mv^2/R -> F_N3 = mv^2/R - mg. Therefore F_N1 > F_N2 = F_N4 > F_N3."
        }
    },

    {//3
        id: "AP001-KINMA-WT31B",
        unit: "Work, Energy, and Power",
        topic: "Conservation of Mechanical Energy",
        skill: "Contrast how values change across different situations, moments in time, or positions within a system.",
        difficulty: "Medium",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-3-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        problemSetup: "A roller coaster car of mass $m$ is released from rest at Point $A$, which is at a height $H$ above the ground, as shown in the diagram. The car travels along a frictionless track. Point $B$ is at a height of $\\frac{2}{3}H$ above the ground, and Point $C$ is at a height of $\\frac{1}{3}H$ above the ground. Let $K_B$ and $K_C$ represent the kinetic energy of the car at points $B$ and $C$, respectively.",
        problemPrompt: "Which of the following correctly compares $K_B$ and $K_C$?",

        choices: [
            { text: "$K_C = 2K_B$", jpegDiagram: null },
            { text: "$K_C = \\frac{1}{2}K_B$", jpegDiagram: null },
            { text: "$K_C = \\frac{3}{2}K_B$", jpegDiagram: null },
            { text: "$K_C = 4K_B$", jpegDiagram: null }
        ],

        correctIndex: 0,

        explanation: {
            correct: "By conservation of mechanical energy: (1/2)mv_0^2 = (1/2)mv_p^2 + mgh. Dividing by m and solving gives v_p = sqrt(v_0^2 - 2gh). The launch angle theta does not appear in the final expression because the formula uses total speed, not components."
        }
    },

    {//4
        id: "AP001-ROTDY-CL47V",
        unit: "Linear Momentum",
        topic: "Change in Momentum and Impulse",
        skill: "Use established physics laws, theories, or models to make an accurate scientific assertion.",
        difficulty: "Medium",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-4-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        problemSetup: "A block of mass $m$ moves to the right along a frictionless surface with a constant speed $v_0$. It collides head-on with a rigid vertical wall and bounces back elastically. The graph shows the magnitude of the force $F$ exerted on the block by the wall as a function of time $t$ during the collision window from $t = 0$ to $t = t_1$. The total area under the force-time graph is equal to $A$. Take the initial direction of the block's motion as the positive direction.",
        problemPrompt: "Which of the following correctly identifies the change in momentum of the block and the relationship between the area $A$, mass $m$, and initial speed $v_0$?",

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
            correct: "Setting net torque about the hinge = 0 for each scenario: Scenario A: T_A * L * sin(30 deg) = Mg(L/2) -> T_A*(1/2) = Mg/2 -> T_A = Mg. Scenario B: T_B * (L/2) * sin(60 deg) = Mg(L/2) -> T_B * (sqrt(3)/2) = Mg -> T_B = (2/sqrt(3))Mg. Ratio: T_A/T_B = Mg / [(2/sqrt(3))Mg] = sqrt(3)/2. Therefore T_A = (sqrt(3)/2)T_B."
        }
    },

    {//5
        id: "AP001-ROTDY-NG85Q",
        unit: "Fluids",
        topic: "Pressure",
        skill: "Solve for or approximate a missing value using given data and formulas.",
        difficulty: "Medium",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-5-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        problemSetup: "A vertical cylindrical storage tank with a radius of $2.0\\text{ m}$ and a total height of $10\\text{ m}$ is open to the atmosphere at the top. The tank is completely filled with an ideal fluid. The total weight of the fluid contained within the tank is $1.25 \\times 10^6\\text{ N}$.",
        problemPrompt: "What is the absolute pressure exerted at the inner bottom surface of the tank?",

        choices: [
            { text: "$1.0 \\times 10^5\\text{ Pa}$", jpegDiagram: null },
            { text: "$2.0 \\times 10^5\\text{ Pa}$", jpegDiagram: null },
            { text: "$4.0 \\times 10^5\\text{ Pa}$", jpegDiagram: null },
            { text: "$7.25 \\times 10^5\\text{ Pa}$", jpegDiagram: null }
        ],

        correctIndex: 1,

        explanation: {
            correct: "The central axle must exert an external force on the disk during collision to keep it from translating, so linear momentum is not conserved. However, this axle force acts at r = 0 from the pivot, producing zero torque (tau = rF*sin(theta) = 0). With no external torque about the axle, angular momentum about the axle is conserved."
        }
    },

    {//6
        id: "AP001-OSCIL-BM19Z",
        unit: "Torque and Rotational Dynamics + Energy and Momentum of Rotating Systems",
        topic: "Rotational Inertia and Rotational Kinetic Energy",
        skill: "Determine how a variable changes when another is modified based on their mathematical relationship.",
        difficulty: "Hard",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-6-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        problemSetup: "A thin-walled cylindrical hoop and a solid cylinder each have an identical mass $M$ and an outer radius $R$. Both objects are released from rest at the top of identical inclined planes of height $h$, as shown in the diagram, and roll down the inclines without slipping. At the bottom of the inclines, the ratio of the hoop's rotational kinetic energy to the solid cylinder's rotational kinetic energy is $X$, where $X = \\frac{K_{\\text{rot, hoop}}}{K_{\\text{rot, cyl}}}$.",
        problemPrompt: "The experiment is repeated on a different incline. Which of the following modifications would cause the new ratio $Y$ to be equal to $2X$?",

        choices: [
            {text: "Doubling the mass $M$ of both the cylinder and the hoop.", jpegDiagram: null},
            {text: "Doubling the height $h$ of both inclined planes.", jpegDiagram: null},
            {text: "Replacing the solid cylinder with a second identical thin-walled hoop.", jpegDiagram: null},
            {text: "No modification of mass, radius, or ramp height can change the value of $Y$.", jpegDiagram: null}
        ],

        correctIndex: 3,

        explanation: {
            correct: "Velocity is the derivative of position. Since x(t) = A*cos(omega t), then v(t) = -A*omega*sin(omega t). At t = 0 the slope of x(t) is zero (flat peak), so v = 0. Just after t = 0, position decreases (slope is negative), making velocity negative. At t = T/4, the cosine curve crosses zero at its steepest downward slope, giving v = -v_max. This matches a negative sine curve."
        }
    },

    {//7
        id: "AP001-KINMA-HF62D",
        unit: "Force and Translational Dynamics",
        topic: "Kinetic and Static Friction",
        skill: "Defend a scientific conclusion using laboratory data, graphs, diagrams, or fundamental laws of physics.",
        difficulty: "Medium",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-7-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        problemSetup: "A heavy wooden shipping crate of mass $m$ rests on a flat, rough platform. An electric pump slowly and continuously raises one end of the platform to form an incline of angle $\\theta$ with the horizontal, as shown in the diagram. An experimenter notes that the crate remains completely stationary until the platform reaches a critical angle $\\theta_c$, at which point the crate is on the verge of slipping.",
        problemPrompt: "Which of the following correctly represents the free-body diagram for the crate at the instant $\\theta = \\theta_c$?",

        choices: [
            { text: null, jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-choice-images/ap1-PE1-choice-1.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />' },
            { text: null, jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-choice-images/ap1-PE1-choice-2.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />' },
            { text: null, jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-choice-images/ap1-PE1-choice-3.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />' },
            { text: null, jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-choice-images/ap1-PE1-choice-4.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />' }
        ],

        correctIndex: 1,

        explanation: {
            correct: "Applying Newton's second law along the incline: a = g*sin(theta) - mu_k*g*cos(theta) = (10)(0.60) - (0.25)(10)(0.80) = 6.0 - 2.0 = 4.0 m/s^2. The mass cancels out entirely."
        }
    },

    {//8
        id: "AP001-LINMO-SV04R",
        unit: "Oscillations",
        topic: "Frequency and Period of SHM",
        skill: "Determine how a variable changes when another is modified based on their mathematical relationship.",
        difficulty: "Medium",

        jpegDiagram: null,


        problemSetup: "An astronaut on Earth sets up a simple pendulum of length $L$ that oscillates with a period $T_0$. The astronaut then travels to a distant planet and alters the setup, decreasing the length of the pendulum string to $\\frac{1}{2}L$. On this planet, the acceleration due to gravity is exactly $\\frac{1}{8}$ of the acceleration due to gravity on Earth.",
        problemPrompt: "What is the new period of oscillation for the pendulum on this planet in terms of $T_0$?",

        choices: [
            { text: "$\\frac{1}{4}T_0$", jpegDiagram: null },
            { text: " $\\frac{1}{2}T_0$", jpegDiagram: null },
            { text: "$2T_0$", jpegDiagram: null },
            { text: "$4T_0$", jpegDiagram: null }
        ],

        correctIndex: 2,

        explanation: {
            correct: "The period of a simple pendulum is given by $T = 2\\pi\\sqrt{\\frac{L}{g}}$. On the distant planet, the new period $T$ is $2\\pi\\sqrt{\\frac{L/2}{g/8}} = 2\\pi\\sqrt{\\frac{4L}{g}} = 2T_0$."
        }
    },

    {//9
        id: "AP001-FLUID-EJ37A",
        unit: "Work, Energy, and Power + Linear Momentum",
        topic: "Elastic and Inelastic Collisions and Kinetic Energy Changes",
        skill: "Contrast how values change across different situations, moments in time, or positions within a system.",
        difficulty: "Hard",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-9-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        problemSetup: "Two identical carts, each of mass $m$, are on a horizontal, low-friction track. Initially, Cart 1 moves to the right with speed $v_0$ and Cart 2 is at rest. The carts collide and stick together, moving with a common final speed $v_f$.",
        problemPrompt: "Which of the following correctly relates the total mechanical energy $E$ and total linear momentum $p$ of the two-cart system after the collision to the system's initial values before the collision?",

        choices: [
            {
                text: "<table style='width:100%; border-collapse:collapse; font-size:20px; font-family:inherit; line-height:1.55;'><thead><tr><th style='border:1px solid #999; padding:4px; font-weight:400;'>Mechanical Energy</th><th style='border:1px solid #999; padding:4px; font-weight:400;'>Linear Momentum</th></tr></thead><tbody><tr><td style='border:1px solid #999; padding:4px;'>$E_{\\text{after}} = E_{\\text{before}}$</td><td style='border:1px solid #999; padding:4px;'>$p_{\\text{after}} = p_{\\text{before}}$</td></tr></tbody></table>",
                jpegDiagram: null
            },
            {
                text: "<table style='width:100%; border-collapse:collapse; font-size:20px; font-family:inherit; line-height:1.55;'><thead><tr><th style='border:1px solid #999; padding:4px; font-weight:400;'>Mechanical Energy</th><th style='border:1px solid #999; padding:4px; font-weight:400;'>Linear Momentum</th></tr></thead><tbody><tr><td style='border:1px solid #999; padding:4px;'>$E_{\\text{after}} = \\frac{1}{2}E_{\\text{before}}$</td><td style='border:1px solid #999; padding:4px;'>$p_{\\text{after}} = p_{\\text{before}}$</td></tr></tbody></table>",
                jpegDiagram: null
            },
            {
                text: "<table style='width:100%; border-collapse:collapse; font-size:20px; font-family:inherit; line-height:1.55;'><thead><tr><th style='border:1px solid #999; padding:4px; font-weight:400;'>Mechanical Energy</th><th style='border:1px solid #999; padding:4px; font-weight:400;'>Linear Momentum</th></tr></thead><tbody><tr><td style='border:1px solid #999; padding:4px;'>$E_{\\text{after}} = \\frac{1}{4}E_{\\text{before}}$</td><td style='border:1px solid #999; padding:4px;'>$p_{\\text{after}} = \\frac{1}{2}p_{\\text{before}}$</td></tr></tbody></table>",
                jpegDiagram: null
            },
            {
                text: "<table style='width:100%; border-collapse:collapse; font-size:20px; font-family:inherit; line-height:1.55;'><thead><tr><th style='border:1px solid #999; padding:4px; font-weight:400;'>Mechanical Energy</th><th style='border:1px solid #999; padding:4px; font-weight:400;'>Linear Momentum</th></tr></thead><tbody><tr><td style='border:1px solid #999; padding:4px;'>$E_{\\text{after}} = \\frac{1}{2}E_{\\text{before}}$</td><td style='border:1px solid #999; padding:4px;'>$p_{\\text{after}} = \\frac{1}{2}p_{\\text{before}}$</td></tr></tbody></table>",
                jpegDiagram: null
            }
        ],

        correctIndex: 1,

        explanation: {
            correct: "Hydrostatic pressure depends only on vertical depth: P = P_atm + rho gh. Points X and Y are both at depth h = 5 cm, so P_X = P_Y regardless of horizontal position. Point Z is at h = 15 cm, giving a larger pressure. Therefore P_X = P_Y < P_Z."
        }
    },

    {//11
        id: "AP001-FLUID-LQ28S",
        unit: "Energy and Momentum of Rotating Systems",
        topic: "Rotational Kinetic Energy",
        skill: "Use established physics laws, theories, or models to make an accurate scientific assertion.",
        difficulty: "Medium",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-10-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        problemSetup: "A small projectile is launched horizontally to the right with an initial speed $v_0$ from the top of a high platform. The projectile experiences an air resistance force. The magnitude of this resistive force is governed by the equation $F_D = kv$, where $v$ is the speed of the projectile and $k$ is a non-zero positive constant.",
        problemPrompt: "Which of the following graphs best represents the horizontal component of the projectile's velocity, $v_x$, as a function of time $t$ from the moment it is launched until it reaches the ground far below?",

        choices: [
            { text: null, jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-choice-images/ap1-PE1-choice-5.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />' },
            { text: null, jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-choice-images/ap1-PE1-choice-6.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />' },
            { text: null, jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-choice-images/ap1-PE1-choice-7.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />' },
            { text: null, jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-choice-images/ap1-PE1-choice-8.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />' }
        ],

        correctIndex: 3,

        explanation: {
            correct: "K_trans = (1/2)Mv^2, K_rot = (1/2)*(1/2)MR^2*(v/R)^2 = (1/4)Mv^2. Total KE = (3/4)Mv^2. Fraction that is rotational: K_rot / K_total = (1/4)Mv^2 / (3/4)Mv^2 = 1/3."
        }
    },
    {//11
        id: "AP001-ROTEN-LQ28S",
        unit: "Fluids",
        topic: "Fluids and Newton's Laws",
        skill: "Solve for or approximate a missing value (complete with correct units) using given data and formulas.",
        difficulty: "Medium",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-11-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        problemSetup: "A solid rectangular block with mass $m = 4.5\\text{ kg}$ and density $\\rho_b = 3000\\text{ kg/m}^3$ is completely submerged in a cylinder filled with water with density $\\rho_w = 1000\\text{ kg/m}^3$. The block is suspended at rest from an overhead spring balance by a thin string of negligible mass and does not touch the walls or bottom of the cylinder.",
        problemPrompt: "What is the reading on the spring balance?",

        choices: [
            { text: "$15\\text{ N}$", jpegDiagram: null },
            { text: "$20\\text{ N}$", jpegDiagram: null },
            { text: "$25\\text{ N}$", jpegDiagram: null },
            { text: "$30\\text{ N}$", jpegDiagram: null }
        ],

        correctIndex: 3,

        explanation: {
            correct: "K_trans = (1/2)Mv^2, K_rot = (1/2)*(1/2)MR^2*(v/R)^2 = (1/4)Mv^2. Total KE = (3/4)Mv^2. Fraction that is rotational: K_rot / K_total = (1/4)Mv^2 / (3/4)Mv^2 = 1/3."
        }
    },
    {//12
        id: "AP001-ROTEN-LQ28S",
        unit: "Force and Translational Dynamics",
        topic: "Gravitational Force",
        skill: "Use established physics laws, theories, or models to make an accurate scientific assertion.",
        difficulty: "Easy",

        jpegDiagram: null,


        problemSetup: "Planet X has mass $M_0$ and radius $R_0$. Planet Y has a mass of $2M_0$ and a radius of $2R_0$. A research probe of mass $m$ rests on the surface of Planet X, where the gravitational force exerted on it by Planet X has a magnitude of $F_0$.",
        problemPrompt: "If the same probe is moved to the surface of Planet Y, what is the magnitude of the gravitational force exerted on the probe by Planet Y?",

        choices: [
            { text: "$\\frac{1}{2} F_0$", jpegDiagram: null },
            { text: "$F_0$", jpegDiagram: null },
            { text: "$2 F_0$", jpegDiagram: null },
            { text: "$4 F_0$", jpegDiagram: null }
        ],

        correctIndex: 0,

        explanation: {
            correct: "K_trans = (1/2)Mv^2, K_rot = (1/2)*(1/2)MR^2*(v/R)^2 = (1/4)Mv^2. Total KE = (3/4)Mv^2. Fraction that is rotational: K_rot / K_total = (1/4)Mv^2 / (3/4)Mv^2 = 1/3."
        }
    },
    {//13
        id: "AP001-ROTEN-LQ28S",
        unit: "Work, Energy, and Power",
        topic: "Work",
        skill: "Create algebraic formulas by combining known variables through a step-by-step mathematical proof.",
        difficulty: "Medium",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-13-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        problemSetup: "A block of mass $m$ is pulled along a rough, horizontal floor by a motor. The motor's cable maintains a constant tension force $T$ directed at an angle $\\theta$ above the horizontal. The coefficient of kinetic friction between the block and the floor is $\\mu_k$. The block moves a horizontal distance $d$ to the right.",
        problemPrompt: "Which of the following expressions correctly represents the work $W_f$ done by kinetic friction on the block?",

        choices: [
            { text: "$-\\mu_k mg d$", jpegDiagram: null },
            { text: "$-\\mu_k (mg + T \\sin\\theta) d$", jpegDiagram: null },
            { text: "$-\\mu_k (mg - T \\cos\\theta) d$", jpegDiagram: null },
            { text: "$-\\mu_k (mg - T \\sin\\theta) d$", jpegDiagram: null }
        ],

        correctIndex: 0,

        explanation: {
            correct: "K_trans = (1/2)Mv^2, K_rot = (1/2)*(1/2)MR^2*(v/R)^2 = (1/4)Mv^2. Total KE = (3/4)Mv^2. Fraction that is rotational: K_rot / K_total = (1/4)Mv^2 / (3/4)Mv^2 = 1/3."
        }
    },
    {//14
        id: "AP001-ROTEN-LQ28S",
        unit: "Energy and Momentum of Rotating Systems",
        topic: "Conservation of Angular Momentum",
        skill: "Use established physics laws, theories, or models to make an accurate scientific assertion.",
        difficulty: "Hard",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-14-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        problemSetup: "An athlete of mass $M$, modeled as a point mass, stands on a circular platform that rotates with negligible friction about a fixed vertical axis through its center. Initially, the athlete stands at a distance $\\frac{d}{2}$ from the central axis, and the athlete-platform system rotates with total angular momentum $L_0$ and total rotational kinetic energy $K_0$. The athlete then walks inward to a new position at a distance $\\frac{d}{4}$ from the axis, and the system rotates with total angular momentum $L_f$ and total rotational kinetic energy $K_f$. Assume the moment of inertia of the platform itself is negligible.",
        problemPrompt: "Which of the following correctly compares the final angular momentum $L_f$ and final rotational kinetic energy $K_f$ of the system to their initial values?",

        choices: [
            { text: "<table style='width:100%; border-collapse:collapse; font-size:20px; font-family:inherit; line-height:1.55;'><thead><tr><th style='border:1px solid #999; padding:4px; font-weight:400;'>Final Angular Momentum $L_f$</th><th style='border:1px solid #999; padding:4px; font-weight:400;'>Final Rotational Kinetic Energy $K_f$</th></tr></thead><tbody><tr><td style='border:1px solid #999; padding:4px;'>$L_f = L_0$</td><td style='border:1px solid #999; padding:4px;'>$K_f = 2K_0$</td></tr></tbody></table>", jpegDiagram: null },
            { text: "<table style='width:100%; border-collapse:collapse; font-size:20px; font-family:inherit; line-height:1.55;'><thead><tr><th style='border:1px solid #999; padding:4px; font-weight:400;'>Final Angular Momentum $L_f$</th><th style='border:1px solid #999; padding:4px; font-weight:400;'>Final Rotational Kinetic Energy $K_f$</th></tr></thead><tbody><tr><td style='border:1px solid #999; padding:4px;'>$L_f = \\frac{1}{2}L_0$</td><td style='border:1px solid #999; padding:4px;'>$K_f = K_0$</td></tr></tbody></table>", jpegDiagram: null },
            { text: "<table style='width:100%; border-collapse:collapse; font-size:20px; font-family:inherit; line-height:1.55;'><thead><tr><th style='border:1px solid #999; padding:4px; font-weight:400;'>Final Angular Momentum $L_f$</th><th style='border:1px solid #999; padding:4px; font-weight:400;'>Final Rotational Kinetic Energy $K_f$</th></tr></thead><tbody><tr><td style='border:1px solid #999; padding:4px;'>$L_f = L_0$</td><td style='border:1px solid #999; padding:4px;'>$K_f = 4K_0$</td></tr></tbody></table>", jpegDiagram: null },
            { text: "<table style='width:100%; border-collapse:collapse; font-size:20px; font-family:inherit; line-height:1.55;'><thead><tr><th style='border:1px solid #999; padding:4px; font-weight:400;'>Final Angular Momentum $L_f$</th><th style='border:1px solid #999; padding:4px; font-weight:400;'>Final Rotational Kinetic Energy $K_f$</th></tr></thead><tbody><tr><td style='border:1px solid #999; padding:4px;'>$L_f = 4L_0$</td><td style='border:1px solid #999; padding:4px;'>$K_f = 4K_0$</td></tr></tbody></table>", jpegDiagram: null }
        ],

        correctIndex: 2,

        explanation: {
            correct: "K_trans = (1/2)Mv^2, K_rot = (1/2)*(1/2)MR^2*(v/R)^2 = (1/4)Mv^2. Total KE = (3/4)Mv^2. Fraction that is rotational: K_rot / K_total = (1/4)Mv^2 / (3/4)Mv^2 = 1/3."
        }
    },
    {//15
        id: "AP001-ROTEN-LQ28S",
        unit: "Kinematics",
        topic: "Vectors and Motion in Two Dimensions",
        skill: "Solve for or approximate a missing value (complete with correct units) using given data and formulas.",
        difficulty: "Medium",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-15-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        problemSetup: "A small marble with mass $m$ rolls horizontally off the edge of a flat desk of height $h = 1.25\\text{ m}$ with a constant speed $v_0 = 3.0\\text{ m/s}$. The marble lands on the floor below.",
        problemPrompt: "What is the horizontal distance traveled by the marble from the edge of the desk to the point where it lands?",

        choices: [
            { text: "$0.75\\text{ m}$", jpegDiagram: null },
            { text: "$1.25\\text{ m}$", jpegDiagram: null },
            { text: "$1.50\\text{ m}$", jpegDiagram: null },
            { text: "$3.00\\text{ m}$", jpegDiagram: null }
        ],

        correctIndex: 2,

        explanation: {
            correct: "K_trans = (1/2)Mv^2, K_rot = (1/2)*(1/2)MR^2*(v/R)^2 = (1/4)Mv^2. Total KE = (3/4)Mv^2. Fraction that is rotational: K_rot / K_total = (1/4)Mv^2 / (3/4)Mv^2 = 1/3."
        }
    }

];

