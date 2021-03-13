export const jsonSchemaTypes = {
  bigint: { type: "integer" },
  bigserial: { type: "integer" },
  bit: { type: "string" },
  "bit varying": { type: "string" },
  boolean: { type: "boolean" },
  box: { type: "string" },
  bytea: { type: "string" },
  character: { type: "string" },
  "character varying": { type: "string" },
  cidr: [
    { type: "string", format: "ipv4" },
    { type: "string", format: "ipv6" },
  ],
  circle: { type: "string" },
  date: { type: "string", format: "date" },
  "double precision": { type: "number" },
  hstore: { type: "object" },
  inet: [
    { type: "string", format: "ipv4" },
    { type: "string", format: "ipv6" },
  ],
  integer: { type: "integer" },
  interval: { type: "string" },
  json: { type: "object" },
  jsonb: { type: "object" },
  line: { type: "string" },
  lseg: { type: "string" },
  macaddr: { type: "string", pattern: "^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$" },
  money: { type: "number" },
  numeric: { type: "number" },
  path: { type: "string" },
  point: { type: "string" },
  polygon: { type: "string" },
  real: { type: "number" },
  smallint: { type: "integer" },
  smallserial: { type: "integer" },
  serial: { type: "integer" },
  text: { type: "string" },
  "time without time zone": { type: "string", format: "time" },
  "time with time zone": { type: "string", format: "time" },
  "timestamp without time zone": { type: "string", format: "date-time" },
  "timestamp with time zone": { type: "string", format: "date-time" },
  tsquery: { type: "string" },
  tsvector: { type: "string" },
  txid_snapshot: { type: "string" },
  uuid: { type: "string", pattern: "^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$" },
  xml: { type: "string" },
  "user-defined": { type: "string" },
};
