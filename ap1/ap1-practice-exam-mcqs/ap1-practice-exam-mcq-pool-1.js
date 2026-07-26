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
            correct: "Apply Newton's second law to the block: $mg - T = ma$. For the pulley, the torque from the string is $TR = I\\alpha = \\frac{1}{2}MR^2\\left(\\frac{a}{R}\\right)$, so $T = \\frac{1}{2}Ma$. Substituting into the block equation gives $mg - \\frac{1}{2}Ma = ma$, so $mg = \\left(m + \\frac{1}{2}M\\right)a$ and $a = \\frac{2mg}{2m+M}$."
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
            correct: "The car starts from rest, so each point's kinetic energy equals the drop in gravitational potential energy from height $H$. At point $B$, $K_B = mg\\left(H-\\frac{2}{3}H\\right)=\\frac{1}{3}mgH$. At point $C$, $K_C = mg\\left(H-\\frac{1}{3}H\\right)=\\frac{2}{3}mgH$. Therefore $K_C = 2K_B$."
        }
    },

    {//4
        id: "AP001-LINMO-CL47V",
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
            correct: "Impulse equals the change in momentum, and the signed impulse is the area under the force-time graph with direction included. The block starts with momentum $+mv_0$ and rebounds elastically with momentum $-mv_0$, so $\\Delta p = -mv_0 - (+mv_0) = -2mv_0$. Because the graph shows the magnitude of the force, its area is $A = 2mv_0$, so the matching choice is $\\Delta p = -A$ with $A = 2mv_0$."
        }
    },

    {//5
        id: "AP001-FLUID-NG85Q",
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
            correct: "The fluid pressure at the bottom is $P = P_{\\text{atm}} + \\rho gh$. Since the tank is cylindrical, $\\rho gh$ can be found from the fluid's weight divided by the base area: $\\rho gh = W/A$. The base area is $A = \\pi r^2 = \\pi(2.0)^2 \\approx 12.6\\text{ m}^2$, so $W/A \\approx 1.25\\times10^6 / 12.6 \\approx 1.0\\times10^5\\text{ Pa}$. Adding atmospheric pressure gives $P \\approx 2.0\\times10^5\\text{ Pa}$."
        }
    },

    {//6
        id: "AP001-ROTEN-BM19Z",
        unit: "Torque and Rotational Dynamics + Energy and Momentum of Rotating Systems",
        topic: "Rotational Inertia and Rotational Kinetic Energy",
        skill: "Determine how a variable changes when another is modified based on their mathematical relationship.",
        difficulty: "Hard",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-6-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        problemSetup: "A thin-walled hoop and a solid cylinder each have mass $M$ and radius $R$. Their moments of inertia are $I_{\\text{hoop}} = MR^2$ and $I_{\\text{cyl}} = \\frac{1}{2}MR^2$. They are released from rest from the same height $h$ and roll without slipping, as shown. Let $X = \\frac{K_{\\text{rot, hoop}}}{K_{\\text{rot, cyl}}}$ at the bottom.",
        problemPrompt: "If the setup is repeated, which change would make the new ratio $Y$ equal to $2X$?",

        choices: [
            {text: "Doubling the mass $M$ of both the cylinder and the hoop.", jpegDiagram: null},
            {text: "Doubling the height $h$ of both inclined planes.", jpegDiagram: null},
            {text: "Replacing the solid cylinder with a second identical thin-walled hoop.", jpegDiagram: null},
            {text: "No modification of mass, radius, or ramp height can change the value of $Y$.", jpegDiagram: null}
        ],

        correctIndex: 3,

        explanation: {
            correct: "For rolling without slipping, $mgh = K_{\\text{trans}} + K_{\\text{rot}}$ and $K_{\\text{rot}} = \\tfrac{1}{2}I\\omega^2$ with $v=\\omega R$. Using $I_{\\text{hoop}}=MR^2$ gives $K_{\\text{rot, hoop}}=\\tfrac{1}{2}mgh$. Using $I_{\\text{cyl}}=\\tfrac{1}{2}MR^2$ gives $K_{\\text{rot, cyl}}=\\tfrac{1}{3}mgh$. So $X=\\frac{1/2}{1/3}=\\tfrac{3}{2}$. Changing $M$ or $h$ scales both energies equally, so the ratio does not double. Replacing the cylinder with another hoop makes the ratio $1$, not $2X$."
        }
    },

    {//7
        id: "AP001-FRICT-HF62D",
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
            correct: "At the instant the crate is about to slip, it is still at rest, so the friction force is static friction, not kinetic friction. Because the crate would tend to slide down the incline, the static friction force must point up the incline. The correct free-body diagram therefore has weight straight down, the normal force perpendicular to the surface, and static friction up the ramp."
        }
    },

    {//8
        id: "AP001-OSCIL-SV04R",
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
            correct: "Linear momentum is conserved, so $mv_0 = (2m)v_f$, giving $v_f = \\frac{v_0}{2}$. The initial mechanical energy is $E_{\\text{before}} = \\frac{1}{2}mv_0^2$. After the perfectly inelastic collision, $E_{\\text{after}} = \\frac{1}{2}(2m)\\left(\\frac{v_0}{2}\\right)^2 = \\frac{1}{4}mv_0^2 = \\frac{1}{2}E_{\\text{before}}$. Momentum stays the same, so $p_{\\text{after}} = p_{\\text{before}}$."
        }
    },

    {//10
        id: "AP001-KINEM-LQ28S",
        unit: "Kinematics",
        topic: "Vectors and Motion in Two Dimensions",
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
            correct: "The drag force always opposes the projectile's motion, so its horizontal component makes $v_x$ decrease continuously from its initial positive value. Because the drag magnitude is proportional to speed, the rate of decrease becomes smaller as the projectile slows, so the graph should curve downward toward zero without crossing the axis. That matches the fourth graph."
        }
    },
    {//11
        id: "AP001-FLUID-RD30T",
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
            correct: "The block's volume is $V = m/\\rho_b = 4.5/3000 = 1.5\\times10^{-3}\\text{ m}^3$. The buoyant force is then $F_B = \\rho_w gV = (1000)(10)(1.5\\times10^{-3}) = 15\\text{ N}$. Since the block is in equilibrium, the spring balance reads the tension $T = mg - F_B = 45 - 15 = 30\\text{ N}$."
        }
    },
    {//12
        id: "AP001-GRAV-YN41P",
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
            correct: "Use $F = \\frac{GMm}{R^2}$. On Planet X, $F_0 = \\frac{GM_0m}{R_0^2}$. On Planet Y, $F_Y = \\frac{G(2M_0)m}{(2R_0)^2} = \\frac{2GM_0m}{4R_0^2} = \\frac{1}{2}F_0$."
        }
    },
    {//13
        id: "AP001-WORK-QM52H",
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

        correctIndex: 3,

        explanation: {
            correct: "The kinetic friction force has magnitude $f_k = \\mu_k N$. Because the tension has an upward component, the normal force is reduced to $N = mg - T\\sin\\theta$. Therefore the work done by friction over distance $d$ is $W_f = -f_k d = -\\mu_k(mg - T\\sin\\theta)d$."
        }
    },
    {//14
        id: "AP001-ANGMO-JK63L",
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
            correct: "With negligible external torque, angular momentum is conserved, so $L_f = L_0$. The athlete's moment of inertia changes from $I_i = M\\left(\\frac{d}{2}\\right)^2 = \\frac{Md^2}{4}$ to $I_f = M\\left(\\frac{d}{4}\\right)^2 = \\frac{Md^2}{16}$, which is four times smaller. Since $K = \\frac{L^2}{2I}$ at fixed $L$, reducing $I$ by a factor of 4 makes the rotational kinetic energy increase by a factor of 4, so $K_f = 4K_0$."
        }
    },
    {//15
        id: "AP001-KINEM-ZP74C",
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
            correct: "The marble's vertical motion determines the time in the air: $h = \\frac{1}{2}gt^2$, so $1.25 = \\frac{1}{2}(10)t^2$ and $t = 0.50\\text{ s}$. Its horizontal speed stays at $3.0\\text{ m/s}$, so the horizontal distance is $x = v_0 t = (3.0)(0.50) = 1.50\\text{ m}$."
        }
    },
    {//16
        id: "AP001-SHM-DV85M",
        unit: "Force and Translational Dynamics + Oscillations",
        topic: "Spring Forces + SHM Representations",
        skill: "Create algebraic formulas by combining known variables through a step-by-step mathematical proof.",
        difficulty: "Medium",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-16-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        problemSetup: "A small block of mass $m$ is suspended vertically from two parallel springs attached to an overhead support. Spring 1 has a spring constant $k_1$, and Spring 2 has a spring constant $k_2$. When the block is in static equilibrium, it hangs at a vertical position $y = 0$. The block is then pulled downward to an initial position $y = -y_0$ and released from rest, undergoing simple harmonic motion along the vertical axis.",
        problemPrompt: "In terms of the given quantities, what is the magnitude of the block's acceleration when it passes through the position $y = +\\frac{1}{2}y_0$?",

        choices: [
            { text: "$\\frac{(k_1 + k_2) y_0}{2m}$", jpegDiagram: null },
            { text: "$\\frac{(k_1 + k_2) y_0}{m}$", jpegDiagram: null },
            { text: "$\\frac{(k_1 - k_2) y_0}{2m}$", jpegDiagram: null },
            { text: "$g - \\frac{(k_1 + k_2) y_0}{2m}$", jpegDiagram: null }
        ],

        correctIndex: 0,

        explanation: {
            correct: "Measured from equilibrium, the two parallel springs act like a single spring with constant $k_1 + k_2$. In SHM, the restoring force is $F = -(k_1+k_2)y$, so the acceleration magnitude is $a = \\frac{(k_1+k_2)|y|}{m}$. At $y = +\\frac{1}{2}y_0$, this becomes $a = \\frac{(k_1+k_2)y_0}{2m}$."
        }
    },
    {//17
        id: "AP001-TORQUE-BX96N",
        unit: "Torque and Rotational Dynamics",
        topic: "Torque",
        skill: "Use established physics laws, theories, or models to make an accurate scientific assertion.",
        difficulty: "Medium",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-17-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        problemSetup: "A top-down view shows a heavy door of width $L$ that is free to rotate about a vertical axis through its hinged left edge. Four individual forces, $F_A$, $F_B$, $F_C$, and $F_D$, are applied independently to the door. All four forces have the exact same magnitude $F$.",
        problemPrompt: "Which of the applied forces produces the greatest magnitude of torque about the hinge axis?",

        choices: [
            { text: "$F_A$", jpegDiagram: null },
            { text: "$F_B$", jpegDiagram: null },
            { text: "$F_C$", jpegDiagram: null },
            { text: "$F_D$", jpegDiagram: null }
        ],

        correctIndex: 3,

        explanation: {
            correct: "Torque magnitude is $\\tau = rF\\sin\\phi$, where $\\phi$ is the angle between the force and the door. For $F_A$, $\\tau_A = LF\\sin 30^\\circ = 0.5LF$. For $F_B$, $\\tau_B = \\frac{3L}{4}F$. For $F_C$, $\\tau_C = \\frac{L}{2}F$. For $F_D$, $\\tau_D = LF\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}LF$, which is the largest."
        }
    },
    {//18
        id: "AP001-FLUID-CH17R",
        unit: "Fluids",
        topic: "Fluids and Conservation Laws",
        skill: "Create algebraic formulas by combining known variables through a step-by-step mathematical proof.",
        difficulty: "Hard",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-18-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        problemSetup: "An ideal fluid of density $\\rho$ flows smoothly through a horizontal, tapered pipe. At Region 1, the pipe has a circular cross-sectional radius $R_1$, and the fluid has speed $v_1$ and pressure $P_1$. At Region 2, the pipe smoothly narrows to a circular cross-sectional radius $R_2 = \\frac{1}{2}R_1$, where the fluid pressure is $P_2$.",
        problemPrompt: "What is the pressure difference between Region 1 and Region 2?",

        choices: [
            { text: "$\\frac{15}{2} \\rho v_1^2$", jpegDiagram: null },
            { text: "$\\frac{3}{2} \\rho v_1^2$", jpegDiagram: null },
            { text: "$\\frac{1}{2} \\rho v_1^2$", jpegDiagram: null },
            { text: "$\\frac{15}{8} \\rho v_1^2$", jpegDiagram: null }
        ],

        correctIndex: 0,

        explanation: {
            correct: "Continuity gives $A_1v_1=A_2v_2$. Since $R_2=\\frac{1}{2}R_1$, the area at Region 2 is one-fourth as large, so $v_2=4v_1$. For a horizontal pipe, Bernoulli's equation gives $P_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\frac{1}{2}\\rho v_2^2$. Substituting $v_2=4v_1$ gives $P_1-P_2 = \\frac{1}{2}\\rho(16v_1^2-v_1^2)=\\frac{15}{2}\\rho v_1^2$."
        }
    },
    {//19
        id: "AP001-LINMO-GT28S",
        unit: "Linear Momentum",
        topic: "Conservation of Linear Momentum",
        skill: "Solve for or approximate a missing value (complete with correct units) using given data and formulas.",
        difficulty: "Medium",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-19-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        problemSetup: "Glider A ($m_A = 2.0\\text{ kg}$) moves right at $6.0\\text{ m/s}$ on an air track toward Glider B of unknown mass $m_B$, which moves left at $3.0\\text{ m/s}$. A motion sensor records the position $x_{\\text{cm}}$ of the system's center of mass over time $t$, as shown in the graph.",
        problemPrompt: "What is the mass $m_B$ of Glider B?",

        choices: [
            { text: "$0.50\\text{ kg}$", jpegDiagram: null },
            { text: "$1.0\\text{ kg}$", jpegDiagram: null },
            { text: "$1.5\\text{ kg}$", jpegDiagram: null },
            { text: "$2.0\\text{ kg}$", jpegDiagram: null }
        ],

        correctIndex: 0,

        explanation: {
            correct: "The slope of the center-of-mass graph gives the constant center-of-mass speed: $v_{\\text{cm}} = \\frac{3.0\\text{ m}}{2.0\\text{ s}} = 1.5\\text{ m/s}$. For two gliders, $v_{\\text{cm}} = \\frac{m_Av_A + m_Bv_B}{m_A + m_B} = \\frac{(2.0)(6.0) + m_B(-3.0)}{2.0 + m_B}$. Setting this equal to 1.5 and solving gives $1.5(2+m_B)=12-3m_B$, so $m_B=0.50\\text{ kg}$."
        }
    },
    {//20
        id: "AP001-POWER-HN39W",
        unit: "Work, Energy, and Power",
        topic: "Power",
        skill: "Solve for or approximate a missing value (complete with correct units) using given data and formulas.",
        difficulty: "Medium",

        jpegDiagram: null,


        problemSetup: "A motor exerts a constant horizontal force $F$ to accelerate a block of mass $m$ from rest along a horizontal surface. During the time interval from $t = 0$ to $t = T$, the average power delivered to the block by the motor is $P_0$.",
        problemPrompt: "What is the average power delivered to the block by the motor during the time interval from $t = T$ to $t = 3T$?",

        choices: [
            { text: "$P_0$", jpegDiagram: null },
            { text: "$3 P_0$", jpegDiagram: null },
            { text: "$4 P_0$", jpegDiagram: null },
            { text: "$8 P_0$", jpegDiagram: null }
        ],

        correctIndex: 2,

        explanation: {
            correct: "The constant force gives a constant acceleration $a=F/m$. From $t=0$ to $t=T$, the block reaches speed $aT$, so the work done is $\\Delta K = \\frac{1}{2}m(aT)^2 = \\frac{1}{2}ma^2T^2$. Dividing by the time interval gives $P_0 = \\frac{1}{2}ma^2T$. From $t=T$ to $t=3T$, the speed changes from $aT$ to $3aT$, so the work done is $\\frac{1}{2}m[(3aT)^2-(aT)^2] = 4ma^2T^2$. Over a time interval of $2T$, the average power is $\\frac{4ma^2T^2}{2T}=2ma^2T = 4P_0$."
        }
    }

];

