const ap1PracticeExamMCQPoolOne = [

    {//1
        id: "AP001-WRENP-KX72M",
        unit: "Kinematics",
        topic: "Displacement, Velocity, and Acceleration",
        skill: "Solve for or approximate a missing value using given data and formulas.",
        difficulty: "Easy",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-1-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',

        problemSetup: "A toy car moves along the x-axis. The graph shows its position $x$ as a function of time $t$.",
        problemPrompt: "What is the car's velocity over the interval shown?",

        choices: [
            { text: "$-2.0\\text{ m/s}$", jpegDiagram: null },
            { text: "$-0.5\\text{ m/s}$", jpegDiagram: null },
            { text: "$0.5\\text{ m/s}$", jpegDiagram: null },
            { text: "$2.0\\text{ m/s}$", jpegDiagram: null }
        ],

        correctIndex: 1,

        explanation: {
            correct: "We're trying to find the car's velocity $v$.\n\nOn a position-time graph, velocity is the slope, so\n$v=\\frac{\\Delta x}{\\Delta t}=\\frac{x-x_0}{t-t_0}$.\n\nFrom the graph, $x$ changes from $2\\text{ m}$ to $1\\text{ m}$ in $2\\text{ s}$, so\n$v=\\frac{1-2}{2}=-0.5\\text{ m/s}$.\n\nTherefore, the velocity is $-0.5\\text{ m/s}$."
        }
    },

    {//2
        id: "AP001-DYNAM-PR58N",
        unit: "Force and Translational Dynamics + Torque and Rotational Dynamics",
        topic: "Newton's Second Law and Torque",
        skill: "Create algebraic formulas by combining known variables through a step-by-step mathematical proof.",
        difficulty: "Hard",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-2-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        problemSetup: "A block of mass $m$ hangs from a string wrapped around a solid cylindrical pulley of mass $M$ and radius $R$, with rotational inertia $I=\\frac{1}{2}MR^2$. The block is released from rest.",
        problemPrompt: "What is the block's linear acceleration $a$?",

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
            correct: "We're trying to find the block's acceleration $a$.\n\nWe start with Newton's second law for the block because the block's motion is translational and this directly links forces to $a$:\n$\\Sigma F=ma\\Rightarrow mg-T=ma$.\n\nThis equation still has two unknowns, $T$ and $a$, so we need a second equation from the pulley.\nFor rotation, Newton's second law is the torque form:\n$\\Sigma\\tau=I\\alpha$.\nHere the string provides torque $TR$, so\n$TR=I\\alpha$.\nUsing $I=\\frac{1}{2}MR^2$ and $\\alpha=\\frac{a}{R}$,\n$TR=\\frac{1}{2}MR^2\\left(\\frac{a}{R}\\right)$, therefore $T=\\frac{1}{2}Ma$.\n\nSubstitute into the block equation:\n$mg-\\frac{1}{2}Ma=ma$.\nTherefore,\n$mg=\\left(m+\\frac{1}{2}M\\right)a$, so $a=\\frac{2mg}{2m+M}$."
        }
    },

    {//3
        id: "AP001-KINMA-WT31B",
        unit: "Work, Energy, and Power",
        topic: "Conservation of Mechanical Energy",
        skill: "Contrast how values change across different situations, moments in time, or positions within a system.",
        difficulty: "Medium",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-3-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        problemSetup: "A roller coaster car of mass $m$ is released from rest at point $A$ at height $H$. Point $B$ is at height $\\frac{2}{3}H$, and point $C$ is at height $\\frac{1}{3}H$. Let $K_B$ and $K_C$ be the car's kinetic energies at $B$ and $C$.",
        problemPrompt: "How do $K_B$ and $K_C$ compare?",

        choices: [
            { text: "$K_C = 2K_B$", jpegDiagram: null },
            { text: "$K_C = \\frac{1}{2}K_B$", jpegDiagram: null },
            { text: "$K_C = \\frac{3}{2}K_B$", jpegDiagram: null },
            { text: "$K_C = 4K_B$", jpegDiagram: null }
        ],

        correctIndex: 0,

        explanation: {
            correct: "We're trying to compare $K_B$ and $K_C$.\n\nUse conservation of mechanical energy:\n$K_i+U_i=K_f+U_f$.\nThe car starts from rest, so $K_i=0$. Therefore at any lower point,\n$K_f=U_i-U_f=mg(h_i-h_f)=mg\\Delta h$.\n\nSo this is consistent with $K=\\frac{1}{2}mv^2$, but we can find $K$ directly from the height drop.\n\nAt point $B$, the drop is $H-\\frac{2}{3}H=\\frac{1}{3}H$, so\n$K_B=\\frac{1}{3}mgH$.\n\nAt point $C$, the drop is $H-\\frac{1}{3}H=\\frac{2}{3}H$, so\n$K_C=\\frac{2}{3}mgH$.\n\nTherefore, $K_C=2K_B$."
        }
    },

    {//4
        id: "AP001-LINMO-CL47V",
        unit: "Linear Momentum",
        topic: "Change in Momentum and Impulse",
        skill: "Use established physics laws, theories, or models to make an accurate scientific assertion.",
        difficulty: "Medium",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-4-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        problemSetup: "A block of mass $m$ moves right with speed $v_0$, collides elastically with a wall, and rebounds. The graph shows the magnitude of the force on the block during the collision, and the area under the graph is $A$. Take Right as Positive.",
        problemPrompt: "Which choice correctly gives the block's momentum change and the relationship between $A$, $m$, and $v_0$?",

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
            correct: "We're trying to find the signed momentum change $\\Delta p$ and relate it to area $A$.\n\nUse the impulse-momentum theorem:\n$J=\\Delta p=\\int F\\,dt$.\nThis means area under an $F$-$t$ graph gives impulse.\n\nFor sign, use momentum directly:\n$\\Delta p=p_f-p_i$.\nTaking right as positive, $p_i=+mv_0$ and after the elastic rebound $p_f=-mv_0$, so\n$\\Delta p=-mv_0-(+mv_0)=-2mv_0$.\n\nThe graph shows force magnitude, so\n$A=|\\Delta p|=2mv_0$.\n\nTherefore, $\\Delta p=-A$ and $A=2mv_0$."
        }
    },

    {//5
        id: "AP001-FLUID-NG85Q",
        unit: "Fluids",
        topic: "Pressure",
        skill: "Solve for or approximate a missing value using given data and formulas.",
        difficulty: "Medium",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-5-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        problemSetup: "A vertical cylindrical tank has radius $2.0\\text{ m}$ and height $10\\text{ m}$. It is open at the top and filled with fluid whose total weight is $1.25\\times10^6\\text{ N}$.",
        problemPrompt: "What is the absolute pressure at the bottom of the tank?",

        choices: [
            { text: "$1.0 \\times 10^5\\text{ Pa}$", jpegDiagram: null },
            { text: "$2.0 \\times 10^5\\text{ Pa}$", jpegDiagram: null },
            { text: "$4.0 \\times 10^5\\text{ Pa}$", jpegDiagram: null },
            { text: "$7.25 \\times 10^5\\text{ Pa}$", jpegDiagram: null }
        ],

        correctIndex: 1,

        explanation: {
            correct: "We're trying to find the absolute pressure at the bottom, $P$.\n\nFor a fluid open to air, use hydrostatic pressure:\n$P=P_{\\text{atm}}+\\rho gh$.\n\nSo we need $\\rho gh$. Since fluid weight is $W=\\rho gV$ and $V=Ah$,\n$W=\\rho gAh$, therefore $\\rho gh=\\frac{W}{A}$.\n\nCompute area:\n$A=\\pi r^2=\\pi(2.0)^2\\approx12.6\\text{ m}^2$.\nThen\n$\\frac{W}{A}\\approx\\frac{1.25\\times10^6}{12.6}\\approx1.0\\times10^5\\text{ Pa}$.\n\nTherefore,\n$P\\approx1.0\\times10^5+1.0\\times10^5=2.0\\times10^5\\text{ Pa}$."
        }
    },

    {//6
        id: "AP001-ROTEN-BM19Z",
        unit: "Torque and Rotational Dynamics + Energy and Momentum of Rotating Systems",
        topic: "Rotational Inertia and Rotational Kinetic Energy",
        skill: "Determine how a variable changes when another is modified based on their mathematical relationship.",
        difficulty: "Hard",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-6-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        problemSetup: "A thin hoop and a solid cylinder each have mass $M$ and radius $R$, with $I_{\\text{hoop}}=MR^2$ and $I_{\\text{cyl}}=\\frac{1}{2}MR^2$. Both are released from rest from the same height $h$. Define $X=\\frac{K_{\\text{rot, hoop}}}{K_{\\text{rot, cyl}}}$ at the bottom.",
        problemPrompt: "Which change would make the new ratio $Y$ equal to $2X$?",

        choices: [
            {text: "Doubling the mass $M$ of both the cylinder and the hoop.", jpegDiagram: null},
            {text: "Doubling the height $h$ of both inclined planes.", jpegDiagram: null},
            {text: "Replacing the solid cylinder with a second identical thin-walled hoop.", jpegDiagram: null},
            {text: "No modification of mass, radius, or ramp height can change the value of $Y$.", jpegDiagram: null}
        ],

        correctIndex: 3,

        explanation: {
            correct: "We're trying to decide whether any change can make $Y=2X$.\n\nFirst find\n$X=\\frac{K_{\\text{rot, hoop}}}{K_{\\text{rot, cyl}}}$.\nFor rolling from height $h$, mechanical energy conservation gives\n$mgh=K_{\\text{trans}}+K_{\\text{rot}}$, with $K_{\\text{rot}}=\\frac{1}{2}I\\omega^2$ and $v=\\omega R$.\nUsing the given moments of inertia gives\n$K_{\\text{rot, hoop}}=\\frac{1}{2}mgh$ and $K_{\\text{rot, cyl}}=\\frac{1}{3}mgh$.\nTherefore,\n$X=\\frac{1/2}{1/3}=\\frac{3}{2}$.\n\nDoubling $M$ or $h$ scales both rotational energies equally, so the ratio does not change.\nReplacing the cylinder with another hoop makes the ratio $1$, not $2X$.\n\nTherefore, no listed modification can make $Y=2X$."
        }
    },

    {//7
        id: "AP001-FRICT-HF62D",
        unit: "Force and Translational Dynamics",
        topic: "Kinetic and Static Friction",
        skill: "Defend a scientific conclusion using laboratory data, graphs, diagrams, or fundamental laws of physics.",
        difficulty: "Medium",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-7-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        problemSetup: "A heavy shipping crate of mass $m$ rests on a rough platform. An electric pump slowly raises one end of the platform, increasing the incline angle to $\\theta$. The crate remains at rest until a critical angle $\\theta_c$, where it is about to slip.",
        problemPrompt: "Which free-body diagram is correct at $\\theta=\\theta_c$?",

        choices: [
            { text: null, jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-choice-images/ap1-PE1-choice-1.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />' },
            { text: null, jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-choice-images/ap1-PE1-choice-2.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />' },
            { text: null, jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-choice-images/ap1-PE1-choice-3.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />' },
            { text: null, jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-choice-images/ap1-PE1-choice-4.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />' }
        ],

        correctIndex: 2,

        explanation: {
            correct: "We're trying to choose the correct free-body diagram at $\\theta_c$.\n\nAt the threshold of motion, the crate is still at rest, so friction is static, not kinetic.\nThe crate would start to move down the incline, therefore static friction must point up the incline.\n\nAt this instant, forces along the ramp balance, so $f_s=mg\\sin\\theta_c$.\nThe normal force is $N=mg\\cos\\theta_c$. Since the crate is not near a vertical ramp at this threshold (so $\\theta_c<45^\\circ$ in this setup), $\\cos\\theta_c>\\sin\\theta_c$, which means $N>f_s$.\n\nTherefore, the correct free-body diagram must show weight straight down, normal force perpendicular to the surface, and static friction up the ramp, with the normal-force arrow longer than the friction arrow."
        }
    },

    {//8
        id: "AP001-OSCIL-SV04R",
        unit: "Oscillations",
        topic: "Frequency and Period of SHM",
        skill: "Determine how a variable changes when another is modified based on their mathematical relationship.",
        difficulty: "Medium",

        jpegDiagram: null,


        problemSetup: "A pendulum of length $L$ has period $T_0$ on Earth. On another planet, the pendulum length is changed to $\\frac{1}{2}L$, and the local gravitational acceleration is $\\frac{1}{8}$ of Earth's.",
        problemPrompt: "What is the new period in terms of $T_0$?",

        choices: [
            { text: "$\\frac{1}{4}T_0$", jpegDiagram: null },
            { text: " $\\frac{1}{2}T_0$", jpegDiagram: null },
            { text: "$2T_0$", jpegDiagram: null },
            { text: "$4T_0$", jpegDiagram: null }
        ],

        correctIndex: 2,

        explanation: {
            correct: "We're trying to find the new period in terms of $T_0$.\n\nStart with the pendulum equation:\n$T=2\\pi\\sqrt{\\frac{L}{g}}$.\n\nLet the planet values be $L_{\\text{planet}}=\\frac{1}{2}L$ and $g_{\\text{planet}}=\\frac{1}{8}g$.\nThen\n$T_{\\text{planet}}=2\\pi\\sqrt{\\frac{L_{\\text{planet}}}{g_{\\text{planet}}}}=2\\pi\\sqrt{\\frac{L/2}{g/8}}=2\\pi\\sqrt{\\frac{4L}{g}}=2T_0$.\n\nTherefore, the new period is $2T_0$."
        }
    },

    {//9
        id: "AP001-FLUID-EJ37A",
        unit: "Work, Energy, and Power + Linear Momentum",
        topic: "Elastic and Inelastic Collisions and Kinetic Energy Changes",
        skill: "Contrast how values change across different situations, moments in time, or positions within a system.",
        difficulty: "Hard",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-9-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        problemSetup: "Two carts of equal mass $m$ are on a horizontal track. Cart 1 moves right with speed $v_0$, and Cart 2 is at rest. They collide and stick, moving together at speed $v_f$.",
        problemPrompt: "How do the system's total mechanical energy $E$ and linear momentum $p$ after the collision compare with their initial values?",

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
            correct: "We're trying to compare $E_{\\text{after}}$ and $p_{\\text{after}}$ with their initial values.\n\nBecause the carts stick together, this is a perfectly inelastic collision.\nIn this type of collision, momentum is conserved but mechanical energy is not conserved.\n\nUse momentum conservation to find final speed:\n$mv_0=(2m)v_f$, so $v_f=\\frac{v_0}{2}$.\n\nNow compute energies using $K=\\frac{1}{2}mv^2$:\n$E_{\\text{before}}=\\frac{1}{2}mv_0^2$,\n$E_{\\text{after}}=\\frac{1}{2}(2m)\\left(\\frac{v_0}{2}\\right)^2=\\frac{1}{4}mv_0^2=\\frac{1}{2}E_{\\text{before}}$.\n\nTherefore, $p_{\\text{after}}=p_{\\text{before}}$ and $E_{\\text{after}}=\\frac{1}{2}E_{\\text{before}}$."
        }
    },

    {//10
        id: "AP001-KINEM-LQ28S",
        unit: "Kinematics",
        topic: "Vectors and Motion in Two Dimensions",
        skill: "Use established physics laws, theories, or models to make an accurate scientific assertion.",
        difficulty: "Medium",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-10-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        problemSetup: "A projectile is launched horizontally with speed $v_0$ from a high platform. Air resistance acts with magnitude $F_D=kv$, where $k>0$.",
        problemPrompt: "Which graph best represents the horizontal velocity component $v_x$ versus time $t$ until the projectile reaches the ground?",

        choices: [
            { text: null, jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-choice-images/ap1-PE1-choice-5.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />' },
            { text: null, jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-choice-images/ap1-PE1-choice-6.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />' },
            { text: null, jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-choice-images/ap1-PE1-choice-7.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />' },
            { text: null, jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-choice-images/ap1-PE1-choice-8.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />' }
        ],

        correctIndex: 3,

        explanation: {
            correct: "We're trying to choose the correct shape of $v_x(t)$.\n\nDrag always opposes the projectile's motion, so in the horizontal direction:\n$m a_x=-k v_x$, therefore\n$a_x=-\\frac{k}{m}v_x<0$.\nSo $v_x$ must decrease from its initial positive value.\n\nNow compare curve shape possibilities. A straight-line decrease would mean constant slope, so constant $a_x$. But here $a_x$ depends on $v_x$, and as $v_x$ gets smaller, $|a_x|$ also gets smaller. That means the slope starts more negative and then flattens toward zero.\n\nTherefore, $v_x(t)$ is a decreasing curve that levels off toward zero (not a straight line), which matches the fourth graph."
        }
    },
    {//11
        id: "AP001-FLUID-RD30T",
        unit: "Fluids",
        topic: "Fluids and Newton's Laws",
        skill: "Solve for or approximate a missing value (complete with correct units) using given data and formulas.",
        difficulty: "Medium",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-11-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        problemSetup: "A block has mass $m=4.5\\text{ kg}$ and density $\\rho_b=3000\\text{ kg/m}^3$. It is fully submerged in water of density $\\rho_w=1000\\text{ kg/m}^3$ and held at rest by a spring balance.",
        problemPrompt: "What does the spring balance read?",

        choices: [
            { text: "$15\\text{ N}$", jpegDiagram: null },
            { text: "$20\\text{ N}$", jpegDiagram: null },
            { text: "$25\\text{ N}$", jpegDiagram: null },
            { text: "$30\\text{ N}$", jpegDiagram: null }
        ],

        correctIndex: 3,

        explanation: {
            correct: "We're trying to find the spring balance reading $T$.\n\nThe block is at rest, so vertical forces balance:\n$T+F_B=mg$, therefore $T=mg-F_B$.\n\nNow find $F_B$ using Archimedes' principle:\n$F_B=\\rho_w gV$.\nThe block's volume is\n$V=\\frac{m}{\\rho_b}=\\frac{4.5}{3000}=1.5\\times10^{-3}\\text{ m}^3$.\nSo\n$F_B=(1000)(10)(1.5\\times10^{-3})=15\\text{ N}$.\n\nTherefore,\n$T=45-15=30\\text{ N}$."
        }
    },
    {//12
        id: "AP001-GRAV-YN41P",
        unit: "Force and Translational Dynamics",
        topic: "Gravitational Force",
        skill: "Use established physics laws, theories, or models to make an accurate scientific assertion.",
        difficulty: "Easy",

        jpegDiagram: null,


        problemSetup: "Planet X has mass $M_0$ and radius $R_0$. Planet Y has mass $2M_0$ and radius $2R_0$. A probe of mass $m$ experiences force $F_0$ at the surface of Planet X.",
        problemPrompt: "What gravitational force does the same probe experience at the surface of Planet Y?",

        choices: [
            { text: "$\\frac{1}{2} F_0$", jpegDiagram: null },
            { text: "$F_0$", jpegDiagram: null },
            { text: "$2 F_0$", jpegDiagram: null },
            { text: "$4 F_0$", jpegDiagram: null }
        ],

        correctIndex: 0,

        explanation: {
            correct: "We're trying to find the force on Planet Y in terms of $F_0$.\n\nStart with\n$F=\\frac{GMm}{R^2}$.\nGiven\n$F_0=\\frac{GM_0m}{R_0^2}$ on Planet X, then on Planet Y:\n$F_Y=\\frac{G(2M_0)m}{(2R_0)^2}=\\frac{2GM_0m}{4R_0^2}=\\frac{1}{2}F_0$.\n\nTherefore, the force is $\\frac{1}{2}F_0$."
        }
    },
    {//13
        id: "AP001-WORK-QM52H",
        unit: "Work, Energy, and Power",
        topic: "Work",
        skill: "Create algebraic formulas by combining known variables through a step-by-step mathematical proof.",
        difficulty: "Medium",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-13-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        problemSetup: "A block of mass $m$ is pulled across a rough horizontal surface by a cable with constant tension $T$ at angle $\\theta$ above horizontal. The coefficient of kinetic friction is $\\mu_k$. The block moves distance $d$.",
        problemPrompt: "Which expression gives the work $W_f$ done by kinetic friction?",

        choices: [
            { text: "$-\\mu_k mg d$", jpegDiagram: null },
            { text: "$-\\mu_k (mg + T \\sin\\theta) d$", jpegDiagram: null },
            { text: "$-\\mu_k (mg - T \\cos\\theta) d$", jpegDiagram: null },
            { text: "$-\\mu_k (mg - T \\sin\\theta) d$", jpegDiagram: null }
        ],

        correctIndex: 3,

        explanation: {
            correct: "We're trying to find the friction work $W_f$.\n\nWork by a constant force is\n$W=Fd\\cos\\phi$.\nFriction points opposite the displacement, so $\\phi=180^\\circ$ and\n$W_f=-f_kd$.\n\nNow find $f_k$:\n$f_k=\\mu_kN$.\nFrom vertical force balance, the upward tension component reduces the normal force:\n$N=mg-T\\sin\\theta$.\n\nSubstitute:\n$W_f=-\\mu_k(mg-T\\sin\\theta)d$."
        }
    },
    {//14
        id: "AP001-ANGMO-JK63L",
        unit: "Energy and Momentum of Rotating Systems",
        topic: "Conservation of Angular Momentum",
        skill: "Use established physics laws, theories, or models to make an accurate scientific assertion.",
        difficulty: "Hard",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-14-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        problemSetup: "An athlete of mass $M$ stands on a rotating platform at radius $\\frac{d}{2}$. The system initially has angular momentum $L_0$ and rotational kinetic energy $K_0$. The athlete moves inward to radius $\\frac{d}{4}$, giving final values $L_f$ and $K_f$.",
        problemPrompt: "How do $L_f$ and $K_f$ compare with their initial values?",

        choices: [
            { text: "<table style='width:100%; border-collapse:collapse; font-size:20px; font-family:inherit; line-height:1.55;'><thead><tr><th style='border:1px solid #999; padding:4px; font-weight:400;'>Final Angular Momentum $L_f$</th><th style='border:1px solid #999; padding:4px; font-weight:400;'>Final Rotational Kinetic Energy $K_f$</th></tr></thead><tbody><tr><td style='border:1px solid #999; padding:4px;'>$L_f = L_0$</td><td style='border:1px solid #999; padding:4px;'>$K_f = 2K_0$</td></tr></tbody></table>", jpegDiagram: null },
            { text: "<table style='width:100%; border-collapse:collapse; font-size:20px; font-family:inherit; line-height:1.55;'><thead><tr><th style='border:1px solid #999; padding:4px; font-weight:400;'>Final Angular Momentum $L_f$</th><th style='border:1px solid #999; padding:4px; font-weight:400;'>Final Rotational Kinetic Energy $K_f$</th></tr></thead><tbody><tr><td style='border:1px solid #999; padding:4px;'>$L_f = \\frac{1}{2}L_0$</td><td style='border:1px solid #999; padding:4px;'>$K_f = K_0$</td></tr></tbody></table>", jpegDiagram: null },
            { text: "<table style='width:100%; border-collapse:collapse; font-size:20px; font-family:inherit; line-height:1.55;'><thead><tr><th style='border:1px solid #999; padding:4px; font-weight:400;'>Final Angular Momentum $L_f$</th><th style='border:1px solid #999; padding:4px; font-weight:400;'>Final Rotational Kinetic Energy $K_f$</th></tr></thead><tbody><tr><td style='border:1px solid #999; padding:4px;'>$L_f = L_0$</td><td style='border:1px solid #999; padding:4px;'>$K_f = 4K_0$</td></tr></tbody></table>", jpegDiagram: null },
            { text: "<table style='width:100%; border-collapse:collapse; font-size:20px; font-family:inherit; line-height:1.55;'><thead><tr><th style='border:1px solid #999; padding:4px; font-weight:400;'>Final Angular Momentum $L_f$</th><th style='border:1px solid #999; padding:4px; font-weight:400;'>Final Rotational Kinetic Energy $K_f$</th></tr></thead><tbody><tr><td style='border:1px solid #999; padding:4px;'>$L_f = 4L_0$</td><td style='border:1px solid #999; padding:4px;'>$K_f = 4K_0$</td></tr></tbody></table>", jpegDiagram: null }
        ],

        correctIndex: 2,

        explanation: {
            correct: "We're trying to compare $L_f$ and $K_f$ with $L_0$ and $K_0$.\n\nThere is negligible external torque, so angular momentum is conserved:\n$L_f=L_0$.\n\nTo relate energy to inertia, use\n$K=\\frac{L^2}{2I}$.\nThis comes from combining $L=I\\omega$ with $K=\\frac{1}{2}I\\omega^2$.\n\nNow find how $I$ changes:\n$I_i=M\\left(\\frac{d}{2}\\right)^2=\\frac{Md^2}{4}$,\n$I_f=M\\left(\\frac{d}{4}\\right)^2=\\frac{Md^2}{16}$.\nSo $I$ decreases by a factor of 4.\n\nAt fixed $L$, smaller $I$ means larger $K$, therefore $K_f=4K_0$."
        }
    },
    {//15
        id: "AP001-KINEM-ZP74C",
        unit: "Kinematics",
        topic: "Vectors and Motion in Two Dimensions",
        skill: "Solve for or approximate a missing value (complete with correct units) using given data and formulas.",
        difficulty: "Medium",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-15-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        problemSetup: "A marble leaves a fridge of height $h=1.25\\text{ m}$ horizontally with speed $v_0=3.0\\text{ m/s}$.",
        problemPrompt: "How far horizontally from the fridge edge does it land?",

        choices: [
            { text: "$0.75\\text{ m}$", jpegDiagram: null },
            { text: "$1.25\\text{ m}$", jpegDiagram: null },
            { text: "$1.50\\text{ m}$", jpegDiagram: null },
            { text: "$3.00\\text{ m}$", jpegDiagram: null }
        ],

        correctIndex: 2,

        explanation: {
            correct: "We're trying to find the horizontal distance $x$.\n\nStart with\n$x=v_0t$.\nSo we need the flight time from vertical motion:\n$h=\\frac{1}{2}gt^2$.\nSubstitute values:\n$1.25=\\frac{1}{2}(10)t^2$, giving $t=0.50\\text{ s}$.\n\nTherefore,\n$x=(3.0)(0.50)=1.50\\text{ m}$."
        }
    },
    {//16
        id: "AP001-SHM-DV85M",
        unit: "Force and Translational Dynamics + Oscillations",
        topic: "Spring Forces + SHM Representations",
        skill: "Create algebraic formulas by combining known variables through a step-by-step mathematical proof.",
        difficulty: "Medium",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-16-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        problemSetup: "A block of mass $m$ hangs from two parallel springs with constants $k_1$ and $k_2$. Take equilibrium as $y=0$. The block is pulled to $y=-y_0$ and released, then undergoes simple harmonic motion.",
        problemPrompt: "In terms of the given quantities, what is the acceleration magnitude when the block passes $y=+\\frac{1}{2}y_0$?",

        choices: [
            { text: "$\\frac{(k_1 + k_2) y_0}{2m}$", jpegDiagram: null },
            { text: "$\\frac{(k_1 + k_2) y_0}{m}$", jpegDiagram: null },
            { text: "$\\frac{(k_1 - k_2) y_0}{2m}$", jpegDiagram: null },
            { text: "$g - \\frac{(k_1 + k_2) y_0}{2m}$", jpegDiagram: null }
        ],

        correctIndex: 0,

        explanation: {
            correct: "We're trying to find the acceleration magnitude at $y=+\\frac{1}{2}y_0$.\n\nFor two springs in parallel, the effective spring constant is\n$k_{\\text{eq}}=k_1+k_2$.\nHooke's law gives restoring force\n$F=-k_{\\text{eq}}y=-(k_1+k_2)y$.\n\nUsing Newton's second law,\n$a=\\frac{F}{m}$, so the magnitude is\n$|a|=\\frac{|F|}{m}=\\frac{(k_1+k_2)|y|}{m}$.\n\nAt $y=+\\frac{1}{2}y_0$,\n$a=\\frac{(k_1+k_2)y_0}{2m}$."
        }
    },
    {//17
        id: "AP001-TORQUE-BX96N",
        unit: "Torque and Rotational Dynamics",
        topic: "Torque",
        skill: "Use established physics laws, theories, or models to make an accurate scientific assertion.",
        difficulty: "Medium",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-17-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        problemSetup: "A top view shows a door of width $L$ rotating about its hinge. Four forces, $F_A$, $F_B$, $F_C$, and $F_D$, are each applied separately with equal magnitude $F$.",
        problemPrompt: "Which force produces the greatest torque magnitude about the hinge?",

        choices: [
            { text: "$F_A$", jpegDiagram: null },
            { text: "$F_B$", jpegDiagram: null },
            { text: "$F_C$", jpegDiagram: null },
            { text: "$F_D$", jpegDiagram: null }
        ],

        correctIndex: 3,

        explanation: {
            correct: "We're trying to find which force gives the greatest torque magnitude.\n\nStart with\n$\\tau=rF\\sin\\theta$.\nAll four forces have the same $F$, therefore we compare $r\\sin\\theta$ values:\n$\\tau_A=LF\\sin30^\\circ=0.5LF$,\n$\\tau_B=\\frac{3L}{4}F$,\n$\\tau_C=\\frac{L}{2}F$,\n$\\tau_D=LF\\sin60^\\circ=\\frac{\\sqrt{3}}{2}LF$.\n\nTherefore $\\tau_D$ is largest, so $F_D$ is correct."
        }
    },
    {//18
        id: "AP001-FLUID-CH17R",
        unit: "Fluids",
        topic: "Fluids and Conservation Laws",
        skill: "Create algebraic formulas by combining known variables through a step-by-step mathematical proof.",
        difficulty: "Hard",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-18-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        problemSetup: "An ideal fluid of density $\\rho$ flows through a horizontal tapered pipe. At region 1, the radius is $R_1$, speed is $v_1$, and pressure is $P_1$. At region 2, the radius is $R_2=\\frac{1}{2}R_1$ and pressure is $P_2$.",
        problemPrompt: "What is $P_1-P_2$?",

        choices: [
            { text: "$\\frac{15}{2} \\rho v_1^2$", jpegDiagram: null },
            { text: "$\\frac{3}{2} \\rho v_1^2$", jpegDiagram: null },
            { text: "$\\frac{1}{2} \\rho v_1^2$", jpegDiagram: null },
            { text: "$\\frac{15}{8} \\rho v_1^2$", jpegDiagram: null }
        ],

        correctIndex: 0,

        explanation: {
            correct: "We're trying to find the pressure difference $P_1-P_2$.\n\nFor steady ideal flow in a horizontal pipe, use Bernoulli:\n$P_1+\\frac{1}{2}\\rho v_1^2=P_2+\\frac{1}{2}\\rho v_2^2$.\nSo we need $v_2$.\n\nUse continuity (flow rate conserved):\n$A_1v_1=A_2v_2$.\nBecause $R_2=\\frac{1}{2}R_1$, area scales as $R^2$, so $A_2=\\frac{1}{4}A_1$ and therefore $v_2=4v_1$.\n\nSubstitute into Bernoulli:\n$P_1-P_2=\\frac{1}{2}\\rho(16v_1^2-v_1^2)=\\frac{15}{2}\\rho v_1^2$."
        }
    },
    {//19
        id: "AP001-LINMO-GT28S",
        unit: "Linear Momentum",
        topic: "Conservation of Linear Momentum",
        skill: "Solve for or approximate a missing value (complete with correct units) using given data and formulas.",
        difficulty: "Medium",

        jpegDiagram: '<img src="ap1/ap1-practice-exam-images/ap1-practice-exam-1-images/ap1-practice-exam-1-mcq-problem-images/ap1-PE1-MCQ-19-problem.png" alt="N/A" style="max-width:100%; height:auto; border-radius:4px;" />',


        problemSetup: "Glider A has mass $m_A=2.0\\text{ kg}$ and speed $+6.0\\text{ m/s}$. Glider B has unknown mass $m_B$ and speed $-3.0\\text{ m/s}$. The graph shows center-of-mass position $x_{\\text{cm}}$ versus time.",
        problemPrompt: "What is the mass $m_B$?",

        choices: [
            { text: "$0.50\\text{ kg}$", jpegDiagram: null },
            { text: "$1.0\\text{ kg}$", jpegDiagram: null },
            { text: "$1.5\\text{ kg}$", jpegDiagram: null },
            { text: "$2.0\\text{ kg}$", jpegDiagram: null }
        ],

        correctIndex: 0,

        explanation: {
            correct: "We're trying to find the unknown mass $m_B$.\n\nStart with center-of-mass speed:\n$v_{\\text{cm}}=\\frac{m_Av_A+m_Bv_B}{m_A+m_B}$.\nFrom the graph slope,\n$v_{\\text{cm}}=\\frac{3.0\\text{ m}}{2.0\\text{ s}}=1.5\\text{ m/s}$.\n\nSubstitute known values:\n$1.5=\\frac{(2.0)(6.0)+m_B(-3.0)}{2.0+m_B}$.\nSolve:\n$1.5(2+m_B)=12-3m_B$, so $m_B=0.50\\text{ kg}$."
        }
    },
    {//20
        id: "AP001-POWER-HN39W",
        unit: "Work, Energy, and Power",
        topic: "Power",
        skill: "Solve for or approximate a missing value (complete with correct units) using given data and formulas.",
        difficulty: "Medium",

        jpegDiagram: null,


        problemSetup: "A motor applies a constant horizontal force $F$ to a block of mass $m$, starting from rest. The average power from $t=0$ to $t=T$ is $P_0$.",
        problemPrompt: "What is the average power from $t=T$ to $t=3T$?",

        choices: [
            { text: "$P_0$", jpegDiagram: null },
            { text: "$3 P_0$", jpegDiagram: null },
            { text: "$4 P_0$", jpegDiagram: null },
            { text: "$8 P_0$", jpegDiagram: null }
        ],

        correctIndex: 2,

        explanation: {
            correct: "We're trying to find the average power from $t=T$ to $t=3T$.\n\nAverage power is work per time, and by the work-energy theorem $W=\\Delta K$, so\n$P_{\\text{avg}}=\\frac{\\Delta K}{\\Delta t}$.\n\nWith constant force, acceleration is constant:\n$a=\\frac{F}{m}$.\nSo\n$v(T)=aT$ and $v(3T)=3aT$.\nThen\n$\\Delta K=\\frac{1}{2}m[(3aT)^2-(aT)^2]=4ma^2T^2$, with $\\Delta t=2T$.\nTherefore,\n$P_{\\text{avg}}=\\frac{4ma^2T^2}{2T}=2ma^2T$.\n\nFrom the first interval, $P_0=\\frac{1}{2}ma^2T$, therefore\n$P_{\\text{avg}}=4P_0$."
        }
    }

];

