export type PatientType = {
  id?: string;
  createdAt?: string | Date;
  codeAg: string;
  isSamplingComstock: boolean;
  roomName: string;
  assessmentDate: string;
  roomNumber: string;
  mrsDate: string;
  rmNumber: string;
  name: string;
  dob: string;
  medicalDiagnose: string;
  diet: string;
  weightMrs: string;
  armCircumference: number;
  estimatedWeight: number;
  actualWeight: number;
  heightMrs: number;
  imtOrWaterLow: string;
  imt: number;
  waterLow: number;
};
