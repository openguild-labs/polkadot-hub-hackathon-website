export interface FAQItem {
  label: string
  content: string
}

export const faqs: FAQItem[] = [
  {
    label: "What is Polkadot Hub?",
    content: `Polkadot Hub—a dedicated, unified chain that enables permissionless smart contract deployment and is EVM-compatible, allowing developers to deploy Solidity smart contracts directly on Polkadot for the first time. It consolidates core system functions—DOT token, staking, governance, bridges—into one streamlined environment.

Your application on Polkadot Hub can:

- Communicate seamlessly with existing parachains
- Bridge and interact with other EVM-compatible chains
- Leverage XCM (Cross-Consensus Messaging) as a native feature, not an afterthought
- Build once, and scale everywhere—across the Polkadot ecosystem and beyond`,
  },
  {
    label: "Who is organizing this hackathon?",
    content: `This hackathon is co-led by OpenGuild and Web3 Foundation (W3F), with support from Polkadot ecosystem partners, regional community leaders, and global accelerators.`,
  },
  {
    label: "Who can participate?",
    content: `Anyone can join, including:

- Developers (Web2 or Web3)
- Designers
- Product managers
- Students
- Startup founders

You do not need prior Polkadot experience.`,
  },
  {
    label: "Is the hackathon online or offline?",
    content: `The hackathon is fully online. All activities—workshops, hacking, and mentoring—take place virtually.`,
  },
  {
    label: "When's the hackathon happening?",
    content: `- Registration Opens: February 16, 2026
- Hacking Period Starts: March 1, 2026
- Project Submission Deadline: March 20, 2026
- Demo Day: March 24-25, 2026`,
  },
  {
    label: "What's happening during the hackathon?",
    content: `During the online hacking phase, teams will:

- Build their MVP
- Join weekly office hours with mentors
- Receive technical and product feedback
- Share progress via Discord standups`,
  },
  {
    label: "What can I build during the hackathon?",
    content: `You can build anything related to AI, DeFi, and consumer products that solve particular problems on the application layer. However, we encourage you to find and build an idea from [this curated list](https://build.openguild.wtf/explore-ideas?category=all) that we prepared, which generates better value for the ecosystem.`,
  },
  {
    label: "What's the opportunity for winning teams?",
    content: `Compete for a share of the $30,000 USD prize pool!

- Receive application curation support from OpenGuild for the future DeFi Builders Program.
- Get plugged into the marketing pipeline (social posts, AMAs, newsletters, user acquisition campaigns, meetup promotions) from Polkadot Officials, Polkadot APAC, OpenGuild, and Local/Ecosystem Partners.
- A dedicated founder-led marketing video campaign.
- Get prioritized for audit subsidy assessment via Polkadot Assurance Legion. (If your project is eligible—read more [here](https://dotpal.io/funding/smart_contracts))`,
  },
  {
    label: "What's the judging criteria?",
    content: `Projects are evaluated based on:

- Technical implementation
- Use of Polkadot Hub features
- Innovation & impact
- UX and adoption potential
- Team execution and presentation`,
  },
  {
    label: "Which tech stack can I use?",
    content: `Depending on your preferences:

- Solidity (EVM-compatible smart contracts)
- Frontend: React, Next.js, Vue, etc.`,
  },
  {
    label: "Do I need to be present at Demo Day to win?",
    content: `Yes. Since the hackathon is online, you must present at Demo Day, have a strong pitch deck, and turn on your camera to be eligible to win.`,
  },
  {
    label: "How do I get help during the hackathon?",
    content: `You'll get support via:

- OpenGuild's Discord help channels
- Polkadot Hackathon Telegram chat
- Weekly office hours
- Direct mentor feedback through your preferred platform.
- Community AMAs`,
  },
  {
    label: "How do I submit my project?",
    content: `You will submit via the hackathon platform through "Register as Hacker", including:

- GitHub repository (have to be open-source)
- Project description
- Demo video (1-3 minutes)
- Pitch deck (optional but recommended)`,
  },
]
