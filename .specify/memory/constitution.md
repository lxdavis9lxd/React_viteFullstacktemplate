# <!--
# Sync Impact Report
# Version change: (new) 1.0.0
# List of modified principles: All principles replaced with project-specific rules
# Added sections: Additional Constraints, Development Workflow
# Removed sections: None (all template placeholders replaced)
# Templates requiring updates:
# ✅ plan-template.md (structure and gates align with constitution)
# ✅ spec-template.md (requirements and testability align)
# ✅ tasks-template.md (task phases and path conventions align)
# ⚠ commands templates: None found, but review if added in future
# ✅ README.md (project name matches constitution)
# Follow-up TODOs:
# - TODO(RATIFICATION_DATE): original adoption date unknown, must be set by maintainers
# -->
# React_viteFullstacktemplate Constitution

## Core Principles

### I. Technology Stack Alignment
All backend code MUST use Express (JavaScript). All frontend code MUST use React, Vite, and Tailwind CSS. No other frameworks permitted unless explicitly justified and approved.

### II. Separation of Concerns
Frontend and backend MUST reside in separate directories (`frontend/`, `backend/`). Shared logic MUST be extracted into libraries or services and referenced as dependencies.

### III. Test-Driven Development (TDD)
All features MUST be developed using TDD. Tests MUST be written and fail before implementation. Red-Green-Refactor cycle is mandatory.

### IV. Integration & Contract Testing
Integration tests MUST cover API endpoints, shared contracts, and inter-service communication. Contract changes MUST trigger new or updated tests.

### V. Observability & Simplicity
Structured logging MUST be implemented in both backend and frontend. Simplicity is prioritized: avoid unnecessary complexity, follow YAGNI principles, and document rationale for any deviation.

## Additional Constraints

- All code MUST be written in JavaScript (ES6+). TypeScript MAY be used if justified and documented.
- All dependencies MUST be open source and actively maintained.
- Tailwind CSS MUST be used for all styling in the frontend.
- Vite MUST be used as the build tool for the frontend.
- Express MUST be used for backend routing and middleware.

## Development Workflow

- All code changes MUST be submitted via pull requests.
- Every pull request MUST include passing tests and documentation updates if applicable.
- Code reviews are mandatory for all merges to main.
- CI/CD pipelines MUST verify compliance with all principles and constraints.

## Governance

- This constitution supersedes all other development practices for this repository.
- Amendments require documentation, approval by majority of maintainers, and a migration plan.
- All PRs and reviews MUST verify compliance with principles and constraints.
- Versioning follows semantic rules: MAJOR for principle removals/redefinitions, MINOR for new principles/sections, PATCH for clarifications.
- Compliance reviews MUST be conducted quarterly.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): original adoption date unknown | **Last Amended**: 2025-10-07
<!-- Version: 1.0.0 | Ratified: TODO(RATIFICATION_DATE): original adoption date unknown | Last Amended: 2025-10-07 -->