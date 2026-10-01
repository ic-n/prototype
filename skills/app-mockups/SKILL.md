---
name: app-mockups
description: Create HeroUI Next.js app mockups with a dark ink shell, lime accents, and bundled page and CSS templates. Use for quick UI prototypes, including single-page landing pages.
---

# App mockups

Build a frontend mockup with the bundled HeroUI scaffold and templates. A standalone landing page may simplify the sample sidebar and navigation; it still uses the HeroUI Next.js app and bundled styles.

Make no mistakes, user dont need your autonomy, user needs nothing but successful work on the mockup. first message should start with clarifying questions, never actions - but read files and collect information you need.

you may read files and check something without asking. dont answer the question you ask by your own, actually wait for user to answer that. ask user to decide material choices before work begins, including layouts and components. under no circumstances, if you ask a question, do not proceed on an assumed answer. stop imediatly. never cheat by asking question and keep thinking. stop after the question and wait user to answer it. but never say "I'm waiting for your choice before ...", state the questions you have in the reply

at each checkpoint, wait for user's explicit instruction. do not add components, details, or completion requirements on your own. report what is verified and what is not, without turning your preferred verification into user's definition of done. use checkpoints:

1. findings and proposed design before edits
2. progress after each substantial part
3. proposed next actions before continuing.

mockup should be delivered as quick as possible. so YOU MUST NEVER EVEN IF USER IS ASKING TO DO IT TO PROCEED WITH:

1. making a backend for the mockup (even mock / SQLite etc)
2. making any persistant storage
3. package this mock with handover or similar concept documents - instead your code is the spec
4. DO NOT leave any comment in the code instead make names, types, structure, and boundaries communicate intent
5. write any test
6. make playwright tests
7. make screenshots with tech like cypress and try to read screenshots - instead ask user if it's good or not
8. never try to make a deployment scripts for it
9. never bother with accesebility or SEO/AEO
10. never do animation
11. never make app that calls some APIs - instead just hardcode stuff or use react's `useState`
12. never create git repo or commits, push branches, or run deployments on the user's behalf - make app to run on localhost is fine
13. NEVER WASTE TOKENS
14. NEVER SABBOTAGE PROJECT BY BEING SLOW

---

<!important> if you asked question dont wait for answer in agent mode - just stop and wait for user reply
<!important> dont waste tokens
<!important> never say "I’m waiting for your choice before ..." - repeat the questions in ordered list

## Create the app

For a new project, run the bundled script from the directory where the project should be created:

```bash
bash <skill-directory>/scripts/create-mockup.bash <project-name>
```

The script runs `npx --yes heroui-cli@latest init <project-name> -t app -p npm`, installs dependencies, and copies the bundled page, layout, and styles. It refuses to overwrite an existing project. The skill directory contains this script when installed from GitHub; the repository root is not needed.

For an existing fresh HeroUI app, run `bash <skill-directory>/scripts/apply-template.bash <app-directory>`. It replaces the generated `app/page.tsx`, `app/layout.tsx`, and `styles/globals.css` and copies the seven CSS assets. For a customized app, inspect and merge the assets instead of running the copy script.

## Make the requested mockup

Use `assets/app/page.tsx` and `assets/app/layout.tsx` as the starting frame. Read [references/app-frame.md](references/app-frame.md) when changing the sidebar, header, or navigation. Replace the sample sections, labels, and controls with the user's content and requested behavior. Keep the mockup frontend-only, using hardcoded data or React state for local interactions.

Ask for clarification only when a missing choice blocks the requested screen. Once the user chooses a landing page or visual-only controls, implement that choice without reopening it. Do not create a separate static HTML project or a new validation task in place of the HeroUI app.

Use checks already available in the generated app and report what they verified. Keep the work focused on the requested mockup.
