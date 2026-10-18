# 04 Statement of Applicability

Fictional organisation. This Statement of Applicability (SoA) covers all 93 controls in Annex A of ISO/IEC 27001:2022. For each control it states whether the control is applicable, how far it is implemented, why, and which risks in [03-risk-assessment.md](03-risk-assessment.md) it treats. Control titles are shortened. The same data is in [`data/statement-of-applicability.csv`](../data/statement-of-applicability.csv).

## Summary

| Status | Controls |
|---|:-:|
| Implemented | 30 |
| Partially implemented | 54 |
| Planned | 8 |
| Not applicable | 1 |
| **Total** | **93** |

Only one control is excluded (8.30). An IKS that runs a data centre, writes its own scripts and hosts health systems needs almost all of Annex A. Many controls are only partially implemented. This is expected in a first assessment, and the gaps are what the risk treatment plan addresses. A control with no linked risk can still be included because of a legal requirement, a contract or good practice.

## 5 Organizational controls

| Control | Title | Applicable | Status | Justification | Risks |
|---|---|:-:|---|---|---|
| 5.1 | Policies for information security | Yes | Partially implemented | Security policy approved by the board of the IKS. Topic policies are being written. |  |
| 5.2 | Information security roles and responsibilities | Yes | Implemented | Managing director owns information security. Head of security coordinates. Each member municipality has a contact person. |  |
| 5.3 | Segregation of duties | Yes | Partially implemented | Admin rights separated from daily user accounts. Changes to privileged groups need approval. |  |
| 5.4 | Management responsibilities | Yes | Implemented | Security is reported to the board every quarter. |  |
| 5.5 | Contact with authorities | Yes | Implemented | Contact list for KommuneCERT, NSM, the police and Datatilsynet in the incident procedure. |  |
| 5.6 | Contact with special interest groups | Yes | Implemented | Member of KommuneCERT. Takes part in regional IT networks for municipalities. |  |
| 5.7 | Threat intelligence | Yes | Partially implemented | Warnings from NSM and KommuneCERT are received, but not yet tracked to closure. | R07 |
| 5.8 | Information security in project management | Yes | Partially implemented | Security and privacy check in projects for new systems. Not yet used in all projects. |  |
| 5.9 | Inventory of information and other associated assets | Yes | Partially implemented | System list per municipality exists. Internet-facing systems are not fully listed. | R07 |
| 5.10 | Acceptable use of information and other associated assets | Yes | Partially implemented | Rules for employees exist. Rules for school apps are missing. | R09 |
| 5.11 | Return of assets | Yes | Partially implemented | Routine for returning equipment. Differs between municipalities. | R05 |
| 5.12 | Classification of information | Yes | Partially implemented | Classification scheme agreed. Labels not yet applied in Microsoft 365. |  |
| 5.13 | Labelling of information | Yes | Planned | Sensitivity labels in Microsoft 365 based on the classification scheme. |  |
| 5.14 | Information transfer | Yes | Partially implemented | Health information sent through the health network. Encrypted email for other sensitive data. |  |
| 5.15 | Access control | Yes | Partially implemented | Access control policy exists. Access to patient records is broader than needed. | R04 |
| 5.16 | Identity management | Yes | Partially implemented | All users in Active Directory synced to Entra ID. Not connected to the HR system. | R05 |
| 5.17 | Authentication information | Yes | Partially implemented | MFA for all users. Moving everyone to Authenticator with number matching. | R01 |
| 5.18 | Access rights | Yes | Partially implemented | Access granted on request from the municipality. Reviews not done regularly. | R04, R05 |
| 5.19 | Information security in supplier relationships | Yes | Partially implemented | Supplier list exists. Security requirements not set for all suppliers. | R06 |
| 5.20 | Addressing information security within supplier agreements | Yes | Partially implemented | Data processing agreements with main suppliers. Security and remote access clauses to be added. | R06 |
| 5.21 | Managing information security in the ICT supply chain | Yes | Partially implemented | Sub-processor lists collected for main systems. | R06 |
| 5.22 | Monitoring, review and change management of supplier services | Yes | Planned | Annual review of key suppliers, starting with the patient record system and welfare technology. | R06, R08 |
| 5.23 | Information security for use of cloud services | Yes | Partially implemented | Security baseline for Microsoft 365. School cloud services not reviewed. | R09 |
| 5.24 | Information security incident management planning and preparation | Yes | Implemented | Incident procedure in docs/05, approved by the managing director. | R10 |
| 5.25 | Assessment and decision on information security events | Yes | Implemented | Severity levels and criteria in the incident procedure. | R10 |
| 5.26 | Response to information security incidents | Yes | Partially implemented | Response steps written down. Not yet tested in an exercise. | R10 |
| 5.27 | Learning from information security incidents | Yes | Planned | Lessons learned meeting after every serious incident and exercise. | R10 |
| 5.28 | Collection of evidence | Yes | Partially implemented | Evidence handling described in the procedure. Log retention too short. | R10 |
| 5.29 | Information security during disruption | Yes | Partially implemented | Emergency routines for the patient record system. Missing for welfare technology. | R03, R08 |
| 5.30 | ICT readiness for business continuity | Yes | Partially implemented | Second server room exists. Recovery order not agreed with municipalities. | R03, R08 |
| 5.31 | Legal, statutory, regulatory and contractual requirements | Yes | Implemented | Legal requirements listed in docs/06. |  |
| 5.32 | Intellectual property rights | Yes | Implemented | Licences managed centrally. |  |
| 5.33 | Protection of records | Yes | Partially implemented | Case and archive systems hosted for the municipalities. Retention follows each municipality's archive plan. |  |
| 5.34 | Privacy and protection of PII | Yes | Partially implemented | Data processing agreements with all five municipalities. School apps not covered. | R09 |
| 5.35 | Independent review of information security | Yes | Planned | External audit against ISO/IEC 27001 every second year. |  |
| 5.36 | Compliance with policies, rules and standards for information security | Yes | Partially implemented | Internal checks each year. Not yet documented for all areas. |  |
| 5.37 | Documented operating procedures | Yes | Partially implemented | Operating procedures for main systems. Many depend on a few people. |  |

## 6 People controls

| Control | Title | Applicable | Status | Justification | Risks |
|---|---|:-:|---|---|---|
| 6.1 | Screening | Yes | Implemented | References checked. Police certificate for roles with access to health data where the law allows. |  |
| 6.2 | Terms and conditions of employment | Yes | Implemented | Duty of confidentiality signed by all employees. |  |
| 6.3 | Information security awareness, education and training | Yes | Partially implemented | Training for IKS staff. Training offered to municipal staff, but not all take part. | R01, R04 |
| 6.4 | Disciplinary process | Yes | Implemented | Handled through the normal HR process. |  |
| 6.5 | Responsibilities after termination or change of employment | Yes | Partially implemented | Duty of confidentiality continues. Access removal depends on reports from municipalities. | R05 |
| 6.6 | Confidentiality or non-disclosure agreements | Yes | Implemented | Confidentiality agreements with suppliers and consultants. |  |
| 6.7 | Remote working | Yes | Implemented | Remote work on managed devices with VPN or Conditional Access. |  |
| 6.8 | Information security event reporting | Yes | Partially implemented | Service desk receives reports. Report-phishing button planned. | R01, R10 |

## 7 Physical controls

| Control | Title | Applicable | Status | Justification | Risks |
|---|---|:-:|---|---|---|
| 7.1 | Physical security perimeters | Yes | Implemented | Data centre in a locked part of a municipal building. |  |
| 7.2 | Physical entry | Yes | Implemented | Personal key cards and access log for the data centre. |  |
| 7.3 | Securing offices, rooms and facilities | Yes | Implemented | Network rooms in municipal buildings are locked. |  |
| 7.4 | Physical security monitoring | Yes | Implemented | Alarm and camera at the data centre entrance. |  |
| 7.5 | Protecting against physical and environmental threats | Yes | Implemented | Fire suppression, cooling and water leak detection in the data centre. |  |
| 7.6 | Working in secure areas | Yes | Implemented | Visitors and suppliers in the data centre are always accompanied. |  |
| 7.7 | Clear desk and clear screen | Yes | Partially implemented | Automatic screen lock. Clear desk rule not followed everywhere. |  |
| 7.8 | Equipment siting and protection | Yes | Implemented | Servers in locked racks. |  |
| 7.9 | Security of assets off-premises | Yes | Partially implemented | Laptops encrypted. School devices not all encrypted. |  |
| 7.10 | Storage media | Yes | Partially implemented | Disks destroyed when replaced. USB storage not blocked. |  |
| 7.11 | Supporting utilities | Yes | Implemented | UPS and generator for the data centre. |  |
| 7.12 | Cabling security | Yes | Implemented | Cables between buildings in protected ducts. Patch panels in locked rooms. |  |
| 7.13 | Equipment maintenance | Yes | Implemented | Service agreements for data centre equipment. |  |
| 7.14 | Secure disposal or re-use of equipment | Yes | Implemented | Certified data wiping before disposal. |  |

## 8 Technological controls

| Control | Title | Applicable | Status | Justification | Risks |
|---|---|:-:|---|---|---|
| 8.1 | User endpoint devices | Yes | Partially implemented | Employee devices managed in Intune. Some school devices unmanaged. |  |
| 8.2 | Privileged access rights | Yes | Partially implemented | Separate admin accounts. No tiering, and supplier accounts always enabled. | R02, R05, R06 |
| 8.3 | Information access restriction | Yes | Partially implemented | Access per municipality. Access within the patient record system is too broad. | R04 |
| 8.4 | Access to source code | Yes | Implemented | IKS scripts and integrations stored in a private repository with access control. |  |
| 8.5 | Secure authentication | Yes | Partially implemented | MFA for all users. Conditional Access being extended. | R01 |
| 8.6 | Capacity management | Yes | Implemented | Capacity of the virtual platform and storage monitored. |  |
| 8.7 | Protection against malware | Yes | Partially implemented | EDR on clients. Not on all servers. | R02 |
| 8.8 | Management of technical vulnerabilities | Yes | Partially implemented | Monthly patching. No fast track for critical vulnerabilities in edge devices. | R07 |
| 8.9 | Configuration management | Yes | Partially implemented | Baselines for clients in Intune. No baseline for servers and AD. | R02 |
| 8.10 | Information deletion | Yes | Partially implemented | Deletion when systems are phased out. Retention rules set by each municipality. |  |
| 8.11 | Data masking | Yes | Planned | Test copies of specialist systems to use anonymised data where possible. |  |
| 8.12 | Data leakage prevention | Yes | Planned | Rules for national identity numbers and health data in email. |  |
| 8.13 | Information backup | Yes | Partially implemented | Nightly backup to a second site. No immutable copy and few restore tests. | R03 |
| 8.14 | Redundancy of information processing facilities | Yes | Partially implemented | Second server room with spare capacity for the most critical systems. | R03 |
| 8.15 | Logging | Yes | Partially implemented | Logs in each system, kept for a short time. Patient record access logs not reviewed. | R04, R06, R10 |
| 8.16 | Monitoring activities | Yes | Partially implemented | Defender alerts during working hours. No central monitoring or on-call. | R01, R02, R08, R10 |
| 8.17 | Clock synchronization | Yes | Implemented | All servers and network equipment use the same time source. | R10 |
| 8.18 | Use of privileged utility programs | Yes | Partially implemented | Admin tools on admin servers only. Not enforced everywhere. | R02 |
| 8.19 | Installation of software on operational systems | Yes | Partially implemented | Software for employees through Intune. Third-party apps for pupils not controlled. | R09 |
| 8.20 | Networks security | Yes | Partially implemented | Firewalls between municipalities and the internet. Internet-facing systems not fully listed. | R07 |
| 8.21 | Security of network services | Yes | Implemented | Requirements in contracts with network suppliers. Separate connection to the health network. |  |
| 8.22 | Segregation of networks | Yes | Partially implemented | Separate networks for staff, pupils and guests. Server network is flat. | R02 |
| 8.23 | Web filtering | Yes | Implemented | Web filtering for pupils and staff. |  |
| 8.24 | Use of cryptography | Yes | Partially implemented | Encryption in transit everywhere. Disk encryption missing on some school devices. |  |
| 8.25 | Secure development life cycle | Yes | Partially implemented | IKS writes scripts and integrations. Simple review before use in production. |  |
| 8.26 | Application security requirements | Yes | Partially implemented | Security requirements in procurements of new systems. |  |
| 8.27 | Secure system architecture and engineering principles | Yes | Planned | Tiered admin model and network segmentation planned. |  |
| 8.28 | Secure coding | Yes | Partially implemented | Scripts reviewed by a colleague. No secrets stored in scripts. |  |
| 8.29 | Security testing in development and acceptance | Yes | Partially implemented | Security test of new systems before go-live when they handle health data. |  |
| 8.30 | Outsourced development | No | Not applicable | The IKS does not buy custom software development. Systems are bought as standard products, which is covered by 5.19 to 5.22. |  |
| 8.31 | Separation of development, test and production environments | Yes | Implemented | Separate test environments for the main specialist systems. |  |
| 8.32 | Change management | Yes | Partially implemented | Change log and approval for major changes. Small changes not always tested. | R08 |
| 8.33 | Test information | Yes | Partially implemented | Some test environments contain copies of real data. |  |
| 8.34 | Protection of information systems during audit testing | Yes | Planned | Audit access to systems agreed in advance, read-only where possible. |  |
