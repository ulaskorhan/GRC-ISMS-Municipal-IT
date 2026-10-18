# 01 Organisation and scope

> **Fictional organisation.** Brattli IKT IKS and its member municipalities do not exist. They were made up for this learning project. Any similarity to a real organisation is unintended.

## About the organisation

| | |
|---|---|
| Name | Brattli IKT IKS (fictional) |
| Type | Inter-municipal company (interkommunalt selskap, IKS) owned by five municipalities |
| Owners | Municipalities A, B, C, D and E, about 45,000 inhabitants in total |
| Staff | 28 employees: managing director, head of security, head of operations, head of IT services, 24 technicians and advisers |
| Users | About 4,000 municipal employees and 6,000 pupils |
| Task | Runs IT for the five municipalities: user accounts, devices, network, the data centre, hosting of specialist systems and the service desk |

## Why it matters to society

The municipalities provide services that people depend on every day. Many of them run on systems the IKS operates:

- **Health and care:** home care, nursing homes and health centres use a patient record system hosted by the IKS. Elderly residents living at home have digital safety alarms.
- **Social services:** the municipal part of the local Nav office uses a case management system hosted by the IKS.
- **Schools:** about 6,000 pupils use devices, accounts and learning platforms managed by the IKS.
- **Administration:** case and archive systems, payroll and finance.

If these systems stop or data leaks, the consequences can include delayed care, lost patient information, missed payments to vulnerable people and loss of trust in the municipality.

## Information the IKS handles

| Information | Examples | Classification |
|---|---|---|
| Health information | Patient records, care plans, medication lists | Strictly confidential |
| Social services data | Applications for financial support, case notes | Strictly confidential |
| Pupil data | Names, grades, special needs, learning platform data | Confidential |
| Employee data | Payroll, sick leave, national identity numbers | Confidential |
| Case and archive data | Political cases, correspondence with citizens | Internal to confidential |
| Operational information | Network diagrams, passwords, configurations | Confidential |
| Public information | Municipal websites, meeting records | Public |

## Systems

| System | Use | Operated by |
|---|---|---|
| Active Directory (on-premises), synced to Entra ID | Identities for all employees and pupils | IKS |
| Microsoft 365 | Email, Teams, SharePoint, OneDrive, Intune, Defender | Microsoft, configured by the IKS |
| VMware platform in own data centre, plus a second server room | Hosting of specialist systems | IKS |
| Patient record system (EPJ) for home care and nursing homes | Health and care documentation | Hosted by the IKS, supported by the supplier |
| Case and archive system | Administration and archive | Hosted by the IKS |
| Social services case system | Municipal social services at the Nav office | Hosted by the IKS |
| Welfare technology (safety alarms, sensors) | Help for residents living at home | Supplier, depends on the municipal network |
| Learning platforms and school apps | Teaching | Cloud services, accounts managed by the IKS |
| Connection to the health network (Helsenettet) | Secure exchange of health information | Norsk Helsenett, connected through the IKS |

## Scope of the ISMS

**In scope:** all services the IKS provides to the five municipalities: identities, devices, network, data centre, hosted systems, the service desk, and the IKS's own staff and suppliers.

**Out of scope:**
- How the municipalities use the systems in their own work. The municipalities are responsible for that as data controllers. The IKS supports them.
- Operational technology (OT) such as control systems for water and wastewater. These are run by the municipalities' technical departments on a separate network.

## Roles

| Role | Security responsibility |
|---|---|
| Board of the IKS | Approves the security policy and accepts high residual risk |
| Managing director | Owns information security in the IKS |
| Head of security | Runs the ISMS: risk assessment, SoA, incidents, training |
| Head of operations | Data centre, servers, network, backup |
| Head of IT services | Service desk, user accounts, devices, school services |
| Contact person in each municipality | Reports joiners and leavers, approves access, takes decisions as data controller |
| Data protection officer (shared by the municipalities) | Advises on privacy and data protection impact assessments |
