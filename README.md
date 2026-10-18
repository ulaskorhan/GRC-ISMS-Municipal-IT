# ISMS for an inter-municipal IT company: ISO/IEC 27001 learning project

A first version of the main documents in an information security management system (ISMS) for a **fictional** Norwegian inter-municipal IT company (IKS). The company runs IT for five municipalities, including health and care, social services and schools. The repository includes a risk assessment, a Statement of Applicability for all 93 controls in ISO/IEC 27001:2022 Annex A, an incident response procedure, a page on the Norwegian laws that apply, and a small web page that shows the risks and controls.

> **This is a self-directed learning project.** *Brattli IKT IKS* and its member municipalities do not exist. Nothing here is from a real organisation or a real job. I made it after the course *Informasjonssikkerhet og sikkerhetsrett* in my vocational degree in network and IT security at Noroff, to practise the work I learned there. I used AI tools to help draft the documents and the web page. I have reviewed the content and can explain the choices.

## Risk viewer

**[Open the risk viewer](https://ulaskorhan.github.io/GRC-ISMS-Municipal-IT/app/)**

A small web page in plain HTML, CSS and JavaScript, with no libraries and no build step. It reads the two CSV files in `data/` and shows an overview, the risk matrix before and after treatment, the risk register, and the Statement of Applicability with filters. The CSV files are the single source of data, and nothing is stored or sent.

To run it locally, start a web server in the repository folder (for example `python -m http.server`) and open `http://localhost:8000/app/`.

## What is in the repository

| File | Content |
|---|---|
| [docs/01-organisation.md](docs/01-organisation.md) | The fictional IKS: owners, users, services, systems, scope and roles |
| [docs/02-risk-method.md](docs/02-risk-method.md) | How risks are found, 5 × 5 method, acceptance criteria and accepted residual risk |
| [docs/03-risk-assessment.md](docs/03-risk-assessment.md) | 10 risks with threat, vulnerability, likelihood, consequence, actions and Annex A controls |
| [docs/04-statement-of-applicability.md](docs/04-statement-of-applicability.md) | All 93 Annex A controls: status, justification and linked risks |
| [docs/05-incident-response-procedure.md](docs/05-incident-response-procedure.md) | Roles, severity levels, phases, notification to municipalities, Datatilsynet and KommuneCERT |
| [docs/06-legal-and-regulatory.md](docs/06-legal-and-regulatory.md) | GDPR, Normen, health legislation, eForvaltningsforskriften, Security Act, Digital Security Act and NIS2 |
| [data/](data/) | Risk register and Statement of Applicability as CSV |
| [app/](app/) | The risk viewer |

## Main findings

| ID | Risk | Before | After |
|---|---|---|---|
| R01 | Phishing leads to takeover of a municipal employee's account | 16 High | 8 Medium |
| R02 | Ransomware spreads through Active Directory and encrypts hosted systems | 15 High | 10 Medium |
| R03 | Critical systems cannot be restored in time | 15 High | 8 Medium |
| R06 | A supplier's remote access is used to attack the IKS | 15 High | 8 Medium |
| R04 | Staff look up patient records they have no work-related need to see | 12 Medium | 6 Low |
| R09 | Pupils' personal data shared with school apps without proper agreements | 12 Medium | 6 Low |

The highest risks are about **availability of health and care services**. If the data centre is hit by ransomware and backups cannot be restored, home care and nursing homes lose access to patient records. The most important actions are a tiered admin model in Active Directory, an immutable backup that is tested, and controlled supplier access.

The full list is in [the risk assessment](docs/03-risk-assessment.md).

## Choices I made

- **An inter-municipal IT company.** It supports services that society depends on, but is small enough to cover in one project. It also shows how responsibility is split: the municipalities are data controllers, the IKS is a processor.
- **One control excluded out of 93.** An IKS that runs a data centre, writes scripts and hosts health systems needs almost all of Annex A. Most controls are only partly in place, which is normal for a first assessment.
- **Incident response procedure** as the first procedure, because it ties the risks, the law and the roles together.
- **Digitalsikkerhetsloven** most likely does not apply to the IKS directly. The legal page explains why, and how it can still matter.

## Limitations

- Fictional organisation. Scores are based on judgement, not on interviews or real data.
- First version. A real ISMS needs more policies and procedures, internal audit and management review (ISO/IEC 27001 clauses 9.2 and 9.3).
- Control titles in the SoA are shortened. The standard itself is not reproduced here.

## Next steps

- [ ] Tabletop exercise for the incident procedure: account takeover combined with misused supplier access (R01, R06, R10)
- [ ] Access control policy, with focus on patient records and joiners and leavers across municipalities (R04, R05)
- [ ] Norwegian version of the main documents
- [ ] Connect R02 and R10 to detections in my Active Directory and Splunk lab

## Kort på norsk

Et læringsprosjekt i styring av informasjonssikkerhet etter ISO/IEC 27001:2022 for et **fiktivt** interkommunalt IKT-selskap som drifter IT for fem kommuner, blant annet helse og omsorg, sosialtjenesten og skolene. Repoet har en risikovurdering med ti risikoer, en erklæring om anvendelighet (SoA) for alle 93 kontrollene i vedlegg A, en prosedyre for hendelseshåndtering, en side om lover og regler og en enkel nettside som viser risikoene og kontrollene. Laget av Ulas Korhan etter faget informasjonssikkerhet og sikkerhetsrett ved Noroff.
