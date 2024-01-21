import { JobAdded as JobAddedEvent } from "../generated/CdAPI/CdAPI"
import { JobAdded } from "../generated/schema"

export function handleJobAdded(event: JobAddedEvent): void {
  let entity = new JobAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.CdAPI_id = event.params.id
  entity.title = event.params.title
  entity.company = event.params.company
  entity.min_salary_usd = event.params.min_salary_usd
  entity.max_salary_usd = event.params.max_salary_usd
  entity.location_iso = event.params.location_iso
  entity.job_type = event.params.job_type
  entity.degree_required = event.params.degree_required
  entity.description = event.params.description
  entity.url = event.params.url
  entity.created_at = event.params.created_at

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
