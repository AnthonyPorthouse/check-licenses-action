# Design

## Flow

1. Find manifests in current branch
    + If none is found exit early.
1. Find matching manifests in target branch
1. Find differences between manifests
    + Additions, Removals and Updates are what we care about
1. For each difference fetch License information from both sides
1. Report any differences
1. Create PR message with differences in a table

## Output Example

| Name | Change Type | Version Change | License Change |
|---|---|---|---|
| A Package | Added | N/A -> 1.0.0 | N/A -> MIT |
| Another Package | Updated | 0.1.0 -> 1.0.0 | ISC -> MIT |
| Removed Package | Removed | 0.1.0 -> N/A | ISC -> N/A |
