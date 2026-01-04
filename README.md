# Rafpot Labs
This project will become a base for most of my projects. I've been inspired by this [vanilla css article](https://www.zolkos.com/2025/12/03/vanilla-css-is-all-you-need), written by Rob Zolkos. I have a deep love for (attempting) building beautiful systems, and I've been quite unhappy with my path of late. Tailwind this, Shadcn that. Incredible tools that saved me a ton of hours, but I also just enjoy doing everything and learning the tiny details.

So this project is all about getting back into these details - slowly.

## Core Idea
I still plan to use SvelteKit. But i will opt for vanilla CSS (first time in a long time).
I will also opt for [bits-ui](https://www.bits-ui.com/) and style everything from scratch. 
Since SvelteKit scopes styling, it won't really be difficult. 

I also want to create a color system that I can use across all of my projects (of which there will be many).

## Stack
- *[SvelteKit](https://svelte.dev/)*: Metaframework of choice
- *[Bits UI](https://www.bits-ui.com/)* for accessible headless components
- *[Runed](https://runed.dev/docs)*: Helper library for all things Svelte
- *[PocketBase](https://pocketbase.io/)*: for most database needs
- *[Convex](https://www.convex.dev/)*: for heavy database needs
- *[Zod](https://zod.dev/)*: Schema validation

## Tasks
- [X] Build a good CSS base
- [ ] Build a good base of UI Components that will feed all of my projects
   - ** Key Lessons To Learn**
      - Learn some modern css like `@container`, `:has`, `:is` and so on.
      - [X] Implement `oklch` system slowly and build an intuition towards it.
   - **Core Components**
      - [ ] Input(s)
      - [ ] Select
      - [ ] Checkbox
      - [ ] Form -> tricky component overall, build my own pattern for it
         - Will initially be worse than prebuilts, but eh. More learning.
      - [X] Button
      - [ ] Accordion
      - [ ] Alert Dialog
      - [ ] Calendar
      - [ ] Combobox
      - [ ] Date Field
      - [ ] Date Picker
      - [ ] Dialog
      - [ ] Dropdown
      - [ ] Label
      - [ ] Navigation Menu
      - [ ] Popover
      - [ ] Progress
      - [ ] Radio group
      - [ ] Separator (line)
      - [ ] Slider
      - [ ] Switch
      - [ ] Tabs
      - [ ] Toggle 
      - [ ] Toggle Group
      - [ ] Toolbar
      - [ ] Tooltip
   - ** Potential Components** *Or just for later*
      - [ ] Context Menu (?)
      - [ ] Meter
      - [ ] App Shell -> potentially complex
      - [ ] Sidebar
      - [ ] Works with App Shell
      - [ ] Works well with mobile -> turns into an app like ui? 
      - [ ]


## CSS Things to look into
- [X] Cascade Layers (`@layer`)
   - Create layers of CSS.
   - You can import and SET the imported file into a layer
      - `@import "./reset"  layer(reset);` 
   - Just create the order of your css essentially
- [ ] View Transitions
- [ ] Container Queries
   - The element knows how much space they have and know what they are inside of
   - There is a quantity-query??
- [X] oklch color system
   - An interesigly simple way to describe a color.
   - Lightness, 0-100%. Chroma (saturation sort of), 0-0.5. Hue: 0-360. Alpha, 0-100%.
- [ ] Field Sizing
   - `field-sizing: content;` -> Grow automatically as you type into an input/textarea/select
   - Add defensive styles:
   ```CSS
      textarea {
         min-block-size: 31h;
         max-block-size: 80svh;
         min-inline-size: var(--size-content-1);
         max-inline-size: var(--size-content-1);
      }
   ```
   - [ ] Color Scheme
      - Enables light and dark modes easily.
      - You can set colors with this system: `color: light-dark(white, black);`
   - [ ] [Scroll Driven Animation](https://youtu.be/QW6GECIzvsw?t=1001)
   - [ ] Linear() -> for animations
   - [ ] Text Wrap
      - `text-wrap: balance;`
      - `text-wrap: pretty;`
   - [ ] Scrollbar styling (simple)
   - [X] Starting Style
   - [ ] `:has`, `:is`, `:where` etc.