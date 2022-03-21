import { DateTime } from "luxon";
import Id from "../utils/Id";
import Value from "../utils/Value";

export type MedicalPrescription = {
  id: Id;
  date: DateTime;
  doctorId: Id;
  patientId: Id;
  drugId: Id;
  posology: Posology;
  duration: Duration;
  allowSubstitute: boolean;
  comments: string;
};

export type Posology = {
  quantity: Quantity;
  periodicity: Periodicity | Frequency;
};

type Quantity = Value<"UNIT">;

type Periodicity = Value<"DAY" | "WEEK" | "MONTH" | "YEAR">;

type Frequency = Value<"TIMES PER DAY">;

export type Duration = Value<"DAY" | "WEEK" | "MONTH" | "YEAR">;
