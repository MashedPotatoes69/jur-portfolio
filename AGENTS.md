<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project architecture

- Keep the public portfolio as a single-page profile at `/`; it keeps Jur's introduction, work, skills, and contact details immediately scannable.
- Store portfolio photography as bundled assets under `src/assets`; this prevents the live site from depending on temporary Google Drive links.
