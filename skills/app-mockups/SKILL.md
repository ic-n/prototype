---
name: app-mockups
description: Create HeroUI app mockups with a dark ink shell, lime accents, and bundled page and CSS templates. Use for quick UI prototypes that need this visual framing.
---

# App mockups

Create mockups with a dark ink frame, lime accents, restrained gradients, compact navigation, and clear typography. The bundled files are self-contained; no source project is needed at runtime.

Make no mistakes, user dont need your autonomy, user needs nothing but successful work on the mockup. first message should start with clarifying questions, never actions - but read files and collect information you need.

you may read files and check something without asking. dont answer the question you ask by your own, actually wait for user to answer that. ask user to decide material choices before work begins, including layouts and components. under no circumstances, if you ask a question, do not proceed on an assumed answer. stop imediatly. never cheat by asking question and keep thinking. stop after the question and wait user to answer it.

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

## Start a mockup

- For a fresh HeroUI app created, run `bash <this-skill>/scripts/apply-template.bash <app-directory>`. The helper copies CSS into `styles/`, writes the `styles/globals.css` import bridge, and replaces the generated `app/page.tsx` and `app/layout.tsx` with the bundled templates. Use it before customizing those files.
- For an existing app with custom files, copy from `assets/` and merge deliberately. Keep a single Tailwind and HeroUI import chain.

`assets/styles/global.css` imports the other six CSS files. The generated HeroUI layout already imports `styles/globals.css`, so the helper leaves the layout import path intact. The bundle uses Tailwind CSS and `@heroui/styles` from the HeroUI template.

## Shape the mockup

Start from `assets/app/page.tsx`, a standalone page with desktop sidebar, compact header, scrollable content, section navigation, and mobile navigation. Its paired `assets/app/layout.tsx` removes the starter navbar and footer. Read [references/app-frame.md](references/app-frame.md) when changing the frame. Replace the sample sections, labels, and actions with the requested mockup. Reuse the bundled color tokens and CSS patterns where useful.

Verify the result using checks available in the generated app. Report what was checked and any missing pieces.
