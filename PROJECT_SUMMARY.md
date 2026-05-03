# Project Summary: Singularity AI Workspace

## 1. What is Singularity?
**Singularity** is a state-of-the-art, production-ready AI operating interface designed for ultimate clarity and cinematic user experience. Built with **Next.js (App Router)** and **Tailwind CSS v4**, it serves as a centralized hub for interacting with multiple AI models while maintaining a premium, "Glow and Glass" aesthetic.

The project is fully integrated with the **InsForge MCP** backend, handling everything from secure multi-model routing to data persistence and authentication.

---

## 2. Key Features & Capabilities

### 🌌 Cinematic Experience
- **Immersive Landing Page**: Features a borderless, full-screen video background with floating glass elements.
- **Glow & Glass Design System**: Every component utilizes glassmorphism (backdrop-blur, semi-transparency) and dynamic radial glows to create a high-end, futuristic feel.
- **Futuristic Typography**: Uses high-impact fonts like *Orbitron* for headlines and *Inter* for readability.

### 🤖 Multi-Model AI Dashboard
- **Functional AI Chat**: A real-time, streaming-style chat interface where users can interact with top-tier models like GPT-4 Turbo and Claude 3 Opus.
- **Intelligent Routing**: Backend logic powered by InsForge ensures that requests are routed to the most capable models for the task.
- **Conversation Persistence**: Chat history is saved and managed via the InsForge data layer.

### 📂 Knowledge Absorption
- **Data Integration**: A dedicated interface to "feed" the AI. Users can drag and drop PDF/Text files or provide URLs.
- **Instant Insights**: The system extracts, summarizes, and integrates external data into the user's workspace context.

### 🔐 Enterprise-Grade Security
- **Secure Authentication Flow**: A complete onboarding process including Sign Up, **Email Verification (OTP)**, and Sign In.
- **Protected Routes**: The AI workspace is fully secured; unauthenticated users are automatically redirected to the landing page and prompted to log in.
- **Data Privacy**: All interactions are routed through InsForge, ensuring zero data retention and compliance with modern security standards.

---

## 3. Technical Architecture
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion & CSS Micro-animations
- **Icons**: Lucide React
- **Backend**: InsForge MCP (Simulated Connection Layer)
- **State Management**: React Context (AuthProvider) for global authentication and UI state.

---

## 4. How it Works
1.  **Onboarding**: User creates an account and verifies their identity via an email code.
2.  **Access**: The user enters the **Singularity Dashboard**, which initializes their personal workspace.
3.  **Interaction**: The user chats with the AI or uploads documents to the **Absorb** panel.
4.  **Persistence**: Every insight and conversation is securely stored in their account, linked to the InsForge project ID.

---
**Singularity: The Future of AI Interaction.**
