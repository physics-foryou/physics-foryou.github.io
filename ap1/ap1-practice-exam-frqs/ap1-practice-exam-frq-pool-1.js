/**
 * AP Physics C: Mechanics - Practice Exam 1
 * Section II: Free-Response Questions Clean Template Pool
 * =========================================================================
 * ID SYSTEM RULES & LOGIC:
 * =========================================================================
 * 1. setupId (3 Tiers): [COURSE]-[EXAM]-[SETUP]
 * - Course (5 chars): e.g., 'APMEC' (AP Physics C: Mechanics)
 * - Exam Number (5 chars): Starts with 'EX' followed by digits (e.g., 'EX001')
 * - Setup Number (5 chars): Starts with 'SU' followed by digits (e.g., 'SU001')
 * Format: XXXXX-XXXXX-XXXXX (e.g., APMEC-EX001-SU001)
 * * 2. partId (4 Tiers): [COURSE]-[EXAM]-[SETUP]-[PART]
 * - Inherits the first 3 tiers from its parent setup.
 * - Part Number (5 chars): Starts with 'P' followed by digits (e.g., 'P0001')
 * Format: XXXXX-XXXXX-XXXXX-XXXXX (e.g., APMEC-EX001-SU001-P0001)
 * * 3. subpartId (5 Tiers): [COURSE]-[EXAM]-[SETUP]-[PART]-[SUBPART]
 * - Inherits the first 4 tiers from its parent part.
 * - Subpart Number (5 chars): Starts with 'S' followed by digits (e.g., 'S0001')
 * Format: XXXXX-XXXXX-XXXXX-XXXXX-XXXXX (e.g., APMEC-EX001-SU001-P0001-S0001)
 * =========================================================================
 */

const ap1PracticeExamFRQPoolOne = [
    // =========================================================================
    // QUESTION 1
    // =========================================================================
    {
        setupId: "",
        problemNumber: 1,
        problemType: "",
        problemSetup: "",
        svgDiagram: ``, // Global / Main setup diagram
        dataTable: null,
        parts: [
            {
                partId: "",
                partTitle: "Part A",
                partIntroText: "",
                svgDiagram: ``, // Part-specific diagram
                subparts: [
                    {
                        subpartId: "",
                        subpartLabel: "(i)",
                        subpartQuestion: "",
                        svgDiagram: `` // Subpart-specific diagram (e.g., a student response grid or graph axis)
                    },
                    {
                        subpartId: "",
                        subpartLabel: "(ii)",
                        subpartQuestion: "",
                        svgDiagram: ``
                    },
                    {
                        subpartId: "",
                        subpartLabel: "(iii)",
                        subpartQuestion: "",
                        svgDiagram: ``
                    }
                ]
            },
            {
                partId: "",
                partTitle: "Part B",
                partIntroText: "",
                svgDiagram: ``,
                subparts: [
                    {
                        subpartId: "",
                        subpartLabel: "",
                        subpartQuestion: "",
                        svgDiagram: ``
                    }
                ]
            }
        ]
    },

    // =========================================================================
    // QUESTION 2
    // =========================================================================
    {
        setupId: "",
        problemNumber: 2,
        problemType: "",
        problemSetup: "",
        svgDiagram: ``,
        dataTable: null,
        parts: [
            {
                partId: "",
                partTitle: "Part A",
                partIntroText: "",
                svgDiagram: ``,
                subparts: [
                    {
                        subpartId: "",
                        subpartLabel: "",
                        subpartQuestion: "",
                        svgDiagram: ``
                    }
                ]
            },
            {
                partId: "",
                partTitle: "Part B",
                partIntroText: "",
                svgDiagram: ``,
                subparts: [
                    {
                        subpartId: "",
                        subpartLabel: "",
                        subpartQuestion: "",
                        svgDiagram: ``
                    }
                ]
            },
            {
                partId: "",
                partTitle: "Part C",
                partIntroText: "",
                svgDiagram: ``,
                subparts: [
                    {
                        subpartId: "",
                        subpartLabel: "",
                        subpartQuestion: "",
                        svgDiagram: ``
                    }
                ]
            },
            {
                partId: "",
                partTitle: "Part D",
                partIntroText: "",
                svgDiagram: ``,
                subparts: [
                    {
                        subpartId: "",
                        subpartLabel: "",
                        subpartQuestion: "",
                        svgDiagram: ``
                    }
                ]
            }
        ]
    },

    // =========================================================================
    // QUESTION 3
    // =========================================================================
    {
        setupId: "",
        problemNumber: 3,
        problemType: "",
        problemSetup: "",
        svgDiagram: ``,
        dataTable: null,
        parts: [
            {
                partId: "",
                partTitle: "Part A",
                partIntroText: "",
                svgDiagram: ``,
                subparts: [
                    {
                        subpartId: "",
                        subpartLabel: "(i)",
                        subpartQuestion: "",
                        svgDiagram: ``
                    },
                    {
                        subpartId: "",
                        subpartLabel: "(ii)",
                        subpartQuestion: "",
                        svgDiagram: ``
                    }
                ]
            },
            {
                partId: "",
                partTitle: "Part B",
                partIntroText: "",
                svgDiagram: ``,
                subparts: [
                    {
                        subpartId: "",
                        subpartLabel: "(i)",
                        subpartQuestion: "",
                        svgDiagram: ``
                    },
                    {
                        subpartId: "",
                        subpartLabel: "(ii)",
                        subpartQuestion: "",
                        svgDiagram: ``
                    }
                ]
            },
            {
                partId: "",
                partTitle: "Part C & D Context",
                partIntroText: "",
                svgDiagram: ``,
                partDataTable: {
                    rows: [
                        ["0.020", "0.02"],
                        ["0.040", "0.04"],
                        ["0.060", "0.13"],
                        ["0.080", "0.18"],
                        ["0.100", "0.33"]
                    ]
                },
                subparts: [
                    {
                        subpartId: "",
                        subpartLabel: "C(i)",
                        subpartQuestion: "",
                        svgDiagram: ``
                    },
                    {
                        subpartId: "",
                        subpartLabel: "C(ii)",
                        subpartQuestion: "",
                        svgDiagram: ``
                    },
                    {
                        subpartId: "",
                        subpartLabel: "C(iii)",
                        subpartQuestion: "",
                        svgDiagram: ``
                    },
                    {
                        subpartId: "",
                        subpartLabel: "Part D",
                        subpartQuestion: "",
                        svgDiagram: ``
                    }
                ]
            }
        ]
    },

    // =========================================================================
    // QUESTION 4
    // =========================================================================
    {
        setupId: "",
        problemNumber: 4,
        problemType: "",
        problemSetup: "",
        svgDiagram: ``,
        dataTable: null,
        parts: [
            {
                partId: "",
                partTitle: "Part A",
                partIntroText: "",
                svgDiagram: ``,
                subparts: [
                    {
                        subpartId: "",
                        subpartLabel: "",
                        subpartQuestion: "",
                        svgDiagram: ``
                    }
                ]
            },
            {
                partId: "",
                partTitle: "Part B",
                partIntroText: "",
                svgDiagram: ``,
                subparts: [
                    {
                        subpartId: "",
                        subpartLabel: "",
                        subpartQuestion: "",
                        svgDiagram: ``
                    }
                ]
            },
            {
                partId: "",
                partTitle: "Part C",
                partIntroText: "",
                svgDiagram: ``,
                subparts: [
                    {
                        subpartId: "",
                        subpartLabel: "",
                        subpartQuestion: "",
                        svgDiagram: ``
                    }
                ]
            }
        ]
    }
];
