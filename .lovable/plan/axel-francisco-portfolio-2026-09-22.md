# Axel Francisco Portfolio

## Goal
Build an accessible, responsive developer portfolio inspired by Jovin Alud’s dashboard-style website, using the uploaded layout screenshot as reference and Axel’s portrait as the actual profile image.

## Visual direction
- Use the supplied Crimson `#D7263D` and Nights `#02182B` palette, translated into semantic theme colors with strong text contrast.
- Use Poppins throughout, with larger base text, clear hierarchy, generous spacing, visible focus states, and controls sized for elderly and visually impaired visitors.
- Recreate the reference composition: fixed/collapsible left navigation, bold introduction, horizontal tools strip, and an organized card-based main area.
- Add subtle animated contour/path lines behind the content, similar to the reference, without reducing readability; respect reduced-motion settings.
- Use Phosphor icons and restrained transitions.

## Pages and navigation
- **Home:** “Axel Francisco — Web & Mobile App Developer,” concise introduction, profile portrait, primary email action, Upwork/GitHub links, project/service highlights, and animated tools marquee.
- **Projects:** Four detailed project cards for DailyFrame, Sulasko Cal, HopeHRS, and APK Build Service, including the supplied descriptions and technology labels.
- **Credentials:** An intentionally editable credentials area with clear code comments showing exactly where achievements and certifications can be added; show a polished “credentials coming soon” state until details are supplied.
- **Services:** Web App Development, Mobile App Development, Backend & Database, and Authentication & Integrations.
- **Contact:** Email action for `rinuagold@gmail.com`, plus Upwork and GitHub profile links.
- Use real page URLs for every navigation item so each section is shareable and search-friendly.

## Interactions and responsive behavior
- Desktop: persistent left rail with active-page highlighting and compact collapse mode.
- Mobile/tablet: compact header and accessible slide-out navigation that can always be reopened.
- Tools marquee featuring Claude, Supabase, ChatGPT, React, Expo, Vite, GitHub, and related tools; pause on hover/focus and disable continuous motion when reduced motion is requested.
- All links, navigation items, and calls to action will be keyboard accessible with descriptive labels.

## SEO and quality
- Add unique title, description, Open Graph title/description/type, Twitter card, and canonical URL metadata for every page.
- Use semantic headings, descriptive portrait alt text, crawlable navigation, and clean page copy.
- Keep the uploaded design screenshots as references only; include only Axel’s uploaded portrait in the website.
- Verify desktop and mobile layouts, navigation, marquee behavior, external links, email action, text overflow, and browser console health in the live preview.
- Open the completed preview for review.

## Technical details
- Keep the existing TanStack Start + React 19 + Vite 7 project architecture and Tailwind CSS v4 styling.
- Use semantic CSS tokens for the supplied palette and reusable shared layout components.
- Store the profile portrait through the project’s asset delivery flow.
- No database or account system is needed for this portfolio.
