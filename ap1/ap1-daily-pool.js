const ap1DailyPool = [
    // Q1: Hard | Energy and Momentum of Rotating Systems | ans=C (idx=2)
    {
        id: "AP001-ROTEN-K2P9X",
        unit: "Energy and Momentum of Rotating Systems",
        topic: "Conservation of Angular Momentum",
        skill: "Quantitative Analysis",
        difficulty: "Hard",
        jpegDiagram: null,
        problemSetup: "A uniform disk of mass \\(M = 2.0\\) kg and radius \\(R = 0.50\\) m rotates freely about a fixed axle with angular velocity \\(\\omega_0 = 8.0\\) rad/s. A small piece of clay of mass \\(m = 0.50\\) kg is dropped from rest and sticks to the rim of the disk. The disk's rotational inertia is \\(I_{disk} = \\frac{1}{2}MR^2\\).",
        problemPrompt: "What is the new angular velocity of the disk-clay system immediately after the clay sticks?",
        choices: [
            { text: "\\(5.0\\) rad/s", jpegDiagram: null },
            { text: "\\(6.0\\) rad/s", jpegDiagram: null },
            { text: "\\(6.4\\) rad/s", jpegDiagram: null },
            { text: "\\(7.2\\) rad/s", jpegDiagram: null }
        ],
        correctIndex: 2,
        explanation: {
            correct: "\\(I_{disk}\\omega_0=(I_{disk}+mR^2)\\omega_f\\) ; \\(\\tau_{ext}=0\\).\n\\(I_{disk}=\\frac{1}{2}MR^2\\).\n\\(I_f=I_{disk}+mR^2\\).\n\\(\\omega_f=\\frac{I_{disk}\\omega_0}{I_f}\\approx 6.4\\,\\text{rad/s}\\)."
        }
    },
    // Q2: Medium | Force and Translational Dynamics | ans=A (idx=0)
    {
        id: "AP001-DYNAM-R7T3M",
        unit: "Force and Translational Dynamics",
        topic: "Newton's Second Law",
        skill: "Quantitative Analysis",
        difficulty: "Medium",
        jpegDiagram: null,
        problemSetup: "A student pushes a 12 kg box across a horizontal floor with a horizontal force of 54 N. The coefficient of kinetic friction between the box and floor is \\(\\mu_k = 0.25\\).",
        problemPrompt: "What is the magnitude of the box's acceleration? (Use \\(g = 10\\) m/s².)",
        choices: [
            { text: "\\(2.0\\) m/s²", jpegDiagram: null },
            { text: "\\(2.5\\) m/s²", jpegDiagram: null },
            { text: "\\(3.0\\) m/s²", jpegDiagram: null },
            { text: "\\(4.5\\) m/s²", jpegDiagram: null }
        ],
        correctIndex: 0,
        explanation: {
            correct: "\\(a=\\frac{F_{net}}{m}\\) ; \\(\\sum F_x=ma\\).\n\\(f_k=\\mu_kmg=0.25(12)(10)=30\\,\\text{N}\\).\n\\(F_{net}=54-30=24\\,\\text{N}\\).\n\\(a=\\frac{24}{12}=2.0\\,\\text{m/s}^2\\)."
        }
    },
    // Q3: Easy | Work, Energy, and Power | ans=D (idx=3)
    {
        id: "AP001-WRENP-A4N2L",
        unit: "Work, Energy, and Power",
        topic: "Work",
        skill: "Conceptual Reasoning",
        difficulty: "Easy",
        jpegDiagram: null,
        problemSetup: "A student carries a heavy backpack horizontally across a level hallway at constant velocity.",
        problemPrompt: "Which of the following correctly describes the net work done on the backpack by all forces combined?",
        choices: [
            { text: "Positive, because the student exerts an upward normal force", jpegDiagram: null },
            { text: "Negative, because friction acts opposite to the direction of motion", jpegDiagram: null },
            { text: "Positive, because the student applies a horizontal force", jpegDiagram: null },
            { text: "Zero, because the backpack moves at constant velocity", jpegDiagram: null }
        ],
        correctIndex: 3,
        explanation: {
            correct: "\\(W_{net}=\\Delta KE\\).\nConstant velocity ; \\(\\Delta KE=0\\).\n\\(W_{net}=0\\)."
        }
    },
    // Q4: Medium | Force and Translational Dynamics | ans=D (idx=3)
    {
        id: "AP001-DYNAM-B8W5Q",
        unit: "Force and Translational Dynamics",
        topic: "Newton's Second Law",
        skill: "Quantitative Analysis",
        difficulty: "Medium",
        jpegDiagram: null,
        problemSetup: "Two blocks are connected by a light string over a frictionless pulley. Block A has mass \\(m_A = 5.0\\) kg and rests on a frictionless horizontal table. Block B has mass \\(m_B = 3.0\\) kg and hangs vertically.",
        problemPrompt: "What is the acceleration of the system? (Use \\(g = 10\\) m/s².)",
        choices: [
            { text: "\\(2.5\\) m/s²", jpegDiagram: null },
            { text: "\\(3.0\\) m/s²", jpegDiagram: null },
            { text: "\\(3.5\\) m/s²", jpegDiagram: null },
            { text: "\\(3.75\\) m/s²", jpegDiagram: null }
        ],
        correctIndex: 3,
        explanation: {
            correct: "\\(a=\\frac{F_{net}}{m_A+m_B}\\) ; system = both blocks.\n\\(F_{net}=m_Bg=3.0(10)=30\\,\\text{N}\\).\n\\(m_A+m_B=5.0+3.0=8.0\\,\\text{kg}\\).\n\\(a=\\frac{30}{8.0}=3.75\\,\\text{m/s}^2\\)."
        }
    }
];
ap1DailyPool.length = 10;
