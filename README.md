# ThinkSync01 — AICTE Integrated Verification Module (Frontend Prototype)

A complete offline **HTML5 + minimal CSS3 + vanilla JavaScript** frontend for the Smart India Hackathon 2026 problem *AI-Powered Application Validation, Document Authentication and Regulatory Compliance Verification*.

This is an **independent educational demonstration**, not an official AICTE application. It is designed as an AI-assisted module that could integrate with existing authorized AICTE approval workflows. It does not replace the portal, access real AICTE records, run AI/OCR, authenticate real users, connect to issuing authorities, or make regulatory decisions.

## Quick start

1. Extract the ZIP file, retaining the folder structure.
2. Open a terminal inside `ThinkSync01_AICTE_HTML_Frontend`.
3. Run `python -m http.server 8000` (or `python3 -m http.server 8000`).
4. Visit `http://localhost:8000/` in Chrome, Firefox or Edge.
5. Choose **Institution** or **AICTE Officer** from the welcome page. Select any demo role.

No npm, Node.js, React, Tailwind, Bootstrap, or backend server is required. The Python command is only a local static file server. The UI uses plain HTML, CSS and JavaScript.

> Opening the pages directly via `file://` can produce inconsistent browser storage behavior. Prefer the local HTTP server.

## Pages (28 HTML files)

**Public:** `index.html`, `login.html`.

**Institution:** `college/dashboard.html`, `applications.html`, `new-application.html`, `application-detail.html`, `documents.html`, `validation.html`, `corrections.html`, `tracking.html`, `notifications.html`.

**Officer:** `officer/dashboard.html`, `applications.html`, `application-detail.html`, `workbench.html`, `anomalies.html`, `source-verification.html`, `compliance.html`, `infrastructure.html`, `workflow.html`, `tasks.html`, `decisions.html`, `reports.html`, `audit.html`, `rules.html`, `users.html`, `security.html`.

**Shared:** `shared/profile.html`.

Additionally, `slide-assets/cover_collage.html` is a standalone title-slide collage page, making **29 HTML files total**.

## Key files

- `assets/css/style.css` — one deliberately restrained stylesheet; CSS Grid/Flexbox, simple white cards and navy navigation.
- `assets/js/data.js` — synthetic data model and localStorage seed.
- `assets/js/app.js` — page rendering, navigation, document metadata simulation, corrections, officer review, notifications, audit events and report export.
- `previews/` — captured screenshots for PPT insertion.
- `slide-assets/cover_collage.html` / `.png` — editable title-slide collage layout and screenshot.

## Demonstration walkthrough

**Scenario A — Flag and correction**

1. Open the **Officer** demo; select **Verification Officer**.
2. Open **Document workbench**, application `APP-2026-1001`.
3. Inspect the synthetic land survey mismatch and click **Request evidence**.
4. Type a short explanation and submit the request.
5. Select **Portal selection → Institution status**; choose `Southview Institute of Technology`.
6. Open **Corrections**, click **Respond**, enter an explanation and submit.
7. Return to the Officer view; check **Review tasks**, **Audit trail** and the application's status.

**Scenario B — Source unavailable**

1. Open **Source verification**.
2. View the unsupported source check on `APP-2026-1003`.
3. Record a clearly labeled simulated status. Review **Audit trail**.

**Scenario C — Competent authority**

1. Open the Officer portal and switch role to **Competent Authority** at the top right.
2. Open **Final decisions**.
3. Select the sample application `APP-2026-1004`, which is in the decision queue.
4. Enter a reason and record a **demo** decision. An approval attempt on an incomplete or actively flagged application is blocked in this prototype.

The data is shared through browser `localStorage` across these static pages when running under the same origin. A **Reset synthetic data** action is available in the profile page.

## Design scope and limitations

- **Demo login and role switching:** display-only simulation, **not** secure authentication.
- **Browser uploads:** the File API checks filename extensions and size and saves metadata; **bytes are not persisted**, scanned, or securely stored.
- **OCR and anomaly findings:** predefined synthetic sample values; do not represent real AI model output.
- **Official source verification:** states are simulated; no API, DigiLocker, government systems, or authorization is assumed.
- **Rule configuration:** illustrative and version-tagged; not guaranteed to reflect the currently applicable AICTE Approval Process Handbook.
- **Audit history:** browser-side and editable via developer tools; a backend would require protected, tamper-evident logs.
- **Access control:** the interface illustrates scoped access, but server-side authentication, authorization, institution isolation and data security are mandatory for deployment.
- **Final approval:** no AI result triggers statutory approval; the decision interface is a human-role demonstration.

## Proposed production integration (not implemented)

Authorized AICTE portal and institutional records → approved integration adapter/API → secure document intake → OCR/extraction + configurable rules + document comparison + source-verification workflow → evidence-linked findings → AICTE officer scrutiny and competent-authority decision.

A production backend would need TLS, secure file/object storage, malware scanning, encryption, institution-scoped RBAC, central audit logs, retention policies and permitted issuing-authority interfaces. The public website does not by itself confirm which APIs or framework versions the current AICTE approval portal provides.

## Screenshots for SIH presentation

- `previews/institution-dashboard.png`
- `previews/officer-workbench.png`
- `previews/security-architecture.png`
- `previews/front-overview.png`
- `slide-assets/cover_collage.png`

Screenshots are **illustrative demo screens**, not evidence of real integration or AI processing.
