const ap1DailyPool = [
    {
        id: "AP001-DAILY-001",
        unit: "Kinematics",
        topic: "Particle Model and Position",
        skill: "Contrast how values change across different situations, moments in time, or positions within a system.",
        difficulty: "Easy",
        jpegDiagram: null,
        problemSetup: "A cart moves along the $x$-axis. Its position is $x_0$ at time $t_0$, then $x_1$ at $t_1$, and finally $x_2$ at $t_2$, where $t_2>t_1>t_0$.",
        problemPrompt: "Which expression gives the cart's average velocity over the entire interval from $t_0$ to $t_2$?",
        choices: [
            { text: "$\\dfrac{x_2-x_0}{t_2-t_0}$", jpegDiagram: null },
            { text: "$\\dfrac{x_2-x_1}{t_2-t_1}$", jpegDiagram: null },
            { text: "$\\dfrac{x_1-x_0}{t_1-t_0}$", jpegDiagram: null },
            { text: "$\\dfrac{x_2-x_0}{t_2-t_1}$", jpegDiagram: null }
        ],
        correctIndex: 0,
        explanation: {
            correct: "Average velocity over an interval uses only the endpoints of that interval.\n\nFor $t_0$ to $t_2$,\n$v_{\\text{avg}}=\\dfrac{x_2-x_0}{t_2-t_0}$.\n\nMiddle-time details can help analyze motion, but they are not required in the definition of average velocity over the full interval."
        }
    },
    {
        id: "AP001-DAILY-002",
        unit: "Kinematics",
        topic: "Motion with Constant Acceleration",
        skill: "Solve for or approximate a missing value (complete with correct units) using given data and formulas.",
        difficulty: "Medium",
        jpegDiagram: null,
        problemSetup: "A cyclist has initial speed $v_0$ and brakes with constant acceleration to rest after traveling distance $d$.",
        problemPrompt: "Which expression gives the stopping time $t$ in terms of $v_0$ and $d$?",
        choices: [
            { text: "$\\dfrac{d}{v_0}$", jpegDiagram: null },
            { text: "$\\dfrac{2d}{v_0}$", jpegDiagram: null },
            { text: "$\\dfrac{v_0}{2d}$", jpegDiagram: null },
            { text: "$\\dfrac{v_0^2}{2d}$", jpegDiagram: null }
        ],
        correctIndex: 1,
        explanation: {
            correct: "Start with constant-acceleration kinematics. Since final speed is zero,\n$0=v_0^2+2ad$, so $a=-\\dfrac{v_0^2}{2d}$.\n\nThen use $0=v_0+at$, so\n$t=-\\dfrac{v_0}{a}=\\dfrac{2d}{v_0}$.\n\nThis is bigger than $d/v_0$ because speed is decreasing, so average speed is less than $v_0$."
        }
    },
    {
        id: "AP001-DAILY-003",
        unit: "Force and Translational Dynamics",
        topic: "Newton's Second Law",
        skill: "Create algebraic formulas by combining known variables through a step-by-step mathematical proof.",
        difficulty: "Hard",
        jpegDiagram: null,
        problemSetup: "A block of mass $m$ is pushed across a horizontal surface by a force $F$ applied at angle $\\theta$ below the horizontal. The kinetic friction coefficient is $\\mu_k$.",
        problemPrompt: "Which expression correctly gives the block's horizontal acceleration $a$?",
        choices: [
            { text: "$a=\\frac{F\\cos\\theta-\\mu_kmg}{m}$", jpegDiagram: null },
            { text: "$a=\\frac{F\\cos\\theta-\\mu_k\\left(mg+F\\sin\\theta\\right)}{m}$", jpegDiagram: null },
            { text: "$a=\\frac{F\\sin\\theta-\\mu_k\\left(mg+F\\cos\\theta\\right)}{m}$", jpegDiagram: null },
            { text: "$a=\\frac{F-\\mu_kmg}{m}$", jpegDiagram: null }
        ],
        correctIndex: 1,
        explanation: {
            correct: "We're trying to build $a$ from force components, so start with Newton's second law in $x$.\n\nBecause the push has a downward component,\n$N=mg+F\\sin\\theta$.\nThen friction is\n$f_k=\\mu_kN=\\mu_k\\left(mg+F\\sin\\theta\\right)$.\n\nApply $\\Sigma F_x=ma$:\n$F\\cos\\theta-f_k=ma$.\nSubstitute $f_k$ and solve:\n$a=\\frac{F\\cos\\theta-\\mu_k\\left(mg+F\\sin\\theta\\right)}{m}$.\n\nTherefore, the correct choice is option 2."
        }
    },
    {
        id: "AP001-DAILY-004",
        unit: "Force and Translational Dynamics",
        topic: "Connected Objects",
        skill: "Determine how a variable changes when another is modified based on their mathematical relationship.",
        difficulty: "Medium",
        jpegDiagram: null,
        problemSetup: "Block A of mass $m_A$ is on a horizontal surface with kinetic friction coefficient $\\mu_k$. It is connected over a pulley to hanging block B of mass $m_B$. Assume block B moves downward and the rope/pulley are ideal.",
        problemPrompt: "Which expression gives the magnitude of the acceleration?",
        choices: [
            { text: "$\\dfrac{m_Bg-\\mu_km_Ag}{m_A+m_B}$", jpegDiagram: null },
            { text: "$\\dfrac{m_Bg+\\mu_km_Ag}{m_A+m_B}$", jpegDiagram: null },
            { text: "$\\dfrac{m_Bg-\\mu_km_Ag}{m_B}$", jpegDiagram: null },
            { text: "$\\dfrac{m_Bg}{m_A+m_B}-\\mu_kg$", jpegDiagram: null }
        ],
        correctIndex: 0,
        explanation: {
            correct: "Treat both blocks as one system so internal tension cancels.\n\nExternal forces along motion are:\n$m_Bg$ (driving) and friction on A, $f_k=\\mu_km_Ag$ (opposing).\n\nSo\n$F_{\\text{net}}=m_Bg-\\mu_km_Ag$ and\n$a=\\dfrac{F_{\\text{net}}}{m_A+m_B}=\\dfrac{m_Bg-\\mu_km_Ag}{m_A+m_B}$.\n\nOption 4 is not generally equivalent because it would incorrectly distribute the denominator."
        }
    },
    {
        id: "AP001-DAILY-005",
        unit: "Work, Energy, and Power",
        topic: "Conservation of Mechanical Energy",
        skill: "Use established physics laws, theories, or models to make an accurate scientific assertion.",
        difficulty: "Medium",
        jpegDiagram: null,
        problemSetup: "A cart starts from rest at height $H$ on a frictionless track. At point A its height is $\\alpha H$, and at point B its height is $\\beta H$, with $1>\\alpha>\\beta>0$.",
        problemPrompt: "Which expression gives the speed ratio $\\dfrac{v_B}{v_A}$?",
        choices: [
            { text: "$\\sqrt{\\dfrac{1-\\alpha}{1-\\beta}}$", jpegDiagram: null },
            { text: "$\\sqrt{\\dfrac{1-\\beta}{1-\\alpha}}$", jpegDiagram: null },
            { text: "$\\dfrac{1-\\beta}{1-\\alpha}$", jpegDiagram: null },
            { text: "$\\sqrt{\\dfrac{\\beta}{\\alpha}}$", jpegDiagram: null }
        ],
        correctIndex: 1,
        explanation: {
            correct: "From energy conservation relative to the start height $H$:\n$\\frac{1}{2}mv^2=mg(H-h)$.\n\nAt A: $v_A^2=2gH(1-\\alpha)$.\nAt B: $v_B^2=2gH(1-\\beta)$.\n\nTherefore,\n$\\left(\\dfrac{v_B}{v_A}\\right)^2=\\dfrac{1-\\beta}{1-\\alpha}$, so\n$\\dfrac{v_B}{v_A}=\\sqrt{\\dfrac{1-\\beta}{1-\\alpha}}$."
        }
    },
    {
        id: "AP001-DAILY-006",
        unit: "Work, Energy, and Power",
        topic: "Power",
        skill: "Solve for or approximate a missing value (complete with correct units) using given data and formulas.",
        difficulty: "Medium",
        jpegDiagram: null,
        problemSetup: "An elevator of mass $m$ rises a vertical distance $\\Delta y$ in time $\\Delta t$.",
        problemPrompt: "Which expression gives the average rate at which the elevator's gravitational potential energy increases?",
        choices: [
            { text: "$\\dfrac{mg\\Delta y}{\\Delta t}$", jpegDiagram: null },
            { text: "$mg\\Delta y\\,\\Delta t$", jpegDiagram: null },
            { text: "$\\dfrac{m\\Delta y}{g\\Delta t}$", jpegDiagram: null },
            { text: "$\\dfrac{mg}{\\Delta y\\Delta t}$", jpegDiagram: null }
        ],
        correctIndex: 0,
        explanation: {
            correct: "Average rate of energy increase is\n$P_{\\text{avg}}=\\dfrac{\\Delta U_g}{\\Delta t}$.\n\nFor gravity near Earth,\n$\\Delta U_g=mg\\Delta y$.\nSubstitute to get\n$P_{\\text{avg}}=\\dfrac{mg\\Delta y}{\\Delta t}$.\n\nThis expression has units of watts, as expected for power."
        }
    },
    {
        id: "AP001-DAILY-007",
        unit: "Linear Momentum",
        topic: "Impulse-Momentum Theorem",
        skill: "Defend a scientific conclusion using laboratory data, graphs, diagrams, or fundamental laws of physics.",
        difficulty: "Hard",
        jpegDiagram: null,
        problemSetup: "A puck of mass $m$ moves to the right with initial speed $v_0$. During a collision, the net force-time graph is a triangle of duration $\\Delta t$ and peak magnitude $F_{\\max}$ directed left. Take right as positive.",
        problemPrompt: "Which expression gives the puck's final velocity $v_f$?",
        choices: [
            { text: "$v_f=v_0-\\dfrac{F_{\\max}\\Delta t}{2m}$", jpegDiagram: null },
            { text: "$v_f=v_0+\\dfrac{F_{\\max}\\Delta t}{2m}$", jpegDiagram: null },
            { text: "$v_f=v_0-\\dfrac{F_{\\max}\\Delta t}{m}$", jpegDiagram: null },
            { text: "$v_f=v_0-\\dfrac{2F_{\\max}\\Delta t}{m}$", jpegDiagram: null }
        ],
        correctIndex: 0,
        explanation: {
            correct: "Impulse equals area under the force-time graph with sign.\n\nThe triangle area magnitude is $\\frac{1}{2}F_{\\max}\\Delta t$, and it is leftward, so\n$J=-\\frac{1}{2}F_{\\max}\\Delta t$.\n\nUse $J=\\Delta p=m(v_f-v_0)$:\n$m(v_f-v_0)=-\\frac{1}{2}F_{\\max}\\Delta t$.\n\nSolve for $v_f$:\n$v_f=v_0-\\dfrac{F_{\\max}\\Delta t}{2m}$."
        }
    },
    {
        id: "AP001-DAILY-008",
        unit: "Torque and Rotational Dynamics",
        topic: "Rotational Equilibrium",
        skill: "Create algebraic formulas by combining known variables through a step-by-step mathematical proof.",
        difficulty: "Medium",
        jpegDiagram: null,
        problemSetup: "A uniform horizontal beam of length $L$ is hinged at its left end. A cable attached at the right end makes an angle $\\theta$ above the beam. The beam's weight is $W$, acting at its center.",
        problemPrompt: "Which expression gives the cable tension $T$ for rotational equilibrium?",
        choices: [
            { text: "$T=\\dfrac{W}{2\\sin\\theta}$", jpegDiagram: null },
            { text: "$T=\\dfrac{W}{\\sin\\theta}$", jpegDiagram: null },
            { text: "$T=\\dfrac{W\\sin\\theta}{2}$", jpegDiagram: null },
            { text: "$T=2W\\sin\\theta$", jpegDiagram: null }
        ],
        correctIndex: 0,
        explanation: {
            correct: "Take torques about the hinge so hinge forces drop out.\n\nCable torque magnitude: $\\tau_T=(TL)\\sin\\theta$.\nWeight torque magnitude: $\\tau_W=W\\left(\\dfrac{L}{2}\\right)$.\n\nSet counterclockwise equal to clockwise:\n$TL\\sin\\theta=W\\dfrac{L}{2}$.\nCancel $L$ and solve:\n$T=\\dfrac{W}{2\\sin\\theta}$."
        }
    },
    {
        id: "AP001-DAILY-009",
        unit: "Energy and Momentum of Rotating Systems",
        topic: "Rotational Kinetic Energy and Angular Momentum",
        skill: "Determine how a variable changes when another is modified based on their mathematical relationship.",
        difficulty: "Hard",
        jpegDiagram: null,
        problemSetup: "A rotating system has initial inertia $I_1$ and angular speed $\\omega_1$. It changes shape so the new inertia is $I_2=\\dfrac{I_1}{k}$, where $k>1$. External torque is negligible.",
        problemPrompt: "Which statement correctly relates the final angular speed and rotational kinetic energy to initial values?",
        choices: [
            { text: "$\\omega_2=k\\omega_1$ and $K_2=kK_1$", jpegDiagram: null },
            { text: "$\\omega_2=k\\omega_1$ and $K_2=k^2K_1$", jpegDiagram: null },
            { text: "$\\omega_2=\\sqrt{k}\\,\\omega_1$ and $K_2=kK_1$", jpegDiagram: null },
            { text: "$\\omega_2=\\sqrt{k}\\,\\omega_1$ and $K_2=K_1$", jpegDiagram: null }
        ],
        correctIndex: 0,
        explanation: {
            correct: "Conserve angular momentum:\n$I_1\\omega_1=I_2\\omega_2$.\nWith $I_2=I_1/k$,\n$\\omega_2=\\dfrac{I_1}{I_2}\\omega_1=k\\omega_1$.\n\nNow use $K=\\dfrac{1}{2}I\\omega^2$:\n$K_2=\\dfrac{1}{2}\\left(\\dfrac{I_1}{k}\\right)(k\\omega_1)^2$\n$=k\\left(\\dfrac{1}{2}I_1\\omega_1^2\\right)=kK_1$.\n\nSo angular speed scales by $k$, and rotational kinetic energy also scales by $k$."
        }
    },
    {
        id: "AP001-DAILY-010",
        unit: "Fluids",
        topic: "Pressure in Static Fluids",
        skill: "Solve for or approximate a missing value (complete with correct units) using given data and formulas.",
        difficulty: "Medium",
        jpegDiagram: null,
        problemSetup: "A pressure gauge in a static fluid reads gauge pressure $P_{g1}$ at depth $h_1$. The fluid has density $\\rho$. The gauge is moved to depth $h_2$.",
        problemPrompt: "Which expression gives the new gauge pressure $P_{g2}$?",
        choices: [
            { text: "$P_{g2}=P_{g1}+\\rho g(h_2-h_1)$", jpegDiagram: null },
            { text: "$P_{g2}=P_{g1}+\\rho g(h_1-h_2)$", jpegDiagram: null },
            { text: "$P_{g2}=\\rho gh_2$", jpegDiagram: null },
            { text: "$P_{g2}=P_{g1}\\dfrac{h_2}{h_1}$", jpegDiagram: null }
        ],
        correctIndex: 0,
        explanation: {
            correct: "For a static fluid, gauge pressure changes with depth by\n$\\Delta P_g=\\rho g\\Delta h$.\n\nSo moving from $h_1$ to $h_2$ gives\n$P_{g2}-P_{g1}=\\rho g(h_2-h_1)$.\n\nRearrange:\n$P_{g2}=P_{g1}+\\rho g(h_2-h_1)$.\n\nThis form is robust because it uses the known initial reading directly."
        }
    }
];

ap1DailyPool.length = 10;
