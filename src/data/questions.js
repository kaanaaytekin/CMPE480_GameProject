export const QUESTIONS = [
    // ─── EASY ────────────────────────────────────────────────────────────────
    {
        id: 'iso-29119-easy-1',
        standard: 'ISO/IEC/IEEE 29119',
        difficulty: 'easy',
        question: 'What does the ISO/IEC/IEEE 29119 family of standards mainly focus on?',
        options: [
            'Software testing processes and documentation',
            'Database schema design and normalization',
            'Network infrastructure and cabling standards',
            'User interface design guidelines'
        ],
        answer: 0,
        explanation: 'ISO/IEC/IEEE 29119 is a family of standards for software testing. It describes testing processes, documentation, test design techniques, and related practices that help teams plan, perform, and manage testing consistently.'
    },
    {
        id: 'iso-29119-easy-2',
        standard: 'ISO/IEC/IEEE 29119-5',
        difficulty: 'easy',
        question: 'ISO/IEC/IEEE 29119-5 is most closely related to which testing approach?',
        options: [
            'Keyword-driven testing',
            'White-box mutation testing',
            'Hardware stress testing',
            'Model-based testing'
        ],
        answer: 0,
        explanation: 'ISO/IEC/IEEE 29119-5 specifically addresses keyword-driven testing. In this approach, tests are built from reusable keywords that represent actions or business steps, making test assets easier to structure, reuse, and maintain.'
    },
    {
        id: 'iso-29119-easy-3',
        standard: 'ISO/IEC/IEEE 29119',
        difficulty: 'easy',
        question: 'What is the main purpose of the expected result field in a test case?',
        options: [
            'To define the correct behavior when the test is executed',
            'To list all preconditions that must be met before the test',
            'To record which tester is responsible for execution',
            'To specify the test environment configuration needed'
        ],
        answer: 0,
        explanation: 'The expected result states what the system should do when a test is executed correctly. The tester compares the actual result with the expected result to decide whether the test passed or failed.'
    },
    {
        id: 'iso-29119-easy-4',
        standard: 'ISO/IEC/IEEE 29119',
        difficulty: 'easy',
        question: 'What does a test plan typically define?',
        options: [
            'Test scope, approach, resources, and schedule',
            'Only the list of defects found during testing',
            'The source code structure of the application',
            'The deployment pipeline for the production release'
        ],
        answer: 0,
        explanation: 'A test plan defines how testing will be organized and controlled. It normally includes the scope of testing, the chosen approach, needed resources, schedule, responsibilities, risks, and other management information.'
    },
    {
        id: 'iso-29119-easy-5',
        standard: 'ISO/IEC/IEEE 29119-5',
        difficulty: 'easy',
        question: 'In keyword-driven testing, what does a "keyword" usually represent?',
        options: [
            'A reusable test action or operation step',
            'A reserved word in the programming language used',
            'A unique identifier assigned to each test case',
            'A primary key column in the test database'
        ],
        answer: 0,
        explanation: 'In keyword-driven testing, a keyword represents a reusable test action, operation, or business step. For example, a keyword might represent logging in or checking a displayed result. The keyword can then be reused across many test cases.'
    },
    {
        id: 'iso-29119-easy-6',
        standard: 'ISO/IEC/IEEE 29119',
        difficulty: 'easy',
        question: 'What is a test oracle in ISO/IEC/IEEE 29119?',
        options: [
            'A source of information used to determine whether a test has passed or failed',
            'A tool that automatically generates and executes test cases',
            'The senior tester who approves the final test report',
            'The section of a test plan that lists all known project risks'
        ],
        answer: 0,
        explanation: 'A test oracle is any source used to decide if a test passed or failed. Examples include requirements specifications (SRS), design documents (SDD), similar existing systems, or subject-matter experts.'
    },
    {
        id: 'iso-29119-easy-7',
        standard: 'ISO/IEC/IEEE 29119',
        difficulty: 'easy',
        question: 'Why does ISO 29119 recommend risk-based testing instead of exhaustive testing?',
        options: [
            'Testing every possible input combination is completely impractical for real software',
            'Exhaustive testing is only permitted for safety-critical systems under Part 4',
            'Risk-based testing requires no planning documents and fewer testers',
            'Exhaustive testing is reserved for the final acceptance test phase only'
        ],
        answer: 0,
        explanation: 'Exhaustive testing would require an astronomically large number of test cases — for example, a program processing two 64-bit numbers would need 2¹²⁸ tests just for input combinations. Because this is impossible in practice, ISO 29119 recommends risk-based testing to focus effort where it matters most.'
    },
    {
        id: 'iso-29119-easy-8',
        standard: 'ISO/IEC/IEEE 29119',
        difficulty: 'easy',
        question: 'Which part of the ISO/IEC/IEEE 29119 series specifically covers test documentation and reporting?',
        options: [
            'Part 3',
            'Part 1',
            'Part 2',
            'Part 5'
        ],
        answer: 0,
        explanation: 'ISO/IEC/IEEE 29119-3 covers test documentation. It defines the templates and content requirements for documents such as test plans, test design specifications, test case specifications, test procedure specifications, and test reports.'
    },

    // ─── MEDIUM ───────────────────────────────────────────────────────────────
    {
        id: 'iso-29119-medium-1',
        standard: 'ISO/IEC/IEEE 29119',
        difficulty: 'medium',
        question: 'In the context of ISO/IEC/IEEE 29119, what does the output of a test design technique most directly support?',
        options: [
            'Deriving test conditions and test cases from the test basis',
            'Calculating the total number of defects remaining in the system',
            'Selecting which test level to execute next in the project',
            'Defining the test environment and tool configuration'
        ],
        answer: 0,
        explanation: 'A test design technique helps transform the test basis into concrete test conditions and test cases. Its purpose is to guide what should be tested and how coverage should be achieved.'
    },
    {
        id: 'iso-29119-medium-2',
        standard: 'ISO/IEC/IEEE 29119-5',
        difficulty: 'medium',
        question: 'Why is separating test data from test actions useful in keyword-driven testing?',
        options: [
            'It improves maintainability and reuse of test assets',
            'It automatically removes all defects from the system under test',
            'It eliminates the need for a dedicated test environment',
            'It guarantees 100% code coverage on every test run'
        ],
        answer: 0,
        explanation: 'Separating test data from test actions makes keyword-driven tests easier to maintain. The same action keyword can be reused with different input values, so changing test data does not require rewriting the underlying test logic.'
    },
    {
        id: 'iso-29119-medium-3',
        standard: 'ISO/IEC/IEEE 29119',
        difficulty: 'medium',
        question: 'What is the main purpose of test monitoring and control activities?',
        options: [
            'To track test progress and take corrective action when needed',
            'To select the visual format and layout of the test report',
            'To permanently close all open defects before release',
            'To approve or reject design decisions made by developers'
        ],
        answer: 0,
        explanation: 'Test monitoring and control means checking whether testing is progressing as planned and taking action when it is not. The team may adjust priorities, resources, or schedule when risks, defects, or delays appear.'
    },
    {
        id: 'iso-29119-medium-4',
        standard: 'ISO/IEC/IEEE 29119',
        difficulty: 'medium',
        question: 'What idea is prioritization based on in risk-based testing?',
        options: [
            'Areas with high failure probability or high impact are tested first',
            'Modules with the most recent code changes are always skipped',
            'Only the features preferred by the product owner are tested',
            'Alphabetical ordering of module names determines test priority'
        ],
        answer: 0,
        explanation: 'Risk-based testing gives priority to areas that are more likely to fail or would cause greater damage if they failed. This helps teams use limited testing time effectively by testing the most important risks first.'
    },
    {
        id: 'iso-29119-medium-5',
        standard: 'ISO/IEC/IEEE 29119-5',
        difficulty: 'medium',
        question: 'What is the main benefit of using parameters in a keyword table?',
        options: [
            'It allows the same keyword to run with different input data',
            'It restricts the keyword to a single browser or platform',
            'It makes all test execution manual instead of automated',
            'It forces every test run to produce an identical result'
        ],
        answer: 0,
        explanation: 'Parameters allow one keyword to work with different values. Instead of creating many nearly identical keywords, the same keyword can be executed with different users, inputs, expected values, or conditions.'
    },
    {
        id: 'iso-29119-medium-6',
        standard: 'ISO/IEC/IEEE 29119',
        difficulty: 'medium',
        question: 'What is the relationship between a test plan and a test strategy in ISO 29119?',
        options: [
            'The test strategy describes the testing approach and is a part of the test plan',
            'The test strategy is a higher-level document that contains the test plan',
            'They describe the same content but apply to different test levels',
            'The test strategy is written after testing ends to document what approach was used'
        ],
        answer: 0,
        explanation: 'In ISO 29119, the test strategy is the part of the test plan that describes the approach to testing for a specific project, test level, or test type. It typically covers test levels, techniques, regression strategy, and completion criteria.'
    },
    {
        id: 'iso-29119-medium-7',
        standard: 'ISO/IEC/IEEE 29119',
        difficulty: 'medium',
        question: 'Which test level focuses on verifying the interactions between already integrated components?',
        options: [
            'Integration testing',
            'Unit testing',
            'Acceptance testing',
            'System testing'
        ],
        answer: 0,
        explanation: 'Integration testing verifies the interfaces and interactions between components or systems that have already been unit-tested. It checks that the combined components work correctly together, not just individually.'
    },
    {
        id: 'iso-29119-medium-8',
        standard: 'ISO/IEC/IEEE 29119',
        difficulty: 'medium',
        question: 'In ISO 29119\'s W7 framework, "by WHO" refers to which aspect of the standard?',
        options: [
            'The roles involved in testing, such as test architect, test manager, and tester',
            'The list of mandatory test techniques defined in Part 4',
            'The organizations that have formally certified compliance with the standard',
            'The input documents that must exist before a test process can begin'
        ],
        answer: 0,
        explanation: 'In the W7 framework, "by WHO" refers to the testing roles defined in Appendix B of ISO 29119, including test architect, test manager, test designer, test automator, tester, test analyst, and specialist tester.'
    },

    // ─── HARD ─────────────────────────────────────────────────────────────────
    {
        id: 'iso-29119-hard-1',
        standard: 'ISO/IEC/IEEE 29119',
        difficulty: 'hard',
        question: 'Which is the best example of a test closure activity in ISO/IEC/IEEE 29119?',
        options: [
            'Archiving test assets and recording lessons learned',
            'Closing all defect records without reviewing their evidence',
            'Deleting the test environment immediately after the last test run',
            'Reporting only the test cases that passed to stakeholders'
        ],
        answer: 0,
        explanation: 'Test closure happens after test execution is completed. Good closure includes archiving useful test assets, summarizing results, recording lessons learned, and preserving information that can improve future testing.'
    },
    {
        id: 'iso-29119-hard-2',
        standard: 'ISO/IEC/IEEE 29119-5',
        difficulty: 'hard',
        question: 'In keyword-driven testing, which statement best describes a "high-level keyword"?',
        options: [
            'It combines smaller technical keywords into a business-level workflow',
            'It is a keyword that can only be executed from the command line',
            'It is a keyword that must never accept parameters according to the standard',
            'It always corresponds to exactly one low-level user interface interaction'
        ],
        answer: 0,
        explanation: 'A high-level keyword represents a larger business workflow by combining smaller technical keywords. For example, a keyword "complete purchase" could internally call lower-level steps for login, item selection, payment, and confirmation.'
    },
    {
        id: 'iso-29119-hard-3',
        standard: 'ISO/IEC/IEEE 29119',
        difficulty: 'hard',
        question: 'How is the concept of "test basis" best explained in ISO 29119?',
        options: [
            'The source material, such as requirements or designs, used for test analysis and design',
            'The minimum pass rate that must be achieved before testing can stop',
            'The baseline version of the software against which regression tests are run',
            'The set of test tools and infrastructure used to execute the test suite'
        ],
        answer: 0,
        explanation: 'The test basis is the source material used to analyze and design tests. It can include requirements, user stories, designs, models, risks, or any other information that explains what the system should do.'
    },
    {
        id: 'iso-29119-hard-4',
        standard: 'ISO/IEC/IEEE 29119-5',
        difficulty: 'hard',
        question: 'In keyword-driven testing, what is the role of an adapter or automation layer?',
        options: [
            'It maps abstract keywords to real tool or system commands',
            'It generates the keyword table automatically from requirements',
            'It enforces that all keywords follow the same naming convention',
            'It acts as the single source of all test data used in the project'
        ],
        answer: 0,
        explanation: 'An adapter or automation layer connects abstract keywords to real implementation actions. It translates a keyword such as "enter customer details" into tool commands, API calls, UI interactions, or other executable steps.'
    },
    {
        id: 'iso-29119-hard-5',
        standard: 'ISO/IEC/IEEE 29119',
        difficulty: 'hard',
        question: 'Why is traceability important in test management according to ISO 29119?',
        options: [
            'It allows tests to be linked to requirements, risks, and results for coverage evidence',
            'It enables the test tool to automatically reorder test cases by priority',
            'It ensures that defects are assigned to the developer who introduced them',
            'It reduces testing time by identifying which test cases can be skipped safely'
        ],
        answer: 0,
        explanation: 'Traceability links tests to requirements, risks, defects, and results. Teams can see why a test exists, what it covers, which risks are addressed, and what evidence supports the final quality assessment.'
    },
    {
        id: 'iso-29119-hard-6',
        standard: 'ISO/IEC/IEEE 29119-1',
        difficulty: 'hard',
        question: 'What is a "test item" as defined in ISO/IEC/IEEE 29119-1?',
        options: [
            'A work product or object that is the subject of testing',
            'A single executable step within a test case procedure',
            'A reusable keyword representing a test action in keyword-driven testing',
            'The expected output defined for a specific test input in a test case'
        ],
        answer: 0,
        explanation: 'In ISO 29119-1, a test item (also called a test object) is simply the work product to be tested — for example, a software component, system, or document that is being evaluated by the test process.'
    },
    {
        id: 'iso-29119-hard-7',
        standard: 'ISO/IEC/IEEE 29119-4',
        difficulty: 'hard',
        question: 'Which category of test design technique does boundary value analysis belong to in ISO 29119-4?',
        options: [
            'Specification-based techniques',
            'Structure-based techniques',
            'Experience-based techniques',
            'Grey-box techniques'
        ],
        answer: 0,
        explanation: 'Boundary value analysis is a specification-based technique because it derives test cases from the specification of the software\'s expected behavior. Other specification-based techniques include equivalence partitioning, decision table testing, and state transition testing.'
    },
    {
        id: 'iso-29119-hard-8',
        standard: 'ISO/IEC/IEEE 29119',
        difficulty: 'hard',
        question: 'What distinguishes the role of a test architect from a test manager in ISO 29119?',
        options: [
            'The test architect defines strategy and environment; the test manager plans and controls the dynamic test process',
            'The test architect executes tests and logs defects; the test manager writes the test cases',
            'The test manager defines the overall test strategy; the test architect handles regression test execution',
            'Both roles are identical in scope but used in organizations of different sizes'
        ],
        answer: 0,
        explanation: 'According to ISO 29119 Appendix B, the test architect defines the test strategy, test environment, and organizational test requirements. The test manager develops, manages, and controls the test management process, including planning and controlling the dynamic test process.'
    }
];

export const PRIZE_LADDER = [
    1000,
    2000,
    5000,
    10000,
    20000,
    50000,
    100000,
    250000,
    500000,
    1000000
];
