import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import { JobAdded } from "../generated/CdAPI/CdAPI"

export function createJobAddedEvent(
  id: BigInt,
  title: string,
  company: string,
  min_salary_usd: BigInt,
  max_salary_usd: BigInt,
  location_iso: string,
  job_type: string,
  degree_required: boolean,
  description: string,
  url: string,
  created_at: string
): JobAdded {
  let jobAddedEvent = changetype<JobAdded>(newMockEvent())

  jobAddedEvent.parameters = new Array()

  jobAddedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  jobAddedEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromString(title))
  )
  jobAddedEvent.parameters.push(
    new ethereum.EventParam("company", ethereum.Value.fromString(company))
  )
  jobAddedEvent.parameters.push(
    new ethereum.EventParam(
      "min_salary_usd",
      ethereum.Value.fromUnsignedBigInt(min_salary_usd)
    )
  )
  jobAddedEvent.parameters.push(
    new ethereum.EventParam(
      "max_salary_usd",
      ethereum.Value.fromUnsignedBigInt(max_salary_usd)
    )
  )
  jobAddedEvent.parameters.push(
    new ethereum.EventParam(
      "location_iso",
      ethereum.Value.fromString(location_iso)
    )
  )
  jobAddedEvent.parameters.push(
    new ethereum.EventParam("job_type", ethereum.Value.fromString(job_type))
  )
  jobAddedEvent.parameters.push(
    new ethereum.EventParam(
      "degree_required",
      ethereum.Value.fromBoolean(degree_required)
    )
  )
  jobAddedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  jobAddedEvent.parameters.push(
    new ethereum.EventParam("url", ethereum.Value.fromString(url))
  )
  jobAddedEvent.parameters.push(
    new ethereum.EventParam("created_at", ethereum.Value.fromString(created_at))
  )

  return jobAddedEvent
}
