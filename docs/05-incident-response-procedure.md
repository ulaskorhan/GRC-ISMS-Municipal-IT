# 05 Incident response procedure

| | |
|---|---|
| Organisation | Brattli IKT IKS (fictional) |
| Owner | Head of security |
| Approved | Version 1.0, October 2026 (fictional approval by the managing director) |
| Next review | After every serious incident or exercise, and at least once a year |
| Related controls | ISO/IEC 27001:2022 Annex A 5.5, 5.24, 5.25, 5.26, 5.27, 5.28, 6.8 |
| Related risks | R01, R02, R03, R06, R10 |

## 1. Purpose

Make sure that security incidents are detected, handled and reported quickly and in the same way every time, so that harm to the municipalities' services and to citizens is as small as possible.

## 2. Scope

All information security incidents that affect systems, data or services operated by the IKS, including incidents at suppliers that affect the IKS.

A **security event** is something that may be a sign of a problem, such as a suspicious email or an alert. A **security incident** is an event that has harmed, or is likely to harm, confidentiality, integrity or availability. A **personal data breach** is an incident that affects personal data. It has special reporting duties (section 7).

## 3. How to report

Anyone who sees something suspicious, IKS staff or municipal staff, reports it **at once**:

- by phone to the service desk during working hours, or to the on-call number outside working hours
- with the report-phishing button for suspicious email

Do not try to investigate or clean up yourself. Do not turn off a machine that may be infected. Disconnect it from the network instead.

## 4. Roles

| Role | Who | Responsibility |
|---|---|---|
| Incident manager | Head of security, or the on-call person until they take over | Leads the response, decides severity, keeps the incident log |
| Technical lead | Head of operations or a deputy | Investigation, containment and recovery |
| Communication lead | Managing director | All external communication, including media |
| Municipal contact | Contact person in each affected municipality | Decisions as data controller, internal communication in the municipality |
| Data protection officer | Shared by the municipalities | Advises on personal data breaches and notification |

## 5. Severity levels

| Level | Description | Examples | Response |
|---|---|---|---|
| **1 Critical** | Health and care services or several municipalities are affected, or a large amount of sensitive data may have leaked | Ransomware on the server platform; patient record system down | Incident manager at once, day and night. Managing director and municipalities informed within 1 hour. |
| **2 High** | One important service is down, or sensitive data of several people may be exposed | An admin account taken over; supplier access misused | Incident manager within 1 hour. Affected municipality informed the same day. |
| **3 Medium** | Limited effect that can be contained quickly | One employee's email account taken over | Handled by the service desk and the security team during working hours. |
| **4 Low** | No harm, or the event is stopped | Phishing email reported and deleted | Logged and closed by the service desk. |

The incident manager can raise or lower the level at any time.

## 6. Phases

### 6.1 Detect and assess
- Record time, who reported, what was seen and which systems are involved.
- Decide whether it is an event or an incident, and set the severity level.
- Open an incident log. **Every decision is written down with the time and who decided.**

### 6.2 Contain
- Limit the damage: disconnect infected machines, disable compromised accounts, block malicious addresses, close supplier access.
- For Level 1: consider isolating the server network or the connection between municipalities. The incident manager decides together with the technical lead.

### 6.3 Preserve evidence
- Secure logs, memory and disk images **before** systems are cleaned or restored, where possible.
- Note who handled the evidence and when.

### 6.4 Eradicate and recover
- Find how the attacker got in, and close that way in.
- Reset passwords and keys that may be known to the attacker.
- Restore from clean backups in the agreed order (patient record system and welfare technology first), and check that the restored systems are clean before they are reconnected.

### 6.5 Close and learn
- The incident is closed when services run normally and the cause is understood.
- After every Level 1 or 2 incident, hold a lessons-learned meeting within two weeks. Write a short report: timeline, cause, what worked, what did not, and actions with owners.
- Update the risk assessment if the incident shows that a risk was scored too low or a control did not work.

## 7. Notification

The IKS is a **data processor** for the municipalities. The municipalities are the **data controllers** and decide on notification to Datatilsynet and to the people affected.

| Who | When | Who notifies |
|---|---|---|
| Affected municipality (contact person) | Without undue delay. Target: within **12 hours** of discovering a personal data breach, and at once for Level 1 | Incident manager |
| Datatilsynet | Within **72 hours** of the municipality becoming aware of a personal data breach, unless it is unlikely to cause risk to people (GDPR article 33) | The municipality, with information from the IKS |
| People affected | Without undue delay if the breach is likely to cause high risk to them (GDPR article 34) | The municipality |
| KommuneCERT | For Level 1 and 2, and whenever advice or help is needed | Incident manager |
| Police | When a crime is suspected, for example ransomware or extortion | Managing director or incident manager, after agreement with the municipalities |
| NSM | When the incident may threaten national security interests. The municipality assesses this under the Security Act | The municipality, with information from the IKS |
| Board of the IKS | All Level 1 incidents | Managing director |

## 8. Communication

- Only the communication lead speaks to the media. Municipalities coordinate their messages with the IKS.
- Give facts that are confirmed. Say what is not known yet.
- Use phone or a separate channel if email or Teams may be compromised.

## 9. Ransom demands

The IKS recommends **not paying** a ransom. Payment gives no guarantee that data is returned or deleted, and it finances crime. The decision lies with the board in consultation with the owners and the police.

## 10. Exercises

The procedure is tested in a **tabletop exercise** at least once a year, with the IKS and contact persons from the municipalities. The first exercise is planned for the scenario in R01 and R06: a taken-over account and misused supplier access.

## Appendix: first-hour checklist (Level 1 and 2)

- [ ] Incident log opened, severity level set
- [ ] Incident manager and technical lead in place
- [ ] Affected systems and accounts identified
- [ ] Containment started (isolate, disable, block)
- [ ] Evidence secured where possible
- [ ] Managing director informed (Level 1)
- [ ] Affected municipalities informed
- [ ] KommuneCERT contacted
- [ ] Separate communication channel set up if needed
- [ ] Time for next status meeting agreed
