import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt } from "@graphprotocol/graph-ts"
import { JobAdded } from "../generated/schema"
import { JobAdded as JobAddedEvent } from "../generated/CdAPI/CdAPI"
import { handleJobAdded } from "../src/cd-api"
import { createJobAddedEvent } from "./cd-api-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let id = BigInt.fromI32(234)
    let title = "Example string value"
    let company = "Example string value"
    let min_salary_usd = BigInt.fromI32(234)
    let max_salary_usd = BigInt.fromI32(234)
    let location_iso = "Example string value"
    let job_type = "Example string value"
    let degree_required = "boolean Not implemented"
    let description = "Example string value"
    let url = "Example string value"
    let created_at = "Example string value"
    let newJobAddedEvent = createJobAddedEvent(
      id,
      title,
      company,
      min_salary_usd,
      max_salary_usd,
      location_iso,
      job_type,
      degree_required,
      description,
      url,
      created_at
    )
    handleJobAdded(newJobAddedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("JobAdded created and stored", () => {
    assert.entityCount("JobAdded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "JobAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "title",
      "Example string value"
    )
    assert.fieldEquals(
      "JobAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "company",
      "Example string value"
    )
    assert.fieldEquals(
      "JobAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "min_salary_usd",
      "234"
    )
    assert.fieldEquals(
      "JobAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "max_salary_usd",
      "234"
    )
    assert.fieldEquals(
      "JobAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "location_iso",
      "Example string value"
    )
    assert.fieldEquals(
      "JobAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "job_type",
      "Example string value"
    )
    assert.fieldEquals(
      "JobAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "degree_required",
      "boolean Not implemented"
    )
    assert.fieldEquals(
      "JobAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "description",
      "Example string value"
    )
    assert.fieldEquals(
      "JobAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "url",
      "Example string value"
    )
    assert.fieldEquals(
      "JobAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "created_at",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
