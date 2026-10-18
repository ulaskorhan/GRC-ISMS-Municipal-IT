# 03 Risk assessment

Fictional organisation. Method and scales are described in [02-risk-method.md](02-risk-method.md). The same data is in [`data/risk-register.csv`](../data/risk-register.csv).

Risk IDs (R01, R02 …) are fixed references. They show the order the risks were recorded, not their priority. The summary below is sorted by score.

## Summary

| ID | Risk | L | C | Score | Level | Residual | Owner |
|---|---|:-:|:-:|:-:|---|---|---|
| R01 | Phishing leads to takeover of a municipal employee's account | 4 | 4 | 16 | High | 8 (Medium) | Head of security |
| R02 | Ransomware spreads through Active Directory and encrypts hosted systems | 3 | 5 | 15 | High | 10 (Medium) | Head of operations |
| R03 | Critical systems cannot be restored in time after an attack or failure | 3 | 5 | 15 | High | 8 (Medium) | Head of operations |
| R06 | A supplier's remote access is used to attack the IKS | 3 | 5 | 15 | High | 8 (Medium) | Head of security |
| R04 | Staff look up patient records they have no work-related need to see | 4 | 3 | 12 | Medium | 6 (Low) | Head of security with member municipalities |
| R05 | Access is not removed when staff leave or move between municipalities | 3 | 4 | 12 | Medium | 4 (Low) | Head of IT services |
| R07 | Vulnerable internet-facing devices are exploited | 3 | 4 | 12 | Medium | 8 (Medium) | Head of operations |
| R09 | Pupils' personal data are shared with school apps without proper agreements | 4 | 3 | 12 | Medium | 6 (Low) | Head of IT services with school owners |
| R10 | An attack is not detected, or cannot be investigated | 3 | 4 | 12 | Medium | 6 (Low) | Head of security |
| R08 | Welfare technology fails, so residents at home do not get help | 2 | 5 | 10 | Medium | 5 (Low) | Head of IT services with member municipalities |

L = likelihood, C = consequence, score = L × C. Residual = expected score after the planned actions.

## Risk matrix before treatment

| Likelihood ↓ / Consequence → | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| **5** |  |  |  |  |  |
| **4** |  |  | R04, R09 | R01 |  |
| **3** |  |  |  | R05, R07, R10 | R02, R03, R06 |
| **2** |  |  |  |  | R08 |
| **1** |  |  |  |  |  |

## Risk matrix after treatment

| Likelihood ↓ / Consequence → | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| **5** |  |  |  |  |  |
| **4** |  |  |  |  |  |
| **3** |  |  |  |  |  |
| **2** |  |  | R04, R09, R10 | R01, R03, R06, R07 | R02 |
| **1** |  |  |  | R05 | R08 |

## Risk details

### R01 Phishing leads to takeover of a municipal employee's account

- **Asset:** Microsoft 365 accounts for about 4,000 municipal employees (email, Teams, OneDrive)
- **Threat:** Credential phishing, including MFA fatigue and adversary-in-the-middle phishing kits
- **Vulnerability:** MFA by SMS or simple push approval for many users; Conditional Access only for admins; shared mailboxes with weak control
- **Existing controls:** MFA required for all users; Defender for Office 365 email filtering
- **Risk:** likelihood 4 × consequence 4 = **16 (High)**
- **Treatment:** Reduce
- **Planned actions:** Microsoft Authenticator with number matching for all users; Conditional Access that requires a managed device or blocks risky sign-ins; phishing awareness for all municipal staff twice a year; report-phishing button
- **ISO/IEC 27001:2022 Annex A controls:** 5.17, 6.3, 6.8, 8.5, 8.16
- **Owner:** Head of security
- **Residual risk:** 2 × 4 = **8 (Medium)**

### R02 Ransomware spreads through Active Directory and encrypts hosted systems

- **Asset:** On-premises Active Directory and the VMware platform hosting case management, payroll and the patient record system for home care and nursing homes
- **Threat:** Criminal group gains a foothold, takes over admin accounts and deploys ransomware across servers
- **Vulnerability:** Admin accounts used on ordinary workstations; no AD tiering; flat server network; EDR not on all servers
- **Existing controls:** Antivirus on servers; firewall between the internet and the data centre
- **Risk:** likelihood 3 × consequence 5 = **15 (High)**
- **Treatment:** Reduce
- **Planned actions:** Tiered admin model (separate accounts and workstations for domain admins); EDR on all servers; segment the server network by system; disable unused protocols such as SMBv1 and NTLMv1; monitor changes to privileged AD groups
- **ISO/IEC 27001:2022 Annex A controls:** 8.2, 8.7, 8.9, 8.16, 8.18, 8.22
- **Owner:** Head of operations
- **Residual risk:** 2 × 5 = **10 (Medium)**

### R03 Critical systems cannot be restored in time after an attack or failure

- **Asset:** Backups of the patient record system, case management, payroll and file services
- **Threat:** Ransomware deletes or encrypts backups; hardware failure in the data centre
- **Vulnerability:** Backups are reachable from the domain; no immutable copy; full restore of the patient record system never tested; recovery order not agreed with the municipalities
- **Existing controls:** Nightly backup to a second server room in another municipality
- **Risk:** likelihood 3 × consequence 5 = **15 (High)**
- **Treatment:** Reduce
- **Planned actions:** Immutable or offline backup copy with separate credentials; restore test of one critical system every quarter and a full exercise once a year; recovery order and targets agreed with the member municipalities
- **ISO/IEC 27001:2022 Annex A controls:** 5.29, 5.30, 8.13, 8.14
- **Owner:** Head of operations
- **Residual risk:** 2 × 4 = **8 (Medium)**

### R04 Staff look up patient records they have no work-related need to see

- **Asset:** Patient records in home care, nursing homes and health centres
- **Threat:** Curious or improper lookups by authorised users, for example about neighbours, family or known people
- **Vulnerability:** Broad role-based access across units; access logs exist but nobody reviews them; staff are not reminded that lookups are logged
- **Existing controls:** Personal user accounts and role-based access in the patient record system
- **Risk:** likelihood 4 × consequence 3 = **12 (Medium)**
- **Treatment:** Reduce
- **Planned actions:** Narrower access per unit, with documented emergency access (break-the-glass) and a reason; monthly sample review of access logs together with the municipalities; regular reminders and training on duty of confidentiality
- **ISO/IEC 27001:2022 Annex A controls:** 5.15, 5.18, 6.3, 8.3, 8.15
- **Owner:** Head of security with member municipalities
- **Residual risk:** 2 × 3 = **6 (Low)**

### R05 Access is not removed when staff leave or move between municipalities

- **Asset:** Accounts in Entra ID, the patient record system, case management and other systems
- **Threat:** Misuse by former staff, or attackers taking over forgotten accounts
- **Vulnerability:** Five municipalities report leavers in different ways; HR system not connected to identity management; access in specialist systems removed by hand
- **Existing controls:** Service desk disables accounts when a municipality reports it
- **Risk:** likelihood 3 × consequence 4 = **12 (Medium)**
- **Treatment:** Reduce
- **Planned actions:** Automatic joiner-mover-leaver process driven by the HR system; one shared offboarding routine for all five municipalities; access review every six months for specialist systems
- **ISO/IEC 27001:2022 Annex A controls:** 5.11, 5.16, 5.18, 6.5, 8.2
- **Owner:** Head of IT services
- **Residual risk:** 1 × 4 = **4 (Low)**

### R06 A supplier's remote access is used to attack the IKS

- **Asset:** Remote support connections from system suppliers to hosted specialist systems
- **Threat:** Attacker compromises a supplier and uses its always-on remote access into the data centre
- **Vulnerability:** Several supplier accounts are always enabled; some without MFA; no logging of what suppliers do
- **Existing controls:** Data processing agreements with all main suppliers
- **Risk:** likelihood 3 × consequence 5 = **15 (High)**
- **Treatment:** Reduce
- **Planned actions:** Supplier access only on request, time-limited and with MFA through one controlled access point; session logging; security requirements in all supplier contracts and an annual review of key suppliers
- **ISO/IEC 27001:2022 Annex A controls:** 5.19, 5.20, 5.21, 5.22, 8.2, 8.15
- **Owner:** Head of security
- **Residual risk:** 2 × 4 = **8 (Medium)**

### R07 Vulnerable internet-facing devices are exploited

- **Asset:** VPN gateways, firewalls and other systems reachable from the internet
- **Threat:** Attackers exploit newly published vulnerabilities in edge devices, often within days
- **Vulnerability:** No complete list of internet-facing systems; patching depends on one person's time; warnings from authorities are not tracked
- **Existing controls:** Firmware updates during monthly maintenance windows
- **Risk:** likelihood 3 × consequence 4 = **12 (Medium)**
- **Treatment:** Reduce
- **Planned actions:** Up-to-date list of everything reachable from the internet; emergency patching within 48 hours for critical vulnerabilities in edge devices; follow warnings from NSM and KommuneCERT; external vulnerability scanning
- **ISO/IEC 27001:2022 Annex A controls:** 5.7, 5.9, 8.8, 8.20
- **Owner:** Head of operations
- **Residual risk:** 2 × 4 = **8 (Medium)**

### R08 Welfare technology fails, so residents at home do not get help

- **Asset:** Digital safety alarms and sensors for elderly residents living at home, and the response centre that receives the alarms
- **Threat:** Outage at the supplier or in the network, or a misconfiguration after a change
- **Vulnerability:** IKS does not know which network and system dependencies the alarms have; no test routine after changes; unclear who reacts to an outage at night
- **Existing controls:** Supplier agreement made by each municipality
- **Risk:** likelihood 2 × consequence 5 = **10 (Medium)**
- **Treatment:** Reduce
- **Planned actions:** Map dependencies for alarms and the response centre; automatic monitoring that alarms reach the centre; joint emergency routine with the municipalities and the supplier
- **ISO/IEC 27001:2022 Annex A controls:** 5.22, 5.29, 5.30, 8.16, 8.32
- **Owner:** Head of IT services with member municipalities
- **Residual risk:** 1 × 5 = **5 (Low)**

### R09 Pupils' personal data are shared with school apps without proper agreements

- **Asset:** Personal data of about 6,000 pupils in learning platforms and educational apps
- **Threat:** Teachers start using new apps that collect pupil data without the municipality knowing
- **Vulnerability:** No list of approved apps; anyone can approve third-party apps in Microsoft 365 and Google; data processing agreements missing for several apps
- **Existing controls:** Main learning platform has a data processing agreement
- **Risk:** likelihood 4 × consequence 3 = **12 (Medium)**
- **Treatment:** Reduce
- **Planned actions:** List of approved apps, with privacy assessment and data processing agreement before use; block user consent to third-party apps; simple guidance for teachers on how to request a new app
- **ISO/IEC 27001:2022 Annex A controls:** 5.10, 5.23, 5.34, 8.19
- **Owner:** Head of IT services with school owners
- **Residual risk:** 2 × 3 = **6 (Low)**

### R10 An attack is not detected, or cannot be investigated

- **Asset:** The IKS's ability to detect, investigate and report incidents to the municipalities
- **Threat:** Attacker activity goes unnoticed for weeks; the IKS cannot say which data was affected
- **Vulnerability:** Logs are spread across systems and kept for a short time; no one follows up alerts outside working hours; no tested incident procedure
- **Existing controls:** Member of KommuneCERT; alerts from Defender sent to a shared mailbox
- **Risk:** likelihood 3 × consequence 4 = **12 (Medium)**
- **Treatment:** Reduce
- **Planned actions:** Central log collection (SIEM) with at least 12 months of retention; on-call arrangement for critical alerts; incident procedure (docs/05) tested in a tabletop exercise each year
- **ISO/IEC 27001:2022 Annex A controls:** 5.24, 5.25, 5.26, 5.27, 5.28, 6.8, 8.15, 8.16, 8.17
- **Owner:** Head of security
- **Residual risk:** 2 × 3 = **6 (Low)**
