export const QUESTIONS = [

    // ════════════════════════════════════════════════════════════════
    // EASY — MCQ (20)
    // ════════════════════════════════════════════════════════════════
    {
        id: 'e-mcq-1', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'What does the ISO/IEC/IEEE 29119 family of standards mainly focus on?',
        options: ['Software testing processes and documentation', 'Database schema design and normalization', 'Network infrastructure and cabling standards', 'User interface design guidelines'],
        answer: 0,
        explanation: 'ISO/IEC/IEEE 29119 is a family of standards for software testing. It describes testing processes, documentation, test design techniques, and related practices that help teams plan, perform, and manage testing consistently.'
    },
    {
        id: 'e-mcq-2', standard: 'ISO/IEC/IEEE 29119-5', difficulty: 'easy',
        question: 'ISO/IEC/IEEE 29119-5 is most closely related to which testing approach?',
        options: ['Keyword-driven testing', 'White-box mutation testing', 'Hardware stress testing', 'Model-based testing'],
        answer: 0,
        explanation: 'ISO/IEC/IEEE 29119-5 specifically addresses keyword-driven testing. In this approach, tests are built from reusable keywords that represent actions or business steps, making test assets easier to structure, reuse, and maintain.'
    },
    {
        id: 'e-mcq-3', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'What is the main purpose of the expected result field in a test case?',
        options: ['To define the correct behavior when the test is executed', 'To list all preconditions that must be met before the test', 'To record which tester is responsible for execution', 'To specify the test environment configuration needed'],
        answer: 0,
        explanation: 'The expected result states what the system should do when a test is executed correctly. The tester compares the actual result with the expected result to decide whether the test passed or failed.'
    },
    {
        id: 'e-mcq-4', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'What does a test plan typically define?',
        options: ['Test scope, approach, resources, and schedule', 'Only the list of defects found during testing', 'The source code structure of the application', 'The deployment pipeline for the production release'],
        answer: 0,
        explanation: 'A test plan defines how testing will be organized and controlled. It normally includes the scope of testing, the chosen approach, needed resources, schedule, responsibilities, risks, and other management information.'
    },
    {
        id: 'e-mcq-5', standard: 'ISO/IEC/IEEE 29119-5', difficulty: 'easy',
        question: 'In keyword-driven testing, what does a "keyword" usually represent?',
        options: ['A reusable test action or operation step', 'A reserved word in the programming language used', 'A unique identifier assigned to each test case', 'A primary key column in the test database'],
        answer: 0,
        explanation: 'In keyword-driven testing, a keyword represents a reusable test action, operation, or business step. For example, a keyword might represent logging in or checking a displayed result. The keyword can then be reused across many test cases.'
    },
    {
        id: 'e-mcq-6', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'What is a test oracle in ISO/IEC/IEEE 29119?',
        options: ['A source of information used to determine whether a test has passed or failed', 'A tool that automatically generates and executes test cases', 'The senior tester who approves the final test report', 'The section of a test plan that lists all known project risks'],
        answer: 0,
        explanation: 'A test oracle is any source used to decide if a test passed or failed. Examples include requirements specifications (SRS), design documents (SDD), similar existing systems, or subject-matter experts.'
    },
    {
        id: 'e-mcq-7', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'Why does ISO 29119 recommend risk-based testing instead of exhaustive testing?',
        options: ['Testing every possible input combination is completely impractical for real software', 'Exhaustive testing is only permitted for safety-critical systems under Part 4', 'Risk-based testing requires no planning documents and fewer testers', 'Exhaustive testing is reserved for the final acceptance test phase only'],
        answer: 0,
        explanation: 'Exhaustive testing would require an astronomically large number of test cases. For example, a program processing two 64-bit numbers would need 2¹²⁸ tests just for input combinations. Because this is impossible in practice, ISO 29119 recommends risk-based testing.'
    },
    {
        id: 'e-mcq-8', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'Which part of the ISO/IEC/IEEE 29119 series specifically covers test documentation and reporting?',
        options: ['Part 3', 'Part 1', 'Part 2', 'Part 5'],
        answer: 0,
        explanation: 'ISO/IEC/IEEE 29119-3 covers test documentation. It defines templates and content requirements for documents such as test plans, test design specifications, test case specifications, test procedure specifications, and test reports.'
    },
    {
        id: 'e-mcq-9', standard: 'ISO/IEC/IEEE 29119-1', difficulty: 'easy',
        question: 'What is a "test item" as defined in ISO/IEC/IEEE 29119?',
        options: ['A work product or object that is the subject of testing', 'A single step within a test procedure', 'A keyword used in keyword-driven testing', 'The expected output defined for a specific test case input'],
        answer: 0,
        explanation: 'A test item (also called a test object) is the work product to be tested — for example, a software component, system, or document that is being evaluated by the test process.'
    },
    {
        id: 'e-mcq-10', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'Which role in ISO 29119 Appendix B "develops test design artefacts"?',
        options: ['Test designer', 'Test architect', 'Test manager', 'Test automator'],
        answer: 0,
        explanation: 'The test designer is specifically described in ISO 29119 Appendix B as the role that develops test design artefacts — deriving test conditions and creating test cases from the test basis.'
    },
    {
        id: 'e-mcq-11', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'Which of the following is an example of STATIC testing?',
        options: ['Reading and reviewing a requirements document for errors', 'Executing a test case and comparing actual vs expected results', 'Running automated regression tests against the system', 'Measuring system response time under load'],
        answer: 0,
        explanation: 'Static testing examines work products without executing the software. Reviews of requirements, designs, or code are classic examples. Dynamic testing, by contrast, requires running the software.'
    },
    {
        id: 'e-mcq-12', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'How many main parts does the ISO/IEC/IEEE 29119 series consist of?',
        options: ['5', '3', '4', '7'],
        answer: 0,
        explanation: 'The ISO/IEC/IEEE 29119 series consists of 5 parts: Part 1 (Concepts), Part 2 (Processes), Part 3 (Documentation), Part 4 (Test Techniques), and Part 5 (Keyword-Driven Testing).'
    },
    {
        id: 'e-mcq-13', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'Testing is considered a subset of which two broader quality activities?',
        options: ['Quality control and quality assurance', 'Verification and system design', 'Risk analysis and release planning', 'Code review and deployment automation'],
        answer: 0,
        explanation: 'According to ISO 29119, testing contributes to both quality control (finding defects) and quality assurance (ensuring processes are followed). Testing also supports verification and validation activities.'
    },
    {
        id: 'e-mcq-14', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'Which test level confirms that the fully integrated system meets its specified requirements?',
        options: ['System testing', 'Unit testing', 'Integration testing', 'Regression testing'],
        answer: 0,
        explanation: 'System testing tests the complete, fully integrated system against its requirements. It is distinct from unit testing (individual components) and integration testing (interactions between components).'
    },
    {
        id: 'e-mcq-15', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'Which ISO/IEC/IEEE 29119 part defines the TEST PROCESSES?',
        options: ['Part 2', 'Part 1', 'Part 3', 'Part 4'],
        answer: 0,
        explanation: 'ISO/IEC/IEEE 29119-2 defines the test processes, covering the organizational test process, test management process, and dynamic test process with their inputs and outputs.'
    },
    {
        id: 'e-mcq-16', standard: 'ISO/IEC/IEEE 29119-1', difficulty: 'easy',
        question: 'According to ISO 29119-1, a test case is a set of:',
        options: ['Preconditions, inputs, and expected results', 'Keywords, parameters, and execution steps', 'Risks, priorities, and test levels', 'Roles, responsibilities, and schedules'],
        answer: 0,
        explanation: 'A test case is defined as a set of preconditions (what must be true before the test), inputs (what is provided to the system), and expected results (what the system should produce), developed to drive the execution of a test item.'
    },
    {
        id: 'e-mcq-17', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'Which of the following is NOT a test level defined in ISO 29119?',
        options: ['Debugging', 'Unit testing', 'System testing', 'Acceptance testing'],
        answer: 0,
        explanation: 'Debugging is a development activity — finding and fixing the root cause of a defect — not a test level. The ISO 29119 test levels are unit, integration, system, system integration, and acceptance testing.'
    },
    {
        id: 'e-mcq-18', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'What does the W7 framework in ISO 29119 answer?',
        options: ['Why, for whom, by who, when, what, what\'s in, what\'s out', 'Who, what, where, when, why, how, how much', 'Requirements, risks, processes, techniques, roles, artefacts, tools', 'What to test, when to start, how long, who approves, what to fix'],
        answer: 0,
        explanation: 'The W7 framework structures ISO 29119 around seven "W" questions: WHY (purpose), for WHOM (all organisations), by WHO (roles), WHEN (during any lifecycle), and WHAT / WHAT\'s In / WHAT\'s Out (processes, inputs, and outputs).'
    },
    {
        id: 'e-mcq-19', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'Which role in ISO 29119 performs testing for specific quality characteristics such as security or usability?',
        options: ['Specialist tester', 'Test architect', 'Test analyst', 'Test manager'],
        answer: 0,
        explanation: 'The specialist tester (Appendix B) performs testing for specific quality characteristics — such as security, usability, accessibility, or performance — requiring specialist knowledge beyond general functional testing.'
    },
    {
        id: 'e-mcq-20', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'Which activity is characteristic of TEST CLOSURE in ISO 29119?',
        options: ['Archiving test assets and recording lessons learned', 'Running all test cases and logging actual results', 'Setting up the test environment with tools and data', 'Deriving test conditions from the test basis'],
        answer: 0,
        explanation: 'Test closure is the final phase of testing. It involves archiving useful test assets, confirming all defects are resolved or accepted, capturing lessons learned, and producing a test completion report.'
    },

    // ════════════════════════════════════════════════════════════════
    // EASY — CASE STUDY (FITB) (6)
    // ════════════════════════════════════════════════════════════════
    {
        id: 'e-case-1', type: 'fitb', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'CASE: A software team is about to start testing a new payroll application. Their manager asks them to write down what they plan to test, who will do it, the schedule, and the risks involved. What ISO 29119 document should they produce?',
        acceptedAnswers: ['test plan', 'a test plan'],
        answer: 0,
        explanation: 'The test plan is the primary management document in ISO 29119. It records the scope of testing, the approach, resource allocations, the schedule, responsibilities, and known risks before testing begins.'
    },
    {
        id: 'e-case-2', type: 'fitb', standard: 'ISO/IEC/IEEE 29119-4', difficulty: 'easy',
        question: 'CASE: A tester is designing test cases for a user login form. She groups all valid passwords into one category and all invalid passwords into another, then picks one representative value from each group. What test design technique is she applying?',
        acceptedAnswers: ['equivalence partitioning', 'equivalence partition', 'equivalence class partitioning', 'equivalence class testing'],
        answer: 0,
        explanation: 'Equivalence partitioning divides inputs into partitions where all values in a partition are expected to behave the same way. Testing one representative from each partition is assumed to be sufficient coverage for that group.'
    },
    {
        id: 'e-case-3', type: 'fitb', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'CASE: A development team holds a meeting where all members read through the requirements specification together, identifying ambiguities and inconsistencies — without running any software. What type of testing activity are they performing?',
        acceptedAnswers: ['static testing', 'static', 'review', 'static analysis', 'walkthrough'],
        answer: 0,
        explanation: 'Reading and examining work products without executing the software is static testing. Reviews — including walkthroughs and inspections — are a core form of static testing in ISO 29119.'
    },
    {
        id: 'e-case-4', type: 'fitb', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'CASE: A junior tester is running tests on a single function that calculates the tax rate for an invoice. The function is tested completely alone, with no connection to the database or other parts of the system. Which test level is being applied?',
        acceptedAnswers: ['unit testing', 'unit'],
        answer: 0,
        explanation: 'Unit testing (also called component testing) tests individual software components or functions in isolation from the rest of the system.'
    },
    {
        id: 'e-case-5', type: 'fitb', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'CASE: After a critical bug fix was deployed, the test team re-ran all previously passing test cases to confirm the fix did not accidentally break other features. What type of testing is this?',
        acceptedAnswers: ['regression testing', 'regression'],
        answer: 0,
        explanation: 'Regression testing re-executes existing tests after changes are made to verify that existing functionality has not been broken by the modification.'
    },
    {
        id: 'e-case-6', type: 'fitb', standard: 'ISO/IEC/IEEE 29119-5', difficulty: 'easy',
        question: 'CASE: OdiBuddy\'s tester John spent 16 hours a day performing tests manually but never created any automated or reusable test structures. When he unexpectedly passed away, the company could not continue testing and went bankrupt. According to ISO 29119-5, what testing approach could have made tests reusable and automation-ready?',
        acceptedAnswers: ['keyword-driven testing', 'keyword driven testing', 'kdt', 'keyword-driven', 'keyword driven'],
        answer: 0,
        explanation: 'ISO 29119-5\'s keyword-driven testing (KDT) makes tests reusable and automation-ready by building test cases from named keywords. This ensures testing knowledge is not locked in a single person.'
    },

    // ════════════════════════════════════════════════════════════════
    // EASY — MATCHING (8)
    // ════════════════════════════════════════════════════════════════
    {
        id: 'e-match-1', type: 'match', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'Match each ISO/IEC/IEEE 29119 part number to its focus area.',
        pairs: [
            { left: 'Part 1', right: 'Concepts & definitions' },
            { left: 'Part 2', right: 'Test processes' },
            { left: 'Part 3', right: 'Test documentation' },
            { left: 'Part 4', right: 'Test design techniques' },
        ],
        explanation: 'ISO 29119 is divided into parts: Part 1 defines terminology, Part 2 covers test processes, Part 3 provides documentation templates, and Part 4 catalogues test design techniques.'
    },
    {
        id: 'e-match-2', type: 'match', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'Match each test document to its main purpose.',
        pairs: [
            { left: 'Test Plan', right: 'Defines scope, approach & schedule' },
            { left: 'Test Case', right: 'Specifies inputs & expected results' },
            { left: 'Test Report', right: 'Summarises testing outcomes' },
            { left: 'Test Procedure', right: 'Step-by-step execution instructions' },
        ],
        explanation: 'ISO 29119-3 defines templates for all these documents. The test plan governs the project; test cases and procedures support execution; the test report communicates results to stakeholders.'
    },
    {
        id: 'e-match-3', type: 'match', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'Match each ISO 29119 role to its primary responsibility.',
        pairs: [
            { left: 'Tester', right: 'Develops test deliverables and runs dynamic tests' },
            { left: 'Test analyst', right: 'Analyses test results for correctness and issues' },
            { left: 'Test automator', right: 'Implements test cases and scripts in automation' },
            { left: 'Test designer', right: 'Derives test conditions and creates test cases' },
        ],
        explanation: 'ISO 29119 Appendix B defines distinct roles. Each has a specific focus: the tester executes; the analyst reviews results; the automator scripts; the designer derives test cases.'
    },
    {
        id: 'e-match-4', type: 'match', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'Match each ISO 29119 concept to its definition.',
        pairs: [
            { left: 'Test item', right: 'Work product to be tested' },
            { left: 'Test oracle', right: 'Source to judge pass or fail' },
            { left: 'Test case', right: 'Set of preconditions, inputs, expected results' },
            { left: 'Test strategy', right: 'Part of the test plan describing the approach' },
        ],
        explanation: 'These are fundamental ISO 29119-1 terms. The test item is what is tested; the oracle judges results; a test case defines how to test; the strategy describes how testing is approached.'
    },
    {
        id: 'e-match-5', type: 'match', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'Match each test level to its scope.',
        pairs: [
            { left: 'Unit testing', right: 'Individual component in isolation' },
            { left: 'Integration testing', right: 'Interactions between combined components' },
            { left: 'System testing', right: 'Complete integrated system' },
            { left: 'Acceptance testing', right: 'Validation against user requirements' },
        ],
        explanation: 'The four main test levels progress from the smallest scope (individual units) up to the full system validated by end-users or stakeholders.'
    },
    {
        id: 'e-match-6', type: 'match', standard: 'ISO/IEC/IEEE 29119-5', difficulty: 'easy',
        question: 'Match each keyword-driven testing concept to its meaning.',
        pairs: [
            { left: 'Keyword', right: 'Reusable test action or step' },
            { left: 'High-level keyword', right: 'Business workflow combining smaller keywords' },
            { left: 'Low-level keyword', right: 'Single technical or UI interaction' },
            { left: 'Keyword parameter', right: 'Makes a keyword work with different data values' },
        ],
        explanation: 'ISO 29119-5 defines keywords at different abstraction levels. High-level keywords represent business workflows; low-level keywords represent individual technical steps; parameters make keywords data-driven.'
    },
    {
        id: 'e-match-7', type: 'match', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'Match each W7 framework element to its meaning in ISO 29119.',
        pairs: [
            { left: 'WHY', right: 'Define internationally agreed testing standards' },
            { left: 'for WHOM', right: 'All organisations, all life cycles, all software' },
            { left: 'by WHO', right: 'Roles listed in Appendix B' },
            { left: "WHAT's Out", right: 'Outputs generated by test processes' },
        ],
        explanation: 'The W7 framework answers seven "W" questions. WHY states the purpose; for WHOM defines the audience; by WHO names the roles; WHAT\'s Out identifies the artefacts produced.'
    },
    {
        id: 'e-match-8', type: 'match', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'Match each static testing activity to its description.',
        pairs: [
            { left: 'Review', right: 'Examining work products with peers' },
            { left: 'Static analysis', right: 'Automated tool analysis without execution' },
            { left: 'Model verification', right: 'Checking consistency of models' },
            { left: 'Walkthrough', right: 'Author-led review of a work product' },
        ],
        explanation: 'Static testing in ISO 29119 encompasses reviews (ISO/IEC 20246), static analysis tools, and model verification — all performed without executing the software.'
    },

    // ════════════════════════════════════════════════════════════════
    // EASY — TRUE / FALSE (10)
    // ════════════════════════════════════════════════════════════════
    {
        id: 'e-tf-1', type: 'tf', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'True or False: ISO/IEC/IEEE 29119 Part 4 defines test design techniques such as equivalence partitioning and boundary value analysis.',
        options: ['True', 'False'], answer: 0,
        explanation: 'ISO/IEC/IEEE 29119-4 is dedicated entirely to test design techniques. It covers specification-based techniques (e.g. equivalence partitioning, boundary value analysis), structure-based techniques, experience-based techniques, and grey-box techniques.'
    },
    {
        id: 'e-tf-2', type: 'tf', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'True or False: According to ISO 29119, a test plan is a work product produced only after all testing activities are complete.',
        options: ['True', 'False'], answer: 1,
        explanation: 'A test plan is produced BEFORE testing begins, not after. It defines how testing will be organized and controlled — covering scope, approach, resources, schedule, and responsibilities — so teams can plan ahead.'
    },
    {
        id: 'e-tf-3', type: 'tf', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'True or False: ISO 29119 applies only to large organizations with dedicated test teams.',
        options: ['True', 'False'], answer: 1,
        explanation: 'The W7 framework states the standard applies to "all organizations" — regardless of size, development life cycle, or type of software. It is designed to be scalable from small teams to large enterprises.'
    },
    {
        id: 'e-tf-4', type: 'tf', standard: 'ISO/IEC/IEEE 29119-1', difficulty: 'easy',
        question: 'True or False: According to ISO 29119-1, a test oracle can be a subject-matter expert.',
        options: ['True', 'False'], answer: 0,
        explanation: 'A test oracle is "a source of information to determine if a test has passed or failed." Valid examples explicitly include SRS, SDD, similar existing systems, and experts — confirming this statement is true.'
    },
    {
        id: 'e-tf-5', type: 'tf', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'True or False: ISO 29119 recommends exhaustive testing as the primary approach for all software projects.',
        options: ['True', 'False'], answer: 1,
        explanation: 'ISO 29119 explicitly states that exhaustive testing is impractical for any real software. Instead it recommends risk-based testing to focus effort where it matters most.'
    },
    {
        id: 'e-tf-6', type: 'tf', standard: 'ISO/IEC/IEEE 29119-5', difficulty: 'easy',
        question: 'True or False: ISO 29119-5 specifically addresses keyword-driven testing.',
        options: ['True', 'False'], answer: 0,
        explanation: 'Part 5 of the ISO/IEC/IEEE 29119 series is entirely dedicated to keyword-driven testing (KDT), defining keywords, test cases composed from keywords, parameters, and the implementation framework.'
    },
    {
        id: 'e-tf-7', type: 'tf', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'True or False: Static testing requires the software to be executed.',
        options: ['True', 'False'], answer: 1,
        explanation: 'Static testing examines work products without executing the software. Activities such as reviews, walkthroughs, inspections, and static analysis are all performed on artefacts rather than running code.'
    },
    {
        id: 'e-tf-8', type: 'tf', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'True or False: Risk-based testing prioritises test effort according to the likelihood and impact of potential failures.',
        options: ['True', 'False'], answer: 0,
        explanation: 'In risk-based testing (recommended by ISO 29119), areas with high probability of failure and/or high impact if they fail are tested first, making efficient use of available testing time and resources.'
    },
    {
        id: 'e-tf-9', type: 'tf', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'True or False: According to ISO 29119 Appendix B, the tester role is responsible for defining the overall test strategy.',
        options: ['True', 'False'], answer: 1,
        explanation: 'Defining the test strategy is the responsibility of the test architect, not the tester. The tester "develops test deliverables and completes the processes associated with the dynamic test process."'
    },
    {
        id: 'e-tf-10', type: 'tf', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'True or False: According to ISO 29119, a project may have more than one test plan.',
        options: ['True', 'False'], answer: 0,
        explanation: 'A project can have a master test plan plus additional test level plans (e.g., a system test plan or a performance test plan). The standard explicitly notes this possibility in the definition of test plan.'
    },

    // ════════════════════════════════════════════════════════════════
    // EASY — FILL IN THE BLANK (6)
    // ════════════════════════════════════════════════════════════════
    {
        id: 'e-fitb-1', type: 'fitb', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'The document that defines the test scope, approach, resources, and schedule is called a test ___.',
        acceptedAnswers: ['plan', 'test plan'],
        answer: 0,
        explanation: 'The test plan is the key management document in ISO 29119. It captures the overall strategy, scope, resources, schedule, and responsibilities for a testing effort.'
    },
    {
        id: 'e-fitb-2', type: 'fitb', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'ISO/IEC/IEEE 29119 Part ___ specifically covers test documentation, including templates for test plans, test cases, and test reports.',
        acceptedAnswers: ['3', 'three', 'part 3', 'part three'],
        answer: 0,
        explanation: 'ISO/IEC/IEEE 29119-3 defines templates and content requirements for all key test documents: test plans, test design specifications, test case specifications, test procedure specifications, and test reports.'
    },
    {
        id: 'e-fitb-3', type: 'fitb', standard: 'ISO/IEC/IEEE 29119-1', difficulty: 'easy',
        question: 'A source of information used to determine whether a test has passed or failed is called a test ___.',
        acceptedAnswers: ['oracle', 'test oracle'],
        answer: 0,
        explanation: 'The test oracle is any source (SRS, SDD, similar systems, or experts) that provides the correct expected behavior against which test results are compared.'
    },
    {
        id: 'e-fitb-4', type: 'fitb', standard: 'ISO/IEC/IEEE 29119-4', difficulty: 'easy',
        question: 'The test design technique that divides input values into groups where all values in a group behave the same way is called ___ partitioning.',
        acceptedAnswers: ['equivalence', 'equivalence class', 'equivalence-class'],
        answer: 0,
        explanation: 'Equivalence partitioning reduces the number of test cases by assuming one representative from each partition is sufficient to detect defects for that entire group.'
    },
    {
        id: 'e-fitb-5', type: 'fitb', standard: 'ISO/IEC/IEEE 29119-5', difficulty: 'easy',
        question: 'ISO 29119 Part 5 focuses on ___-driven testing.',
        acceptedAnswers: ['keyword', 'keyword driven', 'keyword-driven'],
        answer: 0,
        explanation: 'ISO/IEC/IEEE 29119-5 is dedicated to keyword-driven testing, where test cases are composed from reusable keywords representing test actions or business steps.'
    },
    {
        id: 'e-fitb-6', type: 'fitb', standard: 'ISO/IEC/IEEE 29119', difficulty: 'easy',
        question: 'The impractical approach of testing every possible input combination in all possible states is called ___ testing.',
        acceptedAnswers: ['exhaustive', 'exhaustive testing'],
        answer: 0,
        explanation: 'Exhaustive testing is theoretically complete but practically impossible for any real software. ISO 29119 recommends risk-based testing as a practical alternative.'
    },

    // ════════════════════════════════════════════════════════════════
    // MEDIUM — MCQ (20)
    // ════════════════════════════════════════════════════════════════
    {
        id: 'm-mcq-1', standard: 'ISO/IEC/IEEE 29119', difficulty: 'medium',
        question: 'In the context of ISO/IEC/IEEE 29119, what does the output of a test design technique most directly support?',
        options: ['Deriving test conditions and test cases from the test basis', 'Calculating the total number of defects remaining in the system', 'Selecting which test level to execute next in the project', 'Defining the test environment and tool configuration'],
        answer: 0,
        explanation: 'A test design technique transforms the test basis into concrete test conditions and test cases. Its purpose is to guide what should be tested and how coverage should be achieved.'
    },
    {
        id: 'm-mcq-2', standard: 'ISO/IEC/IEEE 29119-5', difficulty: 'medium',
        question: 'Why is separating test data from test actions useful in keyword-driven testing?',
        options: ['It improves maintainability and reuse of test assets', 'It automatically removes all defects from the system under test', 'It eliminates the need for a dedicated test environment', 'It guarantees 100% code coverage on every test run'],
        answer: 0,
        explanation: 'Separating test data from test actions makes keyword-driven tests easier to maintain. The same action keyword can be reused with different input values, so changing test data does not require rewriting the underlying test logic.'
    },
    {
        id: 'm-mcq-3', standard: 'ISO/IEC/IEEE 29119', difficulty: 'medium',
        question: 'What is the main purpose of test monitoring and control activities?',
        options: ['To track test progress and take corrective action when needed', 'To select the visual format and layout of the test report', 'To permanently close all open defects before release', 'To approve or reject design decisions made by developers'],
        answer: 0,
        explanation: 'Test monitoring and control means checking whether testing is progressing as planned and taking action when it is not. The team may adjust priorities, resources, or schedule when risks, defects, or delays appear.'
    },
    {
        id: 'm-mcq-4', standard: 'ISO/IEC/IEEE 29119', difficulty: 'medium',
        question: 'On what idea is prioritization based in risk-based testing?',
        options: ['Areas with high failure probability or high impact are tested first', 'Modules with the most recent code changes are always skipped', 'Only the features preferred by the product owner are tested', 'Alphabetical ordering of module names determines test priority'],
        answer: 0,
        explanation: 'Risk-based testing gives priority to areas that are more likely to fail or would cause greater damage if they failed. This helps teams use limited testing time effectively by testing the most important risks first.'
    },
    {
        id: 'm-mcq-5', standard: 'ISO/IEC/IEEE 29119-5', difficulty: 'medium',
        question: 'What is the main benefit of using parameters in a keyword table?',
        options: ['It allows the same keyword to run with different input data', 'It restricts the keyword to a single browser or platform', 'It makes all test execution manual instead of automated', 'It forces every test run to produce an identical result'],
        answer: 0,
        explanation: 'Parameters allow one keyword to work with different values. Instead of creating many nearly identical keywords, the same keyword can be executed with different users, inputs, expected values, or conditions.'
    },
    {
        id: 'm-mcq-6', standard: 'ISO/IEC/IEEE 29119', difficulty: 'medium',
        question: 'What is the relationship between a test plan and a test strategy in ISO 29119?',
        options: ['The test strategy describes the testing approach and is a part of the test plan', 'The test strategy is a higher-level document that contains the test plan', 'They describe the same content but apply to different test levels', 'The test strategy is written after testing ends to document what approach was used'],
        answer: 0,
        explanation: 'In ISO 29119, the test strategy is the part of the test plan that describes the approach to testing for a specific project, test level, or test type. It typically covers test levels, techniques, regression strategy, and completion criteria.'
    },
    {
        id: 'm-mcq-7', standard: 'ISO/IEC/IEEE 29119', difficulty: 'medium',
        question: 'Which test level focuses on verifying the interactions between already integrated components?',
        options: ['Integration testing', 'Unit testing', 'Acceptance testing', 'System testing'],
        answer: 0,
        explanation: 'Integration testing verifies the interfaces and interactions between components or systems that have already been unit-tested. It checks that the combined components work correctly together, not just individually.'
    },
    {
        id: 'm-mcq-8', standard: 'ISO/IEC/IEEE 29119', difficulty: 'medium',
        question: 'In ISO 29119\'s W7 framework, "by WHO" refers to which aspect of the standard?',
        options: ['The roles involved in testing, such as test architect, test manager, and tester', 'The list of mandatory test techniques defined in Part 4', 'The organizations that have formally certified compliance with the standard', 'The input documents that must exist before a test process can begin'],
        answer: 0,
        explanation: 'In the W7 framework, "by WHO" refers to the testing roles defined in Appendix B of ISO 29119, including test architect, test manager, test designer, test automator, tester, test analyst, and specialist tester.'
    },
    {
        id: 'm-mcq-9', standard: 'ISO/IEC/IEEE 29119-2', difficulty: 'medium',
        question: 'What is the primary purpose of the Test Management Process in ISO 29119-2?',
        options: ['To coordinate test planning, monitoring, control, and closure for a project', 'To execute test cases and record actual results', 'To design test techniques for specific test levels', 'To define the organization-wide approach to testing'],
        answer: 0,
        explanation: 'The Test Management Process in ISO 29119-2 is responsible for coordinating all testing activities — from planning and monitoring through to control and test closure — within a specific project or test effort.'
    },
    {
        id: 'm-mcq-10', standard: 'ISO/IEC/IEEE 29119-2', difficulty: 'medium',
        question: 'According to ISO 29119-2, which document expresses the organization\'s commitment to and high-level principles for testing?',
        options: ['Organizational Test Policy', 'Organizational Test Strategy', 'Master Test Plan', 'Test Completion Report'],
        answer: 0,
        explanation: 'The Organizational Test Policy (OTP) expresses the organization\'s commitment to testing and high-level principles. The OTS then translates this into a practical approach. Both are outputs of the Organizational Test Process.'
    },
    {
        id: 'm-mcq-11', standard: 'ISO/IEC/IEEE 29119', difficulty: 'medium',
        question: 'In ISO 25010 mapping, which quality characteristic is directly addressed by Security testing?',
        options: ['Security (including confidentiality, integrity, and non-repudiation)', 'Functional suitability', 'Reliability', 'Usability'],
        answer: 0,
        explanation: 'According to Table A.1 in ISO 29119, Security testing maps to the Security quality characteristic from ISO/IEC 25010, covering sub-characteristics such as confidentiality, integrity, non-repudiation, accountability, and authenticity.'
    },
    {
        id: 'm-mcq-12', standard: 'ISO/IEC/IEEE 29119', difficulty: 'medium',
        question: 'What distinguishes System Integration Testing from System Testing?',
        options: ['System integration testing verifies interactions between multiple systems; system testing tests one complete system', 'System testing tests internal component interactions; system integration tests full external behavior', 'System integration testing is performed by users; system testing is performed by developers', 'System testing always occurs before system integration testing in the lifecycle'],
        answer: 0,
        explanation: 'System testing validates the behavior of one complete, fully integrated system against its requirements. System integration testing checks how multiple systems or subsystems work together as an end-to-end flow.'
    },
    {
        id: 'm-mcq-13', standard: 'ISO/IEC/IEEE 29119-4', difficulty: 'medium',
        question: 'Which test design technique creates a table of all combinations of conditions and their corresponding expected actions?',
        options: ['Decision table testing', 'State transition testing', 'Equivalence partitioning', 'Branch testing'],
        answer: 0,
        explanation: 'Decision table testing (ISO 29119-4, specification-based) models combinations of input conditions and their corresponding expected outputs or actions, ensuring every significant combination is tested.'
    },
    {
        id: 'm-mcq-14', standard: 'ISO/IEC/IEEE 29119', difficulty: 'medium',
        question: 'According to ISO 29119, what is the primary input to the TEST ANALYSIS activity?',
        options: ['The test basis (requirements, specifications, designs, or other source material)', 'The test completion report from the previous test cycle', 'The list of defects found during the previous test level', 'The test environment configuration and tool setup'],
        answer: 0,
        explanation: 'Test analysis derives test conditions from the test basis. It provides the information needed to understand what should be tested — requirements, user stories, design documents, risk analyses, or any agreed specification.'
    },
    {
        id: 'm-mcq-15', standard: 'ISO/IEC/IEEE 29119', difficulty: 'medium',
        question: 'In the W7 framework, "WHAT\'s In" most directly refers to:',
        options: ['The inputs required by test processes (e.g., test basis, test environment)', 'The objectives stated in the test plan', 'The quality characteristics from ISO 25010', 'The keywords used in keyword-driven test cases'],
        answer: 0,
        explanation: 'The W7 framework\'s "WHAT\'s In" refers to the inputs consumed by test processes — such as the test basis, test environment specifications, test tools, and test data — before the process can generate outputs.'
    },
    {
        id: 'm-mcq-16', standard: 'ISO/IEC/IEEE 29119', difficulty: 'medium',
        question: 'Which role in ISO 29119 Appendix B develops formal test specifications in the form of MODELS?',
        options: ['MBT modeller', 'Test architect', 'Test designer', 'Test automator'],
        answer: 0,
        explanation: 'The MBT (Model-Based Testing) modeller develops formal test specifications expressed as models — such as state machines or decision tables — used to generate test cases automatically as part of model-based testing.'
    },
    {
        id: 'm-mcq-17', standard: 'ISO/IEC/IEEE 29119', difficulty: 'medium',
        question: 'What is REGRESSION TESTING?',
        options: ['Re-executing tests after changes to verify existing functionality is not broken', 'Testing the system for the first time after initial development is complete', 'Testing the system backwards from acceptance to unit level', 'Testing for performance degradation under increasing load over time'],
        answer: 0,
        explanation: 'Regression testing re-runs existing tests after modifications (bug fixes, new features, configuration changes) to confirm that changes have not introduced new defects or broken previously working functionality.'
    },
    {
        id: 'm-mcq-18', standard: 'ISO/IEC/IEEE 29119', difficulty: 'medium',
        question: 'In ISO 29119, what is a "test condition"?',
        options: ['An aspect of the test item that can be exercised by one or more test cases', 'The environment or configuration in which a test must be executed', 'A prerequisite that must be satisfied before a test case can run', 'A constraint applied to test scheduling or resource allocation'],
        answer: 0,
        explanation: 'A test condition is an item or event in a test item that can be verified by one or more test cases. It is derived during test analysis from the test basis and describes WHAT needs to be tested.'
    },
    {
        id: 'm-mcq-19', standard: 'ISO/IEC/IEEE 29119-4', difficulty: 'medium',
        question: 'The specification-based technique that tests values ON and just BEYOND the boundaries of valid input ranges is:',
        options: ['Boundary value analysis', 'Equivalence partitioning', 'State transition testing', 'Cause-effect graphing'],
        answer: 0,
        explanation: 'Boundary value analysis (BVA) focuses on values at the edges of valid and invalid partitions — typically testing the minimum, maximum, and values just outside these limits — because defects are often found at boundaries.'
    },
    {
        id: 'm-mcq-20', standard: 'ISO/IEC/IEEE 29119-4', difficulty: 'medium',
        question: 'Which ISO 29119-4 technique tests all paths through transitions between states in a system model?',
        options: ['State transition testing', 'Decision table testing', 'Use case testing', 'Branch testing'],
        answer: 0,
        explanation: 'State transition testing derives test cases from a state transition diagram, ensuring all defined states, transitions, and actions are exercised. It is especially useful for event-driven systems.'
    },

    // ════════════════════════════════════════════════════════════════
    // MEDIUM — CASE STUDY (FITB) (6)
    // ════════════════════════════════════════════════════════════════
    {
        id: 'm-case-1', type: 'fitb', standard: 'ISO/IEC/IEEE 29119', difficulty: 'medium',
        question: 'CASE: A QA team has only 3 days left before a banking system goes live. There are hundreds of features but no time to test all of them. According to ISO 29119, which testing approach should guide them in focusing effort on the most critical areas first?',
        acceptedAnswers: ['risk-based testing', 'risk based testing', 'risk based', 'risk-based'],
        answer: 0,
        explanation: 'Risk-based testing (ISO 29119) prioritises test effort according to the likelihood of failure and the impact if something goes wrong. Areas with the highest risk get tested first, making the best use of limited time and resources.'
    },
    {
        id: 'm-case-2', type: 'fitb', standard: 'ISO/IEC/IEEE 29119', difficulty: 'medium',
        question: 'CASE: A test team has finished running all planned tests. They now need to archive test assets, document lessons learned, and write a summary of the entire testing effort for the project record. Which test process activity are they performing?',
        acceptedAnswers: ['test closure', 'closure'],
        answer: 0,
        explanation: 'Test closure is the final activity in the ISO 29119 test management process. It covers archiving useful test assets, confirming all defects are resolved or accepted, capturing lessons learned, and producing a test completion report.'
    },
    {
        id: 'm-case-3', type: 'fitb', standard: 'ISO/IEC/IEEE 29119', difficulty: 'medium',
        question: 'CASE: After a bug fix was deployed to production, the test manager asked the team to re-run all previously passing tests to confirm no other features were affected. The team is performing ___ testing.',
        acceptedAnswers: ['regression testing', 'regression'],
        answer: 0,
        explanation: 'Regression testing re-executes existing tests after a change is made to verify that the change has not introduced new defects or broken previously working functionality.'
    },
    {
        id: 'm-case-4', type: 'fitb', standard: 'ISO/IEC/IEEE 29119-2', difficulty: 'medium',
        question: 'CASE: A test architect creates a document that defines the testing approach, required test levels, mandatory techniques, entry/exit criteria, and tool requirements — and this applies to every project in the organization. What is this document called?',
        acceptedAnswers: ['organizational test strategy', 'organisational test strategy', 'ots'],
        answer: 0,
        explanation: 'The Organizational Test Strategy (OTS) translates the organization\'s test policy into a practical, organization-wide testing approach applicable across all projects. It is distinct from a project-specific test plan.'
    },
    {
        id: 'm-case-5', type: 'fitb', standard: 'ISO/IEC/IEEE 29119-4', difficulty: 'medium',
        question: 'CASE: A tester is designing tests for an age field that accepts values from 18 to 65. She decides to test with 17, 18, 19, 64, 65, and 66. Which ISO 29119-4 specification-based test technique is she applying?',
        acceptedAnswers: ['boundary value analysis', 'boundary value', 'bva'],
        answer: 0,
        explanation: 'Boundary value analysis tests values at and just beyond the boundaries of valid input ranges. Testing 17 and 18 (at and just below the minimum) and 65 and 66 (at and just above the maximum) directly applies BVA.'
    },
    {
        id: 'm-case-6', type: 'fitb', standard: 'ISO/IEC/IEEE 29119', difficulty: 'medium',
        question: 'CASE: A test team discovers that none of their test cases can be traced back to the original requirements. They cannot tell the project manager which requirements have been tested. According to ISO 29119, what test management practice was missing?',
        acceptedAnswers: ['traceability', 'test traceability'],
        answer: 0,
        explanation: 'Traceability in ISO 29119 means maintaining links from test cases back to requirements, risks, and other test basis items. Without it, teams cannot demonstrate coverage or support evidence-based release decisions.'
    },

    // ════════════════════════════════════════════════════════════════
    // MEDIUM — MATCHING (8)
    // ════════════════════════════════════════════════════════════════
    {
        id: 'm-match-1', type: 'match', standard: 'ISO/IEC/IEEE 29119', difficulty: 'medium',
        question: 'Match each test level to the correct description.',
        pairs: [
            { left: 'Unit testing', right: 'Tests individual components in isolation' },
            { left: 'Integration testing', right: 'Tests interactions between components' },
            { left: 'System testing', right: 'Tests the complete integrated system' },
            { left: 'Acceptance testing', right: 'Validates against user requirements' },
        ],
        explanation: 'These are the four main test levels defined by ISO 29119. Each level targets a different scope: from individual units up to the full system validated by end-users or stakeholders.'
    },
    {
        id: 'm-match-2', type: 'match', standard: 'ISO/IEC/IEEE 29119', difficulty: 'medium',
        question: 'Match each ISO 29119 concept to its definition.',
        pairs: [
            { left: 'Test Basis', right: 'Source material used to design tests' },
            { left: 'Test Oracle', right: 'Source used to determine pass or fail' },
            { left: 'Test Item', right: 'Work product under test' },
            { left: 'Test Condition', right: 'Aspect of the system exercisable by tests' },
        ],
        explanation: 'These are fundamental terms in ISO 29119-1. The test basis drives test design; the test oracle judges results; the test item is what is being tested; test conditions are the specific aspects covered by test cases.'
    },
    {
        id: 'm-match-3', type: 'match', standard: 'ISO/IEC/IEEE 29119', difficulty: 'medium',
        question: 'Match each test process activity to what it produces.',
        pairs: [
            { left: 'Test analysis', right: 'Test conditions' },
            { left: 'Test design', right: 'Test cases and test data' },
            { left: 'Test implementation', right: 'Test procedures and scripts' },
            { left: 'Test execution', right: 'Actual results and defect reports' },
        ],
        explanation: 'Each activity in the dynamic test process has specific outputs. Analysis produces conditions; design produces cases; implementation produces executable procedures; execution produces evidence.'
    },
    {
        id: 'm-match-4', type: 'match', standard: 'ISO/IEC/IEEE 29119', difficulty: 'medium',
        question: 'Match each testing type to the ISO 25010 quality characteristic it primarily addresses.',
        pairs: [
            { left: 'Reliability testing', right: 'Reliability' },
            { left: 'Security testing', right: 'Security' },
            { left: 'Usability testing', right: 'Usability' },
            { left: 'Performance testing', right: 'Performance efficiency' },
        ],
        explanation: 'ISO 29119 Table A.1 maps testing types to ISO 25010 quality characteristics. Each testing type directly targets one or more specific quality sub-characteristics.'
    },
    {
        id: 'm-match-5', type: 'match', standard: 'ISO/IEC/IEEE 29119-2', difficulty: 'medium',
        question: 'Match each ISO 29119 document to its level of application.',
        pairs: [
            { left: 'Organizational Test Policy', right: 'Organisation-wide commitment to testing' },
            { left: 'Organizational Test Strategy', right: 'Organisation-wide approach and techniques' },
            { left: 'Project Test Plan', right: 'Project-specific scope, schedule, resources' },
            { left: 'Test Completion Report', right: 'Summary of outcomes after testing ends' },
        ],
        explanation: 'ISO 29119-2 establishes a hierarchy of test documents. The OTP and OTS operate at organisation level; the test plan at project level; and the test completion report closes out an individual test effort.'
    },
    {
        id: 'm-match-6', type: 'match', standard: 'ISO/IEC/IEEE 29119-5', difficulty: 'medium',
        question: 'Match each keyword-driven testing concept to its description.',
        pairs: [
            { left: 'High-level keyword', right: 'Business workflow composed of sub-keywords' },
            { left: 'Low-level keyword', right: 'Single technical UI or system action' },
            { left: 'Adapter layer', right: 'Maps keywords to executable tool commands' },
            { left: 'Keyword parameter', right: 'Makes one keyword work with different data' },
        ],
        explanation: 'ISO 29119-5 structures keywords in a hierarchy. The adapter layer bridges abstract keywords to real tool actions, while parameters make keywords data-driven and reusable across test cases.'
    },
    {
        id: 'm-match-7', type: 'match', standard: 'ISO/IEC/IEEE 29119', difficulty: 'medium',
        question: 'Match each ISO 29119 role to its primary responsibility.',
        pairs: [
            { left: 'Test manager', right: 'Plans and controls the test management process' },
            { left: 'Test architect', right: 'Defines test strategy and environment' },
            { left: 'MBT modeller', right: 'Develops model-based test specifications' },
            { left: 'Specialist tester', right: 'Tests usability, security, or performance' },
        ],
        explanation: 'ISO 29119 Appendix B defines distinct roles. The manager oversees the process; the architect shapes the approach; the MBT modeller creates formal models; the specialist tester focuses on specific quality attributes.'
    },
    {
        id: 'm-match-8', type: 'match', standard: 'ISO/IEC/IEEE 29119-4', difficulty: 'medium',
        question: 'Match each test design technique to its category in ISO 29119-4.',
        pairs: [
            { left: 'Equivalence partitioning', right: 'Derives tests from behavioral specification' },
            { left: 'Branch testing', right: 'Derives tests from internal code structure' },
            { left: 'Error guessing', right: 'Derives tests from tester experience' },
            { left: 'Grey-box technique', right: 'Combines internal and external knowledge' },
        ],
        explanation: 'ISO 29119-4 categorises techniques into specification-based (behavioral spec), structure-based (code structure), experience-based (intuition), and grey-box (both internal and external knowledge).'
    },

    // ════════════════════════════════════════════════════════════════
    // MEDIUM — TRUE / FALSE (10)
    // ════════════════════════════════════════════════════════════════
    {
        id: 'm-tf-1', type: 'tf', standard: 'ISO/IEC/IEEE 29119', difficulty: 'medium',
        question: 'True or False: In risk-based testing, areas with very low failure probability and impact are given the lowest test priority.',
        options: ['True', 'False'], answer: 0,
        explanation: 'Risk-based testing prioritises areas with high failure likelihood or high impact first. Areas with low risk on both dimensions naturally receive the least attention, so this statement is true.'
    },
    {
        id: 'm-tf-2', type: 'tf', standard: 'ISO/IEC/IEEE 29119', difficulty: 'medium',
        question: 'True or False: According to ISO 29119, the test strategy must always be written as a separate standalone document, independent of the test plan.',
        options: ['True', 'False'], answer: 1,
        explanation: 'ISO 29119 allows the test strategy to be included as a section within the test plan rather than as a separate document. The standard is flexible about document structure as long as required content is present.'
    },
    {
        id: 'm-tf-3', type: 'tf', standard: 'ISO/IEC/IEEE 29119-4', difficulty: 'medium',
        question: 'True or False: ISO 29119-4 defines both specification-based and structure-based test design techniques.',
        options: ['True', 'False'], answer: 0,
        explanation: 'ISO/IEC/IEEE 29119-4 Part 4 covers four categories: specification-based (Annex B), structure-based (Annex C), experience-based (Annex D), and grey-box (Annex E) test design techniques.'
    },
    {
        id: 'm-tf-4', type: 'tf', standard: 'ISO/IEC/IEEE 29119', difficulty: 'medium',
        question: 'True or False: The test manager role in ISO 29119 is responsible for executing test cases and recording actual results.',
        options: ['True', 'False'], answer: 1,
        explanation: 'Executing test cases and recording actual results is the responsibility of the tester. The test manager "develops, manages, and controls the test management process" — including planning, monitoring, and control.'
    },
    {
        id: 'm-tf-5', type: 'tf', standard: 'ISO/IEC/IEEE 29119', difficulty: 'medium',
        question: 'True or False: According to ISO 29119, a test plan can cover more than one test item.',
        options: ['True', 'False'], answer: 0,
        explanation: 'A test plan is defined as coordinating testing activities "for some test item or set of test items." It is therefore explicitly possible for a single test plan to cover multiple test items.'
    },
    {
        id: 'm-tf-6', type: 'tf', standard: 'ISO/IEC/IEEE 29119', difficulty: 'medium',
        question: 'True or False: The W7 framework\'s "for WHOM" means ISO 29119 applies only to organisations that have been formally certified.',
        options: ['True', 'False'], answer: 1,
        explanation: '"For WHOM" means the standard applies to all organizations, all development life cycles, and all types of software (Appendix A). No formal certification is required to apply the standard.'
    },
    {
        id: 'm-tf-7', type: 'tf', standard: 'ISO/IEC/IEEE 29119-5', difficulty: 'medium',
        question: 'True or False: In keyword-driven testing, low-level keywords typically represent individual technical or UI interactions.',
        options: ['True', 'False'], answer: 0,
        explanation: 'Low-level keywords map to single technical steps, such as clicking a button or entering a value. High-level keywords combine multiple low-level keywords into business-level workflows.'
    },
    {
        id: 'm-tf-8', type: 'tf', standard: 'ISO/IEC/IEEE 29119-2', difficulty: 'medium',
        question: 'True or False: ISO 29119-2 defines three levels of test process: the organizational test process, the test management process, and the dynamic test process.',
        options: ['True', 'False'], answer: 0,
        explanation: 'ISO 29119-2 structures the test processes into three levels: the Organizational Test Process (OTP and OTS), the Test Management Process (planning, monitoring, control, closure), and the Dynamic Test Process (design, implementation, execution).'
    },
    {
        id: 'm-tf-9', type: 'tf', standard: 'ISO/IEC/IEEE 29119-4', difficulty: 'medium',
        question: 'True or False: Decision table testing is classified as a structure-based test design technique in ISO 29119-4.',
        options: ['True', 'False'], answer: 1,
        explanation: 'Decision table testing is a specification-based technique — it derives test cases from a specification of conditions and their corresponding actions. Structure-based techniques (e.g., statement testing, branch testing) derive tests from the code structure.'
    },
    {
        id: 'm-tf-10', type: 'tf', standard: 'ISO/IEC/IEEE 29119', difficulty: 'medium',
        question: 'True or False: According to ISO 29119, traceability links test cases back to requirements, risks, and test results.',
        options: ['True', 'False'], answer: 0,
        explanation: 'Traceability in ISO 29119 means maintaining bidirectional links between test cases and their source (requirements, risks) as well as their outcomes (test results). This supports coverage analysis and evidence-based quality decisions.'
    },

    // ════════════════════════════════════════════════════════════════
    // MEDIUM — FILL IN THE BLANK (6)
    // ════════════════════════════════════════════════════════════════
    {
        id: 'm-fitb-1', type: 'fitb', standard: 'ISO/IEC/IEEE 29119-5', difficulty: 'medium',
        question: 'In keyword-driven testing, using ___ allows the same keyword to be reused with different input values across multiple test cases.',
        acceptedAnswers: ['parameters', 'parameter', 'params'],
        answer: 0,
        explanation: 'Parameters make keywords flexible and reusable. Instead of creating multiple nearly identical keywords, one keyword accepts parameters so it can be executed with different users, values, or conditions.'
    },
    {
        id: 'm-fitb-2', type: 'fitb', standard: 'ISO/IEC/IEEE 29119', difficulty: 'medium',
        question: 'Test monitoring and control checks whether testing is progressing as ___ and takes corrective action when it is not.',
        acceptedAnswers: ['planned', 'plan', 'scheduled'],
        answer: 0,
        explanation: 'The purpose of test monitoring and control is to compare actual progress against the test plan and respond when there are deviations — by adjusting priorities, resources, or schedule as needed.'
    },
    {
        id: 'm-fitb-3', type: 'fitb', standard: 'ISO/IEC/IEEE 29119', difficulty: 'medium',
        question: 'The section of a test plan that describes the testing approach for a specific project, test level, or test type is called the test ___.',
        acceptedAnswers: ['strategy', 'test strategy'],
        answer: 0,
        explanation: 'The test strategy is the part of the test plan that describes the testing approach. It typically includes test levels, techniques, regression approach, and completion criteria.'
    },
    {
        id: 'm-fitb-4', type: 'fitb', standard: 'ISO/IEC/IEEE 29119', difficulty: 'medium',
        question: 'In ISO 29119, the role that develops oracles and analyses test results for correctness and issues is called the test ___.',
        acceptedAnswers: ['analyst', 'test analyst'],
        answer: 0,
        explanation: 'The test analyst is responsible for developing test oracles and analysing test results to determine whether the system behaved correctly and whether identified issues are genuine defects.'
    },
    {
        id: 'm-fitb-5', type: 'fitb', standard: 'ISO/IEC/IEEE 29119-4', difficulty: 'medium',
        question: 'The specification-based technique that tests input values at and just beyond the edges of valid ranges is called ___ value analysis.',
        acceptedAnswers: ['boundary', 'boundary value'],
        answer: 0,
        explanation: 'Boundary value analysis focuses on the boundary values of valid and invalid input partitions, since defects are commonly found at boundaries rather than deep within a valid range.'
    },
    {
        id: 'm-fitb-6', type: 'fitb', standard: 'ISO/IEC/IEEE 29119-4', difficulty: 'medium',
        question: 'ISO 29119-4 organises test design techniques into four categories: specification-based, structure-based, experience-based, and ___ box techniques.',
        acceptedAnswers: ['grey', 'gray', 'grey-box', 'gray-box'],
        answer: 0,
        explanation: 'ISO 29119-4 Part 4 has four annexes for test design technique categories. Annex E covers grey-box techniques, which combine knowledge of internal structure with external behavioral testing.'
    },

    // ════════════════════════════════════════════════════════════════
    // HARD — MCQ (20)
    // ════════════════════════════════════════════════════════════════
    {
        id: 'h-mcq-1', standard: 'ISO/IEC/IEEE 29119', difficulty: 'hard',
        question: 'Which is the best example of a test closure activity in ISO/IEC/IEEE 29119?',
        options: ['Archiving test assets and recording lessons learned', 'Closing all defect records without reviewing their evidence', 'Deleting the test environment immediately after the last test run', 'Reporting only the test cases that passed to stakeholders'],
        answer: 0,
        explanation: 'Test closure happens after test execution is completed. Good closure includes archiving useful test assets, summarizing results, recording lessons learned, and preserving information that can improve future testing.'
    },
    {
        id: 'h-mcq-2', standard: 'ISO/IEC/IEEE 29119-5', difficulty: 'hard',
        question: 'In keyword-driven testing, which statement best describes a "high-level keyword"?',
        options: ['It combines smaller technical keywords into a business-level workflow', 'It is a keyword that can only be executed from the command line', 'It is a keyword that must never accept parameters according to the standard', 'It always corresponds to exactly one low-level user interface interaction'],
        answer: 0,
        explanation: 'A high-level keyword represents a larger business workflow by combining smaller technical keywords. For example, a keyword "complete purchase" could internally call lower-level steps for login, item selection, payment, and confirmation.'
    },
    {
        id: 'h-mcq-3', standard: 'ISO/IEC/IEEE 29119', difficulty: 'hard',
        question: 'How is the concept of "test basis" best explained in ISO 29119?',
        options: ['The source material, such as requirements or designs, used for test analysis and design', 'The minimum pass rate that must be achieved before testing can stop', 'The baseline version of the software against which regression tests are run', 'The set of test tools and infrastructure used to execute the test suite'],
        answer: 0,
        explanation: 'The test basis is the source material used to analyze and design tests. It can include requirements, user stories, designs, models, risks, or any other information that explains what the system should do.'
    },
    {
        id: 'h-mcq-4', standard: 'ISO/IEC/IEEE 29119-5', difficulty: 'hard',
        question: 'In keyword-driven testing, what is the role of an adapter or automation layer?',
        options: ['It maps abstract keywords to real tool or system commands', 'It generates the keyword table automatically from requirements', 'It enforces that all keywords follow the same naming convention', 'It acts as the single source of all test data used in the project'],
        answer: 0,
        explanation: 'An adapter or automation layer connects abstract keywords to real implementation actions. It translates a keyword such as "enter customer details" into tool commands, API calls, UI interactions, or other executable steps.'
    },
    {
        id: 'h-mcq-5', standard: 'ISO/IEC/IEEE 29119', difficulty: 'hard',
        question: 'Why is traceability important in test management according to ISO 29119?',
        options: ['It allows tests to be linked to requirements, risks, and results for coverage evidence', 'It enables the test tool to automatically reorder test cases by priority', 'It ensures that defects are assigned to the developer who introduced them', 'It reduces testing time by identifying which test cases can be skipped safely'],
        answer: 0,
        explanation: 'Traceability links tests to requirements, risks, defects, and results. Teams can see why a test exists, what it covers, which risks are addressed, and what evidence supports the final quality assessment.'
    },
    {
        id: 'h-mcq-6', standard: 'ISO/IEC/IEEE 29119-1', difficulty: 'hard',
        question: 'What is a "test item" as defined in ISO/IEC/IEEE 29119-1?',
        options: ['A work product or object that is the subject of testing', 'A single executable step within a test case procedure', 'A reusable keyword representing a test action in keyword-driven testing', 'The expected output defined for a specific test input in a test case'],
        answer: 0,
        explanation: 'In ISO 29119-1, a test item (also called a test object) is simply the work product to be tested — for example, a software component, system, or document that is being evaluated by the test process.'
    },
    {
        id: 'h-mcq-7', standard: 'ISO/IEC/IEEE 29119-4', difficulty: 'hard',
        question: 'Which category of test design technique does boundary value analysis belong to in ISO 29119-4?',
        options: ['Specification-based techniques', 'Structure-based techniques', 'Experience-based techniques', 'Grey-box techniques'],
        answer: 0,
        explanation: 'Boundary value analysis is a specification-based technique because it derives test cases from the specification of the software\'s expected behavior. Other specification-based techniques include equivalence partitioning, decision table testing, and state transition testing.'
    },
    {
        id: 'h-mcq-8', standard: 'ISO/IEC/IEEE 29119', difficulty: 'hard',
        question: 'What distinguishes the role of a test architect from a test manager in ISO 29119?',
        options: ['The test architect defines strategy and environment; the test manager plans and controls the dynamic test process', 'The test architect executes tests and logs defects; the test manager writes the test cases', 'The test manager defines the overall test strategy; the test architect handles regression test execution', 'Both roles are identical in scope but used in organizations of different sizes'],
        answer: 0,
        explanation: 'According to ISO 29119 Appendix B, the test architect defines the test strategy, test environment, and organizational test requirements. The test manager develops, manages, and controls the test management process.'
    },
    {
        id: 'h-mcq-9', standard: 'ISO/IEC/IEEE 29119', difficulty: 'hard',
        question: 'According to ISO 29119, which ISO standard defines the review process used as part of static testing?',
        options: ['ISO/IEC 20246', 'ISO/IEC 25010', 'ISO/IEC 29119-3', 'IEEE 1028'],
        answer: 0,
        explanation: 'ISO/IEC 20246 defines the review process (walkthroughs, technical reviews, inspections) referenced in ISO 29119 for static testing activities.'
    },
    {
        id: 'h-mcq-10', standard: 'ISO/IEC/IEEE 29119-4', difficulty: 'hard',
        question: 'In ISO 29119-4, which structure-based technique requires that EACH CONDITION in a decision independently affects the outcome of that decision?',
        options: ['Modified Condition/Decision Coverage (MC/DC)', 'Branch condition combination testing', 'All-uses testing', 'Decision testing'],
        answer: 0,
        explanation: 'MC/DC (Modified Condition/Decision Coverage) requires each condition in every decision to independently affect the decision\'s outcome at least once. It is especially used in safety-critical systems.'
    },
    {
        id: 'h-mcq-11', standard: 'ISO/IEC/IEEE 29119-2', difficulty: 'hard',
        question: 'What is the key architectural difference between the Organizational Test Strategy (OTS) and a project-level Test Plan?',
        options: ['The OTS defines the organization-wide testing approach; a test plan adapts it for a specific project', 'The OTS is produced once per project; the test plan applies to the whole organization', 'The test plan is a subset of the OTS that handles only test documentation', 'There is no difference — they are different names for the same document'],
        answer: 0,
        explanation: 'The OTS is an organization-wide document that translates the Organizational Test Policy into a standard testing approach. Project test plans then adapt and apply this standard to the specific constraints of each project.'
    },
    {
        id: 'h-mcq-12', standard: 'ISO/IEC/IEEE 29119', difficulty: 'hard',
        question: 'According to ISO 25010 mapping in ISO 29119, which quality characteristic is primarily addressed by DISASTER RECOVERY TESTING?',
        options: ['Reliability (specifically fault tolerance and recoverability)', 'Security', 'Portability', 'Maintainability'],
        answer: 0,
        explanation: 'Disaster recovery testing maps to the Reliability quality characteristic in ISO 25010, specifically the sub-characteristics of fault tolerance and recoverability — ensuring the system can withstand failures and recover properly.'
    },
    {
        id: 'h-mcq-13', standard: 'ISO/IEC/IEEE 29119-2', difficulty: 'hard',
        question: 'Which of the following correctly describes the three sub-processes of the Dynamic Test Process in ISO 29119-2?',
        options: ['Test design and implementation, test environment setup, and test execution', 'Test planning, test monitoring, and test closure', 'Requirement analysis, test condition derivation, and test case specification', 'Unit testing, integration testing, and system testing'],
        answer: 0,
        explanation: 'ISO 29119-2\'s Dynamic Test Process consists of: test design and implementation (deriving and creating test cases), test environment setup and maintenance, and test execution (running tests and recording results).'
    },
    {
        id: 'h-mcq-14', standard: 'ISO/IEC/IEEE 29119-4', difficulty: 'hard',
        question: 'What distinguishes GREY-BOX test design techniques from purely black-box or white-box approaches?',
        options: ['Grey-box techniques use both external behavioral specifications and some knowledge of internal structure', 'Grey-box techniques test only the user interface without accessing backend code', 'Grey-box techniques exclusively require code instrumentation and coverage measurement', 'Grey-box techniques apply only to web application testing on multiple browsers'],
        answer: 0,
        explanation: 'Grey-box techniques combine aspects of both specification-based (black-box) and structure-based (white-box) testing. The tester has partial knowledge of the system\'s internal structure while also using the behavioral specification.'
    },
    {
        id: 'h-mcq-15', standard: 'ISO/IEC/IEEE 29119', difficulty: 'hard',
        question: 'Which statement correctly describes the difference between USER ACCEPTANCE TESTING and OPERATIONAL ACCEPTANCE TESTING?',
        options: ['User acceptance validates business needs of end users; operational acceptance tests readiness for operations such as backups and recovery', 'User acceptance is performed by the development team; operational acceptance is performed by end users', 'Operational acceptance tests functionality; user acceptance tests non-functional requirements', 'Both are identical in scope but apply to different industries'],
        answer: 0,
        explanation: 'User acceptance testing validates that the system meets the business needs of end users. Operational acceptance testing verifies operational aspects such as backup/restore procedures, disaster recovery, security patching, and system administration.'
    },
    {
        id: 'h-mcq-16', standard: 'ISO/IEC/IEEE 29119-5', difficulty: 'hard',
        question: 'In ISO 29119-5, what is the difference between a "shared" keyword and a "project-specific" keyword?',
        options: ['Shared keywords are reusable across multiple projects; project-specific keywords apply only within one project', 'Shared keywords are written in natural language; project-specific keywords are scripted', 'Shared keywords require no parameters; project-specific keywords must always be parameterized', 'There is no practical difference — both are executed identically'],
        answer: 0,
        explanation: 'ISO 29119-5 distinguishes between shared keywords (designed to be reused across projects in a keyword library) and project-specific keywords (scoped to a single project). Shared keywords promote cross-project reuse and standardization.'
    },
    {
        id: 'h-mcq-17', standard: 'ISO/IEC/IEEE 29119-2', difficulty: 'hard',
        question: 'According to ISO 29119-2, what is the ORGANIZATIONAL TEST POLICY?',
        options: ['A document expressing the organization\'s commitment to and principles for testing', 'A document that defines the specific techniques to be used on each project', 'A document that lists all approved test tools for organizational use', 'A document that schedules testing activities across multiple concurrent projects'],
        answer: 0,
        explanation: 'The Organizational Test Policy (OTP) is an executive-level document that states the organization\'s commitment to software testing and establishes high-level principles that all testing in the organization must follow.'
    },
    {
        id: 'h-mcq-18', standard: 'ISO/IEC/IEEE 29119-4', difficulty: 'hard',
        question: 'Data flow testing in ISO 29119-4 focuses on which pairs?',
        options: ['Variable definition-use pairs (where variables are defined and then used in the code)', 'Input-output value pairs defined in the requirements specification', 'Keyword-parameter pairs in keyword-driven test cases', 'Risk-impact pairs used to prioritize test cases'],
        answer: 0,
        explanation: 'Data flow testing (a structure-based technique in ISO 29119-4) focuses on tracing paths through code where variables are defined (written) and subsequently used (read). Techniques include all-definitions, all-C-uses, all-P-uses, all-uses, and all-DU-paths testing.'
    },
    {
        id: 'h-mcq-19', standard: 'ISO/IEC/IEEE 29119-4', difficulty: 'hard',
        question: 'According to ISO 29119, which technique is classified as EXPERIENCE-BASED and relies on the tester\'s knowledge and intuition?',
        options: ['Error guessing', 'Cause-effect graphing', 'Scenario testing', 'Requirements-based testing'],
        answer: 0,
        explanation: 'Error guessing (ISO 29119-4, Annex D) is an experience-based test design technique. The tester uses personal experience, knowledge of common defect types, and intuition to predict where errors are likely to occur.'
    },
    {
        id: 'h-mcq-20', standard: 'ISO/IEC/IEEE 29119-2', difficulty: 'hard',
        question: 'In ISO 29119-2, which specific outputs does the Organizational Test Process produce?',
        options: ['The Organizational Test Policy (OTP) and the Organizational Test Strategy (OTS)', 'The project test plan and the test completion report', 'The test case specifications and test procedure specifications', 'The test execution log and defect reports'],
        answer: 0,
        explanation: 'The Organizational Test Process produces two key outputs: the OTP (expressing commitment and principles) and the OTS (translating that policy into an organization-wide practical approach).'
    },

    // ════════════════════════════════════════════════════════════════
    // HARD — CASE STUDY (FITB) (6)
    // ════════════════════════════════════════════════════════════════
    {
        id: 'h-case-1', type: 'fitb', standard: 'ISO/IEC/IEEE 29119', difficulty: 'hard',
        question: 'CASE: After a major release, the project manager asks the test team which requirements were covered by the test suite. The team has no answer because their test cases were never linked to requirements. Which ISO 29119 test management concept was neglected?',
        acceptedAnswers: ['traceability', 'test traceability'],
        answer: 0,
        explanation: 'Traceability in ISO 29119 means linking test cases back to requirements, risks, and other test basis items. Without traceability, teams cannot demonstrate coverage, identify gaps, or justify release decisions.'
    },
    {
        id: 'h-case-2', type: 'fitb', standard: 'ISO/IEC/IEEE 29119-2', difficulty: 'hard',
        question: 'CASE: A large organisation wants every project team to follow the same testing approach — the same test levels, entry and exit criteria, and techniques — regardless of the specific project. What ISO 29119 document captures this organisation-wide testing approach?',
        acceptedAnswers: ['organizational test strategy', 'organisational test strategy', 'ots'],
        answer: 0,
        explanation: 'ISO 29119-2 defines the Organisational Test Strategy (OTS) as the document that translates the organisation\'s test policy into a standard testing approach applicable across all projects.'
    },
    {
        id: 'h-case-3', type: 'fitb', standard: 'ISO/IEC/IEEE 29119-4', difficulty: 'hard',
        question: 'CASE: A team is testing a flight control system where regulations require the highest possible structural coverage. The test architect mandates that every condition in every decision must independently affect the decision\'s outcome. Which ISO 29119-4 structure-based technique is required?',
        acceptedAnswers: ['mc/dc', 'mcdc', 'modified condition decision coverage', 'modified condition/decision coverage'],
        answer: 0,
        explanation: 'MC/DC (Modified Condition/Decision Coverage) is required in safety-critical domains. It ensures each condition independently affects the decision outcome, providing very high structural confidence.'
    },
    {
        id: 'h-case-4', type: 'fitb', standard: 'ISO/IEC/IEEE 29119-3', difficulty: 'hard',
        question: 'CASE: After completing a full test cycle, the test lead writes a document summarising what was tested, which defects were found, how many were resolved, and what the overall quality conclusion is. According to ISO 29119-3, what type of document is this?',
        acceptedAnswers: ['test completion report', 'completion report', 'test summary report', 'test report'],
        answer: 0,
        explanation: 'The test completion report (ISO 29119-3) summarises the results of a completed test effort, including what was covered, defects found, items resolved or deferred, and an overall assessment of the test item\'s quality.'
    },
    {
        id: 'h-case-5', type: 'fitb', standard: 'ISO/IEC/IEEE 29119-5', difficulty: 'hard',
        question: 'CASE: An organization builds an automation framework where test cases are written as tables of named actions — "Open Browser", "Navigate To URL", "Enter Username", "Click Login". These actions are then automated by a separate implementation layer that translates them into real tool commands. According to ISO 29119-5, what is this implementation layer called?',
        acceptedAnswers: ['adapter', 'adapter layer', 'automation layer'],
        answer: 0,
        explanation: 'The adapter (or automation) layer in ISO 29119-5 keyword-driven testing maps abstract keyword names to concrete executable commands — whether via a UI automation tool, API call, or other mechanism.'
    },
    {
        id: 'h-case-6', type: 'fitb', standard: 'ISO/IEC/IEEE 29119-2', difficulty: 'hard',
        question: 'CASE: A test architect at a financial company decides that all projects must use at least unit, integration, and system testing as mandatory levels — and any deviation requires written approval. This is recorded in an organization-wide document. According to ISO 29119-2, what document contains these requirements?',
        acceptedAnswers: ['organizational test strategy', 'organisational test strategy', 'ots'],
        answer: 0,
        explanation: 'The Organizational Test Strategy (OTS) is the ISO 29119-2 document that defines mandatory test levels, techniques, tools, and criteria across all of an organization\'s projects.'
    },

    // ════════════════════════════════════════════════════════════════
    // HARD — MATCHING (8)
    // ════════════════════════════════════════════════════════════════
    {
        id: 'h-match-1', type: 'match', standard: 'ISO/IEC/IEEE 29119', difficulty: 'hard',
        question: 'Match each ISO 29119 role to its primary responsibility.',
        pairs: [
            { left: 'Test Manager', right: 'Plans and controls the test process' },
            { left: 'Test Architect', right: 'Defines test strategy and environment' },
            { left: 'Test Designer', right: 'Derives test conditions and cases' },
            { left: 'Test Automator', right: 'Implements automated test scripts' },
        ],
        explanation: 'ISO 29119 Appendix B defines distinct roles. The manager oversees the process; the architect shapes the approach; the designer creates the tests; the automator implements them in tooling.'
    },
    {
        id: 'h-match-2', type: 'match', standard: 'ISO/IEC/IEEE 29119', difficulty: 'hard',
        question: 'Match each test process activity to its key output.',
        pairs: [
            { left: 'Test Planning', right: 'Test plan' },
            { left: 'Test Design', right: 'Test cases and test data' },
            { left: 'Test Execution', right: 'Actual results and defect reports' },
            { left: 'Test Closure', right: 'Test completion report' },
        ],
        explanation: 'ISO 29119-2 defines the test management and dynamic test processes. Each activity produces specific artefacts: planning produces a plan, design produces test cases, execution produces results, and closure produces a completion report.'
    },
    {
        id: 'h-match-3', type: 'match', standard: 'ISO/IEC/IEEE 29119', difficulty: 'hard',
        question: 'Match each ISO 25010 testing type to the quality characteristic it primarily addresses.',
        pairs: [
            { left: 'Disaster recovery testing', right: 'Reliability' },
            { left: 'Security testing', right: 'Security' },
            { left: 'Usability testing', right: 'Usability' },
            { left: 'Maintainability testing', right: 'Maintainability' },
        ],
        explanation: 'ISO 29119 Table A.1 maps testing types to ISO 25010 quality characteristics. Each testing type targets specific sub-characteristics of the corresponding quality attribute.'
    },
    {
        id: 'h-match-4', type: 'match', standard: 'ISO/IEC/IEEE 29119-4', difficulty: 'hard',
        question: 'Match each structure-based technique to its coverage criterion.',
        pairs: [
            { left: 'Statement testing', right: 'Each executable statement executed at least once' },
            { left: 'Branch testing', right: 'Each branch from each decision taken at least once' },
            { left: 'MC/DC testing', right: 'Each condition independently affects its decision' },
            { left: 'Data flow testing', right: 'Tests variable definition and use pairs' },
        ],
        explanation: 'ISO 29119-4 Annex C defines these structure-based criteria. They progressively demand higher structural coverage: statement < branch < MC/DC in terms of rigor.'
    },
    {
        id: 'h-match-5', type: 'match', standard: 'ISO/IEC/IEEE 29119-5', difficulty: 'hard',
        question: 'Match each keyword-driven testing concept to its precise description.',
        pairs: [
            { left: 'High-level keyword', right: 'Business-level workflow built from sub-keywords' },
            { left: 'Low-level keyword', right: 'Single UI or technical system interaction' },
            { left: 'Adapter layer', right: 'Maps abstract keywords to executable commands' },
            { left: 'Shared keyword', right: 'Reusable across multiple projects in a library' },
        ],
        explanation: 'ISO 29119-5 structures keywords at multiple levels. The adapter layer bridges abstraction to execution; shared keywords maximize cross-project reuse.'
    },
    {
        id: 'h-match-6', type: 'match', standard: 'ISO/IEC/IEEE 29119-4', difficulty: 'hard',
        question: 'Match each test design technique to its category in ISO 29119-4.',
        pairs: [
            { left: 'Equivalence partitioning', right: 'Derives tests from behavioral specification' },
            { left: 'Branch testing', right: 'Derives tests from internal code structure' },
            { left: 'Error guessing', right: 'Derives tests from tester experience' },
            { left: 'Grey-box technique', right: 'Combines internal and external knowledge' },
        ],
        explanation: 'ISO 29119-4 categorises all techniques: specification-based (behavioral spec), structure-based (code structure), experience-based (intuition), and grey-box (combination of both).'
    },
    {
        id: 'h-match-7', type: 'match', standard: 'ISO/IEC/IEEE 29119-2', difficulty: 'hard',
        question: 'Match each ISO 29119-2 process or activity to its key output.',
        pairs: [
            { left: 'Organizational test process', right: 'Organizational Test Policy and Strategy' },
            { left: 'Test planning activity', right: 'Test plan and test schedule' },
            { left: 'Test execution activity', right: 'Actual results and defect reports' },
            { left: 'Test closure activity', right: 'Test completion report and archived assets' },
        ],
        explanation: 'ISO 29119-2 specifies outputs for each level and activity. The OTP/OTS come from the org level; the test plan from planning; results from execution; the completion report from closure.'
    },
    {
        id: 'h-match-8', type: 'match', standard: 'ISO/IEC/IEEE 29119', difficulty: 'hard',
        question: 'Match each acceptance testing subtype to its primary purpose.',
        pairs: [
            { left: 'User acceptance testing', right: 'Validates business needs of end users' },
            { left: 'Operational acceptance testing', right: 'Tests backup, recovery, and admin readiness' },
            { left: 'Factory acceptance testing', right: 'Tests hardware/software before customer delivery' },
            { left: 'Alpha testing', right: 'Conducted at developer site with real users' },
        ],
        explanation: 'ISO 29119 defines multiple acceptance testing subtypes. Each targets a different stakeholder concern: business needs, operational readiness, pre-delivery verification, or early user validation.'
    },

    // ════════════════════════════════════════════════════════════════
    // HARD — TRUE / FALSE (10)
    // ════════════════════════════════════════════════════════════════
    {
        id: 'h-tf-1', type: 'tf', standard: 'ISO/IEC/IEEE 29119-4', difficulty: 'hard',
        question: 'True or False: According to ISO 29119-4, boundary value analysis is classified as a structure-based test design technique.',
        options: ['True', 'False'], answer: 1,
        explanation: 'Boundary value analysis is a specification-based technique, not structure-based. Specification-based techniques derive tests from the behavioral specification; structure-based techniques derive tests from the internal code structure.'
    },
    {
        id: 'h-tf-2', type: 'tf', standard: 'ISO/IEC/IEEE 29119', difficulty: 'hard',
        question: 'True or False: According to ISO 29119 Appendix B, the test architect is responsible for developing, managing, and controlling the dynamic test process.',
        options: ['True', 'False'], answer: 1,
        explanation: 'It is the test manager who develops, manages, and controls the dynamic test process. The test architect defines the test strategy, test environment, and organizational test requirements — a distinct architectural role.'
    },
    {
        id: 'h-tf-3', type: 'tf', standard: 'ISO/IEC/IEEE 29119-2', difficulty: 'hard',
        question: 'True or False: According to ISO 29119-2, the Organizational Test Strategy (OTS) must be produced separately by every individual project team.',
        options: ['True', 'False'], answer: 1,
        explanation: 'The OTS is an organization-level document produced by the organizational test process — not by individual project teams. Project teams produce project test plans that are aligned with the OTS.'
    },
    {
        id: 'h-tf-4', type: 'tf', standard: 'ISO/IEC/IEEE 29119-5', difficulty: 'hard',
        question: 'True or False: ISO/IEC/IEEE 29119-5 (Keyword-Driven Testing) was most recently updated and published in 2024.',
        options: ['True', 'False'], answer: 0,
        explanation: 'The current version of ISO/IEC/IEEE 29119-5, covering keyword-driven testing, was published in 2024.'
    },
    {
        id: 'h-tf-5', type: 'tf', standard: 'ISO/IEC/IEEE 29119-4', difficulty: 'hard',
        question: 'True or False: According to ISO 29119-4, grey-box test design techniques are covered in Annex E.',
        options: ['True', 'False'], answer: 0,
        explanation: 'ISO 29119-4 organises test design techniques in four annexes: Annex B (specification-based), Annex C (structure-based), Annex D (experience-based), and Annex E (grey-box).'
    },
    {
        id: 'h-tf-6', type: 'tf', standard: 'ISO/IEC/IEEE 29119', difficulty: 'hard',
        question: 'True or False: According to ISO 29119 Appendix B, the MBT modeller role is responsible for implementing automated test scripts within a test automation framework.',
        options: ['True', 'False'], answer: 1,
        explanation: 'Implementing automated test scripts is the responsibility of the TEST AUTOMATOR. The MBT modeller "develops formal test specifications in the form of models used to generate test cases as part of model-based testing."'
    },
    {
        id: 'h-tf-7', type: 'tf', standard: 'ISO/IEC/IEEE 29119-1', difficulty: 'hard',
        question: 'True or False: According to ISO 29119-1, a test oracle can include requirements specifications, design documents, similar systems, and subject-matter experts.',
        options: ['True', 'False'], answer: 0,
        explanation: 'ISO 29119-1 defines a test oracle as "a source of information to determine if a test has passed or failed." The examples explicitly given include SRS, SDD, similar systems, and experts.'
    },
    {
        id: 'h-tf-8', type: 'tf', standard: 'ISO/IEC/IEEE 29119-4', difficulty: 'hard',
        question: 'True or False: MC/DC (Modified Condition/Decision Coverage) is classified as a structure-based test technique in ISO 29119-4.',
        options: ['True', 'False'], answer: 0,
        explanation: 'MC/DC is a structure-based technique because it is derived from the internal decision and condition structure of the code. It appears in Annex C of ISO 29119-4.'
    },
    {
        id: 'h-tf-9', type: 'tf', standard: 'ISO/IEC/IEEE 29119-2', difficulty: 'hard',
        question: 'True or False: According to ISO 29119-2, the Organizational Test Process must produce both an Organizational Test Policy and an Organizational Test Strategy.',
        options: ['True', 'False'], answer: 0,
        explanation: 'The Organizational Test Process has two primary outputs: the OTP (expressing commitment and principles) and the OTS (translating those principles into an organization-wide practical testing approach).'
    },
    {
        id: 'h-tf-10', type: 'tf', standard: 'ISO/IEC/IEEE 29119-3', difficulty: 'hard',
        question: 'True or False: ISO 29119 Part 3 (Test Documentation) can be applied to non-project activities such as maintenance testing.',
        options: ['True', 'False'], answer: 0,
        explanation: 'ISO 29119 Part 1\'s definition of test plan explicitly notes that "test plans can also be written for non-project activities, for example a maintenance test plan." This confirms Part 3\'s templates apply beyond just project contexts.'
    },

    // ════════════════════════════════════════════════════════════════
    // HARD — FILL IN THE BLANK (6)
    // ════════════════════════════════════════════════════════════════
    {
        id: 'h-fitb-1', type: 'fitb', standard: 'ISO/IEC/IEEE 29119', difficulty: 'hard',
        question: 'The source material used to analyze and design tests — such as requirements, design documents, or user stories — is called the test ___.',
        acceptedAnswers: ['basis', 'test basis'],
        answer: 0,
        explanation: 'The test basis is any source of information from which test conditions and test cases are derived. It provides the foundation for test analysis and can include requirements, specifications, designs, models, or risks.'
    },
    {
        id: 'h-fitb-2', type: 'fitb', standard: 'ISO/IEC/IEEE 29119-5', difficulty: 'hard',
        question: 'In keyword-driven testing, the ___ layer maps abstract keywords to real tool commands, API calls, or UI interactions.',
        acceptedAnswers: ['adapter', 'automation', 'adapter layer', 'automation layer'],
        answer: 0,
        explanation: 'The adapter (or automation) layer is the implementation bridge in keyword-driven testing. It translates high-level abstract keywords into concrete, executable actions against the actual system under test.'
    },
    {
        id: 'h-fitb-3', type: 'fitb', standard: 'ISO/IEC/IEEE 29119-4', difficulty: 'hard',
        question: 'In ISO 29119-4, the ___ box category of test design techniques combines knowledge of both internal structure and external behavioral specification.',
        acceptedAnswers: ['grey', 'gray', 'grey box', 'gray box', 'grey-box', 'gray-box'],
        answer: 0,
        explanation: 'Grey-box techniques (Annex E of ISO 29119-4) use partial knowledge of internal implementation alongside the external specification, distinguishing them from purely black-box or white-box approaches.'
    },
    {
        id: 'h-fitb-4', type: 'fitb', standard: 'ISO/IEC/IEEE 29119-2', difficulty: 'hard',
        question: 'In ISO 29119-2, the document that translates the organization\'s test policy into a practical organization-wide testing approach is called the Organizational Test ___.',
        acceptedAnswers: ['strategy', 'test strategy', 'organizational test strategy', 'organisational test strategy'],
        answer: 0,
        explanation: 'The Organizational Test Strategy (OTS) is the second key output of the organizational test process. It defines the standard testing approach — levels, techniques, criteria — to be used consistently across all of the organization\'s projects.'
    },
    {
        id: 'h-fitb-5', type: 'fitb', standard: 'ISO/IEC/IEEE 29119-4', difficulty: 'hard',
        question: 'In ISO 29119-4, the structure-based technique abbreviated as ___ requires each condition in a decision to independently affect the decision outcome at least once.',
        acceptedAnswers: ['mc/dc', 'mcdc', 'modified condition decision coverage', 'modified condition/decision coverage'],
        answer: 0,
        explanation: 'MC/DC (Modified Condition/Decision Coverage) is a rigorous structure-based criterion especially used in safety-critical domains. It ensures each condition independently influences decision outcomes.'
    },
    {
        id: 'h-fitb-6', type: 'fitb', standard: 'ISO/IEC/IEEE 29119-2', difficulty: 'hard',
        question: 'In ISO 29119-2, the three levels of test process are: the organizational test process, the ___ process, and the dynamic test process.',
        acceptedAnswers: ['test management', 'management'],
        answer: 0,
        explanation: 'ISO 29119-2 divides test processes into three levels: the Organizational Test Process (produces OTP and OTS), the Test Management Process (planning, monitoring, control, closure), and the Dynamic Test Process (design, implementation, execution).'
    },
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
