// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal,
} from "@graphprotocol/graph-ts";

export class JobAdded extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save JobAdded entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type JobAdded must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("JobAdded", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): JobAdded | null {
    return changetype<JobAdded | null>(
      store.get_in_block("JobAdded", id.toHexString()),
    );
  }

  static load(id: Bytes): JobAdded | null {
    return changetype<JobAdded | null>(store.get("JobAdded", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get CdAPI_id(): BigInt {
    let value = this.get("CdAPI_id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set CdAPI_id(value: BigInt) {
    this.set("CdAPI_id", Value.fromBigInt(value));
  }

  get title(): string {
    let value = this.get("title");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set title(value: string) {
    this.set("title", Value.fromString(value));
  }

  get company(): string {
    let value = this.get("company");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set company(value: string) {
    this.set("company", Value.fromString(value));
  }

  get min_salary_usd(): BigInt {
    let value = this.get("min_salary_usd");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set min_salary_usd(value: BigInt) {
    this.set("min_salary_usd", Value.fromBigInt(value));
  }

  get max_salary_usd(): BigInt {
    let value = this.get("max_salary_usd");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set max_salary_usd(value: BigInt) {
    this.set("max_salary_usd", Value.fromBigInt(value));
  }

  get location_iso(): string {
    let value = this.get("location_iso");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set location_iso(value: string) {
    this.set("location_iso", Value.fromString(value));
  }

  get job_type(): string {
    let value = this.get("job_type");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set job_type(value: string) {
    this.set("job_type", Value.fromString(value));
  }

  get degree_required(): boolean {
    let value = this.get("degree_required");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set degree_required(value: boolean) {
    this.set("degree_required", Value.fromBoolean(value));
  }

  get description(): string {
    let value = this.get("description");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set description(value: string) {
    this.set("description", Value.fromString(value));
  }

  get url(): string {
    let value = this.get("url");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set url(value: string) {
    this.set("url", Value.fromString(value));
  }

  get created_at(): string {
    let value = this.get("created_at");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set created_at(value: string) {
    this.set("created_at", Value.fromString(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}