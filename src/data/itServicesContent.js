// IT & Governance content extracted from DOCX files - text used exactly as-is from source documents

export const itServicesContent = {
  aiGovernance: {
    title: "AI & AI Regulatory Governance",
    summary: "AI & AI Regulatory Governance establishes disciplined oversight to manage AI use cases, risk classification, monitoring, and accountability for AI-driven outcomes. As AI adoption expands across products, operations, and decision workflows, unmanaged choices can create control failures, inconsistent results, and regulatory exposure. Quantum delivers governance-first, control-driven advisory grounded in Clarity, Consistency, Compliance, Communication, Control, and Comprehensiveness, translating framework expectations into practical operating discipline. The outcome is improved reliability, audit defensibility, and scalable governance aligned to enterprise needs.",
    cards: [
      {
        title: "Discovery & Operating Context",
        description: "We begin by clarifying where AI is used (or planned), how outcomes are relied on, and which decisions AI influences. This stage surfaces dependencies across data, systems, vendors, and people so governance is designed around real operating conditions—not assumptions. We also align on stakeholder expectations and regulatory sensitivity to set clear objectives and boundaries for the engagement.",
        purpose: [
          "Understand scope, dependencies, and decision points tied to AI use",
          "Identify critical risks, compliance expectations, and stakeholder needs",
          "Define objectives, boundaries, and accountability requirements"
        ],
        whyItMatters: [
          "Creates clarity on what must be governed and why",
          "Prevents fragmented oversight and inconsistent decisions",
          "Improves control over risk from the start"
        ]
      },
      {
        title: "Current-State Assessment & Gap Analysis",
        description: "We assess current AI-related practices and artifacts—such as use-case inventories, documentation, approvals, monitoring, and escalation routines—to determine where controls are strong and where risk is unmanaged. Gaps and overlaps are identified across policy, process, and evidence, with attention to where outcomes could fail under scrutiny. Findings are prioritized based on impact and feasibility to establish a practical improvement path.",
        purpose: [
          "Assess current practices, documentation, and control effectiveness",
          "Identify gaps, overlaps, and unmanaged risks",
          "Prioritize remediation based on impact and feasibility"
        ],
        whyItMatters: [
          "Reduces exposure caused by undocumented or inconsistent practices",
          "Improves audit defensibility through clearer evidence and ownership",
          "Creates a fact-based baseline for improvement"
        ]
      },
      {
        title: "Governance Design & Control Standards",
        description: "We design a governance model that makes AI accountability operational—defining decision rights, oversight routines, and escalation paths that teams can follow consistently. Control standards are established for key moments in the AI lifecycle (intake, approval, change, monitoring, and retirement) with clear documentation expectations. The focus is on controls that are practical, repeatable, and scalable as AI usage grows.",
        purpose: [
          "Define roles, decision rights, escalation paths, and oversight routines",
          "Establish practical control standards and documentation expectations",
          "Align governance to operating reality and scalability needs"
        ],
        whyItMatters: [
          "Improves operational control and accountability",
          "Strengthens predictability and consistency across teams and vendors",
          "Supports scalable governance as complexity increases"
        ],
        frameworkReference: "NIST AI Risk Management Framework-aligned governance to reinforce transparency, reliability, and monitoring discipline"
      },
      {
        title: "Operating Discipline & Monitoring",
        description: "We translate governance into repeatable operating discipline—how approvals happen, how changes are evaluated, how exceptions are handled, and how monitoring is sustained. Monitoring metrics and reporting cadence are defined so performance, drift, and emerging risks are visible early and acted on consistently. This stage also establishes a controlled feedback loop to refine controls as models, data, and regulations evolve.",
        purpose: [
          "Define repeatable workflows for approvals, changes, and exceptions",
          "Establish monitoring metrics and reporting cadence",
          "Create a controlled mechanism for continuous refinement"
        ],
        whyItMatters: [
          "Prevents governance drift and control decay over time",
          "Improves reliability and reduces disruption risk",
          "Creates measurable oversight for stakeholder confidence"
        ]
      }
    ]
  },

  dataGovernance: {
    title: "Data Governance",
    summary: "Data Governance establishes disciplined oversight to manage data ownership, quality standards, validation controls, and decision reliability across reporting and analytics with clear accountability, consistent documentation, and controlled oversight. When organizations lack defined ownership, quality expectations, and documentation discipline, downstream reporting and analytics inherit errors, ambiguity, and inconsistency—undermining decision confidence and regulatory defensibility. Quantum delivers governance-first, control-driven advisory grounded in Clarity, Consistency, Compliance, Communication, Control, and Comprehensiveness, translating framework expectations into practical operating discipline. The outcome is improved data reliability, audit defensibility, and scalable governance aligned to enterprise needs.",
    cards: [
      {
        title: "Discovery & Operating Context",
        description: "This stage establishes a shared understanding of how data is created, used, moved, and relied on across key business processes, reporting, and analytics. We clarify where data quality directly impacts financial reporting, compliance obligations, and strategic decisions so governance efforts are focused on what matters most. Stakeholder needs and regulatory requirements are captured to define scope and objectives before any design work begins.",
        purpose: [
          "Understand scope, dependencies, and decision points tied to data",
          "Identify critical risks, compliance expectations, and stakeholder needs",
          "Define objectives, boundaries, and accountability requirements"
        ],
        whyItMatters: [
          "Creates clarity on what must be governed and why",
          "Prevents fragmented oversight and inconsistent decisions",
          "Improves control over risk from the start"
        ]
      },
      {
        title: "Current-State Assessment & Gap Analysis",
        description: "This stage evaluates the current governance maturity—policies, documentation, data definitions, quality checks, and control execution—against the level of reliability the organization needs. We identify where ownership is unclear, where definitions conflict, and where quality issues go undetected until they cause downstream problems. Findings are prioritized by impact and feasibility to establish a clear remediation path.",
        purpose: [
          "Assess current practices, documentation, and control effectiveness",
          "Identify gaps, overlaps, and unmanaged risks",
          "Prioritize remediation based on impact and feasibility"
        ],
        whyItMatters: [
          "Reduces exposure caused by undocumented or inconsistent practices",
          "Improves audit defensibility through clearer evidence and ownership",
          "Creates a fact-based baseline for improvement"
        ]
      },
      {
        title: "Governance Design & Control Standards",
        description: "This stage defines the governance model that makes accountability real—clear ownership, decision rights, escalation paths, and oversight routines that fit how work actually happens. We establish control standards for data validation, documentation, quality monitoring, and permitted use with practical expectations teams can follow. The result is a governance design that is sustainable, scalable, and tied to real operating conditions.",
        purpose: [
          "Define roles, decision rights, escalation paths, and oversight routines",
          "Establish practical control standards and documentation expectations",
          "Align governance to operating reality and scalability needs"
        ],
        whyItMatters: [
          "Improves operational control and accountability",
          "Strengthens predictability and consistency across teams and vendors",
          "Supports scalable governance as complexity increases"
        ],
        frameworkReference: "DAMA-DMBOK-aligned data governance principles to reinforce ownership, quality, and permitted use discipline"
      },
      {
        title: "Operating Discipline & Monitoring",
        description: "This stage operationalizes governance through repeatable workflows—how changes are approved, exceptions are handled, data issues are logged and resolved, and quality is monitored over time. We define metrics and reporting cadence so leadership can see whether governance is working or drifting. A controlled feedback loop is established to refine controls as the data environment and business needs evolve.",
        purpose: [
          "Define repeatable workflows for approvals, changes, and exceptions",
          "Establish monitoring metrics and reporting cadence",
          "Create a controlled mechanism for continuous refinement"
        ],
        whyItMatters: [
          "Prevents governance drift and control decay over time",
          "Improves reliability and reduces disruption risk",
          "Creates measurable oversight for stakeholder confidence"
        ]
      }
    ]
  },

  digitalEnablement: {
    title: "Digital Enablement & IT Governance Services",
    summary: "Digital Enablement & IT Governance Services provide independent governance and assurance to reduce technology-driven operational, financial, and regulatory risk. As organizations invest in new systems, tools, and platforms to enable growth, unmanaged governance gaps can undermine adoption, erode controls, and create audit findings that are costly to remediate. Quantum delivers governance-first, control-driven advisory grounded in Clarity, Consistency, Compliance, Communication, Control, and Comprehensiveness, translating framework expectations into practical operating discipline. The outcome is improved reliability, audit defensibility, and scalable governance aligned to enterprise needs.",
    cards: [
      {
        title: "Technology Governance Discovery & Scope",
        description: "This stage establishes a clear understanding of how technology enables critical business processes and where risk concentrates across systems, vendors, and data flows. We clarify the governance landscape—current policies, control points, and decision-making practices—to identify dependencies and stakeholder expectations. The result is a defined scope that focuses governance efforts where they will have the greatest impact.",
        purpose: [
          "Understand the service area scope, dependencies, and decision points",
          "Identify critical risks, compliance needs, and stakeholder expectations",
          "Define objectives, boundaries, and accountability requirements"
        ],
        whyItMatters: [
          "Creates clarity on what must be governed and why",
          "Prevents fragmented oversight and inconsistent decisions",
          "Improves control over risk from the start"
        ]
      },
      {
        title: "Current-State Assessment & Risk Baseline",
        description: "This stage evaluates governance maturity across policies, controls, and day-to-day operating practices to identify where gaps create audit, security, or operational exposure. We assess whether existing controls work in practice—not just in policy—and prioritize findings based on impact and feasibility. The output is a fact-based baseline that supports targeted improvement.",
        purpose: [
          "Assess current practices, documentation, and control effectiveness",
          "Identify gaps, overlaps, and unmanaged risks",
          "Prioritize remediation based on impact and feasibility"
        ],
        whyItMatters: [
          "Reduces exposure caused by undocumented or inconsistent practices",
          "Improves audit defensibility through clearer evidence and ownership",
          "Creates a fact-based baseline for improvement"
        ]
      },
      {
        title: "Governance Model & Control Design",
        description: "This stage defines how governance operates in practice—who owns what, how decisions are escalated, and what oversight mechanisms enforce accountability. We design practical control standards tied to key technology risks (access, change, data, vendor), with clear documentation expectations. The focus is on a sustainable model that scales as complexity increases.",
        purpose: [
          "Define roles, decision rights, escalation paths, and oversight routines",
          "Establish practical control standards and documentation expectations",
          "Align governance to operating reality and scalability needs"
        ],
        whyItMatters: [
          "Improves operational control and accountability",
          "Strengthens predictability and consistency across teams and vendors",
          "Supports scalable governance as complexity increases"
        ],
        frameworkReference: "COBIT and ISO/IEC 38500-aligned governance principles to reinforce oversight credibility"
      },
      {
        title: "Policy, Standards & Operating Discipline",
        description: "This stage converts governance intent into clear, usable policies and standards that teams can execute consistently. We define repeatable workflows for approvals, change handling, exception resolution, and incident escalation. Monitoring metrics and reporting cadence are established so governance performance is visible and actionable.",
        purpose: [
          "Define repeatable workflows for approvals, changes, and exceptions",
          "Establish monitoring metrics and reporting cadence",
          "Create a controlled mechanism for continuous refinement"
        ],
        whyItMatters: [
          "Prevents governance drift and control decay over time",
          "Improves reliability and reduces disruption risk",
          "Creates measurable oversight for stakeholder confidence"
        ]
      },
      {
        title: "Assurance Checkpoints & Stakeholder Readiness",
        description: "This stage provides independent assurance during high-risk initiatives, major changes, or readiness events where governance and controls will be scrutinized. We conduct checkpoint reviews to confirm controls are operating as designed, documentation is complete, and accountability is clear. The result is reduced risk of late-stage failures and improved stakeholder confidence.",
        purpose: [
          "Confirm controls are operating as designed through independent review",
          "Validate documentation completeness and accountability clarity",
          "Prepare for audits, regulatory reviews, or strategic events"
        ],
        whyItMatters: [
          "Reduces risk of late-stage control failures",
          "Improves audit defensibility and stakeholder confidence",
          "Supports readiness for high-scrutiny events"
        ]
      },
      {
        title: "Continuous Improvement & Governance Sustainment",
        description: "This stage ensures governance remains effective as systems, vendors, and regulations change. We track governance performance, recurring exceptions, and emerging risks, then refine controls and processes to maintain alignment. The result is durable governance that scales with growth and adapts to change.",
        purpose: [
          "Monitor governance effectiveness and exception trends",
          "Refine controls and processes based on performance and change",
          "Sustain governance alignment as complexity increases"
        ],
        whyItMatters: [
          "Prevents governance erosion over time",
          "Improves long-term reliability and control sustainability",
          "Creates adaptable governance that scales with growth"
        ]
      }
    ]
  },

  deliveryFramework: {
    title: "IT Service Delivery Framework",
    summary: "IT Services Delivery Framework establishes disciplined oversight to manage service ownership, performance expectations, and operational reliability across internal and external delivery with clear accountability, consistent documentation, and controlled oversight. When organizations lack defined service ownership, consistent measurement, and disciplined incident management, reliability suffers, root causes go unresolved, and service issues become recurring firefights. Quantum delivers governance-first, control-driven advisory grounded in Clarity, Consistency, Compliance, Communication, Control, and Comprehensiveness, translating framework expectations into practical operating discipline. The outcome is improved reliability, audit defensibility, and scalable governance aligned to enterprise needs.",
    cards: [
      {
        title: "Discovery & Operating Context",
        description: "This phase defines what \"good service\" means in your environment by clarifying service boundaries, user expectations, and the practical constraints of internal and vendor delivery. It also identifies where service performance directly impacts operational continuity, user productivity, and stakeholder confidence so governance efforts are focused where they matter most.",
        purpose: [
          "Understand the service area scope, dependencies, and decision points",
          "Identify critical risks, compliance needs, and stakeholder expectations",
          "Define objectives, boundaries, and accountability requirements"
        ],
        whyItMatters: [
          "Creates clarity on what must be governed and why",
          "Prevents fragmented oversight and inconsistent decisions",
          "Improves control over risk from the start"
        ]
      },
      {
        title: "Current-State Assessment & Gap Analysis",
        description: "This phase evaluates whether service performance is measurable and explainable using consistent definitions, rather than interpreted differently by each team or vendor. It also surfaces structural breakdowns in escalation, root-cause resolution, and knowledge capture that drive recurring outages and user frustration.",
        purpose: [
          "Assess current practices, documentation, and control effectiveness",
          "Identify gaps, overlaps, and unmanaged risks",
          "Prioritize remediation based on impact and feasibility"
        ],
        whyItMatters: [
          "Reduces exposure caused by undocumented or inconsistent practices",
          "Improves audit defensibility through clearer evidence and ownership",
          "Creates a fact-based baseline for improvement"
        ]
      },
      {
        title: "Governance Design & Control Standards",
        description: "This phase defines how service delivery governance operates in practice—who owns what, how decisions are escalated, and what oversight mechanisms enforce accountability. We design practical control standards tied to service level expectations, incident handling, and change management.",
        purpose: [
          "Define roles, decision rights, escalation paths, and oversight routines",
          "Establish practical control standards and documentation expectations",
          "Align governance to operating reality and scalability needs"
        ],
        whyItMatters: [
          "Improves operational control and accountability",
          "Strengthens predictability and consistency across teams and vendors",
          "Supports scalable governance as complexity increases"
        ]
      },
      {
        title: "Operating Discipline & Monitoring",
        description: "This phase translates governance into repeatable operating discipline—how incidents are handled, changes are approved, exceptions are escalated, and performance is monitored over time. We define metrics and reporting cadence so leadership can see whether service delivery is reliable or drifting.",
        purpose: [
          "Define repeatable workflows for approvals, changes, and exceptions",
          "Establish monitoring metrics and reporting cadence",
          "Create a controlled mechanism for continuous refinement"
        ],
        whyItMatters: [
          "Prevents governance drift and control decay over time",
          "Improves reliability and reduces disruption risk",
          "Creates measurable oversight for stakeholder confidence"
        ]
      }
    ]
  },

  enterpriseItGovernance: {
    title: "IT Strategy & Enterprise IT Governance",
    summary: "IT Strategy & Enterprise IT Governance establishes disciplined oversight to manage technology investment decisions, prioritization, funding discipline, and oversight with clear accountability, consistent documentation, and controlled oversight. When organizations lack structured prioritization, transparent business cases, and disciplined investment oversight, technology spend becomes fragmented, outcomes become unpredictable, and strategic alignment erodes. Quantum delivers governance-first, control-driven advisory grounded in Clarity, Consistency, Compliance, Communication, Control, and Comprehensiveness, translating framework expectations into practical operating discipline. The outcome is improved reliability, audit defensibility, and scalable governance aligned to enterprise needs.",
    cards: [
      {
        title: "Discovery & Operating Context",
        description: "This phase clarifies what the organization is trying to achieve with technology and what constraints shape decision-making, including capacity, risk tolerance, and regulatory expectations. It also identifies who currently influences technology decisions, how priorities are set, and where conflicts or gaps in accountability exist.",
        purpose: [
          "Understand the service area scope, dependencies, and decision points",
          "Identify critical risks, compliance needs, and stakeholder expectations",
          "Define objectives, boundaries, and accountability requirements"
        ],
        whyItMatters: [
          "Creates clarity on what must be governed and why",
          "Prevents fragmented oversight and inconsistent decisions",
          "Improves control over risk from the start"
        ]
      },
      {
        title: "Current-State Assessment & Gap Analysis",
        description: "This phase evaluates whether prioritization and funding decisions are supported by consistent criteria, comparable business cases, and transparent tradeoffs—not informal influence or urgency. It also identifies where governance breakdowns lead to project churn, budget overruns, and misaligned investments.",
        purpose: [
          "Assess current practices, documentation, and control effectiveness",
          "Identify gaps, overlaps, and unmanaged risks",
          "Prioritize remediation based on impact and feasibility"
        ],
        whyItMatters: [
          "Reduces exposure caused by undocumented or inconsistent practices",
          "Improves audit defensibility through clearer evidence and ownership",
          "Creates a fact-based baseline for improvement"
        ]
      },
      {
        title: "Governance Design & Control Standards",
        description: "This phase defines how IT governance operates in practice—who owns what, how decisions are escalated, and what oversight mechanisms enforce accountability. We design practical control standards tied to investment approval, prioritization, and performance tracking.",
        purpose: [
          "Define roles, decision rights, escalation paths, and oversight routines",
          "Establish practical control standards and documentation expectations",
          "Align governance to operating reality and scalability needs"
        ],
        whyItMatters: [
          "Improves operational control and accountability",
          "Strengthens predictability and consistency across teams and vendors",
          "Supports scalable governance as complexity increases"
        ]
      },
      {
        title: "Operating Discipline & Monitoring",
        description: "This phase translates governance into repeatable operating discipline—how investments are tracked, changes are approved, exceptions are escalated, and performance is monitored over time. We define metrics and reporting cadence so leadership can see whether IT governance is working or drifting.",
        purpose: [
          "Define repeatable workflows for approvals, changes, and exceptions",
          "Establish monitoring metrics and reporting cadence",
          "Create a controlled mechanism for continuous refinement"
        ],
        whyItMatters: [
          "Prevents governance drift and control decay over time",
          "Improves reliability and reduces disruption risk",
          "Creates measurable oversight for stakeholder confidence"
        ]
      }
    ]
  },

  systemImplementation: {
    title: "System Implementation Ride-Along Assurance",
    summary: "System Implementation Ride-Along Assurance provides structured oversight to ensure accountability, controls, and documentation throughout design, configuration, and build. During implementation, organizations often lack the capacity to track decisions, verify configurations, and maintain control documentation—leading to post-go-live rework, control gaps, and audit findings. Quantum delivers governance-first, control-driven advisory grounded in Clarity, Consistency, Compliance, Communication, Control, and Comprehensiveness, translating framework expectations into practical operating discipline. The outcome is improved reliability, audit defensibility, and scalable governance aligned to enterprise needs.",
    cards: [
      {
        title: "Discovery & Operating Context",
        description: "This phase establishes a clear understanding of the implementation scope, objectives, and constraints so governance is aligned to what matters most. We identify key stakeholders, decision points, and risk areas that require oversight.",
        purpose: [
          "Understand the service area scope, dependencies, and decision points",
          "Identify critical risks, compliance needs, and stakeholder expectations",
          "Define objectives, boundaries, and accountability requirements"
        ],
        whyItMatters: [
          "Creates clarity on what must be governed and why",
          "Prevents fragmented oversight and inconsistent decisions",
          "Improves control over risk from the start"
        ]
      },
      {
        title: "Current-State Assessment & Gap Analysis",
        description: "This phase evaluates the current implementation approach against governance expectations to identify where controls, documentation, or accountability are at risk. We prioritize findings based on impact and feasibility.",
        purpose: [
          "Assess current practices, documentation, and control effectiveness",
          "Identify gaps, overlaps, and unmanaged risks",
          "Prioritize remediation based on impact and feasibility"
        ],
        whyItMatters: [
          "Reduces exposure caused by undocumented or inconsistent practices",
          "Improves audit defensibility through clearer evidence and ownership",
          "Creates a fact-based baseline for improvement"
        ]
      },
      {
        title: "Governance Design & Control Standards",
        description: "This phase defines how implementation governance operates in practice—who owns what, how decisions are escalated, and what oversight mechanisms enforce accountability. We design practical control standards tied to configuration, testing, and go-live readiness.",
        purpose: [
          "Define roles, decision rights, escalation paths, and oversight routines",
          "Establish practical control standards and documentation expectations",
          "Align governance to operating reality and scalability needs"
        ],
        whyItMatters: [
          "Improves operational control and accountability",
          "Strengthens predictability and consistency across teams and vendors",
          "Supports scalable governance as complexity increases"
        ]
      },
      {
        title: "Operating Discipline & Monitoring",
        description: "This phase translates governance into repeatable operating discipline—how decisions are tracked, changes are approved, exceptions are escalated, and progress is monitored over time. We define metrics and reporting cadence so leadership can see whether implementation is on track.",
        purpose: [
          "Define repeatable workflows for approvals, changes, and exceptions",
          "Establish monitoring metrics and reporting cadence",
          "Create a controlled mechanism for continuous refinement"
        ],
        whyItMatters: [
          "Prevents governance drift and control decay over time",
          "Improves reliability and reduces disruption risk",
          "Creates measurable oversight for stakeholder confidence"
        ]
      }
    ]
  },

  vendorRiskManagement: {
    title: "Third-Party & Vendor Risk Management",
    summary: "Third-Party & Vendor Risk Management establishes disciplined oversight to manage vendor onboarding, due diligence, monitoring, and exit governance across the vendor lifecycle with clear accountability, consistent documentation, and controlled oversight. When organizations lack structured intake, tiered due diligence, and ongoing monitoring discipline, critical vendor relationships become risk blind spots—exposing the organization to performance, security, and compliance failures. Quantum delivers governance-first, control-driven advisory grounded in Clarity, Consistency, Compliance, Communication, Control, and Comprehensiveness, translating framework expectations into practical operating discipline. The outcome is improved reliability, audit defensibility, and scalable governance aligned to enterprise needs.",
    cards: [
      {
        title: "Scope & Objectives Definition",
        description: "This phase clarifies which vendors require oversight and what level of governance is appropriate based on criticality, data access, and service impact. We define objectives, boundaries, and accountability requirements so governance efforts are focused and proportional.",
        purpose: [
          "Understand the service area scope, dependencies, and decision points",
          "Identify critical risks, compliance needs, and stakeholder expectations",
          "Define objectives, boundaries, and accountability requirements"
        ],
        whyItMatters: [
          "Creates clarity on what must be governed and why",
          "Prevents fragmented oversight and inconsistent decisions",
          "Improves control over risk from the start"
        ]
      },
      {
        title: "Current-State Assessment & Gap Analysis",
        description: "This phase evaluates current vendor management practices—onboarding, due diligence, monitoring, and exit—against the level of reliability the organization needs. We identify where ownership is unclear, where due diligence is inconsistent, and where monitoring gaps create hidden risk.",
        purpose: [
          "Assess current practices, documentation, and control effectiveness",
          "Identify gaps, overlaps, and unmanaged risks",
          "Prioritize remediation based on impact and feasibility"
        ],
        whyItMatters: [
          "Reduces exposure caused by undocumented or inconsistent practices",
          "Improves audit defensibility through clearer evidence and ownership",
          "Creates a fact-based baseline for improvement"
        ]
      },
      {
        title: "Governance Design & Control Standards",
        description: "This phase defines how vendor governance operates in practice—who owns what, how decisions are escalated, and what oversight mechanisms enforce accountability. We design practical control standards tied to vendor onboarding, due diligence, monitoring, and exit.",
        purpose: [
          "Define roles, decision rights, escalation paths, and oversight routines",
          "Establish practical control standards and documentation expectations",
          "Align governance to operating reality and scalability needs"
        ],
        whyItMatters: [
          "Improves operational control and accountability",
          "Strengthens predictability and consistency across teams and vendors",
          "Supports scalable governance as complexity increases"
        ]
      },
      {
        title: "Operating Discipline & Monitoring",
        description: "This phase translates governance into repeatable operating discipline—how vendors are monitored, issues are escalated, exceptions are handled, and performance is tracked over time. We define metrics and reporting cadence so leadership can see whether vendor governance is working or drifting.",
        purpose: [
          "Define repeatable workflows for approvals, changes, and exceptions",
          "Establish monitoring metrics and reporting cadence",
          "Create a controlled mechanism for continuous refinement"
        ],
        whyItMatters: [
          "Prevents governance drift and control decay over time",
          "Improves reliability and reduces disruption risk",
          "Creates measurable oversight for stakeholder confidence"
        ]
      }
    ]
  },

  cloudGovernance: {
    title: "Cloud Governance",
    summary: "Cloud Governance establishes disciplined oversight to manage cloud cost accountability, security configuration, access discipline, and compliance alignment with clear accountability, consistent documentation, and controlled oversight. When organizations lack structured cloud governance, cost overruns, security misconfigurations, and compliance gaps accumulate—creating risk that compounds as cloud adoption grows. Quantum delivers governance-first, control-driven advisory grounded in Clarity, Consistency, Compliance, Communication, Control, and Comprehensiveness, translating framework expectations into practical operating discipline. The outcome is improved reliability, audit defensibility, and scalable governance aligned to enterprise needs.",
    cards: [
      {
        title: "Discovery & Operating Context",
        description: "This stage establishes how cloud is actually being used across infrastructure, platforms, and applications, including where sensitive data lives and which workloads are mission-critical. We clarify current governance practices, ownership, and decision-making to identify gaps and misalignments. Stakeholder expectations and compliance requirements are captured to define scope and objectives before design work begins.",
        purpose: [
          "Understand scope, dependencies, and decision points tied to cloud use",
          "Identify critical risks, compliance expectations, and stakeholder needs",
          "Define objectives, boundaries, and accountability requirements"
        ],
        whyItMatters: [
          "Creates clarity on what must be governed and why",
          "Prevents fragmented oversight and inconsistent decisions",
          "Improves control over risk from the start"
        ]
      },
      {
        title: "Current-State Assessment & Gap Analysis",
        description: "This stage evaluates current cloud governance maturity across cost controls, identity and access management, configuration baselines, logging and monitoring, and incident response. We identify where controls are missing, inconsistent, or undocumented—and prioritize findings based on impact and feasibility.",
        purpose: [
          "Assess current practices, documentation, and control effectiveness",
          "Identify gaps, overlaps, and unmanaged risks",
          "Prioritize remediation based on impact and feasibility"
        ],
        whyItMatters: [
          "Reduces exposure caused by undocumented or inconsistent practices",
          "Improves audit defensibility through clearer evidence and ownership",
          "Creates a fact-based baseline for improvement"
        ]
      },
      {
        title: "Governance Design & Control Standards",
        description: "This stage defines the governance model that makes cloud oversight repeatable: clear ownership, decision rights, escalation paths, and oversight routines across subscriptions, accounts, and workloads. We establish control standards for cost management, security configuration, access discipline, and compliance alignment.",
        purpose: [
          "Define roles, decision rights, escalation paths, and oversight routines",
          "Establish practical control standards and documentation expectations",
          "Align governance to operating reality and scalability needs"
        ],
        whyItMatters: [
          "Improves operational control and accountability",
          "Strengthens predictability and consistency across teams and vendors",
          "Supports scalable governance as complexity increases"
        ],
        frameworkReference: "NIST Cybersecurity Framework and ISO/IEC 27001-aligned governance practices for secure, controlled cloud operations"
      },
      {
        title: "Operating Discipline & Monitoring",
        description: "This stage operationalizes cloud governance through defined workflows for approvals, changes, exceptions, and incident-driven adjustments—so controls are consistently applied and monitored over time. We define metrics and reporting cadence so leadership can see whether cloud governance is working or drifting.",
        purpose: [
          "Define repeatable workflows for approvals, changes, and exceptions",
          "Establish monitoring metrics and reporting cadence",
          "Create a controlled mechanism for continuous refinement"
        ],
        whyItMatters: [
          "Prevents governance drift and control decay over time",
          "Improves reliability and reduces disruption risk",
          "Creates measurable oversight for stakeholder confidence"
        ]
      }
    ]
  },

  itControlsCybersecurity: {
    title: "IT General Controls & Cybersecurity Governance",
    summary: "IT General Controls & Cybersecurity Governance establishes disciplined oversight to manage access, change, and operational resilience controls that underpin system reliability and audit outcomes with clear accountability, consistent documentation, and controlled oversight. When organizations lack structured control ownership, consistent execution, and defensible evidence, audit findings accumulate, remediation cycles repeat, and stakeholder confidence erodes. Quantum delivers governance-first, control-driven advisory grounded in Clarity, Consistency, Compliance, Communication, Control, and Comprehensiveness, translating framework expectations into practical operating discipline. The outcome is improved reliability, audit defensibility, and scalable governance aligned to enterprise needs.",
    cards: [
      {
        title: "Discovery & Operating Context",
        description: "This phase identifies which systems, applications, and infrastructure truly drive operational continuity and reporting integrity, so control focus is proportional to risk. It also clarifies the \"control ecosystem\"—who owns controls, who executes them, and where evidence is expected to exist.",
        purpose: [
          "Understand the service area scope, dependencies, and decision points",
          "Identify critical risks, compliance needs, and stakeholder expectations",
          "Define objectives, boundaries, and accountability requirements"
        ],
        whyItMatters: [
          "Creates clarity on what must be governed and why",
          "Prevents fragmented oversight and inconsistent decisions",
          "Improves control over risk from the start"
        ]
      },
      {
        title: "Current-State Assessment & Gap Analysis",
        description: "This phase evaluates how controls work in practice by testing whether execution is consistent, evidenced, and repeatable—not just documented in policy. It also distinguishes control design weaknesses from execution breakdowns so remediation is targeted effectively.",
        purpose: [
          "Assess current practices, documentation, and control effectiveness",
          "Identify gaps, overlaps, and unmanaged risks",
          "Prioritize remediation based on impact and feasibility"
        ],
        whyItMatters: [
          "Reduces exposure caused by undocumented or inconsistent practices",
          "Improves audit defensibility through clearer evidence and ownership",
          "Creates a fact-based baseline for improvement"
        ]
      },
      {
        title: "Governance Design & Control Standards",
        description: "This phase defines how IT controls governance operates in practice—who owns what, how decisions are escalated, and what oversight mechanisms enforce accountability. We design practical control standards tied to access management, change management, and operational resilience.",
        purpose: [
          "Define roles, decision rights, escalation paths, and oversight routines",
          "Establish practical control standards and documentation expectations",
          "Align governance to operating reality and scalability needs"
        ],
        whyItMatters: [
          "Improves operational control and accountability",
          "Strengthens predictability and consistency across teams and vendors",
          "Supports scalable governance as complexity increases"
        ]
      },
      {
        title: "Operating Discipline & Monitoring",
        description: "This phase translates governance into repeatable operating discipline—how access reviews happen, changes are approved, exceptions are escalated, and control performance is monitored over time. We define metrics and reporting cadence so leadership can see whether IT controls are reliable or drifting.",
        purpose: [
          "Define repeatable workflows for approvals, changes, and exceptions",
          "Establish monitoring metrics and reporting cadence",
          "Create a controlled mechanism for continuous refinement"
        ],
        whyItMatters: [
          "Prevents governance drift and control decay over time",
          "Improves reliability and reduces disruption risk",
          "Creates measurable oversight for stakeholder confidence"
        ]
      }
    ]
  },

  privacyDataProtection: {
    title: "Privacy & Data Protection Compliance",
    summary: "Privacy & Data Protection Compliance establishes disciplined oversight to manage responsible data handling, transparency, and lifecycle governance across systems and vendors with clear accountability, consistent documentation, and controlled oversight. When organizations lack structured intake, tiered due diligence, and ongoing monitoring discipline, privacy commitments become aspirational rather than operational—exposing the organization to regulatory, reputational, and contractual risk. Quantum delivers governance-first, control-driven advisory grounded in Clarity, Consistency, Compliance, Communication, Control, and Comprehensiveness, translating framework expectations into practical operating discipline. The outcome is improved reliability, audit defensibility, and scalable governance aligned to enterprise needs.",
    cards: [
      {
        title: "Discovery & Operating Context",
        description: "This phase clarifies what \"privacy success\" means in your operating reality by distinguishing essential data use from avoidable collection and uncontrolled sharing. It also identifies where privacy risk concentrates—across systems, vendors, geographies, and data types—so governance efforts are focused proportionally.",
        purpose: [
          "Understand the service area scope, dependencies, and decision points",
          "Identify critical risks, compliance needs, and stakeholder expectations",
          "Define objectives, boundaries, and accountability requirements"
        ],
        whyItMatters: [
          "Creates clarity on what must be governed and why",
          "Prevents fragmented oversight and inconsistent decisions",
          "Improves control over risk from the start"
        ]
      },
      {
        title: "Current-State Assessment & Gap Analysis",
        description: "This phase tests whether privacy practices are provable through evidence, not just described in policy, including how requests, incidents, and exceptions are handled. It also highlights high-friction workflows that create compliance gaps or user frustration.",
        purpose: [
          "Assess current practices, documentation, and control effectiveness",
          "Identify gaps, overlaps, and unmanaged risks",
          "Prioritize remediation based on impact and feasibility"
        ],
        whyItMatters: [
          "Reduces exposure caused by undocumented or inconsistent practices",
          "Improves audit defensibility through clearer evidence and ownership",
          "Creates a fact-based baseline for improvement"
        ]
      },
      {
        title: "Governance Design & Control Standards",
        description: "This phase defines how privacy governance operates in practice—who owns what, how decisions are escalated, and what oversight mechanisms enforce accountability. We design practical control standards tied to data collection, consent, access, retention, and incident response.",
        purpose: [
          "Define roles, decision rights, escalation paths, and oversight routines",
          "Establish practical control standards and documentation expectations",
          "Align governance to operating reality and scalability needs"
        ],
        whyItMatters: [
          "Improves operational control and accountability",
          "Strengthens predictability and consistency across teams and vendors",
          "Supports scalable governance as complexity increases"
        ]
      },
      {
        title: "Operating Discipline & Monitoring",
        description: "This phase translates governance into repeatable operating discipline—how data requests are handled, incidents are escalated, exceptions are documented, and compliance is monitored over time. We define metrics and reporting cadence so leadership can see whether privacy governance is working or drifting.",
        purpose: [
          "Define repeatable workflows for approvals, changes, and exceptions",
          "Establish monitoring metrics and reporting cadence",
          "Create a controlled mechanism for continuous refinement"
        ],
        whyItMatters: [
          "Prevents governance drift and control decay over time",
          "Improves reliability and reduces disruption risk",
          "Creates measurable oversight for stakeholder confidence"
        ]
      }
    ]
  },

  softwareAssetManagement: {
    title: "Software Asset Management (SAM)",
    summary: "Software Asset Management (SAM) establishes disciplined oversight to manage software licensing, entitlements, and compliance across the organization with clear accountability, consistent documentation, and controlled oversight. When organizations lack structured license tracking, usage monitoring, and vendor audit readiness, cost overruns, compliance failures, and audit exposures accumulate. Quantum delivers governance-first, control-driven advisory grounded in Clarity, Consistency, Compliance, Communication, Control, and Comprehensiveness, translating framework expectations into practical operating discipline. The outcome is improved reliability, audit defensibility, and scalable governance aligned to enterprise needs.",
    cards: [
      {
        title: "Discovery & Operating Context",
        description: "This phase establishes what software is deployed, how licenses are structured, and where compliance risk concentrates across the organization. We clarify current tracking practices, ownership, and decision-making to identify gaps and misalignments.",
        purpose: [
          "Understand the service area scope, dependencies, and decision points",
          "Identify critical risks, compliance needs, and stakeholder expectations",
          "Define objectives, boundaries, and accountability requirements"
        ],
        whyItMatters: [
          "Creates clarity on what must be governed and why",
          "Prevents fragmented oversight and inconsistent decisions",
          "Improves control over risk from the start"
        ]
      },
      {
        title: "Current-State Assessment & Gap Analysis",
        description: "This phase evaluates current SAM maturity across license tracking, usage monitoring, procurement controls, and vendor audit readiness. We identify where controls are missing, inconsistent, or undocumented—and prioritize findings based on impact and feasibility.",
        purpose: [
          "Assess current practices, documentation, and control effectiveness",
          "Identify gaps, overlaps, and unmanaged risks",
          "Prioritize remediation based on impact and feasibility"
        ],
        whyItMatters: [
          "Reduces exposure caused by undocumented or inconsistent practices",
          "Improves audit defensibility through clearer evidence and ownership",
          "Creates a fact-based baseline for improvement"
        ]
      },
      {
        title: "Governance Design & Control Standards",
        description: "This phase defines how SAM governance operates in practice—who owns what, how decisions are escalated, and what oversight mechanisms enforce accountability. We design practical control standards tied to license procurement, deployment tracking, usage monitoring, and vendor audit readiness.",
        purpose: [
          "Define roles, decision rights, escalation paths, and oversight routines",
          "Establish practical control standards and documentation expectations",
          "Align governance to operating reality and scalability needs"
        ],
        whyItMatters: [
          "Improves operational control and accountability",
          "Strengthens predictability and consistency across teams and vendors",
          "Supports scalable governance as complexity increases"
        ]
      },
      {
        title: "Operating Discipline & Monitoring",
        description: "This phase translates governance into repeatable operating discipline—how licenses are tracked, usage is monitored, exceptions are escalated, and compliance is maintained over time. We define metrics and reporting cadence so leadership can see whether SAM governance is working or drifting.",
        purpose: [
          "Define repeatable workflows for approvals, changes, and exceptions",
          "Establish monitoring metrics and reporting cadence",
          "Create a controlled mechanism for continuous refinement"
        ],
        whyItMatters: [
          "Prevents governance drift and control decay over time",
          "Improves reliability and reduces disruption risk",
          "Creates measurable oversight for stakeholder confidence"
        ]
      }
    ]
  },

  qaTesting: {
    title: "System Implementation Quality Testing Assurance",
    summary: "System Implementation Quality Testing Assurance provides structured oversight to ensure testing accountability, defect management, and go-live readiness throughout system implementation. During implementation, organizations often lack the capacity to design comprehensive test coverage, track defect resolution, and validate production readiness—leading to post-go-live failures and costly remediation. Quantum delivers governance-first, control-driven advisory grounded in Clarity, Consistency, Compliance, Communication, Control, and Comprehensiveness, translating framework expectations into practical operating discipline. The outcome is improved reliability, audit defensibility, and scalable governance aligned to enterprise needs.",
    cards: [
      {
        title: "Discovery & Operating Context",
        description: "This phase establishes a clear understanding of the testing scope, objectives, and constraints so governance is aligned to what matters most. We identify key stakeholders, decision points, and risk areas that require testing oversight.",
        purpose: [
          "Understand the service area scope, dependencies, and decision points",
          "Identify critical risks, compliance needs, and stakeholder expectations",
          "Define objectives, boundaries, and accountability requirements"
        ],
        whyItMatters: [
          "Creates clarity on what must be governed and why",
          "Prevents fragmented oversight and inconsistent decisions",
          "Improves control over risk from the start"
        ]
      },
      {
        title: "Current-State Assessment & Gap Analysis",
        description: "This phase evaluates the current testing approach against governance expectations to identify where coverage, documentation, or accountability are at risk. We prioritize findings based on impact and feasibility.",
        purpose: [
          "Assess current practices, documentation, and control effectiveness",
          "Identify gaps, overlaps, and unmanaged risks",
          "Prioritize remediation based on impact and feasibility"
        ],
        whyItMatters: [
          "Reduces exposure caused by undocumented or inconsistent practices",
          "Improves audit defensibility through clearer evidence and ownership",
          "Creates a fact-based baseline for improvement"
        ]
      },
      {
        title: "Governance Design & Control Standards",
        description: "This phase defines how testing governance operates in practice—who owns what, how decisions are escalated, and what oversight mechanisms enforce accountability. We design practical control standards tied to test planning, execution, defect management, and go-live readiness.",
        purpose: [
          "Define roles, decision rights, escalation paths, and oversight routines",
          "Establish practical control standards and documentation expectations",
          "Align governance to operating reality and scalability needs"
        ],
        whyItMatters: [
          "Improves operational control and accountability",
          "Strengthens predictability and consistency across teams and vendors",
          "Supports scalable governance as complexity increases"
        ]
      },
      {
        title: "Operating Discipline & Monitoring",
        description: "This phase translates governance into repeatable operating discipline—how tests are tracked, defects are managed, exceptions are escalated, and readiness is validated over time. We define metrics and reporting cadence so leadership can see whether testing is on track.",
        purpose: [
          "Define repeatable workflows for approvals, changes, and exceptions",
          "Establish monitoring metrics and reporting cadence",
          "Create a controlled mechanism for continuous refinement"
        ],
        whyItMatters: [
          "Prevents governance drift and control decay over time",
          "Improves reliability and reduces disruption risk",
          "Creates measurable oversight for stakeholder confidence"
        ]
      }
    ]
  }
};

export default itServicesContent;
