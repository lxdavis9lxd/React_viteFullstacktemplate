# Tasks: Home Page, Navigation, and Auth UI

**Input**: Design documents from `/specs/001-add-a-home/`
**Prerequisites**: plan.md, spec.md

## Phase 1: Setup (Shared Infrastructure)

- [X] T001 Create monorepo structure: `frontend/` and `backend/`
- [X] T002 Initialize React/Vite project in `frontend/`
- [X] T003 Initialize Express project in `backend/`
- [X] T004 Install Tailwind CSS, Heroicons, Axios in `frontend/`
- [X] T005 Install bcrypt and SQLite in `backend/`
- [X] T006 Configure ESLint, Prettier, and basic CI setup

---

## Phase 2: Foundational (Blocking Prerequisites)

- [X] T007 Setup SQLite database schema for user registration in `backend/src/models/`
- [X] T008 Implement password encryption with bcrypt in registration service
- [X] T009 Implement authentication/session management (JWT preferred) in `backend/src/services/`
- [X] T010 Setup API endpoints for login, registration, and CRUD in `backend/src/api/`
- [X] T011 Configure React Router in `frontend/src/`
- [X] T012 Setup base Tailwind CSS config and theme

---

## Phase 3: User Story 1 - Home Page with Sidebar (Priority: P1)

**Goal**: User sees sidebar with 4 icons (Home, Edit, Search, Login/Logoff)
**Independent Test**: Load home page, verify sidebar icons and navigation

- [X] T013 [P] Create Sidebar component in `frontend/src/components/Sidebar.jsx` using Tailwind sidebar template
- [X] T014 [P] Add Heroicons for Home, Edit, Search, Login/Logoff
- [X] T015 [P] Implement navigation logic for sidebar icons
- [X] T016 [P] Add sidebar to main layout in `frontend/src/pages/Home.jsx`
- [ ] T017 [P] Write tests for sidebar navigation

**Checkpoint**: Sidebar functional and testable independently

---

## Phase 4: User Story 2 - Navbar Navigation (Priority: P2)

**Goal**: User sees navbar with 3 icons (Home, Search, Logon, Registration)
**Independent Test**: Load any page, verify navbar icons and navigation

- [X] T018 [P] Create Navbar component in `frontend/src/components/Navbar.jsx` using Tailwind navbar template
- [X] T019 [P] Add Heroicons for Home, Search, Logon, Registration
- [X] T020 [P] Implement navigation logic for navbar icons
- [X] T021 [P] Add navbar to main layout in all pages
- [ ] T022 [P] Write tests for navbar navigation

**Checkpoint**: Navbar functional and testable independently

---

## Phase 5: User Story 3 - Login and Registration Pages (Priority: P3)

**Goal**: User can log in and register with required fields
**Independent Test**: Submit forms, verify validation and navigation

- [ ] T023 [P] Create Login page in `frontend/src/pages/Login.jsx` using Tailwind sign-in form template
- [ ] T024 [P] Create Registration page in `frontend/src/pages/Registration.jsx` using Tailwind registration form template
- [ ] T025 [P] Implement form validation for required fields
- [ ] T026 [P] Connect forms to backend API using Axios
- [ ] T027 [P] Handle login/registration errors and feedback
- [ ] T028 [P] Write tests for login/registration flows

**Checkpoint**: Login and registration functional and testable independently

---

## Phase N: Polish & Cross-Cutting Concerns

- [ ] T029 [P] Documentation updates in `/docs/`
- [ ] T030 Code cleanup and refactoring
- [ ] T031 Performance optimization for navigation and forms
- [ ] T032 [P] Additional unit/integration tests
- [ ] T033 Security hardening (review encryption, session management)
- [ ] T034 Run quickstart.md validation
- [ ] T035 [P] Implement explicit error handling for network/server errors in frontend and backend

---

## Dependencies & Execution Order

- **Setup (Phase 1)**: No dependencies
- **Foundational (Phase 2)**: Depends on Setup completion
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can proceed in parallel or sequentially (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all user stories being complete

### Parallel Example: User Story 1

- T013, T014, T015, T016 can run in parallel (different files)
- T017 (tests) can run after implementation if TDD requested

---

## Implementation Strategy

- MVP First: Complete Setup + Foundational + User Story 1
- Incremental: Add User Story 2, then User Story 3
- Parallel: Team can work on sidebar, navbar, and forms in parallel after foundational tasks

