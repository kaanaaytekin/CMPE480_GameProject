export const QUESTIONS = [
    {
        id: 'iso-29119-easy-1',
        standard: 'ISO/IEC/IEEE 29119',
        difficulty: 'easy',
        question: 'What does the ISO/IEC/IEEE 29119 family of standards mainly focus on?',
        options: [
            'Software testing processes and documentation',
            'Database schema design',
            'Network cabling standards',
            'User interface color palettes'
        ],
        answer: 0,
        explanation: 'ISO/IEC/IEEE 29119 is a family of standards for software testing. Its focus is not database design, networking, or interface styling; it describes testing processes, documentation, test design techniques, and related testing practices that help teams plan, perform, and manage testing consistently.'
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
            'Cryptographic key management'
        ],
        answer: 0,
        explanation: 'ISO/IEC/IEEE 29119-5 specifically addresses keyword-driven testing. In this approach, tests are built from reusable keywords that represent actions or business steps, making automated and manual test assets easier to structure, reuse, and maintain.'
    },
    {
        id: 'iso-29119-easy-3',
        standard: 'ISO/IEC/IEEE 29119',
        difficulty: 'easy',
        question: 'What is the main purpose of the expected result field in a test case?',
        options: [
            'To define the correct behavior when the test is executed',
            'To calculate the tester’s daily working hours',
            'To select the compiler optimization level',
            'To increase server disk capacity'
        ],
        answer: 0,
        explanation: 'The expected result states what the system should do when a test is executed correctly. It is essential because the tester compares the actual result with the expected result to decide whether the test passed or failed.'
    },
    {
        id: 'iso-29119-easy-4',
        standard: 'ISO/IEC/IEEE 29119',
        difficulty: 'easy',
        question: 'What does a test plan typically define?',
        options: [
            'Test scope, approach, resources, and schedule',
            'Only the application logo size',
            'The product selling price',
            'The operating system kernel code'
        ],
        answer: 0,
        explanation: 'A test plan defines how testing will be organized and controlled. It normally includes the scope of testing, the chosen approach, needed resources, schedule, responsibilities, risks, and other management information.'
    },
    {
        id: 'iso-29119-easy-5',
        standard: 'ISO/IEC/IEEE 29119-5',
        difficulty: 'easy',
        question: 'In keyword-driven testing, what does a “keyword” usually represent?',
        options: [
            'A reusable test action or operation step',
            'Always a reserved word in a programming language',
            'Only the name of the tester',
            'A primary key in a database'
        ],
        answer: 0,
        explanation: 'In keyword-driven testing, a keyword represents a reusable test action, operation, or business step. For example, a keyword might represent logging in, entering data, or checking a displayed result. The keyword can then be reused across many test cases.'
    },
    {
        id: 'iso-29119-medium-1',
        standard: 'ISO/IEC/IEEE 29119',
        difficulty: 'medium',
        question: 'In the context of ISO/IEC/IEEE 29119, what does the output of a test design technique most directly support?',
        options: [
            'Deriving test conditions and test cases',
            'Changing the license of the source code',
            'Selecting the CPU architecture',
            'Designing a corporate email signature'
        ],
        answer: 0,
        explanation: 'A test design technique helps transform the test basis into concrete test conditions and test cases. Its purpose is to guide what should be tested and how coverage should be achieved, not to change unrelated project settings such as licenses or hardware choices.'
    },
    {
        id: 'iso-29119-medium-2',
        standard: 'ISO/IEC/IEEE 29119-5',
        difficulty: 'medium',
        question: 'Why is separating test data from test actions useful in keyword-driven testing?',
        options: [
            'It improves maintainability and reuse',
            'It automatically removes all defects',
            'It eliminates the need for a test environment',
            'It always makes code coverage 100%'
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
            'Only to choose the font of the test report',
            'To delete the application’s production data',
            'To cancel all decisions made by the design team'
        ],
        answer: 0,
        explanation: 'Test monitoring and control means checking whether testing is progressing as planned and taking action when it is not. For example, the team may adjust priorities, resources, or schedule when risks, defects, or delays appear.'
    },
    {
        id: 'iso-29119-medium-4',
        standard: 'ISO/IEC/IEEE 29119',
        difficulty: 'medium',
        question: 'What idea is prioritization based on in risk-based testing?',
        options: [
            'Areas with high probability or high impact are tested first',
            'Files with the shortest names are tested first',
            'Only the modules preferred by the developer are tested',
            'Alphabetical order is always sufficient for testing'
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
            'It allows the same keyword to run with different data',
            'It locks the keyword to only one browser',
            'It makes test execution manual',
            'It forces all tests to produce the same result'
        ],
        answer: 0,
        explanation: 'Parameters allow one keyword to work with different values. Instead of creating many nearly identical keywords, the same keyword can be executed with different users, inputs, expected values, or conditions.'
    },
    {
        id: 'iso-29119-hard-1',
        standard: 'ISO/IEC/IEEE 29119',
        difficulty: 'hard',
        question: 'Which is the best example of a test closure activity in ISO/IEC/IEEE 29119?',
        options: [
            'Archiving test assets and recording lessons learned',
            'Closing all defect records without evidence',
            'Removing the test environment before planning',
            'Reporting only successful tests'
        ],
        answer: 0,
        explanation: 'Test closure happens after test execution activities are completed. Good closure includes archiving useful test assets, summarizing results, recording lessons learned, and preserving information that can improve future testing.'
    },
    {
        id: 'iso-29119-hard-2',
        standard: 'ISO/IEC/IEEE 29119-5',
        difficulty: 'hard',
        question: 'In keyword-driven testing, which statement best describes a “high-level keyword”?',
        options: [
            'It can combine smaller technical keywords into a business workflow',
            'It only runs in the operating system command line',
            'Accepting parameters violates the standard',
            'It always corresponds to a single mouse click'
        ],
        answer: 0,
        explanation: 'A high-level keyword can represent a larger business workflow by combining smaller technical keywords. For example, a business-level keyword such as complete purchase could internally call lower-level steps for login, item selection, payment, and confirmation.'
    },
    {
        id: 'iso-29119-hard-3',
        standard: 'ISO/IEC/IEEE 29119',
        difficulty: 'hard',
        question: 'How is the concept of test basis best explained?',
        options: [
            'Sources such as requirements, designs, or risks used for test analysis and design',
            'The physical desk where tests are executed',
            'Only the license file of the test tool',
            'The place where the user password is stored'
        ],
        answer: 0,
        explanation: 'The test basis is the source material used to analyze and design tests. It can include requirements, user stories, designs, models, risks, regulations, or any other information that explains what the system should do.'
    },
    {
        id: 'iso-29119-hard-4',
        standard: 'ISO/IEC/IEEE 29119-5',
        difficulty: 'hard',
        question: 'In keyword-driven testing, what is the role of an adapter or automation layer most similar to?',
        options: [
            'A layer that maps abstract keywords to real tool or system commands',
            'A visual theme that only changes the report title',
            'A mandatory module that makes tests non-standard',
            'The only source that randomly generates all test data'
        ],
        answer: 0,
        explanation: 'An adapter or automation layer connects abstract keywords to real implementation actions. It translates a keyword such as enter customer details into tool commands, API calls, UI interactions, or other executable steps.'
    },
    {
        id: 'iso-29119-hard-5',
        standard: 'ISO/IEC/IEEE 29119',
        difficulty: 'hard',
        question: 'Why is traceability important in test management?',
        options: [
            'It allows tests to be linked to requirements, risks, and results',
            'It makes tests look more colorful',
            'It automatically fixes all defects',
            'It reduces test duration to zero in every project'
        ],
        answer: 0,
        explanation: 'Traceability links tests to requirements, risks, defects, and results. This matters because teams can see why a test exists, what it covers, which risks are addressed, and what evidence supports the final quality assessment.'
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
