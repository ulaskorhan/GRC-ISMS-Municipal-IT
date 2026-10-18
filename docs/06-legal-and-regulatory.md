# 06 Laws and regulations

How Norwegian and EU/EEA rules affect the fictional Brattli IKT IKS and its five member municipalities. This page is a learning summary, not legal advice. Status as of October 2026.

## Overview

| Rule | Who it applies to | Main effect on the IKS |
|---|---|---|
| GDPR and personopplysningsloven | Municipalities as controllers, the IKS as processor | Data processing agreements, security of processing, breach notification |
| Normen (health sector norm) | Health and care services, and through agreements their suppliers | Requirements for access control, logging and supplier management for health data |
| Pasientjournalloven and helsepersonelloven § 21 a | Municipal health and care services and their staff | Access to patient records only when needed for the work; access control and logging |
| eForvaltningsforskriften § 15 | Public administration, including municipalities | Internal control for information security, based on recognised standards |
| Kommuneloven § 25-1 | The municipal chief executive | Internal control in the municipality's administration |
| Sikkerhetsloven | All municipalities | Preventive security as part of the municipality's management system |
| Arkivlova | Municipalities | Records must be kept and protected |
| Digitalsikkerhetsloven | Providers of essential services in listed sectors | Probably not the IKS directly; may apply through member municipalities' services |
| NIS2 | Not in force in Norway | May cover public administration in the future |

## GDPR and personopplysningsloven

- The **municipalities are controllers** for the data of their residents, pupils and employees. The **IKS is a processor** and needs a data processing agreement with each municipality (GDPR article 28).
- Article 32 requires security that fits the risk. Health data, social services data and data about children carry high risk.
- **Personal data breaches:** the IKS must tell the municipality without undue delay (article 33(2)). The municipality notifies Datatilsynet within 72 hours (article 33) and, if the risk is high, the people affected (article 34). This is the basis for the notification table in [05-incident-response-procedure.md](05-incident-response-procedure.md).
- New systems that process sensitive data at scale, such as a new school app or welfare technology, need a **data protection impact assessment** (article 35). The municipality is responsible, and the IKS contributes technical information.

Effect on the ISMS: R04 (lookups in patient records), R09 (pupil data in school apps) and the notification rules in the incident procedure.

## Normen

*Norm for informasjonssikkerhet og personvern i helse- og omsorgssektoren* is a sector norm managed by the Norwegian Directorate of Health. Health and care organisations follow it in practice through agreements, and suppliers and data processors can be bound by it through their contracts.

Effect on the ISMS: the IKS hosts the patient record system and connects the municipalities to the health network, so it must meet Normen's requirements for access control, logging and use of suppliers. See R04 and R06.

## Pasientjournalloven and helsepersonelloven

Helsepersonelloven § 21 a forbids health personnel to read health information unless they need it to help the patient. Pasientjournalloven requires the health service to control access to records and log it. Patients can also ask to see who has looked at their record.

Effect on the ISMS: R04. Access logs exist, but nobody reviews them. Narrower access and regular log review are the planned actions.

## eForvaltningsforskriften § 15 and kommuneloven

eForvaltningsforskriften § 15 requires public administration to have **internal control for information security** based on **recognised standards for information security management**, scaled to the risk. ISO/IEC 27001 is the most common standard for this. Kommuneloven § 25-1 requires the municipal chief executive to have internal control of the administration.

Effect on the ISMS: the municipalities must be able to show internal control of information security, also for IT they have outsourced to the IKS. This is one reason the IKS builds its ISMS on ISO/IEC 27001 and shares its risk assessment and SoA with the owners.

## Sikkerhetsloven

The Security Act applies to all municipalities. Preventive security work must be part of the municipality's management system, whether or not the municipality has protected assets.

Effect on the ISMS: the IKS supports the municipalities' preventive security work, and the incident procedure says that the municipality assesses whether to notify NSM.

## Arkivlova

Municipal records must be kept, protected and available according to the archive law and each municipality's archive plan. The IKS hosts the case and archive system.

Effect on the ISMS: backup and recovery (R03), and control 5.33.

## Digitalsikkerhetsloven

The Digital Security Act took effect on **1 October 2025**. It is based on the EU's first NIS directive (NIS1). It covers providers of essential services in sectors such as energy, transport, health, drinking water, banking, financial market infrastructure and digital infrastructure, as well as some digital service providers. A regulation lists which providers are covered.

- The **IKS is most likely not covered directly.** It provides internal IT to its owners, not an essential service to the public.
- **Member municipalities may be covered for some services**, for example drinking water supply, depending on the regulation's list. In that case the IKS may get requirements as their supplier through contracts. The water works' control systems (OT) are outside the scope of this ISMS.

## NIS2

NIS2 replaces NIS1 in the EU and also covers public administration. Member states may choose to include local government. As of October 2026, **NIS2 has not been implemented in Norwegian law**, so it is not yet known whether Norwegian municipalities and inter-municipal companies will be covered. Check the current status on regjeringen.no.

## KommuneCERT

KommuneCERT is a response team for Norwegian municipalities, set up by Norsk helsenett together with HelseCERT. It gives warnings, advice and help during incidents, and acts as one point of contact for municipalities. The IKS is a member (in this scenario) and uses KommuneCERT in its incident procedure.

## Sources

- [Regjeringen: Ny lov om digital sikkerhet trer i kraft i dag (1 October 2025)](https://www.regjeringen.no/no/aktuelt/ny-lov-om-digital-sikkerhet-trer-i-kraft-i-dag/id3121009/)
- [Regjeringen: Digital sikkerhet i kommunene styrkes (KommuneCERT)](https://www.regjeringen.no/no/aktuelt/digital-sikkerhet-i-kommunene-styrkes/id3015864/)
- [KS: Regelverket for informasjonssikkerhet i kommunene](https://www.ks.no/contentassets/136dba1bfe774740a3904bdb4cde77c0/vedlegg-1-regelverket.pdf)
- [Lovdata: eForvaltningsforskriften](https://lovdata.no/dokument/SF/forskrift/2004-06-25-988)
- [Helsedirektoratet: Normen, tjenesteutsetting av kommunale helse- og omsorgstjenester](https://www.helsedirektoratet.no/normen/tjenesteutsetting-av-kommunale-helse-og-omsorgstjenester-faktaark-46/om-faktaarket)
- [Helsedirektoratet: Rett til journalinnsyn (pasient- og brukerrettighetsloven med kommentarer)](https://www.helsedirektoratet.no/rundskriv/pasient-og-brukerrettighetsloven-med-kommentarer/rett-til-journalinnsyn)
- [Stortinget: Skriftlig spørsmål om gjennomføring av NIS2](https://www.stortinget.no/no/Saker-og-publikasjoner/Sporsmal/Skriftlige-sporsmal-og-svar/Skriftlig-sporsmal/?qnid=87326)
- [Lovdata](https://lovdata.no/) for the full text of each act
