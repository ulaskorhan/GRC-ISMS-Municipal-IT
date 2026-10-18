# 02 Risk method

A simple qualitative method. It follows the logic of ISO/IEC 27005 and ISO/IEC 27001 clause 6.1: identify risks, analyse them, evaluate them against acceptance criteria and choose a treatment.

## How risks are identified

In a real assessment, risks come from several sources. In this learning project they are based on typical threats to Norwegian municipalities and on public advice from NSM and KommuneCERT, not on interviews.

| Source | Example question |
|---|---|
| Asset list | Which systems can the municipalities not work without? |
| Interviews and workshops with staff | How do you give a new nurse access to the patient record system? |
| Threat reports and warnings | Which attacks do NSM and KommuneCERT warn about now? |
| Technical findings | What do vulnerability scans and Microsoft Secure Score show? |
| Incidents and near misses | What has almost gone wrong before? |
| Laws and contracts | What do GDPR, Normen and the data processing agreements require? |

Each risk is written as **asset + threat + vulnerability → consequence** and gets the next free ID (R01, R02 …). The ID never changes.

## Steps

1. **Identify** assets, threats and vulnerabilities.
2. **Analyse** each risk by scoring likelihood and consequence from 1 to 5, taking existing controls into account.
3. **Evaluate** the score against the acceptance criteria below.
4. **Treat** the risk: reduce, avoid, transfer or accept. Link actions to Annex A controls.
5. **Estimate residual risk** after the actions.
6. **Review** at least once a year, after serious incidents and after major changes.

## Likelihood

| Score | Level | Guide |
|:-:|---|---|
| 1 | Rare | Less than once in 10 years |
| 2 | Unlikely | Once in 5 to 10 years |
| 3 | Possible | Once in 1 to 5 years |
| 4 | Likely | About once a year |
| 5 | Almost certain | Several times a year |

## Consequence

Consequence is judged on the worst of three dimensions.

| Score | Level | Services to citizens | Personal data | Trust and money |
|:-:|---|---|---|---|
| 1 | Insignificant | No noticeable effect | No exposure | None |
| 2 | Minor | Short delay in one service | Internal data seen by the wrong employee | Small internal cost |
| 3 | Moderate | One service down for up to a day | Sensitive data of a few people exposed | Local media attention |
| 4 | Major | Several services down for days | Sensitive data of many people exposed | National media, notification to Datatilsynet |
| 5 | Severe | Health and care services cannot work safely, life and health at risk | Health or social data of many people leaked | Long loss of trust, very high costs |

## Risk level and acceptance criteria

Score = likelihood × consequence.

| Score | Level | What happens |
|:-:|---|---|
| 15–25 | High | Not acceptable. Actions start at once. The board is informed. |
| 8–12 | Medium | Reduce within six months, or the managing director accepts the risk in writing with a reason. |
| 1–6 | Low | Acceptable. Monitor at the annual review. |

## Residual risk accepted

After planned actions, R01, R02, R03, R06 and R07 are still **Medium**. In this scenario the managing director accepts them, because:

- **R01 and R07:** phishing and new vulnerabilities in internet-facing devices cannot be removed completely. Likelihood goes down, but the threat stays.
- **R02:** a successful ransomware attack on the data centre would still be severe, because health services depend on it. The actions make it much harder to spread.
- **R03 and R06:** the IKS depends on its backups and on its suppliers. The actions reduce the risk, but cannot remove the dependency.

## Limitations

- The scores are judgement, not statistics.
- This is a first version for a fictional organisation. A real assessment would be done with the municipalities and the people who do the work.
