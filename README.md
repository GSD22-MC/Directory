# Service Provider/Client Connection Platform - MVP

This project lays out the minimum viable product for a web application that helps clients find trusted service providers and enables providers to manage and quote on job requests.

## Prerequisites
- [Node.js](https://nodejs.org/) (includes `npm`)

## Installation
Run `npm install` in both the client and server directories:
```bash
cd client
npm install

cd ../server
npm install
```

## Running Development Servers
Use separate terminals for the front‑end and back‑end:
```bash
# Client
cd client
npm start

# Server
cd server
npm run dev
```

## Directory Structure
```
/
├── client/   # Front-end application
├── server/   # Back-end API
└── README.md
```

## Overview
Prompt: Generate Initial JavaScript MVP Build for a Service Provider/Client Connection Platform
Goal: Create the foundational code structure for a Minimum Viable Product (MVP) of a web application designed to connect clients seeking services (e.g., trades, local professionals) with service providers, specifically addressing pain points related to finding trusted providers, clear communication, getting quotes, and managing qualified leads, as identified in source materials.
Technology Stack: The MVP will be developed using JavaScript. For the front-end, a modern framework like React, Vue.js, or Svelte is recommended for component-based structure and efficient rendering. For the back-end, Node.js with Express.js is suitable. Data persistence can initially use a simple database like SQLite or even file-based storage for minimal setup.
MVP Features to Include:
1. User Authentication: Basic user registration (Client and Service Provider roles) and login functionality. Secure password handling (hashing) is essential.
2. Service Provider Profile Creation: A form for providers to create a profile including fields for:
   ◦ Business Name
   ◦ Service Categories (e.g., Plumbing, Electrician, Web Design)
   ◦ Service Location(s)
   ◦ Description of Services
   ◦ Contact Information (initially for profile display, not direct contact outside app)
3. Client Job Request Submission: A form for clients to create a new service request including fields for:
   ◦ Job Title
   ◦ Detailed Description of Work Needed
   ◦ Location of Job
   ◦ Desired Completion Timeline (e.g., "within 2 weeks")
   ◦ Option to attach photos (initial MVP can skip file uploads, maybe just text description)
4. Provider Job Request Listing/Filtering: Service providers should see a list of open job requests relevant to their service categories and location. Basic filtering/search functionality is needed.
5. Quote Submission (Provider Side): A form within the specific job request view allowing a provider to submit a quote including:
   ◦ Quoted Price
   ◦ Estimated Timeline for Completion
   ◦ Any specific notes or terms for this quote.
6. Quote Review (Client Side): Clients should see the quotes submitted for their job request. UI elements to view quote details and mark a quote as 'Accepted' or 'Rejected'.
7. Basic In-App Messaging: A simple messaging interface allowing communication only between the client who posted a job request and the providers who have submitted a quote for that specific request.
8. Basic Review Submission (Client Side): After a quote is marked 'Accepted' (or perhaps a simple 'Mark as Completed' action initiated by the client), allow the client to submit a simple text review and a star rating (e.g., 1-5) for the provider.
9. Review Display (Provider Profile): Display the average rating and a list of submitted text reviews on the service provider's public profile.
Technical Details & Structure:
• Front-end: Use a component-based architecture. Implement basic routing to handle different views (login, registration, client dashboard, provider dashboard, job request details, provider profile). State management should be simple for this MVP (e.g., React Context, Vuex Lite, or simple component state). API calls to the back-end for data fetching and submission. Ensure the front-end is mobile-responsive.
• Back-end (Node.js/Express.js):
   ◦ Set up RESTful API endpoints for user authentication, creating/fetching user profiles, creating/fetching job requests, submitting/fetching quotes, sending/receiving messages, and submitting/fetching reviews.
   ◦ Implement basic request validation.
   ◦ Connect to the chosen database (SQLite for simplicity). Define necessary database schemas/models for Users, Job Requests, Quotes, Messages, and Reviews.
   ◦ Implement secure authentication middleware (e.g., JWT).
• Database: Set up a basic database structure (e.g., SQLite file).
Exclusions for MVP:
• Complex search filters beyond category/location.
• Real-time messaging (polling is acceptable).
• File uploads (for job request photos or provider portfolios).
• Payment processing integration.
• Advanced scheduling/calendar features.
• Complex user roles or permissions beyond basic Client/Provider.
• Email notifications (in-app notifications are sufficient for MVP).
• Detailed provider verification workflows (basic profile creation is enough).
Output: Provide the initial project structure (directories and key files), basic setup instructions (e.g., installing dependencies), and skeletal code for the core components and back-end routes, demonstrating how the front-end and back-end will interact for at least one core flow (e.g., Client creating a job request and Provider viewing it). Include necessary database schema definitions. Focus on a clean, modular structure for future expansion.

--------------------------------------------------------------------------------
