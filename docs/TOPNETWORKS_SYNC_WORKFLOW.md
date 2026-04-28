# TopNetworks Sync Workflow

This repository participates in the TopNetworks multi-repo sync workflow for the shared Next.js financial platform architecture.

## Central orchestrator

Use the workspace-level orchestrator before propagating shared changes across TopNetworks properties:

- Skill: `/Users/macbookpro/GitHub/.agents/skills/topnetworks-sync-orchestrator/SKILL.md`
- Manifest: `/Users/macbookpro/GitHub/.agents/skills/topnetworks-sync-orchestrator/repositories.json`
- Runbook: `/Users/macbookpro/GitHub/.agents/skills/topnetworks-sync-orchestrator/SYNC_RUNBOOK.md`
- CLI: `/Users/macbookpro/GitHub/.agents/skills/topnetworks-sync-orchestrator/scripts/topnetworks-sync.mjs`

## Local adaptation requirements

- Brand: TopFinanzas
- Market: Mexico
- Locale: Spanish (`es-MX`)
- Currency: MXN
- Canonical domain: `https://topfinanzas.com/mx`
- Production port: `3030`

Preserve Spanish copy, Mexico-specific financial terminology, `soluciones-financieras` and `finanzas-personales` route families, CONDUSEF/PROFECO-aware language, MXN schema/currency values, and `topfinanzas.com/mx` canonical URLs when applying synchronized changes.

## Safe commands

From `/Users/macbookpro/GitHub`:

```bash
node .agents/skills/topnetworks-sync-orchestrator/scripts/topnetworks-sync.mjs status --repo topfinanzas-mx
node .agents/skills/topnetworks-sync-orchestrator/scripts/topnetworks-sync.mjs parity --repo topfinanzas-mx
node .agents/skills/topnetworks-sync-orchestrator/scripts/topnetworks-sync.mjs validate --repo topfinanzas-mx --dry-run
```

Do not commit, push, or deploy as part of a sync task unless explicitly requested.
